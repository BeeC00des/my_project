import { a as careRequestSchema, i as applicationSchema, o as partnerEnquirySchema } from "./care-validation-B98TurVQ.mjs";
import { a as TSS_SERVER_FUNCTION, l as createServerFn } from "./createServerFn-DDDJMFWM.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/care.functions-DbDUltbk.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var listCareServices_createServerFn_handler = createServerRpc({
	id: "d59a53fa10ca9ff098c90060dbb0222a963139bcf2ad36123d18688b1317a5a9",
	name: "listCareServices",
	filename: "src/lib/care.functions.ts"
}, (opts) => listCareServices.__executeServer(opts));
var listCareServices = createServerFn({ method: "GET" }).handler(listCareServices_createServerFn_handler, async () => {
	const { carePublicClient } = await import("./care-public.server-8YQI3Zfd.mjs");
	const { data, error } = await carePublicClient().from("services").select("id,name,category,description,status,display_order").order("display_order");
	if (error) throw new Error("We couldn't load services. Please try again.");
	return data;
});
var submitCareRequest_createServerFn_handler = createServerRpc({
	id: "344524f228831af5fffc16db1bfe7eb5704a74e416b45b208efbd53fcfed8070",
	name: "submitCareRequest",
	filename: "src/lib/care.functions.ts"
}, (opts) => submitCareRequest.__executeServer(opts));
var submitCareRequest = createServerFn({ method: "POST" }).inputValidator((data) => careRequestSchema.parse(data)).handler(submitCareRequest_createServerFn_handler, async ({ data }) => {
	const { carePublicClient } = await import("./care-public.server-8YQI3Zfd.mjs");
	const client = carePublicClient();
	const { data: service, error: serviceError } = await client.from("services").select("status").eq("id", data.service_id).single();
	if (serviceError || !service) throw new Error("Please choose a service from the list.");
	if (data.kind === "request" !== (service.status === "available")) throw new Error("Service availability has changed. Please refresh and try again.");
	const id = crypto.randomUUID();
	const values = data.kind === "request" ? {
		phone: data.phone,
		country: data.country ?? null,
		existing_family: data.existing_family ?? null,
		parent_name: data.parent_name,
		parent_location: data.parent_location,
		urgency: data.urgency ?? null,
		message: data.message ?? null
	} : {};
	const { error } = await client.from("care_requests").insert({
		...values,
		id,
		full_name: data.full_name,
		email: data.email,
		service_id: data.service_id,
		status: data.kind === "waitlist" ? "waitlist" : "new",
		consent: data.kind === "request"
	});
	if (error) throw new Error("We couldn't save your request. Please try again.");
	return { id };
});
var submitCareApplication_createServerFn_handler = createServerRpc({
	id: "dd6d7316922aa248d5bad037f2fc314e537d7e96d890eae68e5e68c137e68140",
	name: "submitCareApplication",
	filename: "src/lib/care.functions.ts"
}, (opts) => submitCareApplication.__executeServer(opts));
var submitCareApplication = createServerFn({ method: "POST" }).inputValidator((data) => applicationSchema.parse(data)).handler(submitCareApplication_createServerFn_handler, async ({ data }) => {
	const { carePublicClient } = await import("./care-public.server-8YQI3Zfd.mjs");
	const { kind, ...values } = data;
	const id = crypto.randomUUID();
	const { error } = await carePublicClient().from("physiotherapist_applicants").insert({
		...values,
		id,
		registration_number: data.registration_number ?? "",
		years_experience: data.years_experience ?? null
	});
	if (error) throw new Error("We couldn't save your application. Please try again.");
	return { id };
});
var submitPartnerEnquiry_createServerFn_handler = createServerRpc({
	id: "add22e623b18f2872f77fe18ad2bc8fbf46cd71d121d7f438a8d3c7711f44bfd",
	name: "submitPartnerEnquiry",
	filename: "src/lib/care.functions.ts"
}, (opts) => submitPartnerEnquiry.__executeServer(opts));
var submitPartnerEnquiry = createServerFn({ method: "POST" }).inputValidator((data) => partnerEnquirySchema.parse(data)).handler(submitPartnerEnquiry_createServerFn_handler, async ({ data }) => {
	const { carePublicClient } = await import("./care-public.server-8YQI3Zfd.mjs");
	const client = carePublicClient();
	const id = crypto.randomUUID();
	const details = {
		org_type: data.org_type,
		contact_name: data.full_name,
		contact_role: data.role ?? null,
		home_services: data.home_services ?? null,
		services: data.services,
		message: data.message ?? null
	};
	if (data.org_type === "Pharmacy" && !data.registration_number?.trim()) throw new Error("Please add your Pharmacists Council of Nigeria registration details.");
	let error = null;
	if (data.org_type === "Laboratory" || data.org_type === "Pharmacy") ({error} = await client.from(data.org_type === "Laboratory" ? "lab_partner_applicants" : "pharmacy_partner_applicants").insert({
		id,
		full_name: data.organisation,
		email: data.email,
		phone: data.phone,
		location: data.location,
		registration_number: data.registration_number ?? "",
		details
	}));
	else ({error} = await client.from("partner_inquiries").insert({
		id,
		organisation: data.organisation,
		org_type: data.org_type,
		full_name: data.full_name,
		email: data.email,
		phone: data.phone,
		details
	}));
	if (error) throw new Error("We couldn't save your enquiry. Please try again.");
	return { id };
});
//#endregion
export { listCareServices_createServerFn_handler, submitCareApplication_createServerFn_handler, submitCareRequest_createServerFn_handler, submitPartnerEnquiry_createServerFn_handler };
