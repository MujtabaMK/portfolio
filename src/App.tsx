import { useEffect, useState, useRef } from 'react';
import Lenis from 'lenis';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import ThreeBackground from './components/ThreeBackground';
import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [scrollY, setScrollY] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.4,
    });

    lenis.on('scroll', (e: { scroll: number }) => {
      setScrollY(e.scroll);
      ScrollTrigger.update();
    });

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    // Smooth-scroll anchor links via Lenis
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]') as HTMLAnchorElement | null;
      if (!anchor) return;
      const href = anchor.getAttribute('href');
      if (!href || href === '#') return;
      const el = document.querySelector(href);
      if (!el) return;
      e.preventDefault();
      lenis.scrollTo(el as HTMLElement, { offset: 0, duration: 1.2 });
    };
    document.addEventListener('click', handleAnchorClick);

    const loadingTimer = setTimeout(() => setIsLoading(false), 500);

    return () => {
      document.removeEventListener('click', handleAnchorClick);
      clearTimeout(loadingTimer);
      gsap.ticker.remove(lenis.raf);
      lenis.destroy();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  // Initialize AOS AFTER loading screen disappears so DOM has data-aos elements
  useEffect(() => {
    if (isLoading) return;

    AOS.init({
      duration: 1200,
      easing: 'ease-out-cubic',
      once: false,
      mirror: true,
      offset: 140,
      delay: 0,
      anchorPlacement: 'top-bottom',
    });

    // Multi-pass refresh to catch elements as they mount + any layout shifts
    const t1 = setTimeout(() => AOS.refresh(), 50);
    const t2 = setTimeout(() => AOS.refresh(), 250);
    const t3 = setTimeout(() => {
      AOS.refresh();
      ScrollTrigger.refresh();
    }, 600);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [isLoading]);

  if (isLoading) {
    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background">
        <div className="relative">
          <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-accent animate-pulse" />
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-accent blur-xl opacity-60 animate-pulse" />
        </div>
      </div>
    );
  }

  return (
    <div ref={mainRef} className="relative min-h-screen bg-background overflow-x-hidden">
      {/* Three.js full-page 3D background */}
      <ThreeBackground />

      {/* Original gradient orbs (tuned down to layer with 3D scene) */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 1 }}>
        <div
          className="gradient-orb -top-40 -right-40"
          style={{ transform: `translateY(${scrollY * 0.1}px)`, opacity: 0.4 }}
        />
        <div
          className="gradient-orb top-1/3 -left-40"
          style={{ transform: `translateY(${scrollY * -0.05}px)`, opacity: 0.35 }}
        />
        <div
          className="gradient-orb bottom-1/4 right-1/4"
          style={{ transform: `translateY(${scrollY * 0.08}px)`, opacity: 0.3 }}
        />
      </div>

      {/* Navigation */}
      <Navigation scrollY={scrollY} />

      {/* Main content */}
      <main className="relative" style={{ zIndex: 10 }}>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
