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
      <Navbar/>
      <Hero/>
      <SellingPoint/>
      <HowToUse/>
      <WhyToUse/>
      <FAQ/>
      <Logos/>
      <Pricing/>
      <Contact/>
    </div>

  )
}