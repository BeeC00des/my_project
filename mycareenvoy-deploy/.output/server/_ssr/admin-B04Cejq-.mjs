import { _ as lazyRouteComponent, v as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as stringType, o as objectType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin-B04Cejq-.js
var $$splitComponentImporter = () => import("./admin-BEzFTc2a.mjs");
var Route = createFileRoute("/admin")({
	validateSearch: objectType({ s: stringType().optional() }),
	head: () => ({ meta: [
		{ title: "Admin | MyCareEnvoy" },
		{
			name: "robots",
			content: "noindex"
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		},
		{
			name: "description",
			content: "MyCareEnvoy admin dashboard"
		},
		{
			property: "og:title",
			content: "Admin | MyCareEnvoy"
		},
		{
			property: "og:description",
			content: "MyCareEnvoy admin dashboard"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
