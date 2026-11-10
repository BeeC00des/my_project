import { createFileRoute } from "@tanstack/react-router";
import { AlertTriangle, Check } from "lucide-react";
import { CtaBand, PageHero, Reveal, SectionHeading } from "@/components/site/primitives";
import { BaselineAssessment } from "@/components/site/BaselineAssessment";
import { BASELINE } from "@/config/site";
import { IMG } from "@/config/images";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/how-it-works")({
  head: () =>
    seo(
      "How MyCareEnvoy works: home nurse visits in Nigeria",
      "From your first call to regular nurse home visits and doctor-reviewed reports. See how MyCareEnvoy cares for your elderly parent in Nigeria.",
    ),
  component: Page,
});

const steps = [
  {
    img: IMG.problem,
    t: "Tell us about your parent",
    b: "Start with a free 20 to 30 minute enrollment call. We learn about your parent's health and routine, then recommend a plan.",
  },
  { img: IMG.doctor, t: BASELINE.title, b: BASELINE.description },
  {
    img: IMG.arrival,
    t: "Meet their nurse",
    b: "We match your parent with a dedicated registered nurse who lives nearby and speaks their language. Where needed, a trusted caregiver can accompany them to hospital appointments and errands.",
  },
  {
    img: IMG.couple,
    t: "Stay in the loop",
    b: "After every visit, you get a clear report by app, email or web. Vitals, medications, concerns, and next steps. Your siblings see the same report, so everyone is on the same page.",
  },
];

const timeline = [
  ["Day 1", "Intake call with you, by phone or WhatsApp."],
  [
    "Within the first week",
    "Baseline assessment at a partner clinic, at home or by video call, and a care plan agreed with you.",
  ],
  [
    "Week 1 to 2",
    "Nurse introduction visit. Friendly, unhurried, a chance for your parent to get comfortable.",
  ],
  ["After the first full visit", "Your first full visit report arrives."],
  ["Day 30", "A check-in call with you to review how things are going and adjust the plan."],
];

const emergency = [
  ["The nurse assesses", "Vitals, symptoms and safety, right there and then."],
  ["A doctor is consulted", "The nurse speaks with the overseeing doctor immediately."],
  ["You're informed immediately", "We call or message you and any siblings on the care plan."],
  ["Transfer if needed", "We arrange transfer to a partner hospital and stay with the situation."],
];

const visit = [
  "Vital signs: blood pressure, pulse, blood sugar, weight, temperature",
  "Medication review and refill check",
  "Symptom check and any new concerns",
  "Home safety check: lighting, floors, bathroom, stairs",
  "Wellbeing and a proper conversation",
  "Coordination with pharmacies and clinics",
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="How it works"
        title="Care that's planned, regular, and reported."
        intro="Here's exactly what happens from the moment you reach out, so there are no surprises for you or your parent."
      />
      <section className="py-20">
        <div className="container-page space-y-16 md:space-y-24">
          {steps.map((s, i) => (
            <Reveal key={s.t}>
              <div className="grid items-center gap-10 md:grid-cols-2">
                <img
                  src={s.img.src}
                  alt={s.img.alt}
                  loading="lazy"
                  width={1200}
                  height={912}
                  className={`aspect-[4/3] w-full rounded-3xl object-cover shadow-soft ${i % 2 ? "md:order-2" : ""}`}
                />
                <div>
                  <span className="font-serif text-6xl text-gold">{i + 1}</span>
                  <h2 className="mt-2 text-3xl text-primary">{s.t}</h2>
                  <p className="mt-4 text-lg text-muted-foreground">{s.b}</p>
                </div>
              </div>
              {i === 1 && <BaselineAssessment />}
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-primary-soft py-20">
        <div className="container-page">
          <SectionHeading eyebrow="Timeline" title="Your first 30 days" />
          <ol className="mt-10 border-l-2 border-primary/30 pl-6 md:pl-10">
            {timeline.map(([when, what]) => (
              <li key={when} className="relative pb-8 last:pb-0">
                <span
                  className="absolute -left-[33px] top-1.5 size-4 rounded-full border-4 border-primary-soft bg-terracotta md:-left-[49px]"
                  aria-hidden
                />
                <p className="font-semibold text-terracotta">{when}</p>
                <p className="mt-1 text-lg">{what}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-20">
        <div className="container-page grid gap-12 md:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Emergencies" title="What happens in an emergency" />
            <ol className="mt-8 space-y-4">
              {emergency.map(([t, b], i) => (
                <li key={t} className="flex gap-4 rounded-2xl bg-card p-5 shadow-soft">
                  <span className="grid size-9 shrink-0 place-items-center rounded-full bg-primary font-semibold text-primary-foreground">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-semibold">{t}</p>
                    <p className="text-muted-foreground">{b}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="mt-6 flex gap-3 rounded-2xl bg-gold-soft p-5">
              <AlertTriangle className="mt-1 size-5 shrink-0 text-terracotta" aria-hidden />
              <span>
                MyCareEnvoy is not an ambulance service. Please keep local emergency contacts and a
                nearby relative or neighbour on hand for urgent situations.
              </span>
            </p>
          </div>
          <div>
            <SectionHeading eyebrow="Every visit" title="What a nurse visit includes" />
            <ul className="mt-8 space-y-3 rounded-3xl bg-card p-7 shadow-soft">
              {visit.map((v) => (
                <li key={v} className="flex gap-3">
                  <Check className="mt-1 size-5 shrink-0 text-primary" aria-hidden /> {v}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <CtaBand image={IMG.meal.src} title="Ready to know how they're really doing?" />
    </>
  );
}
