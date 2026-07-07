"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, Search, MapPin, Cpu, MessageSquare, Sparkles, Mic, CheckCircle2, Eye, Compass, Layers, ChevronDown } from 'lucide-react';
import SchemaMarkup from "@/components/SchemaMarkup";
import FuturisticHero from '@/components/FuturisticHero';
import InteractiveNodes from '@/components/InteractiveNodes';
import Magnetic from '@/components/Magnetic';
import { useLanguage } from '@/context/LanguageContext';

export default function Home() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const { t } = useLanguage();

  const futureCards = [
    { title: "Google Search", icon: Search, desc: "Dominate conventional layouts, snippet components, and structured results matrices.", highlight: "Classic SEO Core" },
    { title: "Google Maps", icon: MapPin, desc: "Acquire localized grid dominance and map visibility vectors.", highlight: "Local 3-Pack Authority" },
    { title: "AI Overviews", icon: Cpu, desc: "Format entity architecture to safely anchor brand citations in direct AI summaries.", highlight: "LLM Citation Vector" },
    { title: "ChatGPT", icon: MessageSquare, desc: "Influence real-time conversational retrieval indexes and user choice patterns.", highlight: "OpenAI Index Sync" },
    { title: "Gemini", icon: Cpu, desc: "Optimize structural knowledge graphs for native multimodal platform feeds.", highlight: "Google Ecosystem Flow" },
    { title: "Voice Search", icon: Mic, desc: "Target naturally articulated consumer inquiries and contextual semantic keys.", highlight: "Conversational Query Captures" }
  ];

  const plans = [
    { name: "Website Search Optimization", price: "₹15,000", desc: "Architect foundational organic pipelines targeting explicit search algorithms.", features: ["Website Audit", "Keyword Research", "Competitor Analysis", "Technical SEO", "On-Page SEO"], recommended: false },
    { name: "Google Business Optimization", price: "₹8,000", desc: "Capture geolocated transactional requests through geographic profile scaling.", features: ["GBP Optimization", "GBP Audit", "Local Keyword Research", "Competitor Analysis", "Review Strategy"], recommended: false },
    { name: "Complete Search Visibility Solution", price: "₹20,000", desc: "The ultimate unified blueprint maximizing coverage across all modern environments.", features: ["Website Search Audit & Action Plan", "Full Local Map Optimization Pack", "AI Engine Optimization Framework", "Cross-Platform Competitor Strategy", "Ongoing Technical Health Tracking"], recommended: true }
  ];

  const valueProps = [
    { title: "Transparency Over Complexity", desc: "No ambiguous jargon metrics. We focus strictly on visible spatial share, authentic traffic numbers, and conversion indicators." },
    { title: "Built For Modern Search", desc: "We map workflows directly to live algorithmic trends: Generative AI summary generation, vector matching, and structured map profiles." },
    { title: "Education-Driven Approach", desc: "We empower your team with deep clarity, clear breakdowns, and detailed actionable data frameworks." },
    { title: "Sustainable Growth Focus", desc: "We construct foundational systems designed to resist algorithm updates without relying on black-hat tactics." }
  ];

  const steps = [
    { step: "01", name: "Audit", desc: "Deep analytical crawling of current discovery indexes and missing citation points." },
    { step: "02", name: "Strategy", desc: "Formulating architectural maps matching target buyer inquiries to answers." },
    { step: "03", name: "Optimization", desc: "Execution of structural code adjustments, technical fixes, and spatial asset deployment." },
    { step: "04", name: "Growth", desc: "Continuous monitoring, refinement, and ongoing capture of emerging AI visibility frameworks." }
  ];

  const faqs = [
    { q: "What is Search Optimization?", a: "Search Optimization is the methodical practice of calibrating public digital assets to ensure clear discovery, processing, and indexing by modern lookup systems." },
    { q: "What is AEO?", a: "AEO (Answer Engine Optimization) focuses on optimizing content frameworks specifically for conversational LLMs like AI Overviews, ChatGPT, and Gemini to use as authoritative source citations." }
  ];

  const insights = [
    { cat: "AI Search & AEO", title: "Why AI Apps Like ChatGPT & Gemini Don't Mention Your Business", date: "June 2026", readTime: "5 min read" }
  ];

  const scrollReveal = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <div className="relative w-full min-h-screen overflow-x-hidden selection:bg-purple-500/30 selection:text-white">
      <InteractiveNodes />

      <div className="relative z-10 w-full bg-transparent">
        <FuturisticHero />

        {/* 2. WHAT IS SEARCH VISIBILITY? (LOCALIZED) */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-120px" }} variants={scrollReveal} className="py-24 border-t border-white/[0.04] bg-black/40 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-xs font-bold uppercase tracking-widest text-[#8B5CF6]">{t('sec2Badge')}</h2>
                <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">{t('sec2Title')}</h3>
                <p className="text-[#A1A1AA] leading-relaxed text-sm sm:text-base">{t('sec2Desc')}</p>
              </div>
              <div className="bg-zinc-900/40 backdrop-blur-md rounded-2xl border border-white/10 p-8 relative overflow-hidden space-y-6 shadow-2xl">
                <h4 className="text-xs font-bold text-[#A855F7] tracking-wider uppercase">Strategic Parameters</h4>
                <div className="space-y-4">
                  <div className="flex gap-3 items-start">
                    <div className="p-2 rounded-lg bg-black/40 border border-white/10 text-white"><Eye className="w-4 h-4" /></div>
                    <div>
                      <h5 className="text-sm font-medium text-white">Dynamic Tracking Matrix</h5>
                      <p className="text-xs text-[#A1A1AA]">Cross-platform spatial mapping vectors updated live across operational node clusters.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* 3. FUTURE CARDS GRID (LOCALIZED HEADER) */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-120px" }} variants={scrollReveal} className="py-24 border-y border-white/[0.04] bg-black/20 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <h2 className="text-xs font-bold uppercase tracking-widest text-[#A855F7]">{t('sec3Badge')}</h2>
              <h3 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">{t('sec3Title')}</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {futureCards.map((card, idx) => {
                const IconComp = card.icon;
                return (
                  <div key={idx} className="bg-zinc-950/40 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-xl">
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 rounded-xl bg-black/50 border border-white/10 text-[#8B5CF6]"><IconComp className="w-5 h-5" /></div>
                      <span className="text-[10px] font-semibold text-[#A855F7] bg-[#A855F7]/10 px-2.5 py-1 rounded-full border border-[#A855F7]/20">{card.highlight}</span>
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">{card.title}</h4>
                    <p className="text-xs text-[#A1A1AA] leading-relaxed">{card.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.section>

        {/* 4. SOLUTIONS & PRICING (LOCALIZED HEADER) */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-120px" }} variants={scrollReveal} className="py-24 bg-black/40 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <h2 className="text-xs font-bold uppercase tracking-widest text-[#8B5CF6]">{t('sec4Badge')}</h2>
              <h3 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">{t('sec4Title')}</h3>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              {plans.map((plan, idx) => (
                <div key={idx} className={`bg-zinc-950/40 backdrop-blur-xl border rounded-2xl p-8 relative flex flex-col justify-between transition-all ${plan.recommended ? 'border-[#8B5CF6] bg-zinc-900/50 lg:scale-105 z-10' : 'border-white/10'}`}>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">{plan.name}</h4>
                    <p className="text-xs text-[#A1A1AA] mb-6 min-h-[32px]">{plan.desc}</p>
                    <div className="text-4xl font-extrabold text-white mb-6">{plan.price}</div>
                    <div className="h-[1px] bg-white/10 mb-6" />
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-center gap-2.5 text-xs text-[#A1A1AA]"><CheckCircle2 className="w-4 h-4 text-[#8B5CF6]" />{feat}</li>
                      ))}
                    </ul>
                  </div>
                  <Link href="/contact" className={`w-full py-3 rounded-xl text-xs font-semibold text-center ${plan.recommended ? 'purple-gradient text-white' : 'bg-black/50 text-white border border-white/10'}`}>
                    Select Framework Plan
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* FINAL CLOSING CTA FOOTER BLOCK */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={scrollReveal} className="py-32 relative bg-transparent text-center flex flex-col items-center justify-center">
          <div className="max-w-4xl mx-auto px-4 space-y-8 flex flex-col items-center">
            <h3 className="text-2xl font-bold text-white tracking-tight">Ready to Maximize Your Search Real Estate?</h3>
            <Magnetic>
              <Link href="/contact" className="px-10 py-5 rounded-xl font-bold purple-gradient text-white shadow-2xl inline-flex items-center gap-3 uppercase tracking-widest text-xs border border-white/10">
                Launch Free Visibility Audit <ArrowUpRight className="w-4 h-4" />
              </Link>
            </Magnetic>
          </div>
        </motion.section>
      </div>
    </div>
  );
}