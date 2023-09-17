import './App.css';
import {Navbar} from './components/Navbar'
import {Hero} from './components/Hero'
import {Logos} from './components/Logos'
import {Contact} from './components/Contact'
import {SellingPoint} from './components/SellingPoint'
import { HowToUse } from './components/HowToUse';
import { WhyToUse } from './components/WhyToUse';
import { FAQ } from './components/FAQ';
import { Pricing } from './components/Pricing';

export default function App() {
  
  return (
    <div>
      <div className="animation-on-hero">
      <Navbar/>
      <Hero/>
      </div>

      <SellingPoint/>
      <HowToUse/>
      <WhyToUse/>
      <Pricing/>
      <FAQ/>
      <Contact/>
    </div>

  )
}