import React, { useState } from 'react';
import { getDepthZoneLabel } from '../data/shastasaurusData';

interface DepthGaugeProps {
  depthMeters: number;
}

const ZONE_MARKERS = [
  { depth: 0, shortLabel: '0 m', zone: 'SURFACE' },
  { depth: 200, shortLabel: '200 m', zone: 'TWILIGHT ZONE' },
  { depth: 1000, shortLabel: '1,000 m', zone: 'MIDNIGHT ZONE' },
  { depth: 4000, shortLabel: '4,000 m', zone: 'ABYSS' },
];

export const DepthGauge: React.FC<DepthGaugeProps> = ({ depthMeters }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const currentZone = getDepthZoneLabel(depthMeters);
  const progressPct = Math.min(100, Math.max(0, (depthMeters / 4000) * 100));

  const isInFooter = depthMeters >= 3920;

  return (
    <aside
      aria-label="Decorative bathypelagic depth gauge"
      className={`fixed right-4 sm:right-5 bottom-7 z-40 hidden lg:flex flex-col items-end select-none transition-opacity duration-300 ${
        isInFooter ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Interactive Tooltip Trigger reading "DEPTH 0 m" -> "DEPTH 4,000 m" */}
      <div className="relative mb-2.5 flex flex-col items-end">
        <button
          type="button"
          onClick={() => setShowTooltip((prev) => !prev)}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          onFocus={() => setShowTooltip(true)}
          onBlur={() => setShowTooltip(false)}
          title="Decorative: not the depth Shastasaurus lived at"
          aria-label="Decorative: not the depth Shastasaurus lived at"
          className="cursor-pointer border border-[#EAF6FF]/15 bg-[#010614]/70 px-2 py-1 text-right transition-colors hover:border-[#6FE8FF]/70 focus-visible:outline-2 focus-visible:outline-[#6FE8FF]"
        >
          <div className="font-display text-[11px] uppercase tracking-[0.14em] text-[#6FE8FF] tabular-nums">
            DEPTH {depthMeters.toLocaleString()} m
          </div>
          <div className="font-display text-[8px] uppercase tracking-[0.16em] text-[#EAF6FF]/65">
            {currentZone}
          </div>
        </button>

        {/* Required Scientific Disclaimer Tooltip */}
        <div
          role="tooltip"
          className={`pointer-events-none absolute right-0 bottom-full mb-2 w-56 border border-[#6FE8FF]/55 bg-[#010614]/95 px-3 py-2 text-[11px] leading-snug text-[#EAF6FF] shadow-xl transition-opacity duration-150 ${
            showTooltip ? 'opacity-100' : 'opacity-0'
          }`}
        >
          Decorative: not the depth Shastasaurus lived at
        </div>
      </div>

      {/* Vertical Scale Rail */}
      <div className="relative h-36 flex items-center justify-end pr-0.5">
        <div className="relative h-full w-[1px] bg-[#EAF6FF]/20">
          <div
            className="w-full bg-[#6FE8FF] shadow-[0_0_8px_#6FE8FF] transition-all duration-100"
            style={{ height: `${progressPct}%` }}
          />

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
                  {m.depth > 0 ? `${m.shortLabel} · ${m.zone}` : m.shortLabel}
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
