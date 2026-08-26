// Adapter: lm-assist-browser  (method: lm-assist-browser)
//
// Uses the lm-assist Core REST API on the node this script runs on to drive the node's OWN Chrome
// (Claude-in-Chrome extension) with a natural-language task. This is the same call the `browser_task`
// MCP tool makes (core/src/mcp-server/tools/browser-task.ts):
//
//   POST {LM_ASSIST_URL}/agent/execute
//        body: { prompt, chrome:true, background:true, permissionMode:'bypassPermissions', cwd? }
//        -> { success, data:{ executionId, statusUrl, resultUrl } }
//   GET  {LM_ASSIST_URL}/agent/execution/{id}                  -> { status, isRunning, ... }
//   GET  {LM_ASSIST_URL}/agent/execution/{id}/result?wait=false -> { completed, result:{ result:"<text>" }, error }
//
// Auth: header `x-api-key` = contents of ~/.lm-assist/api-token (raw string). Override with LM_ASSIST_API_KEY.
// Port: 3100 (prod install) / 3200 (dev repo). Override with LM_ASSIST_URL, e.g. http://127.0.0.1:3200.
//
// LOGIN-ONLY PAGES (provider.login_required_for_pricing === true): the task tells the browser agent to use the
// already-logged-in Chrome profile and, if a login wall appears, to STOP and report `{"login_required":true}`.
// The collector then prints the console URL so the operator can log in once (Chrome keeps the session) and re-run.
// Credentials are never typed by the agent.
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { nowIso, round, toUsd } from '../lib/util.js';

export const id = 'lm-assist-browser';

function baseUrl() {
  if (process.env.LM_ASSIST_URL) return process.env.LM_ASSIST_URL.replace(/\/$/, '');
  try {
    const cfg = JSON.parse(fs.readFileSync(path.join(os.homedir(), '.claude-code-config.json'), 'utf8'));
    if (cfg.devModeEnabled) return 'http://127.0.0.1:3200';
  } catch { /* prod default */ }
  return 'http://127.0.0.1:3100';
}
function apiKey() {
  if (process.env.LM_ASSIST_API_KEY) return process.env.LM_ASSIST_API_KEY;
  const dataDir = process.env.LM_ASSIST_DATA_DIR || path.join(os.homedir(), '.lm-assist');
  try { return fs.readFileSync(path.join(dataDir, 'api-token'), 'utf8').trim(); } catch { return null; }
}
function headers() {
  const k = apiKey();
  return { 'content-type': 'application/json', ...(k ? { 'x-api-key': k } : {}) };
}
async function call(method, route, body) {
  const res = await fetch(`${baseUrl()}${route}`, { method, headers: headers(), body: body ? JSON.stringify(body) : undefined, signal: AbortSignal.timeout(60_000) });
  const text = await res.text();
  let json; try { json = JSON.parse(text); } catch { throw new Error(`lm-assist ${method} ${route}: non-JSON ${res.status}: ${text.slice(0, 200)}`); }
  if (!res.ok || json.success === false) throw new Error(`lm-assist ${method} ${route}: ${res.status} ${json.error?.message || json.error || text.slice(0, 200)}`);
  return json.data ?? json;
}

export function buildPrompt(provider) {
  const url = provider.automation?.endpoint || provider.pricing_url;
  const login = provider.login_required_for_pricing;
  return [
    `You are collecting LLM API prices for a price-comparison dataset. Open ${url} in the browser.`,
    login
      ? `This page may require being logged in. Use the browser's existing logged-in session. If a login form or "sign in" wall blocks the pricing data, DO NOT enter any credentials — immediately respond with exactly: {"login_required":true,"url":"${url}"}`
      : `No login is needed. Dismiss cookie banners if present.`,
    `Find the per-token price table(s) for text generation models (chat/completions). Expand collapsed sections, switch tabs, and scroll as needed. Also look for any PROMOTION: limited-time discount, off-peak / time-of-day pricing, launch/introductory price, "new user"/free quota, batch discount, subscription "coding plan"/"token plan" offers. Capture the promo price and any end date.`,
    `Return ONLY a JSON object (no prose, no markdown fences) with this shape:`,
    `{"provider":"${provider.id}","currency":"USD or CNY as shown","unit":"per_1M_tokens" (convert per-1K to per-1M by x1000),"models":[{"model_id":"exact api model id as shown","display_name":"","input":number,"output":number,"cache_read":number|null,"context":number|null,"promo":{"type":"off-peak|limited-time|launch|free-tier|batch|subscription","input":number|null,"output":number|null,"windows":"e.g. 16:30-00:30 UTC","ends_at":"YYYY-MM-DD|null","note":""}|null,"evidence":"short quote of the row"}],"promotions":[{"title":"","type":"","detail":"","price":number|null,"promo_price":number|null,"currency":"","period":"month|null","valid_until":"YYYY-MM-DD|null"}],"page_url":"${url}","notes":""}`,
    `Do not invent prices. If a value is not shown, use null.`,
  ].join('\n');
}

function parseJsonFromText(text) {
  if (!text) return null;
  const fenced = text.match(/```(?:json)?\s*([\s\S]*?)```/);
  const candidates = [fenced?.[1], text.slice(text.indexOf('{')), text];
  for (const c of candidates) {
    if (!c) continue;
    try { return JSON.parse(c.trim()); } catch { /* try next */ }
    // greedy: last closing brace
    const end = c.lastIndexOf('}');
    if (end > 0) { try { return JSON.parse(c.slice(0, end + 1).trim()); } catch { /* next */ } }
  }
  return null;
}

export async function collect(provider, { pollMs = 5000, timeoutMs = 15 * 60_000, cwd } = {}) {
  const prompt = buildPrompt(provider);
  const start = await call('POST', '/agent/execute', { prompt, chrome: true, background: true, permissionMode: 'bypassPermissions', ...(cwd ? { cwd } : {}) });
  const execId = start.executionId;
  if (!execId) throw new Error('lm-assist /agent/execute returned no executionId');
  console.error(`[lm-assist-browser] ${provider.id}: execution ${execId} started (${baseUrl()})`);

  const deadline = Date.now() + timeoutMs;
  let resultText = null;
  while (Date.now() < deadline) {
    await new Promise((r) => setTimeout(r, pollMs));
    const st = await call('GET', `/agent/execution/${encodeURIComponent(execId)}`);
    if (st.isRunning === false || ['completed', 'failed', 'aborted', 'timeout'].includes(st.status)) {
      const rs = await call('GET', `/agent/execution/${encodeURIComponent(execId)}/result?wait=false`);
      if (rs.error) throw new Error(`browser task failed: ${rs.error}`);
      resultText = rs.result?.result ?? rs.result ?? null;
      if (typeof resultText !== 'string') resultText = JSON.stringify(resultText);
      break;
    }
  }
  if (resultText === null) throw new Error(`browser task ${execId} timed out after ${timeoutMs / 1000}s`);

  // keep the raw transcript for debugging (gitignored)
  try {
    const rawDir = path.join(process.cwd(), 'data', 'browser-raw');
    fs.mkdirSync(rawDir, { recursive: true });
    fs.writeFileSync(path.join(rawDir, `${provider.id}-${Date.now()}.txt`), resultText);
  } catch { /* ignore */ }

  const parsed = parseJsonFromText(resultText);
  if (!parsed) throw new Error(`browser task ${execId}: no JSON in result: ${String(resultText).slice(0, 300)}`);
  if (parsed.login_required) {
    const err = new Error(`LOGIN REQUIRED: open ${provider.console_url || parsed.url || provider.pricing_url} in this node's Chrome, sign in once, then re-run.`);
    err.code = 'LOGIN_REQUIRED';
    err.provider = provider.id;
    throw err;
  }
  const collectedAt = nowIso();
  const currency = (parsed.currency || provider.currency || 'USD').toUpperCase().replace('RMB', 'CNY');
  const mul = parsed.unit === 'per_1K_tokens' ? 1000 : 1;
  const models = (parsed.models || []).filter((m) => m && m.model_id).map((m) => ({
    provider: provider.id,
    vendor: provider.id,
    model_id: String(m.model_id).trim(),
    display_name: m.display_name || m.model_id,
    context: m.context ?? null,
    modality: null,
    openai_compatible: provider.openai_compatible !== false,
    base_url: provider.base_url || null,
    currency,
    price: {
      input: m.input === null || m.input === undefined ? null : round(Number(m.input) * mul),
      output: m.output === null || m.output === undefined ? null : round(Number(m.output) * mul),
      cache_read: m.cache_read === null || m.cache_read === undefined ? null : round(Number(m.cache_read) * mul),
      cache_write: null,
      currency,
    },
    promo: m.promo && (m.promo.input !== null || m.promo.output !== null || m.promo.type)
      ? {
          active: true,
          type: m.promo.type || 'limited-time',
          input: m.promo.input === null || m.promo.input === undefined ? null : round(Number(m.promo.input) * mul),
          output: m.promo.output === null || m.promo.output === undefined ? null : round(Number(m.promo.output) * mul),
          windows: m.promo.windows ? [{ days: 'daily', utc: m.promo.windows }] : [],
          starts_at: null, ends_at: m.promo.ends_at || null,
          note: m.promo.note || '', source_url: parsed.page_url || provider.pricing_url,
        }
      : null,
    is_free: Number(m.input) === 0 && Number(m.output) === 0,
    source: { method: 'lm-assist-browser', adapter: id, url: parsed.page_url || provider.pricing_url, collected_at: collectedAt, confidence: 'browser', evidence: m.evidence || null, execution_id: execId },
  }));
  const promotions = (parsed.promotions || []).map((x) => ({ ...x, source_url: parsed.page_url || provider.pricing_url, confidence: 'browser', collected_at: collectedAt }));
  return { models, promotions };
}

// Small helper so other code can convert a native price to USD consistently
export const usd = (amount, currency) => toUsd(amount, currency);
