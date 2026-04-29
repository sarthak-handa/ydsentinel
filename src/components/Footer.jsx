import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative"
      style={{ borderTop: '1px solid rgba(255,255,255,0.06)', background: '#050505' }}
    >
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-12">

          {/* Logo + tagline */}
          <div className="flex flex-col gap-4">
            <img src="/YDsentinel.png" alt="YD Sentinel" className="h-10 w-auto object-contain opacity-90" />
            <p className="text-xs tracking-[0.25em] text-gray-600 uppercase">
              Detect. Plan. Monitor. Protect.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-16 gap-y-4">
            {['Platform', 'YD Detect', 'YD Plan', 'YD Insights', 'Integrations', 'Why YD'].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(/\s/g, '')}`}
                className="text-xs text-gray-600 uppercase tracking-[0.18em] hover:text-white transition-colors"
              >
                {link}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div>
            <button
              className="text-xs font-bold tracking-[0.2em] uppercase px-8 py-3 text-white"
              style={{ background: '#C41230', boxShadow: '0 0 20px rgba(196,18,48,0.3)' }}
            >
              Request Demo
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-gray-700 tracking-widest uppercase"
          style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
        >
          <span>© {year} YD Sentinel · Yogiji Digi Limited. All rights reserved.</span>
          <span
            className="flex items-center gap-1.5"
            style={{ color: 'rgba(196,18,48,0.5)' }}
          >
            <span className="w-1 h-1 rounded-full bg-[#C41230] animate-pulse" />
            Systems Online
          </span>
        </div>
      </div>
    </footer>
  );
}
