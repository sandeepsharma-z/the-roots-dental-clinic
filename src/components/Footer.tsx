import { Phone, Mail, MapPin } from "lucide-react";

const footerLinks = {
  "Quick Links": ["Home", "About", "Treatments", "Doctors", "Contact"],
  Treatments: ["Teeth Whitening", "Dental Implants", "Braces", "Root Canal", "Smile Makeover"],
};

const Footer = () => {
  return (
    <footer className="bg-foreground text-background/70">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4 lg:col-span-1">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-lg dental-gradient flex items-center justify-center">
                <span className="font-display text-primary-foreground font-bold text-lg leading-none">D</span>
              </div>
              <span className="font-display text-xl font-semibold text-background">The Roots' Dental Clinic</span>
            </div>
            <p className="text-sm leading-relaxed">
              Premium dental care with advanced technology, certified experts, and a patient-first approach. Your smile is our passion.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-display font-semibold text-background mb-4">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a href={`#${link.toLowerCase().replace(/\s+/g, "-")}`} className="text-sm hover:text-background transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-background mb-4">Contact Us</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <MapPin size={16} className="shrink-0 mt-0.5 text-primary" />
                <span>Rohini, North Delhi, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="shrink-0 text-primary" />
                <span>098120 09800</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="shrink-0 text-primary" />
                <span>contact@rootsdental.in</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 mt-12 pt-8 text-center text-sm">
          <p>Copyright 2026 The Roots' Dental Clinic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;




