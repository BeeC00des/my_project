import { createFileRoute } from "@tanstack/react-router";
import { CarePartnerApplication } from "@/components/forms/CarePartnerApplication";
import { seo } from "@/lib/seo";
export const Route = createFileRoute("/join/physiotherapists")({ head: () => seo("Physiotherapist applications in Nigeria", "Apply to provide vetted home physiotherapy for older adults in Nigeria with MyCareEnvoy."), component: Page });
function Page() { return <CarePartnerApplication kind="physiotherapists" />; }