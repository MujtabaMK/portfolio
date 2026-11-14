import { useEffect, useRef, useState } from 'react';

const INTERACTIVE = 'a, button, [role="button"], input, textarea, select, label, .tilt';

// Glowing ring that trails the mouse and grows over anything clickable.
// Desktop mouse only; moves with transforms in a rAF loop that sleeps when idle.
export default function CustomCursor() {
  const [enabled] = useState(
    () =>
      typeof window !== 'undefined' &&
      window.matchMedia('(hover: hover) and (pointer: fine)').matches &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
  const rootRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!enabled) return;
    const root = rootRef.current;
    const ring = ringRef.current;
    const dot = dotRef.current;
    if (!root || !ring || !dot) return;

    const target = { x: -100, y: -100 };
    const pos = { x: -100, y: -100 };
    let raf = 0;

    const loop = () => {
      pos.x += (target.x - pos.x) * 0.2;
      pos.y += (target.y - pos.y) * 0.2;
      ring.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`;
      if (Math.abs(target.x - pos.x) > 0.1 || Math.abs(target.y - pos.y) > 0.1) {
        raf = requestAnimationFrame(loop);
      } else {
        raf = 0;
      }
    };

    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== 'mouse') return;
      target.x = e.clientX;
      target.y = e.clientY;
      dot.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      root.classList.remove('cursor-hidden');
      if (!raf) raf = requestAnimationFrame(loop);
    };
    const onOver = (e: PointerEvent) => {
      const hit = (e.target as Element | null)?.closest?.(INTERACTIVE);
      root.classList.toggle('cursor-hover', !!hit);
    };
    const onDown = () => root.classList.add('cursor-down');
    const onUp = () => root.classList.remove('cursor-down');
    const onLeave = () => root.classList.add('cursor-hidden');

    document.addEventListener('pointermove', onMove, { passive: true });
    document.addEventListener('pointerover', onOver, { passive: true });
    document.addEventListener('pointerdown', onDown, { passive: true });
    document.addEventListener('pointerup', onUp, { passive: true });
    document.documentElement.addEventListener('mouseleave', onLeave);
    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener('pointermove', onMove);
      document.removeEventListener('pointerover', onOver);
      document.removeEventListener('pointerdown', onDown);
      document.removeEventListener('pointerup', onUp);
      document.documentElement.removeEventListener('mouseleave', onLeave);
    };
  }, [enabled]);

  if (!enabled) return null;
  return (
    <div ref={rootRef} className="cursor-hidden" aria-hidden="true">
      <div ref={ringRef} className="cursor-ring">
        <div className="cursor-ring-inner" />
      </div>
      <div ref={dotRef} className="cursor-dot">
        <div className="cursor-dot-inner" />
      </div>
    </div>
  );
}
