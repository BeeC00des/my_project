import { _ as lazyRouteComponent, v as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as stringType, i as enumType, n as booleanType, o as objectType } from "../_libs/zod.mjs";
import { t as seo } from "./seo-Cfstf6d3.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/checkout-BdY04dzM.js
var $$splitComponentImporter = () => import("./checkout-BykwZ7Vu.mjs");
var Route = createFileRoute("/checkout")({
	validateSearch: objectType({
		service: stringType().optional(),
		baseline: enumType([
			"clinic",
			"home",
			"video",
			"virtual"
		]).transform((value) => value === "virtual" ? "video" : value).optional(),
		escort: booleanType().optional()
	}),
	head: () => seo("Book and pay for a service | MyCareEnvoy", "Choose a MyCareEnvoy service, add extra visits or support, review your total and continue to payment."),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
