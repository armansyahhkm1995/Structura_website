import Hero from "../components/sections/contact/Hero";
import Journey from "../components/sections/contact/Journey";
import Preparation from "../components/sections/contact/Preparation";
import FinalCTA from "../components/sections/contact/FinalCTA";
import SEO from "../components/ui/SEO";
import { contactSEO } from "../data/seo/contactSEO";

export default function Contact() {
  return (
    <div>
      <SEO {...contactSEO} />
      <Hero />
      <Journey />
      <Preparation />
      <FinalCTA />
    </div>
  );
}
