import { useEffect, useRef, useState } from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CountUp from '../components/CountUp';

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    id: 1,
    company: 'upGrad',
    role: 'iOS Developer',
    period: '2021 – Present',
    location: 'Mumbai, India',
    description: 'Leading iOS development for multiple applications including ATLAS Dashboard, Upgrad Living, ATLAS VMS, and ATLAS HR App. Implementing SwiftUI, Flutter, Core Data, and payment integrations.',
    achievements: [
      'Developed 4 major iOS applications from scratch',
      'Implemented Razorpay, Cashfree, and GrayQuest payment APIs',
      'Mentored junior developers and conducted code reviews',
      'Reduced app load time by 40% through optimization',
    ],
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 2,
    company: 'Innovation Trust',
    role: 'iOS Developer',
    period: '2020 – 2021',
    location: 'Mumbai, India',
    description: 'Developed admin systems and faculty applications for ATLAS umbrella schools. Worked on ISU Admin and Future Tech App with payment integrations.',
    achievements: [
      'Built ISU Admin management system with comprehensive dashboards',
      'Integrated Razorpay, Cashfree, and GrayQuest payment APIs',
      'Implemented Firebase push notifications',
      'Published apps to App Store with 4.5+ ratings',
    ],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 3,
    company: 'Dice Acceleration',
    role: 'iOS Developer',
    period: '2019 – 2020',
    location: 'Mumbai, India',
    description: 'Created marketing and admission applications for Atlas SkillTech University. Developed ATLAS Buzz with MCQ tests and fee payment features.',
    achievements: [
      'Developed ATLAS Buzz app for admissions and marketing',
      'Implemented MCQ test functionality with real-time scoring',
      'Integrated multiple payment gateways',
      'Achieved 10K+ downloads within first month',
    ],
    color: 'from-green-500 to-emerald-500',
  },
  {
    id: 4,
    company: 'Hubmatrix Technologies',
    role: 'Junior iOS Developer',
    period: '2016 – 2019',
    location: 'Pune, India',
    description: 'Built employee engagement platforms and facility management solutions. Worked with Objective-C, Core Data, and XML/JSON parsing.',
    achievements: [
      'Developed Employee Connect platform for bottom-up communication',
      'Built TEAMS FM for facility and asset management',
      'Implemented push notifications using Firebase',
      'Published 5+ apps to App Store',
    ],
    color: 'from-orange-500 to-red-500',
  },
];

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const timelineRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);

  // Timeline line fills as you scroll through the jobs (scaleY = GPU transform)
  useEffect(() => {
    if (!timelineRef.current || !fillRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        fillRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: timelineRef.current,
            start: 'top 70%',
            end: 'bottom 60%',
            scrub: 0.6,
          },
        }
      );
    }, timelineRef);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="relative py-16 sm:py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-10 sm:mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <span data-aos="fade-up" className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            Career Journey
          </span>
          <h2 data-aos="fade-up" data-aos-delay="80" className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-3 sm:mb-4">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <p data-aos="fade-up" data-aos-delay="160" className="text-white/75 max-w-2xl mx-auto text-sm sm:text-base px-4">
            My professional journey as an iOS developer
          </p>
        </div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative">
          {/* Timeline track + scroll-driven fill - hidden on mobile */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-white/10 -translate-x-1/2" />
          <div
            ref={fillRef}
            className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[3px] origin-top rounded-full bg-gradient-to-b from-primary via-accent to-fuchsia-500 shadow-[0_0_14px_rgba(124,58,237,0.8)]"
            style={{ transform: 'translateX(-50%) scaleY(0)', willChange: 'transform' }}
          />

          {/* Experience Items */}
          <div className="space-y-6 sm:space-y-8 lg:space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                data-aos={index % 2 === 0 ? 'fade-left' : 'fade-right'}
                data-aos-delay={100 + index * 100}
                data-aos-duration="900"
                className="relative"
              >
                {/* Timeline Dot - hidden on mobile */}
                <div className="hidden md:flex absolute left-1/2 top-8 w-5 h-5 rounded-full bg-gradient-to-r from-primary to-accent -translate-x-1/2 z-10 items-center justify-center ring-4 ring-background">
                  <span className="absolute inset-0 rounded-full bg-accent/60 animate-ping" />
                  <div className="relative w-2 h-2 rounded-full bg-white" />
                </div>

                {/* Content Card */}
                <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:ml-auto md:pl-8 lg:pl-12' : 'md:mr-auto md:pr-8 lg:pr-12'}`}>
                  <div className="relative spotlight glass rounded-2xl sm:rounded-3xl p-5 sm:p-6 hover:-translate-y-1 hover:scale-[1.01] transition-all duration-300 group cursor-default">
                    {/* Header */}
                    <div className="flex items-start sm:items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                      <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-r ${exp.color} flex items-center justify-center flex-shrink-0`}>
                        <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-lg sm:text-xl font-display font-bold text-white truncate">{exp.company}</h3>
                        <p className="text-primary font-medium text-sm sm:text-base">{exp.role}</p>
                      </div>
                    </div>

                    {/* Meta Info */}
                    <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-3 sm:mb-4 text-xs sm:text-sm text-white/70">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                        {exp.location}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-white/70 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div className="space-y-1.5 sm:space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <div 
                          key={i}
                          className="flex items-start gap-2 text-xs sm:text-sm text-white/75"
                        >
                          <span className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                          <span>{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Summary Stats */}
        <div
          className={`mt-10 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 transition-all duration-700 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {[
            { value: 2, suffix: '', label: 'Companies' },
            { value: 10, suffix: '+', label: 'Years' },
            { value: 10, suffix: '+', label: 'Apps' },
            { value: 50, suffix: 'K+', label: 'Users' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="relative spotlight tilt glass rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center"
            >
              <div className="text-2xl sm:text-3xl font-display font-bold text-gradient mb-0.5 sm:mb-1"><CountUp value={stat.value} suffix={stat.suffix} /></div>
              <div className="text-xs sm:text-sm text-white/50">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
