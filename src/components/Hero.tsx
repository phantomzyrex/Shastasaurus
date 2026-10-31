import React, { useEffect, useRef, useState } from 'react';
import { HERO_ASSET_PRIMARY, HERO_ASSET_ALT } from '../data/shastasaurusData';

interface HeroProps {
  isLoaded: boolean;
  scrollProgress: number;
  onOpenMenu: () => void;
  onNavigate: (sectionId: string) => void;
}

const WORDMARK_LETTERS = 'SHASTASAURUS'.split('');
const MOBILE_LINE_1 = 'SHASTA'.split('');
const MOBILE_LINE_2 = 'SAURUS'.split('');

const HEAD_BUBBLES = [
  { id: 1, left: '34%', bottom: '36%', size: 5, delay: '0s', duration: '6.5s' },
  { id: 2, left: '36.5%', bottom: '39%', size: 3.5, delay: '1.8s', duration: '5.8s' },
  { id: 3, left: '38%', bottom: '34%', size: 6, delay: '3.2s', duration: '7.4s' },
  { id: 4, left: '35%', bottom: '42%', size: 4, delay: '4.5s', duration: '6.2s' },
  { id: 5, left: '39.5%', bottom: '37%', size: 3, delay: '2.4s', duration: '5.5s' },
];

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

  // Fit-text function so "SHASTASAURUS" expands side-by-side (~93% of the frame width) on desktop/tablet
  useEffect(() => {
    const updateFitText = () => {
      if (!frameRef.current) return;
      const frameWidth = frameRef.current.clientWidth;
      if (window.innerWidth >= 768) {
        const computed = Math.max(56, Math.min(320, frameWidth * 0.112));
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
      aria-label="01 Shastasaurus Hero"
      className="relative w-full h-screen min-h-[640px] p-2.5 sm:p-3.5 bg-[#010614] select-none overflow-hidden"
    >
      {/* 100vh Frame with ~24px rounded corners and thin dark margin */}
      <div
        ref={frameRef}
        className="relative w-full h-full rounded-[24px] hero-ocean-gradient overflow-hidden border border-[#EAF6FF]/10 shadow-[0_0_90px_rgba(1,6,20,0.95)] flex flex-col justify-between"
      >
        {/* LAYER 1A: Faint Light Ripples in top 25% of frame only (opacity ~0.06, mix-blend-screen) */}
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-[25%] z-[1] opacity-[0.06] mix-blend-screen overflow-hidden"
          aria-hidden="true"
        >
          <svg
            viewBox="0 0 1440 240"
            preserveAspectRatio="none"
            className="w-full h-full"
          >
            <defs>
              <filter id="surface-caustic-ripple" x="0%" y="0%" width="100%" height="100%">
                <feTurbulence
                  type="fractalNoise"
                  baseFrequency="0.018 0.065"
                  numOctaves="2"
                  seed="7"
                  result="rippleNoise"
                />
                <feDisplacementMap
                  in="SourceGraphic"
                  in2="rippleNoise"
                  scale="18"
                  xChannelSelector="R"
                  yChannelSelector="G"
                />
              </filter>
              <radialGradient id="topRippleGlow" cx="50%" cy="0%" r="70%">
                <stop offset="0%" stopColor="#6FE8FF" stopOpacity="1" />
                <stop offset="55%" stopColor="#3FA0E6" stopOpacity="0.45" />
                <stop offset="100%" stopColor="#010614" stopOpacity="0" />
              </radialGradient>
            </defs>
            <g filter="url(#surface-caustic-ripple)">
              <ellipse cx="720" cy="18" rx="620" ry="160" fill="url(#topRippleGlow)" />
              <path
                d="M180,25 Q450,65 720,22 T1260,30 M240,65 Q520,95 760,55 T1180,68 M320,105 Q620,135 840,95 T1100,112"
                stroke="#EAF6FF"
                strokeWidth="3"
                fill="none"
              />
            </g>
          </svg>
        </div>

        {/* LAYER 1B: Light Shafts from surface (4-6 soft vertical shafts fading by mid-frame) */}
        <div
          ref={shaftsRef}
          className="pointer-events-none absolute inset-0 z-[2] overflow-hidden"
          aria-hidden="true"
        >
          {/* Left-top vertical light band */}
          <div
            className="light-shaft-a absolute -top-16 left-[12%] w-28 sm:w-44 h-[56%] mix-blend-screen blur-[36px]"
            style={{
              background:
                'linear-gradient(180deg, rgba(111,232,255,0.28) 0%, rgba(63,160,230,0.12) 55%, transparent 100%)',
            }}
          />
          <div
            className="light-shaft-b absolute -top-20 left-[28%] w-20 sm:w-32 h-[50%] mix-blend-screen blur-[32px]"
            style={{
              background:
                'linear-gradient(180deg, rgba(234,246,255,0.20) 0%, rgba(63,160,230,0.08) 58%, transparent 100%)',
            }}
          />
          {/* Centre-top primary twilight glow shaft */}
          <div
            className="light-shaft-a absolute -top-24 left-[46%] w-36 sm:w-56 h-[54%] mix-blend-screen blur-[40px]"
            style={{
              background:
                'linear-gradient(180deg, rgba(111,232,255,0.24) 0%, rgba(30,111,192,0.10) 60%, transparent 100%)',
            }}
          />
          <div
            className="light-shaft-b absolute -top-16 right-[25%] w-24 sm:w-36 h-[50%] mix-blend-screen blur-[34px]"
            style={{
              background:
                'linear-gradient(180deg, rgba(234,246,255,0.18) 0%, rgba(63,160,230,0.08) 55%, transparent 100%)',
            }}
          />
          {/* Right-top vertical light band */}
          <div
            className="light-shaft-a absolute -top-16 right-[10%] w-28 sm:w-44 h-[56%] mix-blend-screen blur-[36px]"
            style={{
              background:
                'linear-gradient(180deg, rgba(111,232,255,0.26) 0%, rgba(63,160,230,0.11) 55%, transparent 100%)',
            }}
          />
        </div>

        {/* Top Spacer matching fixed Nav height */}
        <div className="h-16 sm:h-20 shrink-0" aria-hidden="true" />

        {/* LAYER 2: GIGANTIC Wordmark "SHASTASAURUS" sitting at ~50% vertical middle (z-10) */}
        <div
          className="pointer-events-none absolute inset-x-0 top-[45%] md:top-[50%] -translate-y-1/2 z-10 flex flex-col items-center justify-center px-2 sm:px-4"
          style={{
            transform: `translateY(-50%) scale(${wordmarkScrollScale})`,
            filter: wordmarkScrollBlur > 0.2 ? `blur(${wordmarkScrollBlur}px)` : undefined,
          }}
        >
          <div ref={wordmarkRef} className="w-full flex flex-col items-center">
            <h1 className="sr-only">SHASTASAURUS — Strange Giant of the Triassic Seas</h1>

            {/* Desktop & Tablet single-line gigantic wordmark expanding side-by-side (~93% frame width) */}
            <div
              aria-hidden="true"
              className="hidden md:flex items-center justify-between w-[93%] mx-auto font-display uppercase leading-none hero-wordmark-glow select-none overflow-hidden py-3"
              style={{
                fontSize: fontSizePx ? `${fontSizePx}px` : '11.2vw',
              }}
            >
              {WORDMARK_LETTERS.map((char, idx) => (
                <span
                  key={idx}
                  className={`inline-block transition-all duration-700 ease-out ${
                    isLoaded
                      ? 'opacity-100 blur-0 translate-y-0'
                      : 'opacity-0 blur-md translate-y-full'
                  }`}
                  style={{ transitionDelay: `${idx * 70}ms` }}
                >
                  {char}
                </span>
              ))}
            </div>

            {/* Mobile two-line split wordmark ("SHASTA / SAURUS" side-by-side at ~21vw) */}
            <div
              aria-hidden="true"
              className="flex md:hidden flex-col items-center justify-center w-[94%] mx-auto font-display uppercase leading-[0.92] hero-wordmark-glow text-[21vw]"
            >
              <div className="flex justify-between w-full overflow-hidden">
                {MOBILE_LINE_1.map((char, idx) => (
                  <span
                    key={idx}
                    className={`inline-block transition-all duration-700 ${
                      isLoaded ? 'opacity-100 blur-0 translate-y-0' : 'opacity-0 blur-md translate-y-full'
                    }`}
                    style={{ transitionDelay: `${idx * 65}ms` }}
                  >
                    {char}
                  </span>
                ))}
              </div>
              <div className="flex justify-between w-full overflow-hidden">
                {MOBILE_LINE_2.map((char, idx) => (
                  <span
                    key={idx}
                    className={`inline-block transition-all duration-700 ${
                      isLoaded ? 'opacity-100 blur-0 translate-y-0' : 'opacity-0 blur-md translate-y-full'
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

        {/* LAYER 3: Subject Cutout IN FRONT OF Wordmark (z-20)
            Head overlaps the middle letters while SHAS and URUS stay clear */}
        <div
          className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center overflow-hidden"
          style={{
            transform: `translate3d(0, ${creatureScrollY}px, 0)`,
          }}
        >
          <div
            ref={creatureWrapRef}
            className="relative w-full h-full flex items-center justify-center"
          >
            {/* Occasional small bubbles rising near the creature's head */}
            <div className="pointer-events-none absolute inset-0" aria-hidden="true">
              {HEAD_BUBBLES.map((b) => (
                <span
                  key={b.id}
                  className="hero-head-bubble absolute rounded-full border border-[#6FE8FF]/55 bg-[#EAF6FF]/20 shadow-[0_0_8px_rgba(111,232,255,0.4)]"
                  style={{
                    left: b.left,
                    bottom: b.bottom,
                    width: `${b.size}px`,
                    height: `${b.size}px`,
                    animationDelay: b.delay,
                    animationDuration: b.duration,
                  }}
                />
              ))}
            </div>

            <div
              className={`creature-idle relative w-[98vw] sm:w-[86vw] md:w-[76vw] lg:w-[74vw] max-w-[1360px] translate-x-[2%] sm:translate-x-[4%] md:translate-x-[5%] translate-y-[10%] md:translate-y-[6%] transition-all duration-1000 ease-out ${
                isLoaded
                  ? 'opacity-100 scale-100 blur-0'
                  : 'opacity-0 scale-[1.08] blur-md translate-x-[18%]'
              }`}
            >
              <div className="relative creature-bottom-mask">
                <img
                  src={imgSrc}
                  onError={() => {
                    if (imgSrc !== HERO_ASSET_ALT) {
                      setImgSrc(HERO_ASSET_ALT);
                    }
                  }}
                  alt="Shastasaurus swimming through deep twilight ocean water"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto max-h-[92vh] object-contain creature-graded select-none"
                />
              </div>
            </div>
          </div>
        </div>

        {/* LAYER 4: Depth Haze (--abyss to transparent over bottom 35% of frame) */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-[35%] z-25"
          style={{
            background:
              'linear-gradient(to top, #010614 0%, rgba(3, 15, 43, 0.88) 42%, transparent 100%)',
          }}
          aria-hidden="true"
        />

        {/* Bottom Tagline & Scroll Hint (z-30) */}
        <div className="relative z-30 mt-auto pb-6 sm:pb-8 px-6 flex flex-col items-center text-center">
          <p className="font-display text-sm sm:text-base md:text-lg uppercase tracking-[0.22em] text-[#EAF6FF]/70 mb-5">
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
