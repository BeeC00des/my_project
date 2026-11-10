import { Y as notFound, _ as lazyRouteComponent, v as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as seo } from "./seo-Cfstf6d3.mjs";
import { t as ARTICLES } from "./articles-BYzyd6Rr.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/resources._slug-EGuFZlYV.js
var $$splitComponentImporter = () => import("./resources._slug-DgvYJOft.mjs");
var Route = createFileRoute("/resources/$slug")({
	loader: ({ params }) => {
		const article = ARTICLES.find((a) => a.slug === params.slug);
		if (!article) throw notFound();
		return { article };
	},
	head: ({ loaderData }) => loaderData ? seo(loaderData.article.title, loaderData.article.excerpt) : seo("Article", "MyCareEnvoy resources"),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
