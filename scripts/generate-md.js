#!/usr/bin/env node
// data/prices.json -> PRICES.md   (also importable: generate(dataset))
import fs from 'node:fs';
import { readJson, p } from './lib/util.js';

const CAT_ORDER = ['flagship', 'reasoning', 'mid', 'coding', 'budget', 'vision', 'open-weight', 'embedding', 'free'];
const CAT_LABEL = Object.fromEntries(readJson(p('sources', 'categories.json')).categories.map((c) => [c.id, c.label]));
const MAX_ROWS_PER_CATEGORY = Number(process.env.MD_MAX_ROWS || 40);

const money = (v) => (v === null || v === undefined ? '—' : v === 0 ? '$0' : `$${v < 0.01 ? v.toFixed(4) : v < 1 ? v.toFixed(3) : v.toFixed(2)}`);
const native = (m) => (m.currency && m.currency !== 'USD' && m.price?.input !== null ? ` (${m.currency} ${m.price.input}/${m.price.output})` : '');
const esc = (s) => String(s ?? '').replace(/\|/g, '\\|').replace(/\n/g, ' ');
const ctx = (n) => (n ? (n >= 1_000_000 ? `${(n / 1_000_000).toFixed(n % 1_000_000 ? 2 : 0)}M` : n >= 1000 ? `${Math.round(n / 1000)}K` : String(n)) : '—');
const link = (text, url) => (url ? `[${esc(text)}](${url})` : esc(text));
const promoCell = (m) => {
  if (!m.promo) return m.batch ? `batch ${money(m.batch.input_usd)}/${money(m.batch.output_usd)}` : '';
  const pr = m.promo;
  const w = (pr.windows || []).map((x) => `${Array.isArray(x.days) ? x.days.map((d) => d.slice(0, 3)).join('/') : x.days} ${x.utc}`).join('; ');
  const pct = pr.discount_pct !== null && pr.discount_pct !== undefined ? ` −${pr.discount_pct}%` : '';
  return `${pr.type}${pct}${w ? ` (${w} UTC)` : ''}${pr.ends_at ? ` until ${pr.ends_at}` : ''}`;
};

export function render(d) {
  const L = [];
  const models = d.models.filter((m) => !m.hidden);
  L.push(`# LLM API price radar — cross-vendor list & promotion prices`);
  L.push('');
  L.push(`> Generated \`${d.generated_at}\` · **${d.counts.models} models** across **${d.counts.providers} price sources** · ${d.counts.promos_on_models} models with an active promo/off-peak price · unit: **USD per 1M tokens** (CNY→USD @ ${d.fx.CNY_USD}) · blended = (${d.blended_ratio.input}×input + ${d.blended_ratio.output}×output)/${d.blended_ratio.input + d.blended_ratio.output}`);
  L.push(`> Regenerate: \`node scripts/collect.js\` · data: [\`data/prices.json\`](data/prices.json) · sources: [\`sources/providers.json\`](sources/providers.json)`);
  L.push('');

  // ---- cheapest per category ----
  L.push(`## Cheapest right now, by category`);
  L.push('');
  L.push(`| Category | # | Provider | Model | Input | Output | Blended | Basis |`);
  L.push(`|---|---|---|---|---:|---:|---:|---|`);
  for (const cat of CAT_ORDER) {
    const rows = d.cheapest_by_category?.[cat] || [];
    rows.slice(0, 3).forEach((r, i) => L.push(`| ${i === 0 ? `**${CAT_LABEL[cat] || cat}**` : ''} | ${i + 1} | ${esc(r.provider)} | \`${esc(r.model)}\` | ${money(r.input_usd)} | ${money(r.output_usd)} | **${money(r.blended_usd)}** | ${r.basis} |`));
  }
  L.push('');

  // ---- promotions ----
  const promoModels = models.filter((m) => m.promo && (m.promo.input_usd !== null || m.promo.output_usd !== null)).sort((a, b) => (b.promo.discount_pct ?? 0) - (a.promo.discount_pct ?? 0));
  L.push(`## Active promotions & off-peak prices`);
  L.push('');
  L.push(`### Per-model (${promoModels.length})`);
  L.push('');
  L.push(`| Provider | Model | List in/out | Promo in/out | Discount | Type / window | Ends | Source |`);
  L.push(`|---|---|---:|---:|---:|---|---|---|`);
  for (const m of promoModels.slice(0, 80)) {
    L.push(`| ${esc(m.provider)} | \`${esc(m.model_id)}\` | ${money(m.price_usd.input)} / ${money(m.price_usd.output)} | **${money(m.promo.input_usd)} / ${money(m.promo.output_usd)}** | ${m.promo.discount_pct ?? '—'}% | ${esc(promoCell(m))} | ${m.promo.ends_at || 'open' } | ${link(m.source.method, m.promo.source_url || m.source.url)} |`);
  }
  if (promoModels.length > 80) L.push(`| … | ${promoModels.length - 80} more in data/prices.json | | | | | | |`);
  L.push('');
  L.push(`### Provider-level offers, plans & price cuts (${d.promotions.length})`);
  L.push('');
  L.push(`| Provider | Offer | Type | Price | Detail | Valid until | Confidence |`);
  L.push(`|---|---|---|---:|---|---|---|`);
  for (const x of d.promotions) {
    const price = x.promo_price !== undefined && x.promo_price !== null ? `${x.currency || ''} ${x.promo_price}${x.price ? ` (was ${x.price})` : ''}${x.period ? `/${x.period}` : ''}` : x.price !== undefined && x.price !== null ? `${x.currency || ''} ${x.price}${x.period ? `/${x.period}` : ''}` : '—';
    L.push(`| ${esc(x.provider)} | ${link(x.title, x.source_url)} | ${esc(x.type)} | ${esc(price)} | ${esc(x.detail)} | ${x.valid_until || 'open'} | ${esc(x.confidence || '')} |`);
  }
  L.push('');

  // ---- cross-vendor: same model, different sellers ----
  const cv = d.cross_vendor || [];
  L.push(`## Same model, different sellers (cross-vendor spread)`);
  L.push('');
  L.push(`Models offered by 2+ price sources, sorted by price spread between the cheapest and priciest seller (effective price, promo applied). ${cv.length} models.`);
  L.push('');
  L.push(`| Vendor | Model | Cheapest seller | Spread | Sellers (blended $/1M, in/out) |`);
  L.push(`|---|---|---|---:|---|`);
  for (const g of cv.slice(0, 60)) {
    const sellers = g.sellers.map((s) => `${esc(s.provider)} **${money(s.blended_usd)}** (${money(s.input_usd)}/${money(s.output_usd)}${s.basis === 'promo' ? ', promo' : ''}${s.confidence === 'web-research' ? ', unverified' : ''})`).join(' · ');
    L.push(`| ${esc(g.vendor)} | \`${esc(g.model)}\` | ${esc(g.cheapest_provider)} | ${g.spread_pct === null ? '—' : `${g.spread_pct}%`} | ${sellers} |`);
  }
  if (cv.length > 60) L.push(`| … | ${cv.length - 60} more in data/prices.json | | | |`);
  L.push('');

  // ---- provider index ----
  L.push(`## Price sources (sites, automation, login)`);
  L.push('');
  L.push(`| Provider | Kind | Region | Site | Pricing page | OpenAI-compatible base URL | Automation | Login needed | Models | Last collected | Status |`);
  L.push(`|---|---|---|---|---|---|---|---|---:|---|---|`);
  for (const x of d.providers) {
    L.push(`| **${esc(x.name)}** (\`${x.id}\`) | ${x.kind} | ${x.region} | ${link(new URL(x.site_url).hostname, x.site_url)} | ${link('pricing', x.pricing_url)}${x.console_url ? ` · ${link('console', x.console_url)}` : ''} | ${x.base_url ? `\`${esc(x.base_url)}\`` : '—'} | \`${x.automation}\` | ${x.login_required_for_pricing ? '🔒 yes' : 'no'} | ${x.models_tracked} | ${x.last_collected ? x.last_collected.slice(0, 16).replace('T', ' ') : '—'} | ${x.enabled ? (x.last_status || 'not run') : 'disabled'} |`);
  }
  L.push('');

  // ---- per-category tables ----
  L.push(`## All tracked models by category`);
  L.push('');
  L.push(`Sorted by effective blended price (promo/off-peak applied when available). Only the first ${MAX_ROWS_PER_CATEGORY} rows per category are shown; the full set is in \`data/prices.json\`.`);
  L.push('');
  for (const cat of CAT_ORDER) {
    const rows = models.filter((m) => m.category === cat);
    if (!rows.length) continue;
    L.push(`### ${CAT_LABEL[cat] || cat} (${rows.length})`);
    L.push('');
    L.push(`| Provider | Vendor | Model | Ctx | Input | Output | Cache read | Blended | Promo | Compat | Source |`);
    L.push(`|---|---|---|---:|---:|---:|---:|---:|---|---|---|`);
    for (const m of rows.slice(0, MAX_ROWS_PER_CATEGORY)) {
      L.push(`| ${esc(m.provider)} | ${esc(m.vendor)} | \`${esc(m.model_id)}\`${native(m)} | ${ctx(m.context)} | ${money(m.effective.input_usd)} | ${money(m.effective.output_usd)} | ${money(m.price_usd.cache_read)} | **${money(m.effective.blended_usd)}** | ${esc(promoCell(m))} | ${m.openai_compatible === false ? 'no' : m.openai_compatible ? 'yes' : '?'} | ${link(m.source.method, m.source.url)} |`);
    }
    if (rows.length > MAX_ROWS_PER_CATEGORY) L.push(`| … | | ${rows.length - MAX_ROWS_PER_CATEGORY} more | | | | | | | | |`);
    L.push('');
  }

  // ---- run log ----
  L.push(`## Last collection run`);
  L.push('');
  L.push(`| Source | Method | Status | Rows | Note |`);
  L.push(`|---|---|---|---:|---|`);
  for (const r of d.runs) L.push(`| ${esc(r.provider)} | ${esc(r.method)} | ${r.status} | ${r.rows ?? '—'} | ${esc(r.error || '')} |`);
  L.push('');
  L.push(`_Prices change often and vary by region, cache state, context band and service tier. Rows marked \`page\`/\`web-research\` are low-confidence extractions — verify on the linked source before committing spend._`);
  L.push('');
  return L.join('\n');
}

export function generate(dataset = readJson(p('data', 'prices.json'))) {
  fs.writeFileSync(p('PRICES.md'), render(dataset));
}

if (process.argv[1] && process.argv[1].endsWith('generate-md.js')) generate();
