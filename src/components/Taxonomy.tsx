import React, { useState } from 'react';
import { SectionHeader } from './SectionHeader';
import {
  SPECIES_STATUS_CARDS,
  CLASSIFICATION_SLIDER_YEARS,
  ClassificationYear,
  getClassificationAtYear,
  SHASTASAURID_RELATIVES,
} from '../data/shastasaurusData';

const YEAR_STOPS: ClassificationYear[] = [2004, 2011, 2013, 2021];

export const Taxonomy: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState<ClassificationYear>(2021);
  const snapshot = getClassificationAtYear(selectedYear);

  return (
    <section
      id="classification"
      aria-labelledby="classification-heading"
      className="relative z-20 py-24 sm:py-32 px-6 sm:px-10 md:px-16 max-w-7xl mx-auto"
    >
      <SectionHeader
        number="08"
        depthTag="2,600 M · MIDNIGHT ZONE"
        kicker="SYSTEMATIC PALEONTOLOGY & NOMENCLATURE"
        title="Classification and Species"
        subtitle="The taxonomic boundaries of Shastasaurus have shifted repeatedly as new specimens and phylogenetic analyses test which species belong in the genus."
      />

      {/* Taxonomy Hierarchy Card */}
      <div className="mb-12 border border-[#EAF6FF]/16 bg-[#030F2B]/80 p-6 sm:p-8">
        <div className="flex flex-wrap items-baseline justify-between gap-2 mb-5">
          <span className="font-display text-xs uppercase tracking-[0.2em] text-[#6FE8FF]">
            TAXONOMY CARD
          </span>
          <span className="font-display text-xs uppercase tracking-[0.16em] text-[#EAF6FF]/65">
            MERRIAM, 1895
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-y-3 text-sm sm:text-base font-display uppercase tracking-[0.06em] text-[#EAF6FF]">
          <span>Kingdom Animalia</span>
          <span className="mx-3 text-[#6FE8FF]" aria-hidden="true">&gt;</span>
          <span>Phylum Chordata</span>
          <span className="mx-3 text-[#6FE8FF]" aria-hidden="true">&gt;</span>
          <span>Class Reptilia</span>
          <span className="mx-3 text-[#6FE8FF]" aria-hidden="true">&gt;</span>
          <span>Order Ichthyosauria</span>
          <span className="mx-3 text-[#6FE8FF]" aria-hidden="true">&gt;</span>
          <span>Family Shastasauridae (Merriam, 1895)</span>
          <span className="mx-3 text-[#6FE8FF]" aria-hidden="true">&gt;</span>
          <span className="text-[#6FE8FF] border-b border-[#6FE8FF]">Genus Shastasaurus</span>
        </div>
      </div>

      {/* Interactive "How the classification keeps changing" Slider */}
      <div className="mb-14 border border-[#6FE8FF]/40 bg-[#061B45]/45 p-6 sm:p-8">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div>
            <span className="font-display text-xs uppercase tracking-[0.2em] text-[#6FE8FF] block">
              INTERACTIVE TAXONOMIC CHRONOLOGY
            </span>
            <h3 className="font-display text-2xl uppercase tracking-[0.04em] text-[#EAF6FF]">
              How the classification keeps changing
            </h3>
          </div>

          <div className="flex items-center gap-2" role="group" aria-label="Classification year stops">
            {YEAR_STOPS.map((year) => {
              const active = selectedYear === year;
              return (
                <button
                  key={year}
                  type="button"
                  onClick={() => setSelectedYear(year)}
                  aria-pressed={active}
                  className={`px-4 py-2 font-display text-sm uppercase tracking-[0.12em] tabular-nums transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-[#6FE8FF] ${
                    active
                      ? 'bg-[#6FE8FF] text-[#010614] font-medium shadow-[0_0_18px_rgba(111,232,255,0.45)]'
                      : 'border border-[#EAF6FF]/20 bg-[#010614]/70 text-[#EAF6FF]/80 hover:border-[#6FE8FF]/60 hover:text-[#EAF6FF]'
                  }`}
                >
                  {year}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mb-6">
          <label htmlFor="taxonomy-year-slider" className="sr-only">
            Select taxonomic revision year (2004, 2011, 2013, 2021)
          </label>
          <input
            id="taxonomy-year-slider"
            type="range"
            min={0}
            max={YEAR_STOPS.length - 1}
            step={1}
            value={YEAR_STOPS.indexOf(selectedYear)}
            onChange={(e) => {
              const idx = Number(e.target.value);
              setSelectedYear(YEAR_STOPS[idx] ?? 2021);
            }}
            className="w-full accent-[#6FE8FF] cursor-pointer"
          />
          <div className="flex justify-between font-display text-xs text-[#EAF6FF]/60 mt-1 tabular-nums">
            {CLASSIFICATION_SLIDER_YEARS.map((item) => (
              <span
                key={item.year}
                className={selectedYear === item.year ? 'text-[#6FE8FF]' : ''}
              >
                {item.year}
              </span>
            ))}
          </div>
        </div>

        <div className="border-t border-[#EAF6FF]/15 pt-6">
          <div className="flex flex-wrap items-baseline justify-between gap-2 mb-5">
            <h4 className="font-display text-lg sm:text-xl text-[#EAF6FF]">
              {snapshot.year}: {snapshot.headline}
            </h4>
            <span className="font-display text-xs uppercase tracking-[0.16em] text-[#6FE8FF]">
              {snapshot.studyLabel}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border border-[#EAF6FF]/14 bg-[#010614]/70 p-4">
              <span className="font-display text-[11px] uppercase tracking-[0.16em] text-[#EAF6FF]/60 block mb-1">
                CALIFORNIA TYPE SPECIES
              </span>
              <p className="font-display text-lg text-[#EAF6FF] mb-1">
                <em>{snapshot.californiaType.genusAssignment}</em>
              </p>
              <p className="text-xs text-[#EAF6FF]/75">{snapshot.californiaType.status}</p>
            </div>

            <div className="border border-[#6FE8FF]/45 bg-[#030F2B]/90 p-4">
              <span className="font-display text-[11px] uppercase tracking-[0.16em] text-[#6FE8FF] block mb-1">
                CHINESE SPECIES (GUIZHOU)
              </span>
              <p className="font-display text-lg text-[#6FE8FF] mb-1">
                <em>{snapshot.chineseSpecies.genusAssignment}</em>
              </p>
              <p className="text-xs text-[#EAF6FF]/85">{snapshot.chineseSpecies.status}</p>
            </div>

            <div className="border border-[#6FE8FF]/45 bg-[#030F2B]/90 p-4">
              <span className="font-display text-[11px] uppercase tracking-[0.16em] text-[#6FE8FF] block mb-1">
                CANADIAN GIANT (BRITISH COLUMBIA)
              </span>
              <p className="font-display text-lg text-[#6FE8FF] mb-1">
                <em>{snapshot.canadianGiant.genusAssignment}</em>
              </p>
              <p className="text-xs text-[#EAF6FF]/85">{snapshot.canadianGiant.status}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Species Cards with Status Line */}
      <h3 className="font-display text-xl uppercase tracking-[0.08em] text-[#EAF6FF] mb-5">
        Species Cards (Taxonomy Debated)
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
        {SPECIES_STATUS_CARDS.map((card) => (
          <article
            key={card.id}
            className="border border-[#EAF6FF]/14 bg-[#030F2B]/70 p-6 flex flex-col justify-between"
          >
            <div>
              <p className="font-display text-[10px] uppercase tracking-[0.16em] text-[#6FE8FF] border-b border-[#EAF6FF]/12 pb-2 mb-3">
                {card.statusLine}
              </p>
              <h4 className="font-display text-lg text-[#EAF6FF] mb-1.5">{card.taxon}</h4>
              <p className="font-display text-xs uppercase tracking-[0.12em] text-[#EAF6FF]/60 mb-3">
                {card.ageAndLocation}
              </p>
              <p className="text-sm text-[#EAF6FF]/82 leading-relaxed">{card.summary}</p>
            </div>
          </article>
        ))}
      </div>

      {/* Relatives (one short line each) */}
      <div className="border border-[#EAF6FF]/14 bg-[#061B45]/30 p-6 sm:p-8">
        <h3 className="font-display text-lg uppercase tracking-[0.14em] text-[#6FE8FF] mb-4">
          Relatives
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {SHASTASAURID_RELATIVES.map((rel) => (
            <div
              key={rel.name}
              className="border-b border-[#EAF6FF]/10 pb-3 flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3"
            >
              <span className="font-display text-base text-[#EAF6FF] shrink-0">
                <em>{rel.name}</em>:
              </span>
              <span className="text-sm text-[#EAF6FF]/78">{rel.summary}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
