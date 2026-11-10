import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { o as SectionHeading } from "./primitives-DZ3UawNy.mjs";
import { t as useServerFn } from "./useServerFn-CrZF2pjq.mjs";
import { n as submitCareApplication } from "./care.functions-DgQf-oLk.mjs";
import { i as Success, o as plainDetails, r as SimpleForm } from "./FormKit-B4tUv92B.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/join.physiotherapists-_J7H_fkh.js
var import_jsx_runtime = require_jsx_runtime();
var partnerFields = { physiotherapists: [
	{
		name: "full_name",
		label: "Full name",
		type: "text",
		required: true
	},
	{
		name: "phone",
		label: "Phone (WhatsApp)",
		type: "tel",
		required: true,
		defaultCountry: "+234"
	},
	{
		name: "email",
		label: "Email",
		type: "email",
		required: true
	},
	{
		name: "location",
		label: "City and state in Nigeria",
		type: "text",
		required: true
	},
	{
		name: "registration_number",
		label: "Medical Rehabilitation Therapists Board of Nigeria registration number",
		type: "text",
		required: true,
		full: true
	},
	{
		name: "years_experience",
		label: "Years of experience",
		type: "number"
	},
	{
		name: "focus",
		label: "Areas of focus",
		type: "multi",
		options: [
			"Stroke rehab",
			"Orthopaedic",
			"Elderly care",
			"Neurological",
			"Other"
		]
	},
	{
		name: "home_visits",
		label: "Do you do home visits?",
		type: "radio",
		options: ["Yes", "No"]
	},
	{
		name: "coverage",
		label: "Areas you can cover",
		type: "text",
		full: true
	},
	{
		name: "cv",
		label: "CV",
		type: "file"
	},
	{
		name: "reference_1",
		label: "Reference 1",
		type: "textarea",
		required: true,
		help: "Role, professional relationship and contact details."
	},
	{
		name: "reference_2",
		label: "Reference 2",
		type: "textarea",
		required: true,
		help: "Role, professional relationship and contact details."
	}
] };
var titles = { physiotherapists: "Physiotherapists" };
function CarePartnerApplication({ kind }) {
	const send = useServerFn(submitCareApplication);
	const fields = partnerFields[kind];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-cream py-12 md:py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page max-w-3xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Work with MyCareEnvoy",
				title: titles[kind],
				intro: "Support older adults and their families with vetted care in Nigeria."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SimpleForm, {
					fields,
					folder: kind,
					submitLabel: "Submit application",
					success: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Success, {
						title: "Application received. Thank you.",
						children: "We will review your details and contact you about the next steps."
					}),
					onSubmit: async (v, files) => {
						await send({ data: {
							kind,
							full_name: v["full_name"],
							email: v["email"],
							phone: v["phone"],
							location: v["location"],
							registration_number: v["registration_number"],
							years_experience: v["years_experience"],
							details: plainDetails(fields, v),
							files
						} });
					}
				})
			})]
		})
	});
}
function Page() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CarePartnerApplication, { kind: "physiotherapists" });
}
//#endregion
export { Page as component };
