import { useState, useEffect, useRef } from "react";
import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import handwrittenImage from "@/assets/written_by_hand.JPG";
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
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const sectionRefs = {
    history: useRef<HTMLDivElement>(null),
    staff: useRef<HTMLDivElement>(null),
    activities: useRef<HTMLDivElement>(null),
    news: useRef<HTMLDivElement>(null),
  };

  useEffect(() => {
    if (activeSection) {
      // Small delay to ensure the section is rendered
      setTimeout(() => {
        const ref = sectionRefs[activeSection as keyof typeof sectionRefs];
        if (ref?.current) {
          ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, [activeSection]);

  return (
    <div className="min-h-screen">
      <Hero />
      <Navigation
        onSectionChange={setActiveSection}
        activeSection={activeSection}
        variant="split"
      >
        <div className="w-full h-[40vh] sm:h-[45vh] md:h-[50vh] overflow-hidden flex items-center justify-center p-2 sm:p-4">
          <img
            src={handwrittenImage}
            alt="Handwritten"
            className="w-full h-full object-contain object-center"
          />
        </div>
      </Navigation>
      <AboutSection />
      {activeSection === 'history' && <div ref={sectionRefs.history}><HistorySection /></div>}
      {activeSection === 'staff' && <div ref={sectionRefs.staff}><StaffSection /></div>}
      {activeSection === 'activities' && <div ref={sectionRefs.activities}><ActivitiesSection /></div>}
      {activeSection === 'news' && <div ref={sectionRefs.news}><NewsSection /></div>}
      {/* <PapyriGallery /> */}
      {/* <TeamSection /> */}
      <Footer />
    </div>
  );
};
//       <ResearchSection />

export default Index;
