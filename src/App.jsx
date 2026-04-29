import React from 'react';
import Navbar from './components/Layout/Navbar';
import Hero from './components/Hero';
import PlatformHub from './components/PlatformHub';
import ProductFeature from './components/ProductModules';
import Integrations from './components/Integrations';

function App() {
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

export default App;
