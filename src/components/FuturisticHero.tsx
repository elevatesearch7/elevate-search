'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, MapPin, Cpu, X, Sparkles } from 'lucide-react';
import TerminalAuditForm from '@/components/AuditForm';

export default function FuturisticHero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Animation variants for entering elements
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25, filter: 'blur(8px)' },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: 'blur(0px)',
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <div className="relative w-full min-h-screen bg-black text-white flex flex-col items-center justify-center py-20 overflow-hidden">
      
      {/* Ambient Glow Lighting Backdrops */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/10 rounded-full filter blur-[130px] pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] bg-indigo-600/10 rounded-full filter blur-[120px] pointer-events-none mix-blend-screen" />

      {/* Main Structural Layout Grid Container */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-5xl mx-auto text-center px-4 space-y-12"
      >
        {/* Core Header Hook */}
        <div className="space-y-4">
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/5 text-purple-400 text-xs font-semibold uppercase tracking-widest mx-auto shadow-[0_0_15px_rgba(168,85,247,0.15)]"
          >
            <Sparkles className="w-3.5 h-3.5 animate-pulse" /> Complete Multi-Platform Visibility
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="text-4xl sm:text-6xl font-extrabold tracking-tight bg-gradient-to-b from-white via-neutral-200 to-neutral-400 bg-clip-text text-transparent max-w-4xl mx-auto leading-[1.15]"
          >
            Get Found Everywhere Your Customers Are Searching
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="text-sm sm:text-base text-zinc-400 max-w-2xl mx-auto leading-relaxed"
          >
            Traditional SEO isn't enough anymore. We optimize your business profile so customers find you on classic Google Search, Google Maps, and modern AI engines like ChatGPT and Gemini.
          </motion.p>
        </div>

        {/* Simplified Bento Box Grid Explaining Core Pillars */}
        <motion.div 
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full text-left mt-8"
        >
          {/* Card 1: SEO + AEO (Spans 2 columns) */}
          <div className="md:col-span-2 group relative p-6 bg-zinc-950/40 backdrop-blur-md border border-white/[0.05] hover:border-purple-500/30 rounded-2xl transition-all duration-500 flex flex-col justify-between overflow-hidden shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-full filter blur-xl group-hover:bg-purple-500/10 transition-colors duration-500" />
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                <Search className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-purple-400 transition-colors">Google Search & AI Overviews (SEO + AEO)</h3>
              <p className="text-xs text-zinc-400 leading-relaxed max-w-xl">
                We make sure your website ranks on the first page of standard Google search results. Plus, we optimize your content so Google's new AI summaries display your company as the recommended choice.
              </p>
            </div>
            <div className="mt-6 text-[10px] text-purple-400/70 tracking-wider font-mono uppercase">Traditional Rank + Generative Summary Mapping</div>
          </div>

          {/* Card 2: Local SEO */}
          <div className="group relative p-6 bg-zinc-950/40 backdrop-blur-md border border-white/[0.05] hover:border-indigo-500/30 rounded-2xl transition-all duration-500 flex flex-col justify-between overflow-hidden shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-indigo-400 transition-colors">Google Maps (Local SEO)</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Fix your location rankings. We set up and calibrate your Google Business Profile to pull in nearby customers who are ready to make a purchase.
              </p>
            </div>
            <div className="mt-6 text-[10px] text-indigo-400/70 tracking-wider font-mono uppercase">Map Grid Domination // Active</div>
          </div>

          {/* Card 3: GEO */}
          <div className="group relative p-6 bg-zinc-950/40 backdrop-blur-md border border-white/[0.05] hover:border-emerald-500/30 rounded-2xl transition-all duration-500 flex flex-col justify-between overflow-hidden shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">AI Engine Visibility (GEO)</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                When consumers look for alternatives or recommendations directly inside apps like ChatGPT and Gemini, we make sure those AI algorithms pull your information.
              </p>
            </div>
            <div className="mt-6 text-[10px] text-emerald-400/70 tracking-wider font-mono uppercase">ChatGPT & Gemini Index Synchronization</div>
          </div>

          {/* Interactive Card 4: Action Bridge CTA Container */}
          <div 
            onClick={() => setIsModalOpen(true)}
            className="md:col-span-2 group relative p-6 bg-gradient-to-r from-purple-950/30 to-indigo-900/30 backdrop-blur-md border border-purple-500/40 hover:border-purple-400 rounded-2xl transition-all duration-500 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 overflow-hidden shadow-[0_4px_30px_rgba(124,58,237,0.15)] cursor-pointer hover:scale-[1.01]"
          >
            {/* Moving Light Shimmer Strip */}
            <div className="absolute top-0 h-full w-1/3 transform -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent -left-full group-hover:animate-[sweep_2s_infinite_linear]" />
            
            <div className="space-y-1 relative z-10">
              <h3 className="text-base font-bold text-white group-hover:text-purple-300 transition-colors">Wondering why your website isn't bringing in leads?</h3>
              <p className="text-xs text-zinc-400 max-w-sm">Click here to launch a free system scan request with our technical team instantly.</p>
            </div>
            <div className="inline-flex items-center gap-2 text-xs font-bold text-purple-400 group-hover:text-white transition-colors uppercase tracking-wider self-start sm:self-auto bg-purple-500/10 border border-purple-500/20 px-4 py-2 rounded-xl group-hover:bg-purple-600 transition-all duration-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
              </span>
              Initialize Form Array
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* FLOATING TRANSPARENT GLASS AUDIT FORM MODAL */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            
            {/* Backdrop Dimmer Shield Overlay */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-black/70 backdrop-blur-md"
            />

            {/* Glassmorphic Container Box */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5, bounce: 0.15 }}
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-zinc-950/70 backdrop-blur-2xl border border-white/10 p-6 sm:p-10 rounded-3xl shadow-2xl space-y-6 scrollbar-thin scrollbar-thumb-zinc-800"
            >
              {/* Header Title Bar */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="space-y-1">
                  <h2 className="text-xl font-bold bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
                    Initialize System Diagnosis
                  </h2>
                  <p className="text-xs text-zinc-500">Fill parameters below to verify index status vectors</p>
                </div>
                
                {/* Floating Dismiss Action Cross Button */}
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 text-zinc-400 hover:text-white hover:bg-white/5 rounded-xl border border-white/5 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Injected Lead Capturing Terminal Asset */}
              <div className="pt-2">
                <TerminalAuditForm />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}