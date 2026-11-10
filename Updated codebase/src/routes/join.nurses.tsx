import { createFileRoute } from "@tanstack/react-router";
import { BulletCard, JoinPage } from "@/components/site/JoinPage";
import type { Field } from "@/components/forms/FormKit";
import { TEAM_SOURCES } from "@/config/site";
import { IMG } from "@/config/images";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/join/nurses")({
  head: () => seo("Home care nursing jobs in Nigeria for registered nurses", "Join MyCareEnvoy as a registered nurse in Nigeria. Care for a small, consistent group of older adults at home, with doctor support and fair, on-time pay."),
  component: Page,
});

const fields: Field[] = [
  { name: "full_name", label: "Full name", type: "text", required: true },
  { name: "email", label: "Email", type: "email", required: true },
  { name: "phone", label: "WhatsApp number", type: "tel", required: true, defaultCountry: "+234" },
  { name: "nmcn", label: "NMCN registration number", type: "text", required: true },
  { name: "areas", label: "Cities and areas you can cover", type: "text", required: true },
  { name: "license", label: "Nursing license (PDF or image)", type: "file", required: true },
  { name: "years", label: "Years of experience", type: "select", required: true, options: ["Less than 1", "1 to 2", "3 to 5", "6 to 10", "More than 10"] },
  { name: "experience", label: "Areas of experience", type: "multi", required: true, options: ["Geriatrics", "Home care", "Chronic disease", "Ward nursing", "ICU", "Community health", "Other"] },
  { name: "days", label: "Days available", type: "multi", required: true, options: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"] },
  { name: "hours", label: "Full time or part time", type: "radio", required: true, options: ["Full time", "Part time", "Either"] },
  { name: "cv", label: "CV", type: "file", required: true },
  { name: "ref1", label: "Reference 1 (name and phone)", type: "text", required: true },
  { name: "ref2", label: "Reference 2 (name and phone)", type: "text", required: true },
  { name: "source", label: "How did you hear about us?", type: "select", options: TEAM_SOURCES },
  { name: "consent", label: "Consent", type: "consent", required: true, placeholder: "I consent to MyCareEnvoy verifying my credentials with the NMCN and contacting my references." },
];

function Page() {
  return (
    <JoinPage
      eyebrow="Work with us: Registered Nurses"
      title="Nursing that's personal again."
      intro="Care for a small, consistent group of older adults in their own homes. Get to know them, see the difference you make, with doctor support behind you and fair, reliable pay."
      image={IMG.hero.src}
      imageAlt={IMG.hero.alt}
      table="nurse_applicants"
      fields={fields}
      licenseField="nmcn"
      yearsField="years"
      why={[
        { t: "Meaningful one-on-one care", b: "Real relationships with the same patients, not a rushed ward round." },
        { t: "Flexible schedules near you", b: "Visits planned around where you live and when you're free." },
        { t: "Doctor support and clear protocols", b: "You're never on your own. A doctor is a call away." },
        { t: "Fair, on-time pay", b: "Clear rates, paid on time, every time." },
      ]}
      sections={
        <>
          <BulletCard title="What the role involves" items={["Scheduled home visits to older adults", "Taking and recording vitals", "Medication review and refill checks", "Home safety and wellbeing checks", "Writing clear visit reports in our app", "Escalating concerns to the overseeing doctor"]} />
          <BulletCard title="Who we're looking for" items={["Registered nurse with a current NMCN license", "Experience with older adults or chronic disease preferred", "Based in Nigeria", "Compassionate, patient and reliable", "Comfortable using a smartphone for reports"]} />
        </>
      }
      poolNote="Applying adds you to our talent pool. Every applicant goes through verification and an interview before joining the team."
    />
  );
}
