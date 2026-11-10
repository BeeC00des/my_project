import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { N as Info } from "../_libs/lucide-react.mjs";
import { i as PageHero, o as SectionHeading } from "./primitives-DZ3UawNy.mjs";
import { t as supabase } from "./client-DFJbzuNn.mjs";
import { a as check, i as Success, o as plainDetails, r as SimpleForm } from "./FormKit-B4tUv92B.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/JoinPage-CVc_cD5V.js
var import_jsx_runtime = require_jsx_runtime();
function JoinPage({ title, intro, image, imageAlt, eyebrow, table, fields, licenseField, yearsField, why, sections, poolNote }) {
	async function onSubmit(v, files) {
		const { error } = await supabase.from(table).insert({
			full_name: String(v["full_name"]),
			email: v["email"] ? String(v["email"]) : null,
			phone: String(v["phone"]),
			license_number: licenseField ? String(v[licenseField] ?? "") || null : null,
			years_experience: yearsField ? String(v[yearsField] ?? "") || null : null,
			source: v["source"] ? String(v["source"]) : null,
			details: plainDetails(fields, v),
			files
		});
		check(error);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow,
			title,
			intro,
			image,
			imageAlt
		}),
		why && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, { title: "Why join us" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4",
					children: why.map((w) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-3xl bg-card p-6 shadow-soft",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-xl text-primary",
							children: w.t
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-muted-foreground",
							children: w.b
						})]
					}, w.t))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-cream py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container-page grid gap-10 md:grid-cols-2",
				children: sections
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page max-w-3xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, { title: "Apply" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "my-6 flex gap-3 rounded-2xl bg-primary-soft p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, {
								className: "mt-1 size-5 shrink-0 text-primary",
								"aria-hidden": true
							}),
							" ",
							poolNote
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SimpleForm, {
						fields,
						folder: table,
						submitLabel: "Submit application",
						onSubmit,
						success: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Success, {
							title: "Application received. Thank you.",
							children: "We review every application carefully. If your profile is a good fit, we'll contact you on WhatsApp to arrange verification and an interview."
						})
					})
				]
			})
		})
	] });
}
function BulletCard({ title, items }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-3xl bg-card p-7 shadow-soft",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "text-2xl text-primary",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-4 list-disc space-y-2 pl-5",
			children: items.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: i }, i))
		})]
	});
}
//#endregion
export { JoinPage as n, BulletCard as t };
