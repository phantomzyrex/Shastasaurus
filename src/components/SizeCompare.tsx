import React, { useState } from 'react';
import { SectionHeader } from './SectionHeader';
import { getSizeComparisonItems, SizeComparisonItem } from '../data/shastasaurusData';

const renderSilhouetteSvg = (item: SizeComparisonItem) => {
  switch (item.id) {
    case 'human':
      return (
        <svg viewBox="0 0 120 40" className="w-full h-full overflow-visible">
          <circle cx="105" cy="20" r="6" fill="#EAF6FF" />
          <path
            d="M65 16 L96 16 L96 24 L65 24 Z M20 15 L65 17 L65 20 L20 19 Z M20 21 L65 20 L65 23 L20 25 Z M75 16 L58 8 L62 6 L84 16 Z"
            fill="#EAF6FF"
          />
        </svg>
      );
    case 'great-white':
      return (
        <svg viewBox="0 0 300 70" className="w-full h-full overflow-visible">
          <path
            d="M15 36 L48 28 L42 10 L58 26 Q135 16 185 22 L205 6 L225 25 Q265 29 292 36 Q260 45 215 45 L195 60 L185 45 Q125 48 56 42 L40 58 L46 40 Z"
            fill="#3FA0E6"
            fillOpacity="0.78"
            stroke="#6FE8FF"
            strokeWidth="1.5"
          />
        </svg>
      );
    case 'orca':
      return (
        <svg viewBox="0 0 340 80" className="w-full h-full overflow-visible">
          <path
            d="M12 42 L38 35 L32 18 L48 34 Q130 20 175 24 L192 4 L212 27 Q280 28 330 42 Q288 54 218 52 L196 70 L182 52 Q115 54 48 46 Z"
            fill="#1E6FC0"
            fillOpacity="0.85"
            stroke="#EAF6FF"
            strokeWidth="1.5"
          />
        </svg>
      );
    case 'city-bus':
      return (
        <svg viewBox="0 0 420 80" className="w-full h-full overflow-visible">
          <rect
            x="10"
            y="16"
            width="400"
            height="46"
            rx="6"
            fill="#0A2C6B"
            stroke="#EAF6FF"
            strokeOpacity="0.55"
            strokeWidth="1.5"
          />
          <rect x="28" y="24" width="55" height="18" fill="#6FE8FF" fillOpacity="0.25" />
          <rect x="95" y="24" width="55" height="18" fill="#6FE8FF" fillOpacity="0.25" />
          <rect x="162" y="24" width="55" height="18" fill="#6FE8FF" fillOpacity="0.25" />
          <rect x="229" y="24" width="55" height="18" fill="#6FE8FF" fillOpacity="0.25" />
          <rect x="296" y="24" width="55" height="18" fill="#6FE8FF" fillOpacity="0.25" />
          <circle cx="85" cy="64" r="9" fill="#010614" stroke="#EAF6FF" strokeWidth="2" />
          <circle cx="330" cy="64" r="9" fill="#010614" stroke="#EAF6FF" strokeWidth="2" />
        </svg>
      );
    case 'two-city-buses':
      return (
        <svg viewBox="0 0 840 80" className="w-full h-full overflow-visible">
          {[0, 425].map((offset) => (
            <g key={offset} transform={`translate(${offset}, 0)`}>
              <rect
                x="5"
                y="16"
                width="400"
                height="46"
                rx="6"
                fill="#0A2C6B"
                stroke="#EAF6FF"
                strokeOpacity="0.5"
                strokeWidth="1.5"
              />
              <circle cx="80" cy="64" r="9" fill="#010614" stroke="#EAF6FF" strokeWidth="2" />
              <circle cx="325" cy="64" r="9" fill="#010614" stroke="#EAF6FF" strokeWidth="2" />
            </g>
          ))}
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 500 85" className="w-full h-full overflow-visible">
          <path
            d="M 14 45
               L 45 36
               Q 34 22 48 34
               Q 165 24 315 26
               Q 415 28 458 36
               Q 480 40 492 44
               Q 478 49 456 50
               Q 425 52 385 52
               L 408 75
               Q 388 73 365 52
               Q 255 55 175 51
               L 155 70
               Q 142 66 152 50
               Q 85 48 45 48
               L 22 62
               Z"
            fill={item.category === 'confirmed' ? '#6FE8FF' : '#3FA0E6'}
            fillOpacity={item.category === 'confirmed' ? '0.88' : '0.58'}
            stroke="#EAF6FF"
            strokeWidth="1.5"
          />
          <circle cx="468" cy="42" r="2.6" fill="#010614" />
        </svg>
      );
  }
};

export const SizeCompare: React.FC = () => {
  const [includeRelatives, setIncludeRelatives] = useState(false);
  const { items, maxScaleMeters } = getSizeComparisonItems(includeRelatives);

  return (
    <section
      id="size-comparison"
      aria-labelledby="size-comparison-heading"
      className="relative z-20 py-24 sm:py-32 px-6 sm:px-10 md:px-16 max-w-7xl mx-auto"
    >
      <SectionHeader
        number="05"
        depthTag="1,350 M · MIDNIGHT ZONE"
        kicker="MORPHOMETRIC SCALE COMPARISON"
        title="Size Comparison"
        subtitle="Comparing confirmed Carnian Shastasaurus species against modern marine vertebrates, transit benchmarks, and debated Late Triassic giants."
      />

      {/* Mode Toggle Bar */}
      <div className="mb-10 flex flex-wrap items-center justify-between gap-4 border border-[#EAF6FF]/15 bg-[#030F2B]/80 p-4">
        <div className="flex flex-wrap items-center gap-2" role="group" aria-label="Size comparison mode">
          <button
            type="button"
            onClick={() => setIncludeRelatives(false)}
            aria-pressed={!includeRelatives}
            className={`px-4 py-2 font-display text-xs uppercase tracking-[0.16em] whitespace-nowrap shrink-0 transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-[#6FE8FF] ${
              !includeRelatives
                ? 'bg-[#6FE8FF] text-[#010614] font-medium'
                : 'bg-[#061B45]/60 text-[#EAF6FF]/80 hover:text-[#EAF6FF]'
            }`}
          >
            Confirmed Shastasaurus species
          </button>
          <button
            type="button"
            onClick={() => setIncludeRelatives(true)}
            aria-pressed={includeRelatives}
            className={`px-4 py-2 font-display text-xs uppercase tracking-[0.16em] whitespace-nowrap shrink-0 transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-[#6FE8FF] ${
              includeRelatives
                ? 'bg-[#6FE8FF] text-[#010614] font-medium'
                : 'bg-[#061B45]/60 text-[#EAF6FF]/80 hover:text-[#EAF6FF]'
            }`}
          >
            Giant relatives
          </button>
        </div>

        <div className="font-display text-xs uppercase tracking-[0.18em] text-[#6FE8FF] tabular-nums">
          HORIZONTAL SCALE · 0 M TO {maxScaleMeters} M
        </div>
      </div>

      {/* Horizontal Ruler Ticks */}
      <div className="mb-6 hidden sm:flex justify-between border-b border-[#EAF6FF]/20 pb-2 font-display text-xs text-[#EAF6FF]/55 tabular-nums">
        <span>0 m</span>
        <span>{Math.round(maxScaleMeters * 0.25)} m</span>
        <span>{Math.round(maxScaleMeters * 0.5)} m</span>
        <span>{Math.round(maxScaleMeters * 0.75)} m</span>
        <span>{maxScaleMeters} m</span>
      </div>

      {/* Silhouette Rows */}
      <div className="space-y-5">
        {items.map((item) => {
          const widthPct = Math.max(6, Math.min(100, (item.lengthMeters / maxScaleMeters) * 100));
          const isShastasaurus = item.category === 'confirmed';
          return (
            <div
              key={item.id}
              className={`border p-4 sm:p-5 transition-all duration-300 ${
                isShastasaurus
                  ? 'border-[#6FE8FF]/55 bg-[#061B45]/65'
                  : item.category === 'relative'
                  ? 'border-[#3FA0E6]/45 bg-[#061B45]/40'
                  : 'border-[#EAF6FF]/12 bg-[#030F2B]/55'
              }`}
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-3">
                <div className="flex flex-wrap items-baseline gap-3">
                  <h3 className="font-display text-base sm:text-lg uppercase tracking-[0.04em] text-[#EAF6FF]">
                    {item.name}
                  </h3>
                  {item.qualifier && (
                    <span className="font-display text-[11px] uppercase tracking-[0.14em] text-[#6FE8FF]/85">
                      · {item.qualifier}
                    </span>
                  )}
                </div>
                <span className="font-display text-sm sm:text-base text-[#6FE8FF] tracking-[0.08em] tabular-nums">
                  {item.lengthLabel}
                </span>
              </div>

              <div className="w-full h-14 sm:h-16 bg-[#010614]/70 border border-[#EAF6FF]/10 px-3 py-2 flex items-center overflow-hidden">
                <div
                  className="h-full transition-all duration-500 ease-out flex items-center"
                  style={{ width: `${widthPct}%` }}
                >
                  {renderSilhouetteSvg(item)}
                </div>
              </div>

              {item.note && (
                <p className="mt-2 text-xs text-[#EAF6FF]/70">{item.note}</p>
              )}
            </div>
          );
        })}
      </div>

      <p className="mt-8 border border-[#6FE8FF]/35 bg-[#061B45]/45 px-5 py-4 text-sm sm:text-base text-[#EAF6FF]/90 font-light">
        <strong className="font-display uppercase tracking-[0.12em] text-[#6FE8FF] mr-2">
          CAPTION:
        </strong>
        The 21 m ichthyosaur sometimes called a giant <em>Shastasaurus</em> is usually treated as{' '}
        <em>Shonisaurus</em> today.
      </p>
    </section>
  );
};
