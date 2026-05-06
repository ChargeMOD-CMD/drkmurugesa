import { Star } from "lucide-react";

const reviews = [
  {
    name: "Priya S.",
    role: "Smile Design",
    rating: 5,
    text: "Dr. Murugesan transformed my smile completely. The whole team made me feel at home — every step was explained, every concern heard.",
    initial: "P",
  },
  {
    name: "Rajesh K.",
    role: "Root Canal",
    rating: 5,
    text: "I was terrified of dental work for years. The procedure was completely painless and over before I knew it. I cannot recommend this clinic enough.",
    initial: "R",
  },
  {
    name: "Anita M.",
    role: "Implant",
    rating: 5,
    text: "A modern clinic with cutting-edge equipment and an old-world bedside manner. My implant looks and feels just like a real tooth.",
    initial: "A",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="relative bg-ink py-24 text-ink-foreground lg:py-32">
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-2">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent-glow">§ 04</p>
            <p className="mt-2 font-display text-sm italic text-ink-foreground/60">stories</p>
          </div>
          <div className="lg:col-span-10">
            <h2 className="font-display text-4xl font-medium leading-[1.05] tracking-[-0.03em] sm:text-6xl">
              Five thousand smiles, <br />
              and <span className="font-editorial text-accent-glow">one</span> rule —
              <span className="font-editorial italic"> patient first</span>.
            </h2>
          </div>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {reviews.map((r, i) => (
            <article
              key={r.name}
              className="group relative flex flex-col gap-6 rounded-3xl border border-ink-foreground/15 bg-ink-foreground/[0.04] p-8 transition-smooth hover:bg-ink-foreground/[0.08]"
            >
              <span className="font-display text-7xl leading-none text-accent">"</span>
              <p className="font-display text-xl italic leading-snug text-ink-foreground/90">
                {r.text}
              </p>
              <div className="mt-auto flex items-center justify-between border-t border-ink-foreground/10 pt-6">
                <div className="flex items-center gap-3">
                  <div className="grid h-11 w-11 place-items-center rounded-full bg-accent font-display text-lg font-semibold text-ink">
                    {r.initial}
                  </div>
                  <div>
                    <p className="font-display text-base text-ink-foreground">{r.name}</p>
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-foreground/50">
                      {r.role}
                    </p>
                  </div>
                </div>
                <div className="flex gap-0.5">
                  {Array.from({ length: r.rating }).map((_, idx) => (
                    <Star key={idx} className="h-3.5 w-3.5 fill-accent text-accent" />
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
