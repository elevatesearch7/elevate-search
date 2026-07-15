'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowUpRight, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage, Language } from '@/context/LanguageContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navLinks = [
    { name: t('home'), href: '/' },
    { name: t('about'), href: '/about' },
    { name: t('solutions'), href: '/solutions' },
    { name: t('pricing'), href: '/pricing' },
    { name: t('insights'), href: '/insights' },
    { name: t('contact'), href: '/contact' },
  ];

  const languages: { code: Language; name: string }[] = [
    { code: 'en', name: 'English' },
    { code: 'hi', name: 'हिन्दी' },
    { code: 'es', name: 'Español' },
    { code: 'fr', name: 'Français' },
    { code: 'de', name: 'Deutsch' }
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-xl border-b border-white/[0.05] transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* 1. BRAND IDENTITY LOGO NODE */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group">
              <img 
                src="/logo.webp" 
                alt="Elevate Search Logo" 
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover transition-transform duration-300 group-hover:scale-105" 
              />
              <span className="font-black text-lg sm:text-2xl tracking-tight select-none">
                <span className="bg-gradient-to-b from-white to-zinc-300 bg-clip-text text-transparent">Elevate</span>
                <span className="bg-gradient-to-r from-purple-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent ml-1">Search</span>
              </span>
            </Link>
          </div>

          {/* 2. DESKTOP LINKS (Hidden on Mobile) */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
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

          {/* 3. DESKTOP INTERACTIONS GRID (Hidden on Mobile) */}
          <div className="hidden md:flex items-center gap-4">
            <div className="relative flex items-center gap-1 bg-zinc-900/50 border border-white/10 rounded-xl px-2 py-1">
              <Globe className="w-3.5 h-3.5 text-purple-400" />
              <select 
                value={language} 
                onChange={(e) => setLanguage(e.target.value as Language)}
                className="bg-transparent text-[11px] font-bold text-zinc-300 focus:outline-none cursor-pointer uppercase tracking-wider pr-1"
              >
                {languages.map(lang => (
                  <option key={lang.code} value={lang.code} className="bg-zinc-950 text-white uppercase">{lang.code}</option>
                ))}
              </select>
            </div>

            <Link href="/contact" className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-white text-black font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-zinc-200 transition-all active:scale-[0.98]">
              {t('getAudit')} <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* 4. MOBILE CONTROLS MATRIX */}
          <div className="md:hidden flex items-center gap-2.5">
            {/* Cleaned Native Dropdown Layout for Mobile Headers */}
            <div className="relative flex items-center gap-1 bg-zinc-900/80 border border-white/10 rounded-xl px-2 py-1.5">
              <Globe className="w-3 h-3 text-purple-400" />
              <select 
                value={language} 
                onChange={(e) => setLanguage(e.target.value as Language)}
                className="bg-transparent text-[10px] font-black text-purple-400 uppercase focus:outline-none cursor-pointer tracking-wider"
              >
                {languages.map(lang => (
                  <option key={lang.code} value={lang.code} className="bg-black text-white">{lang.code.toUpperCase()}</option>
                ))}
              </select>
            </div>
            
            {/* Hamburger Trigger Button */}
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              aria-label="Toggle Menu"
              className="p-2 text-zinc-400 hover:text-white hover:bg-white/5 rounded-xl border border-white/5 transition-colors focus:outline-none active:scale-95"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* 5. CINEMATIC MOBILE DRAWER OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-20 left-0 w-full bg-black/95 backdrop-blur-2xl border-b border-white/[0.08] px-4 pt-4 pb-8 space-y-4 md:hidden shadow-[0_20px_40px_rgba(0,0,0,0.8)]"
          >
            <div className="flex flex-col w-full">
              {navLinks.map((link, idx) => (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.04 }}
                  key={link.name}
                  className="w-full"
                >
                  <Link 
                    href={link.href} 
                    onClick={() => setIsOpen(false)} 
                    className="text-sm font-bold uppercase tracking-widest text-zinc-400 hover:text-white transition-colors py-4 px-2 block border-b border-white/[0.03] active:bg-white/5 rounded-lg"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              
              {/* Localized Full-Width Action Button Inside Drawer */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.04 }}
                className="pt-4 px-2"
              >
                <Link 
                  href="/contact" 
                  onClick={() => setIsOpen(false)} 
                  className="w-full text-center inline-flex items-center justify-center gap-2 px-5 py-4 bg-white text-black font-bold text-xs uppercase tracking-widest rounded-xl shadow-[0_4px_20px_rgba(255,255,255,0.1)] active:scale-[0.99] transition-transform"
                >
                  {t('getAudit')} <ArrowUpRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}