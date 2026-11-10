import { a as literalType, c as stringType, i as enumType, l as unionType, n as booleanType, o as objectType, r as discriminatedUnionType, s as recordType, t as arrayType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/care-validation-B98TurVQ.js
var CARE_CATEGORIES = [
	"Recovery and therapy",
	"Tests and medication",
	"Specialist care",
	"Support at home",
	"When it matters most"
];
var CARE_REQUEST_STATUSES = [
	"new",
	"contacted",
	"quoted",
	"booked",
	"completed",
	"cancelled",
	"waitlist"
];
var CARE_URGENCIES = [
	"Today",
	"This week",
	"Within a month",
	"Just exploring"
];
CARE_CATEGORIES[0], CARE_CATEGORIES[0], CARE_CATEGORIES[1], CARE_CATEGORIES[1], CARE_CATEGORIES[2], CARE_CATEGORIES[2], CARE_CATEGORIES[2], CARE_CATEGORIES[3], CARE_CATEGORIES[3], CARE_CATEGORIES[3], CARE_CATEGORIES[4], CARE_CATEGORIES[4], CARE_CATEGORIES[4];
var text = stringType().trim().min(1).max(300);
var email = stringType().trim().email().max(254);
var phone = stringType().trim().min(8).max(40).regex(/^\+\d[\d\s()-]+$/, "Include your country code.");
var careRequestSchema = discriminatedUnionType("kind", [objectType({
	kind: literalType("request"),
	full_name: text,
	email,
	phone,
	country: enumType([
		"United States",
		"United Kingdom",
		"Canada",
		"Ireland",
		"Other"
	]).optional(),
	existing_family: enumType(["Yes", "No"]).optional(),
	parent_name: text,
	parent_location: text,
	service_id: text,
	urgency: enumType(CARE_URGENCIES).optional(),
	message: stringType().trim().max(5e3).optional(),
	consent: literalType(true)
}), objectType({
	kind: literalType("waitlist"),
	full_name: text,
	email,
	service_id: text
})]);
var applicationSchema = objectType({
	kind: enumType(["physiotherapists"]),
	full_name: text,
	email,
	phone,
	location: text,
	registration_number: stringType().trim().min(1).max(500),
	years_experience: stringType().max(50).optional(),
	details: recordType(unionType([
		stringType().max(5e3),
		booleanType(),
		arrayType(stringType().max(300))
	])),
	files: arrayType(objectType({
		field: text,
		label: text,
		name: text,
		path: text
	})).max(5)
}).superRefine((v, ctx) => {
	if (v.kind === "physiotherapists" && (!v.details["Reference 1"] || !v.details["Reference 2"])) ctx.addIssue({
		code: "custom",
		message: "Two references are required",
		path: ["details"]
	});
	if (v.files.some((f) => !f.path.startsWith(`${v.kind}/`) || f.path.includes(".."))) ctx.addIssue({
		code: "custom",
		message: "Invalid document path",
		path: ["files"]
	});
});
var partnerEnquirySchema = objectType({
	organisation: text,
	org_type: enumType([
		"Hospital",
		"Clinic",
		"Laboratory",
		"Pharmacy",
		"Diagnostic centre",
		"Other"
	]),
	full_name: text,
	role: stringType().trim().max(120).optional(),
	email,
	phone,
	location: text,
	services: stringType().trim().min(1).max(5e3),
	registration_number: stringType().trim().max(500).optional(),
	home_services: enumType(["Yes", "No"]).optional(),
	message: stringType().trim().max(5e3).optional()
}).superRefine((v, ctx) => {
	if (v.org_type === "Pharmacy" && !v.registration_number?.trim()) ctx.addIssue({
		code: "custom",
		message: "Pharmacists Council of Nigeria registration is required",
		path: ["registration_number"]
	});
});
//#endregion
export { careRequestSchema as a, applicationSchema as i, CARE_REQUEST_STATUSES as n, partnerEnquirySchema as o, CARE_URGENCIES as r, CARE_CATEGORIES as t };
