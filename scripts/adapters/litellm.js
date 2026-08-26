// Adapter: LiteLLM model_prices_and_context_window.json  (method: direct-api, no auth)
// Keys are model ids (sometimes prefixed "provider/"); values carry input_cost_per_token, output_cost_per_token,
// cache_read_input_token_cost, max_input_tokens, litellm_provider, mode ("chat", "embedding", ...).
// We keep chat/completion/responses models from a set of DIRECT vendors so the table can cross-check vendor list prices.
import { fetchJson } from '../lib/http.js';
import { perTokenToPerM, nowIso } from '../lib/util.js';

export const id = 'litellm';

// litellm_provider -> our vendor id (only these are imported; everything else is skipped)
// Only first-party VENDORS are imported (their LiteLLM entries track the official price page). Inference hosts
// (fireworks/together/groq/...) carry huge, partly stale catalogs — OpenRouter gives those live instead.
const VENDOR_MAP = {
  openai: 'openai', anthropic: 'anthropic', gemini: 'google', deepseek: 'deepseek', xai: 'xai', mistral: 'mistral',
  moonshot: 'moonshot', dashscope: 'alibaba-modelstudio', minimax: 'minimax', zhipu: 'zai', zai: 'zai',
  volcengine: 'volcengine-ark', baidu: 'baidu-qianfan', hunyuan: 'tencent-hunyuan',
};
const DATED = /(-|@)?(20\d{2}-\d{2}-\d{2}|20\d{6}|\d{4})$/; // gpt-4o-2024-08-06, claude-...-20241022, gpt-4-0613
const MODES = new Set(['chat', 'completion', 'responses']);

export async function collect(provider) {
  const url = provider.automation?.endpoint || 'https://raw.githubusercontent.com/BerriAI/litellm/main/model_prices_and_context_window.json';
  const body = await fetchJson(url);
  const collectedAt = nowIso();
  const out = [];
  for (const [key, v] of Object.entries(body)) {
    if (!v || typeof v !== 'object' || key === 'sample_spec') continue;
    const lp = v.litellm_provider;
    const vendor = VENDOR_MAP[lp];
    if (!vendor) continue;
    if (v.mode && !MODES.has(v.mode)) continue;
    if (v.deprecation_date && v.deprecation_date < new Date().toISOString().slice(0, 10)) continue;
    if (DATED.test(key) && !/^o\d|-\d{1,2}b$/.test(key)) continue; // keep undated aliases only
    const input = perTokenToPerM(v.input_cost_per_token);
    const output = perTokenToPerM(v.output_cost_per_token);
    if (input === null && output === null) continue;
    // strip the provider prefix litellm uses for some entries ("gemini/gemini-2.5-pro", "xai/grok-4")
    const modelId = key.includes('/') ? key.split('/').slice(1).join('/') : key;
    out.push({
      provider: 'litellm',
      vendor,
      model_id: modelId,
      display_name: modelId,
      context: v.max_input_tokens ?? v.max_tokens ?? null,
      modality: v.supports_vision ? 'text+image->text' : 'text->text',
      openai_compatible: true,
      base_url: null,
      currency: 'USD',
      price: {
        input, output,
        cache_read: perTokenToPerM(v.cache_read_input_token_cost),
        cache_write: perTokenToPerM(v.cache_creation_input_token_cost),
        currency: 'USD',
      },
      promo: null,
      is_free: input === 0 && output === 0,
      deprecated: v.deprecation_date ? v.deprecation_date : null,
      source: { method: 'direct-api', adapter: id, url: 'https://github.com/BerriAI/litellm/blob/main/model_prices_and_context_window.json', collected_at: collectedAt, confidence: 'api' },
    });
  }
  return out;
}
