import { useEffect, useState, useRef, lazy, Suspense } from 'react';
import Lenis from 'lenis';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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
import TechMarquee from './components/TechMarquee';
import KineticHeadline from './components/KineticHeadline';
import CustomCursor from './components/CustomCursor';
import ChatWidget from './components/ChatWidget';
import CtaBand from './components/CtaBand';
import { ArrowUp } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// three.js is ~800 KB — load it in a separate chunk so the page itself becomes interactive first
const ThreeBackground = lazy(() => import('./components/ThreeBackground'));

// Phones/tablets: native scrolling is the smoothest option (Lenis only adds JS work there)
const isTouchDevice = () =>
  typeof window !== 'undefined' && window.matchMedia('(hover: none), (pointer: coarse)').matches;

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const mainRef = useRef<HTMLDivElement>(null);
  const [showTop, setShowTop] = useState(false);
  const orbRefs = useRef<(HTMLDivElement | null)[]>([]);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const touch = isTouchDevice();
    const orbSpeeds = [0.1, -0.05, 0.08];
    let scrolledFlag = false;
    let topFlag = false;

    // Called on every scroll frame: update the DOM directly instead of React state,
    // so the whole page doesn't re-render 60 times a second while scrolling.
    const onScroll = (y: number) => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${max > 0 ? Math.min(1, y / max) : 0})`;
      }
      const top = y > 900;
      if (top !== topFlag) {
        topFlag = top;
        setShowTop(top);
      }
      if (!touch) {
        orbRefs.current.forEach((el, i) => {
          if (el) el.style.transform = `translate3d(0, ${y * orbSpeeds[i]}px, 0)`;
        });
      }
      const next = y > 50;
      if (next !== scrolledFlag) {
        scrolledFlag = next;
        setIsScrolled(next);
      }
    };

    let lenis: Lenis | null = null;
    let tick: ((time: number) => void) | null = null;
    let handleAnchorClick: ((e: MouseEvent) => void) | null = null;
    let nativeScroll: (() => void) | null = null;

    if (touch) {
      nativeScroll = () => onScroll(window.scrollY);
      window.addEventListener('scroll', nativeScroll, { passive: true });
      nativeScroll();
    } else {
      const l = new Lenis({
        // lerp-based smoothing follows the wheel/trackpad closely instead of a floaty 1.2s glide
        lerp: 0.12,
        smoothWheel: true,
        wheelMultiplier: 1,
      });
      lenis = l;

      l.on('scroll', (e: { scroll: number }) => {
        onScroll(e.scroll);
        ScrollTrigger.update();
      });

      tick = (time: number) => l.raf(time * 1000);
      gsap.ticker.add(tick);
      gsap.ticker.lagSmoothing(0);

      // Smooth-scroll anchor links via Lenis
      handleAnchorClick = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        const anchor = target.closest('a[href^="#"]') as HTMLAnchorElement | null;
        if (!anchor) return;
        const href = anchor.getAttribute('href');
        if (!href || href === '#') return;
        const el = document.querySelector(href);
        if (!el) return;
        e.preventDefault();
        l.scrollTo(el as HTMLElement, { offset: href === '#planner' ? -96 : 0, duration: 1.2 });
      };
      document.addEventListener('click', handleAnchorClick);
    }

    // Cursor spotlight on .spotlight cards (desktop): one listener, rAF-throttled
    let spotRaf = 0;
    let lastEvent: PointerEvent | null = null;
    let lastTilt: HTMLElement | null = null;
    let phone: HTMLElement | null = null;
    const onPointerMove = (e: PointerEvent) => {
      lastEvent = e;
      if (spotRaf) return;
      spotRaf = requestAnimationFrame(() => {
        spotRaf = 0;
        if (!lastEvent) return;
        phone = phone?.isConnected ? phone : document.querySelector<HTMLElement>('.phone-3d');
        if (phone) {
          const px = lastEvent.clientX / window.innerWidth - 0.5;
          const py = lastEvent.clientY / window.innerHeight - 0.5;
          phone.style.setProperty('--pry', `${-14 + px * 22}deg`);
          phone.style.setProperty('--prx', `${4 - py * 12}deg`);
        }
        const target = lastEvent.target as HTMLElement | null;
        const tilt = (target?.closest?.('.tilt') as HTMLElement | null) ?? null;
        if (lastTilt && lastTilt !== tilt) {
          lastTilt.style.removeProperty('--rx');
          lastTilt.style.removeProperty('--ry');
        }
        lastTilt = tilt;
        const card = target?.closest?.('.spotlight') as HTMLElement | null;
        if (!card) return;
        const r = card.getBoundingClientRect();
        const x = lastEvent.clientX - r.left;
        const y = lastEvent.clientY - r.top;
        card.style.setProperty('--mx', `${x}px`);
        card.style.setProperty('--my', `${y}px`);
        if (tilt === card) {
          // up to ~7° toward the cursor
          card.style.setProperty('--rx', `${((r.height / 2 - y) / r.height) * 14}deg`);
          card.style.setProperty('--ry', `${((x - r.width / 2) / r.width) * 14}deg`);
        }
      });
    };
    if (!touch) document.addEventListener('pointermove', onPointerMove, { passive: true });

    const loadingTimer = setTimeout(() => setIsLoading(false), 500);

    return () => {
      document.removeEventListener('pointermove', onPointerMove);
      cancelAnimationFrame(spotRaf);
      if (handleAnchorClick) document.removeEventListener('click', handleAnchorClick);
      if (nativeScroll) window.removeEventListener('scroll', nativeScroll);
      clearTimeout(loadingTimer);
      if (tick) gsap.ticker.remove(tick);
      lenis?.destroy();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  // Initialize AOS AFTER loading screen disappears so DOM has data-aos elements
  useEffect(() => {
    if (isLoading) return;

    const touch = isTouchDevice();
    AOS.init({
      // On phones animate each element once (no re-animating on every scroll up/down)
      duration: touch ? 700 : 1200,
      easing: 'ease-out-cubic',
      once: touch,
      mirror: !touch,
      offset: touch ? 60 : 140,
      delay: 0,
      anchorPlacement: 'top-bottom',
    });

    // Border light beams only animate while their card is visible
    const beamObserver = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.target.classList.toggle('beam-on', e.isIntersecting)),
      { rootMargin: '100px 0px' }
    );
    document.querySelectorAll('.beam').forEach((el) => beamObserver.observe(el));

    // Multi-pass refresh to catch elements as they mount + any layout shifts
    const t1 = setTimeout(() => AOS.refresh(), 50);
    const t2 = setTimeout(() => AOS.refresh(), 250);
    const t3 = setTimeout(() => {
      AOS.refresh();
      ScrollTrigger.refresh();
    }, 600);

    return () => {
      beamObserver.disconnect();
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
    <div id="top" ref={mainRef} className="relative min-h-screen bg-background overflow-x-hidden">
      {/* Scroll progress */}
      <div
        ref={progressRef}
        className="fixed top-0 left-0 right-0 h-[3px] z-[60] origin-left bg-gradient-to-r from-primary via-accent to-fuchsia-500 pointer-events-none"
        style={{ transform: 'scaleX(0)', willChange: 'transform' }}
        aria-hidden="true"
      />

      {/* Three.js full-page 3D background */}
      <Suspense fallback={null}>
        <ThreeBackground />
      </Suspense>

      {/* Original gradient orbs (tuned down to layer with 3D scene) */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 1 }}>
        <div
          className="gradient-orb -top-40 -right-40"
          ref={(el) => { orbRefs.current[0] = el; }}
          style={{ opacity: 0.4 }}
        />
        <div
          className="gradient-orb top-1/3 -left-40"
          ref={(el) => { orbRefs.current[1] = el; }}
          style={{ opacity: 0.35 }}
        />
        <div
          className="gradient-orb bottom-1/4 right-1/4"
          ref={(el) => { orbRefs.current[2] = el; }}
          style={{ opacity: 0.3 }}
        />
      </div>

      {/* Navigation */}
      <Navigation isScrolled={isScrolled} />

      {/* Main content */}
      <main className="relative" style={{ zIndex: 10 }}>
        <Hero />
        <TechMarquee />
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

      {/* Footer */}
      <Footer />

      <CustomCursor />
      <ChatWidget />

      {/* Back to top */}
      <a
        href="#top"
        aria-label="Back to top"
        className={`fixed bottom-4 left-4 sm:bottom-8 sm:left-8 z-50 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-primary to-accent text-white flex items-center justify-center shadow-lg shadow-primary/40 transition-all duration-300 hover:scale-110 active:scale-95 ${
          showTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        <ArrowUp className="w-5 h-5" />
      </a>
    </div>
  );
}

export default App;
