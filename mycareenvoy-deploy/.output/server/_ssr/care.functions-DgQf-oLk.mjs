import { a as careRequestSchema, i as applicationSchema, o as partnerEnquirySchema } from "./care-validation-B98TurVQ.mjs";
import { t as getServerFnById } from "../__23tanstack-start-server-fn-resolver-Dl1_0I8U.mjs";
import { a as TSS_SERVER_FUNCTION, l as createServerFn } from "./createServerFn-DDDJMFWM.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/care.functions-DgQf-oLk.js
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var listCareServices = createServerFn({ method: "GET" }).handler(createSsrRpc("d59a53fa10ca9ff098c90060dbb0222a963139bcf2ad36123d18688b1317a5a9"));
var submitCareRequest = createServerFn({ method: "POST" }).inputValidator((data) => careRequestSchema.parse(data)).handler(createSsrRpc("344524f228831af5fffc16db1bfe7eb5704a74e416b45b208efbd53fcfed8070"));
var submitCareApplication = createServerFn({ method: "POST" }).inputValidator((data) => applicationSchema.parse(data)).handler(createSsrRpc("dd6d7316922aa248d5bad037f2fc314e537d7e96d890eae68e5e68c137e68140"));
var submitPartnerEnquiry = createServerFn({ method: "POST" }).inputValidator((data) => partnerEnquirySchema.parse(data)).handler(createSsrRpc("add22e623b18f2872f77fe18ad2bc8fbf46cd71d121d7f438a8d3c7711f44bfd"));
//#endregion
export { submitPartnerEnquiry as i, submitCareApplication as n, submitCareRequest as r, listCareServices as t };
