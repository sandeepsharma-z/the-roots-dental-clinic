import { useEffect, useState } from "react";
import { Shield, Cpu, Users } from "lucide-react";
import heroDentist from "@/assets/roots-hero.jpeg";

const HeroSection = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section id="home" className="relative overflow-hidden bg-dental-warm">
      {/* Decorative shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-[10%] w-72 h-72 rounded-full bg-primary/5 animate-morph" />
        <div className="absolute bottom-10 right-[5%] w-96 h-96 rounded-full bg-dental-aqua/5 animate-float-slow" />
        <div className="absolute top-1/2 left-1/2 w-40 h-40 rounded-full bg-dental-mint/5 animate-pulse-soft" />
        {/* Wave SVG */}
        <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 120" fill="none" preserveAspectRatio="none">
          <path d="M0,80 C360,120 720,40 1080,80 C1260,100 1380,60 1440,80 L1440,120 L0,120 Z" fill="hsl(0 0% 100%)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 pt-8 pb-16 md:pt-10 md:pb-20 lg:pt-12 lg:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <div className={`space-y-6 md:space-y-8 transition-all duration-700 lg:-translate-y-6 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary tracking-wide uppercase">
              <span className="w-1.5 h-1.5 rounded-full dental-gradient" />
              Trusted Dental Excellence
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-foreground leading-[1.1] text-balance">
              Healthy Smiles Begin With{" "}
              <span className="dental-gradient-text inline-block">Expert Dental Care</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-lg text-pretty">
              Experience painless treatments with advanced technology, certified experts, and a commitment to your comfort and well-being.
            </p>
            <p className="text-sm font-medium text-primary/90 max-w-xl">
              The Roots' Dental Clinic & Implant center
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href="#appointment"
                className="dental-gradient inline-flex items-center justify-center rounded-full px-8 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/35 transition-all duration-300 hover:scale-[1.02] active:scale-[0.97]"
              >
                Book Appointment
              </a>
              <a
                href="#treatments"
                className="inline-flex items-center justify-center rounded-full px-8 py-3.5 text-sm font-semibold text-foreground border-2 border-border bg-background hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 active:scale-[0.97]"
              >
                View Treatments
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-4 pt-4">
              {[
                { icon: Shield, label: "Certified Dentists" },
                { icon: Cpu, label: "Advanced Technology" },
                { icon: Users, label: "5,000+ Happy Patients" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon size={16} className="text-primary" />
                  </div>
                  <span className="font-medium">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className={`relative transition-all duration-700 delay-200 lg:-translate-y-6 ${loaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl shadow-primary/10">
              <img src={heroDentist} alt="The Roots' Dental Clinic treatment environment" className="w-full h-auto object-cover aspect-square" loading="eager" />
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-2xl dental-gradient opacity-20 animate-float" />
            <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-dental-aqua/20 animate-float-slow" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;


