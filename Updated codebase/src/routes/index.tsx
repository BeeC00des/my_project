import { createFileRoute, Link } from "@tanstack/react-router";
import {
  BadgeCheck,
  Building2,
  ClipboardList,
  HeartHandshake,
  MessageSquareText,
  Stethoscope,
  UserRound,
  Users,
  BellRing,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaBand, Reveal, SectionHeading, WhatsAppButton } from "@/components/site/primitives";
import { FaqList, PlanCards, VisitReport } from "@/components/site/blocks";
import { TestimonialsSection } from "@/components/site/Testimonials";
import { FAQ_PREVIEW } from "@/content/faq";
import { IMG } from "@/config/images";
import { seo } from "@/lib/seo";
import founder from "@/assets/founder.jpg.asset.json";
import { CareRequestPreview } from "@/components/site/CareRequestPreview";
import { BASELINE } from "@/config/site";

export const Route = createFileRoute("/")({
  head: () =>
    seo(
      "MyCareEnvoy | Nurse care for your elderly parent in Nigeria",
      "Verified registered nurses visit your parent at home in Nigeria, with doctor oversight and a clear report after every visit. Elderly care for Nigerian families abroad.",
    ),
  component: Home,
});

export const STEPS = [
  {
    icon: MessageSquareText,
    title: "Tell us about your parent",
    body: "Start with a free 20 to 30 minute enrollment call.",
  },
  {
    icon: Stethoscope,
    title: "A doctor assesses their needs",
    body: `Baseline: $${BASELINE.videoAmount} by video call or $${BASELINE.amount} at a clinic or at home. Waived with an annual plan.`,
  },
  {
    icon: UserRound,
    title: "Meet their nurse",
    body: "A dedicated registered nurse visits your parent and follows their care plan.",
  },
  {
    icon: ClipboardList,
    title: "Stay in the loop",
    body: "A clear report after every visit: readings, medications and next steps.",
  },
];

export const TRUST = [
  {
    icon: BadgeCheck,
    title: "Verified nurses",
    body: "Every nurse is a registered nurse whose license we verify with the Nursing and Midwifery Council of Nigeria.",
  },
  {
    icon: Stethoscope,
    title: "Verified doctors",
    body: "Every doctor is verified with the Medical and Dental Council of Nigeria.",
  },
  {
    icon: ClipboardList,
    title: "Doctor oversight",
    body: "A doctor oversees every care plan, on every plan.",
  },
  {
    icon: HeartHandshake,
    title: "Built by a Nigerian doctor",
    body: "Started by a physician who trained and practiced in Nigeria and lives in the diaspora himself.",
  },
  {
    icon: Building2,
    title: "Registered in Nigeria",
    body: "A product and service of PadiHealth Ltd, a company registered in Nigeria and accountable locally.",
  },
  {
    icon: Users,
    title: "Families stay month after month",
    body: "Families who start with MyCareEnvoy stay with us, because the care and the updates keep proving themselves.",
  },
];

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-cream">
        <div className="adire-bg pointer-events-none absolute inset-0 opacity-[0.05]" aria-hidden />
        <div className="container-page relative grid items-center gap-10 py-12 md:grid-cols-[1.05fr_1fr] md:py-20">
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            <p className="eyebrow mb-4">Care for parents in Nigeria, for families abroad</p>
            <h1 className="text-[2.6rem] leading-[1.08] text-primary md:text-6xl">
              Someone you trust, checking on Mum and Dad back home.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground md:text-xl">
              A trusted nurse visits your parent at home. A doctor reviews every reading. You and
              your siblings get clear updates, wherever you live.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="cta" size="lg">
                <Link to="/get-started">
                  Request a free call <ArrowRight aria-hidden />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/care-on-request">
                  Care on request <ArrowRight aria-hidden />
                </Link>
              </Button>
            </div>
            <p className="mt-6 text-sm font-medium text-primary">
              Verified nurses • Doctor oversight • Reports after every visit
            </p>
          </div>
          <div className="relative animate-in fade-in zoom-in-95 duration-1000">
            <div
              className="absolute -inset-3 -z-0 rotate-2 rounded-[2.5rem] bg-terracotta/15"
              aria-hidden
            />
            <img
              src={IMG.hero.src}
              alt={IMG.hero.alt}
              width={1536}
              height={1152}
              fetchPriority="high"
              className="relative aspect-[4/3.4] w-full rounded-[2rem] object-cover shadow-lift"
            />
            <div className="absolute -bottom-5 left-4 flex items-center gap-3 rounded-2xl bg-card px-4 py-3 shadow-lift">
              <BellRing className="size-5 text-terracotta" aria-hidden />
              <div className="text-sm">
                <p className="font-semibold">Visit report ready</p>
                <p className="text-muted-foreground">BP 138/84 • Meds on track</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-primary-soft py-20 md:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="How it works"
            title="Four simple steps to peace of mind."
            center
          />
          <ol className="mt-14 grid gap-6 md:grid-cols-4">
            {STEPS.map((s, i) => (
              <Reveal key={s.title} delay={i * 100}>
                <li className="relative h-full rounded-3xl bg-card p-6 shadow-soft">
                  <span className="font-serif text-5xl text-gold">{i + 1}</span>
                  <s.icon className="absolute right-6 top-7 size-6 text-primary" aria-hidden />
                  <h3 className="mt-3 text-xl text-primary">{s.title}</h3>
                  <p className="mt-2 text-muted-foreground">{s.body}</p>
                </li>
              </Reveal>
            ))}
          </ol>
          <div className="mt-10 text-center">
            <p className="mt-5 text-muted-foreground">
              Your first 30 days: a free call, an assessment, a care plan and your first nurse
              visit.{" "}
              <Link to="/how-it-works" className="font-semibold text-terracotta hover:underline">
                See the full timeline
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Report */}
      <section className="py-20 md:py-28">
        <div className="container-page grid items-center gap-14 md:grid-cols-2">
          <Reveal>
            <SectionHeading
              eyebrow="After every visit"
              title="This is what peace of mind looks like."
              intro="Every visit. Every detail. Shared with you and your siblings."
            />
            <ul className="mt-8 space-y-4">
              {[
                "Vitals measured and recorded at home",
                "Medications checked, refills flagged early",
                "Honest notes from the nurse, in plain words",
                "Every reading reviewed by a doctor",
              ].map((t) => (
                <li key={t} className="flex gap-3">
                  <BadgeCheck className="mt-1 size-5 shrink-0 text-terracotta" aria-hidden />
                  {t}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-muted-foreground">
              The report beside this is a sample of what you receive after every visit.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <VisitReport />
          </Reveal>
        </div>
      </section>

      {/* Urgent findings promise */}
      <section className="bg-primary-soft py-20 md:py-28">
        <div className="container-page grid items-start gap-12 md:grid-cols-2">
          <Reveal>
            <SectionHeading
              eyebrow="When something's not right"
              title="If the nurse finds something urgent, you hear the same day."
            />
            <p className="mt-5 text-lg text-muted-foreground">
              Our doctor is informed straight away. You and your siblings hear from us the same day,
              with clear next steps.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <ol className="space-y-4">
              {[
                [
                  "During the visit",
                  "The nurse notices something concerning: a reading, a symptom or a safety risk.",
                ],
                [
                  "Straight away",
                  "She follows our escalation steps and our doctor is informed immediately.",
                ],
                [
                  "The same day",
                  "We call or message you and any siblings on the plan, with what we found and what we recommend.",
                ],
                [
                  "If it's an emergency",
                  "The nurse acts first, we arrange the nearest appropriate care, and you stay informed throughout.",
                ],
              ].map(([t, b], i) => (
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
          </Reveal>
        </div>
      </section>

      {/* Plans */}
      <section className="bg-cream py-20 md:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="Monthly care"
            title="Regular visits. Ongoing support."
            intro="A dedicated nurse, doctor oversight and family updates on a monthly plan."
            center
          />
          <div className="mt-14">
            <PlanCards compact />
          </div>
          <p className="mt-8 text-center font-medium text-primary">
            Pay yearly for 2 months free and a waived baseline assessment. Siblings can split any
            plan.
          </p>
          <div className="mt-5 text-center">
            <Button asChild variant="outline">
              <Link to="/plans">
                Compare plans and services <ArrowRight aria-hidden />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Trust */}
      <CareRequestPreview />
      <section className="py-20 md:py-28">
        <div className="container-page">
          <SectionHeading eyebrow="Why families trust us" title="Care you can verify." />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {TRUST.map((t, i) => (
              <Reveal key={t.title} delay={i * 70}>
                <div className="h-full rounded-3xl bg-card p-6 shadow-soft">
                  <t.icon className="size-7 text-primary" aria-hidden />
                  <h3 className="mt-4 text-lg">{t.title}</h3>
                  <p className="mt-2 text-[15px] text-muted-foreground">{t.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Owner-approved customer testimonials */}
      <TestimonialsSection />

      {/* Founder */}
      <section className="py-20 md:py-28">
        <div className="container-page grid items-center gap-12 md:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <img
              src={founder.url}
              alt="Dr. Olabode (Bode) Ekerin, founder of MyCareEnvoy"
              loading="lazy"
              className="aspect-[4/5] w-full rounded-3xl object-cover object-top shadow-lift"
            />
          </Reveal>
          <Reveal delay={100}>
            <p className="eyebrow mb-3">A note from Dr. Bode</p>
            <h2 className="text-3xl text-primary md:text-[2.6rem]">Why I started MyCareEnvoy</h2>
            <p className="mt-6 font-serif text-xl leading-relaxed">
              "I know the worry of being far from your parents. I built MyCareEnvoy to give families
              what I wanted for mine: qualified care that shows up, and honest updates you can
              trust."
            </p>
            <p className="mt-6 font-semibold">Dr. Olabode (Bode) Ekerin</p>
            <Link
              to="/about"
              className="mt-4 inline-flex items-center gap-2 font-semibold text-terracotta hover:underline"
            >
              Read our story <ArrowRight className="size-4" aria-hidden />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* For families */}
      <section className="pb-20 md:pb-28">
        <div className="container-page grid gap-6 md:grid-cols-2">
          {[
            {
              to: "/talk-to-your-parent",
              t: "How to talk to your parent about care",
              b: "Our parents are proud. Here's how to introduce MyCareEnvoy in a way that feels like respect, not surveillance.",
              cta: "Read the guide",
            },
            {
              to: "/share",
              t: "Deciding with your siblings?",
              b: "Send them a simple summary on WhatsApp in one tap.",
              cta: "Share with siblings",
            },
          ].map((c) => (
            <Reveal key={c.to}>
              <Link
                to={c.to}
                className="group block h-full rounded-3xl bg-accent p-8 transition hover:shadow-lift"
              >
                <h3 className="text-2xl text-primary">{c.t}</h3>
                <p className="mt-3 text-muted-foreground">{c.b}</p>
                <span className="mt-5 inline-flex items-center gap-2 font-semibold text-terracotta">
                  {c.cta}{" "}
                  <ArrowRight className="size-4 transition group-hover:translate-x-1" aria-hidden />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-cream py-20 md:py-28">
        <div className="container-page grid gap-10 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionHeading eyebrow="Questions" title="What families ask us first" />
            <Link
              to="/faq"
              className="mt-6 inline-flex items-center gap-2 font-semibold text-terracotta hover:underline"
            >
              See all questions <ArrowRight className="size-4" aria-hidden />
            </Link>
          </div>
          <FaqList items={FAQ_PREVIEW} />
        </div>
      </section>

      {/* Join strip */}
      <section className="bg-primary py-14 text-primary-foreground">
        <div className="container-page flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <p className="max-w-2xl font-serif text-2xl">
            Are you a nurse, doctor or caregiver in Nigeria? Join a team that treats older adults
            with the dignity they deserve.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button asChild variant="light">
              <Link to="/join/nurses">Nurses</Link>
            </Button>
            <Button asChild variant="light">
              <Link to="/join/doctors">Doctors</Link>
            </Button>
            <Button asChild variant="light">
              <Link to="/join/caregivers">Caregivers</Link>
            </Button>
          </div>
        </div>
      </section>

      <CtaBand image={IMG.couple.src} />
    </>
  );
}
