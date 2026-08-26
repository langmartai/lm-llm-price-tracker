# lm-llm-price-tracker — working notes for Claude Code sessions

Purpose: cross-vendor LLM API price + promotion tracker. Registry of sites → adapters → `data/prices.json` → `PRICES.md`.
Zero npm deps, Node ≥ 20, ESM. Read `README.md`, `docs/SCHEMA.md`, `docs/AUTOMATION.md` first.

Commands
- `node scripts/collect.js --method direct-api` — safe anywhere (OpenRouter + LiteLLM).
- `node scripts/collect.js --method lm-assist-browser [--only id]` — only on an lm-assist node with Chrome; drives the node's browser via `POST /agent/execute {chrome:true}`.
- `node scripts/collect.js --dry-run --method direct-api` — smoke test, writes nothing.
- `node scripts/generate-md.js` — re-render PRICES.md.
- `node scripts/add-provider.js --id … --name … --site … --pricing … --method …` — add a site.

Conventions
- Never type credentials into a site. Login-only consoles: the browser agent must stop at a login wall and report `login_required`; the human signs in once in Chrome, then re-run.
- Prices are USD per 1M tokens in `price_usd`/`effective`; keep native currency in `price`. CNY→USD via `CNY_USD_RATE`.
- Confidence order: manual > browser > api > page > web-research. Hand-verified numbers go in `data/manual/<provider>-<date>.json`.
- `data/history/YYYY-MM-DD.json` is a daily snapshot; do not rewrite old snapshots.
- Keep `PRICES.md` generated only (edit the generator, not the file).
- Windows node: paths under `C:\home\`; lm-assist Core on `http://127.0.0.1:3100` (prod) — token at `%USERPROFILE%\.lm-assist\api-token`.
