import React from 'react';

interface FooterProps {
  onBackToSurface: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onBackToSurface }) => {
  return (
    <footer
      id="contact"
      aria-labelledby="contact-heading"
      className="relative z-20 border-t border-[#EAF6FF]/15 bg-[#010614] pt-24 pb-14 px-6 sm:px-10 md:px-16"
    >
      <div className="max-w-7xl mx-auto">
        {/* Top Row: Section 12 / 4,000 M */}
        <div className="flex flex-wrap items-baseline justify-between gap-4 mb-10">
          <div className="flex items-baseline gap-4">
            <span
              className="section-numeral-outline text-5xl sm:text-6xl leading-none tabular-nums"
              aria-hidden="true"
            >
              12
            </span>
            <span className="font-display text-xs sm:text-sm uppercase tracking-[0.22em] text-[#6FE8FF] tabular-nums">
              12 / 4,000 M · ABYSS
            </span>
          </div>

          <span className="font-display text-xs uppercase tracking-[0.2em] text-[#EAF6FF]/60">
            CURATORIAL INQUIRIES &amp; ARCHIVE COLOPHON
          </span>
        </div>

        {/* Large "LET'S TALK" in Marcellus */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end pb-16 border-b border-[#EAF6FF]/12">
          <div className="lg:col-span-8">
            <h2
              id="contact-heading"
              className="font-display text-5xl sm:text-7xl md:text-8xl uppercase tracking-[-0.01em] text-[#EAF6FF] leading-none hero-wordmark-glow mb-6"
            >
              LET&apos;S TALK
            </h2>
            <p className="max-w-xl text-base sm:text-lg text-[#EAF6FF]/75 font-light mb-6">
              For paleontological exhibition licensing, museum digital monographs, or scientific
              illustration inquiries regarding Late Triassic Ichthyosauria:
            </p>
            <a
              href="mailto:curatorial@shastasaurus-archive.org"
              className="inline-block font-display text-lg sm:text-2xl uppercase tracking-[0.08em] text-[#6FE8FF] border-b border-[#6FE8FF]/50 hover:border-[#6FE8FF] pb-1 transition-colors focus-visible:outline-2 focus-visible:outline-[#6FE8FF]"
            >
              curatorial@shastasaurus-archive.org
            </a>
          </div>

          {/* Right Column: Back to the Surface Button & Social Links */}
          <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-between gap-6">
            <button
              type="button"
              onClick={onBackToSurface}
              aria-label="Back to the surface (scroll to 0 m)"
              className="group px-6 py-4 border border-[#6FE8FF]/65 bg-[#061B45]/60 hover:bg-[#6FE8FF] text-[#EAF6FF] hover:text-[#010614] font-display text-xs sm:text-sm uppercase tracking-[0.2em] transition-all cursor-pointer focus-visible:outline-2 focus-visible:outline-[#6FE8FF]"
            >
              ↑ Back to the surface (0 m)
            </button>

            <div className="flex flex-wrap items-center gap-6 font-display text-xs uppercase tracking-[0.16em] text-[#EAF6FF]/75">
              <a
                href="#overview"
                className="hover:text-[#6FE8FF] transition-colors"
              >
                ARCHIVE
              </a>
              <a
                href="#classification"
                className="hover:text-[#6FE8FF] transition-colors"
              >
                TAXONOMY
              </a>
              <a
                href="#facts-sources"
                className="hover:text-[#6FE8FF] transition-colors"
              >
                LITERATURE
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Colophon & Asset Folder Note */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#EAF6FF]/55">
          <p className="font-display uppercase tracking-[0.16em] text-[#EAF6FF]/75">
            © 2026 SHASTASAURUS DIGITAL MONOGRAPH
          </p>
          <p>
            Asset directory: drop custom cutouts or plates into{' '}
            <code className="text-[#6FE8FF]">/public/assets/shastasaurus-hero.png</code> &amp;{' '}
            <code className="text-[#6FE8FF]">/public/assets/gallery-01.jpg..06.jpg</code>.
          </p>
        </div>
      </div>
    </footer>
  );
};
