import React from 'react';
import { Shield, Database } from 'lucide-react';

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

export default Integrations;
