import Hero from "../components/sections/about/Hero";
import Story from "../components/sections/about/Story";
import Philosophy from "../components/sections/about/Philosophy";
import FinalCTA from "../components/sections/about/FinalCTA";
import SEO from "../components/ui/SEO";
import { aboutSEO } from "../data/seo/aboutSEO";

export default function About() {
  return (
    <div>
      <SEO {...aboutSEO} />
      <Hero />
      <Story />
      <Philosophy />
      <FinalCTA />
    </div>
  );
}
