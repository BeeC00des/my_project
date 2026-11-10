import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { i as PageHero, o as SectionHeading } from "./primitives-DZ3UawNy.mjs";
import { t as IMG } from "./images-DLX2myIW.mjs";
import { t as supabase } from "./client-DFJbzuNn.mjs";
import { a as check, i as Success, o as plainDetails, r as SimpleForm } from "./FormKit-B4tUv92B.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/employers-DV44h9Wc.js
var import_jsx_runtime = require_jsx_runtime();
var fields = [
	{
		name: "company",
		label: "Company name",
		type: "text",
		required: true
	},
	{
		name: "company_size",
		label: "Company size",
		type: "select",
		required: true,
		options: [
			"1 to 50",
			"51 to 200",
			"201 to 1,000",
			"1,001 to 5,000",
			"5,000+"
		]
	},
	{
		name: "full_name",
		label: "Your name",
		type: "text",
		required: true
	},
	{
		name: "role",
		label: "Your role",
		type: "text",
		required: true
	},
	{
		name: "email",
		label: "Work email",
		type: "email",
		required: true
	},
	{
		name: "phone",
		label: "Phone",
		type: "tel",
		required: true,
		defaultCountry: "+1"
	},
	{
		name: "headcount",
		label: "Approximate number of employees with family in Nigeria",
		type: "text"
	},
	{
		name: "message",
		label: "Message",
		type: "textarea"
	}
];
function Page() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "For employers",
			title: "Your people are worried about their parents back home. Help them.",
			intro: "Offer MyCareEnvoy as a benefit for staff with parents in Nigeria. It's the kind of support people remember.",
			image: IMG.problem.src,
			imageAlt: IMG.problem.alt
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container-page grid gap-5 md:grid-cols-3",
				children: [
					["Less distraction", "Fewer emergency calls, fewer last-minute flights, more focus at work."],
					["Better retention", "Support that speaks to what your people care about most."],
					["A benefit that stands out", "Few employers offer anything like it. Your team will notice."]
				].map(([t, b]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-3xl bg-card p-7 shadow-soft",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-xl text-primary",
						children: t
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-muted-foreground",
						children: b
					})]
				}, t))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-primary-soft py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, { title: "How it works for employers" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "mt-8 grid gap-5 md:grid-cols-4",
					children: [
						"We agree a plan level and budget with you",
						"Eligible employees enrol their parents privately",
						"We care for their parents and report to the family",
						"You get simple, anonymised usage reports"
					].map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "rounded-3xl bg-card p-6 shadow-soft",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-serif text-4xl text-gold",
							children: i + 1
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2",
							children: s
						})]
					}, s))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page max-w-3xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, { title: "Let's talk" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SimpleForm, {
						fields,
						submitLabel: "Send enquiry",
						onSubmit: async (v) => {
							const { error } = await supabase.from("employer_inquiries").insert({
								company: String(v["company"]),
								company_size: String(v["company_size"]),
								full_name: String(v["full_name"]),
								email: String(v["email"]),
								phone: String(v["phone"]),
								details: plainDetails(fields, v)
							});
							check(error);
						},
						success: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Success, {
							title: "Thank you.",
							children: "We'll be in touch within two working days to talk about your team."
						})
					})
				})]
			})
		})
	] });
}
//#endregion
export { Page as component };
