import { useEffect, useRef, useState } from 'react';
import { Code2, Smartphone } from 'lucide-react';

// IMPORTANT: import image so Vite bundles it correctly
import profile from '../assets/images/profile-2026.jpg';

const stats = [
  { icon: Code2, value: '8+', label: 'Years Experience', color: 'from-blue-500 to-cyan-500' },
  { icon: Smartphone, value: '15+', label: 'Apps Developed', color: 'from-purple-500 to-pink-500' },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="relative py-16 sm:py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">

          {/* Image Column */}
          <div data-aos="fade-right" data-aos-duration="900" className={`relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="relative aspect-[4/5] max-w-xs sm:max-w-sm md:max-w-md mx-auto lg:mx-0">

              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-2xl sm:rounded-3xl blur-2xl sm:blur-3xl" />

              {/* Image container */}
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 shadow-2xl hover:scale-[1.02] transition-transform duration-500">
                
                <img
                  src={profile}
                  alt="Mujtaba Khan"
                  className="w-full h-full object-cover"
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              </div>

              {/* Floating badge */}
              <div className={`absolute -bottom-4 sm:-bottom-6 -right-4 sm:-right-6 glass rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-xl transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center">
                    <Code2 className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl font-display font-bold text-white">8+</div>
                    <div className="text-xs sm:text-sm text-white/60">Years Exp.</div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Content Column */}
          <div>
            <div className={`transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <span data-aos="fade-up" className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-medium mb-4 sm:mb-6">
                About Me
              </span>
            </div>

            <h2 data-aos="fade-up" data-aos-delay="100" className={`text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-4 sm:mb-6 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              Crafting Digital
              <span className="text-gradient block">Experiences</span>
            </h2>

            <div className={`text-sm sm:text-base lg:text-lg text-white/80 leading-relaxed mb-6 sm:mb-8 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <p className="mb-5">
                <span className="text-white font-semibold">Mujtaba Khan</span> — Senior iOS Engineer with 8+ years
                shipping production mobile apps across edtech, HR, and consumer. Currently building enterprise iOS
                at upGrad and indie cross-platform at <a href="https://coresyncgo.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent transition-colors underline-offset-4 hover:underline">CoreSyncGo</a>.
              </p>
              <div data-aos="fade-up" data-aos-delay="200">
                <p className="text-xs sm:text-sm font-mono uppercase tracking-[0.18em] text-white/55 mb-3">Stack</p>
                <ul className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-sm sm:text-base text-white/85">
                  <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-primary" /> Swift &amp; SwiftUI</li>
                  <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-primary" /> Flutter &amp; Dart</li>
                  <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-primary" /> Objective-C</li>
                  <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-primary" /> Firebase &amp; REST</li>
                  <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-primary" /> Architecture (MVVM, VIPER, Clean)</li>
                  <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-primary" /> App Store &amp; Play Store deploys</li>
                </ul>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  data-aos="zoom-in"
                  data-aos-delay={300 + index * 120}
                  className="glass rounded-xl sm:rounded-2xl p-3 sm:p-4 group cursor-default hover:-translate-y-1 hover:scale-105 transition-all duration-300"
                >
                  <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-gradient-to-r ${stat.color} flex items-center justify-center mb-2 sm:mb-3 group-hover:scale-110 transition-transform`}>
                    <stat.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <div className="text-xl sm:text-2xl font-display font-bold text-white mb-0.5 sm:mb-1">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-white/70">{stat.label}</div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
