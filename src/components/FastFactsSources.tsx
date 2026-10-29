import React from 'react';
import { SectionHeader } from './SectionHeader';
import { DID_YOU_KNOW_FACTS, SCIENTIFIC_SOURCES } from '../data/shastasaurusData';

export const FastFactsSources: React.FC = () => {
  return (
    <section
      id="facts-sources"
      aria-labelledby="facts-sources-heading"
      className="relative z-20 py-24 sm:py-32 px-6 sm:px-10 md:px-16 max-w-7xl mx-auto"
    >
      <SectionHeader
        number="12"
        depthTag="3,850 M · ABYSSAL APPROACH"
        kicker="SUMMARY DIGEST & PEER-REVIEWED BIBLIOGRAPHY"
        title="Fast Facts and Sources"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left: 8 "Did You Know" Facts (7 cols) */}
        <div className="lg:col-span-7 border border-[#EAF6FF]/15 bg-[#030F2B]/80 p-6 sm:p-8">
          <span className="font-display text-xs uppercase tracking-[0.2em] text-[#6FE8FF] block mb-2">
            QUICK SYNTHESIS
          </span>
          <h3 className="font-display text-2xl uppercase tracking-[0.04em] text-[#EAF6FF] mb-6">
            8 “Did You Know” Facts
          </h3>

          <ol className="divide-y divide-[#EAF6FF]/12">
            {DID_YOU_KNOW_FACTS.map((fact, idx) => (
              <li
                key={idx}
                className="py-3.5 first:pt-0 last:pb-0 flex items-baseline gap-4"
              >
                <span className="font-display text-sm text-[#6FE8FF] tracking-[0.14em] tabular-nums shrink-0">
                  ({idx + 1})
                </span>
                <span className="text-sm sm:text-base text-[#EAF6FF]/88 leading-relaxed">
                  {fact}
                </span>
              </li>
            ))}
          </ol>
        </div>

        {/* Right: 18 Primary Literature & Institutional Sources (5 cols) */}
        <div className="lg:col-span-5 border border-[#EAF6FF]/15 bg-[#061B45]/35 p-6 sm:p-8">
          <span className="font-display text-xs uppercase tracking-[0.2em] text-[#6FE8FF] block mb-2">
            BIBLIOGRAPHY &amp; INSTITUTIONS
          </span>
          <h3 className="font-display text-2xl uppercase tracking-[0.04em] text-[#EAF6FF] mb-6">
            Primary Sources
          </h3>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5 text-xs sm:text-sm text-[#EAF6FF]/80">
            {SCIENTIFIC_SOURCES.map((source) => (
              <li
                key={source}
                className="border-b border-[#EAF6FF]/10 pb-2 flex items-center justify-between gap-2"
              >
                <span>{source}</span>
                <span className="text-[10px] font-display text-[#6FE8FF]" aria-hidden="true">
                  REF
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
