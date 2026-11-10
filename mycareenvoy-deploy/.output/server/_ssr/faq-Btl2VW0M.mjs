import { r as __toESM } from "../_runtime.mjs";
import { f as PLANS, p as PLAN_COMPARISON } from "./site-DGtN9-jT.mjs";
import { _ as require_jsx_runtime, a as AccordionTrigger$1, i as AccordionItem$1, n as AccordionContent$1, r as AccordionHeader, t as Accordion$1, v as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { L as HeartPulse, S as Minus, U as Droplet, X as Check, Y as ChevronDown, h as Scale, ot as Activity, y as Pill } from "../_libs/lucide-react.mjs";
import { a as Reveal, c as cn, t as Button } from "./primitives-DZ3UawNy.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/faq-Btl2VW0M.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Accordion = Accordion$1;
var AccordionItem = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionItem$1, {
	ref,
	className: cn("border-b", className),
	...props
}));
AccordionItem.displayName = "AccordionItem";
var AccordionTrigger = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionHeader, {
	className: "flex",
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionTrigger$1, {
		ref,
		className: cn("flex flex-1 items-center justify-between py-4 text-sm font-medium cursor-pointer transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180", className),
		...props,
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })]
	})
}));
AccordionTrigger.displayName = AccordionTrigger$1.displayName;
var AccordionContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent$1, {
	ref,
	className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("pb-4 pt-0", className),
		children
	})
}));
AccordionContent.displayName = AccordionContent$1.displayName;
function PlanCards({ compact = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid gap-6 md:grid-cols-3",
		children: PLANS.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
			delay: i * 90,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: cn("relative flex h-full flex-col rounded-3xl bg-card p-7 shadow-soft", p.popular && "ring-2 ring-gold shadow-lift"),
				children: [
					p.popular && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "absolute -top-3 left-7 rounded-full bg-gold px-3 py-1 text-xs font-bold uppercase tracking-wide text-foreground",
						children: "Most families choose this"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-2xl text-primary",
						children: p.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-muted-foreground",
						children: p.tagline
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-serif text-4xl",
							children: p.price
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-muted-foreground",
							children: p.period
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-6 flex-1 space-y-3",
						children: (compact ? p.features.slice(0, 4) : p.features).map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
									className: "mt-1 size-5 shrink-0 text-primary",
									"aria-hidden": true
								}),
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: f })
							]
						}, f))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: p.popular ? "cta" : "default",
						size: "lg",
						className: "mt-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/get-started",
							search: { plan: p.id },
							children: "Choose this plan"
						})
					})
				]
			})
		}, p.id))
	});
}
function PlanTable() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "overflow-x-auto rounded-3xl bg-card shadow-soft",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
			className: "w-full min-w-[560px] text-left",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("caption", {
					className: "sr-only",
					children: "Plan comparison"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
					className: "border-b",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						scope: "col",
						className: "p-4 font-medium text-muted-foreground",
						children: "Feature"
					}), PLANS.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						scope: "col",
						className: "p-4 font-serif text-lg text-primary",
						children: p.name
					}, p.id))]
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: PLAN_COMPARISON.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
					className: "border-b last:border-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						scope: "row",
						className: "p-4 font-normal",
						children: row.feature
					}), PLANS.map((p) => {
						const v = row.values[p.id];
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "p-4",
							children: v === true ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
								className: "size-5 text-primary",
								"aria-label": "Included"
							}) : v === false ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, {
								className: "size-5 text-muted-foreground",
								"aria-label": "Not included"
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm font-medium",
								children: v
							})
						}, p.id);
					})]
				}, row.feature)) })
			]
		})
	});
}
function FaqList({ items }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Accordion, {
		type: "single",
		collapsible: true,
		className: "rounded-3xl bg-card px-6 shadow-soft",
		children: items.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
			value: `f${i}`,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionTrigger, {
				className: "py-5 text-left font-serif text-lg hover:no-underline",
				children: f.q
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent, {
				className: "pb-5 text-base text-muted-foreground",
				children: f.a
			})]
		}, f.q))
	});
}
function Vital({ icon: Icon, label, value, unit }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-2xl bg-cream p-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-1.5 text-xs text-muted-foreground",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
					className: "size-3.5",
					"aria-hidden": true
				}),
				" ",
				label
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-1 font-serif text-xl",
			children: [
				value,
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-sans text-xs text-muted-foreground",
					children: unit
				})
			]
		})]
	});
}
function VisitReport() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mx-auto w-full max-w-[340px] rounded-[2.6rem] border-[10px] border-foreground bg-foreground shadow-lift",
		role: "img",
		"aria-label": "Example MyCareEnvoy visit report shown on a phone",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "overflow-hidden rounded-[2rem] bg-background",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "bg-primary px-5 pb-5 pt-6 text-primary-foreground",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs uppercase tracking-widest opacity-80",
						children: "Visit report"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 font-serif text-xl",
						children: "Mrs. A. (78)"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm opacity-85",
						children: "Lagos, Nigeria"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 flex justify-between text-xs opacity-85",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Tue, 6 Oct 2026" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Nurse Funmi" })]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-4 p-4 text-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-2 gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Vital, {
								icon: Activity,
								label: "Blood pressure",
								value: "138/84",
								unit: "mmHg"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Vital, {
								icon: HeartPulse,
								label: "Pulse",
								value: "76",
								unit: "bpm"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Vital, {
								icon: Droplet,
								label: "Blood sugar",
								value: "6.8",
								unit: "mmol/L"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Vital, {
								icon: Scale,
								label: "Weight",
								value: "64",
								unit: "kg"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border p-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "flex items-center gap-1.5 font-semibold text-primary",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pill, {
								className: "size-4",
								"aria-hidden": true
							}), " Medications"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-muted-foreground",
							children: "All taken as prescribed. Amlodipine refill due in 5 days, pharmacy notified."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border p-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-semibold text-primary",
							children: "Nurse's notes"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-muted-foreground",
							children: "In good spirits. Mild knee pain when climbing stairs, recommended review at next doctor check."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between rounded-2xl bg-gold-soft p-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-medium",
							children: "Next visit"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-serif",
							children: "Tue, 20 Oct"
						})]
					})
				]
			})]
		})
	});
}
var FAQ_GROUPS = [
	{
		title: "Your parent's baseline assessment",
		items: [
			{
				q: "Where does the first assessment happen?",
				a: "You choose. Your parent can visit one of our partner clinics, a MyCareEnvoy doctor can visit them at home, or the doctor can meet them by video call. Clinic and home visits cost $40; a video call costs $25. Home visits are available across Lagos, subject to doctor availability in some areas. If you choose the clinic, you can arrange transport yourself or add a caregiver escort for $20."
			},
			{
				q: "What if the doctor needs to see my parent in person after a video call?",
				a: "We’ll recommend a clinic or home visit. If you book it within 30 days, your $25 counts toward it, so you only pay $15 more."
			},
			{
				q: "What's included in the baseline?",
				a: "A physical examination (blood pressure, pulse, temperature, weight and a general check-up), a full medication review, a discussion of your parent's health history, a written report within 48 hours, and a care plan. You can also join by video call."
			},
			{
				q: "Are tests like blood sugar included?",
				a: "No. Lab tests such as blood sugar, cholesterol or blood counts are charged at cost. If the doctor recommends any, we tell you the cost first and only go ahead once you approve."
			},
			{
				q: "Can I join the visit?",
				a: "Yes. Tick the video call option when you book and we'll arrange a time that works for your time zone."
			},
			{
				q: "What if the doctor finds something serious?",
				a: "We contact you immediately and help you arrange the next steps, including referral to a hospital or specialist if needed."
			},
			{
				q: "Can I cancel or reschedule?",
				a: "You can reschedule for free up to 24 hours before the visit. If we can't complete the visit for any reason on our side, including a home visit we can't arrange in your parent's area, you get a full refund."
			},
			{
				q: "What can't your nurses do?",
				a: "Our nurses don't diagnose or prescribe. That's our doctor's role. They also don't provide bathing, cooking, cleaning or overnight care."
			}
		]
	},
	{
		title: "About the service",
		items: [
			{
				q: "What exactly does MyCareEnvoy do?",
				a: "We pair your parent in Nigeria with a dedicated, verified registered nurse who visits them at home on a regular schedule. A doctor oversees their care plan. After every visit you get a clear report with vitals, medications, concerns and next steps."
			},
			{
				q: "What if my parent doesn't want a nurse visiting?",
				a: "This is common, and it's usually about pride, not the care itself. Our first visit is designed to feel like a friendly introduction, not an inspection. We also have a short guide on how to talk to your parent, and we're happy to speak with them or a trusted relative first."
			},
			{
				q: "Can my siblings and I all see the reports?",
				a: "Yes. You can add siblings and other family members so everyone receives the same report, by app, email or web. No more relaying news secondhand."
			},
			{
				q: "How quickly can we start?",
				a: "Most families have their intake call within 24 hours of reaching out, and the doctor's onboarding assessment within the first week."
			}
		]
	},
	{
		title: "Nurses, doctors and caregivers",
		items: [
			{
				q: "How do you vet your nurses and caregivers?",
				a: "Every nurse is a registered nurse whose license we verify with the Nursing and Midwifery Council of Nigeria. Every doctor is verified with the Medical and Dental Council of Nigeria. Caregivers go through ID and guarantor checks. Everyone is interviewed, reference checked, trained and supervised."
			},
			{
				q: "Will my parent see the same nurse each time?",
				a: "Yes. Consistency matters. Your parent has a dedicated nurse, with a trusted backup who already knows them if their nurse is ever unavailable."
			},
			{
				q: "What does the doctor do?",
				a: "A licensed doctor carries out the onboarding assessment, builds the care plan with you, reviews visit reports, and advises the nurse whenever something changes."
			},
			{
				q: "Can someone go with my parent to hospital appointments?",
				a: "Yes. A trusted caregiver can accompany your parent to hospital and clinic visits and errands. Core includes one accompanied appointment each quarter. Complete includes up to two each month. Extra accompaniment starts at $20 for a half day; transport is at cost."
			}
		]
	},
	{
		title: "Emergencies",
		items: [
			{
				q: "What happens in an emergency?",
				a: "If a nurse finds something worrying, they assess immediately and consult the doctor. You're informed right away. If needed, we arrange transfer to a partner hospital. MyCareEnvoy is not an ambulance service, so please also keep local emergency contacts in place."
			},
			{
				q: "Is MyCareEnvoy available around the clock?",
				a: "Complete includes a reply within 1 hour, day or night. Emergency coordination is included on every plan. For life-threatening emergencies, call local emergency services and a nearby relative first."
			},
			{
				q: "Which hospitals do you work with?",
				a: "We're building a network of trusted partner hospitals, clinics, labs and pharmacies locally. Where your parent already has a preferred hospital, we coordinate with them."
			}
		]
	},
	{
		title: "Plans and billing",
		items: [
			{
				q: "Can my siblings and I split the cost?",
				a: "Yes. Many families do. We can split the monthly payment between family members so no one carries it alone."
			},
			{
				q: "Which currencies can I pay in?",
				a: "We bill monthly in USD, GBP or CAD, so you can pay from wherever you live."
			},
			{
				q: "Can I cancel anytime?",
				a: "Yes. There are no long contracts. You can pause or cancel before your next billing date."
			},
			{
				q: "Is there an enrollment fee?",
				a: "The 20 to 30 minute enrollment call is free. A baseline assessment at a partner clinic or at home costs $40 once; a video call costs $25. The baseline is waived on annual plans."
			},
			{
				q: "Can I pay yearly?",
				a: "Yes. Pay for 10 months and receive 12 months of care: Essential $350, Core $790 or Complete $1,490 per year. Your $40 baseline assessment is also waived. Siblings can split any plan."
			},
			{
				q: "Does every plan include a doctor?",
				a: "Yes. Doctor oversight is part of every plan, including Essential."
			}
		]
	},
	{
		title: "Privacy and data",
		items: [{
			q: "Who can see my parent's health information?",
			a: "Only your parent's care team and the family members you approve. We never sell personal data, and we follow the Nigeria Data Protection Act 2023."
		}, {
			q: "Can I ask you to delete our data?",
			a: "Yes. Email us and we'll delete your family's data, except anything we're legally required to keep."
		}]
	},
	{
		title: "Locations",
		items: [{
			q: "Can you care for my parent in their city?",
			a: "Tell us your parent's city and area. We confirm local availability before care begins. If care is not available yet, you can join the city waitlist."
		}, {
			q: "How do I confirm local availability?",
			a: "Send your parent's city and area on WhatsApp. Our care team will confirm availability and next steps."
		}]
	}
];
var all = FAQ_GROUPS.flatMap((g) => g.items);
var pick = (q) => all.find((f) => f.q === q) ?? {
	q,
	a: "Please contact our care team."
};
var FAQ_PREVIEW = [
	pick("What happens in an emergency?"),
	pick("What if my parent doesn't want a nurse visiting?"),
	pick("Can you care for my parent in their city?"),
	pick("Can my siblings and I split the cost?"),
	pick("How do you vet your nurses and caregivers?")
];
//#endregion
export { FAQ_GROUPS as a, PlanCards as c, AccordionTrigger as i, PlanTable as l, AccordionContent as n, FAQ_PREVIEW as o, AccordionItem as r, FaqList as s, Accordion as t, VisitReport as u };
