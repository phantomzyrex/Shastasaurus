import React, { useEffect, useRef, useState } from 'react';
import { Nav } from './Nav';
import { HERO_ASSET_PRIMARY, HERO_ASSET_FALLBACK } from '../data/shastasaurusData';

interface HeroProps {
  isLoaded: boolean;
  scrollProgress: number;
  onOpenMenu: () => void;
  onNavigate: (sectionId: string) => void;
}

const WORDMARK_LETTERS = 'SHASTASAURUS'.split('');
const MOBILE_LINE_1 = 'SHASTA'.split('');
const MOBILE_LINE_2 = 'SAURUS'.split('');

export const Hero: React.FC<HeroProps> = ({
  isLoaded,
  scrollProgress,
  onOpenMenu,
  onNavigate,
}) => {
  const frameRef = useRef<HTMLDivElement>(null);
  const wordmarkRef = useRef<HTMLDivElement>(null);
  const creatureWrapRef = useRef<HTMLDivElement>(null);
  const shaftsRef = useRef<HTMLDivElement>(null);
  const [imgSrc, setImgSrc] = useState(HERO_ASSET_PRIMARY);
  const [fontSizePx, setFontSizePx] = useState<number | null>(null);

  // Fit-text function so "SHASTASAURUS" spans ~85% of the frame width on desktop/tablet
  useEffect(() => {
    const updateFitText = () => {
      if (!frameRef.current) return;
      const frameWidth = frameRef.current.clientWidth;
      if (window.innerWidth >= 768) {
        // 12 uppercase Marcellus letters with -0.01em tracking span ~85% width at ~0.098 * frameWidth
        const computed = Math.max(44, Math.min(180, frameWidth * 0.096));
        setFontSizePx(computed);
      } else {
        setFontSizePx(null);
      }
    };

    updateFitText();
    window.addEventListener('resize', updateFitText);
    return () => window.removeEventListener('resize', updateFitText);
  }, []);

  // Desktop mouse parallax: wordmark +-12px, creature +-24px opposite, light shafts +-40px
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    if (prefersReducedMotion || !isFinePointer) return;

    const onMouseMove = (e: MouseEvent) => {
      const normX = (e.clientX / window.innerWidth - 0.5) * 2;
      const normY = (e.clientY / window.innerHeight - 0.5) * 2;

      if (wordmarkRef.current) {
        wordmarkRef.current.style.transform = `translate3d(${normX * 12}px, ${normY * 12}px, 0)`;
      }
      if (creatureWrapRef.current) {
        creatureWrapRef.current.style.transform = `translate3d(${-normX * 24}px, ${-normY * 24}px, 0)`;
      }
      if (shaftsRef.current) {
        shaftsRef.current.style.transform = `translate3d(${normX * 40}px, ${normY * 16}px, 0)`;
      }
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  // Scroll-driven hero transform (wordmark scales/blurs slightly, creature drifts upward)
  const heroScrollFactor = Math.min(1, scrollProgress * 5);
  const wordmarkScrollScale = 1 - heroScrollFactor * 0.06;
  const wordmarkScrollBlur = heroScrollFactor * 4;
  const creatureScrollY = -heroScrollFactor * 42;

  return (
    <section
      id="hero"
      aria-label="Shastasaurus Hero"
      className="relative w-full h-screen min-h-[640px] p-2.5 sm:p-3.5 bg-[#010614] select-none overflow-hidden"
    >
      {/* 100vh Frame with ~24px rounded corners and thin dark margin */}
      <div
        ref={frameRef}
        className="relative w-full h-full rounded-[24px] hero-ocean-gradient overflow-hidden border border-[#EAF6FF]/10 shadow-[0_0_90px_rgba(1,6,20,0.95)] flex flex-col justify-between"
      >
        {/* LAYER 1: Faint Light Shafts from surface (top 50% of frame) */}
        <div
          ref={shaftsRef}
          className="pointer-events-none absolute inset-0 z-[2] overflow-hidden"
          aria-hidden="true"
        >
          {/* Left-top vertical light band (like reference) */}
          <div
            className="light-shaft-a absolute -top-16 left-[12%] w-28 sm:w-44 h-[62%] mix-blend-screen blur-[36px]"
            style={{
              background:
                'linear-gradient(180deg, rgba(111,232,255,0.28) 0%, rgba(63,160,230,0.12) 55%, transparent 100%)',
            }}
          />
          <div
            className="light-shaft-b absolute -top-20 left-[28%] w-20 sm:w-32 h-[54%] mix-blend-screen blur-[32px]"
            style={{
              background:
                'linear-gradient(180deg, rgba(234,246,255,0.20) 0%, rgba(63,160,230,0.08) 58%, transparent 100%)',
            }}
          />
          {/* Centre-top primary twilight glow shaft */}
          <div
            className="light-shaft-a absolute -top-24 left-[46%] w-36 sm:w-56 h-[58%] mix-blend-screen blur-[40px]"
            style={{
              background:
                'linear-gradient(180deg, rgba(111,232,255,0.24) 0%, rgba(30,111,192,0.10) 60%, transparent 100%)',
            }}
          />
          <div
            className="light-shaft-b absolute -top-16 right-[25%] w-24 sm:w-36 h-[52%] mix-blend-screen blur-[34px]"
            style={{
              background:
                'linear-gradient(180deg, rgba(234,246,255,0.18) 0%, rgba(63,160,230,0.08) 55%, transparent 100%)',
            }}
          />
          {/* Right-top vertical light band (like reference) */}
          <div
            className="light-shaft-a absolute -top-16 right-[10%] w-28 sm:w-44 h-[62%] mix-blend-screen blur-[36px]"
            style={{
              background:
                'linear-gradient(180deg, rgba(111,232,255,0.26) 0%, rgba(63,160,230,0.11) 55%, transparent 100%)',
            }}
          />
        </div>

        {/* LAYER 2: Distant Silhouettes (blurred SVG shoals of small fish & coiled ammonoid shells) */}
        <svg
          className="pointer-events-none absolute inset-0 z-[3] w-full h-full opacity-[0.07] blur-[2px]"
          viewBox="0 0 1440 900"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
        >
          {/* Distant fish shoal upper-left */}
          <g fill="#EAF6FF">
            <path d="M180 220 C192 214, 206 214, 218 220 L228 214 L225 220 L228 226 L218 220 C206 226, 192 226, 180 220 Z" />
            <path d="M215 236 C225 231, 237 231, 246 236 L254 231 L251 236 L254 241 L246 236 C237 241, 225 241, 215 236 Z" />
            <path d="M162 244 C172 240, 182 240, 190 244 L197 240 L195 244 L197 248 L190 244 C182 248, 172 248, 162 244 Z" />
            <path d="M242 215 C250 211, 260 211, 268 215 L275 211 L273 215 L275 219 L268 215 C260 219, 250 219, 242 215 Z" />
          </g>
          {/* Distant coiled ammonoid silhouettes upper-right & lower-left */}
          <g stroke="#6FE8FF" strokeWidth="2" fill="none">
            <path d="M1170 250 m-22 0 a22 22 0 1 0 44 0 a16 16 0 1 0 -32 0 a10 10 0 1 0 20 0" />
            <path d="M1225 285 m-14 0 a14 14 0 1 0 28 0 a10 10 0 1 0 -20 0" />
            <path d="M260 660 m-18 0 a18 18 0 1 0 36 0 a12 12 0 1 0 -24 0" />
          </g>
        </svg>

        {/* LAYER 6 (Top): Minimal 3-part Navigation */}
        <Nav onOpenMenu={onOpenMenu} onNavigate={onNavigate} />

        {/* LAYER 3: GIGANTIC Wordmark "SHASTASAURUS" sitting at ~52% vertical middle (z-10) */}
        <div
          className="pointer-events-none absolute inset-x-0 top-[46%] md:top-[52%] -translate-y-1/2 z-10 flex flex-col items-center justify-center px-3"
          style={{
            transform: `translateY(-50%) scale(${wordmarkScrollScale})`,
            filter: wordmarkScrollBlur > 0.2 ? `blur(${wordmarkScrollBlur}px)` : undefined,
          }}
        >
          <div ref={wordmarkRef} className="w-full flex flex-col items-center">
            {/* Accessible H1 */}
            <h1 className="sr-only">SHASTASAURUS — Strange Giant of the Triassic Seas</h1>

            {/* Desktop & Tablet single-line gigantic wordmark (~85% viewport width) */}
            <div
              aria-hidden="true"
              className="hidden md:flex items-center justify-center w-[85%] mx-auto font-display uppercase tracking-[-0.01em] leading-none hero-wordmark-glow select-none"
              style={{
                fontSize: fontSizePx ? `${fontSizePx}px` : '9.6vw',
              }}
            >
              {WORDMARK_LETTERS.map((char, idx) => (
                <span
                  key={idx}
                  className={`inline-block transition-all duration-700 ease-out ${
                    isLoaded
                      ? 'opacity-100 blur-0 translate-y-0'
                      : 'opacity-0 blur-md translate-y-3'
                  }`}
                  style={{ transitionDelay: `${idx * 70}ms` }}
                >
                  {char}
                </span>
              ))}
            </div>

            {/* Mobile two-line split wordmark ("SHASTA / SAURUS" at ~19.5vw) */}
            <div
              aria-hidden="true"
              className="flex md:hidden flex-col items-center justify-center w-full font-display uppercase tracking-[-0.01em] leading-[0.92] hero-wordmark-glow text-[19.5vw]"
            >
              <div className="flex justify-center">
                {MOBILE_LINE_1.map((char, idx) => (
                  <span
                    key={idx}
                    className={`inline-block transition-all duration-700 ${
                      isLoaded ? 'opacity-100 blur-0' : 'opacity-0 blur-md'
                    }`}
                    style={{ transitionDelay: `${idx * 65}ms` }}
                  >
                    {char}
                  </span>
                ))}
              </div>
              <div className="flex justify-center">
                {MOBILE_LINE_2.map((char, idx) => (
                  <span
                    key={idx}
                    className={`inline-block transition-all duration-700 ${
                      isLoaded ? 'opacity-100 blur-0' : 'opacity-0 blur-md'
                    }`}
                    style={{ transitionDelay: `${(idx + 6) * 65}ms` }}
                  >
                    {char}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* LAYER 4: Subject Cutout IN FRONT OF Wordmark (z-20)
            Positioned so the head/neck overlaps the middle 4 letters (T-A-S-A),
            while the first 4 letters (SHAS) on the left and last 4 letters (URUS)
            beneath the high tail arch remain completely visible and readable. */}
        <div
          className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center overflow-hidden"
          style={{
            transform: `translate3d(0, ${creatureScrollY}px, 0)`,
          }}
        >
          <div
            ref={creatureWrapRef}
            className="w-full h-full flex items-center justify-center"
          >
            <div
              className={`creature-idle relative w-[88vw] sm:w-[70vw] md:w-[56vw] max-w-[880px] translate-x-[4%] sm:translate-x-[7%] md:translate-x-[8%] translate-y-[14%] md:translate-y-[9%] transition-all duration-1000 ease-out ${
                isLoaded
                  ? 'opacity-100 scale-100 blur-0'
                  : 'opacity-0 scale-[1.08] blur-md translate-x-[18%]'
              }`}
            >
              <div className="relative creature-bottom-mask">
                <img
                  src={imgSrc}
                  onError={() => {
                    if (imgSrc !== HERO_ASSET_FALLBACK) {
                      setImgSrc(HERO_ASSET_FALLBACK);
                    }
                  }}
                  alt="Shastasaurus swimming through deep twilight ocean water"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto max-h-[80vh] object-contain creature-graded select-none"
                />
              </div>
            </div>
          </div>
        </div>

        {/* LAYER 5: Depth Haze (--abyss to transparent over bottom 35% of frame) */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-[36%] z-25"
          style={{
            background:
              'linear-gradient(to top, #010614 0%, rgba(3, 15, 43, 0.88) 42%, transparent 100%)',
          }}
          aria-hidden="true"
        />

        {/* Bottom Tagline & Scroll Hint (z-30) */}
        <div className="relative z-30 mt-auto pb-6 sm:pb-8 px-6 flex flex-col items-center text-center">
          <p className="font-display text-sm sm:text-base md:text-lg uppercase tracking-[0.22em] text-[#EAF6FF]/75 mb-5">
            Strange Giant of the Triassic Seas
          </p>

          <button
            type="button"
            onClick={() => onNavigate('overview')}
            aria-label="Scroll to descend into Overview section"
            className="group inline-flex flex-col items-center gap-2 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#6FE8FF] focus-visible:outline-offset-4"
          >
            <span className="font-display text-[11px] uppercase tracking-[0.28em] text-[#EAF6FF]/65 group-hover:text-[#6FE8FF] transition-colors">
              SCROLL TO DESCEND
            </span>
            <span
              className="block h-7 w-[1px] bg-gradient-to-b from-[#6FE8FF] to-transparent transition-transform duration-300 group-hover:translate-y-1"
              aria-hidden="true"
            />
          </button>
        </div>
      </div>
    </section>
  );
};
