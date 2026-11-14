import { Award, Code2, Dumbbell, ExternalLink } from 'lucide-react';

type Category = 'Development' | 'Health & Fitness';

interface Certificate {
  title: string;
  instructors: string;
  date: string;
  hours: string;
  id: string;
  category: Category;
}

const certificates: Certificate[] = [
  {
    title: 'Programming macOS Using SwiftUI - Project Based Learning',
    instructors: 'Mohammad Azam, Nick Walter',
    date: 'Mar 2024',
    hours: '12',
    id: 'UC-e6462eb9-1353-4066-93fc-77e07b79ff5b',
    category: 'Development',
  },
  {
    title: 'Learn Dart Programming for Flutter',
    instructors: 'Smartherd Developers',
    date: 'Jan 2024',
    hours: '4.5',
    id: 'UC-b33d1742-f245-4de8-85fd-011f6f031966',
    category: 'Development',
  },
  {
    title: 'SwiftUI Cookbook - Over 100 Recipes for Building iOS Apps',
    instructors: 'Mohammad Azam',
    date: 'Jan 2024',
    hours: '11.5',
    id: 'UC-ce64fc03-8011-4bf1-903c-685f488e9b60',
    category: 'Development',
  },
  {
    title: 'SwiftCoin | SwiftUI Cryptocurrency Mobile App | iOS 16',
    instructors: 'Stephan Dowless',
    date: 'Oct 2022',
    hours: '4',
    id: 'UC-a6dafeda-152e-4291-b5d3-a6da1e7d6a2e',
    category: 'Development',
  },
  {
    title: 'iOS 13 & Swift 5: Chat App With Firestore | MVVM',
    instructors: 'Stephan Dowless',
    date: 'Sep 2022',
    hours: '9',
    id: 'UC-17210a4a-8c56-44cb-a188-5007b077357e',
    category: 'Development',
  },
  {
    title: 'Body Transformation Blueprint: Shred Fat & Build Lean Muscle',
    instructors: 'Brad Newton',
    date: 'Oct 2026',
    hours: '12',
    id: 'UC-1693c159-aac9-4a04-81d0-1cc26b442c08',
    category: 'Health & Fitness',
  },
  {
    title: 'Diet And Nutrition Coach Certification: Beginner To Advanced',
    instructors: 'Felix Harder',
    date: 'Jul 2026',
    hours: '5',
    id: 'UC-e9d28da4-8ccf-494c-a317-497d3742481d',
    category: 'Health & Fitness',
  },
  {
    title: 'Fundamentals Of Weight Training & Bodybuilding: Gym Workouts',
    instructors: 'Paul Nam',
    date: 'Apr 2026',
    hours: '1.5',
    id: 'UC-55ecca90-100e-4009-8cfb-20820e91679b',
    category: 'Health & Fitness',
  },
];

const categoryStyles: Record<Category, { icon: typeof Code2; color: string }> = {
  Development: { icon: Code2, color: 'from-blue-500 to-cyan-500' },
  'Health & Fitness': { icon: Dumbbell, color: 'from-emerald-500 to-teal-500' },
};

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-16 sm:py-24 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          <span
            data-aos="fade-up"
            className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-medium mb-4 sm:mb-6"
          >
            Always Learning
          </span>
          <h2
            data-aos="fade-up"
            data-aos-delay="80"
            className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-3 sm:mb-4"
          >
            Certifications <span className="text-gradient">& courses</span>
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="160"
            className="text-white/75 max-w-2xl mx-auto text-sm sm:text-base px-4"
          >
            Udemy certificates of completion — click any card to verify it on Udemy.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {certificates.map((cert, index) => {
            const { icon: Icon, color } = categoryStyles[cert.category];
            return (
              <a
                key={cert.id}
                href={`https://ude.my/${cert.id}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Verify Udemy certificate: ${cert.title}`}
                data-aos="fade-up"
                data-aos-delay={100 + (index % 4) * 100}
                className="group relative spotlight tilt glass rounded-2xl p-5 sm:p-6 flex flex-col hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4 sm:mb-5">
                  <div
                    className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <ExternalLink className="w-4 h-4 text-white/40 group-hover:text-white transition-colors" />
                </div>
                <span className="text-[11px] sm:text-xs font-medium uppercase tracking-wider text-primary mb-2">
                  {cert.category}
                </span>
                <h3 className="text-base sm:text-lg font-display font-bold text-white mb-2 leading-snug">
                  {cert.title}
                </h3>
                <p className="text-white/70 text-xs sm:text-sm mb-4">{cert.instructors}</p>
                <div className="mt-auto flex items-center gap-2 text-white/60 text-xs">
                  <Award className="w-3.5 h-3.5" />
                  <span>Udemy · {cert.date} · {cert.hours} hrs</span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
