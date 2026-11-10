//#region node_modules/.nitro/vite/services/ssr/assets/seo-Cfstf6d3.js
function seo(title, description) {
	const full = title.includes("MyCareEnvoy") ? title : `${title} | MyCareEnvoy`;
	return { meta: [
		{ title: full },
		{
			name: "description",
			content: description
		},
		{
			property: "og:title",
			content: full
		},
		{
			property: "og:description",
			content: description
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
			name: "twitter:title",
			content: full
		},
		{
			name: "twitter:description",
			content: description
		}
	] };
}
//#endregion
export { seo as t };
