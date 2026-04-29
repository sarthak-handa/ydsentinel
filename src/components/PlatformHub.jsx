import React from 'react';
import { motion } from 'framer-motion';
import { Crosshair, Network, BarChart2, Activity } from 'lucide-react';

const PlatformHub = () => {
  const modules = [
    { name: "YD Detect", icon: <Crosshair size={36} />, desc: "AI visual anomaly & threat recognition. Real-time inference." },
    { name: "YD Plan", icon: <Network size={36} />, desc: "Enterprise execution & dynamic component breakdown." },
    { name: "YD Insights", icon: <BarChart2 size={36} />, desc: "Forecast vs actual project intelligence & predictive analytics." },
    { name: "YD Reports", icon: <Activity size={36} />, desc: "Secure encrypted workflow logs and compliance reporting." }
  ];

  return (
    <section className="py-32 bg-yd-dark relative border-t border-white/5" id="platform">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-yd-red/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-orbitron font-bold text-white uppercase tracking-widest mb-6"
          >
            Unified <span className="text-yd-red">Ecosystem</span>
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-yd-red mx-auto shadow-[0_0_15px_rgba(198,17,40,0.8)]"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {modules.map((mod, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="glass-panel p-8 cursor-pointer group relative overflow-hidden h-full flex flex-col"
            >
              {/* Hover Glow Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-yd-red/0 to-yd-red/0 group-hover:from-yd-red/10 group-hover:to-transparent transition-all duration-500 z-0"></div>
              
              {/* Top Animated Border */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-yd-red/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

              <div className="relative z-10">
                <div className="text-gray-500 group-hover:text-yd-red mb-8 transition-colors duration-300 drop-shadow-[0_0_8px_rgba(198,17,40,0)] group-hover:drop-shadow-[0_0_15px_rgba(198,17,40,0.8)]">
                  {mod.icon}
                </div>
                <h3 className="text-2xl font-rajdhani font-bold text-white mb-3 tracking-wide">{mod.name}</h3>
                <p className="text-gray-400 text-sm font-inter leading-relaxed">{mod.desc}</p>
              </div>

              {/* Bottom right decorative element */}
              <div className="absolute bottom-4 right-4 text-[10px] font-mono text-gray-700 group-hover:text-yd-red/50 transition-colors">
                SYS_MOD_{idx + 1}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformHub;
