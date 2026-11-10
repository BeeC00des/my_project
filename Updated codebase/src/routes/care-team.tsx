import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { PageHero, Reveal, SectionHeading } from "@/components/site/primitives";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/care-team")({
  head: () =>
    seo(
      "Our care team: verified nurses and doctors in Nigeria",
      "Meet the registered nurses, doctors and caregivers who care for older adults at home, and see how we vet every one of them.",
    ),
  component: Page,
});

const vetting = [
  ["Application", "Every team member applies with their details, experience and documents."],
  ["License verification", "Nurses verified with the NMCN. Doctors verified with the MDCN."],
  ["ID and guarantor check", "Caregivers provide valid ID and a guarantor we contact directly."],
  ["Interview", "A structured interview focused on judgement, kindness and reliability."],
  ["Reference checks", "We speak with at least two previous employers or supervisors."],
  ["Training", "MyCareEnvoy protocols, reporting, and caring for older adults with dignity."],
  ["Ongoing supervision", "Doctors review reports, and we check in with families regularly."],
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Our care team"
        title="The people who show up for your parents."
        intro="Registered nurses, doctors and caregivers in Nigeria, chosen as much for their character as their credentials."
      />
      <section className="py-20">
        <div className="container-page">
          <SectionHeading eyebrow="Vetting" title="How we vet every team member" />
          <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {vetting.map(([t, b], i) => (
              <Reveal key={t} delay={i * 60}>
                <li className="h-full rounded-3xl bg-card p-6 shadow-soft">
                  <span className="grid size-10 place-items-center rounded-full bg-primary font-semibold text-primary-foreground">
                    {i + 1}
                  </span>
                  <h3 className="mt-4 text-lg">{t}</h3>
                  <p className="mt-1 text-[15px] text-muted-foreground">{b}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>
      <section className="bg-cream py-20">
        <div className="container-page">
          <SectionHeading title="Who's on the team" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              [
                "Registered nurses",
                "Each parent has one dedicated nurse who visits on a schedule, knows their history, and writes every report.",
              ],
              [
                "Doctors",
                "Licensed physicians carry out onboarding assessments, build the care plan and review every reading.",
              ],
              [
                "Caregivers",
                "Trusted companions who accompany parents to hospital and clinic visits, errands and appointments.",
              ],
              [
                "Care coordinators",
                "Your point of contact. They schedule visits, chase refills and keep you updated on WhatsApp.",
              ],
            ].map(([t, b]) => (
              <div key={t} className="rounded-3xl bg-card p-6 shadow-soft">
                <h3 className="text-xl text-primary">{t}</h3>
                <p className="mt-2 text-muted-foreground">{b}</p>
              </div>
            ))}
          </div>
          <p className="mt-8">
            <Link
              to="/plans"
              hash="nurse-services"
              className="font-medium text-terracotta underline underline-offset-4"
            >
              Want to know exactly what our nurses do at each visit?
            </Link>
          </p>
        </div>
      </section>
      <section className="py-20">
        <div className="container-page grid items-center gap-10 md:grid-cols-2">
          <div>
            <SectionHeading eyebrow="On the ground" title="Our local operations team" />
            <p className="mt-5 text-lg text-muted-foreground">
              Care coordinators arrange visits, confirm appointments and follow up on prescriptions.
              A clinical lead supervises nurses, checks reports and handles escalations. Families
              have a real person to contact when something needs attention.
            </p>
          </div>
          <div className="rounded-3xl bg-primary p-8 text-primary-foreground">
            <h3 className="text-2xl">Want to join us?</h3>
            <p className="mt-2 opacity-85">
              We're growing our team of nurses, doctors and caregivers across Nigeria.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild variant="light">
                <Link to="/join/nurses">Nurses</Link>
              </Button>
              <Button asChild variant="light">
                <Link to="/join/doctors">Doctors</Link>
              </Button>
              <Button asChild variant="light">
                <Link to="/join/caregivers">Caregivers</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
