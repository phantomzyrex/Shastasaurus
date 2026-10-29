import React, { useEffect, useRef, useState } from 'react';

interface FooterProps {
  onBackToSurface: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onBackToSurface }) => {
  const studioContainerRef = useRef<HTMLDivElement>(null);
  const studioTextRef = useRef<HTMLSpanElement>(null);
  const [studioFontSize, setStudioFontSize] = useState<number | null>(null);

  useEffect(() => {
    let rafId: number | null = null;

    const fitStudioWordmark = () => {
      const container = studioContainerRef.current;
      if (!container) return;

      const containerWidth = container.clientWidth;
      if (containerWidth <= 0) return;

      // Measure offscreen without mutating live DOM layout
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.font = "800 100px 'Jost', -apple-system, BlinkMacSystemFont, sans-serif";
        const metricsWidth = ctx.measureText('Shivang Studios').width;
        // Account for tracking-[-0.02em] across 14 character intervals
        const naturalWidth = Math.max(400, metricsWidth - 14 * 2);
        const fitted = Math.round((containerWidth / naturalWidth) * 100 * 0.99);
        setStudioFontSize((prev) => (prev === fitted ? prev : fitted));
      } else {
        const fallback = Math.round(containerWidth * 0.146);
        setStudioFontSize((prev) => (prev === fallback ? prev : fallback));
      }
    };

    const scheduleFit = () => {
      if (rafId !== null) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(fitStudioWordmark);
    };

    fitStudioWordmark();

    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(scheduleFit).catch(() => {});
    }

    window.addEventListener('resize', scheduleFit, { passive: true });
    return () => {
      if (rafId !== null) cancelAnimationFrame(rafId);
      window.removeEventListener('resize', scheduleFit);
    };
  }, []);

  return (
    <footer
      id="contact"
      aria-labelledby="contact-heading"
      className="relative z-20 border-t border-[#EAF6FF]/12 bg-[#010614] pt-24 pb-12 px-6 sm:px-10 md:px-14 overflow-hidden"
    >
      {/* Subtle Deep-Ocean Geometric Constellation Background SVG */}
      <svg
        className="pointer-events-none absolute inset-0 w-full h-full opacity-35"
        viewBox="0 0 1440 760"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        {/* Top-left triangle near 13 */}
        <polygon
          points="126,64 185,112 118,144"
          stroke="#3FA0E6"
          strokeOpacity="0.32"
          strokeWidth="1"
        />
        <circle cx="126" cy="64" r="2.5" fill="#6FE8FF" fillOpacity="0.55" />
        <circle cx="185" cy="112" r="2.5" fill="#6FE8FF" fillOpacity="0.45" />
        <circle cx="118" cy="144" r="2" fill="#3FA0E6" fillOpacity="0.4" />

        {/* Upper-right constellation geometry near the return button */}
        <line
          x1="948"
          y1="48"
          x2="906"
          y2="146"
          stroke="#3FA0E6"
          strokeOpacity="0.26"
          strokeWidth="1"
        />
        <polygon
          points="906,146 844,185 954,284 1012,235"
          stroke="#3FA0E6"
          strokeOpacity="0.28"
          strokeWidth="1"
        />
        <circle cx="906" cy="146" r="2.5" fill="#6FE8FF" fillOpacity="0.55" />
        <circle cx="844" cy="185" r="2.5" fill="#6FE8FF" fillOpacity="0.55" />
        <circle cx="550" cy="218" r="2.2" fill="#6FE8FF" fillOpacity="0.45" />

        {/* Center-left triangle above 'Shivang Studios' */}
        <polygon
          points="376,348 345,456 418,434"
          stroke="#3FA0E6"
          strokeOpacity="0.26"
          strokeWidth="1"
        />
        <circle cx="376" cy="348" r="2" fill="#6FE8FF" fillOpacity="0.4" />
        <circle cx="418" cy="434" r="2.5" fill="#6FE8FF" fillOpacity="0.45" />
        <circle cx="1378" cy="456" r="2" fill="#6FE8FF" fillOpacity="0.4" />
      </svg>

      <div className="relative z-10 max-w-[1400px] w-full mx-auto">
        {/* TOP BLOCK: 13 CURATORIAL INQUIRIES + LET'S TALK + RETURN BUTTON */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 pb-14 border-b border-[#EAF6FF]/12">
          <div>
            {/* 13 + Eyebrow */}
            <div className="flex items-baseline gap-3.5 mb-3">
              <span
                className="font-display text-4xl sm:text-5xl text-[#EAF6FF]/30 leading-none select-none tabular-nums"
                aria-hidden="true"
              >
                13
              </span>
              <span className="font-body text-[11px] sm:text-xs uppercase tracking-[0.22em] text-[#6FE8FF] font-normal">
                CURATORIAL INQUIRIES &amp; DIGITAL PORTFOLIO
              </span>
            </div>

            {/* Large LET'S TALK */}
            <h2
              id="contact-heading"
              className="font-display text-5xl sm:text-7xl md:text-[5.25rem] uppercase tracking-[0.01em] text-[#EAF6FF] leading-none mb-7"
            >
              LET&apos;S TALK
            </h2>

            {/* Contact Links Row: techhelp.shivang@gmail.com · github.com/phantomzyrex · Paleo-Dossier */}
            <div className="flex flex-wrap items-center gap-x-3.5 gap-y-2 text-sm sm:text-[15px] font-body">
              <a
                href="mailto:techhelp.shivang@gmail.com"
                className="text-[#6FE8FF] hover:text-[#EAF6FF] transition-colors focus-visible:outline-2 focus-visible:outline-[#6FE8FF]"
              >
                techhelp.shivang@gmail.com
              </a>
              <span className="text-[#EAF6FF]/30 select-none" aria-hidden="true">
                ·
              </span>
              <a
                href="https://github.com/phantomzyrex"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#EAF6FF]/75 hover:text-[#6FE8FF] transition-colors focus-visible:outline-2 focus-visible:outline-[#6FE8FF]"
              >
                github.com/phantomzyrex
              </a>
              <span className="text-[#EAF6FF]/30 select-none" aria-hidden="true">
                ·
              </span>
              <a
                href="#overview"
                className="text-[#EAF6FF]/75 hover:text-[#6FE8FF] transition-colors focus-visible:outline-2 focus-visible:outline-[#6FE8FF]"
              >
                Paleo-Dossier
              </a>
            </div>
          </div>

          {/* Right Column: Pill/Rounded Button + Sub-caption */}
          <div className="flex flex-col items-start lg:items-end gap-2.5">
            <button
              type="button"
              onClick={onBackToSurface}
              aria-label="Back to surface (return to 0 m)"
              className="group rounded-lg px-6 py-3.5 border border-[#6FE8FF]/55 bg-[#030F2B]/55 hover:bg-[#1E6FC0]/30 hover:border-[#6FE8FF] text-[#EAF6FF] font-display text-xs sm:text-[13px] uppercase tracking-[0.16em] shadow-[0_0_25px_rgba(111,232,255,0.12)] transition-all cursor-pointer focus-visible:outline-2 focus-visible:outline-[#6FE8FF]"
            >
              ↑ BACK TO SURFACE (0 M · 230 MYA)
            </button>
            <p className="text-[11px] text-[#EAF6FF]/45 tracking-wide">
              Resets bathypelagic depth gauge to Carnian surface glow
            </p>
          </div>
        </div>

        {/* MIDDLE BLOCK: Full Side-by-Side Expanded Bold "Shivang Studios" Wordmark */}
        <div
          ref={studioContainerRef}
          className="w-full py-12 sm:py-16 border-b border-[#EAF6FF]/12 flex items-center justify-center overflow-visible select-none"
        >
          <span
            ref={studioTextRef}
            className="inline-block whitespace-nowrap font-body font-extrabold tracking-[-0.02em] leading-[1.02] text-[#EAF6FF]"
            style={{
              fontSize: studioFontSize ? `${studioFontSize}px` : '13.4vw',
              textShadow:
                '0 0 28px rgba(111, 232, 255, 0.48), 0 0 68px rgba(63, 160, 230, 0.28)',
            }}
          >
            Shivang Studios
          </span>
        </div>

        {/* BOTTOM BAR: Shivang Gupta · Created with ♥ by Shivang Studios | GitHub · Email */}
        <div className="pt-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs sm:text-[13px] text-[#EAF6FF]/65">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-semibold text-[#EAF6FF] tracking-wide">
              Shivang Gupta
            </span>
            <span className="text-[#EAF6FF]/30" aria-hidden="true">
              ·
            </span>
            <span>
              Created with{' '}
              <span
                className="inline-block text-[#6FE8FF] mx-0.5 drop-shadow-[0_0_8px_rgba(111,232,255,0.85)]"
                aria-label="love"
              >
                ♥
              </span>{' '}
              by Shivang Studios
            </span>
            <span className="text-[#EAF6FF]/30" aria-hidden="true">
              ·
            </span>
            <span className="text-[#EAF6FF]/45">(c) 2026</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/phantomzyrex"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#EAF6FF]/75 hover:text-[#6FE8FF] transition-colors focus-visible:outline-2 focus-visible:outline-[#6FE8FF]"
            >
              GitHub
            </a>
            <span className="text-[#EAF6FF]/25" aria-hidden="true">
              ·
            </span>
            <a
              href="mailto:techhelp.shivang@gmail.com"
              className="text-[#EAF6FF]/75 hover:text-[#6FE8FF] transition-colors focus-visible:outline-2 focus-visible:outline-[#6FE8FF]"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
