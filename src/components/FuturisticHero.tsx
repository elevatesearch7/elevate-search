'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Shield, Zap, BarChart3 } from 'lucide-react';

export default function FuturisticHero() {
  // Animation presets for clean stagger effects
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, filter: 'blur(8px)' },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: 'blur(0px)',
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <div className="relative w-full min-h-screen bg-black text-white flex flex-col items-center justify-center py-20 overflow-hidden">
      
      {/* Dynamic Ambient Space Dust Glow Backgrounds */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/10 rounded-full filter blur-[120px] pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] bg-indigo-600/10 rounded-full filter blur-[120px] pointer-events-none mix-blend-screen" />

      {/* Main Content Area */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-5xl mx-auto text-center px-4 space-y-12"
      >
        {/* Kinetic Header Group */}
        <div className="space-y-4">
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/5 text-purple-400 text-xs font-semibold uppercase tracking-widest mx-auto shadow-[0_0_15px_rgba(168,85,247,0.15)]"
          >
            <Terminal className="w-3.5 h-3.5 animate-pulse" /> Next-Gen Search Infrastructure
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="text-4xl sm:text-6xl font-extrabold tracking-tight bg-gradient-to-b from-white via-neutral-200 to-neutral-500 bg-clip-text text-transparent max-w-3xl mx-auto leading-[1.15]"
          >
            Elevate Your Digital Search Visibility
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="text-sm sm:text-base text-zinc-400 max-w-xl mx-auto leading-relaxed font-medium"
          >
            Stop losing traction to broken indexing parameters. Patch system visibility dropouts with deep forensic site diagnostics.
          </motion.p>
        </div>

        {/* 2026 Bento Box Feature Grid Section */}
        <motion.div 
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full text-left mt-8"
        >
          {/* Bento Block 1: Big Feature (Spans 2 columns on desktop) */}
          <div className="md:col-span-2 group relative p-6 bg-zinc-950/40 backdrop-blur-md border border-white/[0.05] hover:border-purple-500/30 rounded-2xl transition-all duration-500 flex flex-col justify-between overflow-hidden shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-full filter blur-xl group-hover:bg-purple-500/10 transition-colors duration-500" />
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                <BarChart3 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-purple-400 transition-colors">Forensic Core Audit Mapping</h3>
              <p className="text-xs text-zinc-400 leading-relaxed max-w-md">
                We crawl through structural node layers to identify exactly where search visibility is dropping out. Get real-time deep index diagnostics.
              </p>
            </div>
            <div className="mt-6 text-[10px] text-zinc-500 tracking-wider font-mono uppercase">Pipeline Node Layer // Active</div>
          </div>

          {/* Bento Block 2: Standard Feature */}
          <div className="group relative p-6 bg-zinc-950/40 backdrop-blur-md border border-white/[0.05] hover:border-indigo-500/30 rounded-2xl transition-all duration-500 flex flex-col justify-between overflow-hidden shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-indigo-400 transition-colors">Speed Pipeline Acceleration</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Optimize structural performance payload layouts to satisfy critical search algorithm signals instantly.
              </p>
            </div>
            <div className="mt-6 text-[10px] text-zinc-500 tracking-wider font-mono uppercase">Latency Index // 0.12ms</div>
          </div>

          {/* Bento Block 3: Another Standard Feature */}
          <div className="group relative p-6 bg-zinc-950/40 backdrop-blur-md border border-white/[0.05] hover:border-emerald-500/30 rounded-2xl transition-all duration-500 flex flex-col justify-between overflow-hidden shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                <Shield className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">Authority Framework Anchor</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Secure high-authority data bridges and pipeline tunnels to establish undeniable domain trust signals.
              </p>
            </div>
            <div className="mt-6 text-[10px] text-zinc-500 tracking-wider font-mono uppercase">Trust Vector Map // Secure</div>
          </div>

          {/* Bento Block 4: Strategic CTA Box (Spans 2 columns on desktop) */}
          <div className="md:col-span-2 group relative p-6 bg-gradient-to-r from-purple-900/20 to-indigo-900/20 backdrop-blur-md border border-purple-500/20 rounded-2xl transition-all duration-500 flex items-center justify-between overflow-hidden shadow-[0_4px_30px_rgba(124,58,237,0.05)]">
            <div className="space-y-1">
              <h3 className="text-base font-bold text-white">Ready to inspect your system assets?</h3>
              <p className="text-xs text-zinc-400 max-w-sm">Scroll down to initialize a manual diagnostic audit request parameters below.</p>
            </div>
            <div className="px-4 py-2 rounded-xl bg-white text-black text-xs font-bold uppercase tracking-wider group-hover:scale-105 transition-transform duration-3xl cursor-pointer">
              Initialize System Scan
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}