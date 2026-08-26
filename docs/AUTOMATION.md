# Automation

## direct-api

- **OpenRouter** `GET https://openrouter.ai/api/v1/models` — `pricing.prompt/completion` are USD per token (strings).
  `pricing.overrides[]` entries with `utc_days`/`utc_start`/`utc_end` are time-of-day prices (DeepSeek off-peak, weekend rates) →
  mapped to `promo{type: off-peak|weekend, windows[]}`; entries with `min_prompt_tokens` are long-context surcharges.
  `:batch` model ids are folded into the base row as `batch{}`; `:free` rows become the `free` category; `-1` (variable) prices are dropped.
- **LiteLLM** raw `model_prices_and_context_window.json` — first-party vendors only, undated aliases, non-deprecated, chat modes.

## public-page

`fetchText(url)` → strip tags → lines → keep lines that contain a model-looking token and ≥ 2 money amounts.
First two amounts = input/output. Hints in `automation.extract`: `unit_divisor` (1000 when the page quotes per 1K),
`model_patterns[]`, `currency`. Confidence `page`.

## lm-assist-browser

Runs on an lm-assist node (the machine whose Chrome has the Claude-in-Chrome extension and, for login-only sites, is signed in).

| env | default | meaning |
|---|---|---|
| `LM_ASSIST_URL` | `http://127.0.0.1:3100` (`:3200` when `~/.claude-code-config.json` has `devModeEnabled`) | Core REST base |
| `LM_ASSIST_API_KEY` | contents of `~/.lm-assist/api-token` | sent as `x-api-key` |
| `LM_ASSIST_DATA_DIR` | `~/.lm-assist` | where the token file lives |
| `CNY_USD_RATE`, `EUR_USD_RATE` | 0.14, 1.08 | FX for normalization |
| `MD_MAX_ROWS` | 40 | rows per category table in PRICES.md |

Calls (same as the `browser_task` MCP tool in lm-assist `core/src/mcp-server/tools/browser-task.ts`):

```
POST /agent/execute          { prompt, chrome: true, background: true, permissionMode: "bypassPermissions" }
                              -> { success, data: { executionId, statusUrl, resultUrl } }
GET  /agent/execution/:id     -> { status, isRunning, sessionId, claudeSessionUrl }
GET  /agent/execution/:id/result?wait=false -> { completed, result: { result: "<agent text>" }, error }
```

The prompt (see `buildPrompt()` in `scripts/adapters/lm-assist-browser.js`) asks the browser agent to open the pricing page,
expand tabs/accordions, hunt for promotions (off-peak, limited-time, launch, free quota, batch, coding/token plans) and answer
with a strict JSON object `{provider, currency, unit, models[], promotions[], page_url}`. Raw agent output is saved to
`data/browser-raw/` (git-ignored) for debugging.

### Login-only pages

`login_required_for_pricing: true` → the prompt instructs: *use the existing logged-in session; if a login wall blocks the data,
do NOT enter credentials, reply `{"login_required": true}`*. The adapter throws `LOGIN_REQUIRED`; the run row shows
`login-required` and the console URL. Sign in once in that node's Chrome (the profile persists), re-run `--only <id>`.

### Verifying the route on a node

```bash
curl -s -H "x-api-key: $(cat ~/.lm-assist/api-token)" http://127.0.0.1:3100/health
node -e "import('./scripts/adapters/lm-assist-browser.js').then(m=>console.log(m.buildPrompt({id:'deepseek',pricing_url:'https://api-docs.deepseek.com/quick_start/pricing'})))"
```

## Scheduling

- CI (GitHub Actions, daily): `node scripts/collect.js --method direct-api,public-page` → commit `data/` + `PRICES.md`.
- On an lm-assist node (browser + login-only): `node scripts/collect.js --method lm-assist-browser && git add -A && git commit -m "prices: browser $(date -I)" && git push`
  — schedule with lm-assist `scheduler_jobs` or Task Scheduler / cron.
