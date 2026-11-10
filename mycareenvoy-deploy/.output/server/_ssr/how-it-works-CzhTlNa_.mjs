import { n as BASELINE } from "./site-DGtN9-jT.mjs";
import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { X as Check, l as TriangleAlert } from "../_libs/lucide-react.mjs";
import { a as Reveal, i as PageHero, n as CtaBand, o as SectionHeading } from "./primitives-DZ3UawNy.mjs";
import { t as IMG } from "./images-DLX2myIW.mjs";
import { t as BaselineAssessment } from "./BaselineAssessment-CJvO0My0.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/how-it-works-CzhTlNa_.js
var import_jsx_runtime = require_jsx_runtime();
var steps = [
	{
		img: IMG.problem,
		t: "Tell us about your parent",
		b: "Start with a free 20 to 30 minute enrollment call. We learn about your parent's health and routine, then recommend a plan."
	},
	{
		img: IMG.doctor,
		t: BASELINE.title,
		b: BASELINE.description
	},
	{
		img: IMG.arrival,
		t: "Meet their nurse",
		b: "We match your parent with a dedicated registered nurse who lives nearby and speaks their language. Where needed, a trusted caregiver can accompany them to hospital appointments and errands."
	},
	{
		img: IMG.couple,
		t: "Stay in the loop",
		b: "After every visit, you get a clear report by app, email or web. Vitals, medications, concerns, and next steps. Your siblings see the same report, so everyone is on the same page."
	}
];
var timeline = [
	["Day 1", "Intake call with you, by phone or WhatsApp."],
	["Within the first week", "Baseline assessment at a partner clinic, at home or by video call, and a care plan agreed with you."],
	["Week 1 to 2", "Nurse introduction visit. Friendly, unhurried, a chance for your parent to get comfortable."],
	["After the first full visit", "Your first full visit report arrives."],
	["Day 30", "A check-in call with you to review how things are going and adjust the plan."]
];
var emergency = [
	["The nurse assesses", "Vitals, symptoms and safety, right there and then."],
	["A doctor is consulted", "The nurse speaks with the overseeing doctor immediately."],
	["You're informed immediately", "We call or message you and any siblings on the care plan."],
	["Transfer if needed", "We arrange transfer to a partner hospital and stay with the situation."]
];
var visit = [
	"Vital signs: blood pressure, pulse, blood sugar, weight, temperature",
	"Medication review and refill check",
	"Symptom check and any new concerns",
	"Home safety check: lighting, floors, bathroom, stairs",
	"Wellbeing and a proper conversation",
	"Coordination with pharmacies and clinics"
];
function Page() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "How it works",
			title: "Care that's planned, regular, and reported.",
			intro: "Here's exactly what happens from the moment you reach out, so there are no surprises for you or your parent."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container-page space-y-16 md:space-y-24",
				children: steps.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid items-center gap-10 md:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: s.img.src,
						alt: s.img.alt,
						loading: "lazy",
						width: 1200,
						height: 912,
						className: `aspect-[4/3] w-full rounded-3xl object-cover shadow-soft ${i % 2 ? "md:order-2" : ""}`
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-serif text-6xl text-gold",
							children: i + 1
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-2 text-3xl text-primary",
							children: s.t
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-lg text-muted-foreground",
							children: s.b
						})
					] })]
				}), i === 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BaselineAssessment, {})] }, s.t))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-primary-soft py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Timeline",
					title: "Your first 30 days"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "mt-10 border-l-2 border-primary/30 pl-6 md:pl-10",
					children: timeline.map(([when, what]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "relative pb-8 last:pb-0",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "absolute -left-[33px] top-1.5 size-4 rounded-full border-4 border-primary-soft bg-terracotta md:-left-[49px]",
								"aria-hidden": true
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-semibold text-terracotta",
								children: when
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-lg",
								children: what
							})
						]
					}, when))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page grid gap-12 md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
						eyebrow: "Emergencies",
						title: "What happens in an emergency"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "mt-8 space-y-4",
						children: emergency.map(([t, b], i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-4 rounded-2xl bg-card p-5 shadow-soft",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid size-9 shrink-0 place-items-center rounded-full bg-primary font-semibold text-primary-foreground",
								children: i + 1
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-semibold",
								children: t
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-muted-foreground",
								children: b
							})] })]
						}, t))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-6 flex gap-3 rounded-2xl bg-gold-soft p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
							className: "mt-1 size-5 shrink-0 text-terracotta",
							"aria-hidden": true
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "MyCareEnvoy is not an ambulance service. Please keep local emergency contacts and a nearby relative or neighbour on hand for urgent situations." })]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Every visit",
					title: "What a nurse visit includes"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-8 space-y-3 rounded-3xl bg-card p-7 shadow-soft",
					children: visit.map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
								className: "mt-1 size-5 shrink-0 text-primary",
								"aria-hidden": true
							}),
							" ",
							v
						]
					}, v))
				})] })]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBand, {
			image: IMG.meal.src,
			title: "Ready to know how they're really doing?"
		})
	] });
}
//#endregion
export { Page as component };
