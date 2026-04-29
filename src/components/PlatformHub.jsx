import React from 'react';
import { motion } from 'framer-motion';
import { Crosshair, Network, BarChart2, Activity } from 'lucide-react';

const MODULES = [
  {
    id: 'YD Detect',
    icon: Crosshair,
    tag: '01',
    color: '#C41230',
    desc: 'Real-time AI visual anomaly detection, PPE compliance, LPR and coil tracking.',
    status: 'Active',
  },
  {
    id: 'YD Plan',
    icon: Network,
    tag: '02',
    color: '#3D7ABF',
    desc: 'Enterprise execution from task to component-level. BOM, drawings, commissioning.',
    status: 'Active',
  },
  {
    id: 'YD Insights',
    icon: BarChart2,
    tag: '03',
    color: '#F59E0B',
    desc: 'Forecast vs actual billing. Project intelligence, financial dashboards.',
    status: 'Beta',
  },
  {
    id: 'YD Reports',
    icon: Activity,
    tag: '04',
    color: '#22C55E',
    desc: 'Structured meeting logs, secure audit trails, and encrypted workflow records.',
    status: 'Active',
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function PlatformHub() {
  return (
    <section
      id="platform"
      className="relative py-32 section-grid"
      style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}
    >
      {/* background radial tint */}
      <div
        className="absolute inset-x-0 top-0 h-px pointer-events-none"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(196,18,48,0.4), transparent)' }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-24">
          <motion.p
            {...fadeUp(0)}
            className="text-xs font-bold tracking-[0.35em] uppercase mb-4"
            style={{ color: '#C41230' }}
          >
            Core Architecture
          </motion.p>
          <motion.h2
            {...fadeUp(0.1)}
            className="text-4xl md:text-6xl font-black uppercase tracking-tight text-white mb-5"
            style={{ fontFamily: "'Rajdhani', sans-serif" }}
          >
            Unified{' '}
            <span className="text-gradient-red">Ecosystem</span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-20 h-px mx-auto"
            style={{ background: 'linear-gradient(90deg, transparent, #C41230, transparent)' }}
          />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {MODULES.map((mod, i) => {
            const Icon = mod.icon;
            return (
              <motion.div
                key={mod.id}
                {...fadeUp(i * 0.12)}
                whileHover={{ y: -8, transition: { duration: 0.25 } }}
                className="relative group cursor-pointer flex flex-col p-8 rounded-sm overflow-hidden"
                style={{
                  background: 'rgba(255,255,255,0.025)',
                  border: '1px solid rgba(255,255,255,0.07)',
                }}
              >
                {/* Top accent bar */}
                <div
                  className="absolute top-0 left-0 right-0 h-px transition-all duration-500"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${mod.color}, transparent)`,
                    opacity: 0.4,
                  }}
                />
                <div
                  className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `linear-gradient(90deg, transparent, ${mod.color}, transparent)` }}
                />

                {/* Hover bg */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: `radial-gradient(circle at 50% 0%, ${mod.color}12 0%, transparent 60%)` }}
                />

                {/* Tag */}
                <span
                  className="text-[10px] font-mono font-bold tracking-widest mb-6 block"
                  style={{ color: mod.color }}
                >
                  {mod.tag}
                </span>

                {/* Icon */}
                <div
                  className="w-12 h-12 flex items-center justify-center rounded mb-6 transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: `${mod.color}14`,
                    border: `1px solid ${mod.color}30`,
                    color: mod.color,
                  }}
                >
                  <Icon size={22} />
                </div>

                {/* Name */}
                <h3
                  className="text-xl font-bold text-white mb-3 tracking-wide"
                  style={{ fontFamily: "'Rajdhani', sans-serif" }}
                >
                  {mod.id}
                </h3>

                {/* Desc */}
                <p className="text-sm text-gray-500 leading-relaxed flex-1">{mod.desc}</p>

                {/* Status */}
                <div className="flex items-center gap-2 mt-6 pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                  <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: mod.color }} />
                  <span className="text-[10px] font-mono tracking-widest text-gray-600 uppercase">{mod.status}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
