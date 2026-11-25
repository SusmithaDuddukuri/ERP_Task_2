/** Format a numeric amount as United States dollars. */
export function formatMoney(n) {
  const amount = Number.isFinite(Number(n)) ? Number(n) : 0;
  try { return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount); }
  catch { return `$${(Number(n) || 0).toFixed(2)}`; }
}
export function formatDate(iso) {
  try { return new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', year: 'numeric' }).format(new Date(iso)); }
  catch { return String(iso || ''); }
}
export function uid(prefix = 'id') {
  return `${prefix}_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 7)}`;
}
