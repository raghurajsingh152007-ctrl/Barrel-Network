import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServersSection from "@/components/ServersSection";
import RulesSection from "@/components/RulesSection";
import GallerySection from "@/components/GallerySection";
import TipSection from "@/components/TipSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ServersSection />
      <RulesSection />
      <GallerySection />
      <TipSection />
      <Footer />
    </div>
  );
};

export default Index;
