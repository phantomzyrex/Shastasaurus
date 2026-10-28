import React, { useEffect, useRef, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!isFinePointer || prefersReduced) {
      setEnabled(false);
      return;
    }
    setEnabled(true);

    const onMouseMove = (e: MouseEvent) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }
      if (trailRef.current) {
        trailRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }

      const target = e.target as HTMLElement | null;
      const isInteractive = Boolean(
        target?.closest('a, button, [role="button"], input, img, [data-cursor-interactive="true"]')
      );
      setHovered(isInteractive);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[90] overflow-hidden" aria-hidden="true">
      <div
        ref={trailRef}
        className={`fixed top-0 left-0 -ml-4 -mt-4 h-8 w-8 rounded-full border transition-all duration-150 ease-out ${
          hovered
            ? 'scale-150 border-[#6FE8FF]/80 bg-[#6FE8FF]/10 shadow-[0_0_24px_rgba(111,232,255,0.45)]'
            : 'scale-75 border-[#6FE8FF]/35 bg-[#6FE8FF]/5 shadow-[0_0_14px_rgba(111,232,255,0.25)]'
        }`}
      />
      <div
        ref={dotRef}
        className={`fixed top-0 left-0 -ml-1 -mt-1 h-2 w-2 rounded-full bg-[#6FE8FF] shadow-[0_0_12px_#6FE8FF] transition-transform duration-75 ${
          hovered ? 'scale-50' : 'scale-100'
        }`}
      />
    </div>
  );
};
