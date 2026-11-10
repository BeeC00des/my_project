import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, MessageCircle, Mail, Twitter } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { SITE, whatsappLink } from "@/config/site";
import { Logo } from "./primitives";
import { Button } from "@/components/ui/button";
import { markEngaged } from "@/lib/visitor-engagement";

const cols: { title: string; links: [string, string][] }[] = [
  { title: "Families", links: [["/how-it-works", "How it works"], ["/plans", "Plans"], ["/get-started", "Get started"], ["/refer", "Refer a family"], ["/faq", "FAQ"]] },
  { title: "Work with us", links: [["/join/nurses", "Nurses"], ["/join/doctors", "Doctors"], ["/join/caregivers", "Caregivers"], ["/partners", "Partner with us"], ["/employers", "For employers"]] },
  { title: "Company", links: [["/about", "About"], ["/resources", "Resources"], ["/store", "Store"], ["/privacy", "Privacy policy"], ["/terms", "Terms of service"], ["/service-agreement", "Service agreement"]] },
];

function WaitlistBox() {
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [hp, setHp] = useState("");
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [err, setErr] = useState("");

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (hp) return setState("done");
    if (!city.trim()) return setErr("Please tell us the city.");
    if (!/^\S+@\S+\.\S+$/.test(email)) return setErr("Please enter a valid email.");
    setErr("");
    setState("sending");
    const { error } = await supabase.from("waitlist").insert({ email, parent_city: city.trim() });
    if (!error) markEngaged();
    setState(error ? "error" : "done");
  }

  return (
    <div className="rounded-2xl bg-primary-foreground/10 p-5">
      <p className="font-serif text-lg">Want care in your city?</p>
      <p className="mt-1 text-sm opacity-80">Tell us where they live. We’ll notify you when local care is available.</p>
      {state === "done" ? (
        <p className="mt-4 text-sm font-medium" role="status">Thank you. We'll let you know as soon as we're there.</p>
      ) : (
        <form onSubmit={submit} className="mt-4 grid gap-2" noValidate>
          <input type="text" tabIndex={-1} autoComplete="off" value={hp} onChange={(e) => setHp(e.target.value)} className="hidden" aria-hidden />
          <label className="sr-only" htmlFor="wl-city">City</label>
          <input id="wl-city" placeholder="City, e.g. Ibadan" value={city} onChange={(e) => setCity(e.target.value)} className="h-11 rounded-xl bg-background px-3 text-foreground" />
          <label className="sr-only" htmlFor="wl-email">Email</label>
          <input id="wl-email" type="email" placeholder="Your email" value={email} onChange={(e) => setEmail(e.target.value)} className="h-11 rounded-xl bg-background px-3 text-foreground" />
          {err && <p className="text-sm text-gold" role="alert">{err}</p>}
          {state === "error" && <p className="text-sm text-gold" role="alert">Something went wrong. Please try again.</p>}
          <Button type="submit" variant="cta" disabled={state === "sending"}>{state === "sending" ? "Joining..." : "Join the waitlist"}</Button>
        </form>
      )}
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-page grid gap-7 py-14 md:grid-cols-2 xl:grid-cols-[1.5fr_0.8fr_0.9fr_0.9fr_1.2fr]">
        <div>
          <Logo light />
          <p className="mt-4 text-[15px] opacity-85">Verified nurses and doctor-led care for older parents in Nigeria, for families who live abroad.</p>
          <ul className="mt-5 space-y-2 text-[15px]">
            <li><a className="flex items-center gap-2 hover:underline" href={`mailto:${SITE.email}`}><Mail className="size-4" aria-hidden /> {SITE.email}</a></li>
            <li><a className="flex items-center gap-2 hover:underline" href={whatsappLink()} target="_blank" rel="noopener noreferrer"><MessageCircle className="size-4" aria-hidden /> {SITE.whatsappDisplay}</a></li>
          </ul>
          <div className="mt-5 flex flex-wrap gap-3">
            <a href={SITE.social.facebook} aria-label="MyCareEnvoy on Facebook" className="grid size-10 place-items-center rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20"><Facebook className="size-5" /></a>
            <a href={SITE.social.instagram} aria-label="MyCareEnvoy on Instagram" className="grid size-10 place-items-center rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20"><Instagram className="size-5" /></a>
            <a href={SITE.social.linkedin} aria-label="MyCareEnvoy on LinkedIn" className="grid size-10 place-items-center rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20"><Linkedin className="size-5" /></a>
            <a href={SITE.social.twitter} aria-label="MyCareEnvoy on X" className="grid size-10 place-items-center rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20"><Twitter className="size-5" /></a>
          </div>
        </div>
        {cols.map((c) => (
          <div key={c.title}>
            <p className="font-serif text-lg">{c.title}</p>
            <ul className="mt-4 space-y-2 text-[15px] opacity-85">
              {c.links.map(([to, label]) => (
                <li key={to}><Link to={to} className="hover:underline">{label}</Link></li>
              ))}
            </ul>
          </div>
        ))}
        <WaitlistBox />
      </div>
      <div className="border-t border-primary-foreground/15">
        <div className="container-page space-y-1 py-6 text-sm opacity-75">
          <p>MyCareEnvoy is a product and service of PadiHealth Ltd, a company registered in Nigeria.</p>
          <p>© 2026 PadiHealth Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export function WhatsAppFab() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with MyCareEnvoy on WhatsApp"
      className="fixed bottom-5 right-5 z-50 grid size-14 place-items-center rounded-full bg-whatsapp text-foreground shadow-lift transition-transform hover:scale-105"
    >
      <svg viewBox="0 0 24 24" className="size-7" fill="currentColor" aria-hidden>
        <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.47-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.62-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.75-.72 2-1.41.25-.69.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35M12.05 21.5h-.01a9.4 9.4 0 0 1-4.8-1.32l-.34-.2-3.57.94.95-3.48-.22-.36a9.43 9.43 0 1 1 7.99 4.42m8.02-17.45A11.27 11.27 0 0 0 12.05.75 11.3 11.3 0 0 0 2.27 17.68L.66 23.25l5.7-1.5a11.28 11.28 0 0 0 5.69 1.45h.01A11.3 11.3 0 0 0 20.07 4.05" />
      </svg>
    </a>
  );
}
