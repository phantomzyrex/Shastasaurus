import React, { useState } from 'react';
import { SectionHeader } from './SectionHeader';
import {
  FOSSIL_LOCALITIES,
  FossilLocality,
  GUANLING_BIOTA_FAUNA,
} from '../data/shastasaurusData';

export const Map: React.FC = () => {
  const [triassicMode, setTriassicMode] = useState(false);
  const [selectedSite, setSelectedSite] = useState<FossilLocality>(FOSSIL_LOCALITIES[0]);

  return (
    <section
      id="habitat"
      aria-labelledby="habitat-heading"
      className="relative z-20 py-24 sm:py-32 px-6 sm:px-10 md:px-16 max-w-7xl mx-auto"
    >
      <SectionHeader
        number="07"
        depthTag="2,150 M · MIDNIGHT ZONE"
        kicker="PALEOBIOGEOGRAPHY · PANGAEA & PANTHALASSA"
        title="Habitat and Distribution"
        subtitle="In the Late Triassic the continents were joined as the supercontinent Pangaea, surrounded by the vast ocean Panthalassa."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left/Main Interactive Map Panel (8 cols) */}
        <div className="lg:col-span-8 border border-[#EAF6FF]/15 bg-[#030F2B]/80 p-6 sm:p-8">
          {/* Map Controls */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#EAF6FF]/12 pb-4 mb-6">
            <div className="flex flex-wrap items-center gap-2" role="group" aria-label="Continental map projection">
              <button
                type="button"
                onClick={() => setTriassicMode(false)}
                aria-pressed={!triassicMode}
                className={`px-3.5 py-2 font-display text-xs uppercase tracking-[0.14em] whitespace-nowrap shrink-0 cursor-pointer transition-colors focus-visible:outline-2 focus-visible:outline-[#6FE8FF] ${
                  !triassicMode
                    ? 'bg-[#6FE8FF] text-[#010614] font-medium'
                    : 'bg-[#061B45]/60 text-[#EAF6FF]/80 hover:text-[#EAF6FF]'
                }`}
              >
                Modern World Map
              </button>
              <button
                type="button"
                onClick={() => setTriassicMode(true)}
                aria-pressed={triassicMode}
                className={`px-3.5 py-2 font-display text-xs uppercase tracking-[0.14em] whitespace-nowrap shrink-0 cursor-pointer transition-colors focus-visible:outline-2 focus-visible:outline-[#6FE8FF] ${
                  triassicMode
                    ? 'bg-[#6FE8FF] text-[#010614] font-medium'
                    : 'bg-[#061B45]/60 text-[#EAF6FF]/80 hover:text-[#EAF6FF]'
                }`}
              >
                Late Triassic positions (approximate)
              </button>
            </div>

            {triassicMode && (
              <span className="font-display text-xs uppercase tracking-[0.16em] text-[#6FE8FF]">
                SCHEMATIC VIEW · APPROXIMATE
              </span>
            )}
          </div>

          {/* Interactive SVG Map */}
          <div className="relative w-full aspect-[2/1] bg-[#010614] border border-[#EAF6FF]/12 overflow-hidden">
            <svg
              viewBox="0 0 1000 500"
              className="w-full h-full"
              role="img"
              aria-label={
                triassicMode
                  ? 'Approximate Late Triassic supercontinent Pangaea and Panthalassa ocean map with fossil locations'
                  : 'Modern world map with Shastasaurus fossil locations in California, China, and British Columbia'
              }
            >
              <g stroke="#1E6FC0" strokeOpacity="0.18" strokeWidth="1">
                <line x1="0" y1="125" x2="1000" y2="125" />
                <line x1="0" y1="250" x2="1000" y2="250" strokeDasharray="6 4" />
                <line x1="0" y1="375" x2="1000" y2="375" />
                <line x1="250" y1="0" x2="250" y2="500" />
                <line x1="500" y1="0" x2="500" y2="500" />
                <line x1="750" y1="0" x2="750" y2="500" />
              </g>

              {!triassicMode ? (
                <g
                  fill="#0A2C6B"
                  fillOpacity="0.55"
                  stroke="#3FA0E6"
                  strokeOpacity="0.45"
                  strokeWidth="1.5"
                >
                  <path d="M 90 70 L 260 65 L 305 145 L 245 225 L 185 245 L 135 175 Z" />
                  <path d="M 245 260 L 335 285 L 315 435 L 265 445 L 245 345 Z" />
                  <path d="M 445 75 L 865 75 L 895 195 L 785 265 L 645 245 L 545 195 L 435 165 Z" />
                  <path d="M 445 195 L 575 205 L 605 315 L 545 415 L 485 385 L 435 265 Z" />
                  <path d="M 765 335 L 875 335 L 885 415 L 775 415 Z" />
                </g>
              ) : (
                <g>
                  <path
                    d="M 335 80 C 445 55, 585 75, 655 155 C 625 205, 555 215, 525 245 C 585 275, 645 315, 625 405 C 525 445, 405 425, 365 345 C 335 275, 315 185, 335 80 Z"
                    fill="#0A2C6B"
                    fillOpacity="0.65"
                    stroke="#6FE8FF"
                    strokeOpacity="0.55"
                    strokeWidth="2"
                  />
                  <path
                    d="M 620 200 L 680 195 L 690 240 L 630 245 Z"
                    fill="#0A2C6B"
                    fillOpacity="0.75"
                    stroke="#6FE8FF"
                    strokeWidth="1.5"
                  />
                  <text
                    x="465"
                    y="265"
                    textAnchor="middle"
                    fill="#EAF6FF"
                    fillOpacity="0.5"
                    fontSize="16"
                    fontFamily="Marcellus, serif"
                    letterSpacing="5"
                  >
                    PANGAEA
                  </text>
                  <text
                    x="155"
                    y="255"
                    textAnchor="middle"
                    fill="#6FE8FF"
                    fillOpacity="0.55"
                    fontSize="14"
                    fontFamily="Marcellus, serif"
                    letterSpacing="4"
                  >
                    PANTHALASSA OCEAN
                  </text>
                  <text
                    x="740"
                    y="275"
                    textAnchor="middle"
                    fill="#6FE8FF"
                    fillOpacity="0.5"
                    fontSize="12"
                    fontFamily="Marcellus, serif"
                    letterSpacing="3"
                  >
                    TETHYS SEA (APPROXIMATE)
                  </text>
                </g>
              )}

              {/* Fossil Locality Pins */}
              {FOSSIL_LOCALITIES.map((loc, idx) => {
                const coords = triassicMode ? loc.triassicCoords : loc.modernCoords;
                const isSelected = selectedSite.id === loc.id;
                return (
                  <g
                    key={loc.id}
                    transform={`translate(${coords.x}, ${coords.y})`}
                    onClick={() => setSelectedSite(loc)}
                    className="cursor-pointer"
                  >
                    <circle
                      r={isSelected ? 18 : 12}
                      fill="#6FE8FF"
                      fillOpacity={isSelected ? 0.25 : 0.12}
                      stroke="#6FE8FF"
                      strokeWidth="1.5"
                    />
                    <circle
                      r="5.5"
                      fill={isSelected ? '#6FE8FF' : '#EAF6FF'}
                      stroke="#010614"
                      strokeWidth="1.5"
                    />
                    <text
                      x="14"
                      y="4"
                      fill="#EAF6FF"
                      fontSize="12"
                      fontFamily="Marcellus, serif"
                      letterSpacing="1"
                    >
                      0{idx + 1} · {loc.title.split(',')[0]}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Fossil Locality Selector Buttons */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
            {FOSSIL_LOCALITIES.map((loc) => {
              const active = selectedSite.id === loc.id;
              return (
                <button
                  key={loc.id}
                  type="button"
                  onClick={() => setSelectedSite(loc)}
                  aria-pressed={active}
                  className={`p-3.5 border text-left transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-[#6FE8FF] ${
                    active
                      ? 'border-[#6FE8FF] bg-[#061B45]/75'
                      : 'border-[#EAF6FF]/14 bg-[#010614]/60 hover:bg-[#061B45]/40'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="font-display text-xs uppercase tracking-[0.12em] text-[#6FE8FF] truncate">
                      {loc.title}
                    </span>
                  </div>
                  <p className="text-xs text-[#EAF6FF]/80 truncate">{loc.species}</p>
                </button>
              );
            })}
          </div>

          {/* Selected Locality Detail */}
          <div className="border border-[#6FE8FF]/35 bg-[#061B45]/45 p-5">
            <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
              <h3 className="font-display text-xl uppercase tracking-[0.04em] text-[#EAF6FF]">
                {selectedSite.title}
              </h3>
              <span className="font-display text-xs uppercase tracking-[0.16em] text-[#6FE8FF]">
                {selectedSite.qualifier}
              </span>
            </div>
            <p className="text-xs uppercase tracking-[0.14em] text-[#6FE8FF] mb-2">
              {selectedSite.species} · {selectedSite.age} · {selectedSite.formation}
            </p>
            <p className="text-sm sm:text-base text-[#EAF6FF]/85 leading-relaxed">
              {selectedSite.summary}
            </p>
          </div>
        </div>

        {/* Right Side Card: The Guanling Biota (Wang et al., 2008) (4 cols) */}
        <aside className="lg:col-span-4 border border-[#EAF6FF]/15 bg-[#061B45]/40 p-6 sm:p-7">
          <div className="flex items-baseline justify-between gap-2 mb-3">
            <span className="font-display text-xs uppercase tracking-[0.18em] text-[#6FE8FF]">
              FOSSIL SITE · GUIZHOU, CHINA
            </span>
            <span className="font-display text-[11px] uppercase tracking-[0.14em] text-[#EAF6FF]/65">
              WANG ET AL. (2008)
            </span>
          </div>

          <h3 className="font-display text-2xl uppercase tracking-[0.04em] text-[#EAF6FF] mb-2">
            The Guanling Biota
          </h3>
          <p className="text-xs text-[#EAF6FF]/65 mb-5">
            Wayao Member of the Falang Formation (also called the Xiaowa Formation), Guizhou
            Province
          </p>

          <p className="text-sm text-[#EAF6FF]/82 leading-relaxed mb-6">
            Animals found alongside <em>S. liangae</em> in this Late Triassic marine fossil site:
          </p>

          <div className="space-y-4 divide-y divide-[#EAF6FF]/12">
            {GUANLING_BIOTA_FAUNA.map((item) => (
              <div key={item.group} className="pt-3.5 first:pt-0">
                <h4 className="font-display text-sm uppercase tracking-[0.08em] text-[#6FE8FF]">
                  {item.group}
                </h4>
                <p className="text-xs font-medium text-[#EAF6FF] mt-0.5">{item.taxa}</p>
                <p className="text-xs text-[#EAF6FF]/70 mt-1">{item.detail}</p>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
};
