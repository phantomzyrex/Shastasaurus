import React, { useEffect, useState } from 'react';
import { HERO_ASSET_PRIMARY, HERO_ASSET_FALLBACK } from '../data/shastasaurusData';

interface MenuOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (sectionId: string) => void;
}

const MENU_ITEMS = [
  { num: '01', label: 'Overview', id: 'overview', depth: '200 M' },
  { num: '02', label: 'Discovery & History', id: 'discovery', depth: '550 M' },
  { num: '03', label: 'Anatomy', id: 'anatomy', depth: '950 M' },
  { num: '04', label: 'Size Comparison', id: 'size-comparison', depth: '1,350 M' },
  { num: '05', label: 'Diet & Feeding', id: 'feeding', depth: '1,750 M' },
  { num: '06', label: 'Habitat & Distribution', id: 'habitat', depth: '2,150 M' },
  { num: '07', label: 'Classification & Species', id: 'classification', depth: '2,600 M' },
  { num: '08', label: 'Evolution & Extinction', id: 'evolution', depth: '3,000 M' },
  { num: '09', label: 'Myth vs Reality', id: 'myth-reality', depth: '3,350 M' },
  { num: '10', label: 'Gallery', id: 'gallery', depth: '3,650 M' },
  { num: '11', label: 'Fast Facts & Sources', id: 'facts-sources', depth: '3,850 M' },
  { num: '12', label: 'Contact', id: 'contact', depth: '4,000 M' },
];

export const MenuOverlay: React.FC<MenuOverlayProps> = ({
  isOpen,
  onClose,
  onNavigate,
}) => {
  const [imgSrc, setImgSrc] = useState(HERO_ASSET_PRIMARY);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Chapter navigation overlay"
      aria-hidden={!isOpen}
      style={{
        clipPath: isOpen
          ? 'circle(150% at 50% 2.5rem)'
          : 'circle(0% at 50% 2.5rem)',
      }}
      className={`fixed inset-0 z-[75] bg-[#020814]/98 backdrop-blur-md transition-[clip-path,opacity] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col justify-between px-6 sm:px-12 py-6 sm:py-8 overflow-y-auto ${
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
    >
      {/* Top Bar with CLOSE and thin line */}
      <div className="flex items-start justify-between gap-8 border-b border-[#EAF6FF]/10 pb-5">
        <span className="font-display text-xs sm:text-sm uppercase tracking-[0.14em] text-[#EAF6FF]/70">
          SHASTASAURUS · BATHYPELAGIC INDEX
        </span>

        <button
          type="button"
          onClick={onClose}
          aria-label="Close navigation menu"
          className="group flex flex-col items-center cursor-pointer focus-visible:outline-2 focus-visible:outline-[#6FE8FF] focus-visible:outline-offset-4"
        >
          <span
            aria-hidden="true"
            className="block h-[1px] w-16 sm:w-20 bg-[#EAF6FF]/85 mb-2 transition-all duration-200 group-hover:w-28 group-hover:bg-[#6FE8FF]"
          />
          <span className="font-display text-xs sm:text-[15px] uppercase tracking-[0.08em] text-[#EAF6FF] group-hover:text-[#6FE8FF]">
            CLOSE
          </span>
        </button>

        <span className="font-display text-xs sm:text-sm uppercase tracking-[0.14em] text-[#6FE8FF] tabular-nums">
          ESC TO EXIT
        </span>
      </div>

      {/* Main Content: 12 Numbered Chapters + Small Creature Copy */}
      <div className="my-auto py-8 max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <nav
          aria-label="Section index"
          className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-3"
        >
          {MENU_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                onClose();
                onNavigate(item.id);
              }}
              className="group flex items-baseline justify-between py-2.5 border-b border-[#EAF6FF]/10 hover:border-[#6FE8FF]/60 transition-colors focus-visible:outline-2 focus-visible:outline-[#6FE8FF]"
            >
              <div className="flex items-baseline gap-3.5">
                <span className="font-display text-xs text-[#6FE8FF] tracking-[0.16em] tabular-nums">
                  {item.num}
                </span>
                <span className="font-display text-lg sm:text-xl uppercase tracking-[0.05em] text-[#EAF6FF] group-hover:text-[#6FE8FF] transition-colors">
                  {item.label}
                </span>
              </div>
              <span className="font-display text-[11px] uppercase tracking-[0.16em] text-[#EAF6FF]/45 group-hover:text-[#6FE8FF]/85 tabular-nums">
                {item.depth}
              </span>
            </a>
          ))}
        </nav>

        {/* Small graded copy of creature image */}
        <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 border border-[#EAF6FF]/12 bg-[#030F2B]/55 relative overflow-hidden">
          <div
            className="pointer-events-none absolute inset-0 opacity-45"
            style={{
              background:
                'radial-gradient(circle at 50% 25%, rgba(63, 160, 230, 0.35), transparent 70%)',
            }}
          />
          <img
            src={imgSrc}
            onError={() => {
              if (imgSrc !== HERO_ASSET_FALLBACK) setImgSrc(HERO_ASSET_FALLBACK);
            }}
            alt="Shastasaurus specimen miniature preview"
            referrerPolicy="no-referrer"
            className="relative z-10 w-full max-w-[260px] h-auto object-contain creature-graded"
          />
          <div className="relative z-10 mt-4 text-center">
            <p className="font-display text-xs uppercase tracking-[0.2em] text-[#6FE8FF]">
              ORDER ICHTHYOSAURIA
            </p>
            <p className="text-xs text-[#EAF6FF]/70 mt-1">
              Late Triassic · Carnian Stage (~237–227 Ma)
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[#EAF6FF]/10 pt-4 text-xs text-[#EAF6FF]/55">
        <span>FAMILY SHASTASAURIDAE · MERRIAM, 1895</span>
        <span>NORTHERN CALIFORNIA &amp; SOUTHWESTERN CHINA</span>
      </div>
    </div>
  );
};
