import { useEffect, useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const testimonials = [
  { name: "Zahra Mohammadi", rating: 5, text: "My smile makeover at this Kabul clinic was excellent. The team explained every step clearly and the results look very natural.", treatment: "Smile Makeover" },
  { name: "Abdul Rahman", rating: 5, text: "I was nervous about root canal treatment, but the doctors handled it gently and professionally. Pain was minimal and recovery was smooth.", treatment: "Root Canal" },
  { name: "Nargis Ahmadi", rating: 5, text: "My children are comfortable during every visit. The environment is clean, respectful, and very family friendly.", treatment: "Kids Dentistry" },
  { name: "Karimullah Safi", rating: 5, text: "I got dental implants here in Kabul and the fit feels perfect. Follow-up care and communication were excellent.", treatment: "Dental Implants" },
  { name: "Laila Habibi", rating: 5, text: "The cleaning and whitening session was smooth, fast, and very professional. My smile looks brighter than ever.", treatment: "Teeth Whitening" },
  { name: "Hamidullah Noori", rating: 5, text: "From consultation to implant placement, everything was clearly explained. The doctors were patient and highly skilled.", treatment: "Implant Consultation" },
  { name: "Mina Qarizada", rating: 5, text: "The clinic is modern and the staff is respectful. I felt comfortable throughout my braces follow-up appointments.", treatment: "Braces & Aligners" },
];

const TestimonialsSection = () => {
  const { ref, isVisible } = useScrollReveal();
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", loop: false, slidesToScroll: 1 });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [snapCount, setSnapCount] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    setSnapCount(emblaApi.scrollSnapList().length);
    onSelect();

    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", () => {
      setSnapCount(emblaApi.scrollSnapList().length);
      onSelect();
    });

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const autoplay = setInterval(() => {
      if (emblaApi.canScrollNext()) {
        emblaApi.scrollNext();
      } else {
        emblaApi.scrollTo(0);
      }
    }, 4000);

    return () => clearInterval(autoplay);
  }, [emblaApi]);

  return (
    <section id="testimonials" ref={ref} className="section-padding dental-gradient-soft relative overflow-hidden">
      <div className="absolute top-0 left-1/2 w-64 h-64 rounded-full bg-primary/5 -translate-x-1/2 -translate-y-1/2 animate-pulse-soft pointer-events-none" />

      <div className="container mx-auto px-4">
        <div className={`text-center mb-14 ${isVisible ? "animate-reveal-up" : "opacity-0"}`}>
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">Testimonials</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 text-balance">
            What Our Patients Say
          </h2>
        </div>

        <div className={`max-w-6xl mx-auto ${isVisible ? "animate-reveal-up" : "opacity-0"}`}>
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {testimonials.map((item) => (
                <div
                  key={item.name}
                  className="min-w-0 flex-[0_0_100%] md:flex-[0_0_calc(50%-0.75rem)] lg:flex-[0_0_calc(33.333%-1rem)] bg-background rounded-3xl p-8 shadow-[0_8px_40px_-8px_rgba(0,0,0,0.06)] text-center"
                >
                  <div className="flex justify-center gap-1 mb-5">
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <Star key={i} size={18} className="fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-foreground text-lg leading-relaxed italic font-display">"{item.text}"</p>
                  <div className="mt-6">
                    <p className="font-semibold text-foreground">{item.name}</p>
                    <p className="text-sm text-muted-foreground">{item.treatment}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center gap-3 mt-8">
            <button
              onClick={() => emblaApi?.scrollPrev()}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors active:scale-95"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => emblaApi?.scrollNext()}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors active:scale-95"
            >
              <ChevronRight size={18} />
            </button>
          </div>

          <div className="flex justify-center gap-2 mt-4">
            {Array.from({ length: snapCount }).map((_, i) => (
              <button
                key={i}
                onClick={() => emblaApi?.scrollTo(i)}
                className={`rounded-full transition-all duration-300 ${i === selectedIndex ? "dental-gradient w-6 h-2.5" : "w-2.5 h-2.5 bg-foreground/35 hover:bg-foreground/55"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
