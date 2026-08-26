# lm-llm-price-tracker

Cross-vendor **LLM API price & promotion radar**. Collects list prices, off-peak / limited-time / launch
promotions and subscription plan offers from many sellers (first-party vendors, aggregators, inference hosts),
normalizes everything to **USD per 1M tokens**, stores it as JSON and renders a comparison in Markdown.

- 📊 **[PRICES.md](PRICES.md)** — generated comparison (cheapest per category, active promos, same-model-different-seller spread, all models)
- 🗂 **[data/prices.json](data/prices.json)** — the normalized dataset (schema in [docs/SCHEMA.md](docs/SCHEMA.md)); daily snapshots in `data/history/`
- 🌐 **[sources/providers.json](sources/providers.json)** — the site registry: provider, site URL, pricing page, console URL, OpenAI-compatible base URL, automation method, login requirement, promotions

Built to run on an [lm-assist](https://github.com/langmartai/lm-assist) node: pages that are JS-rendered or that only
show promotional prices **after login** are captured by driving the node's own Chrome through the lm-assist agent API
(`POST /agent/execute` with `chrome:true`), so the operator logs in once and the tracker reuses the session.

## Quick start

```bash
git clone https://github.com/langmartai/lm-llm-price-tracker && cd lm-llm-price-tracker
node scripts/collect.js --method direct-api            # OpenRouter + LiteLLM (no keys needed) -> data/prices.json + PRICES.md
node scripts/collect.js --method lm-assist-browser     # on an lm-assist node: drive Chrome through every browser-automated site
node scripts/collect.js --only deepseek,volcengine-ark # just these sources
node scripts/collect.js                                # everything that is enabled
node scripts/generate-md.js                            # re-render PRICES.md from data/prices.json
```

Requires Node ≥ 20. No npm dependencies.

## How it works

```
sources/providers.json ──► scripts/collect.js ──► adapter per automation method
   site, pricing url,             │                 ├─ direct-api        openrouter.js  (pricing + off-peak overrides)
   automation, login?,            │                 │                    litellm.js     (vendor list-price cross-check)
   base_url, promotions           │                 ├─ public-page       public-page.js (server-rendered HTML -> rows)
                                  │                 └─ lm-assist-browser lm-assist-browser.js (Claude-in-Chrome on this node)
data/manual/*.json ───────────────┤   (hand-verified prices, login-only captures)
                                  ▼
                        scripts/normalize.js   vendor aliases · categories (functional by name, tier by price) ·
                                  │            USD conversion (CNY_USD_RATE) · promo -> effective price · dedupe by confidence
                                  ▼
                        data/prices.json  +  data/history/YYYY-MM-DD.json
                                  ▼
                        scripts/generate-md.js  ──►  PRICES.md
```

### Automation methods (per site, `automation.method`)

| Method | Runs in CI? | When to use |
|---|---|---|
| `direct-api` | yes | The seller exposes a JSON endpoint (OpenRouter `/api/v1/models`, LiteLLM registry). Highest confidence. |
| `public-page` | yes | Server-rendered pricing page; regex extraction of `model … $in … $out` rows. Low confidence, good for diffs. |
| `lm-assist-browser` | no (needs a node with Chrome) | JS-rendered tables, tabs/accordions, and **login-only** console pricing (promos, coupons, first-month offers). |
| `manual` | — | Anything else: put a JSON file in `data/manual/`. |

Confidence ranking when the same `provider:model` is seen twice: `manual > browser > api > page > web-research` (newest wins on ties).

### Login-only pricing pages

Some consoles (Alibaba Bailian, Volcengine Ark, Baidu Qianfan, SiliconFlow, Zhipu CN …) only show promotional or
account-scoped prices after login. Flow:

1. `login_required_for_pricing: true` + `console_url` in `providers.json`.
2. `node scripts/collect.js --only volcengine-ark` — the browser agent opens the console with the node's Chrome profile.
3. If a login wall appears the agent **stops** (it never types credentials) and the run reports `login-required` with the
   console URL. Sign in once in that Chrome, then re-run: the session persists in the profile.

Adapter details, environment variables and the lm-assist routes used: [docs/AUTOMATION.md](docs/AUTOMATION.md).

## Add a site

```bash
node scripts/add-provider.js --id novita --name "Novita AI" --site https://novita.ai --pricing https://novita.ai/pricing \
  --method lm-assist-browser --base-url https://api.novita.ai/v3/openai --kind inference-host --region global
# login-only console:
node scripts/add-provider.js --id qianfan --name "Baidu Qianfan" --site https://cloud.baidu.com/product/qianfan \
  --pricing https://console.bce.baidu.com/qianfan --console https://console.bce.baidu.com/qianfan --login-required --currency CNY --region cn
```

For a `direct-api` source, add `scripts/adapters/<id>.js` exporting `{ id, collect(provider) }` (return raw rows — see
`openrouter.js`) and register it in `scripts/adapters/index.js`.

## Model categories

- **Functional** (matched by name, first hit wins): `free`, `embedding`, `vision`, `reasoning`, `coding`
- **Price tier** (by list price, when no functional match): `flagship` (≥ $4 in or ≥ $20 out), `mid` (≥ $1 in), `budget`
- **Tags**: every matching rule plus `open-weight`; explicit overrides in `sources/model-overrides.json`

Tune the rules in `sources/categories.json`.

## Promotions

Two levels:

- **Per model** (`promo` on a model record): off-peak / weekend windows (from OpenRouter `pricing.overrides` or the vendor page),
  limited-time cuts, launch pricing, batch tiers. `effective.*` is the price you pay *now* if the promo applies.
- **Per provider** (`promotions[]` in `providers.json` and captured by the browser adapter): coding/token plans,
  first-month flash sales, free-token grants, annual discounts.

## Scheduled updates

`.github/workflows/update-prices.yml` runs the CI-safe methods (`direct-api`, `public-page`) daily and commits
`data/` + `PRICES.md`. Browser-automated and login-only sites are refreshed from an lm-assist node
(e.g. `lm-assist scheduler_jobs` or a cron running `node scripts/collect.js --method lm-assist-browser` then `git push`).

## Caveats

Prices vary by region, cache state, context band, priority tier and account — treat this as a radar, not an invoice.
Rows marked `page` or `web-research` are unverified extractions. Always confirm on the linked source before committing spend.

MIT © langmart.ai
