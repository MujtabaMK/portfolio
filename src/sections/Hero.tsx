import { useEffect, useState, useRef } from 'react';
import { Download, ExternalLink, Mail } from 'lucide-react';
import { gsap } from 'gsap';
import resume from "../assets/files/Mujtaba_Khan_iOS_Developer.pdf";

function AnimatedNumber({ end, suffix = '', duration = 1.6, trigger = true }: { end: number; suffix?: string; duration?: number; trigger?: boolean }) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!trigger) return;
    const obj = { val: 0 };
    const tween = gsap.to(obj, {
      val: end,
      duration,
      ease: 'power3.out',
      onUpdate: () => setValue(Math.floor(obj.val)),
    });
    return () => { tween.kill(); };
  }, [end, duration, trigger]);
  return <>{value}{suffix}</>;
}

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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8 sm:py-0">
        <div className={`text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Greeting with typing effect */}
          <div className="mb-3 sm:mb-4">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-display text-white/80 min-h-[1.5em]">
              {displayText}
            </h2>
          </div>

          {/* Main name */}
          <h1
            ref={nameRef}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold mb-4 sm:mb-6 leading-[1.15] pb-2 inline-flex items-end justify-center gap-2 sm:gap-3 max-w-full"
          >
            <span className="text-gradient">Mujtaba Khan</span>
            <span className="animate-wave" aria-hidden="true">👋</span>
            <span
              aria-hidden="true"
              className={`inline-block w-[0.06em] h-[0.78em] ml-1 bg-primary self-center transition-opacity duration-100 ${showCursor ? 'opacity-100' : 'opacity-0'}`}
            />
          </h1>

          {/* Title */}
          <div ref={titleRef} className="mb-6 sm:mb-8">
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/85 font-light px-2">
              iOS Developer <span className="hidden sm:inline text-white/40">·</span> <span className="block sm:inline">Flutter Developer</span>
            </p>
            <p className="mt-2 text-xs sm:text-sm md:text-base text-white/55 font-mono tracking-wide">
              Swift · SwiftUI · Flutter · Firebase
            </p>
          </div>

          {/* Description */}
          <p ref={descRef} className="max-w-2xl mx-auto text-sm sm:text-base lg:text-lg text-white/75 mb-8 sm:mb-10 leading-relaxed px-4">
            I build production mobile apps that scale — Flutter and native iOS, from enterprise dashboards at upGrad to my own indie product <a href="https://coresyncgo.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent transition-colors underline-offset-4 hover:underline">CoreSyncGo</a>, all live on the App Store and Google Play.
          </p>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 transition-all duration-700 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <a
              href="#projects"
              onClick={(e) => handleNavClick(e, '#projects')}
              className="w-full sm:w-auto px-6 sm:px-7 py-3 sm:py-4 rounded-full bg-gradient-to-r from-primary to-accent text-white font-semibold text-sm sm:text-base flex items-center justify-center gap-2 hover:scale-105 active:scale-95 transition-transform shadow-lg shadow-primary/30"
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
          <div className={`mt-12 sm:mt-16 grid grid-cols-3 gap-3 sm:gap-8 max-w-3xl mx-auto transition-all duration-700 delay-750 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {[
              { end: 8, suffix: '+', label: 'Years Experience' },
              { end: 16, suffix: '+', label: 'Apps Shipped' },
              { end: 1, suffix: '', label: 'Indie Product' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-gradient mb-1 tabular-nums">
                  <AnimatedNumber end={stat.end} suffix={stat.suffix} trigger={isVisible} />
                </div>
                <div className="text-xs sm:text-sm text-white/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
