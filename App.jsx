import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Crosshair, Network, BarChart2, Activity, Database, Lock } from 'lucide-react';

// --- THEME CONSTANTS ---
const theme = {
  red: '#C61128', // Extracted from YD logo
  darkGrey: '#1E2022',
  lightGrey: '#8FA3AD',
};

// --- COMPONENTS ---

const Navbar = () => (
  <nav className="fixed w-full z-50 top-0 border-b border-gray-800 bg-black/50 backdrop-blur-md">
    <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
      <div className="flex items-center gap-3">
        {/* Placeholder for Logo - Replace with actual img tag */}
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

const ProductFeature = ({ title, subtitle, items, align = 'left' }) => (
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

const Integrations = () => (
  <section className="py-32 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-900 via-black to-black">
    <div className="max-w-4xl mx-auto px-6 text-center">
      <Shield className="w-16 h-16 text-red-600 mx-auto mb-6" />
      <h2 className="text-3xl font-bold text-white uppercase tracking-widest mb-6">Military-Grade Integration</h2>
      <p className="text-gray-400 mb-12">Seamlessly connect YD Sentinel with your existing infrastructure. Securely bridge hardware endpoints, SAP pipelines, and encrypted databases.</p>
      
      <div className="flex flex-wrap justify-center gap-6">
        {['SAP ERP', 'Secure Cloud', 'IoT Hardware', 'Legacy DBs'].map((tech, idx) => (
          <div key={idx} className="px-6 py-3 border border-gray-800 bg-black text-gray-300 font-mono text-sm tracking-widest uppercase flex items-center gap-3">
            <Database size={16} className="text-red-500" />
            {tech}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default function App() {
  return (
    <div className="bg-black min-h-screen text-gray-200 font-sans selection:bg-red-600 selection:text-white">
      <Navbar />
      <Hero />
      <PlatformHub />
      
      <ProductFeature 
        subtitle="YD Detect"
        title="AI Visual Anomaly Recognition"
        items={[
          "Real-time Helmet & PPE Detection",
          "Automated Scrap & Anomaly Identification",
          "License Plate Recognition (LPR)",
          "Dynamic Coil & Asset Tracking"
        ]}
        align="left"
      />

      <ProductFeature 
        subtitle="YD Plan"
        title="Enterprise Execution Workflow"
        items={[
          "Task to Component-Level Breakdown",
          "Automated Bill of Materials (BOM) Processing",
          "Fabrication & Drawing Lifecycle Management",
          "Commissioning Verification Nodes"
        ]}
        align="right"
      />

      <Integrations />

      <footer className="bg-black py-12 border-t border-gray-900 text-center text-gray-600 text-sm tracking-widest uppercase">
        <p>© {new Date().getFullYear()} YD Sentinel. Detect. Plan. Monitor. Protect.</p>
      </footer>
    </div>
  );
}