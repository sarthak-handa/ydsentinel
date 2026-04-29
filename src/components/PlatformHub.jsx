import React from 'react';
import { motion } from 'framer-motion';
import { Crosshair, Network, BarChart2, Activity } from 'lucide-react';

const PlatformHub = () => {
  const modules = [
    { name: "YD Detect", icon: <Crosshair size={32} />, desc: "AI visual anomaly & threat recognition" },
    { name: "YD Plan", icon: <Network size={32} />, desc: "Enterprise execution & component breakdown" },
    { name: "YD Insights", icon: <BarChart2 size={32} />, desc: "Forecast vs actual project intelligence" },
    { name: "YD Reports", icon: <Activity size={32} />, desc: "Secure encrypted workflow logs" }
  ];

  return (
    <section className="py-32 bg-zinc-950 relative border-t border-gray-900" id="platform">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl font-bold text-white uppercase tracking-widest mb-4">Unified Ecosystem</h2>
          <div className="w-24 h-1 bg-red-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {modules.map((mod, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              whileHover={{ y: -5, borderColor: '#C61128', boxShadow: '0 0 25px rgba(198,17,40,0.15)' }}
              className="bg-black border border-gray-800 p-8 cursor-pointer group transition-all"
            >
              <div className="text-gray-500 group-hover:text-red-500 mb-6 transition-colors">
                {mod.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-200 mb-2">{mod.name}</h3>
              <p className="text-gray-500 text-sm">{mod.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformHub;
