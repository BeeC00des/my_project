import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Clock } from "lucide-react";
import { PageHero } from "@/components/site/primitives";
import { ARTICLES, CATEGORIES } from "@/content/articles";
import { cn } from "@/lib/utils";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/resources/")({
  head: () => seo("Resources: caring for elderly parents in Nigeria from abroad", "Practical guides on health, medications, hospital visits and family conversations for Nigerian families caring for parents from abroad."),
  component: Page,
});

function Page() {
  const [cat, setCat] = useState<string>("All");
  const list = cat === "All" ? ARTICLES : ARTICLES.filter((a) => a.category === cat);
  return (
    <>
      <PageHero eyebrow="Resources" title="Guides for caring from a distance." intro="Practical, honest advice for families looking after parents back home." />
      <section className="py-16">
        <div className="container-page">
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by category">
            {["All", ...CATEGORIES].map((c) => (
              <button key={c} onClick={() => setCat(c)} aria-pressed={cat === c} className={cn("rounded-full border px-4 py-2 text-sm font-medium transition", cat === c ? "border-primary bg-primary text-primary-foreground" : "bg-card hover:border-primary")}>{c}</button>
            ))}
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {list.map((a) => (
              <Link key={a.slug} to="/resources/$slug" params={{ slug: a.slug }} className="group overflow-hidden rounded-3xl bg-card shadow-soft transition hover:shadow-lift">
                <img src={a.image.src} alt={a.image.alt} loading="lazy" className="aspect-[16/9] w-full object-cover transition duration-500 group-hover:scale-[1.03]" />
                <div className="p-6">
                  <p className="flex items-center gap-3 text-sm"><span className="font-semibold text-terracotta">{a.category}</span><span className="flex items-center gap-1 text-muted-foreground"><Clock className="size-3.5" aria-hidden /> {a.minutes} min read</span></p>
                  <h2 className="mt-2 text-2xl text-primary">{a.title}</h2>
                  <p className="mt-2 text-muted-foreground">{a.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
          {list.length === 0 && <p className="mt-10 text-muted-foreground">New guides in this category are coming soon.</p>}
        </div>
      </section>
    </>
  );
}
