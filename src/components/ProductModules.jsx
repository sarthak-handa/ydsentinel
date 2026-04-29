import React from 'react';
import { motion } from 'framer-motion';

export const ProductFeature = ({ title, subtitle, items, align = 'left' }) => (
  <section className="py-24 bg-black border-t border-gray-900 overflow-hidden">
    <div className={`max-w-7xl mx-auto px-6 flex flex-col ${align === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-16`}>
      
      {/* Content Side */}
      <motion.div 
        initial={{ opacity: 0, x: align === 'left' ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="flex-1"
      >
        <h4 className="text-red-600 font-bold tracking-[0.2em] uppercase text-sm mb-2">{subtitle}</h4>
        <h2 className="text-4xl font-extrabold text-white mb-6 uppercase">{title}</h2>
        <ul className="space-y-4">
          {items.map((item, idx) => (
            <li key={idx} className="flex items-center gap-4 text-gray-400 border-l-2 border-gray-800 pl-4 hover:border-red-600 transition-colors">
              <span className="w-1.5 h-1.5 bg-red-600 rounded-full block"></span>
              {item}
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Visual / UI Simulation Side */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="flex-1 relative w-full aspect-video bg-zinc-900 border border-gray-800 rounded-lg overflow-hidden flex items-center justify-center"
      >
        {/* Simulating a glassmorphic data overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-transparent to-red-900/10"></div>
        <div className="relative z-10 w-3/4 h-3/4 border border-gray-700/50 bg-black/40 backdrop-blur-md shadow-2xl p-4 flex flex-col gap-2">
          <div className="flex justify-between items-center border-b border-gray-800 pb-2 mb-2">
            <span className="text-xs text-red-500 uppercase tracking-widest font-mono">Live Feed</span>
            <div className="flex gap-1"><div className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></div></div>
          </div>
          {/* Animated Bars simulating data */}
          {[...Array(4)].map((_, i) => (
            <motion.div 
              key={i} 
              initial={{ width: 0 }}
              whileInView={{ width: `${Math.random() * 60 + 30}%` }}
              transition={{ duration: 1, delay: i * 0.2 }}
              className="h-2 bg-gray-700 rounded-full overflow-hidden"
            >
              <div className="h-full bg-red-600/80 w-full"></div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default ProductFeature;
