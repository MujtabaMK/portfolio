import { useEffect, useState } from 'react';
import { Briefcase, Check, ExternalLink, Globe, Sparkles, X } from 'lucide-react';

// Proper Apple brand logo (silhouette with bite), not the fruit icon
const AppleIcon = ({ className = 'w-4 h-4' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M19.665 16.811a10.316 10.316 0 0 1-1.021 1.837c-.537.767-.978 1.297-1.316 1.592-.525.482-1.089.73-1.692.744-.432 0-.954-.123-1.562-.373-.61-.249-1.17-.371-1.683-.371-.537 0-1.113.122-1.73.371-.616.25-1.114.381-1.495.393-.577.025-1.154-.229-1.729-.764-.367-.32-.826-.87-1.377-1.648-.59-.829-1.075-1.794-1.455-2.891-.407-1.187-.611-2.335-.611-3.447 0-1.273.275-2.372.826-3.292a4.857 4.857 0 0 1 1.73-1.751 4.65 4.65 0 0 1 2.34-.662c.46 0 1.063.142 1.81.422s1.227.422 1.436.422c.158 0 .689-.167 1.593-.498.853-.307 1.573-.434 2.163-.384 1.6.129 2.801.759 3.6 1.895-1.43.867-2.137 2.08-2.123 3.637.012 1.213.453 2.222 1.317 3.023a4.33 4.33 0 0 0 1.315.863c-.106.307-.218.6-.336.882zM15.998 2.38c0 .95-.348 1.838-1.039 2.659-.836.976-1.846 1.541-2.941 1.452a2.955 2.955 0 0 1-.021-.36c0-.913.396-1.889 1.103-2.688.352-.404.8-.741 1.343-1.009.542-.264 1.054-.41 1.536-.435.013.128.019.255.019.381z"/>
  </svg>
);

// Official Google Play 4-color brand logo
const PlayStoreIcon = ({ className = 'w-4 h-4' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
    <path d="M3 20.5V3.5C3 2.91 3.34 2.39 3.84 2.15L13.69 12 3.84 21.85C3.34 21.6 3 21.09 3 20.5Z" fill="#00C2FF"/>
    <path d="M16.81 15.12L6.05 21.34 14.54 12.85 16.81 15.12Z" fill="#FF3D00"/>
    <path d="M20.16 10.81C20.5 11.08 20.75 11.5 20.75 12C20.75 12.5 20.53 12.92 20.18 13.18L17.89 14.5 15.39 12 17.89 9.5 20.16 10.81Z" fill="#FFCE00"/>
    <path d="M6.05 2.66L16.81 8.88 14.54 11.15 6.05 2.66Z" fill="#00D871"/>
  </svg>
);

const GithubIcon = ({ className = 'w-4 h-4' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55v-1.94c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.27-5.24-5.66 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.18 1.17a11.04 11.04 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.17 3.17-1.17.63 1.58.23 2.75.11 3.04.74.8 1.18 1.82 1.18 3.07 0 4.4-2.69 5.37-5.25 5.65.41.35.77 1.05.77 2.11v3.13c0 .3.21.67.8.55C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5z"/>
  </svg>
);
// ===== IMPORT IMAGES (REQUIRED FOR GITHUB PAGES) =====
import coreSyncGo from '../assets/images/project-coresyncgo.jpg';
import atlasDashboard from '../assets/images/project-atlas-dashboard.jpg';
import upgradLiving from '../assets/images/project-upgrad-living.jpg';
import atlasVMS from '../assets/images/project-atlas-vms.jpg';
import atlasHR from '../assets/images/project-atlas-hr.jpg';
import isuAdmin from '../assets/images/project-isu-admin.jpg';
import futureTech from '../assets/images/project-future-tech.jpg';
import atlasBuzz from '../assets/images/project-atlas-buzz.jpg';
import employeeConnect from '../assets/images/project-employee-connect.jpg';
import teamsFM from '../assets/images/project-teams-fm.jpg';
import habitNaro from '../assets/images/project-habitnaro.jpg';
import salvendi from '../assets/images/project-salvendi.jpg';
import fitrize from '../assets/images/project-fitrize.jpg';
import iconCoreSyncGo from '../assets/images/icon-coresyncgo.png';
import iconHabitNaro from '../assets/images/icon-habitnaro.png';
import iconSalvendi from '../assets/images/icon-salvendi.png';
import iconFitrize from '../assets/images/icon-fitrize.png';

type ProjectLink = { label: string; href: string; kind: 'website' | 'appstore' | 'playstore' };

// Big showcase rows: my own products + client apps
type Showcase = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  highlights: string[];
  image: string;
  icon: string;
  accent: string; // hex, used for glow + accents
  platforms: string;
  tech: string[];
  links: ProjectLink[];
  kind: 'indie' | 'client';
};

// Compact grid cards: apps built at companies
type CompanyProject = {
  id: number;
  title: string;
  description: string;
  image: string;
  imageBg?: string;
  tech: string[];
  company: string;
  color: string;
  links?: ProjectLink[];
};

const indieProducts: Showcase[] = [
  {
    id: 'coresyncgo',
    title: 'CoreSyncGo',
    tagline: 'All-in-one productivity & wellness hub',
    description:
      'Tasks, a biometric password vault, document scanning, QR tools, fitness and habit tracking, food logging and voice translation — unified in one Flutter app with real-time cloud sync across devices.',
    highlights: ['Biometric password vault', 'OCR scanner & QR tools', 'Voice translation, 20+ languages', 'Real-time cloud sync'],
    image: coreSyncGo,
    icon: iconCoreSyncGo,
    accent: '#7c6cf6',
    platforms: 'iOS · Android',
    tech: ['Flutter', 'Dart', 'Firebase', 'Cloud Sync', 'Biometric Auth', 'OCR', 'Material 3'],
    kind: 'indie',
    links: [
      { label: 'Website', href: 'https://coresyncgo.com/', kind: 'website' },
      { label: 'App Store', href: 'https://apps.apple.com/us/app/coresync-go/id6761988704', kind: 'appstore' },
      { label: 'Google Play', href: 'https://play.google.com/store/apps/details?id=com.mujtaba.coresync', kind: 'playstore' },
    ],
  },
  {
    id: 'habitnaro',
    title: 'HabitNaro',
    tagline: 'Habits, to-dos & yearly goals',
    description:
      'Tick off daily and weekly habits in a month grid, manage to-dos with deadlines and priorities, set goals for every month, and see the whole year on one dashboard — with a monthly journal and account sync.',
    highlights: ['Daily & weekly habit grid', 'To-dos with deadlines & priorities', 'Monthly goals by life area', 'Annual progress dashboard'],
    image: habitNaro,
    icon: iconHabitNaro,
    accent: '#10b981',
    platforms: 'iOS · Android',
    tech: ['Flutter', 'Dart', 'Cloud Sync', 'Charts', 'Material 3'],
    kind: 'indie',
    links: [
      { label: 'App Store', href: 'https://apps.apple.com/in/app/habitnaro-habit-tracker/id6822220701', kind: 'appstore' },
      { label: 'Google Play', href: 'https://play.google.com/store/apps/details?id=com.mujtaba.habitnaro', kind: 'playstore' },
    ],
  },
  {
    id: 'salvendi',
    title: 'Salvendi',
    tagline: 'Track salary and spending',
    description:
      'See money left and days until payday, add expenses in a few taps, and find out where your money went each month — with bills, EMIs, category limits and savings goals in a clean black-and-gold design.',
    highlights: ['Payday countdown & money left', 'Bills & EMI tracking', 'Category spending limits', 'Savings goals & tips'],
    image: salvendi,
    icon: iconSalvendi,
    accent: '#d4a537',
    platforms: 'iOS · Android',
    tech: ['Flutter', 'Dart', 'Charts', 'Local Storage', 'Material 3'],
    kind: 'indie',
    links: [
      { label: 'App Store', href: 'https://apps.apple.com/in/app/salvendi/id6827112514', kind: 'appstore' },
      { label: 'Google Play', href: 'https://play.google.com/store/apps/details?id=com.mujtaba.salarysense', kind: 'playstore' },
    ],
  },
];

const clientProducts: Showcase[] = [
  {
    id: 'fitrize',
    title: 'Fitrize',
    tagline: 'Workouts, meals, water, sleep & steps',
    description:
      'A fitness app built for a client. A short assessment sets a personal calorie goal; users log workouts and meals, track macros and water, sync steps from Health Connect, and follow weight trends and habit rings.',
    highlights: ['Personal calorie goal', 'Workout log with rest timer', 'Meals, macros & water', 'Health Connect step sync'],
    image: fitrize,
    icon: iconFitrize,
    accent: '#8b5cf6',
    platforms: 'Android',
    tech: ['Flutter', 'Dart', 'Health Connect', 'Cloud Sync', 'Charts'],
    kind: 'client',
    links: [{ label: 'Google Play', href: 'https://play.google.com/store/apps/details?id=com.fit.fitrise', kind: 'playstore' }],
  },
];

const companyProjects: CompanyProject[] = [
  {
    id: 10,
    title: 'ATLAS Dashboard',
    description:
      'Cross-platform scheduling & productivity dashboard for ATLAS SkillTech University, built end-to-end in Flutter. Manages timetables, attendance, room and resource utilization analytics, and department-level performance reports — giving administrators operational insights from a single responsive app.',
    image: atlasDashboard,
    imageBg: '#f5f4f8',
    tech: ['Flutter', 'Dart', 'REST APIs', 'Charts', 'Analytics'],
    company: 'upGrad',
    color: 'from-indigo-500 to-blue-500',
    links: [
      { label: 'App Store', href: 'https://apps.apple.com/in/app/atlas-dashboard/id6760095449', kind: 'appstore' },
      { label: 'Google Play', href: 'https://play.google.com/store/apps/details?id=com.atlas.dashboard', kind: 'playstore' },
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
    links: [{ label: 'App Store', href: 'https://apps.apple.com/in/app/atlas-hr-app/id1541340951', kind: 'appstore' }],
  },
  {
    id: 4,
    title: 'ATLAS VMS',
    description: 'Visitor Management System for the ATLAS campus front office. Digitally records visitor entries and walk-in leads with full history in a centralized dashboard — improving security, eliminating paperwork and streamlining lead tracking.',
    image: atlasVMS,
    tech: ['SwiftUI', 'URLSession', 'JSON Decoder', 'User Defaults'],
    company: 'upGrad',
    color: 'from-blue-500 to-cyan-500',
    links: [{ label: 'App Store', href: 'https://apps.apple.com/in/app/atlas-vms/id6445847861', kind: 'appstore' }],
  },
  {
    id: 5,
    title: 'Upgrad Living',
    description: 'Hostel management app letting students handle fee payments, room booking, roommate info, gym sessions and healthcare appointments from their phone — reducing front-desk visits and paperwork.',
    image: upgradLiving,
    tech: ['SwiftUI', 'User Defaults', 'REST APIs', 'JSON Decoder'],
    company: 'upGrad',
    color: 'from-purple-500 to-pink-500',
    links: [{ label: 'App Store', href: 'https://apps.apple.com/in/app/upgrad-living/id6448984912', kind: 'appstore' }],
  },
  {
    id: 3,
    title: 'ATLAS Admin',
    description: 'Centralized admin platform with dashboards for admission reports, fee information and student-count analytics. Administrators can monitor institutional data and generate reports in real time, replacing manual reporting workflows.',
    image: isuAdmin,
    tech: ['Swift', 'User Defaults', 'Alamofire', 'SwiftyJSON'],
    company: 'Innovation Trust',
    color: 'from-orange-500 to-red-500',
    links: [{ label: 'App Store', href: 'https://apps.apple.com/in/app/atlas-admin/id1555197709', kind: 'appstore' }],
  },
  {
    id: 6,
    title: 'ATLAS Tech App',
    description: 'Faculty attendance app for ATLAS schools with an integrated payment system. Attendance and payment data sync in real time, reducing manual updates and streamlining school operations.',
    image: futureTech,
    tech: ['Swift', 'Razorpay', 'Cashfree', 'GrayQuest'],
    company: 'Innovation Trust',
    color: 'from-teal-500 to-blue-500',
    links: [{ label: 'App Store', href: 'https://apps.apple.com/in/app/atlas-tech-app/id1187578170', kind: 'appstore' }],
  },
  {
    id: 7,
    title: 'ATLAS Buzz',
    description: 'Marketing & admission app for Atlas SkillTech University. Students browse programs, take MCQ entrance tests, watch campus videos and pay fees in one place — completing admission entirely on mobile.',
    image: atlasBuzz,
    tech: ['Swift', 'Core Data', 'Payment APIs', 'Firebase'],
    company: 'Dice Acceleration',
    color: 'from-red-500 to-pink-500',
    links: [{ label: 'App Store', href: 'https://apps.apple.com/in/app/atlas-buzz/id1504409328', kind: 'appstore' }],
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

const linkIcon = (kind: ProjectLink['kind']) => (kind === 'appstore' ? AppleIcon : kind === 'playstore' ? PlayStoreIcon : Globe);

function GroupHeading({ eyebrow, title, count }: { eyebrow: string; title: string; count: number }) {
  return (
    <div data-aos="fade-up" className="flex items-end justify-between gap-4 mb-5 sm:mb-8 border-b border-white/10 pb-3 sm:pb-4">
      <div>
        <p className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] text-primary uppercase mb-1">{eyebrow}</p>
        <h3 className="text-xl sm:text-2xl lg:text-3xl font-display font-bold text-white">{title}</h3>
      </div>
      <span className="shrink-0 text-xs sm:text-sm text-white/50 font-mono">
        {String(count).padStart(2, '0')} {count === 1 ? 'app' : 'apps'}
      </span>
    </div>
  );
}

function ShowcaseCard({ app, reverse }: { app: Showcase; reverse: boolean }) {
  return (
    <article
      data-aos="fade-up"
      className="group relative rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 bg-white/[0.03] backdrop-blur-xl"
      style={{ boxShadow: `0 0 0 1px ${app.accent}14, 0 30px 80px -40px ${app.accent}66` }}
    >
      <div className="grid lg:grid-cols-12">
        {/* Screenshots */}
        <div
          className={`relative lg:col-span-7 flex items-center justify-center p-3 sm:p-5 ${reverse ? 'lg:order-2' : ''}`}
          style={{ background: `radial-gradient(120% 90% at 50% 100%, ${app.accent}33 0%, #151515 60%)` }}
        >
          <img
            src={app.image}
            alt={`${app.title} app screenshots`}
            loading="lazy"
            className="w-full h-auto rounded-xl sm:rounded-2xl transition-transform duration-700 group-hover:scale-[1.02]"
          />
        </div>

        {/* Details */}
        <div className={`lg:col-span-5 p-5 sm:p-8 lg:p-10 flex flex-col ${reverse ? 'lg:order-1' : ''}`}>
          <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-5">
            <img
              src={app.icon}
              alt={`${app.title} icon`}
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl ring-1 ring-white/15 shadow-lg"
            />
            <div className="min-w-0">
              <h4 className="text-xl sm:text-2xl lg:text-3xl font-display font-bold text-white leading-tight">{app.title}</h4>
              <p className="text-xs sm:text-sm text-white/60 truncate">{app.tagline}</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 mb-4">
            {app.kind === 'indie' ? (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-semibold bg-white text-primary">
                <Sparkles className="w-3 h-3" />
                MY PRODUCT
              </span>
            ) : (
              <span
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-semibold text-white"
                style={{ backgroundColor: app.accent }}
              >
                <Briefcase className="w-3 h-3" />
                CLIENT PROJECT
              </span>
            )}
            <span className="px-2.5 py-1 rounded-full text-[10px] sm:text-xs text-white/75 border border-white/15">{app.platforms}</span>
          </div>

          <p className="text-sm sm:text-base text-white/75 leading-relaxed mb-5">{app.description}</p>

          <ul className="grid sm:grid-cols-2 gap-x-4 gap-y-2 mb-5 sm:mb-6">
            {app.highlights.map((h) => (
              <li key={h} className="flex items-start gap-2 text-xs sm:text-sm text-white/85">
                <Check className="w-4 h-4 mt-0.5 shrink-0" style={{ color: app.accent }} />
                {h}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-6">
            {app.tech.map((t) => (
              <span key={t} className="px-2.5 py-0.5 sm:py-1 rounded-full bg-white/5 text-white/65 text-[10px] sm:text-xs border border-white/10">
                {t}
              </span>
            ))}
          </div>

          <div className="mt-auto flex flex-wrap gap-2">
            {app.links.map((link) => {
              const Icon = linkIcon(link.kind);
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 sm:py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-medium border border-white/15 transition-colors"
                >
                  <Icon className="w-4 h-4" />
                  {link.label}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<CompanyProject | null>(null);

  useEffect(() => {
    if (!selectedProject) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setSelectedProject(null);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [selectedProject]);

  const counts = [
    { value: indieProducts.length, label: 'Indie Products' },
    { value: clientProducts.length, label: 'Client Product' },
    { value: companyProjects.length, label: 'Company Apps' },
  ];

  return (
    <section id="projects" className="relative py-16 sm:py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
          <span data-aos="fade-up" className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            Portfolio
          </span>
          <h2 data-aos="fade-up" data-aos-delay="80" className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-3 sm:mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p data-aos="fade-up" data-aos-delay="160" className="text-white/75 max-w-2xl mx-auto text-sm sm:text-base px-4">
            Apps I own end-to-end, apps I build for clients, and production apps shipped for upGrad, Atlas SkillTech and Hubmatrix.
          </p>

          <div data-aos="fade-up" data-aos-delay="220" className="mt-6 sm:mt-8 inline-grid grid-cols-3 divide-x divide-white/10 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl">
            {counts.map((c) => (
              <div key={c.label} className="px-4 sm:px-8 py-3 sm:py-4">
                <div className="text-2xl sm:text-3xl font-display font-bold text-gradient leading-none mb-1">{c.value}</div>
                <div className="text-[10px] sm:text-xs text-white/60 whitespace-nowrap">{c.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* My products */}
        <div className="mb-16 sm:mb-24">
          <GroupHeading eyebrow="Built & owned by me" title="My Products" count={indieProducts.length} />
          <div className="space-y-6 sm:space-y-10">
            {indieProducts.map((app, i) => (
              <ShowcaseCard key={app.id} app={app} reverse={i % 2 === 1} />
            ))}
          </div>
        </div>

        {/* Client work */}
        <div className="mb-16 sm:mb-24">
          <GroupHeading eyebrow="Freelance" title="Client Work" count={clientProducts.length} />
          <div className="space-y-6 sm:space-y-10">
            {clientProducts.map((app) => (
              <ShowcaseCard key={app.id} app={app} reverse={false} />
            ))}
          </div>
        </div>

        {/* Company apps */}
        <div>
          <GroupHeading eyebrow="Professional experience" title="Company Apps" count={companyProjects.length} />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {companyProjects.map((project, index) => (
              <div
                key={project.id}
                data-aos="fade-up"
                data-aos-delay={50 + (index % 3) * 80}
                className="group relative flex flex-col glass rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer hover:-translate-y-1.5 hover:border-white/20 transition-all duration-500"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative aspect-[16/10] overflow-hidden" style={{ backgroundColor: project.imageBg || '#0b0b14' }}>
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
                  <span className={`absolute top-3 left-3 px-2.5 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-medium bg-gradient-to-r ${project.color} text-white`}>
                    {project.company}
                  </span>
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink className="w-4 h-4 text-white" />
                  </div>
                </div>

                <div className="flex flex-col flex-1 p-4 sm:p-5">
                  <h4 className="text-base sm:text-lg font-display font-bold text-white mb-1.5 line-clamp-1">{project.title}</h4>
                  <p className="text-xs sm:text-sm text-white/70 line-clamp-2 mb-3">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tech.slice(0, 3).map((t) => (
                      <span key={t} className="px-2 py-0.5 rounded-full bg-white/5 text-white/65 text-[10px] sm:text-xs border border-white/10">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-auto flex flex-wrap gap-1.5 sm:gap-2" onClick={(e) => e.stopPropagation()}>
                    {project.links && project.links.length > 0 ? (
                      project.links.map((link) => {
                        const Icon = linkIcon(link.kind);
                        return (
                          <a
                            key={link.label}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-[11px] sm:text-xs font-medium border border-white/15 transition-colors"
                          >
                            <Icon className="w-3.5 h-3.5" />
                            {link.label}
                          </a>
                        );
                      })
                    ) : (
                      <span className="text-[11px] sm:text-xs text-white/45">Internal enterprise app</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center mt-10 sm:mt-14">
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

      {/* Company app modal */}
      {selectedProject && (
        <div
          onClick={() => setSelectedProject(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/90 backdrop-blur-xl animate-fade-in"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-2xl w-full glass rounded-2xl sm:rounded-3xl overflow-hidden animate-scale-in max-h-[85vh] flex flex-col"
          >
            <button
              onClick={() => setSelectedProject(null)}
              aria-label="Close"
              className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/70 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
            <div className="overflow-y-auto overscroll-contain" data-lenis-prevent>
              <div className="relative aspect-[16/10]" style={{ backgroundColor: selectedProject.imageBg || '#0b0b14' }}>
                <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-contain" />
              </div>

              <div className="p-5 sm:p-8">
                <span className={`inline-block px-2.5 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-medium bg-gradient-to-r ${selectedProject.color} text-white mb-3 sm:mb-4`}>
                  {selectedProject.company}
                </span>

                <h3 className="text-xl sm:text-2xl lg:text-3xl font-display font-bold text-white mb-3 sm:mb-4">{selectedProject.title}</h3>

                <p className="text-white/70 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">{selectedProject.description}</p>

                <div className="mb-5 sm:mb-6">
                  <h4 className="text-xs sm:text-sm font-semibold text-white/75 mb-2 sm:mb-3 tracking-wider">TECHNOLOGIES</h4>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {selectedProject.tech.map((tech) => (
                      <span key={tech} className="px-2.5 sm:px-4 py-1 sm:py-2 rounded-full bg-white/5 text-white text-xs sm:text-sm border border-white/10">
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
                        const Icon = linkIcon(link.kind);
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
        </div>
      )}
    </section>
  );
}
