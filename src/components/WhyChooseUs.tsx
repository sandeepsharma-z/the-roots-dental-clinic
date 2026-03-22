import { Syringe, Cpu, ShieldCheck, Users, HeartHandshake, Armchair } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const reasons = [
  { icon: Syringe, title: "Painless Procedures", desc: "Advanced anesthesia and gentle techniques for a comfortable experience." },
  { icon: Cpu, title: "Advanced Technology", desc: "Digital X-rays, 3D scanning, and laser treatments for precision results." },
  { icon: ShieldCheck, title: "Strict Hygiene", desc: "Hospital-grade sterilization protocols exceeding industry standards." },
  { icon: Users, title: "Expert Team", desc: "Board-certified specialists with decades of combined experience." },
  { icon: HeartHandshake, title: "Personalized Care", desc: "Tailored treatment plans designed around your unique needs and goals." },
  { icon: Armchair, title: "Patient Comfort", desc: "Relaxing environment with amenities to ease dental anxiety." },
];

const WhyChooseUs = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="section-padding relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-1/2 left-0 w-48 h-48 rounded-full bg-dental-mint/6 animate-pulse-soft pointer-events-none -translate-y-1/2" />

      <div className="container mx-auto px-4">
        <div className={`text-center mb-14 ${isVisible ? "animate-reveal-up" : "opacity-0"}`}>
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">Why Choose Us</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 text-balance">
            Your Comfort Is Our Priority
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map(({ icon: Icon, title, desc }, i) => (
            <div
              key={title}
              className={`group flex gap-4 p-5 rounded-2xl hover:bg-secondary transition-all duration-300 ${isVisible ? "animate-reveal-up" : "opacity-0"}`}
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="w-12 h-12 shrink-0 rounded-xl dental-gradient flex items-center justify-center shadow-md shadow-primary/15">
                <Icon size={20} className="text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-foreground mb-1">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
