import React from 'react';
import { motion } from 'framer-motion';
import { Activity, ShieldCheck, Crosshair } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-yd-dark font-rajdhani">
      {/* Dynamic Grid Background */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
      
      {/* Central Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-yd-red/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Full-screen Sweeping Radar/Laser */}
      <motion.div 
        animate={{ y: ["-100vh", "100vh"] }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 left-0 w-full h-[2px] bg-yd-red/40 shadow-[0_0_40px_rgba(198,17,40,0.8)] z-0"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[20%] h-full bg-white/50 blur-[2px]"></div>
      </motion.div>

      {/* Floating UI Elements (Glassmorphism) */}
      <motion.div 
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute hidden md:flex top-1/4 left-[10%] glass-panel p-4 rounded-lg items-center gap-4 z-10"
      >
        <Crosshair className="text-yd-red animate-pulse-slow" size={24} />
        <div>
          <div className="text-xs text-gray-400 tracking-widest uppercase">Target Lock</div>
          <div className="text-sm text-white font-mono font-bold">SYS_OPT: 99.8%</div>
        </div>
      </motion.div>

      <motion.div 
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute hidden md:flex bottom-1/4 right-[10%] glass-panel p-4 rounded-lg items-center gap-4 z-10"
      >
        <ShieldCheck className="text-green-500 animate-pulse-slow" size={24} />
        <div>
          <div className="text-xs text-gray-400 tracking-widest uppercase">Perimeter</div>
          <div className="text-sm text-white font-mono font-bold">SECURE_Z1</div>
        </div>
      </motion.div>

      <div className="relative z-20 text-center max-w-5xl px-6 flex flex-col items-center">
        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8 border border-yd-red/30 bg-yd-red/5 text-yd-red px-4 py-1.5 rounded-full text-xs tracking-[0.2em] uppercase font-bold flex items-center gap-2 shadow-[0_0_20px_rgba(198,17,40,0.2)]"
        >
          <Activity size={14} className="animate-pulse" />
          Live Neural Network Active
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h1 className="text-6xl md:text-8xl font-orbitron font-black text-white tracking-tight mb-6 uppercase leading-tight text-glow">
            Enterprise <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-yd-red to-red-900 drop-shadow-lg">
              Intelligence
            </span>
          </h1>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 font-inter font-light"
        >
          Military-grade visual anomaly recognition and execution workflows. Built for extreme precision environments.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-6 justify-center"
        >
          <button className="bg-yd-red text-white px-10 py-4 uppercase tracking-[0.2em] text-sm font-bold hover:bg-red-700 transition-all shadow-[0_0_20px_rgba(198,17,40,0.5)] hover:shadow-[0_0_40px_rgba(198,17,40,0.8)] relative overflow-hidden group">
            <span className="relative z-10 flex items-center gap-2">Deploy Sentinel <Activity size={16}/></span>
            <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out z-0"></div>
          </button>
          <button className="glass-panel text-white px-10 py-4 uppercase tracking-[0.2em] text-sm font-bold hover:bg-white/10 transition-colors border border-white/20">
            View Architecture
          </button>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-yd-dark to-transparent z-10"></div>
    </section>
  );
};

export default Hero;
