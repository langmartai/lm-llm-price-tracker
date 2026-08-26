// Adapter: public-page  (method: public-page, no auth, runs in CI)
// Fetches a server-rendered pricing page, flattens it to text lines and extracts rows that look like
//   <model name> ... <money> ... <money>
// The FIRST two amounts on the line are taken as input / output per 1M tokens. Confidence is "page" (low):
// verify with the lm-assist-browser adapter or a manual file for anything that matters.
//
// Optional per-provider hints in providers.json -> automation.extract:
//   { "unit_divisor": 1,            // page quotes per 1M (1) or per 1K (1000): we normalize to per 1M
//     "model_patterns": ["deepseek-v4-(flash|pro)"],   // only keep lines matching one of these (regex, i)
//     "currency": "USD" }
import { fetchText } from '../lib/http.js';
import { nowIso, round } from '../lib/util.js';

export const id = 'public-page';

const MONEY = /(?:\$|US\$|USD\s?|¥|￥|CNY\s?|RMB\s?|€)\s?(\d+(?:\.\d+)?)|(\d+(?:\.\d+)?)\s?(?:USD|CNY|RMB|元)/g;
const DEFAULT_MODEL = /([a-z][a-z0-9]*(?:[-.][a-z0-9]+)+)/i; // e.g. gpt-5.6-luna, deepseek-v4-flash, gemini-2.5-pro

export function htmlToLines(html) {
  const text = html
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<\/(tr|p|div|li|h\d|section|table)>/gi, '\n')
    .replace(/<(br|hr)\s*\/?>/gi, '\n')
    .replace(/<\/t[dh]>/gi, ' | ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&#39;|&apos;/g, "'").replace(/&quot;/g, '"');
  return text.split(/\n+/).map((l) => l.replace(/\s+/g, ' ').trim()).filter(Boolean);
}

export function extractRows(lines, hints = {}) {
  const divisor = Number(hints.unit_divisor || 1);
  const pats = (hints.model_patterns || []).map((s) => new RegExp(s, 'i'));
  const rows = [];
  for (const line of lines) {
    if (pats.length && !pats.some((r) => r.test(line))) continue;
    const amounts = [...line.matchAll(MONEY)].map((m) => Number(m[1] ?? m[2])).filter(Number.isFinite);
    if (amounts.length < 2) continue;
    const name = (line.match(DEFAULT_MODEL) || [])[1];
    if (!name) continue;
    const cur = /¥|￥|CNY|RMB|元/.test(line) ? 'CNY' : /€/.test(line) ? 'EUR' : (hints.currency || 'USD');
    rows.push({ model_id: name.toLowerCase(), input: round(amounts[0] * (1000 / divisor) / 1000), output: round(amounts[1] * (1000 / divisor) / 1000), currency: cur, line });
  }
  return rows;
}

export async function collect(provider) {
  const url = provider.automation?.endpoint || provider.pricing_url;
  const html = await fetchText(url);
  const rows = extractRows(htmlToLines(html), provider.automation?.extract || {});
  const collectedAt = nowIso();
  const seen = new Set();
  return rows.filter((r) => !seen.has(r.model_id) && seen.add(r.model_id)).map((r) => ({
    provider: provider.id,
    vendor: provider.id,
    model_id: r.model_id,
    display_name: r.model_id,
    context: null,
    modality: null,
    openai_compatible: provider.openai_compatible !== false,
    base_url: provider.base_url || null,
    currency: r.currency,
    price: { input: r.input, output: r.output, cache_read: null, cache_write: null, currency: r.currency },
    promo: null,
    is_free: r.input === 0 && r.output === 0,
    source: { method: 'public-page', adapter: id, url, collected_at: collectedAt, confidence: 'page', evidence: r.line.slice(0, 200) },
  }));
}
