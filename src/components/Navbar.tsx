import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = ["Home", "About", "Treatments", "Doctors", "Testimonials", "Contact"];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-xl shadow-[0_2px_20px_-4px_rgba(0,0,0,0.08)]"
          : "bg-background/70 backdrop-blur-md"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between h-16 md:h-[72px]">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg dental-gradient flex items-center justify-center">
            <span className="font-display text-primary-foreground font-bold text-lg leading-none">D</span>
          </div>
          <span className="font-display text-sm md:text-base lg:text-lg font-semibold text-foreground tracking-tight leading-tight">
            The Roots' <span className="dental-gradient-text">Dental Clinic</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="px-3.5 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-muted/60"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#appointment"
          className="hidden lg:inline-flex items-center dental-gradient rounded-full px-6 py-2.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
        >
          Book Appointment
        </a>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-background border-t border-border animate-reveal-up">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMobileOpen(false)}
                className="px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/60 rounded-lg transition-colors"
              >
                {item}
              </a>
            ))}
            <a
              href="#appointment"
              onClick={() => setMobileOpen(false)}
              className="mt-2 dental-gradient rounded-full px-6 py-3 text-sm font-semibold text-primary-foreground text-center"
            >
              Book Appointment
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;


