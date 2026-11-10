import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { i as PageHero, n as CtaBand } from "./primitives-DZ3UawNy.mjs";
import { t as IMG } from "./images-DLX2myIW.mjs";
import { a as FAQ_GROUPS, s as FaqList } from "./faq-Btl2VW0M.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/faq-CnwwA9J5.js
var import_jsx_runtime = require_jsx_runtime();
function Page() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "FAQ",
			title: "Your questions, answered honestly.",
			intro: "Can't find what you need? Message us on WhatsApp and a real person will reply."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container-page max-w-3xl space-y-12",
				children: FAQ_GROUPS.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mb-4 text-2xl text-primary",
					children: g.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaqList, { items: g.items })] }, g.title))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBand, { image: IMG.couple.src })
	] });
}
//#endregion
export { Page as component };
