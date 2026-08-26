import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

export const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');
export const p = (...s) => path.join(ROOT, ...s);

export function readJson(file, fallback) {
  try { return JSON.parse(fs.readFileSync(file, 'utf8')); } catch (e) { if (fallback !== undefined) return fallback; throw e; }
}
export function writeJson(file, data) {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, JSON.stringify(data, null, 2) + '\n');
}
export const nowIso = () => new Date().toISOString();
export const today = () => nowIso().slice(0, 10);

/** Per-token USD string/number -> USD per 1M tokens (rounded to 6 dp). null-safe. */
export function perTokenToPerM(v) {
  if (v === null || v === undefined || v === '') return null;
  const n = Number(v);
  if (!Number.isFinite(n)) return null;
  return round(n * 1_000_000);
}
export const round = (n, dp = 6) => (n === null || n === undefined ? null : Math.round(n * 10 ** dp) / 10 ** dp);

/** Parse "$1.25", "¥0.8", "1.25 / 1M", "0.14" into a number (or null). */
export function parseMoney(s) {
  if (typeof s === 'number') return s;
  if (!s) return null;
  const m = String(s).replace(/,/g, '').match(/-?\d+(\.\d+)?/);
  return m ? Number(m[0]) : null;
}

/** Currency -> USD. Rates overridable via env (CNY_USD_RATE, EUR_USD_RATE). */
export const FX = {
  USD: 1,
  CNY: Number(process.env.CNY_USD_RATE || 0.14),
  EUR: Number(process.env.EUR_USD_RATE || 1.08),
};
export function toUsd(amount, currency = 'USD') {
  if (amount === null || amount === undefined) return null;
  const rate = FX[String(currency).toUpperCase()];
  if (!rate) throw new Error(`No FX rate for ${currency}; set ${currency.toUpperCase()}_USD_RATE`);
  return round(amount * rate);
}

/** "HHMM" clock int (e.g. 1630) -> "16:30" */
export const hhmm = (n) => { const s = String(n).padStart(4, '0'); return `${s.slice(0, 2)}:${s.slice(2)}`; };

export function slug(s) {
  return String(s).toLowerCase().replace(/[^a-z0-9.+-]+/g, '-').replace(/^-+|-+$/g, '');
}
export function log(...a) { console.error('[price-tracker]', ...a); }
