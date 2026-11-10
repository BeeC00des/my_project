import { g as TESTIMONIALS } from "./site-DGtN9-jT.mjs";
import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { F as Hospital, R as HeartHandshake, _ as Quote, d as TestTubeDiagonal, et as BellRing, f as Stethoscope, ot as Activity, rt as ArrowRight, tt as BadgeCheck, y as Pill } from "../_libs/lucide-react.mjs";
import { a as Reveal, n as CtaBand, o as SectionHeading, t as Button } from "./primitives-DZ3UawNy.mjs";
import { t as IMG } from "./images-DLX2myIW.mjs";
import { t as founder_jpg_asset_default } from "./founder.jpg.asset-BYJonpCB.mjs";
import { t as supabase } from "./client-DFJbzuNn.mjs";
import { r as useQuery } from "../_libs/tanstack__react-query.mjs";
import { c as PlanCards, o as FAQ_PREVIEW, s as FaqList, u as VisitReport } from "./faq-Btl2VW0M.mjs";
import { n as STEPS, r as TRUST } from "./routes-C6RfEGks.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-nQlGF1Sh.js
var import_jsx_runtime = require_jsx_runtime();
/**
* Renders dashboard-published testimonials, or the owner-approved customer quotes.
*/
function TestimonialsSection() {
	const { data } = useQuery({
		queryKey: ["testimonials"],
		queryFn: async () => {
			const { data, error } = await supabase.from("testimonials").select("id, quote, name, detail").eq("published", true).order("created_at", { ascending: false });
			if (error) throw error;
			return data;
		}
	});
	const real = data?.length ? data : null;
	const cards = real ? real.map((t) => ({
		key: t.id,
		quote: t.quote,
		name: t.name,
		detail: t.detail ?? void 0
	})) : TESTIMONIALS.map((t) => ({
		key: t.name,
		quote: t.quote,
		name: t.name,
		detail: `${t.role}, ${t.city}`
	}));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-primary-soft py-20 md:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				title: "What families say about us",
				center: true
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-6 md:grid-cols-3",
				children: cards.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * 90,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
						className: "h-full rounded-3xl bg-card p-7 shadow-soft",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quote, {
								className: "size-8 text-gold",
								"aria-hidden": true
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("blockquote", {
								className: "mt-3 font-serif text-lg italic",
								children: t.quote
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
								className: "mt-6 flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid size-12 place-items-center rounded-full bg-primary font-serif text-lg text-primary-foreground",
									"aria-hidden": true,
									children: t.name[0]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block font-semibold",
									children: t.name
								}), t.detail && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm text-muted-foreground",
									children: t.detail
								})] })]
							})
						]
					})
				}, t.key))
			})]
		})
	});
}
function CareRequestPreview() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-primary-soft py-16 md:py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Care on request",
					title: "Need something else? Just ask.",
					intro: "Individual services, arranged when needed. No monthly plan required. We confirm availability and quote the cost before booking."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "my-10 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6",
					children: [
						[Activity, "Physiotherapy"],
						[TestTubeDiagonal, "Lab tests at home"],
						[Pill, "Medication delivery"],
						[Stethoscope, "Specialist visits"],
						[HeartHandshake, "Home caregivers"],
						[Hospital, "Hospital support"]
					].map(([Icon, label]) => {
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
							className: "mb-3 size-7 text-terracotta",
							"aria-hidden": true
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-medium",
							children: String(label)
						})] }, String(label));
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					variant: "cta",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/care-on-request",
						children: ["See all care on request ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { "aria-hidden": true })]
					})
				})
			]
		})
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative overflow-hidden bg-cream",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "adire-bg pointer-events-none absolute inset-0 opacity-[0.05]",
				"aria-hidden": true
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page relative grid items-center gap-10 py-12 md:grid-cols-[1.05fr_1fr] md:py-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "animate-in fade-in slide-in-from-bottom-4 duration-700",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow mb-4",
							children: "Care for parents in Nigeria, for families abroad"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "text-[2.6rem] leading-[1.08] text-primary md:text-6xl",
							children: "Someone you trust, checking on Mum and Dad back home."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 max-w-xl text-lg text-muted-foreground md:text-xl",
							children: "A trusted nurse visits your parent at home. A doctor reviews every reading. You and your siblings get clear updates, wherever you live."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-wrap gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								variant: "cta",
								size: "lg",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/get-started",
									children: ["Request a free call ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { "aria-hidden": true })]
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								variant: "outline",
								size: "lg",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/care-on-request",
									children: ["Care on request ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { "aria-hidden": true })]
								})
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 text-sm font-medium text-primary",
							children: "Verified nurses • Doctor oversight • Reports after every visit"
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative animate-in fade-in zoom-in-95 duration-1000",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute -inset-3 -z-0 rotate-2 rounded-[2.5rem] bg-terracotta/15",
							"aria-hidden": true
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: IMG.hero.src,
							alt: IMG.hero.alt,
							width: 1536,
							height: 1152,
							fetchPriority: "high",
							className: "relative aspect-[4/3.4] w-full rounded-[2rem] object-cover shadow-lift"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "absolute -bottom-5 left-4 flex items-center gap-3 rounded-2xl bg-card px-4 py-3 shadow-lift",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BellRing, {
								className: "size-5 text-terracotta",
								"aria-hidden": true
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-semibold",
									children: "Visit report ready"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-muted-foreground",
									children: "BP 138/84 • Meds on track"
								})]
							})]
						})
					]
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-primary-soft py-20 md:py-28",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
						eyebrow: "How it works",
						title: "Four simple steps to peace of mind.",
						center: true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "mt-14 grid gap-6 md:grid-cols-4",
						children: STEPS.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: i * 100,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "relative h-full rounded-3xl bg-card p-6 shadow-soft",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-serif text-5xl text-gold",
										children: i + 1
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, {
										className: "absolute right-6 top-7 size-6 text-primary",
										"aria-hidden": true
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-3 text-xl text-primary",
										children: s.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-muted-foreground",
										children: s.body
									})
								]
							})
						}, s.title))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10 text-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-5 text-muted-foreground",
							children: [
								"Your first 30 days: a free call, an assessment, a care plan and your first nurse visit.",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/how-it-works",
									className: "font-semibold text-terracotta hover:underline",
									children: "See the full timeline"
								}),
								"."
							]
						})
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-20 md:py-28",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page grid items-center gap-14 md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
						eyebrow: "After every visit",
						title: "This is what peace of mind looks like.",
						intro: "Every visit. Every detail. Shared with you and your siblings."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-8 space-y-4",
						children: [
							"Vitals measured and recorded at home",
							"Medications checked, refills flagged early",
							"Honest notes from the nurse, in plain words",
							"Every reading reviewed by a doctor"
						].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BadgeCheck, {
								className: "mt-1 size-5 shrink-0 text-terracotta",
								"aria-hidden": true
							}), t]
						}, t))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-sm text-muted-foreground",
						children: "The report beside this is a sample of what you receive after every visit."
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 120,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VisitReport, {})
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-primary-soft py-20 md:py-28",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page grid items-start gap-12 md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "When something's not right",
					title: "If the nurse finds something urgent, you hear the same day."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 text-lg text-muted-foreground",
					children: "Our doctor is informed straight away. You and your siblings hear from us the same day, with clear next steps."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 120,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "space-y-4",
						children: [
							["During the visit", "The nurse notices something concerning: a reading, a symptom or a safety risk."],
							["Straight away", "She follows our escalation steps and our doctor is informed immediately."],
							["The same day", "We call or message you and any siblings on the plan, with what we found and what we recommend."],
							["If it's an emergency", "The nurse acts first, we arrange the nearest appropriate care, and you stay informed throughout."]
						].map(([t, b], i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
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
					})
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-cream py-20 md:py-28",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
						eyebrow: "Monthly care",
						title: "Regular visits. Ongoing support.",
						intro: "A dedicated nurse, doctor oversight and family updates on a monthly plan.",
						center: true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-14",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlanCards, { compact: true })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-8 text-center font-medium text-primary",
						children: "Pay yearly for 2 months free and a waived baseline assessment. Siblings can split any plan."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-5 text-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "outline",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/plans",
								children: ["Compare plans and services ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { "aria-hidden": true })]
							})
						})
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CareRequestPreview, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-20 md:py-28",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Why families trust us",
					title: "Care you can verify."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
					children: TRUST.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * 70,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "h-full rounded-3xl bg-card p-6 shadow-soft",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(t.icon, {
									className: "size-7 text-primary",
									"aria-hidden": true
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-4 text-lg",
									children: t.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-[15px] text-muted-foreground",
									children: t.body
								})
							]
						})
					}, t.title))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TestimonialsSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-20 md:py-28",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page grid items-center gap-12 md:grid-cols-[0.8fr_1.2fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: founder_jpg_asset_default.url,
					alt: "Dr. Olabode (Bode) Ekerin, founder of MyCareEnvoy",
					loading: "lazy",
					className: "aspect-[4/5] w-full rounded-3xl object-cover object-top shadow-lift"
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					delay: 100,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow mb-3",
							children: "A note from Dr. Bode"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-3xl text-primary md:text-[2.6rem]",
							children: "Why I started MyCareEnvoy"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 font-serif text-xl leading-relaxed",
							children: "\"I know the worry of being far from your parents. I built MyCareEnvoy to give families what I wanted for mine: qualified care that shows up, and honest updates you can trust.\""
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 font-semibold",
							children: "Dr. Olabode (Bode) Ekerin"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/about",
							className: "mt-4 inline-flex items-center gap-2 font-semibold text-terracotta hover:underline",
							children: ["Read our story ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
								className: "size-4",
								"aria-hidden": true
							})]
						})
					]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "pb-20 md:pb-28",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container-page grid gap-6 md:grid-cols-2",
				children: [{
					to: "/talk-to-your-parent",
					t: "How to talk to your parent about care",
					b: "Our parents are proud. Here's how to introduce MyCareEnvoy in a way that feels like respect, not surveillance.",
					cta: "Read the guide"
				}, {
					to: "/share",
					t: "Deciding with your siblings?",
					b: "Send them a simple summary on WhatsApp in one tap.",
					cta: "Share with siblings"
				}].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: c.to,
					className: "group block h-full rounded-3xl bg-accent p-8 transition hover:shadow-lift",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-2xl text-primary",
							children: c.t
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-muted-foreground",
							children: c.b
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "mt-5 inline-flex items-center gap-2 font-semibold text-terracotta",
							children: [
								c.cta,
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
									className: "size-4 transition group-hover:translate-x-1",
									"aria-hidden": true
								})
							]
						})
					]
				}) }, c.to))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-cream py-20 md:py-28",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page grid gap-10 md:grid-cols-[0.8fr_1.2fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Questions",
					title: "What families ask us first"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/faq",
					className: "mt-6 inline-flex items-center gap-2 font-semibold text-terracotta hover:underline",
					children: ["See all questions ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
						className: "size-4",
						"aria-hidden": true
					})]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaqList, { items: FAQ_PREVIEW })]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-primary py-14 text-primary-foreground",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page flex flex-col items-start justify-between gap-6 md:flex-row md:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "max-w-2xl font-serif text-2xl",
					children: "Are you a nurse, doctor or caregiver in Nigeria? Join a team that treats older adults with the dignity they deserve."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "light",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/join/nurses",
								children: "Nurses"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "light",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/join/doctors",
								children: "Doctors"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "light",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/join/caregivers",
								children: "Caregivers"
							})
						})
					]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBand, { image: IMG.couple.src })
	] });
}
//#endregion
export { Home as component };
