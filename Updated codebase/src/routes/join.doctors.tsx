import { createFileRoute } from "@tanstack/react-router";
import { BulletCard, JoinPage } from "@/components/site/JoinPage";
import type { Field } from "@/components/forms/FormKit";
import { TEAM_SOURCES } from "@/config/site";
import { IMG } from "@/config/images";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/join/doctors")({
  head: () =>
    seo(
      "Doctor roles in elderly care, Nigeria",
      "Join MyCareEnvoy as a doctor in Nigeria: onboarding assessments, care plans, oversight of nurses and virtual consults for older adults.",
    ),
  component: Page,
});

const fields: Field[] = [
  { name: "full_name", label: "Full name", type: "text", required: true },
  { name: "email", label: "Email", type: "email", required: true },
  { name: "phone", label: "WhatsApp number", type: "tel", required: true, defaultCountry: "+234" },
  {
    name: "location",
    label: "Location",
    type: "text",
    required: true,
    placeholder: "City and state",
  },
  { name: "mdcn", label: "MDCN registration number", type: "text", required: true },
  { name: "license", label: "Practising license (PDF or image)", type: "file", required: true },
  {
    name: "specialty",
    label: "Specialty",
    type: "text",
    required: true,
    placeholder: "e.g. Family medicine, Internal medicine",
  },
  {
    name: "years",
    label: "Years in practice",
    type: "select",
    required: true,
    options: ["Less than 3", "3 to 5", "6 to 10", "More than 10"],
  },
  {
    name: "roles",
    label: "Roles you're interested in",
    type: "multi",
    required: true,
    options: ["Onboarding assessments", "Ongoing oversight", "Virtual consults"],
  },
  {
    name: "availability",
    label: "Availability",
    type: "text",
    required: true,
    placeholder: "e.g. weekday evenings, Saturdays",
  },
  { name: "cv", label: "CV", type: "file", required: true },
  { name: "source", label: "How did you hear about us?", type: "select", options: TEAM_SOURCES },
  {
    name: "consent",
    label: "Consent",
    type: "consent",
    required: true,
    placeholder: "I consent to MyCareEnvoy verifying my credentials with the MDCN.",
  },
];

function Page() {
  return (
    <JoinPage
      eyebrow="Work with us: Doctors"
      title="Help older adults get care that's planned, not reactive."
      intro="Lead the care plans behind our nurse visits. Flexible, meaningful work with families who are engaged and grateful."
      image={IMG.doctor.src}
      imageAlt={IMG.doctor.alt}
      table="doctor_applicants"
      fields={fields}
      licenseField="mdcn"
      yearsField="years"
      sections={
        <>
          <BulletCard
            title="The roles"
            items={[
              "Onboarding assessments for new families, at home",
              "Care plan development with the family",
              "Ongoing oversight of nurses and visit reports",
              "Virtual consults with patients and families",
            ]}
          />
          <BulletCard
            title="Who we're looking for"
            items={[
              "Fully registered with the MDCN",
              "Experience with older adults or chronic disease",
              "Based in Nigeria, or available for virtual roles",
              "Clear communicator with families abroad",
            ]}
          />
        </>
      }
      poolNote="Applying adds you to our talent pool. Every doctor is verified with the MDCN and interviewed before joining."
    />
  );
}
