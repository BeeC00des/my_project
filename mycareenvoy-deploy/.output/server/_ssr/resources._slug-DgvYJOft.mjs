import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { K as Clock, it as ArrowLeft } from "../_libs/lucide-react.mjs";
import { s as WhatsAppButton, t as Button } from "./primitives-DZ3UawNy.mjs";
import { t as Route } from "./resources._slug-EGuFZlYV.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/resources._slug-DgvYJOft.js
var import_jsx_runtime = require_jsx_runtime();
function Page() {
	const { article: a } = Route.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "py-12 md:py-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page max-w-3xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/resources",
						className: "inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {
							className: "size-4",
							"aria-hidden": true
						}), " All resources"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-6 flex items-center gap-3 text-sm",
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
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-2 text-4xl text-primary md:text-5xl",
						children: a.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-xl text-muted-foreground",
						children: a.excerpt
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container-page mt-10 max-w-4xl",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: a.image.src,
					alt: a.image.alt,
					className: "aspect-[16/9] w-full rounded-3xl object-cover shadow-soft"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page max-w-3xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "prose-care mt-10 text-lg",
					dangerouslySetInnerHTML: { __html: a.html }
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "mt-14 rounded-3xl bg-primary p-8 text-primary-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-2xl",
							children: "Want a qualified nurse checking on your parent?"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 opacity-85",
							children: "Regular home visits, doctor oversight, and a clear report after every visit."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 flex flex-wrap gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								variant: "cta",
								size: "lg",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/get-started",
									children: "Get started"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppButton, {})]
						})
					]
				})]
			})
		]
	});
}
//#endregion
export { Page as component };
