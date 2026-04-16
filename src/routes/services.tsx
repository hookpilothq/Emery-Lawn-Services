import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Emery Lawn Services" },
      { name: "description", content: "Hardscaping and landscaping services including patios, walkways, retaining walls, lawn care, garden design, and more. Call (908) 894-9903." },
      { property: "og:title", content: "Services — Emery Lawn Services" },
      { property: "og:description", content: "Hardscaping and landscaping services including patios, walkways, retaining walls, lawn care, and more." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  { title: "Patios & Walkways", desc: "Custom paver patios, stone walkways, and entryways designed for beauty and durability.", icon: "🧱" },
  { title: "Retaining Walls", desc: "Engineered retaining walls that solve grade challenges and add structure to your landscape.", icon: "🏗️" },
  { title: "Stone Hardscaping", desc: "Natural and manufactured stonework for fire pits, seat walls, steps, and more.", icon: "🪨" },
  { title: "Landscape Design", desc: "Thoughtful designs tailored to your property, lifestyle, and vision.", icon: "🎨" },
  { title: "Lawn Care & Maintenance", desc: "Mowing, edging, trimming, and seasonal cleanups to keep your lawn pristine.", icon: "🌿" },
  { title: "Planting & Garden Beds", desc: "Trees, shrubs, perennials, and garden bed installation that thrive in your space.", icon: "🌸" },
  { title: "Mulching & Edging", desc: "Fresh mulch and crisp bed edges that instantly upgrade your curb appeal.", icon: "🍂" },
  { title: "Sod & Seeding", desc: "New lawn installation with quality sod or premium seed blends.", icon: "🌱" },
  { title: "Drainage & Grading", desc: "Proper grading and drainage solutions to protect your property from water damage.", icon: "⛰️" },
  { title: "Outdoor Features", desc: "Decorative rock, borders, and custom features that make your yard one of a kind.", icon: "✨" },
];

function ServicesPage() {
  return (
    <div className="pt-20">
      <section className="section-padding bg-secondary">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-2 font-[var(--font-body)]">What We Offer</p>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Services</h1>
          <p className="text-muted-foreground max-w-2xl text-base leading-relaxed font-[var(--font-body)]">
            From hardscaping to full landscape transformations, we offer a complete range of professional services for residential properties.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-shadow">
              <span className="text-3xl mb-4 block">{s.icon}</span>
              <h3 className="text-lg font-bold text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-[var(--font-body)]">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-padding bg-primary text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">Need a Custom Solution?</h2>
          <p className="text-primary-foreground/80 mb-8 font-[var(--font-body)]">
            Every property is unique. Call us for a free consultation and estimate.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="tel:9088949903" className="bg-primary-foreground text-primary px-8 py-3.5 rounded-lg font-semibold text-sm hover:bg-primary-foreground/90 transition-colors">
              Call (908) 894-9903
            </a>
            <Link to="/contact" className="border border-primary-foreground/30 text-primary-foreground px-8 py-3.5 rounded-lg font-semibold text-sm hover:bg-primary-foreground/10 transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
