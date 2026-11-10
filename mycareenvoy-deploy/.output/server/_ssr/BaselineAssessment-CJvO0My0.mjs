import { n as BASELINE, r as BASELINE_FEATURES } from "./site-DGtN9-jT.mjs";
import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { P as House, X as Check, Z as Building2, n as Video, p as ShieldCheck } from "../_libs/lucide-react.mjs";
import { c as cn, t as Button } from "./primitives-DZ3UawNy.mjs";
import { t as FieldGrid } from "./FormKit-B4tUv92B.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/BaselineAssessment-CJvO0My0.js
var import_jsx_runtime = require_jsx_runtime();
function baselineTotal(location, escort) {
	return (location === "video" ? BASELINE.videoAmount : BASELINE.amount) + (location === "clinic" && escort ? BASELINE.escortAmount : 0);
}
function updateBaseline(values, key, value) {
	const next = {
		...values,
		[key]: value
	};
	if (key === "baseline_location" && value !== "clinic") next["caregiver_escort"] = false;
	if (key === "baseline_location" && value === "video") {
		next["join_video_call"] = false;
		next["family_time_zone"] = "";
	}
	if (key === "join_video_call" && value !== true) next["family_time_zone"] = "";
	return next;
}
function BaselineAssessment() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-10 border-t pt-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-3xl text-primary",
				children: BASELINE.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-3xl text-lg text-muted-foreground",
				children: BASELINE.description
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-4 text-xl font-semibold text-terracotta",
				children: [
					"Video call: $",
					BASELINE.videoAmount,
					". Clinic or home visit: $",
					BASELINE.amount,
					", one-time."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-muted-foreground",
				children: "Waived on annual plans."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-8 text-xl text-primary",
				children: "What's included"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-4 grid gap-3 md:grid-cols-2",
				children: BASELINE_FEATURES.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
						className: "mt-1 size-5 shrink-0 text-primary",
						"aria-hidden": true
					}), f]
				}, f))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-5 text-sm text-muted-foreground",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Not included:" }),
					" ",
					BASELINE.exclusions
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 grid gap-5 md:grid-cols-2",
				children: BASELINE.options.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "rounded-lg border bg-card p-6",
					children: [
						o.id === "clinic" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Building2, {
							className: "size-7 text-primary",
							"aria-hidden": true
						}) : o.id === "video" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Video, {
							className: "size-7 text-primary",
							"aria-hidden": true
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(House, {
							className: "size-7 text-primary",
							"aria-hidden": true
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-3 text-2xl text-primary",
							children: o.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 font-semibold text-terracotta",
							children: ["$", o.id === "video" ? BASELINE.videoAmount : BASELINE.amount]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-muted-foreground",
							children: o.description
						}),
						o.id === "video" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm text-muted-foreground",
							children: "Someone will need to be with your parent to help with the call."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "cta",
							className: "mt-5",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/get-started",
								search: { baseline: o.id },
								children: ["Choose ", o.id === "clinic" ? "clinic assessment" : o.id === "video" ? "video call" : "home visit"]
							})
						})
					]
				}, o.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 border-y py-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-xl text-primary",
					children: "How booking works"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "mt-4 grid gap-5 md:grid-cols-3",
					children: [
						"Request a free enrollment call. We confirm your assessment choice and cost before booking or payment.",
						"We call you within 24 hours to schedule. Most visits happen within 3 to 5 days.",
						"Your parent is seen, and you receive the report within 48 hours."
					].map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "font-semibold text-terracotta",
							children: [i + 1, "."]
						}), s]
					}, s))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 grid gap-6 md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-lg bg-cream p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-xl text-primary",
						children: "Help your parent prepare"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2",
						children: "Please ask your parent to have ready: all current medications (including herbal remedies), any old test results or hospital cards, and a list of symptoms or concerns."
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "flex gap-3 rounded-lg bg-primary-soft p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, {
						className: "size-6 shrink-0 text-primary",
						"aria-hidden": true
					}), "If the doctor finds anything urgent, we contact you immediately and help arrange next steps."]
				})]
			})
		]
	});
}
var baselineFields = [
	{
		name: "baseline_location",
		label: "Baseline assessment",
		type: "radio",
		required: true
	},
	{
		name: "family_time_zone",
		label: "Your time zone",
		type: "text",
		required: true,
		showIf: (v) => v["join_video_call"] === true
	},
	{
		name: "parent_consent",
		label: "Parent consent",
		type: "consent",
		required: true
	}
];
function BaselineSelection({ values, setValue, errors }) {
	const location = values["baseline_location"];
	const total = baselineTotal(location === "home" || location === "video" ? location : "clinic", values["caregiver_escort"] === true);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4 sm:grid-cols-2",
				role: "radiogroup",
				"aria-label": "Baseline assessment",
				"aria-required": "true",
				children: BASELINE.options.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					type: "button",
					variant: "outline",
					role: "radio",
					"aria-checked": location === o.id,
					onClick: () => setValue("baseline_location", o.id),
					className: cn("h-auto min-h-32 flex-col items-start whitespace-normal rounded-lg p-5 text-left", location === o.id && "border-primary bg-primary-soft ring-2 ring-primary"),
					children: [
						o.id === "clinic" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Building2, { "aria-hidden": true }) : o.id === "video" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Video, { "aria-hidden": true }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(House, { "aria-hidden": true }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
							o.title,
							" ($",
							o.id === "video" ? BASELINE.videoAmount : BASELINE.amount,
							")"
						] }),
						o.id === "home" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm font-normal text-muted-foreground",
							children: "Available across Lagos. We'll confirm availability for your parent's area within 24 hours."
						})
					]
				}, o.id))
			}),
			errors["baseline_location"] && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				role: "alert",
				className: "text-destructive",
				children: errors["baseline_location"]
			}),
			location === "clinic" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
				className: "mb-3 font-medium",
				children: "Would you like a caregiver to accompany your parent to and from the clinic?"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-3",
				children: [{
					value: false,
					label: "No, we'll arrange transport"
				}, {
					value: true,
					label: `Yes, add a caregiver escort (+$${BASELINE.escortAmount})`
				}].map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "radio",
						name: "caregiver_escort",
						className: "size-5 accent-primary",
						checked: values["caregiver_escort"] === true === o.value,
						onChange: () => setValue("caregiver_escort", o.value)
					}), o.label]
				}, o.label))
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldGrid, {
				fields: [...location === "video" ? [] : [{
					name: "join_video_call",
					label: "Video call",
					type: "consent",
					placeholder: "I'd like to join the assessment by video call."
				}, {
					name: "family_time_zone",
					label: "Your time zone",
					type: "text",
					required: true,
					placeholder: "e.g. US Central or UK",
					showIf: (v) => v["join_video_call"] === true
				}], {
					name: "parent_consent",
					label: "Parent consent",
					type: "consent",
					required: true,
					placeholder: "My parent knows about this visit and has agreed to it."
				}],
				values,
				setValue,
				errors
			}),
			(location === "clinic" || location === "home" || location === "video") && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border-t pt-5",
				"aria-live": "polite",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "font-semibold",
					children: [
						location === "home" ? "Doctor home visit" : location === "video" ? "Video call baseline" : "Baseline at partner clinic",
						": $",
						location === "video" ? BASELINE.videoAmount : BASELINE.amount,
						". ",
						location === "clinic" && values["caregiver_escort"] === true && `Caregiver escort: $${BASELINE.escortAmount}. `,
						"Total: $",
						total
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: location === "video" ? `If the doctor recommends a clinic or home visit within ${BASELINE.videoCreditDays} days, your $${BASELINE.videoAmount} counts toward it.` : "Lab tests and medication, if needed, are charged at cost and only after you approve."
				})]
			})
		]
	});
}
//#endregion
export { updateBaseline as a, baselineTotal as i, BaselineSelection as n, baselineFields as r, BaselineAssessment as t };
