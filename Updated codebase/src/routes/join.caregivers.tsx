import { createFileRoute } from "@tanstack/react-router";
import { BulletCard, JoinPage } from "@/components/site/JoinPage";
import type { Field } from "@/components/forms/FormKit";
import { LANGUAGES, TEAM_SOURCES } from "@/config/site";
import { IMG } from "@/config/images";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/join/caregivers")({
  head: () => seo("Caregiver jobs in Nigeria: elderly companionship", "Join MyCareEnvoy as a caregiver in Nigeria. Accompany older adults to hospital visits, help with errands and offer companionship."),
  component: Page,
});

const fields: Field[] = [
  { name: "full_name", label: "Full name", type: "text", required: true },
  { name: "phone", label: "Phone or WhatsApp", type: "tel", required: true, defaultCountry: "+234" },
  { name: "email", label: "Email", type: "email" },
  { name: "areas", label: "Cities and areas you can cover", type: "text", required: true },
  { name: "experience", label: "Your experience with older adults", type: "textarea", required: true },
  { name: "tasks", label: "Tasks you're comfortable with", type: "multi", required: true, options: ["Hospital accompaniment", "Errands", "Companionship", "Mobility support", "Light meal help"] },
  { name: "languages", label: "Languages you speak", type: "multi", required: true, options: LANGUAGES },
  { name: "id_doc", label: "Means of ID (PDF or image)", type: "file", required: true },
  { name: "guarantor_name", label: "Guarantor's name", type: "text", required: true },
  { name: "guarantor_phone", label: "Guarantor's phone", type: "tel", required: true, defaultCountry: "+234" },
  { name: "availability", label: "Availability", type: "text", required: true, placeholder: "e.g. weekdays, mornings" },
  { name: "source", label: "How did you hear about us?", type: "select", options: TEAM_SOURCES },
  { name: "consent", label: "Consent", type: "consent", required: true, placeholder: "I consent to MyCareEnvoy carrying out an ID, guarantor and background check." },
];

function Page() {
  return (
    <JoinPage
      eyebrow="Work with us: Caregivers"
      title="Be the steady hand at their side."
      intro="Go with older adults to hospital and clinic visits, help with errands, and be good company. Simple work that means the world to a family abroad."
      image={IMG.caregiver.src}
      imageAlt={IMG.caregiver.alt}
      table="caregiver_applicants"
      fields={fields}
      sections={
        <>
          <BulletCard title="The role" items={["Accompanying older adults to hospital and clinic visits", "Running errands, like pharmacy pick-ups", "Companionship and conversation", "Mobility support around the home and outside"]} />
          <BulletCard title="Checks we carry out" items={["Valid means of ID", "A guarantor we contact directly", "Background check", "Interview and short training"]} />
        </>
      }
      poolNote="Applying adds you to our talent pool. Every caregiver goes through ID, guarantor and background checks and an interview before joining."
    />
  );
}
