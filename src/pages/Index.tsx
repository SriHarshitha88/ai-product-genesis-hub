
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ProgramOverview } from "@/components/ProgramOverview";
import { CurriculumRoadmap } from "@/components/CurriculumRoadmap";
import { ExpertSpeakers } from "@/components/ExpertSpeakers";
import { ParticipantJourney } from "@/components/ParticipantJourney";
import { CommunityExperience } from "@/components/CommunityExperience";
import { ApplicationProcess } from "@/components/ApplicationProcess";
import { FAQSection } from "@/components/FAQSection";
import { WaitlistSection } from "@/components/WaitlistSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        <HeroSection />
        <ProgramOverview />
        <CurriculumRoadmap />
        <ExpertSpeakers />
        <ParticipantJourney />
        <CommunityExperience />
        <ApplicationProcess />
        <FAQSection />
        <WaitlistSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
