"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ArrowUpRight, Search, MapPin, Cpu, MessageSquare, 
  Mic, CheckCircle2, Eye, Compass, Layers, ChevronDown
} from 'lucide-react';
import SchemaMarkup from "@/components/SchemaMarkup";
import FuturisticHero from '@/components/FuturisticHero';
import InteractiveNodes from '@/components/InteractiveNodes';
import Magnetic from '@/components/Magnetic';

export default function Home() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

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
    { q: "What is AEO?", a: "AEO (Answer Engine Optimization) focuses on optimizing content frameworks specifically for conversational LLMs like AI Overviews, ChatGPT, and Gemini to use as authoritative source citations." },
    { q: "What is Local SEO?", a: "Local SEO focuses on enhancing discoverability within specific physical operational radii, matching localized intent directly to brick-and-mortar operations." },
    { q: "Why is Google Business Profile important?", a: "Your Google Business Profile serves as the core physical layout verification layer feeding maps, location filters, and localized transactional lookups." },
    { q: "How long does SEO take?", a: "Measurable changes typically appear within 3 to 6 months as platforms re-crawl networks, cross-verify entity data, and update historical authority records." },
    { q: "What is a Website Audit?", a: "A technical evaluation identifying rendering speed issues, broken layout architectures, canonical structure defects, and structural blocks limiting crawlers." },
    { q: "How much does Search Optimization cost?", a: "Our dedicated targeted frameworks scale from ₹8,000 to ₹20,000 based on scale, with individual audits available between ₹500 and ₹1,000." }
  ];

  const insights = [
    { cat: "AI Search & AEO", title: "Why AI Apps Like ChatGPT & Gemini Don't Mention Your Business", date: "June 2026", readTime: "5 min read" },
    { cat: "Local Search", title: "Disappearing From Google Maps: Why Your Competitors Get the Calls", date: "May 2026", readTime: "4 min read" },
    { cat: "Website Optimization", title: "The Cost of a Slow Website: Why Google Deserts Your Pages", date: "May 2026", readTime: "6 min read" }
  ];

  const faqSchemaData = {
    mainEntity: faqs.map(f => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a }
    }))
  };

  const scrollReveal = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  return (
    <div className="relative w-full min-h-screen overflow-x-hidden selection:bg-purple-500/30 selection:text-white">
      <SchemaMarkup type="FAQPage" data={faqSchemaData} />
      <style>{`
        @keyframes sweep { 0% { left: -100%; } 100% { left: 200%; } }
      `}</style>

      {/* Layer 1: Background Constellation Elements */}
      <InteractiveNodes />

      {/* Layer 2: Scrolling Front Content Section Containers */}
      <div className="relative z-10 w-full bg-transparent">
        
        <FuturisticHero />

        {/* Operational Scope Strategy Section */}
        <motion.section 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-120px" }} variants={scrollReveal}
          className="py-24 border-t border-white/[0.04] bg-black/40 backdrop-blur-md"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-xs font-bold uppercase tracking-widest text-[#8B5CF6]">Operational Core</h2>
                <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">What Exactly Is Modern Search Visibility?</h3>
                <p className="text-[#A1A1AA] leading-relaxed text-sm sm:text-base">
                  Traditional rankings are obsolete. Search layouts are now filled with interactive components, local mapping grids, and real-time AI answers. Modern Search Visibility means structuring your business identity so it is correctly parsed, trusted, and recommended across all extraction layers simultaneously.
                </p>
              </div>
              <div className="bg-zinc-900/40 backdrop-blur-md rounded-2xl border border-white/10 p-8 relative overflow-hidden space-y-6 shadow-2xl">
                <h4 className="text-xs font-bold text-[#A855F7] tracking-wider uppercase">Strategic Core Parameters</h4>
                <div className="space-y-4">
                  <div className="flex gap-3 items-start">
                    <div className="p-2 rounded-lg bg-black/40 border border-white/10 text-white"><Eye className="w-4 h-4" /></div>
                    <div>
                      <h5 className="text-sm font-medium text-white">What is it?</h5>
                      <p className="text-xs text-[#A1A1AA]">A multi-platform discovery strategy targeting websites, map interfaces, and LLM answer systems.</p>
                    </div>
                  </div>
                  <div className="flex gap-3 items-start">
                    <div className="p-2 rounded-lg bg-black/40 border border-white/10 text-white"><Compass className="w-4 h-4" /></div>
                    <div>
                      <h5 className="text-sm font-medium text-white">Why does it matter?</h5>
                      <p className="text-xs text-[#A1A1AA]">Legacy SEO approaches fail to rank on multi-faceted Search Result Pages (SERPs) and AI answers, risking loss of market positioning and traffic visibility.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Unified Platforms Grid Section */}
        <motion.section 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-120px" }} variants={scrollReveal}
          className="py-24 border-y border-white/[0.04] bg-black/20 backdrop-blur-sm"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <h2 className="text-xs font-bold uppercase tracking-widest text-[#A855F7]">Unified Surface Coverage</h2>
              <h3 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">The Future Of Search Is Already Here</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {futureCards.map((card, idx) => {
                const IconComp = card.icon;
                return (
                  <div key={idx} className="bg-zinc-950/40 backdrop-blur-md border border-white/10 rounded-2xl p-6 transition-all duration-500 hover:border-purple-500/40 hover:bg-zinc-900/60 group relative overflow-hidden shadow-xl hover:-translate-y-1">
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 rounded-xl bg-black/50 border border-white/10 text-[#8B5CF6]">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-semibold text-[#A855F7] bg-[#A855F7]/10 px-2.5 py-1 rounded-full border border-[#A855F7]/20">
                        {card.highlight}
                      </span>
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">{card.title}</h4>
                    <p className="text-xs text-[#A1A1AA] leading-relaxed">{card.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.section>

        {/* Pricing Matrix Deck Section */}
        <motion.section 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-120px" }} variants={scrollReveal}
          className="py-24 bg-black/40 backdrop-blur-md"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <h2 className="text-xs font-bold uppercase tracking-widest text-[#8B5CF6]">Tailored Service Modules</h2>
              <h3 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">Our Solutions & Pricing</h3>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              {plans.map((plan, idx) => (
                <div key={idx} className={`bg-zinc-950/40 backdrop-blur-xl border rounded-2xl p-8 relative flex flex-col justify-between transition-all duration-500 ${plan.recommended ? 'border-[#8B5CF6] bg-zinc-900/50 lg:scale-105 z-10' : 'border-white/10 hover:border-white/20'}`}>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">{plan.name}</h4>
                    <p className="text-xs text-[#A1A1AA] mb-6 min-h-[32px]">{plan.desc}</p>
                    <div className="flex items-baseline gap-2 mb-6">
                      <span className="text-4xl font-extrabold text-white tracking-tight">{plan.price}</span>
                    </div>
                    <div className="h-[1px] bg-white/10 mb-6" />
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-center gap-2.5 text-xs text-[#A1A1AA]">
                          <CheckCircle2 className="w-4 h-4 text-[#8B5CF6] flex-shrink-0" />
                          {feat}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link href="/contact" className={`w-full py-3 rounded-xl text-xs font-semibold text-center transition-all ${plan.recommended ? 'purple-gradient text-white' : 'bg-black/50 text-white border border-white/10'}`}>
                    Select Framework Plan
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Strategic Values Section */}
        <motion.section 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-120px" }} variants={scrollReveal}
          className="py-24 bg-transparent border-t border-white/[0.04]"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            <div className="text-center max-w-2xl mx-auto space-y-4">
              <h2 className="text-xs font-bold uppercase tracking-widest text-[#A855F7]">The Strategic Difference</h2>
              <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Why Choose Elevate Search</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {valueProps.map((vp, idx) => (
                <div key={idx} className="bg-zinc-950/40 backdrop-blur-sm border border-white/5 p-6 rounded-xl space-y-2 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-1.5 h-6 purple-gradient rounded-full" />
                    <h4 className="text-base font-bold text-white">{vp.title}</h4>
                  </div>
                  <p className="text-xs text-[#A1A1AA] leading-relaxed">{vp.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Phase Workflows Section */}
        <motion.section 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-120px" }} variants={scrollReveal}
          className="py-24 bg-black/40 backdrop-blur-md border-t border-white/[0.04]"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            <div className="text-center max-w-2xl mx-auto space-y-4">
              <h2 className="text-xs font-bold uppercase tracking-widest text-[#8B5CF6]">Execution Workflow</h2>
              <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">How We Work</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
              {steps.map((st, idx) => (
                <div key={idx} className="bg-zinc-950/40 backdrop-blur-sm border border-white/10 rounded-xl p-6 relative overflow-hidden group shadow-xl">
                  <span className="absolute -top-4 -right-2 text-7xl font-black text-white/5 select-none tracking-tighter">{st.step}</span>
                  <span className="text-xs font-bold text-[#8B5CF6] block mb-2">{st.step} // Phase</span>
                  <h4 className="text-base font-bold text-white mb-2">{st.name}</h4>
                  <p className="text-xs text-[#A1A1AA] leading-relaxed">{st.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* FAQ Area Accordion Section */}
        <motion.section 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-120px" }} variants={scrollReveal}
          className="py-24 bg-transparent border-t border-white/[0.04]"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-xs font-bold uppercase tracking-widest text-[#A855F7]">Information Hub</h2>
              <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Frequently Asked Questions</h3>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, idx) => {
                const isSelected = activeFaq === idx;
                return (
                  <div key={idx} className="bg-zinc-950/40 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden shadow-md">
                    <button onClick={() => setActiveFaq(isSelected ? null : idx)} className="w-full text-left p-5 flex items-center justify-between text-white font-medium text-sm sm:text-base focus:outline-none bg-zinc-900/20 hover:bg-zinc-900/40 transition-colors">
                      <span>{faq.q}</span>
                      <ChevronDown className={`w-4 h-4 text-[#A1A1AA] transition-transform duration-300 ${isSelected ? 'transform rotate-180 text-white' : ''}`} />
                    </button>
                    <motion.div initial={false} animate={{ height: isSelected ? "auto" : 0, opacity: isSelected ? 1 : 0 }} transition={{ duration: 0.25 }} className="overflow-hidden">
                      <p className="p-5 pt-0 text-xs text-[#A1A1AA] leading-relaxed border-t border-white/5 bg-black/20">{faq.a}</p>
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.section>

        {/* Article/Insights Feed Section */}
        <motion.section 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-120px" }} variants={scrollReveal}
          className="py-24 bg-black/40 backdrop-blur-md border-y border-white/[0.04]"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
              <div className="space-y-2">
                <h2 className="text-xs font-bold uppercase tracking-widest text-[#8B5CF6]">Intel & Research</h2>
                <h3 className="text-3xl font-bold text-white tracking-tight">Latest Insights</h3>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {insights.map((ins, idx) => (
                <div key={idx} className="bg-zinc-950/40 backdrop-blur-sm border border-white/10 rounded-xl p-6 flex flex-col justify-between group shadow-xl">
                  <div className="space-y-4">
                    <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-[#A855F7] bg-[#A855F7]/10 px-2.5 py-1 rounded-full">{ins.cat}</span>
                    <h4 className="text-base font-bold text-white leading-snug group-hover:text-[#8B5CF6] transition-colors">{ins.title}</h4>
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-[#A1A1AA] pt-6 mt-6 border-t border-white/5">
                    <span>{ins.date}</span>
                    <span>{ins.readTime}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Layer 3: Magnetic Physics Anchor CTA Bridge */}
        <motion.section 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={scrollReveal}
          className="py-32 relative bg-transparent text-center flex flex-col items-center justify-center"
        >
          <div className="max-w-4xl mx-auto px-4 space-y-8 relative z-10 flex flex-col items-center">
            <h3 className="text-2xl font-bold text-white tracking-tight">Ready to Maximize Your Search Real Estate?</h3>
            <Magnetic>
              <Link 
                href="/contact" 
                className="px-10 py-5 rounded-xl font-bold purple-gradient text-white shadow-2xl shadow-purple-500/20 inline-flex items-center gap-3 hover:shadow-purple-500/40 transition-all duration-300 uppercase tracking-widest text-xs cursor-pointer border border-white/10"
              >
                Launch Free Visibility Audit <ArrowUpRight className="w-4 h-4" />
              </Link>
            </Magnetic>
          </div>
        </motion.section>
      </div>
    </div>
  );
}