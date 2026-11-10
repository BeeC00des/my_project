import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WhatsAppButton } from "@/components/site/primitives";
import { IMG } from "@/config/images";
import { seo } from "@/lib/seo";
export const Route = createFileRoute("/store")({
  head: () =>
    seo(
      "Store coming soon",
      "The MyCareEnvoy Store is coming soon. Stay connected with trusted care for your parent in Nigeria.",
    ),
  component: Store,
});
function Store() {
  return (
    <section className="relative isolate min-h-[65vh] overflow-hidden">
      <img
        src={IMG.garden.src}
        alt={IMG.garden.alt}
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-primary/80" aria-hidden />
      <div className="container-page py-24 text-primary-foreground md:py-32">
        <p className="font-medium">MyCareEnvoy</p>
        <h1 className="mt-4 text-5xl md:text-6xl">Store</h1>
        <p className="mt-6 font-serif text-3xl">Coming soon.</p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Button asChild variant="light">
            <Link to="/">
              <ArrowLeft aria-hidden /> Back to home
            </Link>
          </Button>
          <WhatsAppButton label="Stay in touch" />
        </div>
      </div>
    </section>
  );
}
