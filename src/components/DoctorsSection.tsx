import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import doctor1 from "@/assets/doctor-1.jpg";
import doctor2 from "@/assets/doctor-2.jpg";
import doctor3 from "@/assets/doctor-3.jpg";

const doctors = [
  { img: doctor1, name: "Dr. Kapil dev sharma", role: "Lead Dental Specialist", intro: "Expert in advanced dental treatments, implants, and comprehensive smile restoration." },
  { img: doctor2, name: "Dr. Farzana Rahimi", role: "Cosmetic Dentist", intro: "Specialist in smile makeovers, veneers, and natural aesthetic treatments." },
  { img: doctor3, name: "Dr. Hamid Wahidi", role: "Orthodontist", intro: "Focused on braces, aligners, and bite correction for children and adults." },
];

const DoctorsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="doctors" ref={ref} className="section-padding dental-gradient-soft relative overflow-hidden">
      <div className="absolute top-10 right-10 w-48 h-48 rounded-full bg-primary/5 animate-float pointer-events-none" />

      <div className="container mx-auto px-4">
        <div className={`text-center mb-14 ${isVisible ? "animate-reveal-up" : "opacity-0"}`}>
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">Our Team</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 text-balance">
            Meet Our Dental Experts
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {doctors.map(({ img, name, role, intro }, i) => (
            <div
              key={name}
              className={`group bg-background rounded-3xl overflow-hidden shadow-[0_4px_24px_-4px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_40px_-8px_rgba(0,0,0,0.12)] transition-all duration-400 hover:-translate-y-1 ${isVisible ? "animate-reveal-up" : "opacity-0"}`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="overflow-hidden aspect-[4/5]">
                <img src={img} alt={name} className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500" loading="lazy" />
              </div>
              <div className="p-6">
                <h3 className="font-display font-semibold text-foreground text-lg">{name}</h3>
                <p className="text-primary text-sm font-medium mt-0.5">{role}</p>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{intro}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DoctorsSection;
