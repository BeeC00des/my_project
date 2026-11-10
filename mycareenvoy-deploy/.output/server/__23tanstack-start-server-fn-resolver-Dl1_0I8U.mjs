//#region node_modules/.nitro/vite/services/ssr/assets/__23tanstack-start-server-fn-resolver-Dl1_0I8U.js
var manifest = {
	"344524f228831af5fffc16db1bfe7eb5704a74e416b45b208efbd53fcfed8070": {
		functionName: "submitCareRequest_createServerFn_handler",
		importer: () => import("./_ssr/care.functions-DbDUltbk.mjs")
	},
	"add22e623b18f2872f77fe18ad2bc8fbf46cd71d121d7f438a8d3c7711f44bfd": {
		functionName: "submitPartnerEnquiry_createServerFn_handler",
		importer: () => import("./_ssr/care.functions-DbDUltbk.mjs")
	},
	"d59a53fa10ca9ff098c90060dbb0222a963139bcf2ad36123d18688b1317a5a9": {
		functionName: "listCareServices_createServerFn_handler",
		importer: () => import("./_ssr/care.functions-DbDUltbk.mjs")
	},
	"dd6d7316922aa248d5bad037f2fc314e537d7e96d890eae68e5e68c137e68140": {
		functionName: "submitCareApplication_createServerFn_handler",
		importer: () => import("./_ssr/care.functions-DbDUltbk.mjs")
	}
};
async function getServerFnById(id, access) {
	const serverFnInfo = manifest[id];
	if (!serverFnInfo) throw new Error("Server function info not found for " + id);
	const fnModule = serverFnInfo.module ??= await serverFnInfo.importer();
	if (!fnModule) throw new Error("Server function module not resolved for " + id);
	const action = fnModule[serverFnInfo.functionName];
	if (!action) throw new Error("Server function module export not resolved for serverFn ID: " + id);
	return action;
}
//#endregion
export { getServerFnById as t };
