export function LegalPage({
  title,
  updated = "October 2026",
  html,
}: {
  title: string;
  updated?: string;
  html: string;
}) {
  return (
    <section className="py-12 md:py-16">
      <div className="container-page max-w-3xl">
        <h1 className="text-4xl text-primary md:text-5xl">{title}</h1>
        <p className="mt-2 text-muted-foreground">Last updated {updated}</p>
        <div className="prose-care mt-8" dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </section>
  );
}
