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
    description:
      'Hostel management platform with fee payments, bookings and student utilities.',
    image: upgradLiving,
    tech: ['SwiftUI', 'User Defaults', 'REST APIs', 'JSON Decoder'],
    company: 'upGrad',
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 2,
    title: 'ATLAS VMS',
    description:
      'Visitor management system tracking entries, walk-ins and analytics.',
    image: atlasVMS,
    tech: ['SwiftUI', 'URLSession', 'JSON Decoder', 'User Defaults'],
    company: 'upGrad',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 3,
    title: 'ATLAS HR App',
    description:
      'Employee-manager communication with attendance and leave workflows.',
    image: atlasHR,
    tech: ['Swift', 'Core Data', 'Firebase', 'Alamofire'],
    company: 'upGrad',
    color: 'from-green-500 to-emerald-500',
  },
  {
    id: 4,
    title: 'ATLAS Admin',
    description:
      'Administrative dashboard for reports, analytics and monitoring.',
    image: isuAdmin,
    tech: ['Swift', 'User Defaults', 'Alamofire', 'SwiftyJSON'],
    company: 'Innovation Trust',
    color: 'from-orange-500 to-red-500',
  },
  {
    id: 5,
    title: 'Future Tech App',
    description:
      'Faculty attendance and payment synchronization application.',
    image: futureTech,
    tech: ['Swift', 'Razorpay', 'Cashfree', 'GrayQuest'],
    company: 'Innovation Trust',
    color: 'from-teal-500 to-blue-500',
  },
  {
    id: 6,
    title: 'ATLAS Buzz',
    description:
      'University admission and marketing app with MCQ tests and payments.',
    image: atlasBuzz,
    tech: ['Swift', 'Core Data', 'Payment APIs', 'Firebase'],
    company: 'Dice Acceleration',
    color: 'from-red-500 to-pink-500',
  },
  {
    id: 7,
    title: 'Employee Connect',
    description:
      'Internal communication & employee empowerment platform.',
    image: employeeConnect,
    tech: ['Objective-C', 'Core Data', 'NSUserDefaults', 'FCM'],
    company: 'Hubmatrix Technologies',
    color: 'from-indigo-500 to-purple-500',
  },
  {
    id: 8,
    title: 'TEAMS FM',
    description:
      'Facility management system tracking maintenance and productivity.',
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
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.1 });

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="relative py-16 sm:py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            Portfolio
          </span>
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-white mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            A selection of my recent iOS applications
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className={`group relative glass rounded-3xl overflow-hidden cursor-pointer hover:-translate-y-2 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${100 + index * 100}ms` }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
              </div>

              <div className="p-5">
                <h3 className="text-lg font-bold text-white mb-2">{project.title}</h3>
                <p className="text-white/60 text-sm line-clamp-2">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      {selectedProject && (
        <div onClick={() => setSelectedProject(null)} className="fixed inset-0 bg-black/80 backdrop-blur-xl flex items-center justify-center z-50 p-4">
          <div onClick={(e) => e.stopPropagation()} className="max-w-lg w-full glass rounded-3xl overflow-hidden">
            <div className="relative aspect-video">
              <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center"
              >
                <X className="text-white w-5 h-5" />
              </button>
            </div>

            <div className="p-8">
              <h3 className="text-2xl font-bold text-white mb-4">{selectedProject.title}</h3>
              <p className="text-white/70 mb-6">{selectedProject.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.tech.map((tech) => (
                  <span key={tech} className="px-3 py-1 rounded-full bg-white/10 text-white text-sm">
                    {tech}
                  </span>
                ))}
              </div>

              <button
                onClick={() => setSelectedProject(null)}
                className="w-full py-3 rounded-full bg-gradient-to-r from-primary to-accent text-white font-semibold"
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
