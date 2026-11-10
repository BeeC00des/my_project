import { useServerFn } from "@tanstack/react-start";
import { SimpleForm, Success, plainDetails, type Field } from "./FormKit";
import { SectionHeading } from "@/components/site/primitives";
import { submitCareApplication } from "@/lib/care.functions";

export type PartnerKind = "physiotherapists";
export const partnerFields: Record<PartnerKind, Field[]> = {
  physiotherapists: [
    { name: "full_name", label: "Full name", type: "text", required: true },
    {
      name: "phone",
      label: "Phone (WhatsApp)",
      type: "tel",
      required: true,
      defaultCountry: "+234",
    },
    { name: "email", label: "Email", type: "email", required: true },
    { name: "location", label: "City and state in Nigeria", type: "text", required: true },
    {
      name: "registration_number",
      label: "Medical Rehabilitation Therapists Board of Nigeria registration number",
      type: "text",
      required: true,
      full: true,
    },
    { name: "years_experience", label: "Years of experience", type: "number" },
    {
      name: "focus",
      label: "Areas of focus",
      type: "multi",
      options: ["Stroke rehab", "Orthopaedic", "Elderly care", "Neurological", "Other"],
    },
    { name: "home_visits", label: "Do you do home visits?", type: "radio", options: ["Yes", "No"] },
    { name: "coverage", label: "Areas you can cover", type: "text", full: true },
    { name: "cv", label: "CV", type: "file" },
    {
      name: "reference_1",
      label: "Reference 1",
      type: "textarea",
      required: true,
      help: "Role, professional relationship and contact details.",
    },
    {
      name: "reference_2",
      label: "Reference 2",
      type: "textarea",
      required: true,
      help: "Role, professional relationship and contact details.",
    },
  ],
};
const titles: Record<PartnerKind, string> = { physiotherapists: "Physiotherapists" };
export function CarePartnerApplication({ kind }: { kind: PartnerKind }) {
  const send = useServerFn(submitCareApplication);
  const fields = partnerFields[kind];
  return (
    <section className="bg-cream py-12 md:py-20">
      <div className="container-page max-w-3xl">
        <SectionHeading
          eyebrow="Work with MyCareEnvoy"
          title={titles[kind]}
          intro="Support older adults and their families with vetted care in Nigeria."
        />
        <div className="mt-8">
          <SimpleForm
            fields={fields}
            folder={kind}
            submitLabel="Submit application"
            success={
              <Success title="Application received. Thank you.">
                We will review your details and contact you about the next steps.
              </Success>
            }
            onSubmit={async (v, files) => {
              await send({
                data: {
                  kind,
                  full_name: v["full_name"],
                  email: v["email"],
                  phone: v["phone"],
                  location: v["location"],
                  registration_number: v["registration_number"],
                  years_experience: v["years_experience"],
                  details: plainDetails(fields, v),
                  files,
                },
              });
            }}
          />
        </div>
      </div>
    </section>
  );
}
