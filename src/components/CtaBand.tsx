import { ArrowRight } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

// High-intent call to action placed right after the Projects section.
export default function CtaBand() {
  return (
    <section className="relative px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
      <div data-aos="zoom-in" className="beam relative max-w-6xl mx-auto rounded-3xl overflow-hidden" style={{ ['--beam-color' as string]: '#a78bfa' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-fuchsia-600" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_15%,rgba(255,255,255,0.28),transparent_45%)]" />
        <div className="relative px-6 py-10 sm:px-12 sm:py-14 flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-12">
          <div className="flex-1 text-center lg:text-left">
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-white/75 mb-3">Your idea → App Store &amp; Google Play</p>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white leading-tight">
              Your app could be the next one here.
            </h3>
            <p className="mt-3 text-sm sm:text-base text-white/85 max-w-xl mx-auto lg:mx-0">
              Tell me what you have in mind. You'll get an honest take on the best approach, no obligation.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row lg:flex-col gap-3 justify-center shrink-0">
            <a
              href="#planner"
              className="btn-shine relative overflow-hidden inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white text-primary font-bold text-sm sm:text-base shadow-xl hover:scale-105 active:scale-95 transition-transform"
            >
              Plan my app <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="https://wa.me/919028230580?text=Hi%20Mujtaba!%20%F0%9F%91%8B%20I%27d%20like%20to%20talk%20about%20an%20app."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-black/25 border border-white/30 text-white font-semibold text-sm sm:text-base hover:bg-black/35 transition-colors"
            >
              <WhatsAppIcon /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
