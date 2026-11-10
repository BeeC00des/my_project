import { m as SITE } from "./site-DGtN9-jT.mjs";
import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { z as Gift } from "../_libs/lucide-react.mjs";
import { i as PageHero } from "./primitives-DZ3UawNy.mjs";
import { t as supabase } from "./client-DFJbzuNn.mjs";
import { a as check, i as Success, o as plainDetails, r as SimpleForm } from "./FormKit-B4tUv92B.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/refer-D3sH_Vgi.js
var import_jsx_runtime = require_jsx_runtime();
var fields = [
	{
		name: "full_name",
		label: "Your name",
		type: "text",
		required: true
	},
	{
		name: "contact",
		label: "Your email or WhatsApp",
		type: "text",
		required: true
	},
	{
		name: "existing",
		label: "Are you a current MyCareEnvoy family or team member?",
		type: "radio",
		required: true,
		options: ["Yes", "No"]
	},
	{
		name: "friend_name",
		label: "Your friend's name",
		type: "text",
		required: true
	},
	{
		name: "friend_contact",
		label: "Your friend's WhatsApp or email",
		type: "text",
		required: true
	},
	{
		name: "relationship",
		label: "How do you know them?",
		type: "text",
		placeholder: "Friend, colleague, church member..."
	},
	{
		name: "note",
		label: "A note for us",
		type: "textarea"
	}
];
function Page() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: "Refer a family",
		title: "Know a family who needs us?",
		intro: "Most families find us through someone they trust. If you know someone worrying about a parent in Nigeria, we'd be honoured to help."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page max-w-3xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-8 flex gap-4 rounded-3xl bg-gold-soft p-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gift, {
					className: "size-8 shrink-0 text-terracotta",
					"aria-hidden": true
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-lg",
					children: [
						"As a thank you, you'll receive ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: SITE.referralReward }),
						"."
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SimpleForm, {
				fields,
				submitLabel: "Send referral",
				onSubmit: async (v) => {
					const { error } = await supabase.from("referrals").insert({
						full_name: String(v["full_name"]),
						contact: String(v["contact"]),
						friend_name: String(v["friend_name"]),
						friend_contact: String(v["friend_contact"]),
						details: plainDetails(fields, v)
					});
					check(error);
				},
				success: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Success, {
					title: "Thank you for thinking of them.",
					children: "We'll reach out to your friend gently, and mention that you sent us. We'll let you know when they join."
				})
			})]
		})
	})] });
}
//#endregion
export { Page as component };
