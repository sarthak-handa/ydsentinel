import React, { useEffect, useRef, useState } from 'react';
import Navbar from './components/Layout/Navbar';
import Hero from './components/Hero';
import PlatformHub from './components/PlatformHub';
import ProductModules from './components/ProductModules';
import WhyYD from './components/WhyYD';
import Integrations from './components/Integrations';
import Footer from './components/Footer';

function App() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const move = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + 'px';
        cursorRef.current.style.top = e.clientY + 'px';
      }
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <div
      className="min-h-screen text-gray-200 selection:bg-red-700 selection:text-white"
      style={{ background: '#080808' }}
    >
      {/* Cursor glow */}
      <div ref={cursorRef} className="cursor-glow hidden md:block" />

      <Navbar />
      <Hero />
      <PlatformHub />
      <ProductModules />
      <WhyYD />
      <Integrations />
      <Footer />
    </div>
  );
}

export default App;

