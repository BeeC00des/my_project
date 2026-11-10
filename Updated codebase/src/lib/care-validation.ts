import { z } from "zod";
import { CARE_URGENCIES } from "@/config/care-on-request";

const text = z.string().trim().min(1).max(300);
const email = z.string().trim().email().max(254);
const phone = z.string().trim().min(8).max(40).regex(/^\+\d[\d\s()-]+$/, "Include your country code.");
export const careRequestSchema = z.discriminatedUnion("kind", [
  z.object({ kind: z.literal("request"), full_name: text, email, phone, country: z.enum(["United States", "United Kingdom", "Canada", "Ireland", "Other"]).optional(), existing_family: z.enum(["Yes", "No"]).optional(), parent_name: text, parent_location: text, service_id: text, urgency: z.enum(CARE_URGENCIES).optional(), message: z.string().trim().max(5000).optional(), consent: z.literal(true) }),
  z.object({ kind: z.literal("waitlist"), full_name: text, email, service_id: text }),
]);
export const applicationSchema = z.object({
  kind: z.enum(["physiotherapists"]),
  full_name: text, email, phone, location: text,
  registration_number: z.string().trim().min(1).max(500),
  years_experience: z.string().max(50).optional(),
  details: z.record(z.union([z.string().max(5000), z.boolean(), z.array(z.string().max(300))])),
  files: z.array(z.object({ field: text, label: text, name: text, path: text })).max(5),
}).superRefine((v, ctx) => {
  if (v.kind === "physiotherapists" && (!v.details["Reference 1"] || !v.details["Reference 2"])) ctx.addIssue({ code: "custom", message: "Two references are required", path: ["details"] });
  if (v.files.some((f) => !f.path.startsWith(`${v.kind}/`) || f.path.includes(".."))) ctx.addIssue({ code: "custom", message: "Invalid document path", path: ["files"] });
});
export const ORG_TYPES = ["Hospital", "Clinic", "Laboratory", "Pharmacy", "Diagnostic centre", "Other"] as const;
export const partnerEnquirySchema = z.object({
  organisation: text,
  org_type: z.enum(ORG_TYPES),
  full_name: text,
  role: z.string().trim().max(120).optional(),
  email, phone,
  location: text,
  services: z.string().trim().min(1).max(5000),
  registration_number: z.string().trim().max(500).optional(),
  home_services: z.enum(["Yes", "No"]).optional(),
  message: z.string().trim().max(5000).optional(),
}).superRefine((v, ctx) => {
  if (v.org_type === "Pharmacy" && !v.registration_number?.trim()) ctx.addIssue({ code: "custom", message: "Pharmacists Council of Nigeria registration is required", path: ["registration_number"] });
});
