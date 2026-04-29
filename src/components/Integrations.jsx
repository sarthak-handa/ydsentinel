import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Database, Cpu, Cloud, Server } from 'lucide-react';

const Integrations = () => {
  const nodes = [
    { name: 'SAP ERP', icon: <Database size={24} />, delay: 0 },
    { name: 'Secure Cloud', icon: <Cloud size={24} />, delay: 0.2 },
    { name: 'IoT Hardware', icon: <Cpu size={24} />, delay: 0.4 },
    { name: 'Legacy DBs', icon: <Server size={24} />, delay: 0.6 }
  ];

  return (
    <section className="py-32 bg-yd-dark relative border-t border-white/5 overflow-hidden" id="integrations">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yd-red/5 via-yd-dark to-yd-dark"></div>
      
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="w-20 h-20 mx-auto bg-yd-red/10 border border-yd-red/30 flex items-center justify-center rounded-full mb-8 shadow-[0_0_30px_rgba(198,17,40,0.3)] relative"
          >
            <Shield className="w-10 h-10 text-yd-red animate-pulse" />
            {/* Outer spinning ring */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute inset-[-10px] border border-dashed border-yd-red/40 rounded-full"
            />
          </motion.div>
          
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-orbitron font-bold text-white uppercase tracking-widest mb-6"
          >
            Military-Grade <span className="text-yd-red">Integration</span>
          </motion.h2>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 mb-16 font-inter max-w-2xl mx-auto"
          >
            Seamlessly connect YD Sentinel with your existing infrastructure. Securely bridge hardware endpoints, SAP pipelines, and encrypted databases with zero-trust architecture.
          </motion.p>
        </div>
        
        {/* Network Node Visualization */}
        <div className="relative h-[400px] flex items-center justify-center">
          {/* Central Core */}
          <div className="absolute z-20 w-32 h-32 bg-yd-dark border-2 border-yd-red rounded-full flex flex-col items-center justify-center shadow-[0_0_50px_rgba(198,17,40,0.4)]">
            <div className="font-orbitron font-bold text-white tracking-widest">CORE</div>
            <div className="text-[10px] text-yd-red font-mono">SECURE</div>
          </div>

          {/* Lines & Nodes */}
          {nodes.map((node, idx) => {
            const angle = (idx * 360) / nodes.length;
            const radius = 160;
            const x = Math.cos((angle * Math.PI) / 180) * radius;
            const y = Math.sin((angle * Math.PI) / 180) * radius;

            return (
              <React.Fragment key={idx}>
                {/* Connecting Line */}
                <motion.svg className="absolute w-full h-full inset-0 pointer-events-none z-0" style={{ transformOrigin: 'center' }}>
                  <motion.line 
                    x1="50%" y1="50%" 
                    x2={`calc(50% + ${x}px)`} y2={`calc(50% + ${y}px)`} 
                    stroke="#C61128" strokeWidth="2" strokeOpacity="0.3" strokeDasharray="5,5"
                  />
                  {/* Pulsing dot travelling along the line */}
                  <motion.circle 
                    r="3" fill="#fff"
                    animate={{
                      cx: ["50%", `calc(50% + ${x}px)`],
                      cy: ["50%", `calc(50% + ${y}px)`],
                      opacity: [1, 0]
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: node.delay }}
                  />
                </motion.svg>

                {/* Node Box */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + node.delay }}
                  className="absolute z-10 glass-panel px-6 py-4 flex flex-col items-center gap-2 group hover:border-yd-red/50 transition-colors"
                  style={{ transform: `translate(${x}px, ${y}px)` }}
                >
                  <div className="text-gray-400 group-hover:text-yd-red transition-colors">{node.icon}</div>
                  <div className="text-white font-rajdhani font-bold tracking-widest text-sm whitespace-nowrap">{node.name}</div>
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.8)]"></div>
                </motion.div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Integrations;
