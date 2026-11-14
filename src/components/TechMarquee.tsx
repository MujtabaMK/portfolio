const items = [
  'Swift', 'SwiftUI', 'Flutter', 'Dart', 'Kotlin', 'Objective-C', 'Firebase',
  'Core Data', 'Combine', 'REST APIs', 'Xcode', 'Android Studio', 'MVVM',
  'Clean Architecture', 'TestFlight', 'App Store', 'Google Play',
];

// Infinite tech-stack strip. Pure CSS transform animation (GPU-composited),
// the list is rendered twice so the loop is seamless.
export default function TechMarquee() {
  return (
    <div className="relative py-6 sm:py-8 border-y border-white/5 marquee-mask" aria-label="Technologies I work with">
      <div className="marquee-track flex w-max">
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            aria-hidden={i >= items.length}
            className="flex items-center gap-3 sm:gap-4 pr-3 sm:pr-4 whitespace-nowrap text-sm sm:text-lg font-display font-semibold text-white/45"
          >
            {item}
            <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-primary to-accent" />
          </span>
        ))}
      </div>
    </div>
  );
}
