import { Link } from "@tanstack/react-router";
import { Check, Minus, Activity, Pill, HeartPulse, Scale, Droplet } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PLANS, PLAN_COMPARISON } from "@/config/site";
import type { Faq } from "@/content/faq";
import { cn } from "@/lib/utils";
import { Reveal } from "./primitives";

export function PlanCards({ compact = false }: { compact?: boolean }) {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {PLANS.map((p, i) => (
        <Reveal key={p.id} delay={i * 90}>
          <div
            className={cn(
              "relative flex h-full flex-col rounded-3xl bg-card p-7 shadow-soft",
              p.popular && "ring-2 ring-gold shadow-lift",
            )}
          >
            {p.popular && (
              <span className="absolute -top-3 left-7 rounded-full bg-gold px-3 py-1 text-xs font-bold uppercase tracking-wide text-foreground">
                Most families choose this
              </span>
            )}
            <h3 className="text-2xl text-primary">{p.name}</h3>
            <p className="mt-1 text-muted-foreground">{p.tagline}</p>
            <p className="mt-5">
              <span className="font-serif text-4xl">{p.price}</span>
              <span className="text-muted-foreground">{p.period}</span>
            </p>
            <ul className="mt-6 flex-1 space-y-3">
              {(compact ? p.features.slice(0, 4) : p.features).map((f) => (
                <li key={f} className="flex gap-3">
                  <Check className="mt-1 size-5 shrink-0 text-primary" aria-hidden />{" "}
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <Button asChild variant={p.popular ? "cta" : "default"} size="lg" className="mt-8">
              <Link to="/get-started" search={{ plan: p.id }}>
                Choose this plan
              </Link>
            </Button>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

export function PlanTable() {
  return (
    <div className="overflow-x-auto rounded-3xl bg-card shadow-soft">
      <table className="w-full min-w-[560px] text-left">
        <caption className="sr-only">Plan comparison</caption>
        <thead>
          <tr className="border-b">
            <th scope="col" className="p-4 font-medium text-muted-foreground">
              Feature
            </th>
            {PLANS.map((p) => (
              <th key={p.id} scope="col" className="p-4 font-serif text-lg text-primary">
                {p.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {PLAN_COMPARISON.map((row) => (
            <tr key={row.feature} className="border-b last:border-0">
              <th scope="row" className="p-4 font-normal">
                {row.feature}
              </th>
              {PLANS.map((p) => {
                const v = row.values[p.id];
                return (
                  <td key={p.id} className="p-4">
                    {v === true ? (
                      <Check className="size-5 text-primary" aria-label="Included" />
                    ) : v === false ? (
                      <Minus className="size-5 text-muted-foreground" aria-label="Not included" />
                    ) : (
                      <span className="text-sm font-medium">{v}</span>
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function FaqList({ items }: { items: Faq[] }) {
  return (
    <Accordion type="single" collapsible className="rounded-3xl bg-card px-6 shadow-soft">
      {items.map((f, i) => (
        <AccordionItem key={f.q} value={`f${i}`}>
          <AccordionTrigger className="py-5 text-left font-serif text-lg hover:no-underline">
            {f.q}
          </AccordionTrigger>
          <AccordionContent className="pb-5 text-base text-muted-foreground">
            {f.a}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

function Vital({
  icon: Icon,
  label,
  value,
  unit,
}: {
  icon: typeof Activity;
  label: string;
  value: string;
  unit?: string;
}) {
  return (
    <div className="rounded-2xl bg-cream p-3">
      <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
        <Icon className="size-3.5" aria-hidden /> {label}
      </div>
      <div className="mt-1 font-serif text-xl">
        {value} <span className="font-sans text-xs text-muted-foreground">{unit}</span>
      </div>
    </div>
  );
}

export function VisitReport() {
  return (
    <div
      className="mx-auto w-full max-w-[340px] rounded-[2.6rem] border-[10px] border-foreground bg-foreground shadow-lift"
      role="img"
      aria-label="Example MyCareEnvoy visit report shown on a phone"
    >
      <div className="overflow-hidden rounded-[2rem] bg-background">
        <div className="bg-primary px-5 pb-5 pt-6 text-primary-foreground">
          <p className="text-xs uppercase tracking-widest opacity-80">Visit report</p>
          <p className="mt-1 font-serif text-xl">Mrs. A. (78)</p>
          <p className="text-sm opacity-85">Lagos, Nigeria</p>
          <div className="mt-3 flex justify-between text-xs opacity-85">
            <span>Tue, 6 Oct 2026</span>
            <span>Nurse Funmi</span>
          </div>
        </div>
        <div className="space-y-4 p-4 text-sm">
          <div className="grid grid-cols-2 gap-2">
            <Vital icon={Activity} label="Blood pressure" value="138/84" unit="mmHg" />
            <Vital icon={HeartPulse} label="Pulse" value="76" unit="bpm" />
            <Vital icon={Droplet} label="Blood sugar" value="6.8" unit="mmol/L" />
            <Vital icon={Scale} label="Weight" value="64" unit="kg" />
          </div>
          <div className="rounded-2xl border p-3">
            <p className="flex items-center gap-1.5 font-semibold text-primary">
              <Pill className="size-4" aria-hidden /> Medications
            </p>
            <p className="mt-1 text-muted-foreground">
              All taken as prescribed. Amlodipine refill due in 5 days, pharmacy notified.
            </p>
          </div>
          <div className="rounded-2xl border p-3">
            <p className="font-semibold text-primary">Nurse's notes</p>
            <p className="mt-1 text-muted-foreground">
              In good spirits. Mild knee pain when climbing stairs, recommended review at next
              doctor check.
            </p>
          </div>
          <div className="flex items-center justify-between rounded-2xl bg-gold-soft p-3">
            <span className="font-medium">Next visit</span>
            <span className="font-serif">Tue, 20 Oct</span>
          </div>
        </div>
      </div>
    </div>
  );
}
