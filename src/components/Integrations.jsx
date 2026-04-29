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

const R = 170; // orbit radius (px)

function polar(angleDeg) {
  const a = ((angleDeg - 90) * Math.PI) / 180;
  return { x: Math.cos(a) * R, y: Math.sin(a) * R };
}

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] },
});

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
        <div className="text-center mb-24">
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
            Zero-trust encrypted pipelines connecting your entire industrial infrastructure — SAP, IoT hardware, legacy databases, and secure cloud — in a single unified mesh.
          </motion.p>
        </div>

        {/* Network diagram */}
        <div className="flex justify-center">
          <div className="relative" style={{ width: R * 2 + 160, height: R * 2 + 160 }}>
            <div style={{ position: 'absolute', top: R + 80 - R, left: R + 80 - R, width: R * 2, height: R * 2 }}>

              {/* SVG lines */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                viewBox={`0 0 ${R * 2} ${R * 2}`}
              >
                {NODES.map((n, i) => {
                  const pos = polar(n.angle);
                  return (
                    <motion.line
                      key={i}
                      x1={R} y1={R}
                      x2={R + pos.x} y2={R + pos.y}
                      stroke="rgba(196,18,48,0.2)"
                      strokeWidth="1.5"
                      strokeDasharray="5 4"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.15 }}
                    />
                  );
                })}
                {/* orbit ring */}
                <circle
                  cx={R} cy={R} r={R}
                  fill="none"
                  stroke="rgba(196,18,48,0.08)"
                  strokeWidth="1"
                />
              </svg>

              {/* Travelling dot on each line */}
              {NODES.map((n, i) => {
                const pos = polar(n.angle);
                return (
                  <motion.div
                    key={`dot-${i}`}
                    className="absolute w-2 h-2 rounded-full"
                    style={{
                      background: '#C41230',
                      boxShadow: '0 0 8px rgba(196,18,48,0.8)',
                      top: R - 4,
                      left: R - 4,
                    }}
                    animate={{
                      x: [0, pos.x],
                      y: [0, pos.y],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 2.2,
                      repeat: Infinity,
                      delay: i * 0.4,
                      ease: 'easeInOut',
                    }}
                  />
                );
              })}

              {/* Central core */}
              <div
                className="absolute flex flex-col items-center justify-center rounded-full"
                style={{
                  width: 110,
                  height: 110,
                  top: R - 55,
                  left: R - 55,
                  background: 'rgba(8,8,8,0.95)',
                  border: '2px solid rgba(196,18,48,0.5)',
                  boxShadow: '0 0 40px rgba(196,18,48,0.25)',
                  zIndex: 10,
                }}
              >
                <Shield size={26} style={{ color: '#C41230' }} />
                <span className="text-[9px] font-mono font-bold tracking-widest mt-1" style={{ color: '#C41230' }}>CORE</span>
                <span className="text-[8px] font-mono" style={{ color: 'rgba(196,18,48,0.5)' }}>SECURE</span>
                {/* Pulse ring */}
                <motion.div
                  className="absolute rounded-full"
                  style={{ inset: -12, border: '1px solid rgba(196,18,48,0.25)' }}
                  animate={{ scale: [1, 1.4], opacity: [0.6, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                />
              </div>

              {/* Satellite nodes */}
              {NODES.map((n, i) => {
                const pos = polar(n.angle);
                const Icon = n.icon;
                return (
                  <motion.div
                    key={i}
                    className="absolute flex flex-col items-center group cursor-pointer"
                    style={{
                      top: R + pos.y - 38,
                      left: R + pos.x - 44,
                      width: 88,
                      zIndex: 10,
                    }}
                    initial={{ opacity: 0, scale: 0.6 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + i * 0.12, duration: 0.5 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <div
                      className="w-14 h-14 flex items-center justify-center rounded transition-all duration-300"
                      style={{
                        background: 'rgba(196,18,48,0.06)',
                        border: '1px solid rgba(196,18,48,0.2)',
                      }}
                    >
                      <Icon size={20} style={{ color: '#C41230' }} />
                    </div>
                    <span className="text-[9px] font-mono font-bold tracking-wider text-gray-500 mt-2 text-center whitespace-nowrap">
                      {n.label}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full mt-1 animate-pulse" style={{ background: '#22c55e', boxShadow: '0 0 6px #22c55e' }} />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
