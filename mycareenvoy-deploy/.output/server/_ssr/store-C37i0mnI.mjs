import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { it as ArrowLeft } from "../_libs/lucide-react.mjs";
import { s as WhatsAppButton, t as Button } from "./primitives-DZ3UawNy.mjs";
import { t as IMG } from "./images-DLX2myIW.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/store-C37i0mnI.js
var import_jsx_runtime = require_jsx_runtime();
function Store() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative isolate min-h-[65vh] overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: IMG.garden.src,
				alt: IMG.garden.alt,
				className: "absolute inset-0 -z-20 h-full w-full object-cover"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 -z-10 bg-primary/80",
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page py-24 text-primary-foreground md:py-32",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-medium",
						children: "MyCareEnvoy"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-4 text-5xl md:text-6xl",
						children: "Store"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 font-serif text-3xl",
						children: "Coming soon."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10 flex flex-wrap gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "light",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { "aria-hidden": true }), " Back to home"]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppButton, { label: "Stay in touch" })]
					})
				]
			})
		]
	});
}
//#endregion
export { Store as component };
