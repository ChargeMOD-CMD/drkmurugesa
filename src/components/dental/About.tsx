import { GraduationCap, Award, Stethoscope, Languages, Quote } from "lucide-react";

const items = [
  { icon: GraduationCap, label: "Education", value: "BDS · MDS" },
  { icon: Award, label: "Practice", value: "10+ Years" },
  { icon: Stethoscope, label: "Focus", value: "Implants · RCT · Cosmetic" },
  { icon: Languages, label: "Languages", value: "Tamil · English" },
];

const About = () => {
  return (
    <section id="about" className="relative py-24 lg:py-32">
      <div className="container grid gap-16 lg:grid-cols-12 lg:gap-12">
        {/* left rail — section number */}
        <div className="lg:col-span-2">
          <div className="sticky top-28">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">§ 01</p>
            <p className="mt-2 font-display text-sm italic text-muted-foreground">
              the dentist
            </p>
          </div>
        </div>

        <div className="space-y-8 lg:col-span-6">
          <span className="eyebrow">Meet the practice</span>
          <h2 className="font-display text-4xl font-medium leading-[1.05] tracking-[-0.03em] text-foreground sm:text-5xl">
            A decade of{" "}
            <span className="font-editorial text-primary">unhurried</span>{" "}
            dentistry —
            <br className="hidden sm:block" /> measured in smiles, not minutes.
          </h2>

          <div className="space-y-5 text-lg leading-relaxed text-foreground/75">
            <p className="first-letter:float-left first-letter:mr-3 first-letter:font-display first-letter:text-6xl first-letter:font-medium first-letter:leading-[0.85] first-letter:text-primary">
              Dr. K. Murugesan trained as a surgeon and stayed as a craftsman. The clinic
              he built in Chennai is a quiet room with serious tools — where every patient
              is first asked, then treated.
            </p>
            <p>
              From a routine cleaning to a full smile design, the philosophy is the same:{" "}
              <span className="ink-underline font-medium text-foreground">
                listen carefully, work precisely, explain everything
              </span>
              .
            </p>
          </div>

          <figure className="mt-10 border-l-2 border-accent pl-6">
            <Quote className="mb-3 h-6 w-6 text-accent" />
            <blockquote className="font-display text-2xl italic leading-snug text-foreground">
              "I'd rather spend an extra ten minutes than redo a tooth in ten years."
            </blockquote>
            <figcaption className="mt-4 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              — Dr. K. Murugesan
            </figcaption>
          </figure>
        </div>

        {/* right — credentials grid */}
        <div className="lg:col-span-4">
          <div className="grid grid-cols-2 gap-3">
            {items.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="group rounded-3xl border border-border bg-card p-5 shadow-soft transition-smooth hover:-translate-y-1 hover:border-primary/40 hover:shadow-card"
              >
                <Icon className="h-5 w-5 text-accent" strokeWidth={1.5} />
                <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  {label}
                </p>
                <p className="mt-1 font-display text-base text-foreground">{value}</p>
              </div>
            ))}
          </div>

          <div className="mt-3 rounded-3xl bg-ink p-6 text-ink-foreground">
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent-glow">
              Certifications
            </p>
            <p className="mt-3 font-display text-lg leading-snug">
              Member, <span className="italic">Indian Dental Association</span> · Certified
              in <span className="italic">Advanced Implantology</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
