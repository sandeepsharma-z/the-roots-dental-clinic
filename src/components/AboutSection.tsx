import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import clinicInterior from "@/assets/roots-about.jpeg";
import clinicReception from "@/assets/roots-hero.jpeg";

const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "5,000+", label: "Patients Treated" },
  { value: "98%", label: "Patient Satisfaction" },
];

const AboutSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="about" ref={ref} className="section-padding relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-dental-teal-light/40 -translate-y-1/2 translate-x-1/3 animate-float-slow pointer-events-none" />

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Images */}
          <div className={`relative ${isVisible ? "animate-reveal-left" : "opacity-0"}`}>
            <div className="relative">
              <img src={clinicInterior} alt="Modern dental treatment room" className="rounded-2xl shadow-xl w-full h-72 md:h-96 object-cover" loading="lazy" />
              <img
                src={clinicReception}
                alt="Dental clinic reception"
                className="absolute -bottom-8 -right-4 md:-right-8 w-48 md:w-64 h-36 md:h-44 rounded-2xl shadow-xl object-cover border-4 border-background"
                loading="lazy"
              />
            </div>
          </div>

          {/* Text */}
          <div className={`space-y-6 ${isVisible ? "animate-reveal-right" : "opacity-0"}`}>
            <span className="text-primary text-sm font-semibold tracking-widest uppercase">About Our Clinic</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground leading-tight text-balance">
              Trusted Dental Care in Rohini Since 2013
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed text-pretty">
              At The Roots' Dental Clinic in North Delhi - Rohini, our expert team combines clinical excellence with genuine compassion. Our state-of-the-art facility is designed for your comfort, featuring the latest diagnostic and treatment technology alongside a warm, welcoming atmosphere.
            </p>
            <p className="text-muted-foreground leading-relaxed text-pretty">
              Every patient receives a personalized treatment plan crafted by our experienced team. We maintain the highest hygiene standards and use only premium materials to ensure lasting results.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              {stats.map(({ value, label }) => (
                <div key={label} className="text-center p-4 rounded-xl bg-secondary">
                  <div className="font-display text-2xl md:text-3xl font-bold dental-gradient-text">{value}</div>
                  <div className="text-xs md:text-sm text-muted-foreground mt-1">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;




