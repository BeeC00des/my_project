import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Check, Copy, Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/primitives";
import { PLANS, SITE } from "@/config/site";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/share")({
  head: () => seo("Share MyCareEnvoy with your siblings", "A simple summary of MyCareEnvoy to send your brothers and sisters on WhatsApp or email, so you can decide on care for your parent together."),
  component: Page,
});

const message = `I found MyCareEnvoy for Mummy/Daddy in Nigeria. A verified registered nurse visits at home, a doctor oversees the care plan, and we all get a report after every visit. We can split the cost. Have a look: ${SITE.url}`;

function Page() {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    await navigator.clipboard.writeText(SITE.url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <>
      <PageHero eyebrow="For families" title="Deciding with your siblings?" intro="Here's a short summary you can send in one tap." />
      <section className="py-20">
        <div className="container-page max-w-2xl">
          <div className="rounded-3xl bg-card p-8 shadow-lift">
            <p className="font-serif text-3xl text-primary">MyCareEnvoy, in a nutshell</p>
            <p className="mt-4 text-lg">A care service for our parents in Nigeria while we're abroad.</p>
            <ul className="mt-5 space-y-2">
              {["A dedicated, verified registered nurse visits them at home", "A doctor assesses them first and oversees their care plan", "After every visit, we all get a clear report: vitals, medications, concerns", "A caregiver can go with them to hospital appointments"].map((t) => (
                <li key={t} className="flex gap-3"><Check className="mt-1 size-5 shrink-0 text-primary" aria-hidden /> {t}</li>
              ))}
            </ul>
            <p className="mt-6 font-semibold">Plans: {PLANS.map((p) => `${p.name} ${p.price}${p.period}`).join(" • ")}</p>
            <p className="mt-2 text-primary">{SITE.url}</p>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            <Button asChild variant="whatsapp" size="lg"><a href={`https://wa.me/?text=${encodeURIComponent(message)}`} target="_blank" rel="noopener noreferrer"><MessageCircle aria-hidden /> Share on WhatsApp</a></Button>
            <Button variant="outline" size="lg" onClick={copy}>{copied ? <><Check aria-hidden /> Copied</> : <><Copy aria-hidden /> Copy link</>}</Button>
            <Button asChild variant="outline" size="lg"><a href={`mailto:?subject=${encodeURIComponent("Care for Mummy and Daddy in Nigeria")}&body=${encodeURIComponent(message)}`}><Mail aria-hidden /> Share by email</a></Button>
          </div>
          <div className="mt-10 rounded-3xl bg-primary-soft p-6">
            <h2 className="text-xl text-primary">Splitting the cost</h2>
            <p className="mt-2 text-muted-foreground">Many families share the monthly plan between two, three or more siblings. We can set it up so each person pays their part directly, and everyone receives the same visit reports.</p>
          </div>
        </div>
      </section>
    </>
  );
}
