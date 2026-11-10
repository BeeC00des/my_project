import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SectionHeading } from "@/components/site/primitives";
import { SimpleForm, Success, check, plainDetails, type Field } from "@/components/forms/FormKit";
import { supabase } from "@/integrations/supabase/client";
import { IMG } from "@/config/images";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/employers")({
  head: () =>
    seo(
      "MyCareEnvoy for employers: elder care benefit for Nigerian staff",
      "Offer MyCareEnvoy as an employee benefit for staff with parents in Nigeria. Less distraction, better retention, a benefit that stands out.",
    ),
  component: Page,
});

const fields: Field[] = [
  { name: "company", label: "Company name", type: "text", required: true },
  {
    name: "company_size",
    label: "Company size",
    type: "select",
    required: true,
    options: ["1 to 50", "51 to 200", "201 to 1,000", "1,001 to 5,000", "5,000+"],
  },
  { name: "full_name", label: "Your name", type: "text", required: true },
  { name: "role", label: "Your role", type: "text", required: true },
  { name: "email", label: "Work email", type: "email", required: true },
  { name: "phone", label: "Phone", type: "tel", required: true, defaultCountry: "+1" },
  {
    name: "headcount",
    label: "Approximate number of employees with family in Nigeria",
    type: "text",
  },
  { name: "message", label: "Message", type: "textarea" },
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="For employers"
        title="Your people are worried about their parents back home. Help them."
        intro="Offer MyCareEnvoy as a benefit for staff with parents in Nigeria. It's the kind of support people remember."
        image={IMG.problem.src}
        imageAlt={IMG.problem.alt}
      />
      <section className="py-20">
        <div className="container-page grid gap-5 md:grid-cols-3">
          {[
            [
              "Less distraction",
              "Fewer emergency calls, fewer last-minute flights, more focus at work.",
            ],
            ["Better retention", "Support that speaks to what your people care about most."],
            [
              "A benefit that stands out",
              "Few employers offer anything like it. Your team will notice.",
            ],
          ].map(([t, b]) => (
            <div key={t} className="rounded-3xl bg-card p-7 shadow-soft">
              <h3 className="text-xl text-primary">{t}</h3>
              <p className="mt-2 text-muted-foreground">{b}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-primary-soft py-20">
        <div className="container-page">
          <SectionHeading title="How it works for employers" />
          <ol className="mt-8 grid gap-5 md:grid-cols-4">
            {[
              "We agree a plan level and budget with you",
              "Eligible employees enrol their parents privately",
              "We care for their parents and report to the family",
              "You get simple, anonymised usage reports",
            ].map((s, i) => (
              <li key={s} className="rounded-3xl bg-card p-6 shadow-soft">
                <span className="font-serif text-4xl text-gold">{i + 1}</span>
                <p className="mt-2">{s}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className="py-20">
        <div className="container-page max-w-3xl">
          <SectionHeading title="Let's talk" />
          <div className="mt-8">
            <SimpleForm
              fields={fields}
              submitLabel="Send enquiry"
              onSubmit={async (v) => {
                const { error } = await supabase.from("employer_inquiries").insert({
                  company: String(v["company"]),
                  company_size: String(v["company_size"]),
                  full_name: String(v["full_name"]),
                  email: String(v["email"]),
                  phone: String(v["phone"]),
                  details: plainDetails(fields, v),
                });
                check(error);
              }}
              success={
                <Success title="Thank you.">
                  We'll be in touch within two working days to talk about your team.
                </Success>
              }
            />
          </div>
        </div>
      </section>
    </>
  );
}
