import { useEffect, useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { FieldGrid, Honeypot, validate, type Field, type Values } from "@/components/forms/FormKit";
import { supabase } from "@/integrations/supabase/client";
import { SITE, whatsappLink } from "@/config/site";
import {
  AVAILABILITY_DELAY_MS,
  AVAILABILITY_SCROLL_THRESHOLD,
  canAutoShow,
  markEngaged,
  markVisitor,
  readVisitor,
} from "@/lib/visitor-engagement";

const fields: Field[] = [
  { name: "name", label: "Your name", type: "text", required: true },
  { name: "email", label: "Email", type: "email", required: true },
  {
    name: "whatsapp",
    label: "WhatsApp number with country code",
    type: "tel",
    required: true,
    full: true,
  },
  {
    name: "country",
    label: "Country you live in",
    type: "select",
    required: true,
    options: ["United States", "United Kingdom", "Canada", "Other"],
  },
  {
    name: "parent_location",
    label: "Parent's location",
    type: "select",
    required: true,
    options: [
      { value: "lagos", label: "Lagos" },
      { value: "other", label: "Somewhere else" },
    ],
  },
  {
    name: "parent_city",
    label: "Which city or town?",
    type: "text",
    required: true,
    showIf: (v) => v["parent_location"] === "other",
  },
];
export function AvailabilityPopup() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const [values, setValues] = useState<Values>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [busy, setBusy] = useState(false);
  const [done, setDone] = useState(false);
  const [fail, setFail] = useState("");
  const [hp, setHp] = useState("");
  useEffect(() => {
    if (["/get-started", "/checkout"].includes(pathname)) {
      markEngaged();
      setOpen(false);
    }
    const show = () => {
      markVisitor({ shown: true });
      setOpen(true);
    };
    const auto = () => {
      if (canAutoShow(readVisitor(), pathname) && !document.querySelector('[role="dialog"]'))
        show();
    };
    const scroll = () => {
      const distance = document.documentElement.scrollHeight - window.innerHeight;
      if (distance > 0 && window.scrollY / distance >= AVAILABILITY_SCROLL_THRESHOLD) auto();
    };
    const exit = (e: MouseEvent) => {
      if (
        e.clientY <= 0 &&
        !e.relatedTarget &&
        window.matchMedia("(hover: hover) and (pointer: fine)").matches
      )
        auto();
    };
    const timer = window.setTimeout(auto, AVAILABILITY_DELAY_MS);
    window.addEventListener("open-availability", show);
    window.addEventListener("scroll", scroll, { passive: true });
    document.addEventListener("mouseout", exit);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("open-availability", show);
      window.removeEventListener("scroll", scroll);
      document.removeEventListener("mouseout", exit);
    };
  }, [pathname]);
  async function submit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate(fields, values);
    setErrors(errs);
    if (Object.values(errs).some(Boolean)) return;
    if (hp) {
      markEngaged();
      setDone(true);
      return;
    }
    setBusy(true);
    setFail("");
    try {
      const { error } = await supabase.from("leads").insert({
        name: String(values["name"]).trim(),
        email: String(values["email"]).trim(),
        whatsapp_number: String(values["whatsapp"]),
        country: String(values["country"]),
        parent_location: String(values["parent_location"]),
        parent_city:
          values["parent_location"] === "other" ? String(values["parent_city"]).trim() : "Lagos",
        source: "popup",
      });
      if (error) throw error;
      markEngaged();
      setDone(true);
    } catch {
      setFail("We couldn't send your details. Please try again.");
    } finally {
      setBusy(false);
    }
  }
  const lagos = values["parent_location"] === "lagos";
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-h-[90dvh] w-[calc(100%-2rem)] max-w-xl overflow-y-auto rounded-lg bg-cream p-5 pt-16 sm:p-8 sm:pt-16 [&>button]:grid [&>button]:size-12 [&>button]:place-items-center [&>button]:rounded-full [&>button]:border [&>button]:bg-card [&>button]:opacity-100 [&>button>svg]:size-6">
        <DialogTitle className="font-serif text-3xl leading-tight text-primary">
          {done
            ? lagos
              ? "Great news, we're there!"
              : `Thank you! You're on the list for ${String(values["parent_city"])}.`
            : "Is Mum or Dad back home?"}
        </DialogTitle>
        <DialogDescription className="text-base">
          {done
            ? lagos
              ? "You can book your parent's baseline assessment now, or we'll message you on WhatsApp within 24 hours to answer any questions."
              : "We're not there yet, but we're growing. You'll be among the first to know when we arrive."
            : "Tell us where they live. We'll let you know how we can help, usually within 24 hours."}
        </DialogDescription>
        {done ? (
          <div className="flex flex-wrap gap-3">
            {lagos ? (
              <>
                <Button asChild variant="cta">
                  <Link to="/get-started" onClick={() => setOpen(false)}>
                    Book the baseline ($40)
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <a
                    href={whatsappLink(
                      "Hi MyCareEnvoy, I'd like to learn more about care for my parent in Lagos.",
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Chat on WhatsApp
                  </a>
                </Button>
              </>
            ) : (
              <Button asChild variant="cta">
                <a
                  href={`https://wa.me/?text=${encodeURIComponent(`MyCareEnvoy helps families abroad care for their parents in Nigeria. Check availability for your parent's city: ${SITE.url}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Share on WhatsApp
                </a>
              </Button>
            )}
          </div>
        ) : (
          <form onSubmit={submit} noValidate className="relative space-y-5">
            <Honeypot value={hp} onChange={setHp} />
            <FieldGrid
              fields={fields}
              values={values}
              errors={errors}
              setValue={(key, value) => {
                setValues((v) => ({ ...v, [key]: value }));
                setErrors((v) => ({ ...v, [key]: "" }));
              }}
            />
            {fail && (
              <p role="alert" className="text-destructive">
                {fail}
              </p>
            )}
            <Button variant="cta" type="submit" disabled={busy} className="w-full">
              {busy ? "Sending..." : "Check availability"}
            </Button>
            <p className="text-sm text-muted-foreground">
              No spam. We'll only contact you about care for your parent.
            </p>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
