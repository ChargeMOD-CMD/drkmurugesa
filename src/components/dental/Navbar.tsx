import { Menu, X, Phone } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const links = [
  { href: "#about", label: "About", num: "01" },
  { href: "#services", label: "Services", num: "02" },
  { href: "#book", label: "Book", num: "03" },
  { href: "#testimonials", label: "Stories", num: "04" },
  { href: "#contact", label: "Visit", num: "05" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-smooth ${
        scrolled
          ? "border-b border-border/60 glass-pearl shadow-soft"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="container flex h-20 items-center justify-between">
        <a href="#home" className="flex items-center gap-3">
          <div className="relative grid h-11 w-11 place-items-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-glow">
            <span className="font-display text-lg font-bold italic">M</span>
            <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-accent shadow-rose" />
          </div>
          <div className="leading-tight">
            <p className="font-display text-base font-semibold text-foreground">
              Dr. K. Murugesan
            </p>
            <p className="eyebrow !text-[10px] !tracking-[0.28em]">Dental · Est. 2014</p>
          </div>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group flex items-baseline gap-1.5 text-sm font-medium text-foreground/75 transition-smooth hover:text-primary"
            >
              <span className="font-mono text-[10px] text-accent">{l.num}</span>
              <span className="relative">
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-primary transition-smooth group-hover:w-full" />
              </span>
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="tel:+919381034961"
            className="flex items-center gap-2 text-sm font-medium text-foreground/80 hover:text-primary"
          >
            <Phone className="h-4 w-4" />
            +91 93810 34961
          </a>
          <Button asChild size="sm" className="rounded-full bg-ink px-5 text-ink-foreground hover:bg-primary">
            <a href="#book">Book a Visit →</a>
          </Button>
        </div>

        <button className="lg:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <div className="container flex flex-col gap-4 py-6">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="flex items-baseline gap-2 font-display text-2xl text-foreground"
              >
                <span className="font-mono text-xs text-accent">{l.num}</span>
                {l.label}
              </a>
            ))}
            <Button asChild className="mt-2 rounded-full bg-ink text-ink-foreground">
              <a href="#book">Book a Visit</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
