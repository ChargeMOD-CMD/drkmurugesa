import { Calendar, ArrowUpRight, Star, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import dentistHero from "@/assets/dentist-hero.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden">
      {/* aurora background orbs */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="aurora-orb absolute -left-32 top-10 h-[28rem] w-[28rem]" />
        <div className="aurora-orb absolute -right-24 bottom-0 h-[22rem] w-[22rem] opacity-40" />
      </div>

      <div className="container relative grid gap-16 pb-24 pt-12 lg:grid-cols-12 lg:gap-10 lg:pb-32 lg:pt-20">
        {/* LEFT — editorial text block */}
        <div className="relative z-10 lg:col-span-7">
          <div className="flex items-center gap-4">
            <span className="eyebrow">Issue №01 · Chennai</span>
            <span className="dotted-rule flex-1" />
          </div>

          <h1 className="mt-8 font-display text-[clamp(2.75rem,7vw,5.5rem)] font-medium leading-[0.95] tracking-[-0.04em] text-foreground">
            Dentistry, <br />
            written like
            <span className="font-editorial text-primary"> poetry</span>
            <span className="text-accent">.</span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
            At Dr. K. Murugesan Dental Clinic, every visit is unhurried, every smile
            considered. A decade of <span className="ink-underline font-medium text-foreground">gentle precision</span>,
            modern tools, and warm hospitality — in the heart of Chennai.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button
              size="lg"
              asChild
              className="group h-14 rounded-full bg-ink px-7 text-base text-ink-foreground hover:bg-primary"
            >
              <a href="#book">
                <Calendar className="mr-2 h-5 w-5" />
                Reserve a chair
                <ArrowUpRight className="ml-1 h-4 w-4 transition-smooth group-hover:rotate-45" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="ghost"
              asChild
              className="h-14 rounded-full px-6 text-base text-foreground hover:bg-secondary"
            >
              <a href="#services">Explore the practice</a>
            </Button>
          </div>

          {/* editorial footnotes */}
          <div className="mt-16 grid max-w-xl grid-cols-3 gap-6 border-t border-border pt-8">
            <Foot num="10" suffix="yrs" label="Of practice" />
            <Foot num="5K" suffix="+" label="Smiles served" />
            <Foot num="4.9" suffix="★" label="Patient rating" />
          </div>
        </div>

        {/* RIGHT — image collage */}
        <div className="relative lg:col-span-5">
          <div className="relative">
            <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-rose opacity-30 blur-3xl" />

            {/* Main portrait */}
            <div className="relative overflow-hidden rounded-[2rem] border border-border/60 shadow-card">
              <img
                src={dentistHero}
                alt="Dr. K. Murugesan, dental surgeon in Chennai"
                width={1280}
                height={1280}
                className="aspect-[4/5] h-full w-full object-cover"
              />
              {/* corner caption */}
              <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full glass-pearl px-3 py-1.5">
                <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-foreground">
                  Now booking
                </span>
              </div>
              {/* bottom card */}
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-2xl glass-pearl px-4 py-3">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    Director
                  </p>
                  <p className="font-display text-base font-semibold text-foreground">
                    Dr. K. Murugesan, <span className="font-editorial text-primary">BDS</span>
                  </p>
                </div>
                <div className="flex -space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-accent text-accent" />
                  ))}
                </div>
              </div>
            </div>

            {/* floating chip — left */}
            <div className="absolute -left-6 top-1/3 hidden rounded-2xl glass-pearl p-4 shadow-card animate-float md:block">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary text-primary-foreground">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground">
                    Sterilized
                  </p>
                  <p className="text-sm font-semibold text-foreground">Hospital-grade</p>
                </div>
              </div>
            </div>

            {/* circular badge */}
            <div className="absolute -right-4 -top-4 hidden h-24 w-24 animate-[spin_18s_linear_infinite] md:block">
              <svg viewBox="0 0 100 100" className="h-full w-full">
                <defs>
                  <path id="circ" d="M 50,50 m -36,0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0" />
                </defs>
                <text className="fill-foreground font-mono text-[9px] uppercase tracking-[0.25em]">
                  <textPath href="#circ">
                    Healthy smiles · trusted care · since 2014 ·
                  </textPath>
                </text>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* marquee strip */}
      <div className="relative border-y border-border bg-ink py-5 text-ink-foreground">
        <div className="flex animate-[marquee_38s_linear_infinite] gap-12 whitespace-nowrap font-display text-2xl italic">
          {[...Array(2)].map((_, k) => (
            <div key={k} className="flex shrink-0 items-center gap-12">
              {[
                "Implants",
                "Smile Design",
                "Invisalign",
                "Root Canal",
                "Whitening",
                "Pediatric",
                "Cosmetic",
                "Orthodontics",
              ].map((w) => (
                <span key={w + k} className="flex items-center gap-12">
                  {w}
                  <span className="text-accent">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};

const Foot = ({ num, suffix, label }: { num: string; suffix: string; label: string }) => (
  <div>
    <p className="font-display text-3xl font-medium text-foreground">
      {num}
      <span className="text-accent">{suffix}</span>
    </p>
    <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
      {label}
    </p>
  </div>
);

export default Hero;
