'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowUpRight, Globe } from 'lucide-react';
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
          
          {/* LOGO NODE */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-3 group">
              <img src="/logo.webp" alt="Elevate Search Logo" className="w-10 h-10 rounded-full object-cover" />
              <span className="font-black text-xl sm:text-2xl tracking-tight select-none">
                <span className="bg-gradient-to-b from-white to-zinc-300 bg-clip-text text-transparent">Elevate</span>
                <span className="bg-gradient-to-r from-purple-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent ml-1">Search</span>
              </span>
            </Link>
          </div>

          {/* DESKTOP NAV LINKS */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="text-xs font-semibold uppercase tracking-widest text-zinc-400 hover:text-white transition-colors duration-200">
                {link.name}
              </Link>
            ))}
          </div>

          {/* DESKTOP ACTIONS GRID */}
          <div className="hidden md:flex items-center gap-4">
            
            {/* Elegant Global Language Selection Dropdown Menu */}
            <div className="relative flex items-center gap-1 bg-zinc-900/50 border border-white/10 rounded-xl px-2 py-1">
              <Globe className="w-3..5 h-3.5 text-purple-400" />
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

            <Link href="/contact" className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-white text-black font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-zinc-200 transition-all">
              {t('getAudit')} <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* MOBILE TOGGLE TRIGGER */}
          <div className="md:hidden flex items-center gap-3">
            <select 
              value={language} 
              onChange={(e) => setLanguage(e.target.value as Language)}
              className="bg-zinc-900/80 border border-white/10 rounded-xl px-2.5 py-1.5 text-xs font-bold text-purple-400 uppercase focus:outline-none"
            >
              {languages.map(lang => (
                <option key={lang.code} value={lang.code} className="bg-black text-white">{lang.code.toUpperCase()}</option>
              ))}
            </select>
            
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-zinc-400 hover:text-white hover:bg-white/5 rounded-xl border border-white/5 transition-colors">
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* MOBILE INTERACTION DRAWER */}
      {isOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-2xl border-b border-white/[0.05] px-4 pt-2 pb-6 space-y-4">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-xs font-semibold uppercase tracking-widest text-zinc-400 hover:text-white transition-colors py-2 border-b border-white/[0.02]">
                {link.name}
              </Link>
            ))}
            <Link href="/contact" onClick={() => setIsOpen(false)} className="w-full text-center inline-flex items-center justify-center gap-1.5 px-5 py-3 bg-white text-black font-bold text-xs uppercase tracking-wider rounded-xl mt-2">
              {t('getAudit')} <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}