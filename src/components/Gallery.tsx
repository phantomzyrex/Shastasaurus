import React, { useRef, useState } from 'react';
import { SectionHeader } from './SectionHeader';
import { GALLERY_PLATES, GalleryPlate } from '../data/shastasaurusData';

const renderSchematicPlaceholder = (plate: GalleryPlate) => {
  switch (plate.diagramType) {
    case 'cranial':
      return (
        <svg viewBox="0 0 400 240" className="w-full h-full">
          <rect width="400" height="240" fill="#030F2B" />
          {/* Short triangular toothless skull schematic */}
          <path
            d="M 85 130 L 185 82 L 305 90 L 305 155 L 180 158 Z"
            fill="#0A2C6B"
            stroke="#6FE8FF"
            strokeWidth="2"
          />
          <circle cx="235" cy="118" r="18" fill="#010614" stroke="#6FE8FF" strokeWidth="1.5" />
          <line x1="85" y1="185" x2="305" y2="185" stroke="#3FA0E6" strokeWidth="1" />
          <text x="195" y="205" textAnchor="middle" fill="#6FE8FF" fontSize="10" fontFamily="Marcellus, serif">
            SHORT TOOTHLESS ROSTRUM · S. LIANGAE (~8.3% BODY LENGTH)
          </text>
        </svg>
      );
    case 'axial':
      return (
        <svg viewBox="0 0 400 240" className="w-full h-full">
          <rect width="400" height="240" fill="#030F2B" />
          <path
            d="M 35 120 Q 190 95 365 125"
            fill="none"
            stroke="#6FE8FF"
            strokeWidth="3"
          />
          {Array.from({ length: 18 }).map((_, i) => (
            <line
              key={i}
              x1={55 + i * 16}
              y1={108}
              x2={52 + i * 16}
              y2={148}
              stroke="#3FA0E6"
              strokeWidth="1.5"
            />
          ))}
          <text x="200" y="205" textAnchor="middle" fill="#6FE8FF" fontSize="10" fontFamily="Marcellus, serif">
            SLENDER PRESACRAL VERTEBRAL SERIES · SHASTASAURIDAE
          </text>
        </svg>
      );
    case 'ontogeny':
      return (
        <svg viewBox="0 0 400 240" className="w-full h-full">
          <rect width="400" height="240" fill="#030F2B" />
          <rect x="40" y="75" width="145" height="22" fill="#3FA0E6" fillOpacity="0.6" stroke="#6FE8FF" />
          <text x="200" y="90" fill="#EAF6FF" fontSize="11" fontFamily="Marcellus, serif">
            JUVENILE: 3.74 M (9.3% SKULL)
          </text>
          <rect x="40" y="125" width="320" height="28" fill="#1E6FC0" fillOpacity="0.75" stroke="#6FE8FF" />
          <text x="200" y="175" textAnchor="middle" fill="#6FE8FF" fontSize="10" fontFamily="Marcellus, serif">
            ADULT: 8.3 M (8.3% SKULL) · EDENTULOUS AT BOTH STAGES
          </text>
        </svg>
      );
    case 'biota':
      return (
        <svg viewBox="0 0 400 240" className="w-full h-full">
          <rect width="400" height="240" fill="#030F2B" />
          {/* Ammonoids & pelagic crinoids schematic */}
          <circle cx="130" cy="115" r="28" fill="none" stroke="#6FE8FF" strokeWidth="2" />
          <circle cx="130" cy="115" r="16" fill="none" stroke="#3FA0E6" strokeWidth="1.5" />
          <path d="M 245 65 C 245 105, 265 125, 265 160" stroke="#6FE8FF" strokeWidth="1.5" fill="none" />
          <circle cx="265" cy="160" r="14" fill="none" stroke="#6FE8FF" strokeWidth="1.5" />
          <text x="200" y="205" textAnchor="middle" fill="#6FE8FF" fontSize="10" fontFamily="Marcellus, serif">
            GUANLING BIOTA · AMMONOIDS &amp; PELAGIC CRINOIDS
          </text>
        </svg>
      );
    case 'hyoid':
      return (
        <svg viewBox="0 0 400 240" className="w-full h-full">
          <rect width="400" height="240" fill="#030F2B" />
          <path
            d="M 110 95 Q 200 112 290 95 M 115 130 Q 200 148 285 130"
            stroke="#6FE8FF"
            strokeWidth="3.5"
            fill="none"
          />
          <text x="200" y="205" textAnchor="middle" fill="#6FE8FF" fontSize="10" fontFamily="Marcellus, serif">
            SHORT, NARROW HYOID RODS · MOTANI ET AL. (2013)
          </text>
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 400 240" className="w-full h-full">
          <rect width="400" height="240" fill="#030F2B" />
          <line x1="40" y1="80" x2="360" y2="80" stroke="#1E6FC0" strokeWidth="2" />
          <line x1="40" y1="120" x2="360" y2="120" stroke="#6FE8FF" strokeWidth="2" />
          <line x1="40" y1="160" x2="360" y2="160" stroke="#1E6FC0" strokeWidth="2" />
          <text x="200" y="205" textAnchor="middle" fill="#6FE8FF" fontSize="10" fontFamily="Marcellus, serif">
            HOSSELKUS LIMESTONE · SHASTA COUNTY, CALIFORNIA (1895)
          </text>
        </svg>
      );
  }
};

export const Gallery: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [missingImages, setMissingImages] = useState<Record<string, boolean>>({});
  const [activeLightbox, setActiveLightbox] = useState<GalleryPlate | null>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  const scrollByAmount = (delta: number) => {
    scrollRef.current?.scrollBy({ left: delta, behavior: 'smooth' });
  };

  return (
    <section
      id="gallery"
      aria-labelledby="gallery-heading"
      className="relative z-20 py-24 sm:py-32 px-6 sm:px-10 md:px-16 max-w-7xl mx-auto"
    >
      <SectionHeader
        number="10"
        depthTag="3,650 M · MIDNIGHT / ABYSSAL TRANSITION"
        kicker="ARCHIVAL PLATES & SPECIMEN DIAGRAMS"
        title="Exhibition Gallery"
        subtitle="Drag horizontally or select any plate to inspect in the full-screen specimen lightbox. Drop custom /assets/gallery-01.jpg ... gallery-06.jpg files into /public/assets/ to replace the labelled archival plate placeholders automatically."
      />

      {/* Carousel Controls */}
      <div className="mb-6 flex items-center justify-between gap-4">
        <span className="font-display text-xs uppercase tracking-[0.18em] text-[#6FE8FF]">
          DRAG TO SCROLL · CLICK PLATE FOR LIGHTBOX
        </span>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => scrollByAmount(-380)}
            aria-label="Scroll gallery left"
            className="px-3.5 py-2 border border-[#EAF6FF]/20 bg-[#030F2B] font-display text-xs uppercase tracking-[0.14em] text-[#EAF6FF] hover:border-[#6FE8FF] cursor-pointer"
          >
            ← Prev
          </button>
          <button
            type="button"
            onClick={() => scrollByAmount(380)}
            aria-label="Scroll gallery right"
            className="px-3.5 py-2 border border-[#EAF6FF]/20 bg-[#030F2B] font-display text-xs uppercase tracking-[0.14em] text-[#EAF6FF] hover:border-[#6FE8FF] cursor-pointer"
          >
            Next →
          </button>
        </div>
      </div>

      {/* Horizontal Drag-Scroll Container */}
      <div
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUpOrLeave}
        onMouseLeave={handleMouseUpOrLeave}
        className={`flex gap-6 overflow-x-auto no-scrollbar pb-4 select-none ${
          isDragging ? 'cursor-grabbing' : 'cursor-grab'
        }`}
      >
        {GALLERY_PLATES.map((plate) => {
          const isMissing = Boolean(missingImages[plate.id]);
          return (
            <article
              key={plate.id}
              className="w-[310px] sm:w-[370px] shrink-0 border border-[#EAF6FF]/16 bg-[#030F2B]/80 hover:border-[#6FE8FF]/60 transition-colors flex flex-col justify-between"
            >
              <div>
                {/* Image or Clearly Labelled Placeholder */}
                <div className="relative aspect-[16/10] w-full bg-[#010614] border-b border-[#EAF6FF]/12 overflow-hidden">
                  {!isMissing ? (
                    <img
                      src={plate.src}
                      alt={plate.title}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      onError={() =>
                        setMissingImages((prev) => ({ ...prev, [plate.id]: true }))
                      }
                      className="w-full h-full object-cover creature-graded"
                    />
                  ) : (
                    <div className="w-full h-full relative">
                      {renderSchematicPlaceholder(plate)}
                      <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between gap-2 bg-[#010614]/90 border border-[#EAF6FF]/20 px-2.5 py-1 text-[10px] font-display uppercase tracking-[0.14em] text-[#EAF6FF]/80">
                        <span>PLACEHOLDER · {plate.src}</span>
                        <span className="text-[#6FE8FF]">{plate.plateNumber}</span>
                      </div>
                    </div>
                  )}
                </div>

                <div className="p-5">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="font-display text-xs uppercase tracking-[0.18em] text-[#6FE8FF]">
                      {plate.plateNumber}
                    </span>
                    <span className="font-display text-[10px] uppercase tracking-[0.14em] text-[#EAF6FF]/55">
                      {plate.specimenCode}
                    </span>
                  </div>

                  <h3 className="font-display text-lg text-[#EAF6FF] mb-2">
                    {plate.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#EAF6FF]/75 leading-relaxed">
                    {plate.caption}
                  </p>
                </div>
              </div>

              <div className="px-5 pb-5 pt-2">
                <button
                  type="button"
                  onClick={() => setActiveLightbox(plate)}
                  aria-label={`Open lightbox for ${plate.plateNumber}: ${plate.title}`}
                  className="w-full py-2 border border-[#6FE8FF]/45 bg-[#061B45]/50 font-display text-xs uppercase tracking-[0.16em] text-[#EAF6FF] hover:bg-[#6FE8FF] hover:text-[#010614] transition-colors cursor-pointer"
                >
                  Inspect Plate in Lightbox
                </button>
              </div>
            </article>
          );
        })}
      </div>

      {/* Lightbox Modal */}
      {activeLightbox && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Lightbox: ${activeLightbox.title}`}
          className="fixed inset-0 z-[85] bg-[#010614]/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          onClick={() => setActiveLightbox(null)}
        >
          <div
            className="max-w-3xl w-full border border-[#6FE8FF]/55 bg-[#030F2B] p-6 sm:p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-4 border-b border-[#EAF6FF]/15 pb-4 mb-5">
              <div>
                <span className="font-display text-xs uppercase tracking-[0.2em] text-[#6FE8FF] block">
                  {activeLightbox.plateNumber} · {activeLightbox.specimenCode}
                </span>
                <h3 className="font-display text-xl sm:text-2xl text-[#EAF6FF]">
                  {activeLightbox.title}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setActiveLightbox(null)}
                aria-label="Close lightbox"
                className="px-3.5 py-1.5 border border-[#EAF6FF]/30 font-display text-xs uppercase tracking-[0.16em] text-[#EAF6FF] hover:border-[#6FE8FF] hover:text-[#6FE8FF] cursor-pointer"
              >
                CLOSE [ESC]
              </button>
            </div>

            <div className="aspect-[16/9] w-full bg-[#010614] border border-[#EAF6FF]/15 mb-5 overflow-hidden">
              {!missingImages[activeLightbox.id] ? (
                <img
                  src={activeLightbox.src}
                  alt={activeLightbox.title}
                  className="w-full h-full object-contain creature-graded"
                />
              ) : (
                renderSchematicPlaceholder(activeLightbox)
              )}
            </div>

            <p className="text-sm sm:text-base text-[#EAF6FF]/85 leading-relaxed">
              {activeLightbox.caption}
            </p>
            <p className="mt-3 text-xs text-[#6FE8FF]">
              Asset path: <code>/public{activeLightbox.src}</code>
            </p>
          </div>
        </div>
      )}
    </section>
  );
};
