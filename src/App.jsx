import React, { useEffect, useRef, useState, useCallback } from 'react';
import Navbar from './components/Layout/Navbar';
import Hero from './components/Hero';
import PlatformHub from './components/PlatformHub';
import ProductModules from './components/ProductModules';
import WhyYD from './components/WhyYD';
import Integrations from './components/Integrations';
import Footer from './components/Footer';

/* ── Lightweight particle background (pure Canvas, no library) ─── */
function ParticleBackground() {
  const canvasRef = useRef(null);
  const animRef = useRef(null);
  const particlesRef = useRef([]);

  const init = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    let w = (canvas.width = window.innerWidth * dpr);
    let h = (canvas.height = window.innerHeight * dpr);
    canvas.style.width = window.innerWidth + 'px';
    canvas.style.height = window.innerHeight + 'px';
    ctx.scale(dpr, dpr);

    const COUNT = 60;
    const particles = [];
    for (let i = 0; i < COUNT; i++) {
      particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: Math.random() * 1.2 + 0.3,
        alpha: Math.random() * 0.3 + 0.05,
      });
    }
    particlesRef.current = particles;

    const draw = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(196,18,48,${0.06 * (1 - dist / 150)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw + move particles
      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(196,18,48,${p.alpha})`;
        ctx.fill();

        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > window.innerWidth) p.vx *= -1;
        if (p.y < 0 || p.y > window.innerHeight) p.vy *= -1;
      }

      animRef.current = requestAnimationFrame(draw);
    };

    draw();
  }, []);

  useEffect(() => {
    init();
    const handleResize = () => {
      cancelAnimationFrame(animRef.current);
      init();
    };
    window.addEventListener('resize', handleResize);
    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener('resize', handleResize);
    };
  }, [init]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}

/* ── Back-to-top button ──────────────────────────────── */
function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!show) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-8 right-8 z-50 w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
      style={{
        background: 'rgba(196,18,48,0.15)',
        border: '1px solid rgba(196,18,48,0.4)',
        color: '#C41230',
        backdropFilter: 'blur(12px)',
        boxShadow: '0 0 20px rgba(196,18,48,0.2)',
      }}
      aria-label="Back to top"
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M8 12V4M4 7l4-4 4 4" />
      </svg>
    </button>
  );
}

function App() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const move = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + 'px';
        cursorRef.current.style.top = e.clientY + 'px';
      }
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <div
      className="min-h-screen text-gray-200 selection:bg-red-700 selection:text-white"
      style={{ background: '#080808' }}
    >
      {/* Particle background */}
      <ParticleBackground />

      {/* Cursor glow */}
      <div ref={cursorRef} className="cursor-glow hidden md:block" />

      <Navbar />
      <Hero />
      <PlatformHub />
      <ProductModules />
      <WhyYD />
      <Integrations />
      <Footer />

      {/* Back to top */}
      <BackToTop />
    </div>
  );
}

export default App;
