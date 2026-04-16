import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Emery Lawn Services" },
      { name: "description", content: "Contact Emery Lawn Services at (908) 894-9903 for hardscaping and landscaping. Free estimates available." },
      { property: "og:title", content: "Contact — Emery Lawn Services" },
      { property: "og:description", content: "Get in touch for a free hardscaping or landscaping estimate." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="pt-20">
      <section className="section-padding bg-secondary">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-2 font-[var(--font-body)]">Get in Touch</p>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Contact Us</h1>
          <p className="text-muted-foreground max-w-2xl text-base leading-relaxed font-[var(--font-body)]">
            Ready for a free estimate? Give us a call and we'll be happy to discuss your project.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6">Contact Information</h2>
            <div className="space-y-5">
              <ContactItem icon="📞" label="Phone" value="(908) 894-9903" href="tel:9088949903" />
              <ContactItem icon="🛠️" label="Specialties" value="Hardscaping & Landscaping" />
              <ContactItem icon="💬" label="Free Estimates" value="Call anytime to discuss your project" />
            </div>
          </div>

          <div className="bg-card border border-border rounded-xl p-8 flex flex-col justify-center">
            <h3 className="text-xl font-bold text-foreground mb-3">Call for a Free Estimate</h3>
            <p className="text-sm text-muted-foreground mb-6 font-[var(--font-body)]">
              The fastest way to get started is a quick phone call. We'll discuss your project, answer questions, and schedule a visit.
            </p>
            <a
              href="tel:9088949903"
              className="bg-primary text-primary-foreground px-6 py-3.5 rounded-lg font-semibold text-sm hover:bg-primary/90 transition-colors text-center inline-flex items-center justify-center gap-2"
            >
              📞 (908) 894-9903
            </a>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">Let's Build Something Great</h2>
          <p className="text-primary-foreground/80 mb-8 font-[var(--font-body)]">
            Whether it's a new patio, a full landscape redesign, or weekly lawn care — we're ready to help.
          </p>
          <a href="tel:9088949903" className="bg-primary-foreground text-primary px-8 py-3.5 rounded-lg font-semibold text-sm hover:bg-primary-foreground/90 transition-colors inline-flex items-center gap-2">
            📞 (908) 894-9903
          </a>
        </div>
      </section>
    </div>
  );
}

function ContactItem({ icon, label, value, href }: { icon: string; label: string; value: string; href?: string }) {
  return (
    <div className="flex items-start gap-4">
      <span className="text-xl">{icon}</span>
      <div>
        <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold font-[var(--font-body)]">{label}</p>
        {href ? (
          <a href={href} className="text-foreground font-medium hover:text-primary transition-colors">{value}</a>
        ) : (
          <p className="text-foreground font-medium">{value}</p>
        )}
      </div>
    </div>
  );
}
