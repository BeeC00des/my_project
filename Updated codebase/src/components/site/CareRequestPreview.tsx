import { Link } from "@tanstack/react-router";
import {
  Activity,
  TestTube2,
  Pill,
  Stethoscope,
  HeartHandshake,
  Hospital,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "./primitives";
export function CareRequestPreview() {
  return (
    <section className="bg-primary-soft py-16 md:py-20">
      <div className="container-page">
        <SectionHeading
          eyebrow="Care on request"
          title="Need something else? Just ask."
          intro="Individual services, arranged when needed. No monthly plan required. We confirm availability and quote the cost before booking."
        />
        <ul className="my-10 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
          {[
            [Activity, "Physiotherapy"],
            [TestTube2, "Lab tests at home"],
            [Pill, "Medication delivery"],
            [Stethoscope, "Specialist visits"],
            [HeartHandshake, "Home caregivers"],
            [Hospital, "Hospital support"],
          ].map(([Icon, label]) => {
            const TileIcon = Icon as typeof Activity;
            return (
              <li key={String(label)}>
                <TileIcon className="mb-3 size-7 text-terracotta" aria-hidden />
                <p className="font-medium">{String(label)}</p>
              </li>
            );
          })}
        </ul>
        <Button asChild variant="cta">
          <Link to="/care-on-request">
            See all care on request <ArrowRight aria-hidden />
          </Link>
        </Button>
      </div>
    </section>
  );
}
