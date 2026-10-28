import React, { useEffect, useState } from 'react';

interface LoaderProps {
  onComplete: () => void;
}

export const Loader: React.FC<LoaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (params.get('autostart') === '1' || prefersReducedMotion) {
      setProgress(100);
      onComplete();
      return;
    }

    const duration = 650;
    const startTime = performance.now();
    let rafId = 0;

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const pct = Math.min(100, Math.round((elapsed / duration) * 100));
      setProgress(pct);
      if (pct < 100) {
        rafId = requestAnimationFrame(tick);
      } else {
        setFading(true);
        window.setTimeout(() => {
          onComplete();
        }, 220);
      }
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#010614] transition-opacity duration-300 ${
        fading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      aria-label="Loading bathypelagic archive"
    >
      <div className="relative h-28 w-[1px] bg-[#EAF6FF]/15 overflow-hidden mb-5">
        <div
          className="w-full bg-[#6FE8FF] transition-transform duration-75 origin-top"
          style={{
            height: '100%',
            transform: `scaleY(${progress / 100})`,
          }}
        />
      </div>
      <div className="font-display text-xs uppercase tracking-[0.28em] text-[#EAF6FF]/85 tabular-nums">
        {String(progress).padStart(3, '0')}
      </div>
    </div>
  );
};
