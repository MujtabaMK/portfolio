import { useEffect, useRef, useState } from 'react';
import { ExternalLink, X, Globe, Sparkles, Apple, Smartphone } from 'lucide-react';

const GithubIcon = ({ className = 'w-4 h-4' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55v-1.94c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.27-5.24-5.66 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.18 1.17a11.04 11.04 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.17 3.17-1.17.63 1.58.23 2.75.11 3.04.74.8 1.18 1.82 1.18 3.07 0 4.4-2.69 5.37-5.25 5.65.41.35.77 1.05.77 2.11v3.13c0 .3.21.67.8.55C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5z"/>
  </svg>
);
// ===== IMPORT IMAGES (REQUIRED FOR GITHUB PAGES) =====
import coreSyncGo from '../assets/images/project-coresyncgo.png';
import atlasDashboard from '../assets/images/project-atlas-dashboard.jpg';
import upgradLiving from '../assets/images/project-upgrad-living.jpg';
import atlasVMS from '../assets/images/project-atlas-vms.jpg';
import atlasHR from '../assets/images/project-atlas-hr.jpg';
import isuAdmin from '../assets/images/project-isu-admin.jpg';
import futureTech from '../assets/images/project-future-tech.jpg';
import atlasBuzz from '../assets/images/project-atlas-buzz.jpg';
import employeeConnect from '../assets/images/project-employee-connect.jpg';
import teamsFM from '../assets/images/project-teams-fm.jpg';

type ProjectLink = { label: string; href: string; kind: 'website' | 'appstore' | 'playstore' };
type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tech: string[];
  company: string;
  color: string;
  featured?: boolean;
  links?: ProjectLink[];
};

const projects: Project[] = [
  {
    id: 1,
    title: 'CoreSyncGo',
    description: 'My own indie product — an all-in-one productivity & wellness hub for iOS and Android. Built end-to-end in Flutter, it unifies tasks, password vault (biometric), OCR document scanning, QR/barcode generation, fitness & habit tracking, food logging, and voice translation in 20+ languages — with real-time cloud sync across devices. Shipped to both the App Store and Google Play.',
    image: coreSyncGo,
    tech: ['Flutter', 'Dart', 'Firebase', 'Cloud Sync', 'Biometric Auth', 'OCR', 'Material 3'],
    company: 'Personal Product',
    color: 'from-indigo-500 via-purple-500 to-pink-500',
    featured: true,
    links: [
      { label: 'Website', href: 'https://coresyncgo.com/', kind: 'website' },
      { label: 'App Store', href: 'https://apps.apple.com/us/app/coresync-go/id6761988704', kind: 'appstore' },
      { label: 'Google Play', href: 'https://play.google.com/store/apps/details?id=com.mujtaba.coresync', kind: 'playstore' },
    ],
  },
  {
    id: 10,
    title: 'ATLAS Dashboard',
    description:
      'Cross-platform scheduling & productivity dashboard for ATLAS SkillTech University, built end-to-end in Flutter. Manages timetables, attendance, room and resource utilization analytics, and department-level performance reports — giving administrators operational insights from a single responsive app.',
    image: atlasDashboard,
    tech: ['Flutter', 'Dart', 'REST APIs', 'Charts', 'Analytics'],
    company: 'upGrad',
    color: 'from-indigo-500 to-blue-500',
    featured: true,
    links: [
      { label: 'App Store', href: 'https://apps.apple.com/in/app/atlas-dashboard/id6760095449', kind: 'appstore' },
    ],
  },
  {
    id: 2,
    title: 'ATLAS HR App',
    description: 'Employee–manager interaction platform for upGrad. Built attendance tracking, timesheet submission, leave management and real-time activity monitoring — replacing scattered spreadsheets with a single iOS app and improving transparency across teams.',
    image: atlasHR,
    tech: ['Swift', 'Core Data', 'Firebase', 'Alamofire'],
    company: 'upGrad',
    color: 'from-green-500 to-emerald-500',
  },
  {
    id: 3,
    title: 'ATLAS Admin',
    description: 'Centralized admin platform with dashboards for admission reports, fee information and student-count analytics. Administrators can monitor institutional data and generate reports in real time, replacing manual reporting workflows.',
    image: isuAdmin,
    tech: ['Swift', 'User Defaults', 'Alamofire', 'SwiftyJSON'],
    company: 'Innovation Trust',
    color: 'from-orange-500 to-red-500',
  },
  {
    id: 4,
    title: 'ATLAS VMS',
    description: 'Visitor Management System for the ATLAS campus front office. Digitally records visitor entries and walk-in leads with full history in a centralized dashboard — improving security, eliminating paperwork and streamlining lead tracking.',
    image: atlasVMS,
    tech: ['SwiftUI', 'URLSession', 'JSON Decoder', 'User Defaults'],
    company: 'upGrad',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 5,
    title: 'Upgrad Living',
    description: 'Hostel management app letting students handle fee payments, room booking, roommate info, gym sessions and healthcare appointments from their phone — reducing front-desk visits and paperwork.',
    image: upgradLiving,
    tech: ['SwiftUI', 'User Defaults', 'REST APIs', 'JSON Decoder'],
    company: 'upGrad',
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 6,
    title: 'Future Tech App',
    description: 'Faculty attendance app for ATLAS schools with an integrated payment system. Attendance and payment data sync in real time, reducing manual updates and streamlining school operations.',
    image: futureTech,
    tech: ['Swift', 'Razorpay', 'Cashfree', 'GrayQuest'],
    company: 'Innovation Trust',
    color: 'from-teal-500 to-blue-500',
  },
  {
    id: 7,
    title: 'ATLAS Buzz',
    description: 'Marketing & admission app for Atlas SkillTech University. Students browse programs, take MCQ entrance tests, watch campus videos and pay fees in one place — completing admission entirely on mobile.',
    image: atlasBuzz,
    tech: ['Swift', 'Core Data', 'Payment APIs', 'Firebase'],
    company: 'Dice Acceleration',
    color: 'from-red-500 to-pink-500',
  },
  {
    id: 8,
    title: 'Employee Connect',
    description: 'Employee empowerment platform enabling bottom-up communication — suggestions, reviews and feedback flow directly from employees to leadership, promoting transparency and engagement.',
    image: employeeConnect,
    tech: ['Objective-C', 'Core Data', 'NSUserDefaults', 'FCM'],
    company: 'Hubmatrix Technologies',
    color: 'from-indigo-500 to-purple-500',
  },
  {
    id: 9,
    title: 'TEAMS FM',
    description: 'Facility management solution covering budgets, assets, maintenance schedules and service requests. Administrators monitor performance and resource utilization in real time, improving planning and reducing costs.',
    image: teamsFM,
    tech: ['Objective-C', 'XML/JSON', 'Firebase', 'Core Data'],
    company: 'Hubmatrix Technologies',
    color: 'from-violet-500 to-fuchsia-500',
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

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
    <section id="projects" ref={sectionRef} className="relative py-16 sm:py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-10 sm:mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <span data-aos="fade-up" className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            Portfolio
          </span>
          <h2 data-aos="fade-up" data-aos-delay="80" className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-3 sm:mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p data-aos="fade-up" data-aos-delay="160" className="text-white/75 max-w-2xl mx-auto text-sm sm:text-base px-4">
            16 production mobile apps shipped — 1 indie product I own end-to-end, 15 built for upGrad, Atlas SkillTech and Hubmatrix.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {projects.map((project, index) => (
            <div
              key={project.id}
              data-aos="fade-up"
              data-aos-delay={50 + (index % 4) * 80}
              className={`group relative glass rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer hover:-translate-y-2 transition-all duration-500 ${project.featured ? 'ring-1 ring-primary/40 sm:col-span-2 lg:col-span-1 xl:col-span-2' : ''}`}
              onClick={() => setSelectedProject(project)}
            >
              {/* Image */}
              <div className={`relative ${project.featured ? 'aspect-[16/10]' : 'aspect-[4/3]'} overflow-hidden ${project.featured ? 'bg-gradient-to-br from-indigo-500/15 via-purple-500/15 to-pink-500/15' : ''}`}>
                <img
                  src={project.image}
                  alt={project.title}
                  className={`w-full h-full transition-transform duration-500 group-hover:scale-110 ${project.featured ? 'object-contain p-6 sm:p-10' : 'object-cover'}`}
                />

                {/* Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent transition-opacity duration-300 ${project.featured ? 'opacity-30 group-hover:opacity-50' : 'opacity-60 group-hover:opacity-80'}`} />

                {/* Featured / Company Badge */}
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4 flex items-center gap-2">
                  {project.featured && (
                    <span className="inline-flex items-center gap-1 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-semibold bg-white text-primary shadow-lg">
                      <Sparkles className="w-3 h-3" />
                      MY PRODUCT
                    </span>
                  )}
                  <span className={`px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-medium bg-gradient-to-r ${project.color} text-white`}>
                    {project.company}
                  </span>
                </div>

                {/* View Icon */}
                <div className="absolute top-3 sm:top-4 right-3 sm:right-4 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6">
                <h3 className={`font-display font-bold text-white mb-1.5 sm:mb-2 group-hover:text-gradient transition-colors line-clamp-1 ${project.featured ? 'text-lg sm:text-xl lg:text-2xl' : 'text-base sm:text-lg'}`}>
                  {project.title}
                </h3>
                <p className={`text-white/75 mb-3 sm:mb-4 ${project.featured ? 'text-sm sm:text-base line-clamp-3' : 'text-xs sm:text-sm line-clamp-2'}`}>
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {project.tech.slice(0, project.featured ? 4 : 2).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-white/5 text-white/70 text-[10px] sm:text-xs border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > (project.featured ? 4 : 2) && (
                    <span className="px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-white/5 text-white/70 text-[10px] sm:text-xs border border-white/10">
                      +{project.tech.length - (project.featured ? 4 : 2)}
                    </span>
                  )}
                </div>

                {/* Inline external links (featured projects only) */}
                {project.featured && project.links && (
                  <div className="mt-4 flex flex-wrap gap-2" onClick={(e) => e.stopPropagation()}>
                    {project.links.map((link) => {
                      const Icon = link.kind === 'appstore' ? Apple : link.kind === 'playstore' ? Smartphone : Globe;
                      return (
                        <a
                          key={link.label}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/15 text-white text-xs font-medium border border-white/15 transition-colors"
                        >
                          <Icon className="w-3.5 h-3.5" />
                          {link.label}
                        </a>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div
          className={`text-center mt-10 sm:mt-12 transition-all duration-700 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <a
            href="https://github.com/MujtabaMK"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-full border border-white/20 text-white font-semibold text-sm sm:text-base hover:bg-white/5 transition-colors duration-300 hover:scale-105 active:scale-95"
          >
            <GithubIcon className="w-4 h-4 sm:w-5 sm:h-5" />
            View More on GitHub
          </a>
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div
          onClick={() => setSelectedProject(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/90 backdrop-blur-xl animate-fade-in"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-lg w-full glass rounded-2xl sm:rounded-3xl overflow-hidden animate-scale-in max-h-[90vh] overflow-y-auto"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-3 sm:top-4 right-3 sm:right-4 z-10 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </button>

            {/* Modal Image */}
            <div className="relative aspect-video">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
            </div>

            {/* Modal Content */}
            <div className="p-5 sm:p-8">
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <span className={`px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-medium bg-gradient-to-r ${selectedProject.color} text-white`}>
                  {selectedProject.company}
                </span>
              </div>
              
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-display font-bold text-white mb-3 sm:mb-4">
                {selectedProject.title}
              </h3>
              
              <p className="text-white/70 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                {selectedProject.description}
              </p>

              <div className="mb-5 sm:mb-6">
                <h4 className="text-xs sm:text-sm font-semibold text-white/75 mb-2 sm:mb-3 tracking-wider">TECHNOLOGIES</h4>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {selectedProject.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 sm:px-4 py-1 sm:py-2 rounded-full bg-white/5 text-white text-xs sm:text-sm border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {selectedProject.links && selectedProject.links.length > 0 && (
                <div className="mb-5 sm:mb-6">
                  <h4 className="text-xs sm:text-sm font-semibold text-white/75 mb-2 sm:mb-3 tracking-wider">LIVE LINKS</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.links.map((link) => {
                      const Icon = link.kind === 'appstore' ? Apple : link.kind === 'playstore' ? Smartphone : Globe;
                      return (
                        <a
                          key={link.label}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/15 text-white text-xs sm:text-sm font-medium border border-white/15 transition-colors"
                        >
                          <Icon className="w-4 h-4" />
                          {link.label}
                          <ExternalLink className="w-3 h-3 opacity-60" />
                        </a>
                      );
                    })}
                  </div>
                </div>
              )}

              <button
                onClick={() => setSelectedProject(null)}
                className="w-full py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-primary to-accent text-white font-semibold text-sm sm:text-base hover:opacity-90 transition-opacity"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
