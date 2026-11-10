import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { i as PageHero, n as CtaBand, o as SectionHeading } from "./primitives-DZ3UawNy.mjs";
import { t as IMG } from "./images-DLX2myIW.mjs";
import { t as founder_jpg_asset_default } from "./founder.jpg.asset-BYJonpCB.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-Ci1MpxDL.js
var import_jsx_runtime = require_jsx_runtime();
var values = [
	["Dignity", "Our parents are treated as the proud, capable adults they are."],
	["Honesty", "We tell families the truth, even when it's not what they hoped to hear."],
	["Presence", "We show up, on time, every time, and we stay consistent."],
	["Excellence", "Qualified people, clear protocols, and care that's checked by a doctor."]
];
function Page() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Our story",
			title: "We built the help we wished our own families had.",
			image: IMG.couple.src,
			imageAlt: IMG.couple.alt
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page grid gap-12 md:grid-cols-[0.7fr_1.3fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: founder_jpg_asset_default.url,
					alt: "Dr. Olabode (Bode) Ekerin, founder of MyCareEnvoy",
					className: "aspect-[4/5] w-full rounded-3xl object-cover object-top shadow-lift md:sticky md:top-28"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-5 text-lg",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "I'm a physician trained at Lagos State University, where I earned my MBBS. I went into medicine for a simple reason: I hated seeing people sick and wanted to do something about it." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "For over six years, my clinical and public health work in Nigeria has taken me across different states. Along the way I earned an MSc in Population and Reproductive Health from the University of Port Harcourt." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Again and again, I saw that the patients who did well weren't always the ones with the best hospital nearby. They were the ones with someone in their corner: someone who made sure prescriptions were filled, appointments were kept, and small warning signs were caught before they became emergencies." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Today I live in Nashville, Tennessee, where I'm completing my MBA at Vanderbilt University's Owen Graduate School of Management. Moving abroad made all of this personal." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Like so many of us in the diaspora, I know what it feels like to love your parents from thousands of miles away. You call, and they say \"I'm fine\" because they don't want you to worry. You send money for medication and hope it was bought. You hear about a hospital visit days after it happened." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "My own parents were the first family MyCareEnvoy served. I built it so other families could have what I wanted for mine: a trusted nurse who visits, care supervised by a doctor, and honest updates you can rely on." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Our parents cared for us when we couldn't care for ourselves. They deserve the same from us, wherever we live." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "font-serif text-xl text-primary",
							children: [
								"Dr. Olabode (Bode) Ekerin",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-sans text-base text-muted-foreground",
									children: "Founder, MyCareEnvoy"
								})
							]
						})
					]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-primary-soft py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					title: "Our values",
					center: true
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4",
					children: values.map(([t, b]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-3xl bg-card p-7 shadow-soft",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-2xl text-terracotta",
							children: t
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-muted-foreground",
							children: b
						})]
					}, t))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page max-w-3xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, { title: "Our team on the ground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 text-lg text-muted-foreground",
					children: "Care coordinators schedule visits, match parents with nurses and keep families updated. Our clinical lead supervises care and reviews reports. Local availability is confirmed before enrollment."
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBand, { image: IMG.meal.src })
	] });
}
//#endregion
export { Page as component };
