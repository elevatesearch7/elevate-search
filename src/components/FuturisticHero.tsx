'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, MapPin, Cpu, X, Sparkles } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import TerminalAuditForm from '@/components/AuditForm';

export default function FuturisticHero() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.05 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15, filter: 'blur(4px)' },
    visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <div className="relative w-full min-h-screen xl:min-h-[85vh] bg-transparent text-white flex flex-col items-center justify-center pt-28 pb-12 overflow-hidden">
      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="relative z-10 max-w-5xl w-full mx-auto text-center px-4 space-y-6 lg:space-y-8">
        
        {/* Brand Header Array */}
        <div className="space-y-3 lg:space-y-4 select-none">
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/5 text-purple-400 text-[10px] lg:text-xs font-semibold uppercase tracking-widest mx-auto shadow-[0_0_15px_rgba(168,85,247,0.15)]">
            <Sparkles className="w-3 h-3 lg:w-3.5 h-3.5 animate-pulse" /> {t('heroBadge')}
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-4xl sm:text-6xl lg:text-6xl xl:text-7xl font-black tracking-tighter leading-tight block">
            <span className="bg-gradient-to-b from-white to-neutral-400 bg-clip-text text-transparent">Elevate</span>
            <span className="relative inline-block ml-2 sm:ml-3 bg-gradient-to-r from-purple-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(168,85,247,0.35)]">Search</span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-[9px] sm:text-xs tracking-[0.45em] sm:tracking-[0.6em] uppercase font-bold text-zinc-500 flex items-center justify-center gap-2 pl-[0.45em]">
            <span>{t('sloganFound')}</span>
            <span className="relative flex h-1.5 w-1.5 mx-1">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-purple-500"></span>
            </span>
            <span>{t('sloganChosen')}</span>
          </motion.p>
        </div>

        {/* Mobile Horizontal Swipe Container / Desktop Bento Grid */}
        <motion.div 
          variants={itemVariants} 
          className="flex overflow-x-auto snap-x snap-mandatory md:grid md:grid-cols-3 gap-4 w-full text-left mt-4 lg:mt-6 px-2 md:px-0 pb-2 md:pb-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          
          {/* Card 1 */}
          <div className="shrink-0 w-[92vw] sm:w-[70vw] md:w-auto md:col-span-2 snap-center snap-always group relative p-7 py-12 md:p-6 bg-zinc-950/40 backdrop-blur-md border border-white/[0.05] hover:border-purple-500/30 rounded-2xl transition-all duration-500 flex flex-col justify-between overflow-hidden shadow-[0_4px_30px_rgba(0,0,0,0.5)] min-h-[340px] md:min-h-[190px]">
            {/* 🖼️ Increased Opacity Base from 0.04 -> 0.09 */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center opacity-[0.09] mix-blend-luminosity group-hover:opacity-[0.14] transition-opacity duration-500 pointer-events-none" />
            
            <div className="space-y-4 md:space-y-2.5 relative z-10">
              <div className="w-12 h-12 md:w-8 md:h-8 rounded-xl md:rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                <Search className="w-5 h-5 md:w-4 md:h-4" />
              </div>
              <h3 className="text-lg md:text-base font-bold text-white group-hover:text-purple-400 transition-colors">{t('card1Title')}</h3>
              <p className="text-sm md:text-xs text-zinc-300 md:text-zinc-400 leading-relaxed max-w-xl">{t('card1Desc')}</p>
            </div>
            <div className="text-[10px] md:text-[9px] text-purple-400/80 tracking-wider font-mono uppercase relative z-10">{t('card1Tag')}</div>
          </div>

          {/* Card 2 */}
          <div className="shrink-0 w-[92vw] sm:w-[70vw] md:w-auto snap-center snap-always group relative p-7 py-12 md:p-6 bg-zinc-950/40 backdrop-blur-md border border-white/[0.05] hover:border-indigo-500/30 rounded-2xl transition-all duration-500 flex flex-col justify-between overflow-hidden shadow-[0_4px_30px_rgba(0,0,0,0.5)] min-h-[340px] md:min-h-[190px]">
            {/* 🖼️ Increased Opacity Base from 0.03 -> 0.08 */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center opacity-[0.08] mix-blend-screen group-hover:opacity-[0.13] transition-opacity duration-500 pointer-events-none" />
            
            <div className="space-y-4 md:space-y-2.5 relative z-10">
              <div className="w-12 h-12 md:w-8 md:h-8 rounded-xl md:rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                <MapPin className="w-5 h-5 md:w-4 md:h-4" />
              </div>
              <h3 className="text-lg md:text-base font-bold text-white group-hover:text-indigo-400 transition-colors">{t('card2Title')}</h3>
              <p className="text-sm md:text-xs text-zinc-300 md:text-zinc-400 leading-relaxed">{t('card2Desc')}</p>
            </div>
            <div className="text-[10px] md:text-[9px] text-indigo-400/80 tracking-wider font-mono uppercase relative z-10">{t('card2Tag')}</div>
          </div>

          {/* Card 3 */}
          <div className="shrink-0 w-[92vw] sm:w-[70vw] md:w-auto snap-center snap-always group relative p-7 py-12 md:p-6 bg-zinc-950/40 backdrop-blur-md border border-white/[0.05] hover:border-emerald-500/30 rounded-2xl transition-all duration-500 flex flex-col justify-between overflow-hidden shadow-[0_4px_30px_rgba(0,0,0,0.5)] min-h-[340px] md:min-h-[190px]">
            {/* 🖼️ Increased Opacity Base from 0.04 -> 0.09 */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center opacity-[0.09] mix-blend-overlay group-hover:opacity-[0.14] transition-opacity duration-500 pointer-events-none" />
            
            <div className="space-y-4 md:space-y-2.5 relative z-10">
              <div className="w-12 h-12 md:w-8 md:h-8 rounded-xl md:rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                <Cpu className="w-5 h-5 md:w-4 md:h-4" />
              </div>
              <h3 className="text-lg md:text-base font-bold text-white group-hover:text-emerald-400 transition-colors">{t('card3Title')}</h3>
              <p className="text-sm md:text-xs text-zinc-300 md:text-zinc-400 leading-relaxed">{t('card3Desc')}</p>
            </div>
            <div className="text-[10px] md:text-[9px] text-emerald-400/80 tracking-wider font-mono uppercase relative z-10">{t('card3Tag')}</div>
          </div>

          {/* Card 4 Trigger */}
          <div 
            onClick={() => setIsModalOpen(true)} 
            className="shrink-0 w-[92vw] sm:w-[70vw] md:w-auto md:col-span-2 snap-center snap-always group relative p-7 py-10 md:p-6 bg-gradient-to-r from-purple-950/20 to-indigo-950/20 backdrop-blur-md border border-purple-500/30 hover:border-purple-400 rounded-2xl transition-all duration-500 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 overflow-hidden shadow-[0_4px_30px_rgba(124,58,237,0.1)] cursor-pointer hover:scale-[1.01] min-h-[200px] md:min-h-auto"
          >
            {/* Increased Opacity Base from 0.02 -> 0.06 */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center opacity-[0.06] group-hover:opacity-[0.11] transition-opacity duration-500 pointer-events-none" />
            
            <div className="space-y-2 relative z-10">
              <h3 className="text-base sm:text-base font-bold text-white group-hover:text-purple-300 transition-colors">{t('card4Title')}</h3>
              <p className="text-sm sm:text-xs text-zinc-300 md:text-zinc-400 max-w-sm">{t('card4Desc')}</p>
            </div>
            <div className="inline-flex items-center gap-2 text-xs font-bold text-purple-400 group-hover:text-white transition-all px-5 py-3 rounded-xl bg-purple-500/10 border border-purple-500/20 group-hover:bg-purple-600 shrink-0 text-center justify-center relative z-10">
              {t('card4Btn')}
            </div>
          </div>

        </motion.div>

        <div className="flex md:hidden items-center justify-center gap-1.5 text-[10px] font-mono tracking-[0.2em] text-purple-400/50 uppercase select-none pt-1 animate-pulse">
          <span>Swipe to view more</span>
          <span className="text-xs">➔</span>
        </div>

      </motion.div>

      {/* Audit System Diagnosis Popup Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsModalOpen(false)} className="absolute inset-0 bg-black/70 backdrop-blur-md" />
            <motion.div initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 20 }} className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-zinc-950/70 backdrop-blur-2xl border border-white/10 p-6 sm:p-10 rounded-3xl shadow-2xl space-y-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <h2 className="text-xl font-bold text-white">Initialize System Diagnosis</h2>
                <button onClick={() => setIsModalOpen(false)} className="p-2 text-zinc-400 hover:text-white hover:bg-white/5 rounded-xl">
                  <X className="w-4 h-4" />
                </button>
              </div>
              <div className="pt-2"><TerminalAuditForm /></div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}