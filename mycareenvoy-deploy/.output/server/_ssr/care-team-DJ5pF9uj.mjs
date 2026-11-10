import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Reveal, i as PageHero, o as SectionHeading, t as Button } from "./primitives-DZ3UawNy.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/care-team-DJ5pF9uj.js
var import_jsx_runtime = require_jsx_runtime();
var vetting = [
	["Application", "Every team member applies with their details, experience and documents."],
	["License verification", "Nurses verified with the NMCN. Doctors verified with the MDCN."],
	["ID and guarantor check", "Caregivers provide valid ID and a guarantor we contact directly."],
	["Interview", "A structured interview focused on judgement, kindness and reliability."],
	["Reference checks", "We speak with at least two previous employers or supervisors."],
	["Training", "MyCareEnvoy protocols, reporting, and caring for older adults with dignity."],
	["Ongoing supervision", "Doctors review reports, and we check in with families regularly."]
];
function Page() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Our care team",
			title: "The people who show up for your parents.",
			intro: "Registered nurses, doctors and caregivers in Nigeria, chosen as much for their character as their credentials."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Vetting",
					title: "How we vet every team member"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
					children: vetting.map(([t, b], i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * 60,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "h-full rounded-3xl bg-card p-6 shadow-soft",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid size-10 place-items-center rounded-full bg-primary font-semibold text-primary-foreground",
									children: i + 1
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-4 text-lg",
									children: t
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-[15px] text-muted-foreground",
									children: b
								})
							]
						})
					}, t))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-cream py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, { title: "Who's on the team" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4",
						children: [
							["Registered nurses", "Each parent has one dedicated nurse who visits on a schedule, knows their history, and writes every report."],
							["Doctors", "Licensed physicians carry out onboarding assessments, build the care plan and review every reading."],
							["Caregivers", "Trusted companions who accompany parents to hospital and clinic visits, errands and appointments."],
							["Care coordinators", "Your point of contact. They schedule visits, chase refills and keep you updated on WhatsApp."]
						].map(([t, b]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-3xl bg-card p-6 shadow-soft",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-xl text-primary",
								children: t
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-muted-foreground",
								children: b
							})]
						}, t))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/plans",
							hash: "nurse-services",
							className: "font-medium text-terracotta underline underline-offset-4",
							children: "Want to know exactly what our nurses do at each visit?"
						})
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page grid items-center gap-10 md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "On the ground",
					title: "Our local operations team"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 text-lg text-muted-foreground",
					children: "Care coordinators arrange visits, confirm appointments and follow up on prescriptions. A clinical lead supervises nurses, checks reports and handles escalations. Families have a real person to contact when something needs attention."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-3xl bg-primary p-8 text-primary-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-2xl",
							children: "Want to join us?"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 opacity-85",
							children: "We're growing our team of nurses, doctors and caregivers across Nigeria."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 flex flex-wrap gap-3",
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
						})
					]
				})]
			})
		})
	] });
}
//#endregion
export { Page as component };
