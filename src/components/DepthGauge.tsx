import React, { useState } from 'react';
import { getDepthZoneLabel } from '../data/shastasaurusData';

interface DepthGaugeProps {
  depthMeters: number;
}

const ZONE_MARKERS = [
  { depth: 0, shortLabel: '0m', zone: 'SURFACE' },
  { depth: 200, shortLabel: '200m', zone: 'TWILIGHT ZONE' },
  { depth: 1000, shortLabel: '1,000m', zone: 'MIDNIGHT ZONE' },
  { depth: 4000, shortLabel: '4,000m', zone: 'ABYSS' },
];

export const DepthGauge: React.FC<DepthGaugeProps> = ({ depthMeters }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const currentZone = getDepthZoneLabel(depthMeters);
  const progressPct = Math.min(100, Math.max(0, (depthMeters / 4000) * 100));

  return (
    <aside
      aria-label="Decorative bathypelagic depth gauge"
      className="fixed right-4 sm:right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-end select-none"
    >
      {/* Interactive Tooltip Trigger */}
      <div className="relative mb-3 flex flex-col items-end">
        <button
          type="button"
          onClick={() => setShowTooltip((prev) => !prev)}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          onFocus={() => setShowTooltip(true)}
          onBlur={() => setShowTooltip(false)}
          title="Decorative: not the depth Shastasaurus lived at."
          aria-label="Decorative depth gauge: Decorative: not the depth Shastasaurus lived at."
          className="cursor-pointer border border-[#EAF6FF]/20 bg-[#010614]/80 px-2.5 py-1 text-right backdrop-blur-sm transition-colors hover:border-[#6FE8FF]/70 focus-visible:outline-2 focus-visible:outline-[#6FE8FF]"
        >
          <div className="font-display text-xs uppercase tracking-[0.14em] text-[#6FE8FF] tabular-nums">
            {depthMeters.toLocaleString()} m
          </div>
          <div className="font-display text-[8px] uppercase tracking-[0.16em] text-[#EAF6FF]/70">
            {currentZone}
          </div>
        </button>

        {/* Required Scientific Disclaimer Tooltip (shown on hover/focus/click) */}
        <div
          role="tooltip"
          className={`pointer-events-none absolute right-0 bottom-full mb-2 w-56 border border-[#6FE8FF]/55 bg-[#010614]/95 px-3 py-2 text-[11px] leading-snug text-[#EAF6FF] shadow-xl transition-opacity duration-150 ${
            showTooltip ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <span className="font-display uppercase tracking-[0.12em] text-[#6FE8FF] block text-[9px] mb-0.5">
            DESIGN METAPHOR
          </span>
          Decorative: not the depth Shastasaurus lived at.
        </div>
      </div>

      {/* Slim Vertical Scale Rail */}
      <div className="relative h-52 flex items-center justify-end pr-0.5">
        <div className="relative h-full w-[1px] bg-[#EAF6FF]/20">
          {/* Active Progress Fill */}
          <div
            className="w-full bg-[#6FE8FF] shadow-[0_0_8px_#6FE8FF] transition-all duration-100"
            style={{ height: `${progressPct}%` }}
          />

          {/* Zone Tick Marks */}
          {ZONE_MARKERS.map((m) => {
            const topPct =
              m.depth === 0
                ? 0
                : m.depth === 200
                ? 18
                : m.depth === 1000
                ? 50
                : 100;
            const active = depthMeters >= m.depth;
            return (
              <div
                key={m.depth}
                style={{ top: `${topPct}%` }}
                className="absolute right-0 -translate-y-1/2 flex items-center gap-1.5"
              >
                <span
                  className={`font-display text-[8px] uppercase tracking-[0.12em] whitespace-nowrap transition-colors ${
                    active ? 'text-[#6FE8FF]' : 'text-[#EAF6FF]/38'
                  }`}
                >
                  {m.shortLabel}
                </span>
                <span
                  className={`block h-[1px] transition-all ${
                    active ? 'w-2.5 bg-[#6FE8FF]' : 'w-1.5 bg-[#EAF6FF]/30'
                  }`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </aside>
  );
};
