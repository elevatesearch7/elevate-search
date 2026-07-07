'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  // Mapped navigation indexes linked directly to the language dictionary context
  const navLinks = [
    { name: t('home'), href: '/' },
    { name: t('about'), href: '/about' },
    { name: t('solutions'), href: '/solutions' },
    { name: t('pricing'), href: '/pricing' },
    { name: t('insights'), href: '/insights' },
    { name: t('contact'), href: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-xl border-b border-white/[0.05] transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* 1. BRAND IDENTITY LOGO NODE */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-3 group">
              {/* Restored and Verified logo.webp Image Asset */}
              <img 
                src="/logo.webp" 
                alt="Elevate Search Logo" 
                className="w-10 h-10 rounded-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              
              {/* Fancy Cyberpunk Logo Typography */}
              <span className="font-black text-xl sm:text-2xl tracking-tight select-none">
                <span className="bg-gradient-to-b from-white to-zinc-300 bg-clip-text text-transparent">
                  Elevate
                </span>
                <span className="bg-gradient-to-r from-purple-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent ml-1 drop-shadow-[0_0_15px_rgba(168,85,247,0.2)] group-hover:drop-shadow-[0_0_25px_rgba(168,85,247,0.5)] transition-all duration-300">
                  Search
                </span>
              </span>
            </Link>
          </div>

          {/* 2. DESKTOP NAVIGATION MATRIX LINKS (LOCALIZED) */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-xs font-semibold uppercase tracking-widest text-zinc-400 hover:text-white transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* 3. DESKTOP ACTIONS LAYER (LANGUAGE ACCORDION + CTA) */}
          <div className="hidden md:flex items-center gap-5">
            
            {/* Premium Minimalist Language Selection Matrix */}
            <div className="relative flex items-center bg-zinc-900/40 border border-white/10 rounded-xl p-1 shadow-inner">
              <button 
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 text-[10px] font-bold uppercase rounded-lg transition-all duration-300 ${language === 'en' ? 'bg-purple-500 text-white shadow-[0_2px_10px_rgba(168,85,247,0.3)]' : 'text-zinc-500 hover:text-zinc-300'}`}
              >
                EN
              </button>
              <button 
                onClick={() => setLanguage('hi')}
                className={`px-3 py-1 text-[10px] font-bold uppercase rounded-lg transition-all duration-300 ${language === 'hi' ? 'bg-purple-500 text-white shadow-[0_2px_10px_rgba(168,85,247,0.3)]' : 'text-zinc-500 hover:text-zinc-300'}`}
              >
                HI
              </button>
            </div>

            {/* Localized Action CTA */}
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-white text-black font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-zinc-200 active:scale-[0.98] transition-all shadow-[0_4px_25px_rgba(255,255,255,0.08)]"
            >
              {t('getAudit')}
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* 4. MOBILE HAMBURGER MENU & SELECTOR TOGGLES */}
          <div className="md:hidden flex items-center gap-3">
            {/* Direct Quick Toggle Button for Mobile Screens */}
            <button 
              onClick={() => setLanguage(language === 'en' ? 'hi' : 'en')}
              className="px-3 py-1.5 text-[10px] font-black uppercase text-purple-400 border border-purple-500/20 bg-purple-500/5 rounded-xl tracking-wider active:scale-95 transition-all"
            >
              {language.toUpperCase()}
            </button>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-zinc-400 hover:text-white hover:bg-white/5 rounded-xl border border-white/5 transition-colors focus:outline-none"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* 5. MOBILE DROPDOWN OVERLAY INTERACTION DRAWER */}
      {isOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-2xl border-b border-white/[0.05] px-4 pt-2 pb-6 space-y-4 animate-fade-in">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-xs font-semibold uppercase tracking-widest text-zinc-400 hover:text-white transition-colors py-2 border-b border-white/[0.02]"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="w-full text-center inline-flex items-center justify-center gap-1.5 px-5 py-3 bg-white text-black font-bold text-xs uppercase tracking-wider rounded-xl mt-2"
            >
              {t('getAudit')}
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}