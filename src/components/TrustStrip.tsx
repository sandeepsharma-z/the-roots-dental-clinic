import { Heart, Stethoscope, Monitor, DollarSign } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const highlights = [
  { icon: Heart, title: "Painless Treatment", desc: "Gentle care with minimal discomfort" },
  { icon: Stethoscope, title: "Experienced Dentists", desc: "Board-certified professionals" },
  { icon: Monitor, title: "Modern Equipment", desc: "Latest dental technology" },
  { icon: DollarSign, title: "Affordable Care", desc: "Flexible payment options" },
];

const TrustStrip = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="relative z-10 -mt-1">
      <div className="container mx-auto px-4">
        <div className={`grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 ${isVisible ? "animate-reveal-up" : "opacity-0"}`}>
          {highlights.map(({ icon: Icon, title, desc }, i) => (
            <div
              key={title}
              className="group bg-background rounded-2xl p-6 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_32px_-4px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="w-12 h-12 rounded-xl dental-gradient flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300">
                <Icon size={22} className="text-primary-foreground" />
              </div>
              <h3 className="font-display font-semibold text-foreground text-base mb-1">{title}</h3>
              <p className="text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustStrip;
