import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import clinicInterior from "@/assets/equipment-right-new.jpg";
import clinicReception from "@/assets/clinic-reception.jpg";
import clinicEquipment from "@/assets/clinic-equipment.jpg";

const images = [
  { src: clinicInterior, alt: "Treatment room", span: "md:col-span-2 md:row-span-2" },
  { src: clinicReception, alt: "Reception area", span: "" },
  { src: clinicEquipment, alt: "Modern equipment", span: "" },
  {
    src: "https://img.freepik.com/free-photo/young-female-patient-with-open-mouth-examining-dental-inspection-dentist-office_496169-976.jpg?t=st=1774174377~exp=1774177977~hmac=862ea82089283e9d2ae2bfe91c48073574c53621584d18c7e3e1416c930b7762&w=2000",
    alt: "Dental inspection in clinic",
    span: "",
  },
  {
    src: "https://img.freepik.com/free-photo/dentist-making-professional-teeth-cleaning-withb-cotton-female-young-patient-dental-office_496169-907.jpg?t=st=1774174298~exp=1774177898~hmac=06af741d7b052ab667dc845958d5277228882dcde02cd6e58bc225f6bb15180e&w=2000",
    alt: "Professional teeth cleaning",
    span: "",
  },
];

const GallerySection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="section-padding relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-14 ${isVisible ? "animate-reveal-up" : "opacity-0"}`}>
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">Our Clinic</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 text-balance">
            A Glimpse Inside The Roots' Dental Clinic
          </h2>
        </div>

        <div className={`grid md:grid-cols-4 gap-4 ${isVisible ? "animate-reveal-up" : "opacity-0"}`}>
          {images.map(({ src, alt, span }, i) => (
            <div key={i} className={`group rounded-2xl overflow-hidden ${span}`}>
              <img
                src={src}
                alt={alt}
                className="w-full h-full object-cover min-h-[200px] group-hover:scale-[1.03] transition-transform duration-500"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;


