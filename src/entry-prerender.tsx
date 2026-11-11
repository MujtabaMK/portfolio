// Build-time only: renders the page content to static HTML so search engines
// that don't run JavaScript (Bing, DuckDuckGo, AI crawlers) can read it.
// The client app (main.tsx) replaces this markup when it loads.
import { renderToString } from 'react-dom/server';
import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Services from './sections/Services';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Certifications from './sections/Certifications';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

export function render() {
  return renderToString(
    <>
      {/* Same loading screen App.tsx shows first, so visitors see no flash */}
      <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background">
        <div className="relative">
          <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-accent animate-pulse" />
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-accent blur-xl opacity-60 animate-pulse" />
        </div>
      </div>
      <div className="relative min-h-screen bg-background overflow-x-hidden">
        <Navigation scrollY={0} />
        <main className="relative" style={{ zIndex: 10 }}>
          <Hero />
          <About />
          <Skills />
          <Services />
          <Projects />
          <Experience />
          <Certifications />
          <Contact />
        </main>
        <Footer />
      </div>
    </>,
  );
}
