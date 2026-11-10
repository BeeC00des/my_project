import { r as __toESM } from "../_runtime.mjs";
import { _ as require_jsx_runtime, v as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { K as Clock } from "../_libs/lucide-react.mjs";
import { c as cn, i as PageHero } from "./primitives-DZ3UawNy.mjs";
import { n as CATEGORIES, t as ARTICLES } from "./articles-BYzyd6Rr.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/resources.index-CtgxEUbk.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Page() {
	const [cat, setCat] = (0, import_react.useState)("All");
	const list = cat === "All" ? ARTICLES : ARTICLES.filter((a) => a.category === cat);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: "Resources",
		title: "Guides for caring from a distance.",
		intro: "Practical, honest advice for families looking after parents back home."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-2",
					role: "group",
					"aria-label": "Filter by category",
					children: ["All", ...CATEGORIES].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setCat(c),
						"aria-pressed": cat === c,
						className: cn("rounded-full border px-4 py-2 text-sm font-medium transition", cat === c ? "border-primary bg-primary text-primary-foreground" : "bg-card hover:border-primary"),
						children: c
					}, c))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-6 sm:grid-cols-2",
					children: list.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/resources/$slug",
						params: { slug: a.slug },
						className: "group overflow-hidden rounded-3xl bg-card shadow-soft transition hover:shadow-lift",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: a.image.src,
							alt: a.image.alt,
							loading: "lazy",
							className: "aspect-[16/9] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "flex items-center gap-3 text-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-semibold text-terracotta",
										children: a.category
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "flex items-center gap-1 text-muted-foreground",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, {
												className: "size-3.5",
												"aria-hidden": true
											}),
											" ",
											a.minutes,
											" min read"
										]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-2 text-2xl text-primary",
									children: a.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-muted-foreground",
									children: a.excerpt
								})
							]
						})]
					}, a.slug))
				}),
				list.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-10 text-muted-foreground",
					children: "New guides in this category are coming soon."
				})
			]
		})
	})] });
}
//#endregion
export { Page as component };
