import { Sparkles, Wrench, CircleDot, SmilePlus, Scissors, Baby, Search, Star } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const treatments = [
  { icon: Sparkles, title: "Teeth Whitening", desc: "Professional whitening for a brighter, more confident smile." },
  { icon: Wrench, title: "Root Canal", desc: "Painless root canal therapy to save and restore damaged teeth." },
  { icon: CircleDot, title: "Dental Implants", desc: "Permanent tooth replacement that looks and feels natural." },
  { icon: SmilePlus, title: "Braces & Aligners", desc: "Orthodontic solutions for perfectly aligned, beautiful teeth." },
  { icon: Star, title: "Smile Makeover", desc: "Complete cosmetic transformation for your dream smile." },
  { icon: Scissors, title: "Tooth Extraction", desc: "Safe and gentle extractions with minimal recovery time." },
  { icon: Baby, title: "Kids Dentistry", desc: "Fun, friendly dental care designed just for children." },
  { icon: Search, title: "Dental Cleaning", desc: "Thorough cleaning to maintain healthy teeth and gums." },
];

const TreatmentsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="treatments" ref={ref} className="section-padding dental-gradient-soft relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-primary/5 animate-morph pointer-events-none" />
      <div className="absolute top-20 right-10 w-32 h-32 rounded-full bg-dental-aqua/8 animate-float pointer-events-none" />

      <div className="container mx-auto px-4">
        <div className={`text-center mb-14 ${isVisible ? "animate-reveal-up" : "opacity-0"}`}>
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">Our Services</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 text-balance">
            Comprehensive Dental Treatments for Every Smile
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {treatments.map(({ icon: Icon, title, desc }, i) => (
            <div
              key={title}
              className={`group bg-background rounded-2xl p-6 shadow-[0_2px_16px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_40px_-8px_rgba(0,0,0,0.12)] transition-all duration-400 hover:-translate-y-1.5 ${isVisible ? "animate-reveal-up" : "opacity-0"}`}
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/8 flex items-center justify-center mb-5 group-hover:dental-gradient group-hover:scale-105 transition-all duration-300">
                <Icon size={24} className="text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="font-display font-semibold text-foreground text-lg mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TreatmentsSection;
