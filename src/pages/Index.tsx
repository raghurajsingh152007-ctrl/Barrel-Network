import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServersSection from "@/components/ServersSection";
import RulesSection from "@/components/RulesSection";
import GallerySection from "@/components/GallerySection";
import StaffSection from "@/components/StaffSection";
import TipSection from "@/components/TipSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import BackgroundSlideshow from "@/components/BackgroundSlideshow";
import ParticleNetwork from "@/components/ParticleNetwork";
import CursorGlow from "@/components/CursorGlow";

const Index = () => {
  return (
    <div className="min-h-screen">
      <BackgroundSlideshow />
      <ParticleNetwork />
      <CursorGlow />
      <Navbar />
      <HeroSection />
      <ServersSection />
      <RulesSection />
      <GallerySection />
      <StaffSection />
      <TipSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
