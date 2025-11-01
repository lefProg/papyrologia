import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import PapyriGallery from "@/components/PapyriGallery";
import TeamSection from "@/components/TeamSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <AboutSection />
      <PapyriGallery />
      <TeamSection />
      <Footer />
    </div>
  );
};

export default Index;
