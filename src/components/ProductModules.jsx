import React from 'react';
import { motion } from 'framer-motion';

// Simulation for YD Detect
const DetectSimulation = () => (
  <div className="relative w-full h-full bg-yd-dark/80 flex items-center justify-center overflow-hidden font-mono text-yd-red">
    {/* Grid */}
    <div className="absolute inset-0 bg-[linear-gradient(rgba(198,17,40,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(198,17,40,0.1)_1px,transparent_1px)] bg-[size:20px_20px]" />
    
    {/* Central Target Reticle */}
    <motion.div 
      animate={{ rotate: 360 }}
      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      className="absolute w-40 h-40 border-2 border-dashed border-yd-red/50 rounded-full"
    />
    <div className="absolute w-2 h-2 bg-yd-red rounded-full" />
    
    {/* Scanning Line */}
    <motion.div 
      animate={{ top: ['0%', '100%', '0%'] }}
      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      className="absolute left-0 w-full h-[2px] bg-yd-red/80 shadow-[0_0_15px_rgba(198,17,40,0.8)] z-10"
    />

    {/* Bounding Box Simulation */}
    <motion.div 
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: [0, 1, 1, 0], scale: [0.8, 1, 1, 0.8], x: [0, 20, -20, 0] }}
      transition={{ duration: 3, repeat: Infinity, times: [0, 0.2, 0.8, 1] }}
      className="absolute z-20 border-2 border-yd-red bg-yd-red/10 w-24 h-32 flex flex-col justify-end p-1"
      style={{ left: '30%', top: '30%' }}
    >
      <div className="bg-yd-red text-white text-[8px] uppercase px-1 font-bold">OBJ: Helmet [99%]</div>
    </motion.div>

    {/* Live Data Feed */}
    <div className="absolute top-4 left-4 z-10 flex flex-col gap-1 text-[10px]">
      <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-red-600 rounded-full animate-pulse"></span> LIVE_FEED_CAM_01</div>
      <div>FPS: 60</div>
      <div>LATENCY: 12ms</div>
    </div>
  </div>
);

// Simulation for YD Plan
const PlanSimulation = () => (
  <div className="relative w-full h-full bg-yd-dark/80 flex items-center justify-center overflow-hidden p-6 font-mono">
    {/* Subtle Network Lines */}
    <svg className="absolute inset-0 w-full h-full opacity-20">
      <line x1="20%" y1="30%" x2="50%" y2="50%" stroke="#C61128" strokeWidth="2" />
      <line x1="50%" y1="50%" x2="80%" y2="40%" stroke="#C61128" strokeWidth="2" />
      <line x1="50%" y1="50%" x2="60%" y2="80%" stroke="#C61128" strokeWidth="2" />
    </svg>
    
    {/* Network Nodes */}
    <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 2, repeat: Infinity }} className="absolute w-4 h-4 bg-yd-red rounded-full shadow-[0_0_15px_rgba(198,17,40,0.8)] z-10" style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }} />
    <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }} className="absolute w-3 h-3 bg-gray-400 rounded-full z-10" style={{ left: '20%', top: '30%' }} />
    <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2.2, repeat: Infinity, delay: 1 }} className="absolute w-3 h-3 bg-gray-400 rounded-full z-10" style={{ left: '80%', top: '40%' }} />
    <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2.8, repeat: Infinity, delay: 0.2 }} className="absolute w-3 h-3 bg-gray-400 rounded-full z-10" style={{ left: '60%', top: '80%' }} />

    {/* Gantt / Task Bars */}
    <div className="absolute top-4 right-4 z-10 flex flex-col gap-2 w-40">
      {[40, 70, 30].map((width, i) => (
        <div key={i} className="h-2 bg-gray-800 rounded-full overflow-hidden">
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: `${width}%` }}
            transition={{ duration: 1.5, delay: i * 0.3 }}
            className="h-full bg-yd-red"
          />
        </div>
      ))}
    </div>
  </div>
);

export const ProductFeature = ({ title, subtitle, items, align = 'left' }) => (
  <section className="py-24 bg-yd-dark border-t border-white/5 overflow-hidden" id={subtitle.toLowerCase().replace(' ', '')}>
    <div className={`max-w-7xl mx-auto px-6 flex flex-col ${align === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-16`}>
      
      {/* Content Side */}
      <motion.div 
        initial={{ opacity: 0, x: align === 'left' ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex-1"
      >
        <h4 className="text-yd-red font-rajdhani font-bold tracking-[0.3em] uppercase text-sm mb-3 flex items-center gap-2">
          <span className="w-8 h-[1px] bg-yd-red inline-block"></span>
          {subtitle}
        </h4>
        <h2 className="text-4xl md:text-5xl font-orbitron font-extrabold text-white mb-8 uppercase leading-tight">{title}</h2>
        <ul className="space-y-6">
          {items.map((item, idx) => (
            <motion.li 
              key={idx} 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="flex items-start gap-4 text-gray-300 font-inter"
            >
              <span className="w-1.5 h-1.5 bg-yd-red rounded-full block mt-2 shrink-0 shadow-[0_0_8px_rgba(198,17,40,0.8)]"></span>
              <span className="text-lg">{item}</span>
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* Visual / UI Simulation Side */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex-1 w-full"
      >
        <div className="relative w-full aspect-[4/3] md:aspect-video glass-panel rounded-xl overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.5)] border border-white/10 group">
          {/* Subtle reflection overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-30"></div>
          
          {subtitle === "YD Detect" ? <DetectSimulation /> : <PlanSimulation />}
          
        </div>
      </motion.div>
    </div>
  </section>
);

export default ProductFeature;
