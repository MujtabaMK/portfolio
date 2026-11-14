// Giant scrolling headline before the Contact section.
// Two rows moving in opposite directions; pure CSS transforms.
const rowA = [
  { text: "Let's build", style: 'outline' },
  { text: '✦', style: 'star' },
  { text: 'your next app', style: 'gradient' },
  { text: '✦', style: 'star' },
];
const rowB = ['iOS', 'Android', 'Flutter', 'SwiftUI', 'Kotlin', 'Firebase'];

export default function KineticHeadline() {
  return (
    <section className="relative py-10 sm:py-16 overflow-hidden select-none" aria-label="Let's build your next app">
      <div className="marquee-mask">
        <div className="marquee-track-slow flex w-max items-center" aria-hidden="true">
          {[...rowA, ...rowA, ...rowA, ...rowA].map((item, i) => (
            <span
              key={i}
              className={`pr-6 sm:pr-10 whitespace-nowrap font-display font-extrabold uppercase leading-none tracking-tight ${
                item.style === 'star'
                  ? 'text-4xl sm:text-6xl lg:text-7xl text-accent'
                  : 'text-6xl sm:text-8xl lg:text-[8.5rem]'
              } ${item.style === 'outline' ? 'text-outline' : ''} ${item.style === 'gradient' ? 'text-gradient' : ''}`}
            >
              {item.text}
            </span>
          ))}
        </div>
      </div>
      <div className="marquee-mask mt-3 sm:mt-5">
        <div className="marquee-track-reverse flex w-max items-center" aria-hidden="true">
          {[...rowB, ...rowB, ...rowB, ...rowB].map((t, i) => (
            <span key={i} className="flex items-center gap-6 sm:gap-10 pr-6 sm:pr-10 whitespace-nowrap text-2xl sm:text-4xl lg:text-5xl font-display font-bold uppercase text-outline">
              {t}
              <span className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-gradient-to-r from-primary to-accent" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
