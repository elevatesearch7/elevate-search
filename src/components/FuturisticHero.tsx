'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, Cpu, MessageSquare, ArrowDown } from 'lucide-react';

export default function FuturisticHero() {
  // Cinematic transition configurations
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
      
      {/* High-End Cyberpunk Ambient Glow Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/10 rounded-full filter blur-[130px] pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] bg-indigo-600/10 rounded-full filter blur-[120px] pointer-events-none mix-blend-screen" />

      {/* Main Container */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-5xl mx-auto text-center px-4 space-y-12"
      >
        {/* Core Hook Section */}
        <div className="space-y-4">
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/5 text-purple-400 text-xs font-semibold uppercase tracking-widest mx-auto shadow-[0_0_15px_rgba(168,85,247,0.15)]"
          >
            <SparklesIcon className="w-3.5 h-3.5 animate-pulse text-purple-400" /> Complete Multi-Platform Visibility
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

        {/* Simplified Bento Box Grid Explaining Your Core Pillars */}
        <motion.div 
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full text-left mt-8"
        >
          {/* Card 1: SEO & AEO (Spans 2 columns) */}
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

          {/* Card 4: Action Bridge CTA Container */}
          <div className="md:col-span-2 group relative p-6 bg-gradient-to-r from-purple-950/20 to-indigo-900/20 backdrop-blur-md border border-purple-500/20 rounded-2xl transition-all duration-500 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 overflow-hidden shadow-[0_4px_30px_rgba(124,58,237,0.05)]">
            <div className="space-y-1">
              <h3 className="text-base font-bold text-white">Wondering why your website isn't bringing in leads?</h3>
              <p className="text-xs text-zinc-400 max-w-sm">Scroll down to launch a free system scan request with our technical team below.</p>
            </div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-purple-400 group-hover:text-white transition-colors uppercase tracking-wider self-start sm:self-auto animate-pulse">
              Scan Your Site Parameters Below <ArrowDown className="w-3.5 h-3.5" />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

// Simple internal icon to avoid breaking missing component references
function SparklesIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
    </svg>
  );
}