import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { useSuspenseQuery } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { Activity, ArrowRight, BadgeCheck, Bell, HeartHandshake, Hospital, MessageSquareText, Pill, ShieldCheck, Stethoscope, TestTube2, Truck, Eye, Utensils, Brain, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { SimpleForm, Success, type Field } from "@/components/forms/FormKit";
import { SectionHeading } from "@/components/site/primitives";
import { CARE_CATEGORIES, CARE_URGENCIES } from "@/config/care-on-request";
import { IMG } from "@/config/images";
import { careServicesQuery } from "@/lib/care-queries";
import { submitCareRequest } from "@/lib/care.functions";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/care-on-request")({
  head: () => seo("Care on request in Nigeria", "Request vetted physiotherapy, home lab tests, medication delivery, specialist visits and hospital support for your parent in Nigeria. Costs confirmed before booking."),
  loader: ({ context }) => context.queryClient.ensureQueryData(careServicesQuery),
  component: CarePage,
});
const icons: Record<string, typeof Activity> = { physiotherapy: Activity, "post-hospital": HeartHandshake, "home-lab": TestTube2, medication: Pill, specialist: Stethoscope, sensory: Eye, dietitian: Utensils, caregivers: HeartHandshake, safety: ShieldCheck, equipment: Truck, hospital: Hospital, memory: Brain, palliative: Heart };
const emergency = "For emergencies, please call local emergency services or go to the nearest hospital. MyCareEnvoy is not an emergency service.";
function CarePage() {
  const { data: services } = useSuspenseQuery(careServicesQuery);
  const send = useServerFn(submitCareRequest);
  const [selected, setSelected] = useState("");
  const [notify, setNotify] = useState<(typeof services)[number] | null>(null);
  const [notifyDone, setNotifyDone] = useState(false);
  const [requestDone, setRequestDone] = useState(false);
  function request(id = "") { setSelected(id); document.getElementById("request-care")?.scrollIntoView({ behavior: "smooth", block: "start" }); }
  const fields: Field[] = [
    { name: "full_name", label: "Your full name", type: "text", required: true },
    { name: "email", label: "Your email", type: "email", required: true },
    { name: "phone", label: "Your WhatsApp number with country code", type: "tel", required: true },
    { name: "country", label: "Country you live in", type: "select", options: ["United States", "United Kingdom", "Canada", "Ireland", "Other"] },
    { name: "existing_family", label: "Are you an existing MyCareEnvoy family?", type: "radio", options: ["Yes", "No"] },
    { name: "parent_name", label: "Parent's first name", type: "text", required: true },
    { name: "parent_location", label: "Parent's city and state in Nigeria", type: "text", required: true },
    { name: "service_id", label: "Service needed", type: "select", required: true, options: services.map((s) => ({ value: s.id, label: s.status === "available" ? s.name : `${s.name} (Coming soon: notify me)` })), full: true },
    { name: "urgency", label: "How urgent is this?", type: "radio", options: [...CARE_URGENCIES] },
    { name: "message", label: "Tell us more", type: "textarea" },
    { name: "consent", label: "Parent consent", type: "consent", required: true, placeholder: "I confirm my parent is aware of and agrees to this request." },
  ];
  return <>
    <section className="relative isolate overflow-hidden bg-primary py-16 text-primary-foreground md:py-24">
      <img src={IMG.caregiver.src} alt={IMG.caregiver.alt} className="absolute inset-0 -z-20 size-full object-cover object-center" fetchPriority="high" />
      <div className="absolute inset-0 -z-10 bg-primary/85" />
      <div className="container-page">
        <p className="mb-4 text-sm font-semibold uppercase">MyCareEnvoy · Care on request</p>
        <h1 className="max-w-2xl text-4xl md:text-5xl">One call. The right care, arranged.</h1>
        <p className="mt-6 max-w-2xl text-lg">Need a physiotherapist, a lab test at home, or someone at the hospital bedside? Tell us what your parent needs. We find a vetted professional, arrange the visit, and keep you updated.</p>
        <Button variant="cta" size="lg" className="mt-8" onClick={() => request()}>Request care <ArrowRight aria-hidden /></Button>
      </div>
    </section>
    <section className="py-14 md:py-20"><div className="container-page">
      <SectionHeading title="How it works" />
      <ol className="mt-8 grid gap-8 md:grid-cols-3">{[
        { Icon: MessageSquareText, text: "Tell us what your parent needs." },
        { Icon: BadgeCheck, text: "We match them with a vetted professional and confirm the cost with you before anything is booked." },
        { Icon: HeartHandshake, text: "The visit happens, and you get a report." },
      ].map(({ Icon, text }, i) => <li key={text} className="flex gap-4"><Icon className="size-7 shrink-0 text-terracotta" aria-hidden /><div><p className="mb-2 text-sm font-semibold text-primary">0{i + 1}</p><p>{text}</p></div></li>)}</ol>
    </div></section>
    <section className="bg-cream py-14 md:py-20"><div className="container-page">
      <SectionHeading title="The care your parent needs" />
      {CARE_CATEGORIES.map((category) => <div key={category} className="mt-10">
        <h2 className="text-2xl text-primary">{category}</h2>
        <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{services.filter((s) => s.category === category).map((s) => {
          const Icon = icons[s.id] ?? HeartHandshake;
          const available = s.status === "available";
          return <article key={s.id} className="flex flex-col rounded-lg border bg-card p-6 shadow-soft">
            <div className="flex items-start justify-between gap-3"><Icon className="size-7 shrink-0 text-terracotta" aria-hidden /><span className={`rounded-full px-3 py-1 text-xs font-semibold ${available ? "bg-primary-soft text-primary" : "bg-gold-soft text-foreground"}`}>{available ? "Available" : "Coming soon"}</span></div>
            <h3 className="mt-5 text-xl text-primary">{s.name}</h3>
            <p className="mb-6 mt-3 text-muted-foreground">{s.description}</p>
            <Button variant={available ? "outline" : "ghost"} className="mt-auto self-start" onClick={() => available ? request(s.id) : (setNotify(s), setNotifyDone(false))}>{available ? <ArrowRight aria-hidden /> : <Bell aria-hidden />}{available ? "Request" : "Notify me"}</Button>
          </article>;
        })}</div>
      </div>)}
      <p className="mt-10 border-t pt-8 text-muted-foreground">Care on request is available to all families, including those not on a monthly plan. Each service is quoted before booking. Members on a monthly plan get priority booking.</p>
    </div></section>
    <section id="request-care" className="scroll-mt-24 py-16 md:py-20"><div className="container-page max-w-3xl">
      <SectionHeading title="Request care for your parent" />
      <div className="mt-8">{requestDone ? <Success title="Thank you.">We will contact you on WhatsApp within 24 hours to confirm the details and the cost.</Success> : <SimpleForm key={selected} fields={fields} initial={{ service_id: selected }} submitLabel="Send request" success={<Success title="Thank you.">We will contact you on WhatsApp within 24 hours to confirm the details and the cost.</Success>} onSubmit={async (v) => {
        const service = services.find((s) => s.id === v["service_id"]);
        if (service?.status === "coming_soon") { setNotify(service); setNotifyDone(false); throw new Error("This service is coming soon. Please use Notify me to join its waitlist."); }
        await send({ data: { ...v, kind: "request" } }); setRequestDone(true);
      }} />}</div>
      <p className="mt-6 text-sm text-muted-foreground">{emergency}</p>
    </div></section>
    <Dialog open={!!notify} onOpenChange={(open) => { if (!open) setNotify(null); }}><DialogContent className="max-h-[90dvh] overflow-y-auto sm:max-w-lg">
      <DialogHeader><DialogTitle>Notify me</DialogTitle><DialogDescription>{notify?.name}</DialogDescription></DialogHeader>
      {notify && <SimpleForm key={notify.id} fields={[
        { name: "full_name", label: "Name", type: "text", required: true }, { name: "email", label: "Email", type: "email", required: true },
      ]} submitLabel="Notify me" success={<Success title="You're on the list.">We have saved your interest in {notify.name}.</Success>} onSubmit={async (v) => { await send({ data: { ...v, kind: "waitlist", service_id: notify.id } }); setNotifyDone(true); }} />}
      {!notifyDone && <p className="text-sm text-muted-foreground">Service: {notify?.name}</p>}
    </DialogContent></Dialog>
  </>;
}