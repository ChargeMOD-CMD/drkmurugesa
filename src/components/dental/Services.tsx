import {
  Stethoscope, Sparkles, Activity, Wrench, Scissors, Smile, Grid3x3, Heart, ArrowUpRight,
} from "lucide-react";

const services = [
  { num: "01", icon: Stethoscope, title: "Dental Checkup", desc: "Comprehensive oral exams to keep your smile healthy.", from: "₹500" },
  { num: "02", icon: Sparkles, title: "Teeth Cleaning", desc: "Professional scaling & polishing for fresh, healthy gums.", from: "₹1,200" },
  { num: "03", icon: Activity, title: "Root Canal", desc: "Painless, single-sitting RCT with rotary endodontics.", from: "₹4,500" },
  { num: "04", icon: Wrench, title: "Dental Implants", desc: "Permanent tooth replacement that looks & feels natural.", from: "₹25,000" },
  { num: "05", icon: Scissors, title: "Tooth Extraction", desc: "Safe, gentle removal — surgical & wisdom teeth too.", from: "₹800" },
  { num: "06", icon: Smile, title: "Teeth Whitening", desc: "Brighten your smile by several shades in one visit.", from: "₹6,000" },
  { num: "07", icon: Grid3x3, title: "Braces & Aligners", desc: "Metal, ceramic, or invisible — straight teeth your way.", from: "₹35,000" },
  { num: "08", icon: Heart, title: "Smile Design", desc: "Custom cosmetic makeovers crafted to your facial features.", from: "On consult" },
];

const Services = () => {
  return (
    <section id="services" className="relative bg-gradient-soft py-24 lg:py-32">
      <div className="container">
        {/* editorial header */}
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-2">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">§ 02</p>
            <p className="mt-2 font-display text-sm italic text-muted-foreground">the menu</p>
          </div>
          <div className="lg:col-span-7">
            <span className="eyebrow">A complete practice</span>
            <h2 className="mt-5 font-display text-4xl font-medium leading-[1.05] tracking-[-0.03em] text-foreground sm:text-5xl">
              Eight services, <span className="font-editorial text-primary">one</span> calm chair.
            </h2>
          </div>
          <div className="lg:col-span-3">
            <p className="text-foreground/70">
              From a five-minute polish to a full mouth rehabilitation — every treatment
              is delivered with the same patience and protocol.
            </p>
          </div>
        </div>

        {/* services list — editorial rows on desktop, cards on mobile */}
        <div className="mt-16 overflow-hidden rounded-3xl border border-border bg-card/60 backdrop-blur-sm">
          {services.map(({ num, icon: Icon, title, desc, from }, i) => (
            <a
              key={title}
              href="#book"
              className="group relative grid grid-cols-12 items-center gap-4 border-b border-border/60 px-6 py-7 transition-smooth last:border-0 hover:bg-background sm:gap-6 sm:px-10 sm:py-8"
            >
              <span className="col-span-2 font-mono text-xs text-accent sm:col-span-1">
                {num}
              </span>
              <div className="col-span-10 flex items-center gap-4 sm:col-span-4">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-secondary text-primary transition-smooth group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-5 w-5" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-xl text-foreground sm:text-2xl">
                  {title}
                </h3>
              </div>
              <p className="col-span-12 hidden text-foreground/65 sm:col-span-4 sm:block">
                {desc}
              </p>
              <div className="col-span-12 flex items-center justify-between sm:col-span-3 sm:justify-end sm:gap-6">
                <span className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  from <span className="text-foreground">{from}</span>
                </span>
                <ArrowUpRight className="h-5 w-5 text-foreground/50 transition-smooth group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-primary" />
              </div>
              {/* bottom marker on hover */}
              <span className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-primary transition-transform duration-500 group-hover:scale-x-100" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
