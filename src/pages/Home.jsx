import HeroSection from "../components/sections/HeroSection";
import ProblemSection from "../components/sections/ProblemSection";
import SolutionSection from "../components/sections/SolutionSection";
import Deliverables from "../components/sections/DeliverablesSection";
import ProjectTypesSection from "../components/sections/ProjectTypesSection";
import ProcessSection from "../components/sections/ProcessSection";
import TestimonialSection from "../components/sections/TestimonialSection";
import FinalCTASection from "../components/sections/FinalCTASection";
import FAQSection from "../components/sections/FAQSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <Deliverables />
      <ProjectTypesSection />
      <ProcessSection />
      <TestimonialSection />
      <FinalCTASection />
      <FAQSection />
    </div>
  );
}
