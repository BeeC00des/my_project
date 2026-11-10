import { r as __toESM } from "../_runtime.mjs";
import { _ as require_jsx_runtime, v as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { $ as Bell, C as MessageSquareText, F as Hospital, H as Eye, I as Heart, Q as Brain, R as HeartHandshake, c as Truck, d as TestTubeDiagonal, f as Stethoscope, ot as Activity, p as ShieldCheck, r as Utensils, rt as ArrowRight, tt as BadgeCheck, y as Pill } from "../_libs/lucide-react.mjs";
import { o as SectionHeading, t as Button } from "./primitives-DZ3UawNy.mjs";
import { t as IMG } from "./images-DLX2myIW.mjs";
import { r as CARE_URGENCIES, t as CARE_CATEGORIES } from "./care-validation-B98TurVQ.mjs";
import { n as useSuspenseQuery } from "../_libs/tanstack__react-query.mjs";
import { t as useServerFn } from "./useServerFn-CrZF2pjq.mjs";
import { r as submitCareRequest } from "./care.functions-DgQf-oLk.mjs";
import { a as DialogTitle, i as DialogHeader, n as DialogContent, o as careServicesQuery, r as DialogDescription, t as Dialog } from "./care-queries-LVs-ROLs.mjs";
import { i as Success, r as SimpleForm } from "./FormKit-B4tUv92B.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/care-on-request-FNAM3U8B.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var icons = {
	physiotherapy: Activity,
	"post-hospital": HeartHandshake,
	"home-lab": TestTubeDiagonal,
	medication: Pill,
	specialist: Stethoscope,
	sensory: Eye,
	dietitian: Utensils,
	caregivers: HeartHandshake,
	safety: ShieldCheck,
	equipment: Truck,
	hospital: Hospital,
	memory: Brain,
	palliative: Heart
};
var emergency = "For emergencies, please call local emergency services or go to the nearest hospital. MyCareEnvoy is not an emergency service.";
function CarePage() {
	const { data: services } = useSuspenseQuery(careServicesQuery);
	const send = useServerFn(submitCareRequest);
	const [selected, setSelected] = (0, import_react.useState)("");
	const [notify, setNotify] = (0, import_react.useState)(null);
	const [notifyDone, setNotifyDone] = (0, import_react.useState)(false);
	const [requestDone, setRequestDone] = (0, import_react.useState)(false);
	function request(id = "") {
		setSelected(id);
		document.getElementById("request-care")?.scrollIntoView({
			behavior: "smooth",
			block: "start"
		});
	}
	const fields = [
		{
			name: "full_name",
			label: "Your full name",
			type: "text",
			required: true
		},
		{
			name: "email",
			label: "Your email",
			type: "email",
			required: true
		},
		{
			name: "phone",
			label: "Your WhatsApp number with country code",
			type: "tel",
			required: true
		},
		{
			name: "country",
			label: "Country you live in",
			type: "select",
			options: [
				"United States",
				"United Kingdom",
				"Canada",
				"Ireland",
				"Other"
			]
		},
		{
			name: "existing_family",
			label: "Are you an existing MyCareEnvoy family?",
			type: "radio",
			options: ["Yes", "No"]
		},
		{
			name: "parent_name",
			label: "Parent's first name",
			type: "text",
			required: true
		},
		{
			name: "parent_location",
			label: "Parent's city and state in Nigeria",
			type: "text",
			required: true
		},
		{
			name: "service_id",
			label: "Service needed",
			type: "select",
			required: true,
			options: services.map((s) => ({
				value: s.id,
				label: s.status === "available" ? s.name : `${s.name} (Coming soon: notify me)`
			})),
			full: true
		},
		{
			name: "urgency",
			label: "How urgent is this?",
			type: "radio",
			options: [...CARE_URGENCIES]
		},
		{
			name: "message",
			label: "Tell us more",
			type: "textarea"
		},
		{
			name: "consent",
			label: "Parent consent",
			type: "consent",
			required: true,
			placeholder: "I confirm my parent is aware of and agrees to this request."
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative isolate overflow-hidden bg-primary py-16 text-primary-foreground md:py-24",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: IMG.caregiver.src,
					alt: IMG.caregiver.alt,
					className: "absolute inset-0 -z-20 size-full object-cover object-center",
					fetchPriority: "high"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 -z-10 bg-primary/85" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "container-page",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-4 text-sm font-semibold uppercase",
							children: "MyCareEnvoy · Care on request"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "max-w-2xl text-4xl md:text-5xl",
							children: "One call. The right care, arranged."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 max-w-2xl text-lg",
							children: "Need a physiotherapist, a lab test at home, or someone at the hospital bedside? Tell us what your parent needs. We find a vetted professional, arrange the visit, and keep you updated."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "cta",
							size: "lg",
							className: "mt-8",
							onClick: () => request(),
							children: ["Request care ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { "aria-hidden": true })]
						})
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-14 md:py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, { title: "How it works" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "mt-8 grid gap-8 md:grid-cols-3",
					children: [
						{
							Icon: MessageSquareText,
							text: "Tell us what your parent needs."
						},
						{
							Icon: BadgeCheck,
							text: "We match them with a vetted professional and confirm the cost with you before anything is booked."
						},
						{
							Icon: HeartHandshake,
							text: "The visit happens, and you get a report."
						}
					].map(({ Icon, text }, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
							className: "size-7 shrink-0 text-terracotta",
							"aria-hidden": true
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mb-2 text-sm font-semibold text-primary",
							children: ["0", i + 1]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: text })] })]
					}, text))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-cream py-14 md:py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, { title: "The care your parent needs" }),
					CARE_CATEGORIES.map((category) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-2xl text-primary",
							children: category
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
							children: services.filter((s) => s.category === category).map((s) => {
								const Icon = icons[s.id] ?? HeartHandshake;
								const available = s.status === "available";
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
									className: "flex flex-col rounded-lg border bg-card p-6 shadow-soft",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-start justify-between gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
												className: "size-7 shrink-0 text-terracotta",
												"aria-hidden": true
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: `rounded-full px-3 py-1 text-xs font-semibold ${available ? "bg-primary-soft text-primary" : "bg-gold-soft text-foreground"}`,
												children: available ? "Available" : "Coming soon"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "mt-5 text-xl text-primary",
											children: s.name
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mb-6 mt-3 text-muted-foreground",
											children: s.description
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
											variant: available ? "outline" : "ghost",
											className: "mt-auto self-start",
											onClick: () => available ? request(s.id) : (setNotify(s), setNotifyDone(false)),
											children: [available ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { "aria-hidden": true }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, { "aria-hidden": true }), available ? "Request" : "Notify me"]
										})
									]
								}, s.id);
							})
						})]
					}, category)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-10 border-t pt-8 text-muted-foreground",
						children: "Care on request is available to all families, including those not on a monthly plan. Each service is quoted before booking. Members on a monthly plan get priority booking."
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			id: "request-care",
			className: "scroll-mt-24 py-16 md:py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page max-w-3xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, { title: "Request care for your parent" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8",
						children: requestDone ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Success, {
							title: "Thank you.",
							children: "We will contact you on WhatsApp within 24 hours to confirm the details and the cost."
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SimpleForm, {
							fields,
							initial: { service_id: selected },
							submitLabel: "Send request",
							success: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Success, {
								title: "Thank you.",
								children: "We will contact you on WhatsApp within 24 hours to confirm the details and the cost."
							}),
							onSubmit: async (v) => {
								const service = services.find((s) => s.id === v["service_id"]);
								if (service?.status === "coming_soon") {
									setNotify(service);
									setNotifyDone(false);
									throw new Error("This service is coming soon. Please use Notify me to join its waitlist.");
								}
								await send({ data: {
									...v,
									kind: "request"
								} });
								setRequestDone(true);
							}
						}, selected)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-sm text-muted-foreground",
						children: emergency
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
			open: !!notify,
			onOpenChange: (open) => {
				if (!open) setNotify(null);
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
				className: "max-h-[90dvh] overflow-y-auto sm:max-w-lg",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "Notify me" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: notify?.name })] }),
					notify && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SimpleForm, {
						fields: [{
							name: "full_name",
							label: "Name",
							type: "text",
							required: true
						}, {
							name: "email",
							label: "Email",
							type: "email",
							required: true
						}],
						submitLabel: "Notify me",
						success: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Success, {
							title: "You're on the list.",
							children: [
								"We have saved your interest in ",
								notify.name,
								"."
							]
						}),
						onSubmit: async (v) => {
							await send({ data: {
								...v,
								kind: "waitlist",
								service_id: notify.id
							} });
							setNotifyDone(true);
						}
					}, notify.id),
					!notifyDone && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm text-muted-foreground",
						children: ["Service: ", notify?.name]
					})
				]
			})
		})
	] });
}
//#endregion
export { CarePage as component };
