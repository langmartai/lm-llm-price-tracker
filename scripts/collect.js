#!/usr/bin/env node
// Orchestrator:  node scripts/collect.js [--method direct-api,public-page,lm-assist-browser] [--only id,id] [--skip id]
//                                        [--no-manual] [--no-history] [--dry-run] [--no-generate]
//
// 1. load sources/providers.json (enabled providers), filter by --method / --only / --skip
// 2. run each provider's adapter (direct-api | public-page | lm-assist-browser)
// 3. merge data/manual/*.json (hand-verified prices, incl. login-only pages captured by hand)
// 4. normalize -> dedupe -> data/prices.json (+ data/history/YYYY-MM-DD.json)
// 5. generate PRICES.md
import fs from 'node:fs';
import path from 'node:path';
import { adapterFor } from './adapters/index.js';
import { normalizeModel, dedupe, blended } from './normalize.js';
import { readJson, writeJson, p, nowIso, today, log } from './lib/util.js';
import { generate } from './generate-md.js';

const args = process.argv.slice(2);
const opt = (name, def) => { const i = args.indexOf(`--${name}`); return i >= 0 ? (args[i + 1] && !args[i + 1].startsWith('--') ? args[i + 1] : true) : def; };
const methods = String(opt('method', '') || '').split(',').filter(Boolean);
const only = String(opt('only', '') || '').split(',').filter(Boolean);
const skip = String(opt('skip', '') || '').split(',').filter(Boolean);
const noManual = !!opt('no-manual', false);
const noHistory = !!opt('no-history', false);
const dryRun = !!opt('dry-run', false);
const noGenerate = !!opt('no-generate', false);

const registry = readJson(p('sources', 'providers.json'));
const providers = registry.providers;
const providersById = Object.fromEntries(providers.map((x) => [x.id, x]));

const selected = providers.filter((x) =>
  x.enabled !== false &&
  (!methods.length || methods.includes(x.automation?.method)) &&
  (!only.length || only.includes(x.id)) &&
  !skip.includes(x.id),
);
log(`providers selected: ${selected.map((x) => x.id).join(', ') || '(none)'}`);

const raw = [];
const runs = [];
const promotions = [];
for (const prov of selected) {
  const started = nowIso();
  try {
    if (prov.automation?.method === 'manual') { runs.push({ provider: prov.id, method: 'manual', status: 'skipped', started }); continue; }
    const adapter = adapterFor(prov);
    log(`→ ${prov.id} via ${prov.automation.method} (${prov.automation.endpoint || prov.pricing_url})`);
    const res = await adapter.collect(prov);
    const rows = Array.isArray(res) ? res : res.models || [];
    if (!Array.isArray(res) && res.promotions?.length) promotions.push(...res.promotions.map((x) => ({ provider: prov.id, ...x })));
    raw.push(...rows);
    runs.push({ provider: prov.id, method: prov.automation.method, status: 'ok', rows: rows.length, started, ended: nowIso() });
    log(`  ${prov.id}: ${rows.length} rows`);
  } catch (e) {
    const status = e.code === 'LOGIN_REQUIRED' ? 'login-required' : 'error';
    runs.push({ provider: prov.id, method: prov.automation?.method, status, error: e.message, started, ended: nowIso() });
    log(`  ${prov.id}: ${status.toUpperCase()} — ${e.message}`);
  }
}

// ---- manual data (data/manual/*.json) ----
const manualDir = p('data', 'manual');
if (!noManual && fs.existsSync(manualDir)) {
  for (const f of fs.readdirSync(manualDir).filter((x) => x.endsWith('.json')).sort()) {
    const m = readJson(path.join(manualDir, f));
    const collectedAt = m.collected_at || nowIso();
    for (const row of m.models || []) {
      raw.push({
        provider: row.provider || m.provider, vendor: row.vendor || row.provider || m.provider,
        model_id: row.model_id, display_name: row.display_name, context: row.context ?? null, modality: row.modality ?? null,
        openai_compatible: row.openai_compatible, base_url: row.base_url,
        currency: row.currency || m.currency || 'USD',
        price: { input: row.input ?? null, output: row.output ?? null, cache_read: row.cache_read ?? null, cache_write: row.cache_write ?? null, currency: row.currency || m.currency || 'USD' },
        promo: row.promo ? { active: true, windows: [], starts_at: null, ends_at: null, ...row.promo } : null,
        is_free: row.input === 0 && row.output === 0,
        source: { method: 'manual', adapter: 'manual', url: row.source_url || m.source_url || null, collected_at: row.collected_at || collectedAt, confidence: row.confidence || m.confidence || 'manual', file: `data/manual/${f}`, note: row.note || null },
      });
    }
    for (const pr of m.promotions || []) promotions.push({ provider: pr.provider || m.provider, confidence: m.confidence || 'manual', collected_at: collectedAt, ...pr });
    runs.push({ provider: `manual:${f}`, method: 'manual', status: 'ok', rows: (m.models || []).length, started: collectedAt });
  }
}

// ---- normalize / dedupe ----
const normalized = raw.map((r) => { try { return normalizeModel(r, providersById); } catch (e) { log(`normalize failed for ${r.provider}/${r.model_id}: ${e.message}`); return null; } }).filter(Boolean);
let models = dedupe(normalized);

// Merge with the previous dataset for providers NOT collected this run (so a browser-only run doesn't drop API rows and vice versa)
const prevFile = p('data', 'prices.json');
if (fs.existsSync(prevFile)) {
  const prev = readJson(prevFile, { models: [] });
  const ranNow = new Set(runs.filter((r) => r.status === 'ok').map((r) => r.provider.replace(/^manual:.*/, '__manual__')));
  const keep = (prev.models || []).filter((m) => !ranNow.has(m.provider) && !(m.source?.method === 'manual' && ranNow.has('__manual__')));
  const have = new Set(models.map((m) => m.key));
  models.push(...keep.filter((m) => !have.has(m.key)));
  const prevPromos = (prev.promotions || []).filter((x) => !ranNow.has(x.provider) && !(x.confidence === 'manual' && ranNow.has('__manual__')));
  promotions.push(...prevPromos);
}

// provider-level promotions from the registry
for (const prov of providers) for (const pr of prov.promotions || []) promotions.push({ provider: prov.id, ...pr });

models.sort((a, b) => (a.effective.blended_usd ?? 1e9) - (b.effective.blended_usd ?? 1e9) || a.key.localeCompare(b.key));

// cheapest per category (paid, text models with both prices)
const cheapest = {};
for (const m of models) {
  if (m.is_free || m.effective.blended_usd === null || m.effective.input_usd === null || m.effective.output_usd === null) continue;
  (cheapest[m.category] ||= []).push({ key: m.key, provider: m.provider, model: m.model_id, input_usd: m.effective.input_usd, output_usd: m.effective.output_usd, blended_usd: m.effective.blended_usd, basis: m.effective.basis });
}
for (const k of Object.keys(cheapest)) cheapest[k] = cheapest[k].slice(0, 5);

// ---- cross-vendor: the SAME model sold by 2+ providers (direct vendor vs aggregators/hosts) ----
const canon = (id) => slugCanon(id);
function slugCanon(id) {
  return String(id).toLowerCase()
    .replace(/^accounts\/[^/]+\/models\//, '').replace(/^[^/]+\//, '')
    .replace(/:(free|batch|nitro|floor|online)$/, '')
    .replace(/-(latest|exp|preview|instruct|chat)$/, '')
    .replace(/-(20\d{2}-\d{2}-\d{2}|20\d{6}|\d{4})$/, '')
    .replace(/[._]/g, '-');
}
const groups = new Map();
for (const m of models) {
  if (m.is_free) continue;
  const k = `${m.vendor}/${canon(m.model_id)}`;
  (groups.get(k) || groups.set(k, []).get(k)).push(m);
}
const cross_vendor = [];
for (const [k, rows] of groups) {
  const sellers = new Map();
  for (const r of rows) { const prev = sellers.get(r.provider); if (!prev || (r.effective.blended_usd ?? 1e9) < (prev.effective.blended_usd ?? 1e9)) sellers.set(r.provider, r); }
  if (sellers.size < 2) continue;
  const list = [...sellers.values()].filter((r) => r.effective.blended_usd !== null).sort((a, b) => a.effective.blended_usd - b.effective.blended_usd);
  if (list.length < 2) continue;
  const [vendor, model] = k.split('/');
  cross_vendor.push({
    vendor, model,
    cheapest_provider: list[0].provider,
    spread_pct: list[0].effective.blended_usd > 0 ? Math.round((list[list.length - 1].effective.blended_usd / list[0].effective.blended_usd - 1) * 100) : null,
    sellers: list.map((r) => ({ provider: r.provider, model_id: r.model_id, input_usd: r.effective.input_usd, output_usd: r.effective.output_usd, blended_usd: r.effective.blended_usd, basis: r.effective.basis, confidence: r.source.confidence })),
  });
}
cross_vendor.sort((a, b) => (b.spread_pct ?? 0) - (a.spread_pct ?? 0) || a.vendor.localeCompare(b.vendor));

const dataset = {
  generated_at: nowIso(),
  unit: 'per_1M_tokens',
  currency: 'USD',
  fx: { CNY_USD: Number(process.env.CNY_USD_RATE || 0.14), EUR_USD: Number(process.env.EUR_USD_RATE || 1.08) },
  blended_ratio: readJson(p('sources', 'categories.json')).blended_ratio,
  runs,
  providers: providers.map((x) => ({
    id: x.id, name: x.name, kind: x.kind, region: x.region, site_url: x.site_url, pricing_url: x.pricing_url, console_url: x.console_url || null,
    currency: x.currency, openai_compatible: x.openai_compatible, base_url: x.base_url,
    automation: x.automation?.method, login_required_for_pricing: !!x.login_required_for_pricing, enabled: x.enabled !== false,
    models_tracked: models.filter((m) => m.provider === x.id).length,
    last_collected: runs.filter((r) => r.provider === x.id && r.status === 'ok').map((r) => r.ended).sort().pop() || null,
    last_status: runs.filter((r) => r.provider === x.id).map((r) => r.status).pop() || null,
  })),
  promotions: dedupePromos(promotions),
  cheapest_by_category: cheapest,
  cross_vendor,
  counts: { models: models.length, providers: new Set(models.map((m) => m.provider)).size, promos_on_models: models.filter((m) => m.promo).length },
  models,
};

function dedupePromos(list) {
  const seen = new Map();
  for (const x of list) { const k = `${x.provider}|${x.title}`; if (!seen.has(k) || (x.collected_at || '') > (seen.get(k).collected_at || '')) seen.set(k, x); }
  return [...seen.values()];
}

if (dryRun) {
  log(`dry-run: ${models.length} models, ${dataset.promotions.length} promotions; not writing.`);
  console.log(JSON.stringify({ runs, counts: dataset.counts, cheapest_by_category: cheapest }, null, 2));
  process.exit(0);
}
writeJson(prevFile, dataset);
if (!noHistory) writeJson(p('data', 'history', `${today()}.json`), dataset);
log(`wrote data/prices.json (${models.length} models, ${dataset.promotions.length} promotions)`);
if (!noGenerate) { generate(dataset); log('wrote PRICES.md'); }
void blended;
