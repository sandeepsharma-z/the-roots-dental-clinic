import { useState } from "react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import beforeImage from "@/assets/teeth-before.jpg";
import afterImage from "@/assets/teeth-after.jpg";
import clinicEquipment from "@/assets/equipment-right-new.jpg";

const BeforeAfterSection = () => {
  const { ref, isVisible } = useScrollReveal();
  const [reveal, setReveal] = useState(50);

  return (
    <section ref={ref} className="section-padding relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-72 h-72 rounded-full bg-dental-aqua/5 animate-morph pointer-events-none" />

      <div className="container mx-auto px-4">
        <div className={`text-center mb-14 ${isVisible ? "animate-reveal-up" : "opacity-0"}`}>
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">Results</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 text-balance">
            Real Smile Transformations
          </h2>
          <p className="text-muted-foreground mt-3 max-w-lg mx-auto">See the remarkable results our patients have achieved through our advanced dental treatments.</p>
        </div>

        <div className={`grid md:grid-cols-2 gap-8 ${isVisible ? "animate-reveal-up" : "opacity-0"}`}>
          <div className="rounded-3xl overflow-hidden shadow-xl bg-background">
            <div className="relative h-72 md:h-96 overflow-hidden">
              <img
                src={beforeImage}
                alt="Before smile result"
                className="absolute inset-0 w-full h-full object-cover brightness-90 saturate-75"
                loading="lazy"
              />

              <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - reveal}% 0 0)` }}>
                <img
                  src={afterImage}
                  alt="After smile result"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              <div className="absolute inset-y-0 w-0.5 bg-white/90 shadow-[0_0_0_1px_rgba(0,0,0,0.2)]" style={{ left: `${reveal}%` }} />

              <div
                className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full border-2 border-white bg-primary text-primary-foreground flex items-center justify-center shadow-lg"
                style={{ left: `${reveal}%` }}
              >
                <span className="text-xs font-bold">?</span>
              </div>

              <input
                type="range"
                min={0}
                max={100}
                value={reveal}
                onChange={(e) => setReveal(Number(e.target.value))}
                className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize"
                aria-label="Before and after slider"
              />

              <div className="absolute top-3 left-3 text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-foreground/80 text-background">
                Before
              </div>
              <div className="absolute top-3 right-3 text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-foreground/80 text-background">
                After
              </div>
            </div>

            <div className="p-5 bg-background">
              <h3 className="font-display font-semibold text-foreground">Dental Veneers Transformation</h3>
              <p className="text-sm text-muted-foreground mt-1">Drag the center handle to compare the smile before and after treatment.</p>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-xl group">
            <img src={clinicEquipment} alt="Advanced dental equipment" className="w-full h-72 md:h-96 object-cover group-hover:scale-[1.02] transition-transform duration-500" loading="lazy" />
            <div className="p-5 bg-background">
              <h3 className="font-display font-semibold text-foreground">State-of-the-Art Equipment</h3>
              <p className="text-sm text-muted-foreground mt-1">Advanced technology for precise, comfortable treatments</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;

