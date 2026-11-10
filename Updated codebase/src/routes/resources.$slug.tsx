import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WhatsAppButton } from "@/components/site/primitives";
import { ARTICLES } from "@/content/articles";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/resources/$slug")({
  loader: ({ params }) => {
    const article = ARTICLES.find((a) => a.slug === params.slug);
    if (!article) throw notFound();
    return { article };
  },
  head: ({ loaderData }) => (loaderData ? seo(loaderData.article.title, loaderData.article.excerpt) : seo("Article", "MyCareEnvoy resources")),
  component: Page,
});

function Page() {
  const { article: a } = Route.useLoaderData();
  return (
    <article className="py-12 md:py-16">
      <div className="container-page max-w-3xl">
        <Link to="/resources" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"><ArrowLeft className="size-4" aria-hidden /> All resources</Link>
        <p className="mt-6 flex items-center gap-3 text-sm"><span className="font-semibold text-terracotta">{a.category}</span><span className="flex items-center gap-1 text-muted-foreground"><Clock className="size-3.5" aria-hidden /> {a.minutes} min read</span></p>
        <h1 className="mt-2 text-4xl text-primary md:text-5xl">{a.title}</h1>
        <p className="mt-4 text-xl text-muted-foreground">{a.excerpt}</p>
      </div>
      <div className="container-page mt-10 max-w-4xl">
        <img src={a.image.src} alt={a.image.alt} className="aspect-[16/9] w-full rounded-3xl object-cover shadow-soft" />
      </div>
      <div className="container-page max-w-3xl">
        <div className="prose-care mt-10 text-lg" dangerouslySetInnerHTML={{ __html: a.html }} />
        <aside className="mt-14 rounded-3xl bg-primary p-8 text-primary-foreground">
          <h2 className="text-2xl">Want a qualified nurse checking on your parent?</h2>
          <p className="mt-2 opacity-85">Regular home visits, doctor oversight, and a clear report after every visit.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild variant="cta" size="lg"><Link to="/get-started">Get started</Link></Button>
            <WhatsAppButton />
          </div>
        </aside>
      </div>
    </article>
  );
}
