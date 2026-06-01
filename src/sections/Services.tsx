import { Smartphone, Layers, Rocket, Zap } from 'lucide-react';

const services = [
  {
    icon: Smartphone,
    title: 'iOS App Development',
    blurb:
      'Native iOS apps in Swift / SwiftUI / Objective-C — architecture, MVVM/VIPER, REST + Core Data, smooth animations.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Layers,
    title: 'Flutter Cross-Platform',
    blurb:
      'Ship to iOS + Android from one codebase. CoreSyncGo is my own indie product live on both stores.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Rocket,
    title: 'App Store & Play Store Launch',
    blurb:
      'Provisioning, signing, listing copy, screenshots, App Store Connect and Play Console — published 10+ apps.',
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: Zap,
    title: 'Performance & Refactors',
    blurb:
      'Profiling, render audits, Core Data and network optimization. Cut app load time by 40% at upGrad.',
    color: 'from-emerald-500 to-teal-500',
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-16 sm:py-24 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          <span
            data-aos="fade-up"
            className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-medium mb-4 sm:mb-6"
          >
            What I Do
          </span>
          <h2
            data-aos="fade-up"
            data-aos-delay="80"
            className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-3 sm:mb-4"
          >
            Services <span className="text-gradient">I offer</span>
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="160"
            className="text-white/75 max-w-2xl mx-auto text-sm sm:text-base px-4"
          >
            Whether you need a senior engineer on your team or a developer to ship your app idea — here's how I help.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              data-aos="fade-up"
              data-aos-delay={100 + index * 100}
              className="group glass rounded-2xl p-5 sm:p-6 hover:-translate-y-1 transition-all duration-300 cursor-default"
            >
              <div
                className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 sm:mb-5 group-hover:scale-110 transition-transform`}
              >
                <service.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <h3 className="text-base sm:text-lg font-display font-bold text-white mb-2">
                {service.title}
              </h3>
              <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
                {service.blurb}
              </p>
            </div>
          ))}
        </div>

        {/* Inline CTA */}
        <div
          data-aos="fade-up"
          data-aos-delay="500"
          className="mt-10 sm:mt-14 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 text-center"
        >
          <p className="text-white/75 text-sm sm:text-base">Have a project in mind?</p>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-white/5 border border-white/15 text-white text-sm font-medium hover:bg-white/10 transition-colors"
          >
            Let's talk →
          </a>
        </div>
      </div>
    </section>
  );
}
