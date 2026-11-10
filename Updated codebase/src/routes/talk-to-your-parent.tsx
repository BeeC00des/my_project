import { createFileRoute } from "@tanstack/react-router";
import { CtaBand, PageHero, SectionHeading } from "@/components/site/primitives";
import { IMG } from "@/config/images";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/talk-to-your-parent")({
  head: () => seo("How to talk to your parent about home care", "Our parents are proud. A practical guide for Nigerian families abroad on introducing a nurse in a way that feels like respect, not surveillance."),
  component: Page,
});

const tips = [
  ["Make it about you, not them", "Frame it as support for your peace of mind, not a judgement of how they're coping. \"I worry\" lands softer than \"You need.\""],
  ["Bring in someone they respect", "A respected sibling, aunt, uncle or pastor can make the idea feel familiar and approved, not imposed from abroad."],
  ["Introduce the nurse as someone you trust", "Tell them about the nurse by name. Share that you've spoken with them. A known person is easier to welcome than a stranger."],
  ["Start small", "Begin with one visit, or a simple blood pressure check. Let trust build before adding more."],
  ["Let them have a say", "Ask what time suits them, which language they prefer, what they'd like help with. Choice is dignity."],
];

function Page() {
  return (
    <>
      <PageHero eyebrow="For families" title="How to talk to your parent about care" intro="A guide for the conversation many of us put off. Warmth first, logistics second." image={IMG.meal.src} imageAlt={IMG.meal.alt} />
      <article className="py-20">
        <div className="container-page max-w-3xl">
          <h2 className="text-3xl text-primary">Why this conversation matters</h2>
          <p className="mt-4 text-lg text-muted-foreground">Most parents won't ask for help. They raised us, they managed through hard times, and they don't want to become a worry. So they say "I'm fine" and change the subject.</p>
          <p className="mt-4 text-lg text-muted-foreground">When we suggest a nurse, they may hear something else: that we think they're weak, that they're being watched, or that they're a burden. None of that is true, but the feelings are real. The way you start the conversation shapes how they receive it.</p>

          <SectionHeading eyebrow="Five tips" title="What tends to work" />
          <ol className="mt-8 space-y-5">
            {tips.map(([t, b], i) => (
              <li key={t} className="flex gap-5 rounded-3xl bg-card p-6 shadow-soft">
                <span className="font-serif text-4xl text-gold">{i + 1}</span>
                <div><h3 className="text-xl">{t}</h3><p className="mt-1 text-muted-foreground">{b}</p></div>
              </li>
            ))}
          </ol>

          <div className="mt-12 rounded-3xl border-l-4 border-terracotta bg-accent p-8">
            <p className="eyebrow">Words you could use</p>
            <p className="mt-3 font-serif text-2xl leading-snug">"Mummy, I know you're managing well. This is for my peace of mind, so I can stop worrying every time you don't pick up."</p>
            <p className="mt-5 font-serif text-xl leading-snug text-muted-foreground">"Daddy, she's a nurse I trust. She'll just come to check your pressure and keep me updated. If you don't like her, we'll stop."</p>
          </div>

          <h2 className="mt-14 text-3xl text-primary">We help with this too</h2>
          <p className="mt-4 text-lg text-muted-foreground">Our nurse's first visit is designed to feel like a friendly introduction, not an inspection. They'll greet your parent properly, take time to chat, and only begin checks when your parent is comfortable. If it helps, we can speak with your parent or a trusted relative before the first visit.</p>
        </div>
      </article>
      <CtaBand image={IMG.couple.src} title="When you're ready, we're here." />
    </>
  );
}
