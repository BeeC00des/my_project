import { r as __toESM } from "../_runtime.mjs";
import { a as HEALTH_CONCERNS, f as PLANS, i as FAMILY_SOURCES, l as PARENT_LOCATIONS, o as LANGUAGES } from "./site-DGtN9-jT.mjs";
import { _ as require_jsx_runtime, v as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { it as ArrowLeft, k as LoaderCircle, rt as ArrowRight } from "../_libs/lucide-react.mjs";
import { s as WhatsAppButton, t as Button } from "./primitives-DZ3UawNy.mjs";
import { t as supabase } from "./client-DFJbzuNn.mjs";
import { r as markEngaged } from "./visitor-engagement-B7t0jAdy.mjs";
import { i as Success, n as Honeypot, s as validate, t as FieldGrid } from "./FormKit-B4tUv92B.mjs";
import { t as Route } from "./get-started-DGRYZa-G.mjs";
import { a as updateBaseline, i as baselineTotal, n as BaselineSelection, r as baselineFields } from "./BaselineAssessment-CJvO0My0.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/get-started-9KPpTRgz.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var outside = (v) => v["parent_area"] === "Outside Lagos";
var STEPS = [
	{
		title: "About you",
		fields: [
			{
				name: "full_name",
				label: "Your full name",
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
				defaultCountry: "+1"
			},
			{
				name: "country",
				label: "Country you live in",
				type: "select",
				required: true,
				options: [
					"United States",
					"United Kingdom",
					"Canada",
					"Ireland",
					"Germany",
					"United Arab Emirates",
					"Australia",
					"Nigeria",
					"Other"
				]
			},
			{
				name: "timezone",
				label: "Your time zone",
				type: "select",
				required: true,
				options: [
					"US Eastern",
					"US Central",
					"US Mountain",
					"US Pacific",
					"UK / Ireland",
					"Central Europe",
					"Canada Eastern",
					"Canada Pacific",
					"Gulf",
					"Nigeria (WAT)",
					"Other"
				]
			},
			{
				name: "relationship",
				label: "Your relationship to the parent",
				type: "select",
				required: true,
				options: [
					"Son",
					"Daughter",
					"Son-in-law",
					"Daughter-in-law",
					"Grandchild",
					"Niece or nephew",
					"Other relative",
					"Friend"
				]
			}
		]
	},
	{
		title: "About your parent",
		fields: [
			{
				name: "parent_name",
				label: "Parent's name",
				type: "text",
				required: true
			},
			{
				name: "parent_age",
				label: "Parent's age",
				type: "number",
				required: true
			},
			{
				name: "parent_area",
				label: "Where does your parent live?",
				type: "select",
				required: true,
				options: PARENT_LOCATIONS
			},
			{
				name: "parent_city",
				label: "Which city do they live in?",
				type: "text",
				required: true,
				showIf: outside
			},
			{
				name: "languages",
				label: "Languages they speak",
				type: "multi",
				required: true,
				options: LANGUAGES
			},
			{
				name: "concerns",
				label: "Main health concerns",
				type: "multi",
				options: HEALTH_CONCERNS
			},
			{
				name: "more",
				label: "Anything else we should know?",
				type: "textarea",
				placeholder: "Medications, recent hospital visits, who lives with them, what worries you most..."
			}
		]
	},
	{
		title: "Plan and preferences",
		fields: [
			{
				name: "plan",
				label: "Preferred plan",
				type: "radio",
				required: true,
				options: [...PLANS.map((p) => ({
					value: p.id,
					label: p.name
				})), {
					value: "not-sure",
					label: "Not sure yet"
				}]
			},
			{
				name: "siblings_share",
				label: "Will siblings share the cost?",
				type: "radio",
				required: true,
				options: [
					"Yes",
					"No",
					"Maybe"
				]
			},
			{
				name: "call_time",
				label: "Preferred time for a call (your time)",
				type: "select",
				required: true,
				options: [
					"Morning",
					"Midday",
					"Afternoon",
					"Evening",
					"Weekend"
				]
			}
		]
	},
	{
		title: "Choose your parent's baseline assessment",
		fields: baselineFields
	},
	{
		title: "Final step",
		fields: [{
			name: "source",
			label: "How did you hear about us?",
			type: "select",
			required: true,
			options: FAMILY_SOURCES
		}, {
			name: "consent",
			label: "Consent",
			type: "consent",
			required: true,
			placeholder: "I agree to the MyCareEnvoy privacy policy and consent to MyCareEnvoy storing these details to contact me about care."
		}]
	}
];
function Page() {
	const { plan, baseline } = Route.useSearch();
	const [step, setStep] = (0, import_react.useState)(0);
	const [values, setValues] = (0, import_react.useState)({
		plan: PLANS.some((p) => p.id === plan) ? plan : void 0,
		baseline_location: baseline,
		caregiver_escort: false,
		join_video_call: false,
		parent_consent: false
	});
	const [errors, setErrors] = (0, import_react.useState)({});
	const [hp, setHp] = (0, import_react.useState)("");
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [fail, setFail] = (0, import_react.useState)("");
	const [done, setDone] = (0, import_react.useState)(null);
	const isOutside = outside(values);
	const finalStep = STEPS[4];
	const baselineStep = STEPS[3];
	const steps = isOutside && finalStep && baselineStep ? [
		...STEPS.slice(0, 2),
		baselineStep,
		finalStep
	] : STEPS;
	const current = steps[step] ?? steps[0];
	if (!current) return null;
	const setValue = (k, v) => {
		markEngaged();
		setValues((p) => updateBaseline(p, k, v));
		if (errors[k]) setErrors((e) => ({
			...e,
			[k]: ""
		}));
	};
	async function next(e) {
		e.preventDefault();
		if (!current) return;
		const errs = validate(current.fields, values);
		setErrors(errs);
		if (Object.values(errs).some(Boolean)) return;
		if (step < steps.length - 1) {
			setStep(step + 1);
			window.scrollTo({
				top: 0,
				behavior: "smooth"
			});
			return;
		}
		if (hp) return setDone("lead");
		setBusy(true);
		setFail("");
		const v = values;
		const details = {
			languages: v["languages"],
			concerns: v["concerns"],
			notes: v["more"],
			call_time: v["call_time"],
			parent_city: v["parent_city"]
		};
		const { error } = await supabase.from("family_leads").insert({
			full_name: String(v["full_name"]),
			email: String(v["email"]),
			phone: String(v["phone"]),
			country: String(v["country"]),
			timezone: String(v["timezone"]),
			relationship: String(v["relationship"]),
			parent_name: String(v["parent_name"]),
			parent_age: Number(v["parent_age"]) || null,
			parent_area: String(v["parent_area"]),
			plan: String(v["plan"]),
			siblings_share: String(v["siblings_share"]),
			source: String(v["source"]),
			details,
			baseline_location: String(v["baseline_location"]),
			caregiver_escort: v["baseline_location"] === "clinic" && v["caregiver_escort"] === true,
			join_video_call: v["join_video_call"] === true,
			family_time_zone: v["join_video_call"] === true ? String(v["family_time_zone"]) : null,
			parent_consent: v["parent_consent"] === true,
			baseline_total_usd: baselineTotal(v["baseline_location"] === "home" || v["baseline_location"] === "video" ? v["baseline_location"] : "clinic", v["caregiver_escort"] === true)
		});
		if (!error && isOutside) {
			const { error: waitlistError } = await supabase.from("waitlist").insert({
				email: String(v["email"]),
				parent_city: String(v["parent_city"])
			});
			if (waitlistError) {
				setBusy(false);
				setFail("We couldn't join the city waitlist. Please message us on WhatsApp.");
				return;
			}
		}
		setBusy(false);
		if (error) return setFail("We couldn't send your details just now. Please try again, or message us on WhatsApp.");
		markEngaged();
		setDone(isOutside ? "waitlist" : "lead");
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-cream py-12 md:py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container-page max-w-3xl",
			children: done ? done === "lead" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Success, {
				title: `Thank you${values["full_name"] ? `, ${String(values["full_name"]).split(" ")[0]}` : ""}.`,
				actions: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppButton, { label: "Talk to us now on WhatsApp" }),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"Your free enrollment call request is received. We'll contact you within 24 hours to arrange a 20 to 30 minute call about ",
					String(values["parent_name"] ?? "your parent"),
					"."
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3",
					children: "No payment has been taken and no care visit is booked. We'll agree on the next steps and costs with you before booking."
				})]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Success, {
				title: "You're on the waitlist.",
				actions: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppButton, { label: "Chat with us on WhatsApp" }),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"We've added you to the city waitlist for ",
					String(values["parent_city"]),
					". We'll contact you within 24 hours to arrange your free call and discuss local availability. No payment or visit is booked."
				] })
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: "Get started"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-2 text-4xl text-primary md:text-5xl",
					children: "Start with a free call."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-lg text-muted-foreground",
					children: "Tell us about your parent. We'll contact you within 24 hours to arrange a free 20 to 30 minute enrollment call."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm text-muted-foreground",
					children: "Your plan and assessment choices are preferences for our conversation. Submitting does not book a visit or require payment."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8",
					"aria-label": `Step ${step + 1} of ${steps.length}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex justify-between text-sm font-medium",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
							"Step ",
							step + 1,
							" of ",
							steps.length,
							": ",
							current.title
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [Math.round((step + 1) / steps.length * 100), "%"] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-2 h-2 overflow-hidden rounded-full bg-border",
						role: "progressbar",
						"aria-valuenow": step + 1,
						"aria-valuemin": 1,
						"aria-valuemax": steps.length,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-full rounded-full bg-terracotta transition-all duration-500",
							style: { width: `${(step + 1) / steps.length * 100}%` }
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: next,
					noValidate: true,
					className: "relative mt-8 rounded-3xl bg-card p-6 shadow-soft md:p-10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Honeypot, {
							value: hp,
							onChange: setHp
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mb-6 text-2xl text-primary",
							children: current.title
						}),
						step === steps.length - 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-6 text-muted-foreground",
							children: "Send your details to request a free call. We'll confirm availability, care options and costs with you before any booking or payment."
						}),
						current.title === "Choose your parent's baseline assessment" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BaselineSelection, {
							values,
							setValue,
							errors
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldGrid, {
							fields: current.fields,
							values,
							setValue,
							errors
						}),
						step === 1 && isOutside && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-6 rounded-2xl bg-gold-soft p-4",
							role: "status",
							children: [
								"Local care availability needs to be confirmed. We'll add you to the city waitlist for ",
								String(values["parent_city"] || "their city"),
								" and let you know as soon as we're there."
							]
						}),
						fail && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 rounded-xl bg-destructive/10 p-3 text-destructive",
							role: "alert",
							children: fail
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-wrap justify-between gap-3",
							children: [step > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								type: "button",
								variant: "outline",
								size: "lg",
								onClick: () => setStep(step - 1),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { "aria-hidden": true }), " Back"]
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								type: "submit",
								variant: "cta",
								size: "lg",
								disabled: busy,
								children: busy ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, {
									className: "animate-spin",
									"aria-hidden": true
								}), " Sending..."] }) : step === steps.length - 1 ? "Request my free call" : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Continue ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { "aria-hidden": true })] })
							})]
						})
					]
				})
			] })
		})
	});
}
//#endregion
export { Page as component };
