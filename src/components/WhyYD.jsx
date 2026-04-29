import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Link2, Users } from 'lucide-react';

const PILLARS = [
  {
    icon: ShieldCheck,
    color: '#C41230',
    title: 'Systems-as-a-Service',
    body: 'Not SaaS. Not tools. A fully integrated operational system — detection, planning, reporting — engineered to run missions.',
  },
  {
    icon: Link2,
    color: '#3D7ABF',
    title: 'Deep Integration',
    body: 'SAP, IoT hardware, legacy databases, CCTV streams — unified under one encrypted, zero-trust security architecture.',
  },
  {
    icon: Zap,
    color: '#F59E0B',
    title: 'Real-Time Inference',
    body: 'Sub-20ms AI inference on live video. Every frame processed. Every violation flagged before it becomes a liability.',
  },
  {
    icon: Users,
    color: '#22C55E',
    title: 'Full Accountability',
    body: 'Every action, every approval, every meeting — logged, timestamped, and immutably tied to a responsible individual.',
  },
];

const STATS = [
  { value: '< 15ms', label: 'AI Inference Latency' },
  { value: '99.8%', label: 'Detection Accuracy' },
  { value: '24 / 7', label: 'Continuous Monitoring' },
  { value: '100%', label: 'Audit Trail Coverage' },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function WhyYD() {
  return (
    <section
      id="why"
      className="py-32 relative section-grid"
      style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-24">
          <motion.p {...fadeUp(0)} className="text-xs font-bold tracking-[0.35em] uppercase mb-4" style={{ color: '#C41230' }}>
            Why YD Sentinel
          </motion.p>
          <motion.h2
            {...fadeUp(0.1)}
            className="text-4xl md:text-6xl font-black uppercase tracking-tight text-white mb-5"
            style={{ fontFamily: "'Rajdhani', sans-serif" }}
          >
            Built for{' '}
            <span className="text-gradient-red">Mission-Critical</span>{' '}
            Environments
          </motion.h2>
          <motion.p {...fadeUp(0.18)} className="text-base text-gray-500 max-w-xl mx-auto leading-relaxed">
            Industrial operations demand precision, reliability, and zero tolerance for failure. YD Sentinel is engineered to those exact standards.
          </motion.p>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-px mb-24"
          style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.04)' }}
        >
          {STATS.map((s, i) => (
            <div
              key={i}
              className="px-8 py-10 text-center"
              style={{ background: '#080808' }}
            >
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.7 }}
              >
                <p
                  className="text-3xl md:text-4xl font-black tracking-tight text-white mb-2"
                  style={{ fontFamily: "'Rajdhani', sans-serif" }}
                >
                  {s.value}
                </p>
                <p className="text-xs text-gray-600 tracking-widest uppercase">{s.label}</p>
              </motion.div>
            </div>
          ))}
        </motion.div>

        {/* Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PILLARS.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={i}
                {...fadeUp(i * 0.1)}
                className="p-8 rounded-sm group"
                style={{
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.05)',
                }}
              >
                <div
                  className="w-12 h-12 flex items-center justify-center rounded mb-6"
                  style={{ background: `${p.color}12`, border: `1px solid ${p.color}25` }}
                >
                  <Icon size={22} style={{ color: p.color }} />
                </div>
                <h3
                  className="text-lg font-bold text-white mb-3 tracking-wide"
                  style={{ fontFamily: "'Rajdhani', sans-serif" }}
                >
                  {p.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">{p.body}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
