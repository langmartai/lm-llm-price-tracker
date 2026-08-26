// Tiny fetch helpers — Node >= 20, no dependencies.
export async function fetchJson(url, { headers = {}, timeoutMs = 60_000, retries = 2 } = {}) {
  let lastErr;
  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      const res = await fetch(url, {
        headers: { 'user-agent': 'lm-llm-price-tracker/0.1 (+https://github.com/langmartai/lm-llm-price-tracker)', accept: 'application/json', ...headers },
        signal: AbortSignal.timeout(timeoutMs),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status} ${res.statusText} for ${url}`);
      return await res.json();
    } catch (e) {
      lastErr = e;
      if (attempt < retries) await new Promise((r) => setTimeout(r, 1500 * (attempt + 1)));
    }
  }
  throw lastErr;
}

export async function fetchText(url, { headers = {}, timeoutMs = 60_000 } = {}) {
  const res = await fetch(url, {
    headers: { 'user-agent': 'Mozilla/5.0 (compatible; lm-llm-price-tracker/0.1)', accept: 'text/html,*/*', ...headers },
    signal: AbortSignal.timeout(timeoutMs),
  });
  if (!res.ok) throw new Error(`HTTP ${res.status} ${res.statusText} for ${url}`);
  return await res.text();
}
