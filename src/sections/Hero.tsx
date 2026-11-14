import { useEffect, useState, useRef } from 'react';
import { Download, ExternalLink, Mail } from 'lucide-react';
import { gsap } from 'gsap';
import CountUp from '../components/CountUp';
import PhoneMockup from '../components/PhoneMockup';
import resume from "../assets/files/Mujtaba_Khan_iOS_Developer.pdf";

export default function Hero() {
  const nameRef = useRef<HTMLHeadingElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const [displayText, setDisplayText] = useState('');
  const fullText = "Hi, I'm";
  const [showCursor, setShowCursor] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  // GSAP reveal: name → title → description with stagger
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.45, defaults: { ease: 'power3.out' } });
      if (nameRef.current) {
        tl.fromTo(
          nameRef.current,
          { yPercent: 60, opacity: 0 },
          { yPercent: 0, opacity: 1, duration: 1.1 }
        );
      }
      if (titleRef.current) {
        tl.fromTo(titleRef.current, { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, '-=0.6');
      }
      if (descRef.current) {
        tl.fromTo(descRef.current, { y: 18, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 }, '-=0.5');
      }
    });
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 80);

    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
    };
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20">
      {/* Animated background particles - fewer on mobile */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-primary/20 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8 sm:py-10 lg:py-0 grid lg:grid-cols-[1.25fr_0.75fr] gap-14 lg:gap-10 items-center">
        <div className={`text-center lg:text-left transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Greeting with typing effect */}
          <div className="mb-3 sm:mb-4">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-display text-white/80 min-h-[1.5em]">
              {displayText}
            </h2>
          </div>

          {/* Main name */}
          <h1
            ref={nameRef}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] xl:text-7xl font-display font-bold mb-4 sm:mb-6 leading-[1.15] pb-2 inline-flex items-end justify-center lg:justify-start gap-2 sm:gap-3 max-w-full"
          >
            <span className="text-gradient name-sheen">Mujtaba Khan</span>
            <span className="animate-wave" aria-hidden="true">👋</span>
            <span
              aria-hidden="true"
              className={`inline-block w-[0.06em] h-[0.78em] ml-1 bg-primary self-center transition-opacity duration-100 ${showCursor ? 'opacity-100' : 'opacity-0'}`}
            />
          </h1>

          {/* Title */}
          <div ref={titleRef} className="mb-6 sm:mb-8">
            <p className="text-lg sm:text-xl md:text-2xl lg:text-[1.65rem] text-white/85 font-light px-2 lg:px-0">
              iOS Developer <span className="hidden sm:inline text-white/40">·</span> <span className="block sm:inline">Android &amp; Flutter Developer</span>
            </p>
            <p className="mt-2 text-xs sm:text-sm md:text-base text-white/55 font-mono tracking-wide">
              Swift · SwiftUI · Flutter · Firebase
            </p>
          </div>

          {/* Description */}
          <p ref={descRef} className="max-w-2xl mx-auto lg:mx-0 lg:px-0 text-sm sm:text-base lg:text-lg text-white/75 mb-8 sm:mb-10 leading-relaxed px-4">
            I build production mobile apps that scale — Flutter and native iOS, from enterprise dashboards at upGrad to my own indie products <a href="https://coresyncgo.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent transition-colors underline-offset-4 hover:underline">CoreSyncGo</a>, <a href="https://coresyncgo.com/HabitNaro_index.html" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent transition-colors underline-offset-4 hover:underline">HabitNaro</a> and <a href="https://coresyncgo.com/Sal_index.html" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent transition-colors underline-offset-4 hover:underline">Salvendi</a>, all live on the App Store and Google Play.
          </p>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 transition-all duration-700 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <a
              href="#projects"
              onClick={(e) => handleNavClick(e, '#projects')}
              className="btn-shine relative overflow-hidden w-full sm:w-auto px-6 sm:px-7 py-3 sm:py-4 rounded-full bg-gradient-to-r from-primary to-accent text-white font-semibold text-sm sm:text-base flex items-center justify-center gap-2 hover:scale-105 active:scale-95 transition-transform shadow-lg shadow-primary/30"
            >
              View My Work
              <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>

            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="w-full sm:w-auto px-6 sm:px-7 py-3 sm:py-4 rounded-full bg-white/[0.07] border border-white/20 text-white font-semibold text-sm sm:text-base flex items-center justify-center gap-2 hover:bg-white/10 transition-colors hover:scale-105 active:scale-95"
            >
              <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
              Get in touch
            </a>

            <a
              href={resume}
              download="Mujtaba_Khan_iOS_Developer.pdf"
              className="w-full sm:w-auto px-6 sm:px-7 py-3 sm:py-4 rounded-full border border-white/15 text-white/85 font-medium text-sm sm:text-base flex items-center justify-center gap-2 hover:bg-white/5 transition-colors hover:scale-105 active:scale-95"
            >
              <Download className="w-4 h-4 sm:w-5 sm:h-5" />
              Résumé
            </a>
          </div>

          {/* Stats */}
          <div className={`mt-12 sm:mt-16 grid grid-cols-2 sm:grid-cols-4 gap-y-6 gap-x-3 sm:gap-8 max-w-3xl mx-auto lg:mx-0 transition-all duration-700 delay-750 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {[
              { value: 10, suffix: '+', label: 'Years Experience' },
              { value: 10, suffix: '+', label: 'Apps Shipped' },
              { value: 3, suffix: '', label: 'Indie Products' },
              { value: 1, suffix: '', label: 'Client Product' },
            ].map((stat) => (
              <div key={stat.label} className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-gradient mb-1">
                  <CountUp value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-xs sm:text-sm text-white/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Signature piece: interactive iPhone with my apps */}
        <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <PhoneMockup />
        </div>
      </div>

      {/* Scroll hint */}
      <a
        href="#about"
        aria-label="Scroll to About"
        className={`scroll-hint absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-white/45 hover:text-white/80 transition-all duration-700 delay-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      >
        <span className="w-6 h-10 rounded-full border-2 border-current flex justify-center pt-2">
          <span className="scroll-dot w-1 h-2 rounded-full bg-current" />
        </span>
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
      </a>
    </section>
  );
}
