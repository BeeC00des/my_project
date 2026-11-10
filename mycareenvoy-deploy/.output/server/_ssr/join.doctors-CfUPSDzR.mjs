import { h as TEAM_SOURCES } from "./site-DGtN9-jT.mjs";
import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as IMG } from "./images-DLX2myIW.mjs";
import { n as JoinPage, t as BulletCard } from "./JoinPage-CVc_cD5V.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/join.doctors-CfUPSDzR.js
var import_jsx_runtime = require_jsx_runtime();
var fields = [
	{
		name: "full_name",
		label: "Full name",
		type: "text",
		required: true
	},
	{
		name: "email",
		label: "Email",
		type: "email",
		required: true
	},
	{
		name: "phone",
		label: "WhatsApp number",
		type: "tel",
		required: true,
		defaultCountry: "+234"
	},
	{
		name: "location",
		label: "Location",
		type: "text",
		required: true,
		placeholder: "City and state"
	},
	{
		name: "mdcn",
		label: "MDCN registration number",
		type: "text",
		required: true
	},
	{
		name: "license",
		label: "Practising license (PDF or image)",
		type: "file",
		required: true
	},
	{
		name: "specialty",
		label: "Specialty",
		type: "text",
		required: true,
		placeholder: "e.g. Family medicine, Internal medicine"
	},
	{
		name: "years",
		label: "Years in practice",
		type: "select",
		required: true,
		options: [
			"Less than 3",
			"3 to 5",
			"6 to 10",
			"More than 10"
		]
	},
	{
		name: "roles",
		label: "Roles you're interested in",
		type: "multi",
		required: true,
		options: [
			"Onboarding assessments",
			"Ongoing oversight",
			"Virtual consults"
		]
	},
	{
		name: "availability",
		label: "Availability",
		type: "text",
		required: true,
		placeholder: "e.g. weekday evenings, Saturdays"
	},
	{
		name: "cv",
		label: "CV",
		type: "file",
		required: true
	},
	{
		name: "source",
		label: "How did you hear about us?",
		type: "select",
		options: TEAM_SOURCES
	},
	{
		name: "consent",
		label: "Consent",
		type: "consent",
		required: true,
		placeholder: "I consent to MyCareEnvoy verifying my credentials with the MDCN."
	}
];
function Page() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(JoinPage, {
		eyebrow: "Work with us: Doctors",
		title: "Help older adults get care that's planned, not reactive.",
		intro: "Lead the care plans behind our nurse visits. Flexible, meaningful work with families who are engaged and grateful.",
		image: IMG.doctor.src,
		imageAlt: IMG.doctor.alt,
		table: "doctor_applicants",
		fields,
		licenseField: "mdcn",
		yearsField: "years",
		sections: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BulletCard, {
			title: "The roles",
			items: [
				"Onboarding assessments for new families, at home",
				"Care plan development with the family",
				"Ongoing oversight of nurses and visit reports",
				"Virtual consults with patients and families"
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BulletCard, {
			title: "Who we're looking for",
			items: [
				"Fully registered with the MDCN",
				"Experience with older adults or chronic disease",
				"Based in Nigeria, or available for virtual roles",
				"Clear communicator with families abroad"
			]
		})] }),
		poolNote: "Applying adds you to our talent pool. Every doctor is verified with the MDCN and interviewed before joining."
	});
}
//#endregion
export { Page as component };
