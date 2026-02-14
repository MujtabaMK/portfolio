import { Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-8 sm:py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
          {/* Logo */}
          <div className="text-xl sm:text-2xl font-display font-bold hover:scale-105 transition-transform">
            <span className="text-gradient">M.</span>
          </div>

          {/* Copyright */}
          <div className="text-center order-3 sm:order-2">
            <p className="text-white/60 text-xs sm:text-sm">
              © {currentYear} Mujtaba Khan. All rights reserved.
            </p>
          </div>

          {/* Tagline */}
          <div className="flex items-center gap-1.5 sm:gap-2 text-white/50 text-xs sm:text-sm order-2 sm:order-3">
            <span>Crafted with</span>
            <span className="animate-pulse">
              <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-red-500 fill-red-500" />
            </span>
            <span>and Swift</span>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-white/5 flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm">
          {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={(e) => {
                e.preventDefault();
                document.querySelector(`#${link.toLowerCase()}`)?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-white/40 hover:text-white transition-colors"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
