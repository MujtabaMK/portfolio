import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { name: 'Swift', level: 95, color: 'from-orange-500 to-red-500' },
  { name: 'SwiftUI', level: 90, color: 'from-blue-500 to-cyan-500' },
  { name: 'Objective-C', level: 85, color: 'from-purple-500 to-pink-500' },
  { name: 'REST APIs', level: 92, color: 'from-green-500 to-emerald-500' },
  { name: 'Firebase', level: 88, color: 'from-yellow-500 to-orange-500' },
  { name: 'Core Data', level: 87, color: 'from-indigo-500 to-purple-500' },
];

const technologies = [
  'Xcode', 'Git', 'GitHub', 'CocoaPods', 'Swift Package Manager',
  'Alamofire', 'SwiftyJSON', 'Firebase', 'Push Notifications',
  'Core Data', 'SQLite', 'User Defaults', 'Keychain',
  'Razorpay', 'Cashfree', 'GrayQuest', 'Google Maps',
  'URLSession', 'JSON Parsing', 'XML Parsing', 'SOAP',
  'MVC', 'MVVM', 'VIPER', 'Clean Architecture',
  'Unit Testing', 'UI Testing', 'TestFlight', 'App Store Connect',
];

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const barsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Skill bars: SCRUB with scroll — bars fill/empty as the user scrolls,
      // so the reverse is visibly tied to scroll position (not viewport-exit triggers).
      const barFills = gsap.utils.toArray<HTMLElement>('.skill-fill', barsContainerRef.current);
      barFills.forEach((fill) => {
        const target = fill.dataset.level || '0';
        gsap.fromTo(
          fill,
          { width: '0%' },
          {
            width: `${target}%`,
            ease: 'none',
            scrollTrigger: {
              trigger: fill,
              start: 'top 85%',
              end: 'top 35%',
              scrub: 1.2,
            },
          }
        );
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="relative py-16 sm:py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
          <span data-aos="fade-up" className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            My Expertise
          </span>
          <h2 data-aos="fade-up" data-aos-delay="80" className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-3 sm:mb-4">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
          <p data-aos="fade-up" data-aos-delay="160" className="text-white/60 max-w-2xl mx-auto text-sm sm:text-base px-4">
            Technologies I work with daily to create exceptional iOS applications
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Skills Progress Bars */}
          <div ref={barsContainerRef} className="space-y-4 sm:space-y-6">
            <h3 data-aos="fade-right" className="text-lg sm:text-xl font-semibold text-white mb-4 sm:mb-6">
              Core Skills
            </h3>

            {skills.map((skill, index) => (
              <div
                key={skill.name}
                data-aos="fade-right"
                data-aos-delay={100 + index * 60}
                className="group"
              >
                <div className="flex justify-between items-center mb-1.5 sm:mb-2">
                  <span className="text-white font-medium text-sm sm:text-base">{skill.name}</span>
                  <span className="text-white/60 text-xs sm:text-sm font-mono">{skill.level}%</span>
                </div>
                <div className="relative h-2 sm:h-3 bg-white/10 rounded-full overflow-hidden">
                  <div
                    data-level={skill.level}
                    className={`skill-fill h-full rounded-full bg-gradient-to-r ${skill.color}`}
                    style={{ width: '0%' }}
                  />
                  <div
                    data-level={skill.level}
                    className={`skill-fill absolute inset-y-0 h-full rounded-full bg-gradient-to-r ${skill.color} opacity-40 blur-md`}
                    style={{ width: '0%' }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Technologies Cloud */}
          <div>
            <h3 data-aos="fade-left" className="text-lg sm:text-xl font-semibold text-white mb-4 sm:mb-6">
              Technologies & Tools
            </h3>

            <div data-aos="fade-left" data-aos-delay="100" className="glass rounded-2xl sm:rounded-3xl p-4 sm:p-6">
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {technologies.map((tech, index) => (
                  <span
                    key={tech}
                    data-aos="zoom-in"
                    data-aos-delay={Math.min(index * 35, 800)}
                    data-aos-duration="500"
                    className="px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/5 text-white/80 text-xs sm:text-sm font-medium border border-white/10 hover:bg-primary/30 hover:border-primary/50 hover:scale-110 hover:-translate-y-0.5 transition-all duration-300 cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Stat counters */}
            <div className="mt-4 sm:mt-6 grid grid-cols-2 gap-3 sm:gap-4">
              <div data-aos="fade-up" data-aos-delay="100" className="glass rounded-xl sm:rounded-2xl p-3 sm:p-4 text-center hover:scale-105 transition-transform">
                <div className="text-2xl sm:text-3xl font-display font-bold text-gradient mb-0.5 sm:mb-1">
                  10+
                </div>
                <div className="text-xs sm:text-sm text-white/60">Apps on App Store</div>
              </div>
              <div data-aos="fade-up" data-aos-delay="200" className="glass rounded-xl sm:rounded-2xl p-3 sm:p-4 text-center hover:scale-105 transition-transform">
                <div className="text-2xl sm:text-3xl font-display font-bold text-gradient mb-0.5 sm:mb-1">
                  50K+
                </div>
                <div className="text-xs sm:text-sm text-white/60">Total Downloads</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
