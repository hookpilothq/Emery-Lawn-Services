import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="bg-earth text-earth-foreground">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h3 className="text-xl font-bold mb-3">Emery Lawn Services</h3>
          <p className="text-sm opacity-80 leading-relaxed">
            Professional hardscaping and landscaping. Quality craftsmanship and dependable service for every project, big or small.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider opacity-70">Quick Links</h4>
          <nav className="flex flex-col gap-2">
            <Link to="/" className="text-sm opacity-80 hover:opacity-100 transition-opacity">Home</Link>
            <Link to="/services" className="text-sm opacity-80 hover:opacity-100 transition-opacity">Services</Link>
            <Link to="/contact" className="text-sm opacity-80 hover:opacity-100 transition-opacity">Contact</Link>
          </nav>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider opacity-70">Contact</h4>
          <div className="flex flex-col gap-2 text-sm opacity-80">
            <a href="tel:9088949903" className="hover:opacity-100 transition-opacity">(908) 894-9903</a>
            <p>Free estimates available</p>
          </div>
        </div>
      </div>
      <div className="border-t border-earth-foreground/10 text-center py-5 text-xs opacity-50">
        © {new Date().getFullYear()} Emery Lawn Services. All rights reserved.
      </div>
    </footer>
  );
}
