#!/usr/bin/env node
// Add (or update) a price source in sources/providers.json.
//
//   node scripts/add-provider.js --id novita --name "Novita AI" --site https://novita.ai --pricing https://novita.ai/pricing \
//        --method lm-assist-browser [--endpoint <url-or-api>] [--base-url https://api.novita.ai/v3/openai] \
//        [--kind vendor|aggregator|inference-host|cloud] [--region global|cn|eu|us] [--currency USD|CNY] \
//        [--login-required] [--console https://...] [--not-openai-compatible] [--notes "..."] [--disabled]
//
// Methods: direct-api (needs --endpoint JSON URL + an adapter in scripts/adapters/), public-page, lm-assist-browser, manual
import { readJson, writeJson, p } from './lib/util.js';

const args = process.argv.slice(2);
const flag = (n) => args.includes(`--${n}`);
const val = (n, d) => { const i = args.indexOf(`--${n}`); return i >= 0 && args[i + 1] && !args[i + 1].startsWith('--') ? args[i + 1] : d; };

const id = val('id'); const name = val('name'); const site = val('site'); const pricing = val('pricing');
if (!id || !name || !site || !pricing) {
  console.error('usage: add-provider.js --id <id> --name <name> --site <url> --pricing <url> [--method direct-api|public-page|lm-assist-browser|manual] ...');
  process.exit(2);
}
const method = val('method', 'lm-assist-browser');
const entry = {
  id, name,
  kind: val('kind', 'vendor'),
  region: val('region', 'global'),
  site_url: site,
  pricing_url: pricing,
  ...(val('console') ? { console_url: val('console') } : {}),
  currency: val('currency', 'USD'),
  openai_compatible: !flag('not-openai-compatible'),
  base_url: val('base-url', null),
  automation: {
    method,
    adapter: method === 'manual' ? null : method === 'direct-api' ? val('adapter', id) : method,
    endpoint: val('endpoint', pricing),
    auth: flag('login-required') ? 'login' : 'none',
    notes: val('notes', ''),
  },
  login_required_for_pricing: flag('login-required'),
  enabled: !flag('disabled'),
  promotions: [],
};

const file = p('sources', 'providers.json');
const reg = readJson(file);
const i = reg.providers.findIndex((x) => x.id === id);
if (i >= 0) { reg.providers[i] = { ...reg.providers[i], ...entry, promotions: reg.providers[i].promotions || [] }; console.error(`updated provider ${id}`); }
else { reg.providers.push(entry); console.error(`added provider ${id}`); }
writeJson(file, reg);
console.log(JSON.stringify(entry, null, 2));
if (method === 'direct-api' && !['openrouter', 'litellm'].includes(entry.automation.adapter)) {
  console.error(`NOTE: create scripts/adapters/${entry.automation.adapter}.js exporting { id, collect(provider) } and register it in scripts/adapters/index.js`);
}
