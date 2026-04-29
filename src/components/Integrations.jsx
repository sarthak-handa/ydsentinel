import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Cpu, Cloud, Server, Database, Lock } from 'lucide-react';

const NODES = [
  { icon: Database, label: 'SAP ERP', angle: 0 },
  { icon: Cloud, label: 'Secure Cloud', angle: 72 },
  { icon: Cpu, label: 'IoT Sensors', angle: 144 },
  { icon: Server, label: 'Legacy DBs', angle: 216 },
  { icon: Lock, label: 'Encrypted APIs', angle: 288 },
];

// SVG canvas size and orbit radius
const SIZE = 500;
const CX = SIZE / 2;
const CY = SIZE / 2;
const R = 185;

function polar(angleDeg) {
  const a = ((angleDeg - 90) * Math.PI) / 180;
  return { x: CX + Math.cos(a) * R, y: CY + Math.sin(a) * R };
}

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] },
});

/* ── Travelling data dot ─────────────────────────────── */
function TravellingDot({ node, index }) {
  const pos = polar(node.angle);
  const dx = pos.x - CX;
  const dy = pos.y - CY;

  return (
    <motion.circle
      cx={CX}
      cy={CY}
      r="4"
      fill="#C41230"
      filter="url(#dotglow)"
      style={{
        transformOrigin: `${CX}px ${CY}px`,
      }}
      animate={{
        translateX: [0, dx, 0],
        translateY: [0, dy, 0],
        opacity: [0, 1, 0],
      }}
      transition={{
        duration: 2.5,
        repeat: Infinity,
        delay: index * 0.45,
        ease: 'easeInOut',
      }}
    />
  );
}

export default function Integrations() {
  return (
    <section
      id="integrations"
      className="py-32 relative section-grid"
      style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}
    >
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(196,18,48,0.04) 0%, transparent 60%)' }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-20">
          <motion.p {...fadeUp(0)} className="text-xs font-bold tracking-[0.35em] uppercase mb-4" style={{ color: '#C41230' }}>
            System Integration
          </motion.p>
          <motion.h2
            {...fadeUp(0.1)}
            className="text-4xl md:text-6xl font-black uppercase tracking-tight text-white mb-5"
            style={{ fontFamily: "'Rajdhani', sans-serif" }}
          >
            Military-Grade{' '}
            <span className="text-gradient-red">Integration</span>
          </motion.h2>
          <motion.p {...fadeUp(0.18)} className="text-base text-gray-500 max-w-xl mx-auto leading-relaxed">
            Zero-trust encrypted pipelines connecting your entire industrial infrastructure —
            SAP, IoT hardware, legacy databases, and secure cloud — in a single unified mesh.
          </motion.p>
        </div>

        {/* Network diagram */}
        <div className="flex justify-center">
          <div style={{ position: 'relative', width: SIZE, height: SIZE, maxWidth: '100%' }}>

            {/* Base SVG for all lines and static rings */}
            <svg
              viewBox={`0 0 ${SIZE} ${SIZE}`}
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', overflow: 'visible' }}
            >
              {/* Outer orbit ring */}
              <circle cx={CX} cy={CY} r={R} fill="none" stroke="rgba(196,18,48,0.08)" strokeWidth="1" />
              {/* Inner glow ring */}
              <circle cx={CX} cy={CY} r={55} fill="rgba(196,18,48,0.04)" stroke="rgba(196,18,48,0.3)" strokeWidth="1.5" />

              {/* Connector lines */}
              {NODES.map((n, i) => {
                const pos = polar(n.angle);
                return (
                  <motion.line
                    key={`line-${i}`}
                    x1={CX} y1={CY}
                    x2={pos.x} y2={pos.y}
                    stroke="rgba(196,18,48,0.25)"
                    strokeWidth="1.5"
                    strokeDasharray="5 4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.15, duration: 0.6 }}
                  />
                );
              })}

              {/* Travelling data dots */}
              {NODES.map((n, i) => (
                <TravellingDot key={`traveller-${i}`} node={n} index={i} />
              ))}

              <defs>
                <filter id="dotglow" x="-100%" y="-100%" width="300%" height="300%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
            </svg>

            {/* Central Core — positioned exactly at center */}
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="absolute rounded-full flex flex-col items-center justify-center"
              style={{
                width: 110,
                height: 110,
                top: CY - 55,
                left: CX - 55,
                background: '#080808',
                border: '2px solid rgba(196,18,48,0.55)',
                boxShadow: '0 0 40px rgba(196,18,48,0.3)',
                zIndex: 20,
              }}
            >
              <Shield size={26} style={{ color: '#C41230' }} />
              <span className="text-[9px] font-mono font-bold tracking-widest mt-1" style={{ color: '#C41230' }}>CORE</span>
              <span className="text-[8px] font-mono" style={{ color: 'rgba(196,18,48,0.5)' }}>SECURE</span>
              {/* Pulse ring */}
              <motion.div
                className="absolute rounded-full"
                style={{ inset: -14, border: '1px solid rgba(196,18,48,0.2)' }}
                animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              />
            </motion.div>

            {/* Satellite nodes — each placed at polar() coordinates */}
            {NODES.map((n, i) => {
              const pos = polar(n.angle);
              const Icon = n.icon;
              const nodeW = 80;
              const nodeH = 74;
              return (
                <motion.div
                  key={`node-${i}`}
                  className="absolute flex flex-col items-center cursor-pointer group"
                  style={{
                    width: nodeW,
                    // Centre the node box on the orbit point
                    left: pos.x - nodeW / 2,
                    top: pos.y - nodeH / 2,
                    zIndex: 10,
                  }}
                  initial={{ opacity: 0, scale: 0.6 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.12, duration: 0.5 }}
                  whileHover={{ scale: 1.15 }}
                >
                  <div
                    className="w-14 h-14 flex items-center justify-center rounded transition-all duration-300 group-hover:border-opacity-60"
                    style={{
                      background: 'rgba(196,18,48,0.06)',
                      border: '1px solid rgba(196,18,48,0.25)',
                    }}
                  >
                    <Icon size={20} style={{ color: '#C41230' }} />
                  </div>
                  <span className="text-[9px] font-mono font-bold tracking-wider text-gray-500 mt-1.5 text-center whitespace-nowrap leading-tight">
                    {n.label}
                  </span>
                  <span
                    className="w-1.5 h-1.5 rounded-full mt-1 animate-pulse"
                    style={{ background: '#22c55e', boxShadow: '0 0 6px #22c55e' }}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
