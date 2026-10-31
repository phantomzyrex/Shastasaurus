import React from 'react';

interface NavProps {
  isScrolled?: boolean;
  onOpenMenu: () => void;
  onNavigate: (sectionId: string) => void;
}

export const Nav: React.FC<NavProps> = ({
  isScrolled = false,
  onOpenMenu,
  onNavigate,
}) => {
  return (
    <header
      aria-label="Primary navigation"
      className="fixed left-2.5 right-2.5 sm:left-3.5 sm:right-3.5 top-2.5 sm:top-3.5 z-50 select-none"
    >
      {/* Smooth Scrolled Backdrop Layer with Rounded Top, Lighter Ocean-Blue Tint & Feathered Bottom Fade */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-x-0 -top-1 -bottom-9 rounded-t-[20px] sm:rounded-t-[24px] transition-opacity duration-500 ease-out ${
          isScrolled ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          background:
            'radial-gradient(ellipse 80% 100% at 50% 0%, rgba(30, 111, 192, 0.28) 0%, transparent 75%), linear-gradient(180deg, rgba(10, 44, 107, 0.76) 0%, rgba(6, 27, 69, 0.64) 48%, rgba(6, 27, 69, 0.28) 76%, rgba(6, 27, 69, 0) 100%)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          WebkitMaskImage:
            'linear-gradient(180deg, #000 0%, #000 50%, rgba(0, 0, 0, 0.48) 76%, transparent 100%)',
          maskImage:
            'linear-gradient(180deg, #000 0%, #000 50%, rgba(0, 0, 0, 0.48) 76%, transparent 100%)',
        }}
      />

      {/* Interactive 3-Part Navigation Row */}
      <div
        className={`relative z-10 flex items-center justify-between gap-8 px-6 sm:px-8 transition-all duration-300 ${
          isScrolled ? 'py-4 sm:py-5' : 'py-5 sm:py-6'
        }`}
      >
        {/* Zone 1: Left Brand Name */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            onNavigate('hero');
          }}
          className="font-display text-xs sm:text-[15px] uppercase tracking-[0.08em] text-[#EAF6FF] whitespace-nowrap shrink-0 transition-all duration-150 hover:text-[#6FE8FF] hover:drop-shadow-[0_0_12px_rgba(111,232,255,0.6)] focus-visible:outline-2 focus-visible:outline-[#6FE8FF] focus-visible:outline-offset-4"
          style={{ textShadow: '0 2px 12px rgba(1, 6, 20, 0.75)' }}
        >
          SHASTASAURUS
        </a>

        {/* Zone 2: Centre MENU with thin 1px white line (~80px wide) above it */}
        <button
          type="button"
          onClick={onOpenMenu}
          aria-label="Open navigation menu"
          className="group flex flex-col items-center cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-[#6FE8FF] focus-visible:outline-offset-4"
        >
          <span
            aria-hidden="true"
            className="block h-[1px] w-16 sm:w-20 bg-[#EAF6FF]/85 mb-2 transition-all duration-200 group-hover:w-28 group-hover:bg-[#6FE8FF] group-hover:shadow-[0_0_10px_#6FE8FF]"
          />
          <span
            className="font-display text-xs sm:text-[15px] uppercase tracking-[0.08em] text-[#EAF6FF] transition-all duration-150 group-hover:text-[#6FE8FF] group-hover:drop-shadow-[0_0_12px_rgba(111,232,255,0.65)]"
            style={{ textShadow: '0 2px 12px rgba(1, 6, 20, 0.75)' }}
          >
            MENU
          </span>
        </button>

        {/* Zone 3: Right CONTACT */}
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            onNavigate('contact');
          }}
          className="font-display text-xs sm:text-[15px] uppercase tracking-[0.08em] text-[#EAF6FF] whitespace-nowrap shrink-0 transition-all duration-150 hover:text-[#6FE8FF] hover:drop-shadow-[0_0_12px_rgba(111,232,255,0.6)] focus-visible:outline-2 focus-visible:outline-[#6FE8FF] focus-visible:outline-offset-4"
          style={{ textShadow: '0 2px 12px rgba(1, 6, 20, 0.75)' }}
        >
          CONTACT
        </a>
      </div>
    </header>
  );
};
