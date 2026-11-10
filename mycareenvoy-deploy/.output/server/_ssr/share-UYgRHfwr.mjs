import { r as __toESM } from "../_runtime.mjs";
import { f as PLANS, m as SITE } from "./site-DGtN9-jT.mjs";
import { _ as require_jsx_runtime, v as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { E as Mail, G as Copy, X as Check, w as MessageCircle } from "../_libs/lucide-react.mjs";
import { i as PageHero, t as Button } from "./primitives-DZ3UawNy.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/share-UYgRHfwr.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var message = `I found MyCareEnvoy for Mummy/Daddy in Nigeria. A verified registered nurse visits at home, a doctor oversees the care plan, and we all get a report after every visit. We can split the cost. Have a look: ${SITE.url}`;
function Page() {
	const [copied, setCopied] = (0, import_react.useState)(false);
	const copy = async () => {
		await navigator.clipboard.writeText(SITE.url);
		setCopied(true);
		setTimeout(() => setCopied(false), 2e3);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: "For families",
		title: "Deciding with your siblings?",
		intro: "Here's a short summary you can send in one tap."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page max-w-2xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-3xl bg-card p-8 shadow-lift",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-serif text-3xl text-primary",
							children: "MyCareEnvoy, in a nutshell"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-lg",
							children: "A care service for our parents in Nigeria while we're abroad."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-5 space-y-2",
							children: [
								"A dedicated, verified registered nurse visits them at home",
								"A doctor assesses them first and oversees their care plan",
								"After every visit, we all get a clear report: vitals, medications, concerns",
								"A caregiver can go with them to hospital appointments"
							].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
										className: "mt-1 size-5 shrink-0 text-primary",
										"aria-hidden": true
									}),
									" ",
									t
								]
							}, t))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-6 font-semibold",
							children: ["Plans: ", PLANS.map((p) => `${p.name} ${p.price}${p.period}`).join(" • ")]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-primary",
							children: SITE.url
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 grid gap-3 sm:grid-cols-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "whatsapp",
							size: "lg",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: `https://wa.me/?text=${encodeURIComponent(message)}`,
								target: "_blank",
								rel: "noopener noreferrer",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { "aria-hidden": true }), " Share on WhatsApp"]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "outline",
							size: "lg",
							onClick: copy,
							children: copied ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { "aria-hidden": true }), " Copied"] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { "aria-hidden": true }), " Copy link"] })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "outline",
							size: "lg",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: `mailto:?subject=${encodeURIComponent("Care for Mummy and Daddy in Nigeria")}&body=${encodeURIComponent(message)}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { "aria-hidden": true }), " Share by email"]
							})
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 rounded-3xl bg-primary-soft p-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-xl text-primary",
						children: "Splitting the cost"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-muted-foreground",
						children: "Many families share the monthly plan between two, three or more siblings. We can set it up so each person pays their part directly, and everyone receives the same visit reports."
					})]
				})
			]
		})
	})] });
}
//#endregion
export { Page as component };
