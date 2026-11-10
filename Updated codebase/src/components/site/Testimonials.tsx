import { useQuery } from "@tanstack/react-query";
import { Quote } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { TESTIMONIALS } from "@/config/site";
import { Reveal, SectionHeading } from "./primitives";

type Card = { key: string; quote: string; name: string; detail?: string | undefined };

/**
 * Renders dashboard-published testimonials, or the owner-approved customer quotes.
 */
export function TestimonialsSection() {
  const { data } = useQuery({
    queryKey: ["testimonials"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("testimonials")
        .select("id, quote, name, detail")
        .eq("published", true)
        .order("created_at", { ascending: false });
      if (error) throw error;
      return data;
    },
  });

  const real = data?.length ? data : null;
  const cards: Card[] = real
    ? real.map((t) => ({ key: t.id, quote: t.quote, name: t.name, detail: t.detail ?? undefined }))
    : TESTIMONIALS.map((t) => ({
        key: t.name,
        quote: t.quote,
        name: t.name,
        detail: `${t.role}, ${t.city}`,
      }));

  return (
    <section className="bg-primary-soft py-20 md:py-28">
      <div className="container-page">
        <SectionHeading title="What families say about us" center />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {cards.map((t, i) => (
            <Reveal key={t.key} delay={i * 90}>
              <figure className="h-full rounded-3xl bg-card p-7 shadow-soft">
                <Quote className="size-8 text-gold" aria-hidden />
                <blockquote className="mt-3 font-serif text-lg italic">{t.quote}</blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span
                    className="grid size-12 place-items-center rounded-full bg-primary font-serif text-lg text-primary-foreground"
                    aria-hidden
                  >
                    {t.name[0]}
                  </span>
                  <span>
                    <span className="block font-semibold">{t.name}</span>
                    {t.detail && <span className="text-sm text-muted-foreground">{t.detail}</span>}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
