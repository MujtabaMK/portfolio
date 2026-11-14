import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CountUp from '../components/CountUp';

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { name: 'Swift', level: 95, from: '#f97316', to: '#ef4444' },
  { name: 'SwiftUI', level: 90, from: '#3b82f6', to: '#06b6d4' },
  { name: 'Objective-C', level: 85, from: '#a855f7', to: '#ec4899' },
  { name: 'REST APIs', level: 92, from: '#22c55e', to: '#10b981' },
  { name: 'Firebase', level: 88, from: '#eab308', to: '#f97316' },
  { name: 'Core Data', level: 87, from: '#6366f1', to: '#a855f7' },
];

const RING_R = 52;
const RING_C = 2 * Math.PI * RING_R;

function SkillRing({ name, level, from, to, id }: { name: string; level: number; from: string; to: string; id: string }) {
  return (
    <div className="relative spotlight tilt glass rounded-2xl sm:rounded-3xl p-4 sm:p-5 flex flex-col items-center text-center">
      <div className="relative w-20 h-20 sm:w-24 sm:h-24">
        <svg viewBox="0 0 120 120" className="w-full h-full -rotate-90" aria-hidden="true">
          <defs>
            <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor={from} />
              <stop offset="100%" stopColor={to} />
            </linearGradient>
          </defs>
          <circle cx="60" cy="60" r={RING_R} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="9" />
          <circle
            className="skill-ring"
            data-level={level}
            cx="60"
            cy="60"
            r={RING_R}
            fill="none"
            stroke={`url(#${id})`}
            strokeWidth="9"
            strokeLinecap="round"
            strokeDasharray={RING_C}
            strokeDashoffset={RING_C * (1 - level / 100)}
            style={{ filter: `drop-shadow(0 0 6px ${to}66)` }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <CountUp value={level} suffix="%" className="text-lg sm:text-xl font-display font-bold text-white" />
        </div>
      </div>
      <div className="mt-3 text-sm sm:text-base font-semibold text-white">{name}</div>
      <div className="mt-2 h-1 w-10 rounded-full" style={{ background: `linear-gradient(90deg, ${from}, ${to})` }} />
    </div>
  );
}

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
      // Rings draw in once when they scroll into view (stroke-dashoffset is cheap to animate)
      gsap.utils.toArray<SVGCircleElement>('.skill-ring', barsContainerRef.current).forEach((ring, i) => {
        const level = Number(ring.dataset.level || 0);
        gsap.fromTo(
          ring,
          { strokeDashoffset: RING_C },
          {
            strokeDashoffset: RING_C * (1 - level / 100),
            duration: 1.6,
            delay: (i % 3) * 0.12,
            ease: 'power3.out',
            scrollTrigger: { trigger: ring, start: 'top 90%', once: true },
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
          {/* Core skills: animated rings */}
          <div ref={barsContainerRef}>
            <h3 data-aos="fade-right" className="text-lg sm:text-xl font-semibold text-white mb-4 sm:mb-6">
              Core Skills
            </h3>
            <div data-aos="fade-up" className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
              {skills.map((skill, index) => (
                <SkillRing key={skill.name} id={`ring-grad-${index}`} {...skill} />
              ))}
            </div>
          </div>

          {/* Technologies Cloud */}
          <div>
            <h3 data-aos="fade-left" className="text-lg sm:text-xl font-semibold text-white mb-4 sm:mb-6">
              Technologies & Tools
            </h3>

            <div data-aos="fade-left" data-aos-delay="100" className="glass rounded-2xl sm:rounded-3xl p-4 sm:p-6">
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/5 text-white/80 text-xs sm:text-sm font-medium border border-white/10 hover:bg-primary/25 hover:border-primary/60 hover:text-white hover:shadow-[0_0_18px_rgba(124,58,237,0.45)] hover:-translate-y-0.5 transition-[transform,background-color,border-color,box-shadow,color] duration-300 cursor-default"
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
                  <CountUp value={10} suffix="+" />
                </div>
                <div className="text-xs sm:text-sm text-white/60">Apps on App Store</div>
              </div>
              <div data-aos="fade-up" data-aos-delay="200" className="glass rounded-xl sm:rounded-2xl p-3 sm:p-4 text-center hover:scale-105 transition-transform">
                <div className="text-2xl sm:text-3xl font-display font-bold text-gradient mb-0.5 sm:mb-1">
                  <CountUp value={50} suffix="K+" />
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
