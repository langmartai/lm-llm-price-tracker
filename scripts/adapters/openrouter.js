// Adapter: OpenRouter  (method: direct-api, no auth)
// GET https://openrouter.ai/api/v1/models -> { data: [ { id, name, context_length, pricing:{prompt,completion,input_cache_read,input_cache_write,overrides[]} } ] }
// pricing values are USD PER TOKEN as strings. overrides[] may carry:
//   - time windows  { utc_days:[...], utc_start:HHMM, utc_end:HHMM, prompt, completion, ... }  -> off-peak / weekend promos
//   - long context  { min_prompt_tokens:N, prompt, completion }                                  -> surcharge (NOT a promo)
import { fetchJson } from '../lib/http.js';
import { perTokenToPerM, hhmm, round, nowIso } from '../lib/util.js';

export const id = 'openrouter';

export async function collect(provider) {
  const url = provider.automation?.endpoint || 'https://openrouter.ai/api/v1/models';
  const body = await fetchJson(url);
  const collectedAt = nowIso();
  const out = [];
  const batch = new Map(); // "<vendor>/<model>" -> batch (async, 50% off) prices, folded into the base row below
  for (const m of body.data || []) {
    const pr = m.pricing || {};
    const input = perTokenToPerM(pr.prompt);
    const output = perTokenToPerM(pr.completion);
    if (input === null && output === null) continue;
    if ((input !== null && input < 0) || (output !== null && output < 0)) continue; // "-1" = variable-price routers (auto, pareto-*)
    const [vendorRaw, ...rest] = m.id.split('/');
    const vendor = vendorRaw.replace(/^~/, ''); // "~openai/..." = OpenRouter alias namespace
    const modelId = rest.join('/');
    if (/:batch$/.test(modelId)) { batch.set(`${vendor}/${modelId.replace(/:batch$/, '')}`, { input, output }); continue; }
    const isFree = /:free$/.test(m.id) || (input === 0 && output === 0);

    // ---- overrides -> promo (time windows) + long-context surcharge ----
    const windows = [];
    let promoInput = null, promoOutput = null, promoCache = null;
    const surcharges = [];
    for (const o of pr.overrides || []) {
      const oi = perTokenToPerM(o.prompt), oo = perTokenToPerM(o.completion);
      if (o.min_prompt_tokens !== undefined) {
        surcharges.push({ min_prompt_tokens: o.min_prompt_tokens, input: oi, output: oo });
        continue;
      }
      if (o.utc_days || o.utc_start !== undefined) {
        const cheaper = (oi !== null && input !== null && oi < input) || (oo !== null && output !== null && oo < output);
        const w = {
          days: o.utc_days || 'daily',
          utc: o.utc_start !== undefined ? `${hhmm(o.utc_start)}-${hhmm(o.utc_end ?? 0)}` : 'all-day',
          input: oi, output: oo, cheaper,
        };
        windows.push(w);
        if (cheaper) {
          promoInput = promoInput === null ? oi : Math.min(promoInput, oi ?? promoInput);
          promoOutput = promoOutput === null ? oo : Math.min(promoOutput, oo ?? promoOutput);
          if (o.input_cache_read !== undefined) promoCache = perTokenToPerM(o.input_cache_read);
        }
      }
    }
    const cheapWindows = windows.filter((w) => w.cheaper);
    const promo = cheapWindows.length
      ? {
          active: true,
          type: cheapWindows.every((w) => Array.isArray(w.days) && w.days.every((d) => /sat|sun/.test(d))) ? 'weekend' : 'off-peak',
          input: promoInput, output: promoOutput, cache_read: promoCache,
          windows: cheapWindows.map((w) => ({ days: w.days, utc: w.utc, input: w.input, output: w.output })),
          discount_pct: input ? round((1 - promoInput / input) * 100, 1) : null,
          starts_at: null, ends_at: null,
          note: 'Time-of-day pricing reported by OpenRouter (mirrors the upstream vendor off-peak schedule).',
          source_url: `https://openrouter.ai/${m.id}`,
        }
      : null;

    out.push({
      provider: 'openrouter',
      vendor,
      model_id: modelId,
      display_name: m.name || m.id,
      context: m.context_length ?? m.top_provider?.context_length ?? null,
      modality: m.architecture?.modality || null,
      openai_compatible: true,
      base_url: 'https://openrouter.ai/api/v1',
      currency: 'USD',
      price: {
        input, output,
        cache_read: perTokenToPerM(pr.input_cache_read),
        cache_write: perTokenToPerM(pr.input_cache_write),
        currency: 'USD',
      },
      long_context_surcharge: surcharges.length ? surcharges : null,
      batch: null, // filled after the loop
      promo,
      is_free: isFree,
      source: { method: 'direct-api', adapter: id, url: `https://openrouter.ai/${m.id}`, collected_at: collectedAt, confidence: 'api' },
    });
  }
  for (const r of out) { const b = batch.get(`${r.vendor}/${r.model_id}`); if (b) r.batch = b; }
  return out;
}
