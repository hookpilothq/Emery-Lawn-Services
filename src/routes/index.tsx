import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-landscaping.jpg";
import stoneImg from "@/assets/project-stone.jpg";
import rockImg from "@/assets/project-rock.jpg";
import lawnImg from "@/assets/project-lawn.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Emery Lawn Services — Hardscaping & Landscaping" },
      { name: "description", content: "Professional hardscaping and landscaping services. Call Emery Lawn Services at (908) 894-9903 for a free estimate." },
      { property: "og:title", content: "Emery Lawn Services — Hardscaping & Landscaping" },
      { property: "og:description", content: "Professional hardscaping and landscaping services. Call (908) 894-9903 for a free estimate." },
      { property: "og:image", content: heroImg },
      { name: "twitter:image", content: heroImg },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[85vh] min-h-[500px] flex items-center">
        <img src={heroImg} alt="Beautiful landscaped yard with stone hardscaping" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 max-w-3xl px-6 md:px-16 lg:px-24">
          <div className="inline-flex items-center gap-2 bg-primary/20 text-primary-foreground px-4 py-1.5 rounded-full text-xs font-medium mb-6 backdrop-blur-sm border border-primary-foreground/20">
            <StarIcon /> Hardscaping & Landscaping Specialists
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-5">
            Outdoor Spaces, Built to Last
          </h1>
          <p className="text-base md:text-lg text-primary-foreground/80 max-w-xl mb-8 leading-relaxed font-[var(--font-body)]">
            From custom patios and retaining walls to complete landscape transformations, Emery Lawn Services delivers craftsmanship you can count on.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="tel:9088949903" className="bg-primary text-primary-foreground px-7 py-3.5 rounded-lg font-semibold text-sm hover:bg-primary/90 transition-colors inline-flex items-center gap-2">
              Call For Free Estimate
            </a>
            <Link to="/services" className="border border-primary-foreground/30 text-primary-foreground px-7 py-3.5 rounded-lg font-semibold text-sm hover:bg-primary-foreground/10 transition-colors">
              View Services
            </Link>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-2 font-[var(--font-body)]">What We Do</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-10">Our Specialties</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { img: stoneImg, title: "Hardscaping", desc: "Custom patios, walkways, retaining walls, and stonework that bring structure and beauty to your outdoor space." },
              { img: lawnImg, title: "Landscaping", desc: "Full landscape design, lawn care, planting, and maintenance to keep your property looking its best year-round." },
              { img: rockImg, title: "Outdoor Features", desc: "Decorative rock work, garden borders, and unique features that add character to any yard." },
            ].map((s) => (
              <div key={s.title} className="group rounded-xl overflow-hidden bg-card shadow-sm border border-border hover:shadow-md transition-shadow">
                <div className="h-56 overflow-hidden">
                  <img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" width={800} height={600} />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-foreground mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed font-[var(--font-body)]">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link to="/services" className="text-primary font-semibold text-sm hover:underline font-[var(--font-body)]">
              View All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-secondary">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-2 font-[var(--font-body)]">Why Emery</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-10">Why Customers Trust Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: "🛠️", title: "Skilled Craftsmanship", desc: "Built right the first time with attention to every detail of your project." },
              { icon: "🤝", title: "Honest & Reliable", desc: "Clear pricing, on-time arrival, and straightforward communication every step of the way." },
              { icon: "🌿", title: "Full-Service", desc: "Hardscaping and landscaping under one roof — one trusted team for your entire outdoor vision." },
            ].map((f) => (
              <div key={f.title} className="text-center p-6">
                <span className="text-4xl mb-4 block">{f.icon}</span>
                <h3 className="text-lg font-bold text-foreground mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground font-[var(--font-body)]">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">Ready to Transform Your Yard?</h2>
          <p className="text-primary-foreground/80 mb-8 font-[var(--font-body)]">
            Get a free estimate today. We'd love to hear about your project.
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

function StarIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-star fill-star" viewBox="0 0 20 20" fill="currentColor">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}
