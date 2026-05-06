import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { CheckCircle2, CalendarCheck, Phone, Clock } from "lucide-react";

const services = [
  "Dental Checkup", "Teeth Cleaning", "Root Canal", "Dental Implants",
  "Tooth Extraction", "Teeth Whitening", "Braces & Aligners", "Smile Design",
];

const times = ["09:30 AM", "11:00 AM", "12:30 PM", "03:00 PM", "04:30 PM", "06:00 PM", "07:30 PM"];

const Booking = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", date: "", time: "", service: "", notes: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.date || !form.time || !form.service) {
      toast.error("Please fill all required fields");
      return;
    }
    setSubmitted(true);
    toast.success("Appointment request received!");
  };

  return (
    <section id="book" className="relative overflow-hidden py-24 lg:py-32">
      <div aria-hidden className="aurora-orb pointer-events-none absolute -right-20 top-20 h-80 w-80 opacity-40" />

      <div className="container grid gap-16 lg:grid-cols-12 lg:gap-12">
        {/* left rail */}
        <div className="lg:col-span-2">
          <div className="sticky top-28">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">§ 03</p>
            <p className="mt-2 font-display text-sm italic text-muted-foreground">
              reserve a chair
            </p>
          </div>
        </div>

        <div className="space-y-8 lg:col-span-4">
          <span className="eyebrow">Book a visit</span>
          <h2 className="font-display text-4xl font-medium leading-[1.05] tracking-[-0.03em] text-foreground sm:text-5xl">
            Pick a time —
            <span className="font-editorial text-primary"> we'll do the rest</span>.
          </h2>
          <p className="text-foreground/70 leading-relaxed">
            We confirm every appointment by WhatsApp within an hour. Walk-ins welcome,
            but a booked chair waits just for you.
          </p>

          <div className="space-y-3 pt-4">
            <div className="flex items-center gap-4 rounded-2xl border border-border bg-card p-4">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-secondary text-primary">
                <Clock className="h-5 w-5" strokeWidth={1.5} />
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  Clinic hours
                </p>
                <p className="text-foreground">Mon – Sat · 9 AM – 8 PM</p>
              </div>
            </div>
            <a
              href="tel:+919381034961"
              className="flex items-center gap-4 rounded-2xl border border-border bg-card p-4 transition-smooth hover:border-primary/40"
            >
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-secondary text-primary">
                <Phone className="h-5 w-5" strokeWidth={1.5} />
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  Or call directly
                </p>
                <p className="text-foreground">+91 93810 34961</p>
              </div>
            </a>
          </div>
        </div>

        <div className="lg:col-span-6">
          <div className="rounded-[2rem] border border-border bg-card p-6 shadow-card sm:p-10">
            {submitted ? (
              <div className="py-12 text-center">
                <div className="mx-auto mb-6 grid h-16 w-16 place-items-center rounded-full bg-gradient-rose text-ink shadow-rose">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="font-display text-3xl text-foreground">
                  Beautifully done, <span className="font-editorial text-primary">{form.name}</span>.
                </h3>
                <p className="mt-3 text-foreground/70">
                  We'll confirm your <strong>{form.service}</strong> appointment on{" "}
                  <strong>{form.date}</strong> at <strong>{form.time}</strong> via WhatsApp.
                </p>
                <Button
                  className="mt-8 rounded-full"
                  variant="outline"
                  onClick={() => { setSubmitted(false); setForm({ name: "", phone: "", date: "", time: "", service: "", notes: "" }); }}
                >
                  Book another
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex items-center justify-between border-b border-border pb-4">
                  <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent">
                    Appointment form
                  </p>
                  <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                    No · 2026-{String(Math.floor(Math.random() * 900) + 100)}
                  </p>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Full name" num="01">
                    <Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" required />
                  </Field>
                  <Field label="Phone" num="02">
                    <Input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+91 …" required />
                  </Field>
                  <Field label="Preferred date" num="03">
                    <Input type="date" value={form.date} min={new Date().toISOString().split("T")[0]} onChange={(e) => setForm({ ...form, date: e.target.value })} required />
                  </Field>
                  <Field label="Preferred time" num="04">
                    <Select value={form.time} onValueChange={(v) => setForm({ ...form, time: v })}>
                      <SelectTrigger><SelectValue placeholder="Select time" /></SelectTrigger>
                      <SelectContent>{times.map((t) => <SelectItem key={t} value={t}>{t}</SelectItem>)}</SelectContent>
                    </Select>
                  </Field>
                </div>
                <Field label="Service" num="05">
                  <Select value={form.service} onValueChange={(v) => setForm({ ...form, service: v })}>
                    <SelectTrigger><SelectValue placeholder="Select service" /></SelectTrigger>
                    <SelectContent>{services.map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}</SelectContent>
                  </Select>
                </Field>
                <Field label="Notes" num="06" optional>
                  <Textarea value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} placeholder="Anything we should know?" rows={3} />
                </Field>

                <Button
                  type="submit"
                  size="lg"
                  className="h-14 w-full rounded-full bg-ink text-base text-ink-foreground hover:bg-primary"
                >
                  <CalendarCheck className="mr-2 h-5 w-5" /> Request appointment
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const Field = ({ label, num, optional, children }: { label: string; num: string; optional?: boolean; children: React.ReactNode }) => (
  <div className="space-y-2">
    <Label className="flex items-baseline gap-2 text-sm font-medium text-foreground">
      <span className="font-mono text-[10px] text-accent">{num}</span>
      {label}
      {optional && <span className="font-mono text-[10px] text-muted-foreground">opt.</span>}
    </Label>
    {children}
  </div>
);

export default Booking;
