import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed w-full z-50 top-0 transition-all duration-500 ${scrolled ? 'bg-yd-dark/80 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)]' : 'bg-transparent border-b border-transparent'}`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-4 cursor-pointer group">
          <div className="w-10 h-10 bg-yd-red rounded flex items-center justify-center font-orbitron font-bold text-white text-lg tracking-tighter shadow-[0_0_15px_rgba(198,17,40,0.5)] group-hover:shadow-[0_0_25px_rgba(198,17,40,0.8)] transition-all">
            YD
          </div>
          <span className="text-xl font-orbitron font-bold tracking-[0.2em] text-white">SENTINEL</span>
        </div>
        <div className="hidden md:flex gap-10 items-center text-xs font-semibold tracking-widest text-gray-400 uppercase font-rajdhani">
          {['Platform', 'Detect', 'Plan', 'Integrations'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="relative hover:text-white transition-colors duration-300 group py-2">
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-yd-red transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <button className="relative overflow-hidden border border-yd-red text-white px-8 py-2.5 font-rajdhani font-bold text-sm tracking-widest bg-yd-red/10 hover:bg-yd-red transition-all duration-300 shadow-[0_0_15px_rgba(198,17,40,0.3)] hover:shadow-[0_0_30px_rgba(198,17,40,0.8)] group">
            <span className="relative z-10">Request Demo</span>
            <div className="absolute inset-0 h-full w-0 bg-white/20 z-0 transition-all duration-500 ease-out group-hover:w-full group-hover:opacity-0"></div>
          </button>
        </div>
      </div>
      {/* Animated glowing bottom border when scrolled */}
      {scrolled && (
        <motion.div 
          layoutId="nav-border"
          className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-yd-red/50 to-transparent"
        />
      )}
    </motion.nav>
  );
};

export default Navbar;
