import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const ContactSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="contact" ref={ref} className="section-padding relative overflow-hidden bg-dental-warm">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-14 ${isVisible ? "animate-reveal-up" : "opacity-0"}`}>
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">Contact</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 text-balance">
            Visit Our Clinic
          </h2>
        </div>

        <div className={`grid lg:grid-cols-2 gap-10 ${isVisible ? "animate-reveal-up" : "opacity-0"}`}>
          {/* Info */}
          <div className="space-y-6">
            {[
              { icon: MapPin, label: "Address", value: "Rohini, North Delhi, India" },
              { icon: Phone, label: "Phone", value: "098120 09800" },
              { icon: Mail, label: "Email", value: "contact@rootsdental.in" },
              { icon: Clock, label: "Hours", value: "Sat-Thu: 9:00 AM - 7:00 PM | Fri: Closed" },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex gap-4">
                <div className="w-12 h-12 shrink-0 rounded-xl dental-gradient flex items-center justify-center shadow-md shadow-primary/15">
                  <Icon size={20} className="text-primary-foreground" />
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">{label}</p>
                  <p className="text-muted-foreground text-sm mt-0.5">{value}</p>
                </div>
              </div>
            ))}

            <a
              href="https://maps.google.com/?q=Shar-e-Naw,+Kabul,+Afghanistan"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 dental-gradient rounded-full px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 hover:shadow-xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.97] mt-4"
            >
              <MapPin size={16} />
              Get Directions
            </a>
          </div>

          {/* Google Map */}
          <div className="rounded-2xl overflow-hidden shadow-xl bg-muted h-72 lg:h-auto min-h-[320px]">
            <iframe
              title="The Roots' Dental Clinic Location"
              src="https://www.google.com/maps?q=Shar-e-Naw,+Kabul,+Afghanistan&output=embed"
              className="w-full h-full min-h-[320px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;



