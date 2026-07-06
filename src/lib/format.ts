/** Formats a number into a compact label, e.g. 1_700_000 → "1.7M", 500_000 → "500K", 400 → "400". */
export function formatCompact(n: number): string {
  const abs = Math.abs(n);
  if (abs >= 1_000_000) return trimDecimal(n / 1_000_000) + "M";
  if (abs >= 1_000) return trimDecimal(n / 1_000) + "K";
  return String(n);
}

/** One decimal place, with a trailing ".0" dropped (1.0 → "1", 1.7 → "1.7"). */
function trimDecimal(value: number): string {
  return (Math.round(value * 10) / 10).toString();
}
