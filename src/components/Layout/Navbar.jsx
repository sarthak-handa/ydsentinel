import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Platform', href: '#platform' },
  { label: 'Detect', href: '#detect' },
  { label: 'Plan', href: '#plan' },
  { label: 'Integrations', href: '#integrations' },
  { label: 'Why YD', href: '#why' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled
            ? 'rgba(8,8,8,0.92)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(24px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <img
              src="/YDsentinel.png"
              alt="YD Sentinel"
              className="h-8 w-auto object-contain transition-all duration-300 group-hover:opacity-90"
            />
            <span className="hidden sm:inline text-sm font-semibold tracking-[0.25em] uppercase text-gray-200">
              Sentinel
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative text-xs font-semibold tracking-[0.18em] text-gray-400 uppercase hover:text-white transition-colors duration-300 group py-1"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-px bg-[#C41230] group-hover:w-full transition-all duration-300" />
              </a>
            ))}

            <button className="relative overflow-hidden ml-4 border border-[#C41230] text-white text-xs font-bold tracking-[0.2em] uppercase px-7 py-2.5 transition-all duration-300 hover:glow-red group">
              <span className="relative z-10">Request Demo</span>
              <span className="absolute inset-0 bg-[#C41230] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-gray-400 hover:text-white transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Animated red bottom line when scrolled */}
        {scrolled && (
          <motion.div
            className="absolute bottom-0 left-0 h-px w-full"
            style={{
              background: 'linear-gradient(90deg, transparent, rgba(196,18,48,0.6), transparent)',
            }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6 }}
          />
        )}
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-16 left-0 right-0 z-40 border-b border-white/10"
            style={{ background: 'rgba(8,8,8,0.98)', backdropFilter: 'blur(24px)' }}
          >
            <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-6">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm font-semibold tracking-widest text-gray-300 uppercase hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <button className="border border-[#C41230] text-white text-xs font-bold tracking-widest uppercase px-6 py-3 w-full">
                Request Demo
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
