import TopInfoBar from "@/components/TopInfoBar";
import Navbar from "@/components/Navbar";
import FloatingSocialBar from "@/components/FloatingSocialBar";
import ChatbotWidget from "@/components/ChatbotWidget";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import HeroSection from "@/components/HeroSection";
import TrustStrip from "@/components/TrustStrip";
import AboutSection from "@/components/AboutSection";
import TreatmentsSection from "@/components/TreatmentsSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import DoctorsSection from "@/components/DoctorsSection";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import AppointmentSection from "@/components/AppointmentSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import GallerySection from "@/components/GallerySection";
import EmergencySection from "@/components/EmergencySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <FloatingSocialBar />
      <ChatbotWidget />
      <ScrollToTopButton />
      <TopInfoBar />
      <Navbar />
      <HeroSection />
      <TrustStrip />
      <AboutSection />
      <TreatmentsSection />
      <WhyChooseUs />
      <DoctorsSection />
      <BeforeAfterSection />
      <AppointmentSection />
      <TestimonialsSection />
      <GallerySection />
      <EmergencySection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
