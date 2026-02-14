import { useEffect, useRef, useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github} from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'mujtabaulhasankhan@rediffmail.com',
    href: 'mailto:mujtabaulhasankhan@rediffmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91-9028230580',
    href: 'tel:+919028230580',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Mumbai, Maharashtra, India',
    href: '#',
  },
];

const socialLinks = [
  { icon: Linkedin, href: 'https://www.linkedin.com/in/mujtaba-khan-78228879?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app', label: 'LinkedIn' },
  { icon: Github, href: 'https://github.com/MujtabaMK', label: 'GitHub' },
];

export default function Contact() {
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
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="relative py-16 sm:py-24 lg:py-32 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-12 sm:mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-4">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-white/60 max-w-xl mx-auto text-sm sm:text-base">
            Have a project in mind? Let's discuss how I can help bring your ideas to life.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid sm:grid-cols-3 gap-4 sm:gap-6 mb-12">
          {contactInfo.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              className={`glass rounded-2xl p-5 sm:p-6 text-center group hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all">
                <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <div className="text-xs sm:text-sm text-white/50 mb-1">{item.label}</div>
              <div className="text-white text-sm sm:text-base font-medium group-hover:text-primary transition-colors break-words">
                {item.value}
              </div>
            </a>
          ))}
        </div>

        {/* Social Links */}
        <div
          className={`text-center transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <h4 className="text-sm font-semibold text-white/50 mb-4 sm:mb-6">FOLLOW ME</h4>
          <div className="flex justify-center gap-4 sm:gap-6">
            {socialLinks.map((social, index) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-white/5 flex items-center justify-center hover:bg-primary/20 transition-all group hover:scale-110 hover:-translate-y-1"
                style={{ transitionDelay: `${600 + index * 100}ms` }}
              >
                <social.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white/60 group-hover:text-primary transition-colors" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
