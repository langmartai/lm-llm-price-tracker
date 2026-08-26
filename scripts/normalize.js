// Normalize raw adapter rows into the canonical model record (docs/SCHEMA.md#model).
import { readJson, p, toUsd, round, slug } from './lib/util.js';

const cats = readJson(p('sources', 'categories.json'));
const overrides = readJson(p('sources', 'model-overrides.json'), {});
const RULES = cats.categories.map((c) => ({ ...c, re: c.match.map((m) => new RegExp(m, 'i')) }));
const PRIMARY_EXCLUDE = new Set(cats.primary_exclude || []);
const RATIO = cats.blended_ratio || { input: 3, output: 1 };

export function normVendor(v) {
  const s = slug(v || '');
  return cats.vendor_aliases?.[s] || s;
}

export function categorize(rec) {
  const hay = `${rec.vendor}/${rec.model_id} ${rec.display_name || ''}`.toLowerCase();
  const tags = [];
  for (const r of RULES) {
    if (r.price_zero) { if (rec.is_free) tags.push(r.id); continue; }
    if (r.re.some((x) => x.test(hay))) tags.push(r.id);
  }
  let primary = tags.find((t) => !PRIMARY_EXCLUDE.has(t)) || null;
  // price tier (always tagged; becomes primary when no functional category matched)
  const inp = rec.price_usd?.input ?? 0, outp = rec.price_usd?.output ?? 0;
  let tier = 'budget';
  for (const t of cats.tiers) if (inp >= t.min_input_usd || (t.min_output_usd && outp >= t.min_output_usd)) { tier = t.id; break; }
  tags.push(tier);
  rec.tier = tier;
  return { category: primary || tier, tags: [...new Set(tags)] };
}

export function blended(input, output) {
  if (input === null || input === undefined || output === null || output === undefined) return null;
  return round((RATIO.input * input + RATIO.output * output) / (RATIO.input + RATIO.output));
}

export function normalizeModel(raw, providersById) {
  const vendor = normVendor(raw.vendor || raw.provider);
  const provider = providersById[raw.provider] ? raw.provider : normVendor(raw.provider);
  const cur = (raw.price?.currency || raw.currency || 'USD').toUpperCase();
  const price_usd = {
    input: toUsd(raw.price?.input ?? null, cur),
    output: toUsd(raw.price?.output ?? null, cur),
    cache_read: toUsd(raw.price?.cache_read ?? null, cur),
    cache_write: toUsd(raw.price?.cache_write ?? null, cur),
  };
  let promo = raw.promo || null;
  if (promo) {
    const pc = (promo.currency || cur).toUpperCase();
    promo = {
      ...promo,
      input_usd: toUsd(promo.input ?? null, pc),
      output_usd: toUsd(promo.output ?? null, pc),
      currency: pc,
    };
    if (promo.discount_pct === undefined || promo.discount_pct === null) {
      const a = price_usd.input, b = promo.input_usd;
      promo.discount_pct = a && b !== null ? round((1 - b / a) * 100, 1) : null;
    }
  }
  const useInput = promo?.input_usd ?? price_usd.input;
  const useOutput = promo?.output_usd ?? price_usd.output;
  const effective = {
    input_usd: useInput,
    output_usd: useOutput,
    blended_usd: blended(useInput, useOutput),
    basis: promo && (promo.input_usd !== null || promo.output_usd !== null) ? 'promo' : 'list',
    list_blended_usd: blended(price_usd.input, price_usd.output),
  };
  const key = `${vendor}/${slug(raw.model_id)}`;
  const ov = overrides[key] || {};
  const rec = {
    key: `${provider}:${slug(raw.model_id)}`,
    provider,
    vendor,
    model_id: raw.model_id,
    display_name: ov.display_name || raw.display_name || raw.model_id,
    context: raw.context ?? null,
    modality: raw.modality ?? null,
    openai_compatible: ov.openai_compatible ?? raw.openai_compatible ?? providersById[provider]?.openai_compatible ?? null,
    base_url: raw.base_url ?? providersById[provider]?.base_url ?? null,
    currency: cur,
    price: { ...raw.price, currency: cur },
    price_usd,
    promo,
    effective,
    long_context_surcharge: raw.long_context_surcharge ?? null,
    batch: raw.batch ? { input_usd: toUsd(raw.batch.input, cur), output_usd: toUsd(raw.batch.output, cur) } : null,
    is_free: !!raw.is_free,
    deprecated: raw.deprecated ?? null,
    source: raw.source,
  };
  const c = ov.category ? { category: ov.category, tags: [...new Set([ov.category, ...(ov.tags || []), ...categorize(rec).tags])] } : categorize(rec);
  rec.category = c.category;
  rec.tags = c.tags;
  rec.hidden = !!ov.hide;
  return rec;
}

/** Merge rows: same key -> keep the most authoritative (manual > browser > api > page), newest wins on tie. */
const CONF_RANK = { manual: 4, browser: 3, api: 2, page: 1, 'web-research': 0 };
export function dedupe(records) {
  const byKey = new Map();
  for (const r of records) {
    if (r.hidden) continue;
    const prev = byKey.get(r.key);
    if (!prev) { byKey.set(r.key, r); continue; }
    const a = CONF_RANK[r.source?.confidence] ?? 0, b = CONF_RANK[prev.source?.confidence] ?? 0;
    if (a > b || (a === b && (r.source?.collected_at || '') > (prev.source?.collected_at || ''))) byKey.set(r.key, r);
  }
  return [...byKey.values()];
}
