import React, { useEffect, useRef, useState } from 'react';
import { SectionHeader } from './SectionHeader';
import { EvidenceChip } from './EvidenceChip';
import { DISCOVERY_TIMELINE } from '../data/shastasaurusData';

export const Timeline: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [lineProgress, setLineProgress] = useState(0.25);

  useEffect(() => {
    const updateTimelineProgress = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const viewH = window.innerHeight;
      const total = rect.height + viewH * 0.4;
      const current = viewH * 0.75 - rect.top;
      const ratio = Math.max(0.08, Math.min(1, current / total));
      setLineProgress(ratio);
    };

    updateTimelineProgress();
    window.addEventListener('scroll', updateTimelineProgress, { passive: true });
    window.addEventListener('resize', updateTimelineProgress);
    return () => {
      window.removeEventListener('scroll', updateTimelineProgress);
      window.removeEventListener('resize', updateTimelineProgress);
    };
  }, []);

  return (
    <section
      id="discovery"
      aria-labelledby="discovery-heading"
      className="relative z-20 py-24 sm:py-32 px-6 sm:px-10 md:px-16 max-w-7xl mx-auto"
    >
      <SectionHeader
        number="02"
        depthTag="550 M · TWILIGHT ZONE"
        kicker="CHRONOLOGY OF RESEARCH (1895 – PRESENT)"
        title="Discovery and History"
        subtitle="More than a century of fossil excavations across California, China, British Columbia, and Britain has repeatedly reshaped how paleontologists define Shastasaurus."
      />

      <div ref={containerRef} className="relative pl-6 sm:pl-10 md:pl-0">
        {/* Central / Left Vertical Animated Draw-Line */}
        <div
          className="absolute left-2 sm:left-4 md:left-1/2 top-2 bottom-2 w-[1px] bg-[#EAF6FF]/15 -translate-x-1/2"
          aria-hidden="true"
        >
          <div
            className="w-full bg-gradient-to-b from-[#6FE8FF] via-[#3FA0E6] to-[#6FE8FF] shadow-[0_0_12px_#6FE8FF] transition-all duration-150 origin-top"
            style={{ height: `${lineProgress * 100}%` }}
          />
        </div>

        <div className="space-y-10 sm:space-y-12">
          {DISCOVERY_TIMELINE.map((event, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={event.year}
                className={`relative grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start`}
              >
                {/* Timeline Node Marker */}
                <div
                  className="absolute -left-4 sm:-left-6 md:left-1/2 top-2 w-3 h-3 -translate-x-1/2 border border-[#6FE8FF] bg-[#010614] shadow-[0_0_10px_#6FE8FF]"
                  aria-hidden="true"
                />

                {/* Left Column on Desktop */}
                <div
                  className={`md:col-span-5 ${
                    isEven ? 'md:text-right md:pr-8' : 'md:order-3 md:pl-8'
                  }`}
                >
                  <div
                    className={`inline-flex flex-wrap items-center gap-2.5 mb-2 ${
                      isEven ? 'md:justify-end' : 'md:justify-start'
                    }`}
                  >
                    <span className="font-display text-2xl sm:text-3xl text-[#6FE8FF] tracking-[0.06em] tabular-nums">
                      {event.year}
                    </span>
                    {event.chip && <EvidenceChip level={event.chip} />}
                  </div>

                  <h3 className="font-display text-lg sm:text-xl uppercase tracking-[0.04em] text-[#EAF6FF] mb-2">
                    {event.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#EAF6FF]/80 leading-relaxed">
                    {event.description}
                  </p>
                  {event.citation && (
                    <p className="mt-2 font-display text-[11px] uppercase tracking-[0.16em] text-[#EAF6FF]/50">
                      REF · {event.citation}
                    </p>
                  )}
                </div>

                {/* Center Spacer */}
                <div className="hidden md:block md:col-span-2 md:order-2" />

                {/* Opposite Empty Column for Symmetry */}
                <div
                  className={`hidden md:block md:col-span-5 ${
                    isEven ? 'md:order-3' : 'md:order-1'
                  }`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
