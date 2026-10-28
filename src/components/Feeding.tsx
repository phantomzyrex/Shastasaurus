import React from 'react';
import { SectionHeader } from './SectionHeader';
import { EvidenceChip } from './EvidenceChip';

export const Feeding: React.FC = () => {
  return (
    <section
      id="feeding"
      aria-labelledby="feeding-heading"
      className="relative z-20 py-24 sm:py-32 px-6 sm:px-10 md:px-16 max-w-7xl mx-auto"
    >
      <SectionHeader
        number="05"
        depthTag="1,750 M · MIDNIGHT ZONE"
        kicker="OPEN SCIENTIFIC DEBATE · TROPHIC MECHANICS"
        title="Diet and Feeding"
        subtitle="Because S. liangae lacked teeth even as a juvenile, how it captured prey in Late Triassic seas remains an active biomechanical controversy."
      />

      {/* Two-Column Scientific Debate Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch mb-10">
        {/* Column 1: Suction-Feeder Hypothesis */}
        <article className="border border-[#6FE8FF]/40 bg-[#061B45]/50 p-7 sm:p-8 flex flex-col justify-between">
          <div>
            <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
              <span className="font-display text-xs uppercase tracking-[0.2em] text-[#6FE8FF]">
                PROPOSAL · SANDER ET AL. (2011)
              </span>
              <EvidenceChip level="DEBATED" note="hypothesis" />
            </div>

            <h3 className="font-display text-2xl sm:text-3xl uppercase tracking-[0.04em] text-[#EAF6FF] mb-4">
              Suction-Feeder Hypothesis
            </h3>

            <p className="text-base text-[#EAF6FF]/85 leading-relaxed mb-4">
              A tiny head, a short toothless snout and a reduced jaw resemble modern beaked whales,
              which are largely toothless suction feeders. Suggested prey: soft-bodied cephalopods
              and fish.
            </p>

            <p className="text-sm text-[#EAF6FF]/75 leading-relaxed border-t border-[#EAF6FF]/12 pt-4">
              The study also speculated a link to low atmospheric oxygen in the Late Triassic
              (hypothesis), proposing that toothless suction feeding reduced metabolic hunting costs
              in deep or oxygen-minimum waters.
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-[#EAF6FF]/12 flex items-center justify-between text-xs text-[#6FE8FF]">
            <span className="font-display uppercase tracking-[0.14em]">
              MODERN ANALOGUE: ZIPHIID BEAKED WHALES
            </span>
            <span className="tabular-nums">2011</span>
          </div>
        </article>

        {/* Column 2: Biomechanical Challenge */}
        <article className="border border-[#EAF6FF]/25 bg-[#030F2B]/80 p-7 sm:p-8 flex flex-col justify-between">
          <div>
            <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
              <span className="font-display text-xs uppercase tracking-[0.2em] text-[#3FA0E6]">
                COUNTER-ARGUMENT · JI ET AL. (2013); MOTANI ET AL. (2013)
              </span>
              <EvidenceChip level="DEBATED" note="biomechanics" />
            </div>

            <h3 className="font-display text-2xl sm:text-3xl uppercase tracking-[0.04em] text-[#EAF6FF] mb-4">
              Biomechanical Challenge
            </h3>

            <p className="text-base text-[#EAF6FF]/85 leading-relaxed mb-4">
              The throat (hyoid) bones are short and narrow and seem too weak for the impact forces
              of suction feeding.
            </p>

            <p className="text-sm text-[#EAF6FF]/75 leading-relaxed border-t border-[#EAF6FF]/12 pt-4">
              Quantitative comparisons of the hyobranchial apparatus in <em>S. liangae</em> (
              <em>Guanlingsaurus</em>) found slender rod-like elements lacking the robust muscle
              attachment surfaces needed to generate sudden intraoral pressure drops.
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-[#EAF6FF]/12 flex items-center justify-between text-xs text-[#3FA0E6]">
            <span className="font-display uppercase tracking-[0.14em]">
              EVIDENCE: SHORT, SLENDER HYOID CORPUS
            </span>
            <span className="tabular-nums">2013</span>
          </div>
        </article>
      </div>

      {/* Comparative Shonisaurus Note */}
      <div className="mb-12 border border-[#EAF6FF]/16 bg-[#061B45]/35 p-6">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
          <span className="font-display text-xs uppercase tracking-[0.18em] text-[#6FE8FF]">
            COMPARATIVE SHASTASAURID ECOLOGY
          </span>
          <EvidenceChip level="CONFIRMED" note="in related genus Shonisaurus" />
        </div>
        <p className="text-sm sm:text-base text-[#EAF6FF]/85 leading-relaxed">
          Some other Triassic giants, such as <em>Shonisaurus</em>, had teeth and gut contents with
          shells and bones of vertebrates (Druckenmiller et al., 2014; Kelley et al., 2022), so
          shastasaurids may not all have fed the same way.
        </p>
      </div>

      {/* Animated Hypothetical Food-Web Graphic */}
      <div className="border border-[#EAF6FF]/15 bg-[#010614]/85 p-6 sm:p-8">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
          <div>
            <span className="font-display text-xs uppercase tracking-[0.2em] text-[#6FE8FF] block">
              TROPHIC NETWORK SCHEMATIC
            </span>
            <h4 className="font-display text-xl uppercase tracking-[0.04em] text-[#EAF6FF]">
              Candidate Pelagic Prey Relationships (Hypothetical)
            </h4>
          </div>
          <EvidenceChip level="DEBATED" note="Hypothetical — feeding style unsettled" />
        </div>

        <div className="w-full overflow-x-auto">
          <svg
            viewBox="0 0 960 260"
            className="w-full min-w-[640px] h-auto"
            role="img"
            aria-label="Hypothetical Late Triassic food-web diagram showing Shastasaurus and candidate soft-bodied cephalopod and fish prey"
          >
            <defs>
              <linearGradient id="webLineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#6FE8FF" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#3FA0E6" stopOpacity="0.25" />
              </linearGradient>
            </defs>

            {/* Hypothetical Watermark Banner */}
            <rect
              x="16"
              y="14"
              width="210"
              height="26"
              fill="#061B45"
              stroke="#6FE8FF"
              strokeOpacity="0.5"
            />
            <text
              x="121"
              y="31"
              textAnchor="middle"
              fill="#6FE8FF"
              fontSize="11"
              fontFamily="Marcellus, serif"
              letterSpacing="2"
            >
              HYPOTHETICAL MODEL
            </text>

            {/* Connecting Dashed Flow Lines */}
            <path
              d="M 340 135 C 440 75, 520 65, 620 65"
              fill="none"
              stroke="url(#webLineGrad)"
              strokeWidth="2"
              strokeDasharray="6 6"
            />
            <path
              d="M 340 135 C 450 135, 520 135, 620 135"
              fill="none"
              stroke="url(#webLineGrad)"
              strokeWidth="2"
              strokeDasharray="6 6"
            />
            <path
              d="M 340 135 C 440 195, 520 205, 620 205"
              fill="none"
              stroke="url(#webLineGrad)"
              strokeWidth="2"
              strokeDasharray="6 6"
            />

            {/* Left Node: Shastasaurus (short toothless snout) */}
            <g transform="translate(30, 85)">
              <rect
                x="0"
                y="0"
                width="310"
                height="100"
                fill="#061B45"
                fillOpacity="0.7"
                stroke="#6FE8FF"
                strokeWidth="1.5"
              />
              <path
                d="M 25 52 L 48 44 Q 130 34 235 38 Q 268 41 282 48 Q 268 55 235 56 L 245 72 Q 230 70 218 56 Q 130 58 65 54 L 35 66 Z"
                fill="#6FE8FF"
                fillOpacity="0.85"
              />
              <text
                x="155"
                y="24"
                textAnchor="middle"
                fill="#EAF6FF"
                fontSize="12"
                fontFamily="Marcellus, serif"
                letterSpacing="1.5"
              >
                SHASTASAURUS (TOOTHLESS JAWS)
              </text>
              <text
                x="155"
                y="88"
                textAnchor="middle"
                fill="#6FE8FF"
                fontSize="10"
                fontFamily="Jost, sans-serif"
              >
                Mechanism unresolved: suction vs ram/gulp capture
              </text>
            </g>

            {/* Right Node 1: Soft-bodied Cephalopods ( Coleoids / Squid-like ) */}
            <g transform="translate(620, 28)">
              <rect
                x="0"
                y="0"
                width="310"
                height="68"
                fill="#030F2B"
                stroke="#3FA0E6"
                strokeOpacity="0.55"
              />
              {/* Squid-like cephalopod silhouette */}
              <path
                d="M 28 34 L 48 22 L 85 27 L 85 41 L 48 46 Z M 85 28 L 108 22 M 85 32 L 112 31 M 85 36 L 112 38 M 85 40 L 108 46"
                fill="#6FE8FF"
                stroke="#6FE8FF"
                strokeWidth="1.5"
              />
              <text
                x="130"
                y="30"
                fill="#EAF6FF"
                fontSize="13"
                fontFamily="Marcellus, serif"
                letterSpacing="1"
              >
                SOFT-BODIED CEPHALOPODS
              </text>
              <text x="130" y="48" fill="#EAF6FF" fillOpacity="0.7" fontSize="11">
                Candidate prey · Pelagic coleoids (Debated)
              </text>
            </g>

            {/* Right Node 2: Small Pelagic Fishes */}
            <g transform="translate(620, 104)">
              <rect
                x="0"
                y="0"
                width="310"
                height="68"
                fill="#030F2B"
                stroke="#3FA0E6"
                strokeOpacity="0.55"
              />
              {/* Fish silhouette */}
              <path
                d="M 35 34 C 52 22, 76 22, 94 34 L 108 24 L 104 34 L 108 44 L 94 34 C 76 46, 52 46, 35 34 Z"
                fill="#3FA0E6"
              />
              <text
                x="130"
                y="30"
                fill="#EAF6FF"
                fontSize="13"
                fontFamily="Marcellus, serif"
                letterSpacing="1"
              >
                SMALL ACTINOPTERYGIAN FISHES
              </text>
              <text x="130" y="48" fill="#EAF6FF" fillOpacity="0.7" fontSize="11">
                Candidate prey · Schooling Triassic bony fishes
              </text>
            </g>

            {/* Right Node 3: Ammonoids */}
            <g transform="translate(620, 180)">
              <rect
                x="0"
                y="0"
                width="310"
                height="68"
                fill="#030F2B"
                stroke="#3FA0E6"
                strokeOpacity="0.55"
              />
              {/* Coiled Ammonoid shell silhouette */}
              <circle
                cx="68"
                cy="34"
                r="18"
                fill="none"
                stroke="#6FE8FF"
                strokeWidth="2"
              />
              <circle
                cx="68"
                cy="34"
                r="10"
                fill="none"
                stroke="#6FE8FF"
                strokeWidth="1.5"
              />
              <text
                x="130"
                y="30"
                fill="#EAF6FF"
                fontSize="13"
                fontFamily="Marcellus, serif"
                letterSpacing="1"
              >
                AMMONOIDS &amp; NEKTON
              </text>
              <text x="130" y="48" fill="#EAF6FF" fillOpacity="0.7" fontSize="11">
                Abundant in Guanling Biota alongside S. liangae
              </text>
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
};
