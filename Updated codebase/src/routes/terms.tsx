import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";
import { SITE } from "@/config/site";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/terms")({
  head: () =>
    seo(
      "Terms of service",
      "The terms that apply when you use the MyCareEnvoy website and subscribe to MyCareEnvoy care plans.",
    ),
  component: () => <LegalPage title="Terms of service" html={html} />,
});

const html = `
<p>These terms apply to your use of the MyCareEnvoy website and services. MyCareEnvoy is a product and service of PadiHealth Ltd, a company registered in Nigeria. By subscribing or using the site, you agree to these terms.</p>
<h2>Our service</h2>
<p>MyCareEnvoy coordinates home visits by registered nurses, oversight by licensed doctors, and caregiver support for older adults in Nigeria, with reports shared with their families. The details of each plan are set out on our Plans page and in our <a href="/service-agreement">service agreement</a>.</p>
<h2>Not an emergency service</h2>
<p>MyCareEnvoy is not an ambulance or emergency service. In an emergency, contact local emergency services and nearby family first.</p>
<h2>Your responsibilities</h2>
<ul><li>Give accurate information about yourself and your parent.</li><li>Have your parent's agreement, or the agreement of someone legally able to give it, before care begins.</li><li>Keep your payment details up to date.</li></ul>
<h2>Payment</h2>
<p>Plans may be billed monthly or annually in advance in USD, GBP or CAD. Annual plans include two months free and the baseline assessment waived. Prices may change with 30 days' notice. Costs can be split between family members.</p>
<h2>Cancellation</h2>
<p>You can cancel anytime before your next billing date. Visits already paid for remain available until the end of that billing period.</p>
<h2>Liability</h2>
<p>Our clinicians work to professional standards. To the extent the law allows, we are not liable for indirect losses, or for outcomes caused by information withheld from us or by third-party providers outside our control.</p>
<h2>Changes</h2>
<p>We may update these terms. We'll tell you about significant changes by email.</p>
<h2>Governing law</h2>
<p>These terms are governed by the laws of the Federal Republic of Nigeria.</p>
<p>Questions: <a href="mailto:${SITE.email}">${SITE.email}</a></p>`;
