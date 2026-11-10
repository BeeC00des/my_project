import { h as TEAM_SOURCES, o as LANGUAGES } from "./site-DGtN9-jT.mjs";
import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as IMG } from "./images-DLX2myIW.mjs";
import { n as JoinPage, t as BulletCard } from "./JoinPage-CVc_cD5V.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/join.caregivers-B8Rhlh4f.js
var import_jsx_runtime = require_jsx_runtime();
var fields = [
	{
		name: "full_name",
		label: "Full name",
		type: "text",
		required: true
	},
	{
		name: "phone",
		label: "Phone or WhatsApp",
		type: "tel",
		required: true,
		defaultCountry: "+234"
	},
	{
		name: "email",
		label: "Email",
		type: "email"
	},
	{
		name: "areas",
		label: "Cities and areas you can cover",
		type: "text",
		required: true
	},
	{
		name: "experience",
		label: "Your experience with older adults",
		type: "textarea",
		required: true
	},
	{
		name: "tasks",
		label: "Tasks you're comfortable with",
		type: "multi",
		required: true,
		options: [
			"Hospital accompaniment",
			"Errands",
			"Companionship",
			"Mobility support",
			"Light meal help"
		]
	},
	{
		name: "languages",
		label: "Languages you speak",
		type: "multi",
		required: true,
		options: LANGUAGES
	},
	{
		name: "id_doc",
		label: "Means of ID (PDF or image)",
		type: "file",
		required: true
	},
	{
		name: "guarantor_name",
		label: "Guarantor's name",
		type: "text",
		required: true
	},
	{
		name: "guarantor_phone",
		label: "Guarantor's phone",
		type: "tel",
		required: true,
		defaultCountry: "+234"
	},
	{
		name: "availability",
		label: "Availability",
		type: "text",
		required: true,
		placeholder: "e.g. weekdays, mornings"
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
		placeholder: "I consent to MyCareEnvoy carrying out an ID, guarantor and background check."
	}
];
function Page() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(JoinPage, {
		eyebrow: "Work with us: Caregivers",
		title: "Be the steady hand at their side.",
		intro: "Go with older adults to hospital and clinic visits, help with errands, and be good company. Simple work that means the world to a family abroad.",
		image: IMG.caregiver.src,
		imageAlt: IMG.caregiver.alt,
		table: "caregiver_applicants",
		fields,
		sections: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BulletCard, {
			title: "The role",
			items: [
				"Accompanying older adults to hospital and clinic visits",
				"Running errands, like pharmacy pick-ups",
				"Companionship and conversation",
				"Mobility support around the home and outside"
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BulletCard, {
			title: "Checks we carry out",
			items: [
				"Valid means of ID",
				"A guarantor we contact directly",
				"Background check",
				"Interview and short training"
			]
		})] }),
		poolNote: "Applying adds you to our talent pool. Every caregiver goes through ID, guarantor and background checks and an interview before joining."
	});
}
//#endregion
export { Page as component };
