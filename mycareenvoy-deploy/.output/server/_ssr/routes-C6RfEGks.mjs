import { n as BASELINE } from "./site-DGtN9-jT.mjs";
import { _ as lazyRouteComponent, v as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as MessageSquareText, R as HeartHandshake, Z as Building2, a as UserRound, f as Stethoscope, i as Users, q as ClipboardList, tt as BadgeCheck } from "../_libs/lucide-react.mjs";
import { t as seo } from "./seo-Cfstf6d3.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-C6RfEGks.js
var $$splitComponentImporter = () => import("./routes-nQlGF1Sh.mjs");
var Route = createFileRoute("/")({
	head: () => seo("MyCareEnvoy | Nurse care for your elderly parent in Nigeria", "Verified registered nurses visit your parent at home in Nigeria, with doctor oversight and a clear report after every visit. Elderly care for Nigerian families abroad."),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var STEPS = [
	{
		icon: MessageSquareText,
		title: "Tell us about your parent",
		body: "Start with a free 20 to 30 minute enrollment call."
	},
	{
		icon: Stethoscope,
		title: "A doctor assesses their needs",
		body: `Baseline: $${BASELINE.videoAmount} by video call or $${BASELINE.amount} at a clinic or at home. Waived with an annual plan.`
	},
	{
		icon: UserRound,
		title: "Meet their nurse",
		body: "A dedicated registered nurse visits your parent and follows their care plan."
	},
	{
		icon: ClipboardList,
		title: "Stay in the loop",
		body: "A clear report after every visit: readings, medications and next steps."
	}
];
var TRUST = [
	{
		icon: BadgeCheck,
		title: "Verified nurses",
		body: "Every nurse is a registered nurse whose license we verify with the Nursing and Midwifery Council of Nigeria."
	},
	{
		icon: Stethoscope,
		title: "Verified doctors",
		body: "Every doctor is verified with the Medical and Dental Council of Nigeria."
	},
	{
		icon: ClipboardList,
		title: "Doctor oversight",
		body: "A doctor oversees every care plan, on every plan."
	},
	{
		icon: HeartHandshake,
		title: "Built by a Nigerian doctor",
		body: "Started by a physician who trained and practiced in Nigeria and lives in the diaspora himself."
	},
	{
		icon: Building2,
		title: "Registered in Nigeria",
		body: "A product and service of PadiHealth Ltd, a company registered in Nigeria and accountable locally."
	},
	{
		icon: Users,
		title: "Families stay month after month",
		body: "Families who start with MyCareEnvoy stay with us, because the care and the updates keep proving themselves."
	}
];
//#endregion
export { STEPS as n, TRUST as r, Route as t };
