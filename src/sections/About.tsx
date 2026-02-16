import { useEffect, useRef, useState } from 'react';
import { Code2, Smartphone } from 'lucide-react';

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="relative py-16 sm:py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          {/* Image Column */}
          <div className={`relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="relative aspect-[4/5] max-w-xs sm:max-w-sm md:max-w-md mx-auto lg:mx-0">
              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-2xl sm:rounded-3xl blur-2xl sm:blur-3xl" />
              
              {/* Image container */}
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 shadow-2xl hover:scale-[1.02] transition-transform duration-500">
                <img
                  src="src/assets/images/profile.jpg"
                  alt="Mujtaba Khan"
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              </div>

              {/* Floating badge */}
              <div
                className={`absolute -bottom-4 sm:-bottom-6 -right-4 sm:-right-6 glass rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-xl transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
              >
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
              <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-medium mb-4 sm:mb-6">
                About Me
              </span>
            </div>

            <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-4 sm:mb-6 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              Crafting Digital
              <span className="text-gradient block">Experiences</span>
            </h2>

            <div className={`space-y-3 sm:space-y-4 text-sm sm:text-base text-white/70 leading-relaxed mb-6 sm:mb-8 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <p>
                I'm <span className="text-white font-semibold">Mujtaba Khan</span>, a passionate iOS developer 
                with over 8 years of experience building beautiful, functional mobile applications.
              </p>
              <p>
                My expertise spans <span className="text-white">Swift</span>, <span className="text-white">SwiftUI</span>, 
                and <span className="text-white">Objective-C</span>, with a deep understanding of iOS architecture 
                patterns, performance optimization, and user experience design.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
                projects, or mentoring aspiring developers.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`glass rounded-xl sm:rounded-2xl p-3 sm:p-4 group cursor-default hover:-translate-y-1 hover:scale-105 transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: `${400 + index * 100}ms` }}
                >
                  <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-gradient-to-r ${stat.color} flex items-center justify-center mb-2 sm:mb-3 group-hover:scale-110 transition-transform`}>
                    <stat.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <div className="text-xl sm:text-2xl font-display font-bold text-white mb-0.5 sm:mb-1">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-white/50">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
