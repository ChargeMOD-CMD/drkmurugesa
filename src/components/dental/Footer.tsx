const Footer = () => (
  <footer className="relative overflow-hidden bg-ink text-ink-foreground">
    <div className="container py-20">
      <p className="font-display text-[clamp(3rem,12vw,11rem)] font-medium leading-[0.85] tracking-[-0.05em]">
        Healthy <span className="font-editorial text-accent">smiles</span>,
        <br />
        trusted <span className="font-editorial text-accent">care</span>.
      </p>

      <div className="mt-16 grid gap-10 border-t border-ink-foreground/15 pt-10 sm:grid-cols-3">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent-glow">
            The clinic
          </p>
          <p className="mt-3 font-display text-lg">Dr. K. Murugesan Dental Clinic</p>
          <p className="mt-1 text-sm text-ink-foreground/60">Chennai, Tamil Nadu</p>
        </div>
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent-glow">
            Reach us
          </p>
          <a href="tel:+919381034961" className="mt-3 block font-display text-lg hover:text-accent">
            +91 93810 34961
          </a>
          <a href="mailto:info@murugesandental.com" className="mt-1 block text-sm text-ink-foreground/60 hover:text-accent">
            info@murugesandental.com
          </a>
        </div>
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent-glow">
            Hours
          </p>
          <p className="mt-3 font-display text-lg">Mon – Sat · 9 AM – 8 PM</p>
          <p className="mt-1 text-sm text-ink-foreground/60">Sunday: Emergency only</p>
        </div>
      </div>

      <div className="mt-16 flex flex-col items-start justify-between gap-3 border-t border-ink-foreground/15 pt-8 sm:flex-row sm:items-center">
        <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink-foreground/50">
          © {new Date().getFullYear()} Dr. K. Murugesan Dental Clinic — All rights reserved
        </p>
        <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink-foreground/50">
          Healthy Smiles · Trusted Care · est. 2014
        </p>
      </div>
    </div>
  </footer>
);
export default Footer;
