import React from 'react';

const Navbar = () => (
  <nav className="fixed w-full z-50 top-0 border-b border-gray-800 bg-black/50 backdrop-blur-md">
    <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-red-600 rounded-sm flex items-center justify-center font-bold text-white tracking-tighter">YD</div>
        <span className="text-xl font-bold tracking-[0.2em] text-gray-200">SENTINEL</span>
      </div>
      <div className="hidden md:flex gap-8 text-xs font-semibold tracking-widest text-gray-400 uppercase">
        <a href="#detect" className="hover:text-white transition-colors duration-300">Detect</a>
        <a href="#plan" className="hover:text-white transition-colors duration-300">Plan</a>
        <a href="#monitor" className="hover:text-white transition-colors duration-300">Monitor</a>
        <button className="border border-red-600 text-red-500 px-6 py-2 hover:bg-red-600 hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(198,17,40,0.3)] hover:shadow-[0_0_25px_rgba(198,17,40,0.6)]">
          Request Demo
        </button>
      </div>
    </div>
  </nav>
);

export default Navbar;
