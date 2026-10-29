import React from 'react';
import { SectionHeader } from './SectionHeader';
import { OVERVIEW_STATS } from '../data/shastasaurusData';

export const Overview: React.FC = () => {
  return (
    <section
      id="overview"
      aria-labelledby="overview-heading"
      className="relative z-20 py-24 sm:py-32 px-6 sm:px-10 md:px-16 max-w-7xl mx-auto"
    >
      <SectionHeader
        number="02"
        depthTag="200 M · TWILIGHT ZONE"
        kicker="OVERVIEW & DIAGNOSTIC PROFILE"
        title="The Mount Shasta Lizard"
      />

      {/* Editorial Lead Copy */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 mb-16 items-start">
        <div className="lg:col-span-8">
          <p className="text-lg sm:text-xl md:text-2xl text-[#EAF6FF] font-light leading-[1.7] first-letter:font-display first-letter:text-5xl first-letter:float-left first-letter:mr-4 first-letter:mt-1 first-letter:text-[#6FE8FF]">
            <em>Shastasaurus</em> was a large, air-breathing marine reptile of the Late Triassic.
            It was <strong className="font-normal text-[#6FE8FF]">NOT</strong> a dinosaur, a
            plesiosaur or a lizard: it was an ichthyosaur, a group of marine reptiles that lived
            entirely in the sea. It was unusually strange for an ichthyosaur, with a slender body,
            a tiny head and a short, toothless snout, very different from the dolphin-like,
            long-snouted ichthyosaurs most people imagine.
          </p>
        </div>

        <div className="lg:col-span-4 border border-[#EAF6FF]/14 bg-[#061B45]/45 p-6">
          <div className="font-display text-xs uppercase tracking-[0.2em] text-[#6FE8FF] mb-2">
            SCIENTIFIC NOTE
          </div>
          <p className="text-sm text-[#EAF6FF]/80 leading-relaxed">
            <em>Shastasaurus</em> is poorly known and its classification is actively revised.
            Estimates, debated interpretations, and broader ichthyosaur group traits are explicitly
            labelled throughout this monograph.
          </p>
        </div>
      </div>

      {/* 9 Stat Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {OVERVIEW_STATS.map((stat) => (
          <article
            key={stat.id}
            className="border border-[#EAF6FF]/14 bg-[#061B45]/35 hover:bg-[#061B45]/55 transition-colors p-6 flex flex-col justify-between"
          >
            <div>
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-3">
                <span className="font-display text-xs uppercase tracking-[0.18em] text-[#EAF6FF]/65">
                  {stat.label}
                </span>
                {stat.qualifier && (
                  <span className="font-display text-[11px] uppercase tracking-[0.14em] text-[#6FE8FF]">
                    {stat.qualifier}
                  </span>
                )}
              </div>

              <h3 className="font-display text-lg sm:text-xl text-[#EAF6FF] tracking-[0.02em] mb-2.5">
                {stat.value}
              </h3>

              <p className="text-sm sm:text-[15px] text-[#EAF6FF]/78 leading-relaxed">
                {stat.detail}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
