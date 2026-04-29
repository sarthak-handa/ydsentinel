import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Activity, ShieldCheck, Crosshair, ChevronDown } from 'lucide-react';

/* ── tiny animated HUD chip ─────────────────────────────── */
function HudChip({ icon: Icon, label, value, color = '#22c55e', style }) {
  return (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      className="hidden lg:flex items-center gap-3 px-4 py-3 rounded-lg absolute z-20"
      style={{ background: 'rgba(8,8,8,0.7)', border: '1px solid rgba(255,255,255,0.08)', backdropFilter: 'blur(16px)', ...style }}
    >
      <Icon size={18} style={{ color }} />
      <div>
        <p className="text-[10px] text-gray-500 uppercase tracking-widest leading-none mb-0.5">{label}</p>
        <p className="text-sm font-mono font-bold text-white leading-none">{value}</p>
      </div>
      <span className="w-1.5 h-1.5 rounded-full animate-pulse ml-1" style={{ background: color, boxShadow: `0 0 6px ${color}` }} />
    </motion.div>
  );
}

/* ── radar ring ──────────────────────────────────────────── */
function RadarRing({ size, delay }) {
  return (
    <motion.div
      className="absolute rounded-full border"
      style={{
        width: size,
        height: size,
        borderColor: 'rgba(196,18,48,0.2)',
        top: '50%',
        left: '50%',
        x: '-50%',
        y: '-50%',
      }}
      animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.1, 0.4] }}
      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay }}
    />
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[80vh] sm:min-h-[85vh] flex items-center justify-center overflow-hidden section-grid"
      style={{ background: 'linear-gradient(180deg, #0d0d0d 0%, #080808 100%)' }}
    >
      {/* ── Scanning laser line ──────────────────────── */}
      <div
        className="absolute inset-x-0 h-px animate-scan z-10 pointer-events-none"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(196,18,48,0.8) 50%, transparent 100%)',
          boxShadow: '0 0 20px 2px rgba(196,18,48,0.4)',
          top: 0,
        }}
      />

      {/* ── Radar rings ─────────────────────────────── */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <RadarRing size={320} delay={0} />
        <RadarRing size={520} delay={0.8} />
        <RadarRing size={720} delay={1.6} />
        <RadarRing size={920} delay={2.4} />
      </div>

      {/* ── Central deep glow ───────────────────────── */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 600,
          height: 600,
          top: '50%',
          left: '50%',
          transform: 'translate(-50%,-50%)',
          background: 'radial-gradient(circle, rgba(196,18,48,0.12) 0%, transparent 70%)',
        }}
      />

      {/* ── Floating HUD chips ───────────────────────── */}
      <HudChip
        icon={Crosshair}
        label="Detection"
        value="ONLINE"
        color="#C41230"
        style={{ top: '28%', left: '8%' }}
      />
      <HudChip
        icon={ShieldCheck}
        label="Perimeter"
        value="SECURE"
        color="#22c55e"
        style={{ bottom: '28%', right: '8%' }}
      />
      <HudChip
        icon={Activity}
        label="AI Inference"
        value="12 ms"
        color="#f59e0b"
        style={{ top: '20%', right: '10%' }}
      />

      {/* ── Main content ────────────────────────────── */}
      <div className="relative z-20 text-center px-4 sm:px-6 max-w-4xl mx-auto flex flex-col items-center">

        {/* Live badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-2 px-4 py-2 rounded-full mb-10 text-xs font-bold tracking-[0.2em] uppercase"
          style={{
            background: 'rgba(196,18,48,0.08)',
            border: '1px solid rgba(196,18,48,0.25)',
            color: '#C41230',
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#C41230] animate-pulse" />
          Neural Inference Network Active
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black uppercase leading-[0.95] tracking-tight text-white mb-6"
          style={{ fontFamily: "'Rajdhani', sans-serif" }}
        >
          Systems-as-a-Service<br />
          <span className="text-gradient-red">Enterprise</span>{' '}
          <span style={{ color: '#3D4A52' }}>Intelligence</span>
        </motion.h1>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-4 md:gap-8 text-xs md:text-sm font-semibold tracking-[0.35em] text-gray-500 uppercase mb-10"
        >
          {['Detect', 'Plan', 'Monitor', 'Protect'].map((w, i) => (
            <React.Fragment key={w}>
              <span className="hover:text-white transition-colors">{w}.</span>
              {i < 3 && <span style={{ color: '#C41230' }}>◆</span>}
            </React.Fragment>
          ))}
        </motion.div>

        {/* Sub-tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto mb-14 leading-relaxed"
        >
          Military-grade AI detection, enterprise execution workflows, and real-time intelligence — unified in one mission-critical platform.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a href="#platform">
            <button
              className="relative overflow-hidden px-10 py-4 text-sm font-bold tracking-[0.2em] uppercase text-white group transition-all duration-300"
              style={{ background: '#C41230', boxShadow: '0 0 30px rgba(196,18,48,0.35)' }}
            >
              <span className="relative z-10 flex items-center gap-2">Explore Platform <Activity size={15} /></span>
              <span className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            </button>
          </a>
          <button
            className="px-10 py-4 text-sm font-bold tracking-[0.2em] uppercase text-gray-300 hover:text-white transition-colors duration-300"
            style={{ border: '1px solid rgba(255,255,255,0.12)' }}
          >
            Request Demo
          </button>
        </motion.div>
      </div>

      {/* ── Scroll indicator ────────────────────────── */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600 z-20"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <ChevronDown size={16} />
      </motion.div>

      {/* ── Bottom fade ──────────────────────────────── */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none z-10"
        style={{ background: 'linear-gradient(to top, #080808, transparent)' }}
      />
    </section>
  );
}
