import { useEffect, useState } from 'react';
import { ArrowDown, Download, ExternalLink } from 'lucide-react';

export default function Hero() {
  const [displayText, setDisplayText] = useState('');
  const fullText = "Hi, I'm Mujtaba 👋";
  const [showCursor, setShowCursor] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
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
              <span 
                className={`inline-block w-0.5 h-6 sm:h-8 ml-1 bg-primary transition-opacity duration-100 ${showCursor ? 'opacity-100' : 'opacity-0'}`}
              />
            </h2>
          </div>

          {/* Main name */}
          <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold mb-4 sm:mb-6 transition-all duration-700 delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="text-gradient">Mujtaba Khan</span>
          </h1>

          {/* Title */}
          <div className={`mb-6 sm:mb-8 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/70 font-light px-2">
              Senior iOS Developer <span className="hidden sm:inline">|</span> <span className="block sm:inline">Swift & SwiftUI Specialist</span>
            </p>
          </div>

          {/* Description */}
          <p className={`max-w-2xl mx-auto text-sm sm:text-base lg:text-lg text-white/60 mb-8 sm:mb-10 leading-relaxed px-4 transition-all duration-700 delay-450 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            8+ years crafting exceptional mobile experiences. I transform ideas into elegant, 
            performant iOS applications that users love.
          </p>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 transition-all duration-700 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <a
              href="#projects"
              onClick={(e) => handleNavClick(e, '#projects')}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-gradient-to-r from-primary to-accent text-white font-semibold text-sm sm:text-base flex items-center justify-center gap-2 hover:scale-105 active:scale-95 transition-transform"
            >
              View My Work
              <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>

            <a
              href={`${import.meta.env.BASE_URL}Mujtaba_Khan_iOS_Developer.pdf`}
              download
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-full border border-white/20 text-white font-semibold text-sm sm:text-base flex items-center justify-center gap-2 hover:bg-white/5 transition-colors hover:scale-105 active:scale-95"
            >
              <Download className="w-4 h-4 sm:w-5 sm:h-5" />
              Download Resume
            </a>
          </div>

          {/* Stats */}
          <div className={`mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8 max-w-3xl mx-auto transition-all duration-700 delay-750 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {[
              { value: '8+', label: 'Years Experience' },
              { value: '15+', label: 'Apps Uploaded' },
              { value: '100%', label: 'Commitment' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-gradient mb-1">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-white/50">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className={`absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 transition-all duration-700 delay-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <a
            href="#about"
            onClick={(e) => handleNavClick(e, '#about')}
            className="flex flex-col items-center text-white/40 hover:text-white/70 transition-colors animate-bounce"
          >
            <span className="text-xs sm:text-sm mb-1">Scroll Down</span>
            <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
