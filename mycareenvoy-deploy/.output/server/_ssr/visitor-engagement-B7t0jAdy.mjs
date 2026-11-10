//#region node_modules/.nitro/vite/services/ssr/assets/visitor-engagement-B7t0jAdy.js
var AVAILABILITY_DELAY_MS = 25e3;
var KEY = "mycareenvoy-visitor";
var fallback = {};
function readVisitor() {
	try {
		return {
			...fallback,
			...JSON.parse(localStorage.getItem(KEY) ?? "{}")
		};
	} catch {
		return fallback;
	}
}
function markVisitor(value) {
	fallback = {
		...readVisitor(),
		...value
	};
	try {
		localStorage.setItem(KEY, JSON.stringify(fallback));
	} catch {}
}
function markEngaged() {
	markVisitor({ engaged: true });
}
function canAutoShow(visitor, pathname) {
	return !visitor.shown && !visitor.engaged && ![
		"/get-started",
		"/checkout",
		"/admin"
	].some((p) => pathname.startsWith(p));
}
function openAvailability() {
	window.dispatchEvent(new Event("open-availability"));
}
//#endregion
export { openAvailability as a, markVisitor as i, canAutoShow as n, readVisitor as o, markEngaged as r, AVAILABILITY_DELAY_MS as t };
