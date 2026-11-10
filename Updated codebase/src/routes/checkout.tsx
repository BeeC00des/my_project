import { useEffect, useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { z } from "zod";
import { ArrowLeft, Lock, Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PageHero } from "@/components/site/primitives";
import { BASELINE, PAYABLE_ADDONS, PAYABLE_SERVICES, whatsappLink } from "@/config/site";
import { markEngaged } from "@/lib/visitor-engagement";
import { seo } from "@/lib/seo";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/checkout")({
  validateSearch: z.object({ service: z.string().optional(), baseline: z.enum(["clinic", "home", "video", "virtual"]).transform((value) => value === "virtual" ? "video" as const : value).optional(), escort: z.boolean().optional() }),
  head: () => seo("Book and pay for a service | MyCareEnvoy", "Choose a MyCareEnvoy service, add extra visits or support, review your total and continue to payment."),
  component: Page,
});

function Page() {
  const { service: initial, baseline, escort: initialEscort } = Route.useSearch();
  const [serviceId, setServiceId] = useState(PAYABLE_SERVICES.find((s) => s.id === initial)?.id ?? "baseline");
  const service = PAYABLE_SERVICES.find((s) => s.id === serviceId);
  const [optionId, setOptionId] = useState(initial === "baseline" && baseline ? baseline : service?.options[0]?.id ?? "clinic");
  const option = service?.options.find((o) => o.id === optionId) ?? service?.options[0];
  const [escort, setEscort] = useState(initialEscort === true && baseline !== "home");
  const [qty, setQty] = useState<Record<string, number>>({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  useEffect(() => { markEngaged(); }, []);

  const lines = useMemo(() => [
    ...(service && option ? [{ label: `${service.name}${service.options.length > 1 ? `, ${option.label}` : ""}`, amount: option.amount, q: 1 }] : []),
    ...(serviceId === "baseline" && option?.id === "clinic" && escort ? [{ label: "Caregiver escort", amount: BASELINE.escortAmount, q: 1 }] : []),
    ...PAYABLE_ADDONS.filter((a) => qty[a.id]).map((a) => ({ label: a.label, amount: a.amount, q: qty[a.id] ?? 0 })),
  ], [service, option, qty, serviceId, escort]);
  const total = lines.reduce((t, l) => t + l.amount * l.q, 0);
  const change = (id: string, d: number) => setQty((q) => ({ ...q, [id]: Math.max(0, Math.min(10, (q[id] ?? 0) + d)) }));
  const pickService = (id: string) => { const first = PAYABLE_SERVICES.find((s) => s.id === id)?.options[0]; if (!first) return; setServiceId(id); setOptionId(first.id); setEscort(false); };
  if (!service || !option) return null;

  const summary = `Hi MyCareEnvoy, I'd like to pay for:\n${lines.map((l) => `- ${l.label} x${l.q}: $${l.amount * l.q}`).join("\n")}\nTotal: $${total}\nName: ${name}\nEmail: ${email}`;

  return <>
    <PageHero eyebrow="Book a service" title="Choose, add extras, pay." intro="Three simple steps. You see your total before you pay." />
    <section className="py-12 md:py-16"><div className="container-page grid gap-10 lg:grid-cols-[1.4fr_1fr]">
      <div className="space-y-10">
        <div>
          <h2 className="text-2xl text-primary"><span className="text-terracotta">1.</span> Choose a service</h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2" role="radiogroup">
            {PAYABLE_SERVICES.map((s) => <Button variant="outline" key={s.id} type="button" role="radio" aria-checked={s.id === serviceId} onClick={() => pickService(s.id)}
              className={cn("h-auto flex-col items-start whitespace-normal rounded-lg border bg-card p-4 text-left transition", s.id === serviceId ? "border-primary ring-2 ring-primary" : "hover:border-primary/50")}>
              <span className="block font-serif text-lg text-primary">{s.name}</span>
              <span className="mt-1 block text-sm text-muted-foreground">{s.summary}</span>
              <span className="mt-2 block font-semibold">From ${Math.min(...s.options.map((o) => o.amount))}</span>
            </Button>)}
          </div>
          {service.options.length > 1 && <div className="mt-4 flex flex-wrap gap-2">{service.options.map((o) => <Button key={o.id} type="button" variant={o.id === optionId ? "default" : "outline"} onClick={() => { setOptionId(o.id); if (o.id !== "clinic") setEscort(false); }}>{o.label} · ${o.amount}</Button>)}</div>}
          {serviceId === "baseline" && <><p className="mt-4 text-sm text-muted-foreground">{BASELINE.options.find((o) => o.id === option.id)?.description}</p>{option.id === "clinic" && <label className="mt-4 flex items-center gap-3"><input type="checkbox" checked={escort} onChange={(e) => setEscort(e.target.checked)} className="size-5 accent-primary" />Add a caregiver escort (+${BASELINE.escortAmount})</label>}<p className="mt-3 text-sm text-muted-foreground">{BASELINE.exclusions}</p></>}
        </div>
        <div>
          <h2 className="text-2xl text-primary"><span className="text-terracotta">2.</span> Add extras <span className="font-sans text-base text-muted-foreground">(optional)</span></h2>
          <ul className="mt-5 divide-y rounded-lg border bg-card">
            {PAYABLE_ADDONS.map((a) => <li key={a.id} className="flex items-center justify-between gap-4 p-4">
              <div><p className="font-medium">{a.label}</p><p className="text-sm text-muted-foreground">${a.amount} each</p></div>
              <div className="flex items-center gap-2">
                <Button type="button" size="icon" variant="outline" aria-label={`Remove ${a.label}`} onClick={() => change(a.id, -1)} disabled={!qty[a.id]}><Minus /></Button>
                <span className="w-6 text-center font-semibold" aria-live="polite">{qty[a.id] ?? 0}</span>
                <Button type="button" size="icon" variant="outline" aria-label={`Add ${a.label}`} onClick={() => change(a.id, 1)}><Plus /></Button>
              </div>
            </li>)}
          </ul>
          <p className="mt-3 text-sm text-muted-foreground">Transport, supplies and lab tests are billed at cost, with receipts.</p>
        </div>
      </div>
      <aside className="h-fit rounded-lg border bg-cream p-6 lg:sticky lg:top-28">
        <h2 className="text-2xl text-primary"><span className="text-terracotta">3.</span> Review and pay</h2>
        <ul className="mt-5 space-y-2">{lines.map((l) => <li key={l.label} className="flex justify-between gap-4"><span>{l.label}{l.q > 1 && ` × ${l.q}`}</span><span className="font-semibold">${l.amount * l.q}</span></li>)}</ul>
        <p className="mt-4 flex justify-between border-t pt-4 font-serif text-2xl"><span>Total</span><span>${total} USD</span></p>
        <form className="mt-6 space-y-4" onSubmit={(e) => { e.preventDefault(); window.open(whatsappLink(summary), "_blank", "noopener"); setSent(true); }}>
          <div><Label htmlFor="co-name">Your name</Label><Input id="co-name" required value={name} onChange={(e) => setName(e.target.value)} /></div>
          <div><Label htmlFor="co-email">Email for your receipt</Label><Input id="co-email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} /></div>
          <Button type="submit" variant="cta" className="w-full"><Lock aria-hidden /> Continue to payment</Button>
          <p className="text-sm text-muted-foreground">{sent ? "Complete your message in WhatsApp to request a payment link. No payment has been taken." : "Online payment isn't connected yet. Request a secure payment link on WhatsApp."}</p>
        </form>
        <Link to="/plans" className="mt-5 inline-flex items-center gap-1 text-sm text-primary underline"><ArrowLeft className="size-4" aria-hidden /> Back to plans</Link>
      </aside>
    </div></section>
  </>;
}
