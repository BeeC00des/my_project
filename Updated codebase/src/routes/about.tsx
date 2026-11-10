import { createFileRoute } from "@tanstack/react-router";
import { CtaBand, PageHero, SectionHeading } from "@/components/site/primitives";
import { IMG } from "@/config/images";
import { seo } from "@/lib/seo";
import founder from "@/assets/founder.jpg.asset.json";

export const Route = createFileRoute("/about")({
  head: () =>
    seo(
      "About MyCareEnvoy: built by a Nigerian doctor",
      "MyCareEnvoy was started by a Nigerian-trained physician in the diaspora to give families abroad trusted, verified care for their parents in Nigeria.",
    ),
  component: Page,
});

const values = [
  ["Dignity", "Our parents are treated as the proud, capable adults they are."],
  ["Honesty", "We tell families the truth, even when it's not what they hoped to hear."],
  ["Presence", "We show up, on time, every time, and we stay consistent."],
  ["Excellence", "Qualified people, clear protocols, and care that's checked by a doctor."],
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Our story"
        title="We built the help we wished our own families had."
        image={IMG.couple.src}
        imageAlt={IMG.couple.alt}
      />
      <section className="py-20">
        <div className="container-page grid gap-12 md:grid-cols-[0.7fr_1.3fr]">
          <img
            src={founder.url}
            alt="Dr. Olabode (Bode) Ekerin, founder of MyCareEnvoy"
            className="aspect-[4/5] w-full rounded-3xl object-cover object-top shadow-lift md:sticky md:top-28"
          />
          <div className="space-y-5 text-lg">
            <p>
              I'm a physician trained at Lagos State University, where I earned my MBBS. I went into
              medicine for a simple reason: I hated seeing people sick and wanted to do something
              about it.
            </p>
            <p>
              For over six years, my clinical and public health work in Nigeria has taken me across
              different states. Along the way I earned an MSc in Population and Reproductive Health
              from the University of Port Harcourt.
            </p>
            <p>
              Again and again, I saw that the patients who did well weren't always the ones with the
              best hospital nearby. They were the ones with someone in their corner: someone who
              made sure prescriptions were filled, appointments were kept, and small warning signs
              were caught before they became emergencies.
            </p>
            <p>
              Today I live in Nashville, Tennessee, where I'm completing my MBA at Vanderbilt
              University's Owen Graduate School of Management. Moving abroad made all of this
              personal.
            </p>
            <p>
              Like so many of us in the diaspora, I know what it feels like to love your parents
              from thousands of miles away. You call, and they say "I'm fine" because they don't
              want you to worry. You send money for medication and hope it was bought. You hear
              about a hospital visit days after it happened.
            </p>
            <p>
              My own parents were the first family MyCareEnvoy served. I built it so other families
              could have what I wanted for mine: a trusted nurse who visits, care supervised by a
              doctor, and honest updates you can rely on.
            </p>
            <p>
              Our parents cared for us when we couldn't care for ourselves. They deserve the same
              from us, wherever we live.
            </p>
            <p className="font-serif text-xl text-primary">
              Dr. Olabode (Bode) Ekerin
              <br />
              <span className="font-sans text-base text-muted-foreground">
                Founder, MyCareEnvoy
              </span>
            </p>
          </div>
        </div>
      </section>
      <section className="bg-primary-soft py-20">
        <div className="container-page">
          <SectionHeading title="Our values" center />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(([t, b]) => (
              <div key={t} className="rounded-3xl bg-card p-7 shadow-soft">
                <h3 className="text-2xl text-terracotta">{t}</h3>
                <p className="mt-2 text-muted-foreground">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="container-page max-w-3xl">
          <SectionHeading title="Our team on the ground" />
          <p className="mt-5 text-lg text-muted-foreground">
            Care coordinators schedule visits, match parents with nurses and keep families updated.
            Our clinical lead supervises care and reviews reports. Local availability is confirmed
            before enrollment.
          </p>
        </div>
      </section>
      <CtaBand image={IMG.meal.src} />
    </>
  );
}
