import { _ as lazyRouteComponent, v as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as stringType, i as enumType, o as objectType } from "../_libs/zod.mjs";
import { t as seo } from "./seo-Cfstf6d3.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/get-started-DGRYZa-G.js
var $$splitComponentImporter = () => import("./get-started-9KPpTRgz.mjs");
var Route = createFileRoute("/get-started")({
	validateSearch: objectType({
		plan: stringType().optional(),
		baseline: enumType([
			"clinic",
			"home",
			"video",
			"virtual"
		]).transform((value) => value === "virtual" ? "video" : value).optional()
	}),
	head: () => seo("Request a free care call | MyCareEnvoy", "Tell us about your parent in Nigeria and request a free enrollment call. We'll contact you within 24 hours. No payment or care booking is made by submitting."),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
