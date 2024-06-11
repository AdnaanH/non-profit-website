import AboutSection from '@/components/AboutSection';
import Causes from '@/components/Causes';
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
    </>
  );
}
