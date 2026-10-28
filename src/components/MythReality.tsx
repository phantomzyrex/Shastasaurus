import React, { useState } from 'react';
import { SectionHeader } from './SectionHeader';
import { EvidenceChip } from './EvidenceChip';
import { MYTH_REALITY_CARDS } from '../data/shastasaurusData';

export const MythReality: React.FC = () => {
  const [flippedIds, setFlippedIds] = useState<Record<string, boolean>>({});

  const toggleCard = (id: string) => {
    setFlippedIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const allFlipped = MYTH_REALITY_CARDS.every((c) => Boolean(flippedIds[c.id]));

  const toggleAll = () => {
    if (allFlipped) {
      setFlippedIds({});
    } else {
      const next: Record<string, boolean> = {};
      MYTH_REALITY_CARDS.forEach((c) => {
        next[c.id] = true;
      });
      setFlippedIds(next);
    }
  };

  return (
    <section
      id="myth-reality"
      aria-labelledby="myth-reality-heading"
      className="relative z-20 py-24 sm:py-32 px-6 sm:px-10 md:px-16 max-w-7xl mx-auto"
    >
      <SectionHeader
        number="09"
        depthTag="3,350 M · MIDNIGHT ZONE"
        kicker="POPULAR MISCONCEPTIONS VS PALEONTOLOGICAL RECORD"
        title="Myth vs Reality"
        subtitle="Select any card below to flip between widespread popular claims and the current fossil evidence."
      />

      <div className="mb-8 flex justify-end">
        <button
          type="button"
          onClick={toggleAll}
          className="px-4 py-2 border border-[#6FE8FF]/50 bg-[#061B45]/50 font-display text-xs uppercase tracking-[0.16em] text-[#EAF6FF] hover:bg-[#6FE8FF] hover:text-[#010614] transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-[#6FE8FF]"
        >
          {allFlipped ? 'Reset All to Myths' : 'Reveal All Realities'}
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {MYTH_REALITY_CARDS.map((card) => {
          const isFlipped = Boolean(flippedIds[card.id]);
          return (
            <div key={card.id} className="perspective-1000 h-72">
              <button
                type="button"
                onClick={() => toggleCard(card.id)}
                aria-pressed={isFlipped}
                aria-label={`${card.mythNumber}: ${card.myth} Click to ${
                  isFlipped ? 'show myth' : 'reveal scientific reality'
                }`}
                className={`relative w-full h-full text-left transition-transform duration-500 preserve-3d cursor-pointer focus-visible:outline-2 focus-visible:outline-[#6FE8FF] ${
                  isFlipped ? 'rotate-y-180' : ''
                }`}
              >
                {/* Front Face: MYTH */}
                <div
                  className={`absolute inset-0 backface-hidden border border-[#EAF6FF]/16 bg-[#030F2B]/85 hover:border-[#6FE8FF]/55 p-6 flex flex-col justify-between transition-opacity duration-300 ${
                    isFlipped ? 'opacity-0 pointer-events-none' : 'opacity-100'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-display text-xs uppercase tracking-[0.2em] text-[#3FA0E6]">
                      {card.mythNumber} · POPULAR CLAIM
                    </span>
                    <span className="font-display text-[10px] uppercase tracking-[0.16em] text-[#6FE8FF]">
                      CLICK TO FLIP ↻
                    </span>
                  </div>

                  <h3 className="font-display text-xl sm:text-2xl text-[#EAF6FF] leading-snug my-auto">
                    {card.myth}
                  </h3>

                  <div className="border-t border-[#EAF6FF]/12 pt-3 flex items-center justify-between text-xs text-[#EAF6FF]/60">
                    <span>Examine fossil evidence</span>
                    <EvidenceChip level={card.chip} />
                  </div>
                </div>

                {/* Back Face: REALITY */}
                <div
                  className={`absolute inset-0 backface-hidden rotate-y-180 border border-[#6FE8FF] bg-[#061B45]/90 p-6 flex flex-col justify-between transition-opacity duration-300 ${
                    isFlipped ? 'opacity-100' : 'opacity-0 pointer-events-none'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-display text-xs uppercase tracking-[0.2em] text-[#6FE8FF]">
                      SCIENTIFIC REALITY
                    </span>
                    <EvidenceChip level={card.chip} />
                  </div>

                  <div className="my-auto">
                    <p className="font-display text-lg uppercase tracking-[0.06em] text-[#6FE8FF] mb-2">
                      {card.verdict}
                    </p>
                    <p className="text-sm sm:text-base text-[#EAF6FF] leading-relaxed">
                      {card.reality}
                    </p>
                  </div>

                  <div className="border-t border-[#EAF6FF]/15 pt-3 flex items-center justify-between text-xs text-[#6FE8FF]">
                    <span>Verified against literature</span>
                    <span className="font-display uppercase tracking-[0.14em]">FLIP BACK ↺</span>
                  </div>
                </div>
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
};
