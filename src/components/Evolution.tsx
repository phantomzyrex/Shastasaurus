import React from 'react';
import { SectionHeader } from './SectionHeader';
import { EvidenceChip } from './EvidenceChip';
import { GEOLOGICAL_TIMELINE, computeSkullMetrics } from '../data/shastasaurusData';

export const Evolution: React.FC = () => {
  const juvenileMetrics = computeSkullMetrics(3.74, 9.3);
  const adultMetrics = computeSkullMetrics(8.3, 8.3);

  return (
    <section
      id="evolution"
      aria-labelledby="evolution-heading"
      className="relative z-20 py-24 sm:py-32 px-6 sm:px-10 md:px-16 max-w-7xl mx-auto"
    >
      <SectionHeader
        number="08"
        depthTag="3,000 M · MIDNIGHT ZONE"
        kicker="MACROEVOLUTION, ONTOGENY & TURNOVER"
        title="Evolution and Extinction"
      />

      {/* Editorial Narrative & Reproduction Group Trait */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-14 items-start">
        <div className="lg:col-span-8 space-y-4 text-base sm:text-lg text-[#EAF6FF]/85 font-light leading-[1.75]">
          <p>
            Ichthyosaurs first appeared in Early Triassic seas, roughly 250 million years ago, soon
            after the end-Permian mass extinction. They diversified rapidly in the Early and Middle
            Triassic and filled many ecological roles, then declined sharply near the end of the
            Triassic (Martin et al., 2015).
          </p>
          <p>
            Shastasaurids were the giants of the Late Triassic. The Triassic–Jurassic mass
            extinction, about 201.4 million years ago, hit many marine groups, and the giant
            shastasaurids seem to disappear around then, though the Welsh limb bone (Martin et al.,
            2015) suggests one may have lingered into the earliest Jurassic. Smaller, more
            dolphin-like ichthyosaurs survived and persisted until about 90 million years ago, more
            than 100 million years after <em>Shastasaurus</em>.
          </p>
        </div>

        {/* Reproduction Callout */}
        <div className="lg:col-span-4 border border-[#EAF6FF]/15 bg-[#061B45]/45 p-6">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
            <span className="font-display text-xs uppercase tracking-[0.18em] text-[#6FE8FF]">
              REPRODUCTION
            </span>
            <EvidenceChip level="ichthyosaur group trait" />
          </div>
          <p className="text-sm text-[#EAF6FF]/85 leading-relaxed">
            Ichthyosaurs as a group are known to have given birth to live young in the water, but
            no birth evidence is documented for <em>Shastasaurus</em> itself.
          </p>
        </div>
      </div>

      {/* Animated Geological Timeline (250 Ma -> 90 Ma) */}
      <div className="mb-14 border border-[#EAF6FF]/15 bg-[#030F2B]/75 p-6 sm:p-8">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-6">
          <h3 className="font-display text-xl uppercase tracking-[0.06em] text-[#EAF6FF]">
            Geological Span of Ichthyosauria (250 Ma – 90 Ma)
          </h3>
          <span className="font-display text-xs uppercase tracking-[0.16em] text-[#6FE8FF]">
            160 MILLION YEARS OF MARINE REPTILE HISTORY
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {GEOLOGICAL_TIMELINE.map((stage, idx) => {
            const isShastasaurusStage = stage.id === 'carnian';
            return (
              <div
                key={stage.id}
                className={`p-4 border flex flex-col justify-between ${
                  isShastasaurusStage
                    ? 'border-[#6FE8FF] bg-[#061B45]/75 shadow-[0_0_25px_rgba(111,232,255,0.2)]'
                    : 'border-[#EAF6FF]/12 bg-[#010614]/65'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="font-display text-[11px] uppercase tracking-[0.16em] text-[#6FE8FF] tabular-nums">
                      0{idx + 1} · {stage.ageMa}
                    </span>
                  </div>
                  <p className="font-display text-xs uppercase tracking-[0.12em] text-[#EAF6FF]/65 mb-1">
                    {stage.era}
                  </p>
                  <h4 className="font-display text-base text-[#EAF6FF] mb-2">{stage.title}</h4>
                  <p className="text-xs text-[#EAF6FF]/78 leading-relaxed">{stage.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Juvenile vs Adult Infographic (3.74 m vs 8.3 m; skull 9.3% vs 8.3%) */}
      <div className="border border-[#6FE8FF]/35 bg-[#010614]/85 p-6 sm:p-8">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
          <div>
            <span className="font-display text-xs uppercase tracking-[0.2em] text-[#6FE8FF] block">
              ALLOMETRIC GROWTH · S. LIANGAE (JI ET AL., 2013)
            </span>
            <h3 className="font-display text-xl sm:text-2xl uppercase tracking-[0.04em] text-[#EAF6FF]">
              Juvenile versus Adult Cranial Scaling
            </h3>
          </div>
          <EvidenceChip level="CONFIRMED" />
        </div>

        <div className="space-y-6">
          {/* Juvenile Row (3.74 m; skull 9.3%) */}
          <div className="border border-[#EAF6FF]/12 bg-[#030F2B]/65 p-5">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
              <span className="font-display text-base uppercase tracking-[0.06em] text-[#EAF6FF]">
                Juvenile Specimen (<em>S. liangae</em>)
              </span>
              <span className="font-display text-sm text-[#6FE8FF] tabular-nums">
                Total Length: 3.74 m · Skull: 9.3% ({juvenileMetrics.skullLengthMeters} m) · Toothless
              </span>
            </div>
            <div className="w-full h-7 bg-[#010614] border border-[#EAF6FF]/15 p-1 flex items-center">
              <div
                className="h-full flex items-center"
                style={{ width: `${(3.74 / 8.3) * 100}%` }}
              >
                <div
                  className="h-full bg-[#3FA0E6]/65 border-r border-[#EAF6FF]"
                  style={{ width: '90.7%' }}
                  title="Postcranial body (90.7%)"
                />
                <div
                  className="h-full bg-[#6FE8FF]"
                  style={{ width: '9.3%' }}
                  title="Short toothless skull (9.3%)"
                />
              </div>
            </div>
          </div>

          {/* Adult Row (8.3 m; skull 8.3%) */}
          <div className="border border-[#6FE8FF]/45 bg-[#061B45]/55 p-5">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
              <span className="font-display text-base uppercase tracking-[0.06em] text-[#EAF6FF]">
                Largest Adult Specimen (<em>S. liangae</em>)
              </span>
              <span className="font-display text-sm text-[#6FE8FF] tabular-nums">
                Total Length: 8.3 m · Skull: 8.3% ({adultMetrics.skullLengthMeters} m) · Toothless
              </span>
            </div>
            <div className="w-full h-7 bg-[#010614] border border-[#EAF6FF]/15 p-1 flex items-center">
              <div className="w-full h-full flex items-center">
                <div
                  className="h-full bg-[#1E6FC0]/75 border-r border-[#EAF6FF]"
                  style={{ width: '91.7%' }}
                  title="Postcranial body (91.7%)"
                />
                <div
                  className="h-full bg-[#6FE8FF]"
                  style={{ width: '8.3%' }}
                  title="Short toothless skull (8.3%)"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
