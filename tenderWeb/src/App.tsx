// App.tsx
import { useRef } from "react";
import Navbar from "./common/Navbar";
import SectionContactUs from "./ContactUsSection/SectionContactUs";
import MidSection from "./MidSection/MidSection";
import PricingSection from "./PricingSection/PricingSection";
import SectionOne from "./SectionOne/SectionOne";
import SectionThree from "./SectionThree/SectionThree";
import SectionTwo from "./SectionTwo/SectionTwo";
import Footer from "./common/Footer";
import FourthSection from "./FouthSection/FourthSection";
import SectionFive from "./SectionFive/SectionFive";
import SectionSix from "./SectionSix/SectionSix";

function App() {
  const sectionRefs = {
    home: useRef<HTMLElement | null>(null),
    about: useRef<HTMLElement | null>(null),
    feature: useRef<HTMLElement | null>(null),
    benefits: useRef<HTMLElement | null>(null),
    pricing: useRef<HTMLElement | null>(null),
    contact: useRef<HTMLElement | null>(null),
  };

  const scrollToSection = (section: keyof typeof sectionRefs) => {
    const sectionRef = sectionRefs[section];
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Navbar scrollToSection={scrollToSection} />
      <section ref={sectionRefs.home}>
        <SectionOne />
      </section>
      <section ref={sectionRefs.about}>
        <SectionTwo />
      </section>
      <section ref={sectionRefs.feature}>
        <SectionThree />
      </section>
      <MidSection />
      <section ref={sectionRefs.benefits}>
        <FourthSection />
      </section>
      <SectionFive />
      <SectionSix />
      <section ref={sectionRefs.pricing}>
        <PricingSection />
      </section>
      <section ref={sectionRefs.contact}>
        <SectionContactUs />
      </section>
      <Footer />
    </>
  );
}

export default App;
