import { useEffect, useRef, useState, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { whatsappLink } from "@/config/site";
import { cn } from "@/lib/utils";
import logo from "@/assets/mycareenvoy-emblem.jpg.asset.json";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-2" aria-label="MyCareEnvoy home">
      <img src={logo.url} alt="" className="size-11 shrink-0 rounded-md object-contain" />
      <span className={cn("font-serif text-xl font-semibold whitespace-nowrap", light ? "text-primary-foreground" : "text-primary")}>
        MyCareEnvoy
      </span>
    </Link>
  );
}

export function Reveal({ children, className, delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e?.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={cn("reveal", visible && "is-visible", className)} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

export function SectionHeading({ eyebrow, title, intro, center = false }: { eyebrow?: string; title: ReactNode; intro?: ReactNode; center?: boolean }) {
  return (
    <div className={cn("max-w-2xl", center && "mx-auto text-center")}>
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      <h2 className="text-3xl text-primary md:text-[2.6rem]">{title}</h2>
      {intro && <p className="mt-4 text-lg text-muted-foreground">{intro}</p>}
    </div>
  );
}

export function WhatsAppButton({ label = "Chat on WhatsApp", size = "lg", message }: { label?: string; size?: "lg" | "default"; message?: string }) {
  return (
    <Button asChild variant="whatsapp" size={size}>
      <a href={whatsappLink(message)} target="_blank" rel="noopener noreferrer">
        <MessageCircle aria-hidden /> {label}
      </a>
    </Button>
  );
}

export function PageHero({ eyebrow, title, intro, image, imageAlt, children }: { eyebrow?: string; title: ReactNode; intro?: ReactNode; image?: string; imageAlt?: string; children?: ReactNode }) {
  return (
    <section className="relative overflow-hidden bg-cream">
      <div className="adire-bg pointer-events-none absolute inset-0 opacity-[0.05]" aria-hidden />
      <div className={cn("container-page relative grid items-center gap-10 py-14 md:py-20", image && "md:grid-cols-2")}>
        <div>
          {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
          <h1 className="text-4xl text-primary md:text-5xl">{title}</h1>
          {intro && <p className="mt-5 max-w-xl text-lg text-muted-foreground">{intro}</p>}
          {children && <div className="mt-7 flex flex-wrap gap-3">{children}</div>}
        </div>
        {image && (
          <img src={image} alt={imageAlt ?? ""} width={1200} height={900} className="aspect-[4/3] w-full rounded-3xl object-cover shadow-lift" />
        )}
      </div>
    </section>
  );
}

export function CtaBand({ title = "Your parents took care of you. Let us help you take care of them.", image }: { title?: string; image: string }) {
  return (
    <section className="relative isolate overflow-hidden">
      <img src={image} alt="Older Nigerian couple laughing together on a veranda" loading="lazy" className="absolute inset-0 -z-10 h-full w-full object-cover" />
      <div className="absolute inset-0 -z-10 bg-primary/80" aria-hidden />
      <div className="container-page py-20 text-center md:py-28">
        <h2 className="mx-auto max-w-3xl text-3xl text-primary-foreground md:text-5xl">{title}</h2>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button asChild variant="cta" size="lg"><Link to="/get-started">Get started</Link></Button>
          <WhatsAppButton />
        </div>
      </div>
    </section>
  );
}

