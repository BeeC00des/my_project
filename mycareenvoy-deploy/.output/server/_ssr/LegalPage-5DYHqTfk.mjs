import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/LegalPage-5DYHqTfk.js
var import_jsx_runtime = require_jsx_runtime();
function LegalPage({ title, updated = "October 2026", html }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-12 md:py-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page max-w-3xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-4xl text-primary md:text-5xl",
					children: title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-2 text-muted-foreground",
					children: ["Last updated ", updated]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "prose-care mt-8",
					dangerouslySetInnerHTML: { __html: html }
				})
			]
		})
	});
}
//#endregion
export { LegalPage as t };
