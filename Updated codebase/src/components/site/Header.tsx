import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { whatsappLink } from "@/config/site";
import { cn } from "@/lib/utils";
import { Logo } from "./primitives";
import { openAvailability } from "@/lib/visitor-engagement";

type NavLink = { to: string; label: string };
const familyLinks: NavLink[] = [
  { to: "/get-started", label: "Get started" },
  { to: "/talk-to-your-parent", label: "How to talk to your parent" },
  { to: "/share", label: "Share with your siblings" },
  { to: "/refer", label: "Refer a family" },
  { to: "/faq", label: "FAQ" },
];
const workLinks: NavLink[] = [
  { to: "/join/nurses", label: "Registered Nurses" },
  { to: "/join/doctors", label: "Doctors" },
  { to: "/join/caregivers", label: "Caregivers" },
  { to: "/join/physiotherapists", label: "Physiotherapists" },
  { to: "/partners", label: "Partner with us" },
  { to: "/employers", label: "For employers" },
];
const mainBefore: NavLink[] = [
  { to: "/how-it-works", label: "How it works" },
  { to: "/plans", label: "Plans" },
  { to: "/care-on-request", label: "Care on request" },
  { to: "/care-team", label: "Our care team" },
];
const mainAfter: NavLink[] = [
  { to: "/resources", label: "Resources" },
  { to: "/store", label: "Store" },
  { to: "/about", label: "About" },
];

function Dropdown({ label, links }: { label: string; links: NavLink[] }) {
  return (
    <div className="group relative">
      <Button variant="ghost" className="flex items-center gap-1 rounded-full px-3 py-2 text-[15px] font-medium hover:text-primary focus-visible:outline-2 focus-visible:outline-ring" aria-haspopup="true">
        {label} <ChevronDown className="size-4 transition-transform group-hover:rotate-180 group-focus-within:rotate-180" aria-hidden />
      </Button>
      <div className="invisible absolute left-0 top-full z-50 pt-2 opacity-0 transition-all group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
        <ul className="w-64 rounded-2xl border bg-card p-2 shadow-lift">
          {links.map((l) => (
            <li key={l.to}>
              <Link to={l.to} className="block rounded-xl px-3 py-2 text-[15px] hover:bg-primary-soft hover:text-primary">{l.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function MobileGroup({ label, links, onNavigate }: { label: string; links: NavLink[]; onNavigate: () => void }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b">
      <Button variant="ghost" className="flex w-full items-center justify-between py-4 text-lg font-medium" aria-expanded={open} onClick={() => setOpen(!open)}>
        {label} <ChevronDown className={cn("size-5 transition-transform", open && "rotate-180")} aria-hidden />
      </Button>
      {open && (
        <ul className="pb-3 pl-3">
          {links.map((l) => (
            <li key={l.to}><Link to={l.to} onClick={onNavigate} className="block py-2 text-muted-foreground">{l.label}</Link></li>
          ))}
        </ul>
      )}
    </div>
  );
}

export function Header() {
  const headerRef = useRef<HTMLElement>(null);
  const [headerHeight, setHeaderHeight] = useState(80);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);
  const close = () => setOpen(false);
  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;
    const observer = new ResizeObserver(() => setHeaderHeight(header.getBoundingClientRect().height));
    observer.observe(header);
    return () => observer.disconnect();
  }, []);

  return (
    <header ref={headerRef} className={cn("sticky top-0 z-40 border-b transition-all", scrolled ? "border-border bg-background/95 shadow-soft backdrop-blur" : "border-transparent bg-background")}>
      <div className={cn("container-page flex flex-wrap items-center justify-between transition-all sm:flex-nowrap", scrolled ? "min-h-16" : "min-h-20")}>
        <div className="min-w-0 max-sm:[&_span]:hidden max-sm:[&_img]:size-9"><Logo /></div>
        <nav className="order-last flex w-full flex-wrap items-center justify-center pb-2 sm:order-none sm:w-auto sm:flex-nowrap sm:pb-0" aria-label="Main">
          {mainBefore.map((l) => (
            <Link key={l.to} to={l.to} className="rounded-full px-1.5 py-2 text-sm font-medium hover:text-primary xl:px-3 xl:text-[15px]" activeProps={{ className: "text-primary" }}>{l.label}</Link>
          ))}
          <div className="hidden items-center 2xl:flex">
            <Dropdown label="For families" links={familyLinks} />
            <Dropdown label="Work with us" links={workLinks} />
            {mainAfter.map((l) => (
              <Link key={l.to} to={l.to} className="rounded-full px-3 py-2 text-[15px] font-medium hover:text-primary" activeProps={{ className: "text-primary" }}>{l.label}</Link>
            ))}
          </div>
        </nav>
        <div className="ml-auto flex items-center gap-2 2xl:ml-0">
          <Button variant="cta" onClick={() => { close(); openAvailability(); }} className="hidden h-auto min-h-10 whitespace-normal px-3 text-sm sm:inline-flex">Check availability</Button>
          <Button asChild variant="outline" className="hidden lg:inline-flex"><Link to="/get-started">Get started</Link></Button>
        </div>
        <Button variant="ghost" size="icon" className="grid size-11 place-items-center rounded-full 2xl:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </Button>
      </div>
      {open && (
        <div className="fixed inset-x-0 bottom-0 z-40 overflow-y-auto bg-background 2xl:hidden" style={{ top: headerHeight }}>
          <nav className="container-page flex min-h-full flex-col pb-8" aria-label="Mobile">
            <MobileGroup label="For families" links={familyLinks} onNavigate={close} />
            <MobileGroup label="Work with us" links={workLinks} onNavigate={close} />
            {mainAfter.map((l) => (
              <Link key={l.to} to={l.to} onClick={close} className="border-b py-4 text-lg font-medium">{l.label}</Link>
            ))}
            <div className="mt-8 grid gap-3">
              <Button asChild variant="cta" size="lg"><Link to="/get-started" onClick={close}>Get started</Link></Button>
              <Button asChild variant="outline" size="lg"><a href={whatsappLink()} target="_blank" rel="noopener noreferrer">Talk to us on WhatsApp</a></Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
