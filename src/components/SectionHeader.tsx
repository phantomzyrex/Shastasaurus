import React from 'react';

interface SectionHeaderProps {
  number: string;
  depthTag: string;
  kicker: string;
  title: string;
  subtitle?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  number,
  depthTag,
  kicker,
  title,
  subtitle,
}) => {
  return (
    <div className="mb-14 md:mb-20 border-b border-[#EAF6FF]/12 pb-8">
      <div className="flex flex-wrap items-baseline justify-between gap-4 mb-4">
        <div className="flex items-baseline gap-4">
          <span
            className="section-numeral-outline text-5xl sm:text-6xl md:text-7xl leading-none tracking-tight tabular-nums"
            aria-hidden="true"
          >
            {number}
          </span>
          <span className="font-display text-xs sm:text-sm uppercase tracking-[0.22em] text-[#6FE8FF] tabular-nums">
            {number} / {depthTag}
          </span>
        </div>
        <span className="font-display text-xs uppercase tracking-[0.2em] text-[#EAF6FF]/60">
          {kicker}
        </span>
      </div>

      <div className="overflow-hidden">
        <h2
          className="section-reveal-heading font-display text-3xl sm:text-4xl md:text-5xl uppercase tracking-[0.04em] text-[#EAF6FF] leading-[1.15]"
          style={{ textWrap: 'balance' }}
        >
          {title}
        </h2>
      </div>

      {subtitle && (
        <p className="mt-4 max-w-2xl text-base sm:text-lg text-[#EAF6FF]/78 font-light leading-[1.7]">
          {subtitle}
        </p>
      )}
    </div>
  );
};
