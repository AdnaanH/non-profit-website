import AboutSection from '@/components/AboutSection';
import Causes from '@/components/Causes';
import Connect from '@/components/Connect';
import Events from '@/components/Events';
import Hero from '@/components/Hero';
import HeroCarousel from '@/components/HerocCarousel';

export default function Home() {
  return (
    <>
      <Hero />
      <HeroCarousel />
      <div id='about'>
        <AboutSection />
        <Causes />
      </div>
      <div id="joinus">
        <Events />
      </div>
      <div id="connect">
        <Connect />
      </div>
    </>
  );
}
