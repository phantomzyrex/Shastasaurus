import React, { useState } from 'react';
import { SectionHeader } from './SectionHeader';
import {
  ANATOMY_HOTSPOTS,
  AnatomyHotspot,
  SIDE_ASSET_PRIMARY,
  HERO_ASSET_PRIMARY,
} from '../data/shastasaurusData';

export const AnatomyHotspots: React.FC = () => {
  const [selectedHotspot, setSelectedHotspot] = useState<AnatomyHotspot>(
    ANATOMY_HOTSPOTS[0]
  );
  const [imgSrc, setImgSrc] = useState(SIDE_ASSET_PRIMARY);

  return (
    <section
      id="anatomy"
      aria-labelledby="anatomy-heading"
      className="relative z-20 py-24 sm:py-32 px-6 sm:px-10 md:px-16 max-w-7xl mx-auto"
    >
      <SectionHeader
        number="04"
        depthTag="950 M · TWILIGHT / MIDNIGHT BOUNDARY"
        kicker="MORPHOLOGY & SKELETAL ARCHITECTURE"
        title="Anatomy"
        subtitle="Select any anatomical hotspot on the side-view diagram or index below to inspect verified skeletal traits, inferred characters, and ichthyosaur group traits."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left/Main Annotated Creature Canvas (8 cols) */}
        <div className="lg:col-span-8 border border-[#EAF6FF]/15 bg-[#030F2B]/75 p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#EAF6FF]/12 pb-4 mb-6">
            <div>
              <span className="font-display text-xs uppercase tracking-[0.18em] text-[#6FE8FF] block">
                SPECIMEN MORPHOLOGY · LATERAL RECONSTRUCTION
              </span>
              <span className="text-xs text-[#EAF6FF]/65">
                Calibrated with short, wide, toothless cranial silhouette of S. liangae (~8–9% body length)
              </span>
            </div>
            <span className="font-display text-xs uppercase tracking-[0.16em] text-[#EAF6FF]/70 tabular-nums">
              9 ANATOMICAL HOTSPOTS
            </span>
          </div>

          {/* Relative Diagram Stage */}
          <div className="relative w-full aspect-[16/9] min-h-[260px] flex items-center justify-center my-auto select-none">
            <div
              className="pointer-events-none absolute inset-0 opacity-15"
              style={{
                backgroundImage:
                  'linear-gradient(to right, rgba(111,232,255,0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(111,232,255,0.2) 1px, transparent 1px)',
                backgroundSize: '48px 48px',
              }}
              aria-hidden="true"
            />

            <div className="relative w-[92%] h-[92%] flex items-center justify-center">
              <img
                src={imgSrc}
                onError={() => {
                  if (imgSrc !== HERO_ASSET_PRIMARY) setImgSrc(HERO_ASSET_PRIMARY);
                }}
                alt="Annotated lateral view of Shastasaurus showing slender body, four paddle flippers, and short toothless snout"
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain creature-graded"
                style={{
                  clipPath: 'polygon(11.5% 0%, 100% 0%, 100% 100%, 11.5% 100%)',
                }}
              />

              {/* Scientific Short, Blunt, Toothless Snout Cap Overlay (S. liangae cranial profile) */}
              <svg
                className="pointer-events-none absolute inset-0 w-full h-full"
                viewBox="0 0 1000 560"
                preserveAspectRatio="xMidYMid meet"
                aria-hidden="true"
              >
                <path
                  d="M 195 305 Q 112 332 108 355 Q 114 378 215 376"
                  fill="#061B45"
                  fillOpacity="0.88"
                  stroke="#6FE8FF"
                  strokeWidth="2"
                  strokeDasharray="4 3"
                />
                <line
                  x1="108"
                  y1="425"
                  x2="225"
                  y2="425"
                  stroke="#6FE8FF"
                  strokeWidth="1.5"
                />
                <line x1="108" y1="418" x2="108" y2="432" stroke="#6FE8FF" strokeWidth="1.5" />
                <line x1="225" y1="418" x2="225" y2="432" stroke="#6FE8FF" strokeWidth="1.5" />
                <text
                  x="166"
                  y="444"
                  textAnchor="middle"
                  fill="#6FE8FF"
                  fontSize="11"
                  fontFamily="Marcellus, serif"
                  letterSpacing="1.5"
                >
                  SKULL ~8–9% LENGTH (SHORT, TOOTHLESS SNOUT)
                </text>
              </svg>

              {/* Clickable Hotspots */}
              {ANATOMY_HOTSPOTS.map((spot, idx) => {
                const isSelected = selectedHotspot.id === spot.id;
                return (
                  <button
                    key={spot.id}
                    type="button"
                    onClick={() => setSelectedHotspot(spot)}
                    aria-label={`Inspect anatomy hotspot ${idx + 1}: ${spot.label}`}
                    aria-pressed={isSelected}
                    style={{
                      left: `${spot.xPercent}%`,
                      top: `${spot.yPercent}%`,
                    }}
                    className={`group absolute -translate-x-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full border transition-all duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#6FE8FF] focus-visible:outline-offset-2 ${
                      isSelected
                        ? 'bg-[#6FE8FF] border-[#EAF6FF] text-[#010614] scale-115 shadow-[0_0_24px_#6FE8FF]'
                        : 'bg-[#010614]/90 border-[#6FE8FF]/70 text-[#EAF6FF] hover:bg-[#0A2C6B] hover:scale-110'
                    }`}
                  >
                    <span className="font-display text-xs font-medium tabular-nums">
                      {idx + 1}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-[#EAF6FF]/12 flex flex-wrap items-center justify-between gap-2 text-xs text-[#EAF6FF]/65">
            <span>
              Cranial contour calibrated to <em>S. liangae</em>: short, toothless snout without tooth groove.
            </span>
            <span className="font-display uppercase tracking-[0.14em] text-[#6FE8FF]">
              CLICK NUMBERED HOTSPOTS (1–9)
            </span>
          </div>
        </div>

        {/* Right Detail Panel & Complete Hotspot List (4 cols) */}
        <div className="lg:col-span-4 flex flex-col justify-between gap-6">
          {/* Active Hotspot Inspection Tooltip Card */}
          <div
            aria-live="polite"
            className="border border-[#6FE8FF]/45 bg-[#061B45]/60 p-6 shadow-[0_0_35px_rgba(1,6,20,0.6)]"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2 mb-3">
              <span className="font-display text-xs uppercase tracking-[0.2em] text-[#6FE8FF]">
                ACTIVE ANATOMICAL HOTSPOT
              </span>
              <span className="font-display text-[11px] uppercase tracking-[0.14em] text-[#EAF6FF]/75">
                {selectedHotspot.qualifier}
              </span>
            </div>

            <h3 className="font-display text-2xl uppercase tracking-[0.04em] text-[#EAF6FF] mb-3">
              {selectedHotspot.label}
            </h3>

            <p className="text-base text-[#EAF6FF]/88 leading-relaxed">
              {selectedHotspot.description}
            </p>
          </div>

          {/* All 9 Hotspots Selector List */}
          <div className="border border-[#EAF6FF]/14 bg-[#030F2B]/70 p-4 divide-y divide-[#EAF6FF]/10">
            {ANATOMY_HOTSPOTS.map((spot, idx) => {
              const active = selectedHotspot.id === spot.id;
              return (
                <button
                  key={spot.id}
                  type="button"
                  onClick={() => setSelectedHotspot(spot)}
                  className={`w-full py-2.5 px-3 text-left flex items-center justify-between gap-3 transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-[#6FE8FF] ${
                    active
                      ? 'bg-[#0A2C6B]/65 text-[#6FE8FF]'
                      : 'text-[#EAF6FF]/80 hover:bg-[#061B45]/50 hover:text-[#EAF6FF]'
                  }`}
                >
                  <div className="flex items-center gap-2.5 shrink-0">
                    <span className="font-display text-xs text-[#6FE8FF] tabular-nums shrink-0">
                      0{idx + 1}
                    </span>
                    <span className="font-display text-xs sm:text-[13px] uppercase tracking-[0.05em] whitespace-nowrap">
                      {spot.label}
                    </span>
                  </div>
                  <span className="font-display text-[10px] uppercase tracking-[0.12em] text-[#EAF6FF]/60 text-right">
                    {spot.qualifier}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
