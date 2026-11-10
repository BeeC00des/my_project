import { r as __toESM } from "../_runtime.mjs";
import { _ as require_jsx_runtime, v as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { J as CircleCheck, k as LoaderCircle, o as Upload, t as X } from "../_libs/lucide-react.mjs";
import { c as cn, t as Button } from "./primitives-DZ3UawNy.mjs";
import { t as supabase } from "./client-DFJbzuNn.mjs";
import { r as markEngaged } from "./visitor-engagement-B7t0jAdy.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/FormKit-B4tUv92B.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var COUNTRY_CODES = [
	{
		code: "+1",
		label: "US/CA +1"
	},
	{
		code: "+44",
		label: "UK +44"
	},
	{
		code: "+234",
		label: "NG +234"
	},
	{
		code: "+353",
		label: "IE +353"
	},
	{
		code: "+49",
		label: "DE +49"
	},
	{
		code: "+971",
		label: "UAE +971"
	},
	{
		code: "+61",
		label: "AU +61"
	},
	{
		code: "+27",
		label: "ZA +27"
	},
	{
		code: "+233",
		label: "GH +233"
	}
];
var opt = (o) => typeof o === "string" ? {
	value: o,
	label: o
} : o;
var inputCls = "h-12 w-full rounded-xl border border-input bg-card px-4 text-base outline-none transition focus:border-ring focus:ring-2 focus:ring-ring/30 aria-[invalid=true]:border-destructive";
var MAX = 5242880;
var OK_TYPES = [
	"application/pdf",
	"image/jpeg",
	"image/png"
];
function validate(fields, v) {
	const errs = {};
	for (const f of fields) {
		if (f.showIf && !f.showIf(v)) continue;
		const val = v[f.name];
		const empty = val === void 0 || val === null || val === "" || Array.isArray(val) && val.length === 0 || f.type === "tel" && typeof val === "string" && !val.split(" ")[1];
		if (f.required && (empty || f.type === "consent" && val !== true)) {
			errs[f.name] = f.type === "consent" ? "Please tick this box to continue." : f.type === "multi" ? "Please choose at least one." : f.type === "file" ? "Please attach this file." : `Please add ${f.label.toLowerCase()}.`;
			continue;
		}
		if (!empty && f.type === "email" && !/^\S+@\S+\.\S+$/.test(String(val))) errs[f.name] = "That email doesn't look quite right.";
		if (!empty && f.type === "tel" && String(val).replace(/\D/g, "").length < 8) errs[f.name] = "Please check the phone number.";
		if (!empty && f.type === "file") {
			const file = val;
			if (!OK_TYPES.includes(file.type)) errs[f.name] = "Please use a PDF, JPG or PNG file.";
			else if (file.size > MAX) errs[f.name] = "That file is over 5MB. Please use a smaller one.";
		}
	}
	return errs;
}
function FieldInput({ f, value, onChange, error }) {
	const id = `f-${f.name}`;
	const describedBy = error ? `${id}-err` : f.help ? `${id}-help` : void 0;
	const common = {
		id,
		"aria-invalid": !!error,
		"aria-describedby": describedBy
	};
	switch (f.type) {
		case "textarea": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
			...common,
			rows: 4,
			placeholder: f.placeholder,
			value: value ?? "",
			onChange: (e) => onChange(e.target.value),
			className: cn(inputCls, "h-auto py-3")
		});
		case "select": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
			...common,
			value: value ?? "",
			onChange: (e) => onChange(e.target.value),
			className: inputCls,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
				value: "",
				children: "Choose one"
			}), f.options.map(opt).map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
				value: o.value,
				children: o.label
			}, o.value))]
		});
		case "radio": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			role: "radiogroup",
			"aria-labelledby": `${id}-label`,
			className: "flex flex-wrap gap-2",
			children: f.options.map(opt).map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: cn("cursor-pointer rounded-full border px-4 py-2 transition", value === o.value ? "border-primary bg-primary text-primary-foreground" : "bg-card hover:border-primary"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "radio",
					name: f.name,
					value: o.value,
					checked: value === o.value,
					onChange: () => onChange(o.value),
					className: "sr-only"
				}), o.label]
			}, o.value))
		});
		case "multi": {
			const arr = value ?? [];
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-2 sm:grid-cols-2",
				role: "group",
				"aria-labelledby": `${id}-label`,
				children: f.options.map(opt).map((o) => {
					const on = arr.includes(o.value);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: cn("flex cursor-pointer items-center gap-3 rounded-xl border px-4 py-3 transition", on ? "border-primary bg-primary-soft" : "bg-card hover:border-primary/50"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "checkbox",
							checked: on,
							onChange: () => onChange(on ? arr.filter((x) => x !== o.value) : [...arr, o.value]),
							className: "size-4 accent-[var(--primary)]"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: o.label })]
					}, o.value);
				})
			});
		}
		case "consent": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
			className: "flex cursor-pointer items-start gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				...common,
				type: "checkbox",
				checked: value === true,
				onChange: (e) => onChange(e.target.checked),
				className: "mt-1 size-5 accent-[var(--primary)]"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: f.placeholder })]
		});
		case "tel": {
			const [cc, num] = (value ?? `${f.defaultCountry ?? "+1"} `).split(" ");
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "sr-only",
						htmlFor: `${id}-cc`,
						children: "Country code"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
						id: `${id}-cc`,
						value: cc,
						onChange: (e) => onChange(`${e.target.value} ${num ?? ""}`),
						className: cn(inputCls, "w-32 shrink-0 px-2"),
						children: COUNTRY_CODES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: c.code,
							children: c.label
						}, c.code))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						...common,
						type: "tel",
						inputMode: "tel",
						placeholder: f.placeholder ?? "Phone number",
						value: num ?? "",
						onChange: (e) => onChange(`${cc} ${e.target.value.replace(/[^\d\s-]/g, "")}`),
						className: inputCls
					})
				]
			});
		}
		case "file": {
			const file = value;
			return file ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between gap-3 rounded-xl border bg-card px-4 py-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "truncate",
					children: [
						file.name,
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-sm text-muted-foreground",
							children: [
								"(",
								(file.size / 1024 / 1024).toFixed(1),
								"MB)"
							]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => onChange(void 0),
					"aria-label": `Remove ${file.name}`,
					className: "rounded-full p-1 hover:bg-muted",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
				})]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				htmlFor: id,
				className: "flex cursor-pointer items-center gap-3 rounded-xl border-2 border-dashed bg-card px-4 py-4 text-muted-foreground transition hover:border-primary hover:text-primary",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, {
						className: "size-5",
						"aria-hidden": true
					}),
					" Choose a file (PDF, JPG or PNG, max 5MB)",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						...common,
						type: "file",
						accept: ".pdf,.jpg,.jpeg,.png,application/pdf,image/jpeg,image/png",
						className: "sr-only",
						onChange: (e) => onChange(e.target.files?.[0])
					})
				]
			});
		}
		default: return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			...common,
			type: f.type,
			placeholder: f.placeholder,
			value: value ?? "",
			onChange: (e) => onChange(e.target.value),
			className: inputCls
		});
	}
}
function FieldGrid({ fields, values, setValue, errors }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid gap-5 md:grid-cols-2",
		children: fields.filter((f) => !f.showIf || f.showIf(values)).map((f) => {
			const wide = f.full || [
				"textarea",
				"multi",
				"consent",
				"file",
				"radio"
			].includes(f.type);
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: cn(wide && "md:col-span-2"),
				children: [
					f.type !== "consent" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						id: `f-${f.name}-label`,
						htmlFor: `f-${f.name}`,
						className: "mb-2 block font-medium",
						children: [
							f.label,
							" ",
							f.required ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-terracotta",
								"aria-hidden": true,
								children: "*"
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm font-normal text-muted-foreground",
								children: "(optional)"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldInput, {
						f,
						value: values[f.name],
						onChange: (v) => setValue(f.name, v),
						error: errors[f.name]
					}),
					f.help && !errors[f.name] && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						id: `f-${f.name}-help`,
						className: "mt-1.5 text-sm text-muted-foreground",
						children: f.help
					}),
					errors[f.name] && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						id: `f-${f.name}-err`,
						className: "mt-1.5 text-sm font-medium text-destructive",
						role: "alert",
						children: errors[f.name]
					})
				]
			}, f.name);
		})
	});
}
function Honeypot({ value, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "absolute -left-[9999px]",
		"aria-hidden": true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["Leave this empty", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			tabIndex: -1,
			autoComplete: "off",
			value,
			onChange: (e) => onChange(e.target.value)
		})] })
	});
}
async function uploadFiles(folder, fields, values, onProgress) {
	const out = [];
	for (const f of fields.filter((x) => x.type === "file")) {
		const file = values[f.name];
		if (!file) continue;
		onProgress(`Uploading ${f.label.toLowerCase()}...`);
		const safe = file.name.replace(/[^a-zA-Z0-9._-]/g, "_");
		const path = `${folder}/${crypto.randomUUID()}-${safe}`;
		const { error } = await supabase.storage.from("applicant-files").upload(path, file, { contentType: file.type });
		if (error) throw new Error(`We couldn't upload your ${f.label.toLowerCase()}. Please try again.`);
		out.push({
			field: f.name,
			label: f.label,
			name: file.name,
			path
		});
	}
	return out;
}
/** Strips files and returns a plain JSON object for the details column. */
function plainDetails(fields, values) {
	const out = {};
	for (const f of fields) {
		if (f.type === "file") continue;
		if (values[f.name] !== void 0 && values[f.name] !== "") out[f.label] = values[f.name];
	}
	return out;
}
function Success({ title, children, actions }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-3xl bg-card p-8 text-center shadow-soft md:p-12",
		role: "status",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
				className: "mx-auto size-14 text-primary",
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-4 text-3xl text-primary",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto mt-3 max-w-lg text-lg text-muted-foreground",
				children
			}),
			actions && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-7 flex flex-wrap justify-center gap-3",
				children: actions
			})
		]
	});
}
/** Single-page form: validates, uploads files, then calls onSubmit. */
function SimpleForm({ fields, folder, submitLabel = "Submit", onSubmit, success, initial = {} }) {
	const [values, setValues] = (0, import_react.useState)(initial);
	const [errors, setErrors] = (0, import_react.useState)({});
	const [hp, setHp] = (0, import_react.useState)("");
	const [busy, setBusy] = (0, import_react.useState)(null);
	const [done, setDone] = (0, import_react.useState)(false);
	const [fail, setFail] = (0, import_react.useState)("");
	const setValue = (k, v) => {
		setValues((p) => ({
			...p,
			[k]: v
		}));
		if (errors[k]) setErrors((e) => ({
			...e,
			[k]: ""
		}));
	};
	async function submit(e) {
		e.preventDefault();
		setFail("");
		const errs = validate(fields, values);
		setErrors(errs);
		if (Object.values(errs).some(Boolean)) {
			document.getElementById(`f-${Object.keys(errs).find((k) => errs[k])}`)?.focus();
			return;
		}
		if (hp) return setDone(true);
		try {
			setBusy("Sending...");
			const files = folder ? await uploadFiles(folder, fields, values, setBusy) : [];
			setBusy("Saving your details...");
			await onSubmit(values, files);
			markEngaged();
			setDone(true);
			window.scrollTo({
				top: (document.getElementById("form-top")?.offsetTop ?? 0) - 100,
				behavior: "smooth"
			});
		} catch (err) {
			setFail(err instanceof Error ? err.message : "Something went wrong. Please try again.");
		} finally {
			setBusy(null);
		}
	}
	if (done) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		id: "form-top",
		children: success
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		id: "form-top",
		onSubmit: submit,
		noValidate: true,
		className: "relative rounded-3xl bg-card p-6 shadow-soft md:p-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Honeypot, {
				value: hp,
				onChange: setHp
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldGrid, {
				fields,
				values,
				setValue,
				errors
			}),
			fail && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 rounded-xl bg-destructive/10 p-3 text-destructive",
				role: "alert",
				children: fail
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				type: "submit",
				variant: "cta",
				size: "lg",
				className: "mt-8 w-full sm:w-auto",
				disabled: !!busy,
				children: busy ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, {
						className: "animate-spin",
						"aria-hidden": true
					}),
					" ",
					busy
				] }) : submitLabel
			})
		]
	});
}
function check(error) {
	if (error) throw new Error("We couldn't save your details. Please try again in a moment.");
}
//#endregion
export { check as a, Success as i, Honeypot as n, plainDetails as o, SimpleForm as r, validate as s, FieldGrid as t };
