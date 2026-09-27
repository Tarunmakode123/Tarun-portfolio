import { useState, useEffect } from 'react';
import IntroSplash from './components/IntroSplash';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';

const App = () => {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const hasSeen = sessionStorage.getItem('hasSeenIntro');
    if (hasSeen === 'true') {
      setShowIntro(false);
    }
  }, []);

  return (
    <main
      className="relative w-full"
      style={{ overflowX: 'clip', background: '#0C0C0C' }}
    >
      {showIntro && <IntroSplash onComplete={() => setShowIntro(false)} />}
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
};

export default App;
