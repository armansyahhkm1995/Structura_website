import Hero from "../components/sections/home/Hero";
import Problem from "../components/sections/home/Problem";
import Solution from "../components/sections/home/Solution";
import Deliverables from "../components/sections/home/Deliverables";
import Process from "../components/sections/home/Process";
import FinalCTA from "../components/sections/home/FinalCTA";
import FAQ from "../components/sections/home/FAQ";

export default function Home() {
  return (
    <div>
      <Hero />
      <Problem />
      <Solution />
      <Deliverables />
      <Process />
      <FAQ />
      <FinalCTA />
    </div>
  );
}
