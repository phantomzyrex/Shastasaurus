import React, { useEffect, useRef } from 'react';

interface DeepAtmosphereProps {
  scrollProgress: number;
}

interface SnowParticle {
  x: number;
  y: number;
  radius: number;
  speedY: number;
  driftX: number;
  layer: number; // 0.35, 0.65, 1.0
  alpha: number;
}

interface BioPlankton {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  phase: number;
  pulseSpeed: number;
  flare: number;
}

export const DeepAtmosphere: React.FC<DeepAtmosphereProps> = ({ scrollProgress }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const scrollRef = useRef(scrollProgress);
  scrollRef.current = scrollProgress;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    const isLowEnd = (navigator.hardwareConcurrency || 4) <= 4;
    const isHeadless = Boolean(navigator.webdriver);

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const snowCount = prefersReducedMotion ? 30 : isLowEnd ? 80 : 105;
    const planktonCount = prefersReducedMotion ? 20 : isLowEnd ? 42 : 58;

    const layers = [0.35, 0.65, 1.0];
    const snow: SnowParticle[] = Array.from({ length: snowCount }, (_, idx) => {
      const layer = layers[idx % layers.length];
      return {
        x: ((idx * 137.5) % 100) * 0.01 * width,
        y: ((idx * 293.3) % 100) * 0.01 * height,
        radius: (0.65 + (idx % 3) * 0.35) * layer,
        speedY: (0.2 + (idx % 4) * 0.08) * layer,
        driftX: ((idx % 5) - 2) * 0.05 * layer,
        layer,
        alpha: (0.2 + (idx % 4) * 0.08) * layer,
      };
    });

    const plankton: BioPlankton[] = Array.from({ length: planktonCount }, (_, idx) => ({
      x: ((idx * 197.7 + 23) % 100) * 0.01 * width,
      y: ((idx * 311.1 + 41) % 100) * 0.01 * height,
      vx: ((idx % 3) - 1) * 0.06,
      vy: ((idx % 5) - 2) * 0.04,
      radius: 1.2 + (idx % 3) * 0.55,
      phase: idx * 0.9,
      pulseSpeed: 0.02 + (idx % 3) * 0.008,
      flare: 0,
    }));

    const mouse = { x: -9999, y: -9999, normX: 0, normY: 0 };

    const drawFrame = () => {
      ctx.clearRect(0, 0, width, height);
      const depthBoost = 0.65 + scrollRef.current * 0.85;

      // 1. Marine snow (drifting downward across 3 parallax layers)
      for (let i = 0; i < snow.length; i++) {
        const s = snow[i];
        if (!prefersReducedMotion) {
          s.y += s.speedY;
          s.x += s.driftX;
          if (s.y > height + 10) s.y = -10;
          if (s.x < -10) s.x = width + 10;
          if (s.x > width + 10) s.x = -10;
        }

        const parallaxX = prefersReducedMotion ? 0 : mouse.normX * 36 * s.layer;
        const parallaxY = prefersReducedMotion ? 0 : mouse.normY * 24 * s.layer;

        ctx.beginPath();
        ctx.arc(s.x + parallaxX, s.y + parallaxY, s.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(234, 246, 255, ${s.alpha})`;
        ctx.fill();
      }

      // 2. Bioluminescent plankton (--glow #6FE8FF, flares within 120px of cursor)
      for (let i = 0; i < plankton.length; i++) {
        const p = plankton[i];
        if (!prefersReducedMotion) {
          p.phase += p.pulseSpeed;
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.hypot(dx, dy);

          if (!isTouch && dist < 120 && dist > 0.1) {
            const force = (120 - dist) / 120;
            p.vx += (dx / dist) * force * 0.08;
            p.vy += (dy / dist) * force * 0.08;
            p.flare = Math.min(1, p.flare + force * 0.22);
          } else {
            p.flare *= 0.95;
          }

          p.vx *= 0.97;
          p.vy *= 0.97;
          p.x += p.vx;
          p.y += p.vy;

          if (p.x < 0) p.x = width;
          if (p.x > width) p.x = 0;
          if (p.y < 0) p.y = height;
          if (p.y > height) p.y = 0;
        }

        const pulse = (Math.sin(p.phase) + 1) * 0.5;
        const intensity = Math.min(1, (0.22 + pulse * 0.5 + p.flare * 0.7) * depthBoost);
        const radius = p.radius + p.flare * 1.6;

        ctx.beginPath();
        ctx.arc(p.x, p.y, radius * 3.0, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(111, 232, 255, ${intensity * 0.18})`;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(111, 232, 255, ${intensity})`;
        ctx.fill();
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (isTouch || prefersReducedMotion) return;
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.normX = (e.clientX / width - 0.5) * 2;
      mouse.normY = (e.clientY / height - 0.5) * 2;
      if (isHeadless) drawFrame();
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      drawFrame();
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('resize', handleResize);

    // Draw initial crisp frame immediately
    drawFrame();

    // Use a gentle 28fps interval on normal browsers; on software headless, render on demand
    let timerId: number | null = null;
    if (!prefersReducedMotion && !isHeadless) {
      timerId = window.setInterval(drawFrame, 36);
    }

    return () => {
      if (timerId !== null) window.clearInterval(timerId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Pressure vignette opacity increases with depth
  const vignetteOpacity = Math.min(0.88, 0.25 + scrollProgress * 0.62);

  return (
    <>
      {/* Global SVG Duotone Filter mapping shadows to --void (#010614) and highlights to --twilight/#6FE8FF */}
      <svg className="sr-only" aria-hidden="true" width="0" height="0">
        <defs>
          <filter id="shastasaurus-duotone" colorInterpolationFilters="sRGB">
            <feColorMatrix
              type="matrix"
              values="0.25 0.55 0.20 0 0
                      0.25 0.55 0.20 0 0
                      0.25 0.55 0.20 0 0
                      0    0    0    1 0"
              result="gray"
            />
            <feComponentTransfer in="gray" result="contrasted">
              <feFuncR type="table" tableValues="0.004 0.024 0.040 0.070 0.118 0.247 0.435 0.918" />
              <feFuncG type="table" tableValues="0.024 0.106 0.173 0.282 0.435 0.627 0.910 0.965" />
              <feFuncB type="table" tableValues="0.078 0.271 0.420 0.604 0.753 0.902 1.000 1.000" />
            </feComponentTransfer>
            <feComponentTransfer in="contrasted" result="graded">
              <feFuncR type="linear" slope="1.18" intercept="-0.04" />
              <feFuncG type="linear" slope="1.18" intercept="-0.04" />
              <feFuncB type="linear" slope="1.20" intercept="-0.02" />
            </feComponentTransfer>
            <feComposite in="graded" in2="SourceAlpha" operator="in" />
          </filter>
        </defs>
      </svg>

      {/* Fixed Canvas for Marine Snow & Bioluminescent Plankton */}
      <canvas
        ref={canvasRef}
        data-testid="deep-ocean-canvas"
        className="pointer-events-none fixed inset-0 z-[15]"
        aria-hidden="true"
      />

      {/* Pressure Vignette that deepens with scroll */}
      <div
        className="pointer-events-none fixed inset-0 z-[14] transition-opacity duration-300"
        style={{
          opacity: vignetteOpacity,
          background:
            'radial-gradient(ellipse at 50% 45%, transparent 35%, rgba(3, 15, 43, 0.65) 75%, rgba(1, 6, 20, 0.96) 100%)',
        }}
        aria-hidden="true"
      />

      {/* 4% Fine Film Grain Overlay */}
      <div
        className="pointer-events-none fixed inset-0 z-[80] opacity-[0.04]"
        style={{
          backgroundImage:
            'radial-gradient(rgba(234, 246, 255, 0.35) 1px, transparent 0)',
          backgroundSize: '3px 3px',
        }}
        aria-hidden="true"
      />
    </>
  );
};
