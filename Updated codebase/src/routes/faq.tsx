import { createFileRoute } from "@tanstack/react-router";
import { CtaBand, PageHero } from "@/components/site/primitives";
import { FaqList } from "@/components/site/blocks";
import { FAQ_GROUPS } from "@/content/faq";
import { IMG } from "@/config/images";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/faq")({
  head: () => seo("FAQ: home nurse care for elderly parents in Nigeria", "Answers about MyCareEnvoy nurse visits, doctors, emergencies, billing, privacy and local availability."),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero eyebrow="FAQ" title="Your questions, answered honestly." intro="Can't find what you need? Message us on WhatsApp and a real person will reply." />
      <section className="py-16">
        <div className="container-page max-w-3xl space-y-12">
          {FAQ_GROUPS.map((g) => (
            <div key={g.title}>
              <h2 className="mb-4 text-2xl text-primary">{g.title}</h2>
              <FaqList items={g.items} />
            </div>
          ))}
        </div>
      </section>
      <CtaBand image={IMG.couple.src} />
    </>
  );
}
