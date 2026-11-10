import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { PageHero, SectionHeading } from "@/components/site/primitives";
import { SimpleForm, Success, plainDetails, type Field } from "@/components/forms/FormKit";
import { submitPartnerEnquiry } from "@/lib/care.functions";
import { IMG } from "@/config/images";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/partners")({
  head: () =>
    seo(
      "Partner with MyCareEnvoy: hospitals, labs and pharmacies in Nigeria",
      "Hospitals, clinics, labs, pharmacies and diagnostic centres in Nigeria: partner with MyCareEnvoy for referrals and coordinated care of older adults.",
    ),
  component: Page,
});

const fields: Field[] = [
  { name: "organisation", label: "Organisation name", type: "text", required: true },
  {
    name: "org_type",
    label: "Type",
    type: "select",
    required: true,
    options: ["Hospital", "Clinic", "Laboratory", "Pharmacy", "Diagnostic centre", "Other"],
  },
  { name: "full_name", label: "Contact person", type: "text", required: true },
  { name: "role", label: "Role", type: "text" },
  { name: "email", label: "Email", type: "email", required: true },
  { name: "phone", label: "Phone (WhatsApp)", type: "tel", required: true, defaultCountry: "+234" },
  {
    name: "location",
    label: "City, state or areas covered",
    type: "text",
    required: true,
    full: true,
  },
  {
    name: "services",
    label: "Services you offer",
    type: "textarea",
    required: true,
    full: true,
    help: "For labs: common tests and turnaround times. For pharmacies: delivery and coverage.",
  },
  {
    name: "home_services",
    label: "Do you offer home visits or home collection?",
    type: "radio",
    options: ["Yes", "No"],
  },
  {
    name: "registration_number",
    label: "Registration or licence details",
    type: "textarea",
    full: true,
    help: "Required for pharmacies (for example your Pharmacists Council of Nigeria premises registration). Hospitals, clinics and labs may add accreditation details.",
  },
  { name: "message", label: "Anything else we should know?", type: "textarea", full: true },
];

function Page() {
  const send = useServerFn(submitPartnerEnquiry);
  return (
    <>
      <PageHero
        eyebrow="Partner with us"
        title="Let's care for Nigeria's older adults, together."
        intro="One form for hospitals, clinics, labs, pharmacies and diagnostic centres. Tell us what you do, and our partnerships team takes it from there."
        image={IMG.doctor.src}
        imageAlt={IMG.doctor.alt}
      />
      <section className="py-20">
        <div className="container-page grid gap-5 md:grid-cols-3">
          {[
            [
              "Engaged, paying families",
              "Referrals of patients whose families are involved and ready to pay for quality care.",
            ],
            [
              "Coordinated communication",
              "Clear handovers from our nurses and doctors, and reports you can rely on.",
            ],
            ["A trusted network", "Join a growing network of providers families can trust."],
          ].map(([t, b]) => (
            <div key={t} className="rounded-3xl bg-card p-7 shadow-soft">
              <h3 className="text-xl text-primary">{t}</h3>
              <p className="mt-2 text-muted-foreground">{b}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-cream py-20">
        <div className="container-page max-w-3xl">
          <SectionHeading title="Tell us about your organisation" />
          <div className="mt-8">
            <SimpleForm
              fields={fields}
              submitLabel="Send enquiry"
              onSubmit={async (v) => {
                await send({
                  data: {
                    organisation: String(v["organisation"]),
                    org_type: String(v["org_type"]) as "Hospital",
                    full_name: String(v["full_name"]),
                    role: v["role"] ? String(v["role"]) : undefined,
                    email: String(v["email"]),
                    phone: String(v["phone"]),
                    location: String(v["location"]),
                    services: String(v["services"]),
                    home_services: v["home_services"]
                      ? (String(v["home_services"]) as "Yes")
                      : undefined,
                    registration_number: v["registration_number"]
                      ? String(v["registration_number"])
                      : undefined,
                    message: v["message"] ? String(v["message"]) : undefined,
                  },
                });
              }}
              success={
                <Success title="Thank you for reaching out.">
                  Our partnerships team will contact you within two working days.
                </Success>
              }
            />
          </div>
        </div>
      </section>
    </>
  );
}
