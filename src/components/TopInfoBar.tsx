import { Phone, Mail, Clock } from "lucide-react";

const TopInfoBar = () => {
  return (
    <div className="dental-gradient">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between py-2 text-sm text-primary-foreground gap-2">
        <div className="flex items-center gap-4 md:gap-6 flex-wrap justify-center">
          <a href="tel:09812009800" className="flex items-center gap-1.5 hover:opacity-80 transition-opacity">
            <Phone size={14} />
            <span>098120 09800</span>
          </a>
          <a href="mailto:contact@rootsdental.in" className="flex items-center gap-1.5 hover:opacity-80 transition-opacity">
            <Mail size={14} />
            <span>contact@rootsdental.in</span>
          </a>
          <span className="hidden md:flex items-center gap-1.5">
            <Clock size={14} />
            <span>Sat-Thu: 9:00 AM - 7:00 PM</span>
          </span>
        </div>
        <a
          href="#appointment"
          className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-primary-foreground/15 px-4 py-1 text-xs font-medium tracking-wide uppercase hover:bg-primary-foreground/25 transition-colors backdrop-blur-sm"
        >
          Book Appointment
        </a>
      </div>
    </div>
  );
};

export default TopInfoBar;




