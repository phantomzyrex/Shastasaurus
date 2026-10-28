import React from 'react';

interface NavProps {
  onOpenMenu: () => void;
  onNavigate: (sectionId: string) => void;
}

export const Nav: React.FC<NavProps> = ({ onOpenMenu, onNavigate }) => {
  return (
    <header
      className="relative z-30 flex items-start justify-between gap-8 px-6 sm:px-8 pt-5 sm:pt-7 pb-3 select-none"
      aria-label="Primary navigation"
    >
      {/* Zone 1: Left Brand Name */}
      <a
        href="#hero"
        onClick={(e) => {
          e.preventDefault();
          onNavigate('hero');
        }}
        className="font-display text-xs sm:text-[15px] uppercase tracking-[0.08em] text-[#EAF6FF] whitespace-nowrap shrink-0 transition-all duration-150 hover:text-[#6FE8FF] hover:drop-shadow-[0_0_12px_rgba(111,232,255,0.6)] focus-visible:outline-2 focus-visible:outline-[#6FE8FF] focus-visible:outline-offset-4"
        style={{ textShadow: '0 2px 12px rgba(1, 6, 20, 0.7)' }}
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
          style={{ textShadow: '0 2px 12px rgba(1, 6, 20, 0.7)' }}
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
        style={{ textShadow: '0 2px 12px rgba(1, 6, 20, 0.7)' }}
      >
        CONTACT
      </a>
    </header>
  );
};
