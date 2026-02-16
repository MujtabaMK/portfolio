import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, X } from 'lucide-react';
// ===== IMPORT IMAGES (REQUIRED FOR GITHUB PAGES) =====
import upgradLiving from '../assets/images/project-upgrad-living.jpg';
import atlasVMS from '../assets/images/project-atlas-vms.jpg';
import atlasHR from '../assets/images/project-atlas-hr.jpg';
import isuAdmin from '../assets/images/project-isu-admin.jpg';
import futureTech from '../assets/images/project-future-tech.jpg';
import atlasBuzz from '../assets/images/project-atlas-buzz.jpg';
import employeeConnect from '../assets/images/project-employee-connect.jpg';
import teamsFM from '../assets/images/project-teams-fm.jpg';

const projects = [
  {
    id: 1,
    title: 'Upgrad Living',
    description: 'The Hostel Management App is a digital platform that helps students manage hostel activities easily from their mobile device. It allows secure fee payments, room booking, and viewing roommate information in one place. Students can also book services like gym sessions and healthcare appointments without visiting the office. The app improves communication, reduces paperwork, and makes hostel living more organized and convenient.',
    image: upgradLiving,
    tech: ['SwiftUI', 'User Defaults', 'REST APIs', 'JSON Decoder'],
    company: 'upGrad',
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 2,
    title: 'ATLAS VMS',
    description: 'The Visitor Management System for the ATLAS campus front office digitally records and manages all visitor entries and walk-in leads. It provides complete visitor details, visit purpose, and history in a centralized dashboard. The system helps staff track, monitor, and analyze incoming leads efficiently. This improves security, reduces manual paperwork, and streamlines front office operations.',
    image: atlasVMS,
    tech: ['SwiftUI', 'URLSession', 'JSON Decoder', 'User Defaults'],
    company: 'upGrad',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 3,
    title: 'ATLAS HR App',
    description: 'The Employee-Manager Interaction App enables seamless communication between employees and managers in a single platform. It allows attendance tracking, timesheet submission, and leave management digitally. Managers can monitor daily activities and work progress in real time. The system improves transparency, accountability, and overall workforce productivity.',
    image: atlasHR,
    tech: ['Swift', 'Core Data', 'Firebase', 'Alamofire'],
    company: 'upGrad',
    color: 'from-green-500 to-emerald-500',
  },
  {
    id: 4,
    title: 'ATLAS Admin',
    description: 'The ATLAS Admin Management System is a centralized platform designed to manage administrative operations efficiently. It provides dashboards with admission reports, fee information, and student count analytics. Administrators can monitor institutional data and generate reports in real time. The system enhances decision-making, reduces manual work, and improves operational accuracy.',
    image: isuAdmin,
    tech: ['Swift', 'User Defaults', 'Alamofire', 'SwiftyJSON'],
    company: 'Innovation Trust',
    color: 'from-orange-500 to-red-500',
  },
  {
    id: 5,
    title: 'Future Tech App',
    description: 'The Faculty Attendance App for ATLAS schools enables digital attendance marking with a built-in payment system. It automatically syncs attendance records and payment data in real time. Faculty and administrators can track records without manual updates. The app improves accuracy, reduces paperwork, and streamlines school operations.',
    image: futureTech,
    tech: ['Swift', 'Razorpay', 'Cashfree', 'GrayQuest'],
    company: 'Innovation Trust',
    color: 'from-teal-500 to-blue-500',
  },
  {
    id: 6,
    title: 'ATLAS Buzz',
    description: 'The Marketing and Admission App for Atlas SkillTech University helps students explore programs and apply easily. It includes MCQ entrance tests, secure fee payments, and informative campus videos. Applicants can complete the admission process digitally in one place. The app simplifies admissions and improves student engagement.',
    image: atlasBuzz,
    tech: ['Swift', 'Core Data', 'Payment APIs', 'Firebase'],
    company: 'Dice Acceleration',
    color: 'from-red-500 to-pink-500',
  },
  {
    id: 7,
    title: 'Employee Connect',
    description: 'The Employee Empowerment Platform enables employees to participate in decisions, share suggestions, and provide reviews openly. It supports bottom-to-top communication, ensuring every voice reaches management. Leaders gain insights directly from team feedback. The platform promotes transparency, engagement, and a collaborative workplace culture.',
    image: employeeConnect,
    tech: ['Objective-C', 'Core Data', 'NSUserDefaults', 'FCM'],
    company: 'Hubmatrix Technologies',
    color: 'from-indigo-500 to-purple-500',
  },
  {
    id: 8,
    title: 'TEAMS FM',
    description: 'The Facility Management Solution helps organizations manage budgets, assets, and maintenance operations in one system. It tracks schedules, service requests, and resource utilization efficiently. Administrators can monitor performance and productivity in real time. The solution improves planning, reduces costs, and streamlines facility operations.',
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
          <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-3 sm:mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-sm sm:text-base px-4">
            A selection of my recent work showcasing iOS development expertise
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative glass rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer hover:-translate-y-2 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${100 + index * 100}ms` }}
              onClick={() => setSelectedProject(project)}
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                
                {/* Company Badge */}
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
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
                <h3 className="text-base sm:text-lg font-display font-bold text-white mb-1.5 sm:mb-2 group-hover:text-gradient transition-colors line-clamp-1">
                  {project.title}
                </h3>
                <p className="text-white/60 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {project.tech.slice(0, 2).map((tech) => (
                    <span 
                      key={tech}
                      className="px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-white/5 text-white/70 text-[10px] sm:text-xs border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 2 && (
                    <span className="px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-white/5 text-white/70 text-[10px] sm:text-xs border border-white/10">
                      +{project.tech.length - 2}
                    </span>
                  )}
                </div>
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
            <Github className="w-4 h-4 sm:w-5 sm:h-5" />
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
                <h4 className="text-xs sm:text-sm font-semibold text-white/50 mb-2 sm:mb-3">TECHNOLOGIES</h4>
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
