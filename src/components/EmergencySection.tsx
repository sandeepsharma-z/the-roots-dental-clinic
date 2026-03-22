import { Phone } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const EmergencySection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="relative overflow-hidden">
      <div className="dental-gradient">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-10 w-32 h-32 rounded-full bg-background/5 animate-float" />
          <div className="absolute bottom-5 right-20 w-20 h-20 rounded-full bg-background/8 animate-pulse-soft" />
        </div>

        <div className={`container mx-auto px-4 py-16 md:py-20 text-center relative z-10 ${isVisible ? "animate-reveal-up" : "opacity-0"}`}>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground text-balance">
            Need Urgent Dental Care?
          </h2>
          <p className="text-primary-foreground/80 text-lg mt-4 max-w-lg mx-auto">
            Do not wait in pain. Our Kabul emergency dental team is available to help you get relief fast.
          </p>
          <a
            href="tel:09812009800"
            className="inline-flex items-center gap-2 mt-8 bg-background rounded-full px-8 py-3.5 text-sm font-semibold text-primary shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.97]"
          >
            <Phone size={18} />
            Call Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default EmergencySection;


