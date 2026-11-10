import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { i as PageHero, n as CtaBand, o as SectionHeading } from "./primitives-DZ3UawNy.mjs";
import { t as IMG } from "./images-DLX2myIW.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/talk-to-your-parent-Bx3ZmXFi.js
var import_jsx_runtime = require_jsx_runtime();
var tips = [
	["Make it about you, not them", "Frame it as support for your peace of mind, not a judgement of how they're coping. \"I worry\" lands softer than \"You need.\""],
	["Bring in someone they respect", "A respected sibling, aunt, uncle or pastor can make the idea feel familiar and approved, not imposed from abroad."],
	["Introduce the nurse as someone you trust", "Tell them about the nurse by name. Share that you've spoken with them. A known person is easier to welcome than a stranger."],
	["Start small", "Begin with one visit, or a simple blood pressure check. Let trust build before adding more."],
	["Let them have a say", "Ask what time suits them, which language they prefer, what they'd like help with. Choice is dignity."]
];
function Page() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "For families",
			title: "How to talk to your parent about care",
			intro: "A guide for the conversation many of us put off. Warmth first, logistics second.",
			image: IMG.meal.src,
			imageAlt: IMG.meal.alt
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
			className: "py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page max-w-3xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-3xl text-primary",
						children: "Why this conversation matters"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-lg text-muted-foreground",
						children: "Most parents won't ask for help. They raised us, they managed through hard times, and they don't want to become a worry. So they say \"I'm fine\" and change the subject."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-lg text-muted-foreground",
						children: "When we suggest a nurse, they may hear something else: that we think they're weak, that they're being watched, or that they're a burden. None of that is true, but the feelings are real. The way you start the conversation shapes how they receive it."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
						eyebrow: "Five tips",
						title: "What tends to work"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "mt-8 space-y-5",
						children: tips.map(([t, b], i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-5 rounded-3xl bg-card p-6 shadow-soft",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-serif text-4xl text-gold",
								children: i + 1
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-xl",
								children: t
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-muted-foreground",
								children: b
							})] })]
						}, t))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-12 rounded-3xl border-l-4 border-terracotta bg-accent p-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow",
								children: "Words you could use"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 font-serif text-2xl leading-snug",
								children: "\"Mummy, I know you're managing well. This is for my peace of mind, so I can stop worrying every time you don't pick up.\""
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 font-serif text-xl leading-snug text-muted-foreground",
								children: "\"Daddy, she's a nurse I trust. She'll just come to check your pressure and keep me updated. If you don't like her, we'll stop.\""
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-14 text-3xl text-primary",
						children: "We help with this too"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-lg text-muted-foreground",
						children: "Our nurse's first visit is designed to feel like a friendly introduction, not an inspection. They'll greet your parent properly, take time to chat, and only begin checks when your parent is comfortable. If it helps, we can speak with your parent or a trusted relative before the first visit."
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBand, {
			image: IMG.couple.src,
			title: "When you're ready, we're here."
		})
	] });
}
//#endregion
export { Page as component };
