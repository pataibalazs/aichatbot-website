import './App.css';
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Logos } from './components/Logos'
import { Contact } from './components/Contact'
import { SellingPoint } from './components/SellingPoint'
import { HowToUse } from './components/HowToUse';
import { WhyToUse } from './components/WhyToUse';
import { FAQ } from './components/FAQ';
import { Pricing } from './components/Pricing';
import { useRef } from 'react';
import { Footer } from './components/Footer';

export default function App() {
  const sellingPointRef = useRef(null);
  const howToUseRef = useRef(null);
  const whyToUseRef = useRef(null);
  const pricingRef = useRef(null);
  const faqRef = useRef(null);
  const contactRef = useRef(null);
  const scrollToRef = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div>
      <div className="animation-on-hero">
        <Navbar
          scrollToSellingPoint={() => scrollToRef(sellingPointRef)}
          scrollToHowToUse={() => scrollToRef(howToUseRef)}
          scrollToWhyToUse={() => scrollToRef(whyToUseRef)}
          scrollToPricing={() => scrollToRef(pricingRef)}
          scrollToFAQ={() => scrollToRef(faqRef)}
          scrollToContact={() => scrollToRef(contactRef)}
        />
        <Hero />
      </div>
      <SellingPoint refProp={sellingPointRef} />
      <HowToUse refProp={howToUseRef} />
      <WhyToUse refProp={whyToUseRef} />
      <Pricing refProp={pricingRef} />
      <FAQ refProp={faqRef} />
      <Contact refProp={contactRef} />
      <Footer/>
    </div>
  );
}