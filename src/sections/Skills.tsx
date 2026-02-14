import { useEffect, useRef, useState } from 'react';

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
    <section id="skills" ref={sectionRef} className="relative py-16 sm:py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-10 sm:mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            My Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-3 sm:mb-4">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-sm sm:text-base px-4">
            Technologies I work with daily to create exceptional iOS applications
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Skills Progress Bars */}
          <div className="space-y-4 sm:space-y-6">
            <h3 className={`text-lg sm:text-xl font-semibold text-white mb-4 sm:mb-6 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              Core Skills
            </h3>
            
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className={`group transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${200 + index * 100}ms` }}
              >
                <div className="flex justify-between items-center mb-1.5 sm:mb-2">
                  <span className="text-white font-medium text-sm sm:text-base">{skill.name}</span>
                  <span className="text-white/60 text-xs sm:text-sm">
                    {skill.level}%
                  </span>
                </div>
                <div className="h-2 sm:h-3 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                    style={{ 
                      width: isVisible ? `${skill.level}%` : '0%',
                      transitionDelay: `${300 + index * 100}ms`
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Technologies Cloud */}
          <div>
            <h3 className={`text-lg sm:text-xl font-semibold text-white mb-4 sm:mb-6 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              Technologies & Tools
            </h3>
            
            <div 
              className={`glass rounded-2xl sm:rounded-3xl p-4 sm:p-6 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {technologies.map((tech, index) => (
                  <span
                    key={tech}
                    className="px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/5 text-white/80 text-xs sm:text-sm font-medium border border-white/10 hover:bg-primary/30 hover:scale-110 transition-all duration-300 cursor-default"
                    style={{ 
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? 'scale(1)' : 'scale(0.8)',
                      transition: `all 0.3s ease ${500 + index * 30}ms`
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Additional Info */}
            <div 
              className={`mt-4 sm:mt-6 grid grid-cols-2 gap-3 sm:gap-4 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              <div className="glass rounded-xl sm:rounded-2xl p-3 sm:p-4 text-center">
                <div className="text-2xl sm:text-3xl font-display font-bold text-gradient mb-0.5 sm:mb-1">15+</div>
                <div className="text-xs sm:text-sm text-white/60">Apps on App Store</div>
              </div>
              <div className="glass rounded-xl sm:rounded-2xl p-3 sm:p-4 text-center">
                <div className="text-2xl sm:text-3xl font-display font-bold text-gradient mb-0.5 sm:mb-1">50K+</div>
                <div className="text-xs sm:text-sm text-white/60">Total Downloads</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
