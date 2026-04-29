import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Grid & Scanning Effect */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      <motion.div 
        animate={{ y: ["-100%", "100%"] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 left-0 w-full h-[2px] bg-red-600/50 shadow-[0_0_30px_rgba(198,17,40,0.8)] z-0"
      />

      <div className="relative z-10 text-center max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6 uppercase">
            Systems-as-a-Service <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">
              Enterprise Intelligence
            </span>
          </h1>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="flex justify-center gap-6 text-sm md:text-base font-medium tracking-[0.3em] text-gray-400 uppercase mb-12"
        >
          <span>Detect.</span>
          <span className="text-red-600">•</span>
          <span>Plan.</span>
          <span className="text-red-600">•</span>
          <span>Monitor.</span>
          <span className="text-red-600">•</span>
          <span>Protect.</span>
        </motion.div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="bg-red-600 text-white px-8 py-4 uppercase tracking-widest text-sm font-bold hover:bg-red-700 transition-colors shadow-[0_0_20px_rgba(198,17,40,0.4)]"
        >
          Explore Platform
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
