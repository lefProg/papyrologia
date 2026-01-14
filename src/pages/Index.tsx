import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
// import PapyriGallery from "@/components/PapyriGallery";
// import TeamSection from "@/components/TeamSection";
import HistorySection from "@/components/HistorySection";
import StaffSection from "@/components/StaffSection";
// import ResearchSection from "@/components/ResearchSection";
import ActivitiesSection from "@/components/ActivitiesSection";
import NewsSection from "@/components/NewsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <AboutSection />
      <HistorySection />
      <StaffSection />
      <ActivitiesSection />
      <NewsSection />
      {/* <PapyriGallery /> */}
      {/* <TeamSection /> */}
      <Footer />
    </div>
  );
};
//       <ResearchSection />

export default Index;
