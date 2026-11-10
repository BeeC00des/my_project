import { t as createClient } from "../_libs/supabase__supabase-js.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/care-public.server-8YQI3Zfd.js
function carePublicClient() {
	const key = process.env["SUPABASE_PUBLISHABLE_KEY"];
	const url = process.env["SUPABASE_URL"];
	if (!key || !url) throw new Error("Care requests are temporarily unavailable. Please try again.");
	return createClient(url, key, {
		auth: {
			persistSession: false,
			autoRefreshToken: false,
			storage: void 0
		},
		global: { fetch: (input, init) => {
			const headers = new Headers(init?.headers);
			if (key.startsWith("sb_") && headers.get("Authorization") === `Bearer ${key}`) headers.delete("Authorization");
			headers.set("apikey", key);
			return fetch(input, {
				...init,
				headers
			});
		} }
	});
}
//#endregion
export { carePublicClient };
