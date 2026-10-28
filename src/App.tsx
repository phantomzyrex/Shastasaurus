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
import { Hero } from './components/Hero';
import { Overview } from './components/Overview';
import { Timeline } from './components/Timeline';
import { AnatomyHotspots } from './components/AnatomyHotspots';
import { SizeCompare } from './components/SizeCompare';
import { Feeding } from './components/Feeding';
import { MapSection } from './components/MapSection';
import { Taxonomy } from './components/Taxonomy';
import { Evolution } from './components/Evolution';
import { MythReality } from './components/MythReality';
import { Gallery } from './components/Gallery';
import { FastFactsSources } from './components/FastFactsSources';
import { Footer } from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const lenisRef = useRef<Lenis | null>(null);

  const handleLoaderComplete = useCallback(() => {
    setIsLoaded(true);
  }, []);

  // Initialize Lenis smooth scroll + GSAP ScrollTrigger heading line-mask reveals
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let lenis: Lenis | null = null;
    let rafId = 0;

    const isHeadless = Boolean(navigator.webdriver);

    if (!prefersReducedMotion && !isHeadless) {
      lenis = new Lenis({
        duration: 1.1,
        smoothWheel: true,
      });
      lenisRef.current = lenis;

      lenis.on('scroll', ScrollTrigger.update);

      const raf = (time: number) => {
        lenis?.raf(time);
        rafId = requestAnimationFrame(raf);
      };
      rafId = requestAnimationFrame(raf);
    }

    const updateScroll = () => {
      const docEl = document.documentElement;
      const maxScroll = Math.max(1, docEl.scrollHeight - window.innerHeight);
      const current = window.scrollY;
      setScrollProgress(Math.max(0, Math.min(1, current / maxScroll)));
    };

    updateScroll();
    window.addEventListener('scroll', updateScroll, { passive: true });
    window.addEventListener('resize', updateScroll);

    // Animate section headings with GSAP ScrollTrigger
    if (!prefersReducedMotion) {
      const headings = gsap.utils.toArray<HTMLElement>('.section-reveal-heading');
      headings.forEach((heading) => {
        gsap.fromTo(
          heading,
          { yPercent: 35, opacity: 0.15 },
          {
            yPercent: 0,
            opacity: 1,
            duration: 0.85,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: heading,
              start: 'top 90%',
              toggleActions: 'play none none none',
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

  const handleNavigate = useCallback((sectionId: string) => {
    const target = document.getElementById(sectionId);
    if (!target) return;
    if (lenisRef.current) {
      lenisRef.current.scrollTo(target, { offset: 0, duration: 1.1 });
    } else {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const handleBackToSurface = useCallback(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { duration: 1.3 });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  const depthMeters = calculateDepthFromScroll(scrollProgress);

  return (
    <div
      data-depth-meters={depthMeters}
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

      {/* Full-Screen Menu Overlay */}
      <MenuOverlay
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        onNavigate={handleNavigate}
      />

      {/* Main Content */}
      <main>
        {/* 00 HERO */}
        <Hero
          isLoaded={isLoaded}
          scrollProgress={scrollProgress}
          onOpenMenu={() => setMenuOpen(true)}
          onNavigate={handleNavigate}
        />

        {/* 01 OVERVIEW */}
        <Overview />

        {/* 02 DISCOVERY AND HISTORY */}
        <Timeline />

        {/* 03 ANATOMY */}
        <AnatomyHotspots />

        {/* 04 SIZE COMPARISON */}
        <SizeCompare />

        {/* 05 DIET AND FEEDING */}
        <Feeding />

        {/* 06 HABITAT AND DISTRIBUTION */}
        <MapSection />

        {/* 07 CLASSIFICATION AND SPECIES */}
        <Taxonomy />

        {/* 08 EVOLUTION AND EXTINCTION */}
        <Evolution />

        {/* 09 MYTH VS REALITY */}
        <MythReality />

        {/* 10 GALLERY */}
        <Gallery />

        {/* 11 FAST FACTS AND SOURCES */}
        <FastFactsSources />
      </main>

      {/* 12 CONTACT AND FOOTER */}
      <Footer onBackToSurface={handleBackToSurface} />
    </div>
  );
}
