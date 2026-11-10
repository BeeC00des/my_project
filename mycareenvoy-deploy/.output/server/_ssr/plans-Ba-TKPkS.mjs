import { r as __toESM } from "../_runtime.mjs";
import { _ as initialNurseService, c as ONE_TIME_SERVICES, f as PLANS, n as BASELINE, s as NURSE_SERVICES, t as ADD_ONS } from "./site-DGtN9-jT.mjs";
import { _ as require_jsx_runtime, v as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { F as Hospital, R as HeartHandshake, X as Check, b as PillBottle, f as Stethoscope, i as Users, ot as Activity, p as ShieldCheck, q as ClipboardList, rt as ArrowRight, x as Phone } from "../_libs/lucide-react.mjs";
import { c as cn, i as PageHero, n as CtaBand, o as SectionHeading, s as WhatsAppButton, t as Button } from "./primitives-DZ3UawNy.mjs";
import { t as IMG } from "./images-DLX2myIW.mjs";
import { a as FAQ_GROUPS, i as AccordionTrigger, l as PlanTable, n as AccordionContent, r as AccordionItem, s as FaqList, t as Accordion } from "./faq-Btl2VW0M.mjs";
import { t as BaselineAssessment } from "./BaselineAssessment-CJvO0My0.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/plans-Ba-TKPkS.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var icons = [
	Activity,
	PillBottle,
	Stethoscope,
	ShieldCheck,
	Hospital,
	HeartHandshake,
	ClipboardList
];
function NurseServices() {
	const [expanded, setExpanded] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		setExpanded(initialNurseService(window.matchMedia("(min-width: 768px)").matches));
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "nurse-services",
		className: "mt-12 scroll-mt-28 border-t pt-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				title: "What our nurses do for your parent",
				intro: "Every MyCareEnvoy nurse is licensed, vetted and supervised by a doctor. Here's exactly what they do, so you always know what you're paying for."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Accordion, {
				type: "single",
				collapsible: true,
				value: expanded,
				onValueChange: setExpanded,
				className: "mt-8",
				children: NURSE_SERVICES.map((group, index) => {
					const Icon = icons[index] ?? Activity;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
						value: group.id,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionTrigger, {
							className: "min-h-16 gap-4 py-5 text-base text-primary sm:text-lg",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-center gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
									className: "size-6 shrink-0 text-terracotta",
									"aria-hidden": true
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: group.title })]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent, {
							className: "text-base sm:pl-10",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "space-y-3 pb-2",
								children: group.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
										className: "mt-1 size-4 shrink-0 text-primary",
										"aria-hidden": true
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item })]
								}, item))
							})
						})]
					}, group.id);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 rounded-lg bg-primary-soft p-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-2xl text-primary",
					children: "Who does what"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
					className: "mt-5 grid gap-6 md:grid-cols-3",
					children: [
						["Caregivers", "companionship and escorts to appointments"],
						["Nurses", "health checks, medications and clinical care"],
						["Doctors", "assessments, diagnosis and prescriptions"]
					].map(([role, scope]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "font-semibold text-primary",
						children: role
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "mt-1",
						children: scope
					})] }, role))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-5 text-sm text-muted-foreground",
				children: "Some clinical care, lab tests and medication may be charged separately depending on your plan. We always tell you the cost and get your approval first."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "What our nurses don't do:" }), " diagnose or prescribe (that's our doctor's role), or provide bathing, cooking, cleaning or overnight care."]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 flex flex-wrap items-center justify-between gap-5 border-t pt-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-2xl text-primary",
					children: "Ready to get started?"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "cta",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/get-started",
							children: [
								"Book the baseline ($",
								BASELINE.amount,
								") ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { "aria-hidden": true })
							]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppButton, { label: "Chat on WhatsApp" })]
				})]
			})
		]
	});
}
function FeatureList({ items }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "space-y-3",
		children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
			className: "flex gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
				className: "mt-1 size-4 shrink-0 text-primary",
				"aria-hidden": true
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item })]
		}, item))
	});
}
function Page() {
	const [annual, setAnnual] = (0, import_react.useState)(false);
	const billing = FAQ_GROUPS.find((g) => g.title === "Plans and billing")?.items ?? [];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Plans and services",
			title: "Care that fits your parent.",
			intro: "Doctor oversight on every plan. Clear updates for the whole family."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-b py-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page grid gap-6 md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-xl text-primary",
					children: "Monthly care"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-muted-foreground",
					children: "Regular nurse visits and ongoing support, with doctor oversight and updates for your family."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-xl text-primary",
						children: "Care on request"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-muted-foreground",
						children: "Individual services when you need them, quoted before booking. No monthly plan required."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/care-on-request",
						className: "mt-3 inline-flex items-center gap-2 font-semibold text-terracotta",
						children: ["Explore care on request ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
							className: "size-4",
							"aria-hidden": true
						})]
					})
				] })]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-14 md:py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, { title: "Getting started" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 border-y py-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
								className: "size-6 text-terracotta",
								"aria-hidden": true
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
								className: "mt-4 text-2xl text-primary",
								children: ["Enrollment call ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block font-sans text-lg",
									children: "Free"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-muted-foreground",
								children: "A 20 to 30 minute call to understand your parent’s health, routine and needs, and recommend the right plan."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-5",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									variant: "cta",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/get-started",
										children: ["Book your free call ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { "aria-hidden": true })]
									})
								})
							})
						] })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BaselineAssessment, {})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-cream py-14 md:py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-end justify-between gap-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, { title: "Monthly plans" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "inline-flex gap-1 rounded-full border bg-card p-1",
							role: "group",
							"aria-label": "Billing period",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: annual ? "ghost" : "default",
								"aria-pressed": !annual,
								onClick: () => setAnnual(false),
								children: "Monthly"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: annual ? "default" : "ghost",
								"aria-pressed": annual,
								onClick: () => setAnnual(true),
								children: "Yearly · 2 months free"
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-12 grid gap-6 md:grid-cols-3",
						children: PLANS.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: cn("relative flex flex-col rounded-lg border bg-card p-6", p.popular && "border-gold ring-1 ring-gold"),
							children: [
								p.popular && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "absolute -top-4 left-5 rounded-full bg-gold px-3 py-1 text-sm font-semibold",
									children: "Most families choose this"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-2xl text-primary",
									children: p.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 min-h-14 text-muted-foreground",
									children: p.tagline
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "my-6",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-serif text-4xl",
										children: annual ? `$${p.annualPrice.toLocaleString()}` : p.price
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-muted-foreground",
										children: ["/", annual ? "year" : "month"]
									})]
								}),
								annual && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mb-5 text-sm font-medium text-primary",
									children: "12 months of care. Baseline assessment included."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex-1",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeatureList, { items: p.features })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									variant: p.popular ? "cta" : "default",
									className: "mt-8",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/get-started",
										search: { plan: p.id },
										children: ["Choose ", p.name]
									})
								})
							]
						}, p.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NurseServices, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex items-start gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, {
							className: "mt-1 size-5 shrink-0 text-terracotta",
							"aria-hidden": true
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Ways to save:" }), " Pay yearly for 2 months free, plus the baseline assessment waived. Siblings can split any plan."] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Accordion, {
						type: "single",
						collapsible: true,
						className: "mt-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
							value: "comparison",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionTrigger, {
								className: "font-serif text-xl",
								children: "Compare all inclusions"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlanTable, {}) })]
						})
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-14 md:py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, { title: "One-time services" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 grid gap-6 md:grid-cols-3",
						children: ONE_TIME_SERVICES.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "rounded-lg border bg-card p-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-2xl text-primary",
									children: s.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 font-semibold text-terracotta",
									children: s.price
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "my-4 text-muted-foreground",
									children: s.intro
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeatureList, { items: s.features }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									variant: "cta",
									className: "mt-6",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/checkout",
										search: { service: s.id },
										children: ["Book and pay ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { "aria-hidden": true })]
									})
								})
							]
						}, s.name))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-sm text-muted-foreground",
						children: "For a life-threatening emergency, contact local emergency services first. MyCareEnvoy is not an ambulance service."
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-primary-soft py-14 md:py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-end justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
						title: "Add-ons",
						intro: "Available with any plan or service. Add them at checkout."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "outline",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/checkout",
							children: ["Add to a booking ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { "aria-hidden": true })]
						})
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
					className: "mt-8 divide-y",
					children: ADD_ONS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-3 py-6 md:grid-cols-[1fr_1.5fr]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "font-serif text-xl text-primary",
							children: s.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "mt-1 font-semibold",
							children: s.price
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "text-muted-foreground",
							children: s.description
						})]
					}, s.name))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-14 md:py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page flex flex-wrap items-center justify-between gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					title: "A custom plan",
					intro: "Tell us what your parent needs. We’ll build a plan from these services and send a quote within 48 hours."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppButton, {
					label: "Discuss a custom plan",
					message: "Hi MyCareEnvoy, I'd like a custom care plan for my parent."
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "pb-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page grid gap-8 md:grid-cols-[0.8fr_1.2fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, { title: "Billing questions" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaqList, { items: billing })]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBand, { image: IMG.couple.src })
	] });
}
//#endregion
export { Page as component };
