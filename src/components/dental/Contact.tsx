import { Phone, Mail, MapPin, Clock, MessageCircle, ArrowUpRight } from "lucide-react";

const items = [
  { icon: Phone, title: "Phone", value: "+91 93810 34961", href: "tel:+919381034961" },
  { icon: MessageCircle, title: "WhatsApp", value: "+91 93810 34961", href: "https://wa.me/919381034961" },
  { icon: Mail, title: "Email", value: "info@murugesandental.com", href: "mailto:info@murugesandental.com" },
  { icon: MapPin, title: "Address", value: "Chennai, Tamil Nadu, India" },
  { icon: Clock, title: "Hours", value: "Mon–Sat · 9 AM – 8 PM" },
];

const Contact = () => {
  return (
    <section id="contact" className="relative py-24 lg:py-32">
      <div className="container grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-2">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">§ 05</p>
          <p className="mt-2 font-display text-sm italic text-muted-foreground">visit</p>
        </div>

        <div className="lg:col-span-10">
          <span className="eyebrow">Find us</span>
          <h2 className="mt-5 max-w-3xl font-display text-4xl font-medium leading-[1.05] tracking-[-0.03em] text-foreground sm:text-5xl">
            A quiet room with <span className="font-editorial text-primary">serious</span> tools — in the heart of Chennai.
          </h2>

          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            <div className="space-y-2">
              {items.map((it) => {
                const Inner = (
                  <div className="group flex items-center justify-between border-b border-border py-5 transition-smooth hover:border-primary">
                    <div className="flex items-center gap-5">
                      <it.icon className="h-5 w-5 text-accent" strokeWidth={1.5} />
                      <div>
                        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                          {it.title}
                        </p>
                        <p className="font-display text-lg text-foreground">{it.value}</p>
                      </div>
                    </div>
                    {it.href && (
                      <ArrowUpRight className="h-5 w-5 text-foreground/40 transition-smooth group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-primary" />
                    )}
                  </div>
                );
                return it.href ? (
                  <a key={it.title} href={it.href}>{Inner}</a>
                ) : (
                  <div key={it.title}>{Inner}</div>
                );
              })}
            </div>

            <div className="overflow-hidden rounded-3xl border border-border shadow-card">
              <iframe
                title="Clinic Location"
                src="https://www.google.com/maps?q=Chennai,Tamil+Nadu&output=embed"
                className="h-full min-h-[460px] w-full grayscale-[20%]"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
