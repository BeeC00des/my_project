import { createFileRoute, redirect } from "@tanstack/react-router";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/join/lab-partners")({
  head: () => seo("Partner with MyCareEnvoy", "Labs partner with MyCareEnvoy through one partner form. Start on the Partner with us page."),
  beforeLoad: () => {
    throw redirect({ to: "/partners" });
  },
});
