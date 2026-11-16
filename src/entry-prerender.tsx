// Build-time only: renders the page content to static HTML so search engines
// that don't run JavaScript (Bing, DuckDuckGo, AI crawlers) can read it.
// The client app (main.tsx) replaces this markup when it loads.
import { renderToString } from 'react-dom/server';
import Navigation from './sections/Navigation';
import PhoneStory from './sections/PhoneStory';
import About from './sections/About';
import Skills from './sections/Skills';
import Services from './sections/Services';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Certifications from './sections/Certifications';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import KineticHeadline from './components/KineticHeadline';
import CtaBand from './components/CtaBand';

export function render() {
  return renderToString(
    <>
      {/* Same loading screen App.tsx shows first, so visitors see no flash */}
      <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background">
        <div className="text-[11px] tracking-[0.2em] uppercase text-foreground/50">Mujtaba Khan — Portfolio</div>
      </div>
      <div className="relative min-h-screen bg-background [overflow-x:clip]">
        <Navigation isScrolled={false} />
        <main className="relative" style={{ zIndex: 10 }}>
          <PhoneStory />
          <About />
          <Skills />
          <Services />
          <Projects />
          <CtaBand />
          <Experience />
          <Certifications />
          <KineticHeadline />
          <Contact />
        </main>
        <Footer />
      </div>
    </>,
  );
}
