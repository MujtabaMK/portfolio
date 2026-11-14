import { useEffect, useRef } from 'react';

interface CountUpProps {
  value: number;
  suffix?: string;
  duration?: number;
  className?: string;
}

// Renders the final number in the HTML (good for SEO / no-JS), then counts up
// from 0 the first time it scrolls into view. Writes textContent directly so
// React doesn't re-render on every animation frame.
export default function CountUp({ value, suffix = '', duration = 1400, className }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let raf = 0;
    el.textContent = `0${suffix}`;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const step = (now: number) => {
          const p = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - p, 3);
          el.textContent = `${Math.round(value * eased)}${suffix}`;
          if (p < 1) raf = requestAnimationFrame(step);
        };
        raf = requestAnimationFrame(step);
      },
      { threshold: 0.6 }
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
      el.textContent = `${value}${suffix}`;
    };
  }, [value, suffix, duration]);

  return (
    <span ref={ref} className={className}>
      {value}
      {suffix}
    </span>
  );
}
