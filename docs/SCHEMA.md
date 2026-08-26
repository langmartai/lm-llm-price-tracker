# Data schema

All prices are **USD per 1M tokens** unless a `currency` field says otherwise. Native (non-USD) prices are kept in
`price.*` with their `currency`; `price_usd.*` is the converted value (`fx` in the dataset header records the rate).

## providers (sources/providers.json)

| field | type | meaning |
|---|---|---|
| `id` | string | stable slug, used as `provider` on model records |
| `name`, `kind` | string | `vendor` (model maker) · `aggregator` · `inference-host` · `cloud` |
| `region` | string | `global` · `cn` · `eu` · `us` |
| `site_url`, `pricing_url`, `console_url?`, `docs_url?` | url | where to look; `console_url` is the logged-in page for login-only prices |
| `currency`, `native_currency?` | ISO 4217 | currency the pricing page quotes in |
| `openai_compatible`, `base_url`, `base_url_cn?` | bool / url | OpenAI-style `/v1/chat/completions` endpoint |
| `automation.method` | enum | `direct-api` · `public-page` · `lm-assist-browser` · `manual` |
| `automation.adapter` | string | adapter module name (`scripts/adapters/<adapter>.js`) |
| `automation.endpoint` | url | JSON endpoint or page the adapter opens |
| `automation.auth` | enum | `none` · `login` (browser profile must be signed in) · `api-key` |
| `automation.extract?` | object | hints for `public-page` (`unit_divisor`, `model_patterns[]`, `currency`) |
| `login_required_for_pricing` | bool | promotional / account prices only visible after login |
| `enabled` | bool | skipped by the collector when false |
| `promotions[]` | Promotion | provider-level offers (plans, price cuts, grants) |

### Promotion

`{ title, type, detail, price?, promo_price?, currency?, period?, valid_until?, source_url, confidence }`
· `type`: `off-peak` · `weekend` · `limited-time` · `launch` · `permanent-cut` · `free-tier` · `batch` · `subscription`

## model (data/prices.json → models[])

| field | meaning |
|---|---|
| `key` | `<provider>:<model_id slug>` — unique per seller |
| `provider` | seller id (registry) · `vendor` = model maker after alias normalization (`x-ai`→`xai`, `qwen`→`alibaba-modelstudio`) |
| `model_id`, `display_name`, `context`, `modality` | as shown by the source |
| `openai_compatible`, `base_url` | how to call it |
| `category` | primary: `free` · `embedding` · `vision` · `reasoning` · `coding` · else price tier `flagship` · `mid` · `budget` |
| `tier`, `tags[]` | price tier always; tags include every matched rule + `open-weight` |
| `price` | `{input, output, cache_read, cache_write, currency}` native |
| `price_usd` | same, in USD |
| `promo` | `null` or `{active, type, input, output, input_usd, output_usd, discount_pct, windows[{days, utc}], starts_at, ends_at, note, source_url}` |
| `batch` | `{input_usd, output_usd}` when an async batch tier exists |
| `long_context_surcharge[]` | `{min_prompt_tokens, input, output}` step-ups (not promos) |
| `effective` | `{input_usd, output_usd, blended_usd, basis: 'list'|'promo', list_blended_usd}` — what you pay now; blended = (3·in + 1·out)/4 |
| `source` | `{method, adapter, url, collected_at, confidence: api|browser|manual|page|web-research, evidence?, execution_id?}` |

## dataset header

`generated_at`, `unit`, `currency`, `fx`, `blended_ratio`, `runs[]` (per-source status), `providers[]` (summary incl.
`models_tracked`, `last_collected`, `last_status`), `promotions[]`, `cheapest_by_category{}`, `cross_vendor[]`
(same model sold by 2+ providers: `{vendor, model, cheapest_provider, spread_pct, sellers[]}`), `counts`, `models[]`.

## manual files (data/manual/*.json)

```json
{ "provider": "volcengine-ark", "collected_at": "2026-08-26T09:00:00Z", "confidence": "manual", "currency": "CNY",
  "source_url": "https://console.volcengine.com/ark",
  "models": [ { "model_id": "doubao-seed-2.0-pro", "input": 0.8, "output": 2.0, "context": 256000,
                "promo": { "type": "limited-time", "input": 0.4, "output": 1.0, "ends_at": "2026-09-30", "note": "console coupon" } } ],
  "promotions": [ { "title": "First month ¥9.9", "type": "limited-time", "price": 40, "promo_price": 9.9, "currency": "CNY", "period": "month" } ] }
```
`confidence: manual` outranks every automated capture for the same `provider:model`.
