import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { i as PageHero, o as SectionHeading } from "./primitives-DZ3UawNy.mjs";
import { t as IMG } from "./images-DLX2myIW.mjs";
import { t as useServerFn } from "./useServerFn-CrZF2pjq.mjs";
import { i as submitPartnerEnquiry } from "./care.functions-DgQf-oLk.mjs";
import { i as Success, r as SimpleForm } from "./FormKit-B4tUv92B.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/partners-0o8hfmcB.js
var import_jsx_runtime = require_jsx_runtime();
var fields = [
	{
		name: "organisation",
		label: "Organisation name",
		type: "text",
		required: true
	},
	{
		name: "org_type",
		label: "Type",
		type: "select",
		required: true,
		options: [
			"Hospital",
			"Clinic",
			"Laboratory",
			"Pharmacy",
			"Diagnostic centre",
			"Other"
		]
	},
	{
		name: "full_name",
		label: "Contact person",
		type: "text",
		required: true
	},
	{
		name: "role",
		label: "Role",
		type: "text"
	},
	{
		name: "email",
		label: "Email",
		type: "email",
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
		name: "location",
		label: "City, state or areas covered",
		type: "text",
		required: true,
		full: true
	},
	{
		name: "services",
		label: "Services you offer",
		type: "textarea",
		required: true,
		full: true,
		help: "For labs: common tests and turnaround times. For pharmacies: delivery and coverage."
	},
	{
		name: "home_services",
		label: "Do you offer home visits or home collection?",
		type: "radio",
		options: ["Yes", "No"]
	},
	{
		name: "registration_number",
		label: "Registration or licence details",
		type: "textarea",
		full: true,
		help: "Required for pharmacies (for example your Pharmacists Council of Nigeria premises registration). Hospitals, clinics and labs may add accreditation details."
	},
	{
		name: "message",
		label: "Anything else we should know?",
		type: "textarea",
		full: true
	}
];
function Page() {
	const send = useServerFn(submitPartnerEnquiry);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Partner with us",
			title: "Let's care for Nigeria's older adults, together.",
			intro: "One form for hospitals, clinics, labs, pharmacies and diagnostic centres. Tell us what you do, and our partnerships team takes it from there.",
			image: IMG.doctor.src,
			imageAlt: IMG.doctor.alt
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container-page grid gap-5 md:grid-cols-3",
				children: [
					["Engaged, paying families", "Referrals of patients whose families are involved and ready to pay for quality care."],
					["Coordinated communication", "Clear handovers from our nurses and doctors, and reports you can rely on."],
					["A trusted network", "Join a growing network of providers families can trust."]
				].map(([t, b]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-3xl bg-card p-7 shadow-soft",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-xl text-primary",
						children: t
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-muted-foreground",
						children: b
					})]
				}, t))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-cream py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page max-w-3xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, { title: "Tell us about your organisation" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SimpleForm, {
						fields,
						submitLabel: "Send enquiry",
						onSubmit: async (v) => {
							await send({ data: {
								organisation: String(v["organisation"]),
								org_type: String(v["org_type"]),
								full_name: String(v["full_name"]),
								role: v["role"] ? String(v["role"]) : void 0,
								email: String(v["email"]),
								phone: String(v["phone"]),
								location: String(v["location"]),
								services: String(v["services"]),
								home_services: v["home_services"] ? String(v["home_services"]) : void 0,
								registration_number: v["registration_number"] ? String(v["registration_number"]) : void 0,
								message: v["message"] ? String(v["message"]) : void 0
							} });
						},
						success: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Success, {
							title: "Thank you for reaching out.",
							children: "Our partnerships team will contact you within two working days."
						})
					})
				})]
			})
		})
	] });
}
//#endregion
export { Page as component };
