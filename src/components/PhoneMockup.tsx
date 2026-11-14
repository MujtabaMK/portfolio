import { Mail, Signal, Wifi, Code2, Flame, Hammer, Layers } from 'lucide-react';
import iconCoreSyncGo from '../assets/images/icon-coresyncgo.png';
import iconHabitNaro from '../assets/images/icon-habitnaro.png';
import iconSalvendi from '../assets/images/icon-salvendi.png';
import iconFitrize from '../assets/images/icon-fitrize.png';
import profileImg from '../assets/images/profile-2026.jpg';

// iPhone/iPad visitors go straight to the App Store; everyone else (Android, desktop)
// goes to the app's website, which links to both the App Store and Google Play.
const myApps = [
  { name: 'CoreSyncGo', icon: iconCoreSyncGo, appStore: 'https://apps.apple.com/us/app/coresync-go/id6761988704', website: 'https://coresyncgo.com/' },
  { name: 'HabitNaro', icon: iconHabitNaro, appStore: 'https://apps.apple.com/in/app/habitnaro-habit-tracker/id6822220701', website: 'https://coresyncgo.com/HabitNaro_index.html' },
  { name: 'Salvendi', icon: iconSalvendi, appStore: 'https://apps.apple.com/in/app/salvendi/id6827112514', website: 'https://coresyncgo.com/Sal_index.html' },
  { name: 'Fitrize', icon: iconFitrize, appStore: 'https://apps.apple.com/us/app/fitrize/id6830607304', website: 'https://coresyncgo.com/Fitrize_index.html' },
];

const isAppleMobile = () =>
  typeof navigator !== 'undefined' &&
  (/iPad|iPhone|iPod/.test(navigator.userAgent) ||
    (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)); // iPadOS reports as Mac

const toolApps = [
  { name: 'Swift', Icon: Code2, bg: 'from-orange-500 to-red-500' },
  { name: 'Flutter', Icon: Layers, bg: 'from-sky-400 to-blue-600' },
  { name: 'Firebase', Icon: Flame, bg: 'from-amber-400 to-orange-500' },
  { name: 'Xcode', Icon: Hammer, bg: 'from-blue-500 to-indigo-600' },
];

const GithubGlyph = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor" aria-hidden="true">
    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55v-1.94c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.27-5.24-5.66 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.18 1.17a11.04 11.04 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.17 3.17-1.17.63 1.58.23 2.75.11 3.04.74.8 1.18 1.82 1.18 3.07 0 4.4-2.69 5.37-5.25 5.65.41.35.77 1.05.77 2.11v3.13c0 .3.21.67.8.55C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5z" />
  </svg>
);

const LinkedinGlyph = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor" aria-hidden="true">
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
  </svg>
);

const WhatsAppGlyph = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor" aria-hidden="true">
    <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.08-.3-.15-1.26-.46-2.39-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.07c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.7.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2-1.41.25-.7.25-1.29.18-1.41-.08-.13-.27-.2-.57-.35M12.05 21.79h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.89-9.88 2.64 0 5.12 1.03 6.99 2.9a9.82 9.82 0 0 1 2.89 6.99c0 5.45-4.44 9.88-9.88 9.88m8.41-18.3A11.81 11.81 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.88 11.88 0 0 0 5.68 1.45h.01c6.55 0 11.89-5.34 11.89-11.89a11.82 11.82 0 0 0-3.48-8.41" />
  </svg>
);

const dock = [
  { label: 'Email', href: 'mailto:mujtabakhan@mujtabakhan.com', bg: 'bg-gradient-to-b from-sky-400 to-blue-600', glyph: <Mail className="w-6 h-6" /> },
  { label: 'WhatsApp', href: 'https://wa.me/919028230580', bg: 'bg-gradient-to-b from-green-400 to-green-600', glyph: <WhatsAppGlyph /> },
  { label: 'GitHub', href: 'https://github.com/MujtabaMK', bg: 'bg-gradient-to-b from-zinc-700 to-zinc-900', glyph: <GithubGlyph /> },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/mujtaba-khan-78228879', bg: 'bg-gradient-to-b from-sky-600 to-blue-800', glyph: <LinkedinGlyph /> },
];

// A CSS-built iPhone showing a "home screen" of my real apps.
// Everything here is static DOM + transform/opacity animations — no canvas, no blur.
// The outer `.phone-3d` element gets --rx/--ry from the pointer handler in App.tsx (desktop).
export default function PhoneMockup() {
  const ios = isAppleMobile();
  return (
    <div className="phone-float relative mx-auto w-[280px] sm:w-[290px]" aria-label="iPhone showing Mujtaba Khan's apps">
      {/* Glow under the phone */}
      <div className="absolute -inset-10 rounded-[4rem] bg-gradient-to-br from-primary/40 via-accent/30 to-fuchsia-500/30 opacity-60 phone-glow" aria-hidden="true" />

      <div className="phone-3d relative">
        {/* Frame */}
        <div className="relative rounded-[3rem] p-[10px] bg-gradient-to-b from-zinc-600 via-zinc-800 to-zinc-700 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.9),inset_0_0_0_1px_rgba(255,255,255,0.12)]">
          {/* Side buttons */}
          <span className="absolute -left-[3px] top-28 w-[3px] h-10 rounded-l bg-zinc-600" aria-hidden="true" />
          <span className="absolute -left-[3px] top-44 w-[3px] h-14 rounded-l bg-zinc-600" aria-hidden="true" />
          <span className="absolute -right-[3px] top-36 w-[3px] h-16 rounded-r bg-zinc-600" aria-hidden="true" />

          {/* Screen */}
          <div className="relative aspect-[9/19.5] rounded-[2.4rem] overflow-hidden phone-wallpaper">
            {/* Dynamic Island */}
            <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-[34%] h-[22px] rounded-full bg-black z-30" aria-hidden="true" />

            {/* Status bar */}
            <div className="relative z-20 flex items-center justify-between px-6 pt-3 text-[11px] font-semibold text-white" aria-hidden="true">
              <span>9:41</span>
              <span className="flex items-center gap-1">
                <Signal className="w-3 h-3" />
                <Wifi className="w-3 h-3" />
                <span className="relative w-[20px] h-[10px] rounded-[3px] border border-white/80 ml-0.5">
                  <span className="absolute inset-[1.5px] right-[4px] rounded-[1px] bg-white" />
                </span>
              </span>
            </div>

            {/* Notification banner (drops in) */}
            <a
              href="#contact"
              className="phone-notif absolute left-2.5 right-2.5 top-9 z-40 flex items-center gap-2.5 rounded-2xl bg-zinc-900/90 border border-white/10 p-2.5 shadow-2xl"
            >
              <span className="w-8 h-8 shrink-0 rounded-lg bg-gradient-to-b from-green-400 to-green-600 flex items-center justify-center text-white">
                <WhatsAppGlyph />
              </span>
              <span className="min-w-0 text-left">
                <span className="flex items-center justify-between text-[10px] text-white/50">
                  <span className="font-semibold text-white/80">Mujtaba</span>
                  <span>now</span>
                </span>
                <span className="block text-[11px] leading-tight text-white truncate">Have an app idea? Let's build it 🚀</span>
              </span>
            </a>

            <div className="relative z-10 px-4 pt-5">
              {/* Profile widget */}
              <div className="phone-pop rounded-[1.4rem] bg-white/15 border border-white/15 p-3 flex items-center gap-3" style={{ ['--i' as string]: 0 }}>
                <img src={profileImg} alt="" className="w-12 h-12 rounded-full object-cover ring-2 ring-white/40" />
                <div className="min-w-0 text-left">
                  <div className="text-[13px] font-bold text-white leading-tight">Mujtaba Khan</div>
                  <div className="text-[10px] text-white/75">iOS · Android · Flutter</div>
                  <div className="mt-1 flex gap-1.5 text-[9px] font-semibold">
                    <span className="px-1.5 py-0.5 rounded-full bg-white/20 text-white">10+ yrs</span>
                    <span className="px-1.5 py-0.5 rounded-full bg-white/20 text-white">10+ apps</span>
                  </div>
                </div>
              </div>

              {/* My apps */}
              <div className="mt-4 grid grid-cols-4 gap-x-2 gap-y-3">
                {myApps.map((app, i) => (
                  <a
                    key={app.name}
                    href={ios ? app.appStore : app.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="phone-pop group flex flex-col items-center gap-1"
                    style={{ ['--i' as string]: i + 1 }}
                  >
                    <img
                      src={app.icon}
                      alt={ios ? `${app.name} on the App Store` : `${app.name} website`}
                      className="w-12 h-12 rounded-[0.85rem] shadow-lg group-hover:scale-110 transition-transform duration-300"
                    />
                    <span className="text-[9px] text-white font-medium truncate max-w-full">{app.name}</span>
                  </a>
                ))}
                {toolApps.map(({ name, Icon, bg }, i) => (
                  <div key={name} className="phone-pop flex flex-col items-center gap-1" style={{ ['--i' as string]: i + 5 }}>
                    <span className={`w-12 h-12 rounded-[0.85rem] bg-gradient-to-b ${bg} flex items-center justify-center shadow-lg`}>
                      <Icon className="w-6 h-6 text-white" />
                    </span>
                    <span className="text-[9px] text-white font-medium">{name}</span>
                  </div>
                ))}
              </div>

              {/* Widgets */}
              <div className="mt-4 grid grid-cols-2 gap-2.5">
                <div className="phone-pop rounded-[1.2rem] bg-gradient-to-br from-indigo-500/90 to-violet-700/90 p-2.5 text-left" style={{ ['--i' as string]: 9 }}>
                  <div className="text-[9px] uppercase tracking-wider text-white/70">Live on</div>
                  <div className="mt-1 text-xl font-bold text-white leading-none whitespace-nowrap">4 apps</div>
                  <div className="mt-2 text-[9px] text-white/80 leading-tight">App Store &amp; Google Play</div>
                </div>
                <div className="phone-pop rounded-[1.2rem] bg-white/15 border border-white/15 p-2.5 text-left" style={{ ['--i' as string]: 10 }}>
                  <div className="text-[9px] uppercase tracking-wider text-white/70">Based in</div>
                  <div className="mt-1 text-base font-bold text-white leading-tight">Mumbai</div>
                  <div className="mt-2 flex items-center gap-1 text-[9px] text-white/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                    India · IST
                  </div>
                </div>
              </div>

              {/* Page dots */}
              <div className="mt-3 flex justify-center gap-1.5" aria-hidden="true">
                <span className="w-1.5 h-1.5 rounded-full bg-white" />
                <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
              </div>
            </div>

            {/* Dock */}
            <div className="absolute left-2.5 right-2.5 bottom-2.5 z-10 rounded-[1.8rem] bg-white/20 border border-white/10 px-3 py-2 grid grid-cols-4 gap-2">
              {dock.map((d) => (
                <a
                  key={d.label}
                  href={d.href}
                  target={d.href.startsWith('http') ? '_blank' : undefined}
                  rel={d.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={d.label}
                  className={`mx-auto w-12 h-12 rounded-[0.85rem] ${d.bg} flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform duration-300`}
                >
                  {d.glyph}
                </a>
              ))}
            </div>

            {/* Home indicator */}
            <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-[38%] h-1 rounded-full bg-white/70 z-20" aria-hidden="true" />
          </div>
        </div>
      </div>
    </div>
  );
}
