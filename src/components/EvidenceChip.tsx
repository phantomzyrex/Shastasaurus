import React from 'react';
import { EvidenceLevel } from '../data/shastasaurusData';

interface EvidenceChipProps {
  level: EvidenceLevel;
  note?: string;
  className?: string;
}

const CHIP_CONFIG: Record<
  EvidenceLevel,
  { symbol: string; borderClass: string; textClass: string }
> = {
  CONFIRMED: {
    symbol: '■',
    borderClass: 'border-[#6FE8FF]/55 bg-[#061B45]/70',
    textClass: 'text-[#EAF6FF]',
  },
  ESTIMATE: {
    symbol: '≈',
    borderClass: 'border-[#3FA0E6]/50 bg-[#061B45]/55',
    textClass: 'text-[#EAF6FF]/90',
  },
  DEBATED: {
    symbol: '◆',
    borderClass: 'border-[#EAF6FF]/45 bg-[#0A2C6B]/60',
    textClass: 'text-[#6FE8FF]',
  },
  INFERRED: {
    symbol: '◇',
    borderClass: 'border-[#3FA0E6]/40 bg-[#030F2B]/80',
    textClass: 'text-[#EAF6FF]/85',
  },
  REJECTED: {
    symbol: '×',
    borderClass: 'border-[#EAF6FF]/30 bg-[#010614]/85',
    textClass: 'text-[#EAF6FF]/65 line-through decoration-[#6FE8FF]/50',
  },
  'ichthyosaur group trait': {
    symbol: '◈',
    borderClass: 'border-[#1E6FC0]/60 bg-[#030F2B]/85',
    textClass: 'text-[#EAF6FF]/85',
  },
};

export const EvidenceChip: React.FC<EvidenceChipProps> = ({
  level,
  note,
  className = '',
}) => {
  const cfg = CHIP_CONFIG[level] ?? CHIP_CONFIG.CONFIRMED;
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 border text-[10px] font-display uppercase tracking-[0.14em] leading-tight whitespace-nowrap shrink-0 ${cfg.borderClass} ${cfg.textClass} ${className}`}
      title={`Scientific status: ${level}${note ? ` (${note})` : ''}`}
    >
      <span aria-hidden="true" className="text-[9px] text-[#6FE8FF]">
        {cfg.symbol}
      </span>
      <span>
        {level}
        {note ? ` · ${note}` : ''}
      </span>
    </span>
  );
};
