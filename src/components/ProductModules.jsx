import React from 'react';
import { motion } from 'framer-motion';

/* ── HUD detection simulation ──────────────────────── */
function DetectVisual() {
  return (
    <div className="relative w-full h-full bg-[#060606] overflow-hidden flex items-center justify-center font-mono">
      {/* Red grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(rgba(196,18,48,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(196,18,48,0.06) 1px, transparent 1px)`,
          backgroundSize: '30px 30px',
        }}
      />

      {/* Scanning line */}
      <div
        className="absolute left-0 right-0 h-px animate-scan-fast pointer-events-none z-10"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(196,18,48,0.9), transparent)',
          boxShadow: '0 0 12px rgba(196,18,48,0.6)',
        }}
      />

      {/* Rotating reticle */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
        className="absolute rounded-full"
        style={{
          width: 160,
          height: 160,
          border: '1.5px dashed rgba(196,18,48,0.35)',
          top: '50%',
          left: '50%',
          marginLeft: -80,
          marginTop: -80,
        }}
      />
      <div
        className="absolute rounded-full"
        style={{
          width: 12,
          height: 12,
          background: '#C41230',
          top: '50%',
          left: '50%',
          marginLeft: -6,
          marginTop: -6,
          boxShadow: '0 0 12px rgba(196,18,48,0.8)',
        }}
      />

      {/* Bounding box */}
      <motion.div
        animate={{ opacity: [0, 1, 1, 1, 0], x: [0, 15, -10, 5, 0] }}
        transition={{ duration: 4, repeat: Infinity, times: [0, 0.15, 0.5, 0.85, 1] }}
        className="absolute flex flex-col"
        style={{ left: '28%', top: '25%', border: '2px solid #C41230' }}
      >
        {/* Corner accents */}
        <div style={{ width: 80, height: 100 }} />
        <div
          className="absolute top-0 left-0 bg-[#C41230] px-1 text-white"
          style={{ fontSize: 8, fontWeight: 700, lineHeight: '16px' }}
        >
          HELMET 98.7%
        </div>
      </motion.div>

      {/* Data overlay top-left */}
      <div className="absolute top-4 left-4 text-[10px] text-[#C41230] z-20 space-y-1">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C41230] animate-pulse" />
          LIVE · CAM_01
        </div>
        <div style={{ color: 'rgba(196,18,48,0.5)' }}>FPS: 60 · GPU: 34%</div>
        <div style={{ color: 'rgba(196,18,48,0.5)' }}>LATENCY: 12ms</div>
      </div>

      {/* Corner brackets */}
      {[['top-2 left-2', 'top right'], ['top-2 right-2', 'top left'], ['bottom-2 left-2', 'bottom right'], ['bottom-2 right-2', 'bottom left']].map(([pos, origin]) => (
        <div
          key={pos}
          className={`absolute w-4 h-4 ${pos}`}
          style={{
            borderTop: pos.includes('bottom') ? 'none' : '1px solid rgba(196,18,48,0.5)',
            borderBottom: pos.includes('top') ? 'none' : '1px solid rgba(196,18,48,0.5)',
            borderLeft: pos.includes('right') ? 'none' : '1px solid rgba(196,18,48,0.5)',
            borderRight: pos.includes('left') ? 'none' : '1px solid rgba(196,18,48,0.5)',
          }}
        />
      ))}
    </div>
  );
}

/* ── Node planning simulation ──────────────────────── */
function PlanVisual() {
  const nodes = [
    { x: '50%', y: '15%', label: 'PROJECT', main: true },
    { x: '20%', y: '45%', label: 'BOM' },
    { x: '50%', y: '45%', label: 'DRAWINGS' },
    { x: '80%', y: '45%', label: 'FABRICATION' },
    { x: '35%', y: '78%', label: 'COMMISSIONING' },
    { x: '65%', y: '78%', label: 'HANDOVER' },
  ];

  const edges = [
    [0, 1], [0, 2], [0, 3], [2, 4], [3, 5],
  ];

  return (
    <div className="relative w-full h-full bg-[#060606] overflow-hidden">
      <svg className="absolute inset-0 w-full h-full">
        <defs>
          <marker id="arrowhead" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
            <polygon points="0 0, 6 3, 0 6" fill="rgba(61,122,191,0.5)" />
          </marker>
        </defs>
        {edges.map(([from, to], i) => {
          const f = nodes[from];
          const t = nodes[to];
          return (
            <motion.line
              key={i}
              x1={f.x} y1={f.y} x2={t.x} y2={t.y}
              stroke="rgba(61,122,191,0.3)"
              strokeWidth="1.5"
              strokeDasharray="6 3"
              markerEnd="url(#arrowhead)"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.5, delay: i * 0.2 }}
            />
          );
        })}
      </svg>

      {nodes.map((node, i) => (
        <motion.div
          key={i}
          className="absolute flex flex-col items-center -translate-x-1/2 -translate-y-1/2"
          style={{ left: node.x, top: node.y }}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.4 }}
        >
          <div
            className="flex items-center justify-center font-mono rounded"
            style={{
              width: node.main ? 72 : 56,
              height: node.main ? 28 : 22,
              background: node.main ? 'rgba(61,122,191,0.25)' : 'rgba(61,122,191,0.1)',
              border: `1px solid ${node.main ? 'rgba(61,122,191,0.7)' : 'rgba(61,122,191,0.3)'}`,
              boxShadow: node.main ? '0 0 15px rgba(61,122,191,0.3)' : 'none',
              fontSize: node.main ? 9 : 7,
              color: '#3D7ABF',
              fontWeight: 700,
              letterSpacing: '0.1em',
            }}
          >
            {node.label}
          </div>
          {node.main && (
            <motion.div
              className="absolute rounded-full"
              style={{
                width: 80,
                height: 80,
                border: '1px solid rgba(61,122,191,0.15)',
                zIndex: -1,
              }}
              animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          )}
        </motion.div>
      ))}

      {/* Task bars */}
      <div className="absolute bottom-4 left-4 right-4 space-y-2">
        {[
          { label: 'Drawing Review', pct: 80 },
          { label: 'Fabrication', pct: 55 },
          { label: 'Commissioning', pct: 30 },
        ].map((t) => (
          <div key={t.label}>
            <div className="flex justify-between text-[9px] font-mono mb-0.5" style={{ color: 'rgba(61,122,191,0.6)' }}>
              <span>{t.label}</span><span>{t.pct}%</span>
            </div>
            <div className="h-1.5 rounded-full overflow-hidden" style={{ background: 'rgba(61,122,191,0.1)' }}>
              <motion.div
                className="h-full rounded-full"
                style={{ background: 'rgba(61,122,191,0.6)' }}
                initial={{ width: 0 }}
                whileInView={{ width: `${t.pct}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.5 }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Product section layout ────────────────────────── */
const PRODUCTS = [
  {
    id: 'detect',
    tag: 'YD Detect',
    headline: 'AI Visual Anomaly Recognition',
    body: 'Computer vision-powered real-time detection across your entire facility. Every frame analysed. Every anomaly flagged.',
    items: [
      'Real-time Helmet & PPE Detection',
      'Automated Scrap & Anomaly Identification',
      'License Plate Recognition (LPR)',
      'Dynamic Coil & Asset Tracking',
    ],
    color: '#C41230',
    visual: <DetectVisual />,
  },
  {
    id: 'plan',
    tag: 'YD Plan',
    headline: 'Enterprise Execution Workflow',
    body: 'From purchase order to commissioning — every task, every component, every deadline tracked with precision.',
    items: [
      'Task → Subtask → Component Breakdown',
      'Automated BOM Processing',
      'Fabrication & Drawing Lifecycle',
      'Commissioning Verification Nodes',
    ],
    color: '#3D7ABF',
    visual: <PlanVisual />,
    flip: true,
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function ProductModules() {
  return (
    <div>
      {PRODUCTS.map((p) => (
        <section
          key={p.id}
          id={p.id}
          className="py-28 relative section-grid"
          style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}
        >
          <div
            className={`max-w-7xl mx-auto px-6 flex flex-col ${p.flip ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-16 lg:gap-24 items-center`}
          >
            {/* Content */}
            <div className="flex-1">
              <motion.p
                {...fadeUp(0)}
                className="text-xs font-bold tracking-[0.35em] uppercase mb-4"
                style={{ color: p.color }}
              >
                — {p.tag}
              </motion.p>
              <motion.h2
                {...fadeUp(0.08)}
                className="text-4xl md:text-5xl font-black uppercase tracking-tight text-white mb-5 leading-tight"
                style={{ fontFamily: "'Rajdhani', sans-serif" }}
              >
                {p.headline}
              </motion.h2>
              <motion.p
                {...fadeUp(0.15)}
                className="text-base text-gray-500 leading-relaxed mb-10"
              >
                {p.body}
              </motion.p>
              <ul className="space-y-4">
                {p.items.map((item, i) => (
                  <motion.li
                    key={i}
                    {...fadeUp(0.2 + i * 0.1)}
                    className="flex items-start gap-4"
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full mt-2 shrink-0"
                      style={{ background: p.color, boxShadow: `0 0 6px ${p.color}` }}
                    />
                    <span className="text-gray-300 text-sm leading-relaxed">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="flex-1 w-full"
            >
              <div
                className="relative w-full overflow-hidden rounded-sm"
                style={{
                  aspectRatio: '16/10',
                  border: `1px solid ${p.color}20`,
                  boxShadow: `0 0 40px ${p.color}10, 0 40px 80px rgba(0,0,0,0.6)`,
                }}
              >
                {p.visual}
              </div>
            </motion.div>
          </div>
        </section>
      ))}
    </div>
  );
}
