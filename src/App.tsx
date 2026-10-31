/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useCallback, useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { calculateDepthFromScroll } from './data/shastasaurusData';
import { Loader } from './components/Loader';
import { CustomCursor } from './components/CustomCursor';
import { DeepAtmosphere } from './components/DeepAtmosphere';
import { DepthGauge } from './components/DepthGauge';
import { MenuOverlay } from './components/MenuOverlay';
import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { Overview } from './components/Overview';
import { Timeline } from './components/Timeline';
import { AnatomyHotspots } from './components/AnatomyHotspots';
import { SizeCompare } from './components/SizeCompare';
import { Feeding } from './components/Feeding';
import { Map } from './components/Map';
import { Taxonomy } from './components/Taxonomy';
import { Evolution } from './components/Evolution';
import { MythReality } from './components/MythReality';
import { Gallery } from './components/Gallery';
import { FastFactsSources } from './components/FastFactsSources';
import { Footer } from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

export const DIVE_SECTIONS = [
  { id: 'hero', num: '01', label: 'Surface Glow', depth: '0 m' },
  { id: 'overview', num: '02', label: 'Overview', depth: '200 m' },
  { id: 'discovery', num: '03', label: 'Discovery & History', depth: '550 m' },
  { id: 'anatomy', num: '04', label: 'Anatomy', depth: '950 m' },
  { id: 'size-comparison', num: '05', label: 'Size Comparison', depth: '1,350 m' },
  { id: 'feeding', num: '06', label: 'Diet & Feeding', depth: '1,750 m' },
  { id: 'habitat', num: '07', label: 'Habitat & Distribution', depth: '2,150 m' },
  { id: 'classification', num: '08', label: 'Classification & Species', depth: '2,600 m' },
  { id: 'evolution', num: '09', label: 'Evolution & Extinction', depth: '3,000 m' },
  { id: 'myth-reality', num: '10', label: 'Myth vs. Reality', depth: '3,350 m' },
  { id: 'gallery', num: '11', label: 'Gallery', depth: '3,650 m' },
  { id: 'facts-sources', num: '12', label: 'Fast Facts & Sources', depth: '3,850 m' },
  { id: 'contact', num: '13', label: 'Curatorial Contact', depth: '4,000 m' },
] as const;

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSectionIdx, setActiveSectionIdx] = useState(0);
  const [divePulse, setDivePulse] = useState(false);

  const lenisRef = useRef<Lenis | null>(null);
  const targetSectionIdxRef = useRef<number | null>(null);
  const targetResetTimerRef = useRef<number | null>(null);
  const pulseTimerRef = useRef<number | null>(null);

  const handleLoaderComplete = useCallback(() => {
    setIsLoaded(true);
  }, []);

  // Initialize Lenis smooth scroll + GSAP ScrollTrigger section & heading animations
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isHeadless = Boolean(navigator.webdriver);

    let lenis: Lenis | null = null;
    let rafId = 0;

    if (!prefersReducedMotion && !isHeadless) {
      lenis = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        wheelMultiplier: 0.95,
        touchMultiplier: 1.5,
      });
      lenisRef.current = lenis;

      lenis.on('scroll', ScrollTrigger.update);

      const raf = (time: number) => {
        lenis?.raf(time);
        rafId = requestAnimationFrame(raf);
      };
      rafId = requestAnimationFrame(raf);
    }

    const computeActiveSection = () => {
      const viewportTriggerY = window.scrollY + window.innerHeight * 0.36;
      let currentIdx = 0;
      for (let i = 0; i < DIVE_SECTIONS.length; i++) {
        const el = document.getElementById(DIVE_SECTIONS[i].id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        const absTop = rect.top + window.scrollY;
        if (viewportTriggerY >= absTop - 40) {
          currentIdx = i;
        }
      }
      setActiveSectionIdx(currentIdx);
    };

    const updateScroll = () => {
      const docEl = document.documentElement;
      const maxScroll = Math.max(1, docEl.scrollHeight - window.innerHeight);
      const current = window.scrollY;
      setScrollProgress(Math.max(0, Math.min(1, current / maxScroll)));
      computeActiveSection();
    };

    updateScroll();
    window.addEventListener('scroll', updateScroll, { passive: true });
    window.addEventListener('resize', updateScroll);

    // GSAP ScrollTrigger animations for headings and deep-dive section transitions
    if (!prefersReducedMotion) {
      const headings = gsap.utils.toArray<HTMLElement>('.section-reveal-heading');
      headings.forEach((heading) => {
        gsap.fromTo(
          heading,
          { yPercent: 35, opacity: 0.15 },
          {
            yPercent: 0,
            opacity: 1,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: heading,
              start: 'top 90%',
              toggleActions: 'play none none none',
            },
          }
        );
      });

      // Smooth deep-water emergence transition for each content section below the hero
      const contentSections = gsap.utils.toArray<HTMLElement>(
        'main > section:not(#hero), footer#contact'
      );
      contentSections.forEach((sectionEl) => {
        gsap.fromTo(
          sectionEl,
          { y: 38, opacity: 0.22 },
          {
            y: 0,
            opacity: 1,
            duration: 1.0,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionEl,
              start: 'top 88%',
              end: 'top 35%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });
    }

    return () => {
      window.removeEventListener('scroll', updateScroll);
      window.removeEventListener('resize', updateScroll);
      cancelAnimationFrame(rafId);
      lenis?.destroy();
      lenisRef.current = null;
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  const triggerDivePulse = useCallback(() => {
    setDivePulse(true);
    if (pulseTimerRef.current !== null) {
      window.clearTimeout(pulseTimerRef.current);
    }
    pulseTimerRef.current = window.setTimeout(() => {
      setDivePulse(false);
    }, 650);
  }, []);

  const scrollToSectionIndex = useCallback(
    (index: number) => {
      const clamped = Math.max(0, Math.min(DIVE_SECTIONS.length - 1, index));
      const section = DIVE_SECTIONS[clamped];
      const target = document.getElementById(section.id);
      if (!target) return;

      targetSectionIdxRef.current = clamped;
      setActiveSectionIdx(clamped);
      triggerDivePulse();

      if (targetResetTimerRef.current !== null) {
        window.clearTimeout(targetResetTimerRef.current);
      }
      targetResetTimerRef.current = window.setTimeout(() => {
        targetSectionIdxRef.current = null;
      }, 1150);

      if (lenisRef.current) {
        lenisRef.current.scrollTo(clamped === 0 ? 0 : target, {
          offset: 0,
          duration: 1.15,
        });
      } else {
        if (clamped === 0) {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    },
    [triggerDivePulse]
  );

  const handleNavigate = useCallback(
    (sectionId: string) => {
      const foundIdx = DIVE_SECTIONS.findIndex((s) => s.id === sectionId);
      if (foundIdx >= 0) {
        scrollToSectionIndex(foundIdx);
        return;
      }
      const target = document.getElementById(sectionId);
      if (!target) return;
      if (lenisRef.current) {
        lenisRef.current.scrollTo(target, { offset: 0, duration: 1.15 });
      } else {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    },
    [scrollToSectionIndex]
  );

  const handleBackToSurface = useCallback(() => {
    scrollToSectionIndex(0);
  }, [scrollToSectionIndex]);

  // Global keyboard navigation: ArrowDown / ArrowUp / ArrowRight / ArrowLeft / Space / PageDown / PageUp / Home / End
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (menuOpen) return;
      if (e.ctrlKey || e.altKey || e.metaKey) return;

      const activeEl = document.activeElement as HTMLElement | null;
      if (activeEl) {
        const tag = activeEl.tagName;
        if (
          tag === 'INPUT' ||
          tag === 'TEXTAREA' ||
          tag === 'SELECT' ||
          activeEl.isContentEditable
        ) {
          return;
        }
        // Let buttons handle Space/Enter natively if focused
        if (tag === 'BUTTON' && e.code === 'Space') {
          return;
        }
      }

      const currentIdx =
        targetSectionIdxRef.current !== null
          ? targetSectionIdxRef.current
          : activeSectionIdx;

      if (
        e.key === 'ArrowDown' ||
        e.key === 'ArrowRight' ||
        e.key === 'PageDown' ||
        (e.code === 'Space' && !e.shiftKey)
      ) {
        e.preventDefault();
        scrollToSectionIndex(currentIdx + 1);
      } else if (
        e.key === 'ArrowUp' ||
        e.key === 'ArrowLeft' ||
        e.key === 'PageUp' ||
        (e.code === 'Space' && e.shiftKey)
      ) {
        e.preventDefault();
        scrollToSectionIndex(currentIdx - 1);
      } else if (e.key === 'Home') {
        e.preventDefault();
        scrollToSectionIndex(0);
      } else if (e.key === 'End') {
        e.preventDefault();
        scrollToSectionIndex(DIVE_SECTIONS.length - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown, { passive: false });
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeSectionIdx, menuOpen, scrollToSectionIndex]);

  const depthMeters = calculateDepthFromScroll(scrollProgress);
  const currentSection = DIVE_SECTIONS[activeSectionIdx] || DIVE_SECTIONS[0];
  const isInFooter = depthMeters >= 3920;

  return (
    <div
      data-depth-meters={depthMeters}
      data-active-section={currentSection.id}
      className="relative min-h-screen text-[#EAF6FF] transition-colors duration-300"
      style={{
        background:
          'linear-gradient(180deg, #061B45 0%, #030F2B 36%, #010614 78%, #010614 100%)',
      }}
    >
      {/* Minimal Page Loader */}
      {!isLoaded && <Loader onComplete={handleLoaderComplete} />}

      {/* Custom Bioluminescent Cursor (Desktop) */}
      <CustomCursor />

      {/* Deep-Water Particle & Vignette Atmosphere */}
      <DeepAtmosphere scrollProgress={scrollProgress} />

      {/* Decorative Bathypelagic Depth Gauge (0 m to 4,000 m) */}
      <DepthGauge depthMeters={depthMeters} />

      {/* Deep-Dive Keyboard Navigation HUD (Bottom-Left) */}
      <nav
        aria-label="Deep-dive section keyboard navigation"
        className={`fixed left-4 sm:left-6 bottom-6 z-40 hidden md:flex items-center gap-2.5 px-3 py-1.5 rounded-lg border bg-[#010614]/80 backdrop-blur-sm select-none transition-all duration-300 ${
          isInFooter ? 'opacity-0 pointer-events-none' : 'opacity-100'
        } ${
          divePulse
            ? 'border-[#6FE8FF] shadow-[0_0_20px_rgba(111,232,255,0.35)]'
            : 'border-[#EAF6FF]/15 hover:border-[#6FE8FF]/50'
        }`}
      >
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={() => scrollToSectionIndex(activeSectionIdx - 1)}
            disabled={activeSectionIdx <= 0}
            aria-label="Ascend to previous section (Up Arrow)"
            title="Previous Section (↑ Arrow)"
            className="w-6 h-6 flex items-center justify-center rounded border border-[#EAF6FF]/20 text-[11px] text-[#EAF6FF]/80 hover:border-[#6FE8FF] hover:text-[#6FE8FF] disabled:opacity-30 disabled:pointer-events-none cursor-pointer transition-colors"
          >
            ↑
          </button>
          <button
            type="button"
            onClick={() => scrollToSectionIndex(activeSectionIdx + 1)}
            disabled={activeSectionIdx >= DIVE_SECTIONS.length - 1}
            aria-label="Dive to next section (Down Arrow or Space)"
            title="Next Section (↓ Arrow or Space)"
            className="w-6 h-6 flex items-center justify-center rounded border border-[#EAF6FF]/20 text-[11px] text-[#EAF6FF]/80 hover:border-[#6FE8FF] hover:text-[#6FE8FF] disabled:opacity-30 disabled:pointer-events-none cursor-pointer transition-colors"
          >
            ↓
          </button>
        </div>

        <div className="h-3.5 w-[1px] bg-[#EAF6FF]/15" aria-hidden="true" />

        <div className="flex items-baseline gap-2">
          <span className="font-display text-[11px] text-[#6FE8FF] tracking-[0.14em] tabular-nums">
            {currentSection.num} / 13
          </span>
          <span className="font-display text-[10px] uppercase tracking-[0.16em] text-[#EAF6FF]/80 max-w-[140px] truncate">
            {currentSection.label}
          </span>
        </div>

        <span
          className="hidden xl:inline-block ml-1 px-1.5 py-0.5 rounded bg-[#061B45]/70 border border-[#6FE8FF]/25 font-display text-[9px] uppercase tracking-[0.14em] text-[#6FE8FF]/85"
          title="Use Up/Down Arrow keys or Spacebar to jump between depth sections"
        >
          SPACE / ↑↓ DIVE
        </span>
      </nav>

      {/* Fixed Top Navigation (transitions to rounded deep-ocean glass bar when scrolled) */}
      <Nav
        isScrolled={scrollProgress > 0.004}
        onOpenMenu={() => setMenuOpen(true)}
        onNavigate={handleNavigate}
      />

      {/* Full-Screen Menu Overlay */}
      <MenuOverlay
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        onNavigate={handleNavigate}
      />

      {/* Main Content */}
      <main>
        {/* 01 HERO */}
        <Hero
          isLoaded={isLoaded}
          scrollProgress={scrollProgress}
          onOpenMenu={() => setMenuOpen(true)}
          onNavigate={handleNavigate}
        />

        {/* 02 OVERVIEW */}
        <Overview />

        {/* 03 DISCOVERY AND HISTORY */}
        <Timeline />

        {/* 04 ANATOMY */}
        <AnatomyHotspots />

        {/* 05 SIZE COMPARISON */}
        <SizeCompare />

        {/* 06 DIET AND FEEDING */}
        <Feeding />

        {/* 07 HABITAT AND DISTRIBUTION */}
        <Map />

        {/* 08 CLASSIFICATION AND SPECIES */}
        <Taxonomy />

        {/* 09 EVOLUTION AND EXTINCTION */}
        <Evolution />

        {/* 10 MYTH VS REALITY */}
        <MythReality />

        {/* 11 GALLERY */}
        <Gallery />

        {/* 12 FAST FACTS AND SOURCES */}
        <FastFactsSources />
      </main>

      {/* 13 CONTACT AND FOOTER */}
      <Footer onBackToSurface={handleBackToSurface} />
    </div>
  );
}
