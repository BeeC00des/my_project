import { createFileRoute } from "@tanstack/react-router";
import { Gift } from "lucide-react";
import { PageHero } from "@/components/site/primitives";
import { SimpleForm, Success, check, plainDetails, type Field } from "@/components/forms/FormKit";
import { supabase } from "@/integrations/supabase/client";
import { SITE } from "@/config/site";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/refer")({
  head: () =>
    seo(
      "Refer a family to MyCareEnvoy",
      "Know a family with a parent in Nigeria who could use a trusted nurse? Refer them to MyCareEnvoy.",
    ),
  component: Page,
});

const fields: Field[] = [
  { name: "full_name", label: "Your name", type: "text", required: true },
  { name: "contact", label: "Your email or WhatsApp", type: "text", required: true },
  {
    name: "existing",
    label: "Are you a current MyCareEnvoy family or team member?",
    type: "radio",
    required: true,
    options: ["Yes", "No"],
  },
  { name: "friend_name", label: "Your friend's name", type: "text", required: true },
  {
    name: "friend_contact",
    label: "Your friend's WhatsApp or email",
    type: "text",
    required: true,
  },
  {
    name: "relationship",
    label: "How do you know them?",
    type: "text",
    placeholder: "Friend, colleague, church member...",
  },
  { name: "note", label: "A note for us", type: "textarea" },
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Refer a family"
        title="Know a family who needs us?"
        intro="Most families find us through someone they trust. If you know someone worrying about a parent in Nigeria, we'd be honoured to help."
      />
      <section className="py-16">
        <div className="container-page max-w-3xl">
          <div className="mb-8 flex gap-4 rounded-3xl bg-gold-soft p-6">
            <Gift className="size-8 shrink-0 text-terracotta" aria-hidden />
            <p className="text-lg">
              As a thank you, you'll receive <strong>{SITE.referralReward}</strong>.
            </p>
          </div>
          <SimpleForm
            fields={fields}
            submitLabel="Send referral"
            onSubmit={async (v) => {
              const { error } = await supabase.from("referrals").insert({
                full_name: String(v["full_name"]),
                contact: String(v["contact"]),
                friend_name: String(v["friend_name"]),
                friend_contact: String(v["friend_contact"]),
                details: plainDetails(fields, v),
              });
              check(error);
            }}
            success={
              <Success title="Thank you for thinking of them.">
                We'll reach out to your friend gently, and mention that you sent us. We'll let you
                know when they join.
              </Success>
            }
          />
        </div>
      </section>
    </>
  );
}
