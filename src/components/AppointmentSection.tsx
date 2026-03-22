import { useState } from "react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const AppointmentSection = () => {
  const { ref, isVisible } = useScrollReveal();
  const [formData, setFormData] = useState({ name: "", phone: "", treatment: "", date: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! We'll contact you shortly to confirm your appointment.");
    setFormData({ name: "", phone: "", treatment: "", date: "" });
  };

  return (
    <section id="appointment" ref={ref} className="section-padding relative overflow-hidden">
      {/* Gradient BG */}
      <div className="absolute inset-0 dental-gradient opacity-[0.03]" />
      <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-primary/5 animate-float pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-56 h-56 rounded-full bg-dental-aqua/5 animate-morph pointer-events-none" />

      <div className="container mx-auto px-4">
        <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${isVisible ? "animate-reveal-up" : "opacity-0"}`}>
          {/* Text */}
          <div className="space-y-6">
            <span className="text-primary text-sm font-semibold tracking-widest uppercase">Book Now</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground leading-tight text-balance">
              Schedule Your Consultation Today
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed text-pretty">
              Take the first step towards a healthier, brighter smile. Our friendly team is ready to help you find the perfect treatment plan.
            </p>
            <div className="space-y-3 pt-2">
              {["Same-day appointments available", "Free initial consultation", "Flexible payment plans"].map((item) => (
                <div key={item} className="flex items-center gap-3 text-foreground">
                  <div className="w-5 h-5 rounded-full dental-gradient flex items-center justify-center shrink-0">
                    <svg className="w-3 h-3 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="font-medium text-sm">{item}</span>
                </div>
              ))}
            </div>
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              <div className="rounded-2xl border border-border/70 bg-background/70 p-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-primary">Clinic Location</p>
                <p className="mt-1 text-sm font-medium text-foreground">Rohini, North Delhi</p>
                <p className="text-xs text-muted-foreground">The Roots' Dental Clinic</p>
              </div>
              <div className="rounded-2xl border border-border/70 bg-background/70 p-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-primary">Working Hours</p>
                <p className="mt-1 text-sm font-medium text-foreground">Sat-Thu: 9:00 AM - 7:00 PM</p>
                <p className="text-xs text-muted-foreground">Friday Closed</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-background rounded-3xl p-8 shadow-[0_8px_40px_-8px_rgba(0,0,0,0.08)] space-y-5">
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Full Name</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full rounded-xl border border-border bg-muted/30 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Phone Number</label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full rounded-xl border border-border bg-muted/30 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                placeholder="098120 09800"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Treatment</label>
              <select
                required
                value={formData.treatment}
                onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
                className="w-full rounded-xl border border-border bg-muted/30 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
              >
                <option value="">Select a treatment</option>
                <option>Teeth Whitening</option>
                <option>Root Canal</option>
                <option>Dental Implants</option>
                <option>Braces</option>
                <option>Smile Makeover</option>
                <option>Dental Cleaning</option>
                <option>General Checkup</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Preferred Date</label>
              <input
                type="date"
                required
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="w-full rounded-xl border border-border bg-muted/30 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
              />
            </div>
            <button
              type="submit"
              className="w-full dental-gradient rounded-xl py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:scale-[1.01] active:scale-[0.98]"
            >
              Book Now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AppointmentSection;


