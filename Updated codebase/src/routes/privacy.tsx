import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";
import { SITE } from "@/config/site";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/privacy")({
  head: () =>
    seo(
      "Privacy policy",
      "How MyCareEnvoy collects, uses and protects personal and health information, in line with the Nigeria Data Protection Act 2023.",
    ),
  component: () => <LegalPage title="Privacy policy" html={html} />,
});

const html = `
<p>MyCareEnvoy is a product and service of PadiHealth Ltd, a company registered in Nigeria ("we", "us"). We respect your privacy and the privacy of your parents. This policy explains what we collect, why, and your rights. We process personal data in line with the <strong>Nigeria Data Protection Act 2023</strong> and its regulations, and, where they apply, the data protection laws of the country where you live.</p>
<h2>Who this policy covers</h2>
<ul><li><strong>Families:</strong> the adult children and relatives who contact or subscribe to MyCareEnvoy.</li><li><strong>Parents:</strong> the older adults who receive care.</li><li><strong>Applicants:</strong> nurses, doctors and caregivers who apply to join our team.</li><li><strong>Partners and employers</strong> who contact us.</li></ul>
<h2>What we collect</h2>
<ul><li>Contact details: names, email, phone and WhatsApp numbers, country and time zone.</li><li>About your parent: name, age, location, languages and health information you or our clinicians record, such as conditions, medications, vital signs and visit notes.</li><li>For applicants: professional registration numbers, licenses, CVs, IDs, references and guarantor details.</li><li>Basic website usage information, such as pages visited.</li></ul>
<h2>How we use health information</h2>
<p>Health information is sensitive personal data. We use it only to plan and deliver care, produce visit reports, coordinate with hospitals and pharmacies on your parent's behalf, and handle emergencies. We rely on explicit consent and, where needed, the vital interests of the person receiving care. We never sell personal data or use health information for advertising.</p>
<h2>Who can access it</h2>
<ul><li>Your parent's assigned nurse, overseeing doctor and care coordinators, on a need-to-know basis.</li><li>Family members you approve to receive reports.</li><li>Partner hospitals, labs or pharmacies, only when needed for your parent's care.</li><li>Trusted service providers who host our systems, under strict confidentiality agreements.</li></ul>
<h2>How we protect it</h2>
<p>Data is encrypted in transit, stored on secure systems with access controls, and uploaded documents are kept in private storage that only authorised staff can open. Staff are trained in confidentiality.</p>
<h2>How long we keep it</h2>
<p>We keep care records for as long as care continues and afterwards for the period required by Nigerian law and professional guidance. Applicant documents are kept for up to two years unless you ask us to delete them sooner.</p>
<h2>Your rights</h2>
<p>You can ask to access, correct, move or delete your data, withdraw consent, or object to processing. To request deletion or exercise any right, email <a href="mailto:${SITE.email}">${SITE.email}</a>. We respond within 30 days. You may also complain to the Nigeria Data Protection Commission.</p>
<h2>Contact</h2>
<p>Email <a href="mailto:${SITE.email}">${SITE.email}</a> or WhatsApp ${SITE.whatsappDisplay}.</p>`;
