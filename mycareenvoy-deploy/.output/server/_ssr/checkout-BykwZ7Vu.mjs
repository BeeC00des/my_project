import { r as __toESM } from "../_runtime.mjs";
import { d as PAYABLE_SERVICES, n as BASELINE, u as PAYABLE_ADDONS, v as whatsappLink } from "./site-DGtN9-jT.mjs";
import { _ as require_jsx_runtime, v as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { O as Lock, S as Minus, it as ArrowLeft, v as Plus } from "../_libs/lucide-react.mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { c as cn, i as PageHero, t as Button } from "./primitives-DZ3UawNy.mjs";
import { r as markEngaged } from "./visitor-engagement-B7t0jAdy.mjs";
import { t as Route } from "./checkout-BdY04dzM.mjs";
import { t as Label$1 } from "../_libs/radix-ui__react-label.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/checkout-BykwZ7Vu.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Input = import_react.forwardRef(({ className, type, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type,
		className: cn("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	});
});
Input.displayName = "Input";
var labelVariants = cva("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70");
var Label = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label$1, {
	ref,
	className: cn(labelVariants(), className),
	...props
}));
Label.displayName = Label$1.displayName;
function Page() {
	const { service: initial, baseline, escort: initialEscort } = Route.useSearch();
	const [serviceId, setServiceId] = (0, import_react.useState)(PAYABLE_SERVICES.find((s) => s.id === initial)?.id ?? "baseline");
	const service = PAYABLE_SERVICES.find((s) => s.id === serviceId);
	const [optionId, setOptionId] = (0, import_react.useState)(initial === "baseline" && baseline ? baseline : service?.options[0]?.id ?? "clinic");
	const option = service?.options.find((o) => o.id === optionId) ?? service?.options[0];
	const [escort, setEscort] = (0, import_react.useState)(initialEscort === true && baseline !== "home");
	const [qty, setQty] = (0, import_react.useState)({});
	const [name, setName] = (0, import_react.useState)("");
	const [email, setEmail] = (0, import_react.useState)("");
	const [sent, setSent] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		markEngaged();
	}, []);
	const lines = (0, import_react.useMemo)(() => [
		...service && option ? [{
			label: `${service.name}${service.options.length > 1 ? `, ${option.label}` : ""}`,
			amount: option.amount,
			q: 1
		}] : [],
		...serviceId === "baseline" && option?.id === "clinic" && escort ? [{
			label: "Caregiver escort",
			amount: BASELINE.escortAmount,
			q: 1
		}] : [],
		...PAYABLE_ADDONS.filter((a) => qty[a.id]).map((a) => ({
			label: a.label,
			amount: a.amount,
			q: qty[a.id] ?? 0
		}))
	], [
		service,
		option,
		qty,
		serviceId,
		escort
	]);
	const total = lines.reduce((t, l) => t + l.amount * l.q, 0);
	const change = (id, d) => setQty((q) => ({
		...q,
		[id]: Math.max(0, Math.min(10, (q[id] ?? 0) + d))
	}));
	const pickService = (id) => {
		const first = PAYABLE_SERVICES.find((s) => s.id === id)?.options[0];
		if (!first) return;
		setServiceId(id);
		setOptionId(first.id);
		setEscort(false);
	};
	if (!service || !option) return null;
	const summary = `Hi MyCareEnvoy, I'd like to pay for:\n${lines.map((l) => `- ${l.label} x${l.q}: $${l.amount * l.q}`).join("\n")}\nTotal: $${total}\nName: ${name}\nEmail: ${email}`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: "Book a service",
		title: "Choose, add extras, pay.",
		intro: "Three simple steps. You see your total before you pay."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-12 md:py-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page grid gap-10 lg:grid-cols-[1.4fr_1fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "text-2xl text-primary",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-terracotta",
							children: "1."
						}), " Choose a service"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-5 grid gap-3 sm:grid-cols-2",
						role: "radiogroup",
						children: PAYABLE_SERVICES.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "outline",
							type: "button",
							role: "radio",
							"aria-checked": s.id === serviceId,
							onClick: () => pickService(s.id),
							className: cn("h-auto flex-col items-start whitespace-normal rounded-lg border bg-card p-4 text-left transition", s.id === serviceId ? "border-primary ring-2 ring-primary" : "hover:border-primary/50"),
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block font-serif text-lg text-primary",
									children: s.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-1 block text-sm text-muted-foreground",
									children: s.summary
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "mt-2 block font-semibold",
									children: ["From $", Math.min(...s.options.map((o) => o.amount))]
								})
							]
						}, s.id))
					}),
					service.options.length > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 flex flex-wrap gap-2",
						children: service.options.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							type: "button",
							variant: o.id === optionId ? "default" : "outline",
							onClick: () => {
								setOptionId(o.id);
								if (o.id !== "clinic") setEscort(false);
							},
							children: [
								o.label,
								" · $",
								o.amount
							]
						}, o.id))
					}),
					serviceId === "baseline" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-sm text-muted-foreground",
							children: BASELINE.options.find((o) => o.id === option.id)?.description
						}),
						option.id === "clinic" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "mt-4 flex items-center gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "checkbox",
									checked: escort,
									onChange: (e) => setEscort(e.target.checked),
									className: "size-5 accent-primary"
								}),
								"Add a caregiver escort (+$",
								BASELINE.escortAmount,
								")"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm text-muted-foreground",
							children: BASELINE.exclusions
						})
					] })
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "text-2xl text-primary",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-terracotta",
								children: "2."
							}),
							" Add extras ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-sans text-base text-muted-foreground",
								children: "(optional)"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-5 divide-y rounded-lg border bg-card",
						children: PAYABLE_ADDONS.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center justify-between gap-4 p-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-medium",
								children: a.label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-sm text-muted-foreground",
								children: [
									"$",
									a.amount,
									" each"
								]
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										type: "button",
										size: "icon",
										variant: "outline",
										"aria-label": `Remove ${a.label}`,
										onClick: () => change(a.id, -1),
										disabled: !qty[a.id],
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, {})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "w-6 text-center font-semibold",
										"aria-live": "polite",
										children: qty[a.id] ?? 0
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										type: "button",
										size: "icon",
										variant: "outline",
										"aria-label": `Add ${a.label}`,
										onClick: () => change(a.id, 1),
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {})
									})
								]
							})]
						}, a.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-muted-foreground",
						children: "Transport, supplies and lab tests are billed at cost, with receipts."
					})
				] })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "h-fit rounded-lg border bg-cream p-6 lg:sticky lg:top-28",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "text-2xl text-primary",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-terracotta",
							children: "3."
						}), " Review and pay"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-5 space-y-2",
						children: lines.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex justify-between gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [l.label, l.q > 1 && ` × ${l.q}`] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-semibold",
								children: ["$", l.amount * l.q]
							})]
						}, l.label))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 flex justify-between border-t pt-4 font-serif text-2xl",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Total" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
							"$",
							total,
							" USD"
						] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						className: "mt-6 space-y-4",
						onSubmit: (e) => {
							e.preventDefault();
							window.open(whatsappLink(summary), "_blank", "noopener");
							setSent(true);
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "co-name",
								children: "Your name"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "co-name",
								required: true,
								value: name,
								onChange: (e) => setName(e.target.value)
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "co-email",
								children: "Email for your receipt"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "co-email",
								type: "email",
								required: true,
								value: email,
								onChange: (e) => setEmail(e.target.value)
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								type: "submit",
								variant: "cta",
								className: "w-full",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { "aria-hidden": true }), " Continue to payment"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted-foreground",
								children: sent ? "Complete your message in WhatsApp to request a payment link. No payment has been taken." : "Online payment isn't connected yet. Request a secure payment link on WhatsApp."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/plans",
						className: "mt-5 inline-flex items-center gap-1 text-sm text-primary underline",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {
							className: "size-4",
							"aria-hidden": true
						}), " Back to plans"]
					})
				]
			})]
		})
	})] });
}
//#endregion
export { Page as component };
