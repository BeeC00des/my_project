<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep care offer prices and inclusions in src/config/site.ts; shared cards and the pricing page consume this single source to prevent conflicting offers.
- Keep Store as a dedicated coming-soon route, not a checkout, until commerce is requested.
- Use the uploaded brand emblem with live text for the shared logo; this preserves readability and the no-parent-company requirement.
- Keep baseline assessment content and modality-specific rates in site configuration and shared assessment/selection views; this keeps all offers consistent across booking and information pages.
- Normalize legacy virtual booking links to the video choice while preserving historical stored rows; this prevents existing links and records from breaking when the video offer changes.
- Keep detailed nurse service groups in site configuration and render them through the shared NurseServices view; this keeps clinical scope consistent without adding routes.
- Mount availability once in the shared public layout and record visitor engagement after successful forms or booking entry; this prevents repeated automatic interruptions across pages.
- Store availability requests as insert-only public leads with RLS and baseline selections in family_leads; this protects contact data while keeping the existing intake workflow.
- Keep on-request service availability and descriptions in the services catalogue, with public insert-only submissions and role-protected admin edits; this preserves live availability and private contact records without changing existing care plans.
- Reuse FormKit only through separate CarePartnerApplication views for the new applicant types; this preserves existing registration forms and private CV access.
- Keep organisational partner intake on the single /partners page with one enquiry form routed server-side by organisation type into lab, pharmacy or general partner tables; this avoids duplicate lab and pharmacy partner pages.
