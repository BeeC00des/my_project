import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Activity, ArrowRight, Check, ClipboardList, HeartHandshake, Hospital, PillBottle, ShieldCheck, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SectionHeading, WhatsAppButton } from "@/components/site/primitives";
import { BASELINE, initialNurseService, NURSE_SERVICES } from "@/config/site";

const icons = [Activity, PillBottle, Stethoscope, ShieldCheck, Hospital, HeartHandshake, ClipboardList];

export function NurseServices() {
  const [expanded, setExpanded] = useState("");
  useEffect(() => {
    setExpanded(initialNurseService(window.matchMedia("(min-width: 768px)").matches));
  }, []);

  return <section id="nurse-services" className="mt-12 scroll-mt-28 border-t pt-12">
    <SectionHeading title="What our nurses do for your parent" intro="Every MyCareEnvoy nurse is licensed, vetted and supervised by a doctor. Here's exactly what they do, so you always know what you're paying for." />
    <Accordion type="single" collapsible value={expanded} onValueChange={setExpanded} className="mt-8">
      {NURSE_SERVICES.map((group, index) => {
        const Icon = icons[index] ?? Activity;
        return <AccordionItem key={group.id} value={group.id}>
          <AccordionTrigger className="min-h-16 gap-4 py-5 text-base text-primary sm:text-lg">
            <span className="flex items-center gap-4"><Icon className="size-6 shrink-0 text-terracotta" aria-hidden /><span>{group.title}</span></span>
          </AccordionTrigger>
          <AccordionContent className="text-base sm:pl-10">
            <ul className="space-y-3 pb-2">{group.items.map((item) => <li key={item} className="flex gap-3"><Check className="mt-1 size-4 shrink-0 text-primary" aria-hidden /><span>{item}</span></li>)}</ul>
          </AccordionContent>
        </AccordionItem>;
      })}
    </Accordion>
    <div className="mt-8 rounded-lg bg-primary-soft p-6">
      <h3 className="text-2xl text-primary">Who does what</h3>
      <dl className="mt-5 grid gap-6 md:grid-cols-3">
        {[ ["Caregivers", "companionship and escorts to appointments"], ["Nurses", "health checks, medications and clinical care"], ["Doctors", "assessments, diagnosis and prescriptions"] ].map(([role, scope]) => <div key={role}><dt className="font-semibold text-primary">{role}</dt><dd className="mt-1">{scope}</dd></div>)}
      </dl>
    </div>
    <p className="mt-5 text-sm text-muted-foreground">Some clinical care, lab tests and medication may be charged separately depending on your plan. We always tell you the cost and get your approval first.</p>
    <p className="mt-4"><strong>What our nurses don't do:</strong> diagnose or prescribe (that's our doctor's role), or provide bathing, cooking, cleaning or overnight care.</p>
    <div className="mt-8 flex flex-wrap items-center justify-between gap-5 border-t pt-6">
      <h3 className="text-2xl text-primary">Ready to get started?</h3>
      <div className="flex flex-wrap gap-3"><Button asChild variant="cta"><Link to="/get-started">Book the baseline (${BASELINE.amount}) <ArrowRight aria-hidden /></Link></Button><WhatsAppButton label="Chat on WhatsApp" /></div>
    </div>
  </section>;
}