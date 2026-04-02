import React from "react";
import Hero from "../components/sections/Hero";
import ProblemSection from "../components/sections/ProblemSection";
import SolutionSection from "../components/sections/SolutionSection";
import WhatYouGet from "../components/sections/WhatYouGet";
import ProjectTypes from "../components/sections/ProjectTypes";
import ProcessSection from "../components/sections/ProcessSection";
import TestimonialSection from "../components/sections/TestimonialSection";
import FinalCTA from "../components/sections/FinalCTA";
import FAQSection from "../components/sections/FAQSection";

export default function Home() {
  return (
    <div>
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <WhatYouGet />
      <ProjectTypes />
      <ProcessSection />
      <TestimonialSection />
      <FinalCTA />
      <FAQSection />
    </div>
  );
}
