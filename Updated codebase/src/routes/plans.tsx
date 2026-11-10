import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, Phone, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CtaBand, PageHero, SectionHeading, WhatsAppButton } from "@/components/site/primitives";
import { FaqList, PlanTable } from "@/components/site/blocks";
import { FAQ_GROUPS } from "@/content/faq";
import { ADD_ONS, BASELINE, ONE_TIME_SERVICES, PLANS } from "@/config/site";
import { BaselineAssessment } from "@/components/site/BaselineAssessment";
import { NurseServices } from "@/components/site/NurseServices";
import { IMG } from "@/config/images";
import { seo } from "@/lib/seo";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/plans")({
  head: () =>
    seo(
      "Plans and pricing for parent care in Nigeria",
      `MyCareEnvoy plans from $35/month. Free enrollment call, $${BASELINE.videoAmount} video baseline or $${BASELINE.amount} clinic/home assessment, annual savings and flexible add-ons.`,
    ),
  component: Page,
});
function FeatureList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <Check className="mt-1 size-4 shrink-0 text-primary" aria-hidden />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
function Page() {
  const [annual, setAnnual] = useState(false);
  const billing = FAQ_GROUPS.find((g) => g.title === "Plans and billing")?.items ?? [];
  return (
    <>
      <PageHero
        eyebrow="Plans and services"
        title="Care that fits your parent."
        intro="Doctor oversight on every plan. Clear updates for the whole family."
      />
      <section className="border-b py-8">
        <div className="container-page grid gap-6 md:grid-cols-2">
          <div>
            <h2 className="text-xl text-primary">Monthly care</h2>
            <p className="mt-2 text-muted-foreground">
              Regular nurse visits and ongoing support, with doctor oversight and updates for your
              family.
            </p>
          </div>
          <div>
            <h2 className="text-xl text-primary">Care on request</h2>
            <p className="mt-2 text-muted-foreground">
              Individual services when you need them, quoted before booking. No monthly plan
              required.
            </p>
            <Link
              to="/care-on-request"
              className="mt-3 inline-flex items-center gap-2 font-semibold text-terracotta"
            >
              Explore care on request <ArrowRight className="size-4" aria-hidden />
            </Link>
          </div>
        </div>
      </section>
      <section className="py-14 md:py-20">
        <div className="container-page">
          <SectionHeading title="Getting started" />
          <div className="mt-8 border-y py-8">
            <div>
              <Phone className="size-6 text-terracotta" aria-hidden />
              <h3 className="mt-4 text-2xl text-primary">
                Enrollment call <span className="block font-sans text-lg">Free</span>
              </h3>
              <p className="mt-3 text-muted-foreground">
                A 20 to 30 minute call to understand your parent’s health, routine and needs, and
                recommend the right plan.
              </p>
              <div className="mt-5">
                <Button asChild variant="cta">
                  <Link to="/get-started">
                    Book your free call <ArrowRight aria-hidden />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
          <BaselineAssessment />
        </div>
      </section>
      <section className="bg-cream py-14 md:py-20">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading title="Monthly plans" />
            <div
              className="inline-flex gap-1 rounded-full border bg-card p-1"
              role="group"
              aria-label="Billing period"
            >
              <Button
                variant={annual ? "ghost" : "default"}
                aria-pressed={!annual}
                onClick={() => setAnnual(false)}
              >
                Monthly
              </Button>
              <Button
                variant={annual ? "default" : "ghost"}
                aria-pressed={annual}
                onClick={() => setAnnual(true)}
              >
                Yearly · 2 months free
              </Button>
            </div>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {PLANS.map((p) => (
              <article
                key={p.id}
                className={cn(
                  "relative flex flex-col rounded-lg border bg-card p-6",
                  p.popular && "border-gold ring-1 ring-gold",
                )}
              >
                {p.popular && (
                  <p className="absolute -top-4 left-5 rounded-full bg-gold px-3 py-1 text-sm font-semibold">
                    Most families choose this
                  </p>
                )}
                <h3 className="text-2xl text-primary">{p.name}</h3>
                <p className="mt-3 min-h-14 text-muted-foreground">{p.tagline}</p>
                <p className="my-6">
                  <span className="font-serif text-4xl">
                    {annual ? `$${p.annualPrice.toLocaleString()}` : p.price}
                  </span>
                  <span className="text-muted-foreground">/{annual ? "year" : "month"}</span>
                </p>
                {annual && (
                  <p className="mb-5 text-sm font-medium text-primary">
                    12 months of care. Baseline assessment included.
                  </p>
                )}
                <div className="flex-1">
                  <FeatureList items={p.features} />
                </div>
                <Button asChild variant={p.popular ? "cta" : "default"} className="mt-8">
                  <Link to="/get-started" search={{ plan: p.id }}>
                    Choose {p.name}
                  </Link>
                </Button>
              </article>
            ))}
          </div>
          <NurseServices />
          <div className="mt-8 flex items-start gap-3">
            <Users className="mt-1 size-5 shrink-0 text-terracotta" aria-hidden />
            <p>
              <strong>Ways to save:</strong> Pay yearly for 2 months free, plus the baseline
              assessment waived. Siblings can split any plan.
            </p>
          </div>
          <Accordion type="single" collapsible className="mt-8">
            <AccordionItem value="comparison">
              <AccordionTrigger className="font-serif text-xl">
                Compare all inclusions
              </AccordionTrigger>
              <AccordionContent>
                <PlanTable />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
      <section className="py-14 md:py-20">
        <div className="container-page">
          <SectionHeading title="One-time services" />
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {ONE_TIME_SERVICES.map((s) => (
              <article key={s.name} className="rounded-lg border bg-card p-6">
                <h3 className="text-2xl text-primary">{s.name}</h3>
                <p className="mt-3 font-semibold text-terracotta">{s.price}</p>
                <p className="my-4 text-muted-foreground">{s.intro}</p>
                <FeatureList items={s.features} />
                <Button asChild variant="cta" className="mt-6">
                  <Link to="/checkout" search={{ service: s.id }}>
                    Book and pay <ArrowRight aria-hidden />
                  </Link>
                </Button>
              </article>
            ))}
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            For a life-threatening emergency, contact local emergency services first. MyCareEnvoy is
            not an ambulance service.
          </p>
        </div>
      </section>
      <section className="bg-primary-soft py-14 md:py-20">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading
              title="Add-ons"
              intro="Available with any plan or service. Add them at checkout."
            />
            <Button asChild variant="outline">
              <Link to="/checkout">
                Add to a booking <ArrowRight aria-hidden />
              </Link>
            </Button>
          </div>
          <dl className="mt-8 divide-y">
            {ADD_ONS.map((s) => (
              <div key={s.name} className="grid gap-3 py-6 md:grid-cols-[1fr_1.5fr]">
                <div>
                  <dt className="font-serif text-xl text-primary">{s.name}</dt>
                  <dd className="mt-1 font-semibold">{s.price}</dd>
                </div>
                <dd className="text-muted-foreground">{s.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
      <section className="py-14 md:py-20">
        <div className="container-page flex flex-wrap items-center justify-between gap-6">
          <SectionHeading
            title="A custom plan"
            intro="Tell us what your parent needs. We’ll build a plan from these services and send a quote within 48 hours."
          />
          <WhatsAppButton
            label="Discuss a custom plan"
            message="Hi MyCareEnvoy, I'd like a custom care plan for my parent."
          />
        </div>
      </section>
      <section className="pb-16">
        <div className="container-page grid gap-8 md:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading title="Billing questions" />
          <FaqList items={billing} />
        </div>
      </section>
      <CtaBand image={IMG.couple.src} />
    </>
  );
}
