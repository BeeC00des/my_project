export const AVAILABILITY_DELAY_MS = 25_000;
export const AVAILABILITY_SCROLL_THRESHOLD = 0.5;
const KEY = "mycareenvoy-visitor";
type Visitor = { shown?: boolean; engaged?: boolean };
let fallback: Visitor = {};
export function readVisitor(): Visitor {
  try { return { ...fallback, ...JSON.parse(localStorage.getItem(KEY) ?? "{}") }; }
  catch { return fallback; }
}
export function markVisitor(value: Visitor) {
  fallback = { ...readVisitor(), ...value };
  try { localStorage.setItem(KEY, JSON.stringify(fallback)); } catch { /* Storage may be blocked. */ }
}
export function markEngaged() { markVisitor({ engaged: true }); }
export function canAutoShow(visitor: Visitor, pathname: string) {
  return !visitor.shown && !visitor.engaged && !["/get-started", "/checkout", "/admin"].some((p) => pathname.startsWith(p));
}
export function openAvailability() { window.dispatchEvent(new Event("open-availability")); }