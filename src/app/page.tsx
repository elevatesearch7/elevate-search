"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ArrowUpRight, Search, MapPin, Cpu, MessageSquare, 
  Mic, CheckCircle2, Eye, Compass, ChevronDown 
} from 'lucide-react';
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
    { q: "What is AEO?", a: "AEO (Answer Engine Optimization) focuses on optimizing content frameworks specifically for conversational LLMs like AI Overviews, ChatGPT, and Gemini to use as authoritative source citations." },
    { q: "What is Local SEO?", a: "Local SEO focuses on enhancing discoverability within specific physical operational radii, matching localized intent directly to brick-and-mortar operations." },
    { q: "Why is Google Business Profile important?", a: "Your Google Business Profile serves as the core physical layout verification layer feeding maps, location filters, and localized transactional lookups." }
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

  const sectionParent = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.03 } }
  };

  const slideLeft = {
    hidden: { opacity: 0, x: -40, filter: 'blur(4px)' },
    visible: { opacity: 1, x: 0, filter: 'blur(0px)', transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
  };

  const slideRight = {
    hidden: { opacity: 0, x: 40, filter: 'blur(4px)' },
    visible: { opacity: 1, x: 0, filter: 'blur(0px)', transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
  };

  const cascadeUp = {
    hidden: { opacity: 0, y: 25, filter: 'blur(4px)' },
    visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <div className="w-full h-screen overflow-y-auto snap-y snap-mandatory scroll-smooth bg-[#050505] text-white selection:bg-purple-500/30">
      <SchemaMarkup type="FAQPage" data={faqSchemaData} />
      <InteractiveNodes />

      {/* SLIDE 1: HERO CONTAINER TIMELINE */}
      <div className="w-full min-h-screen snap-start snap-always flex flex-col justify-start relative">
        <FuturisticHero />
      </div>

      {/* SLIDE 2: OPERATIONAL CORE SECTION */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }} variants={sectionParent}
        className="w-full min-h-screen snap-start snap-always flex flex-col justify-start pt-24 xl:pt-28 pb-12 px-4 sm:px-6 lg:px-8 bg-black/40 backdrop-blur-md border-t border-white/[0.02]"
      >
        <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center my-auto">
          <motion.div variants={slideLeft} className="space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#8B5CF6] block">{t('sec2Badge')}</span>
            <h3 className="text-2xl sm:text-4xl font-black tracking-tight leading-tight">{t('sec2Title')}</h3>
            <p className="text-[#A1A1AA] leading-relaxed text-xs sm:text-sm lg:text-base max-w-xl">{t('sec2Desc')}</p>
          </motion.div>
          
          <motion.div variants={slideRight} className="bg-zinc-950/60 backdrop-blur-md rounded-2xl border border-white/10 p-6 sm:p-8 relative overflow-hidden space-y-5 shadow-2xl">
            <h4 className="text-xs font-bold text-[#A855F7] tracking-wider uppercase">Strategic Core Parameters</h4>
            <div className="space-y-4">
              <div className="flex gap-3.5 items-start">
                <div className="p-2 rounded-lg bg-black/60 border border-white/10 text-purple-400 flex-shrink-0"><Eye className="w-4 h-4" /></div>
                <div>
                  <h5 className="text-xs sm:text-sm font-semibold text-white mb-0.5">What is it?</h5>
                  <p className="text-[11px] sm:text-xs text-[#A1A1AA] leading-relaxed">A multi-platform discovery strategy targeting websites, map interfaces, and LLM answer systems.</p>
                </div>
              </div>
              <div className="flex gap-3.5 items-start">
                <div className="p-2 rounded-lg bg-black/60 border border-white/10 text-indigo-400 flex-shrink-0"><Compass className="w-4 h-4" /></div>
                <div>
                  <h5 className="text-xs sm:text-sm font-semibold text-white mb-0.5">Why does it matter?</h5>
                  <p className="text-[11px] sm:text-xs text-[#A1A1AA] leading-relaxed">Legacy SEO approaches fail to rank on multi-faceted Search Result Pages (SERPs) and AI answers.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* SLIDE 3: UNIFIED PLATFORMS CORE MATRIX (FIXED HEADER COUPLING) */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.15 }} variants={sectionParent}
        className="w-full min-h-screen snap-start snap-always flex flex-col justify-start pt-24 xl:pt-28 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black/20 to-zinc-950/10 backdrop-blur-sm border-t border-white/[0.02]"
      >
        <div className="max-w-7xl w-full mx-auto space-y-6 lg:space-y-8 my-auto">
          <motion.div variants={cascadeUp} className="text-center max-w-2xl mx-auto space-y-1">
            <span className="text-xs font-bold uppercase tracking-widest text-[#A855F7] block">{t('sec3Badge')}</span>
            <h3 className="text-2xl sm:text-4xl font-black text-white tracking-tight">{t('sec3Title')}</h3>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
            {futureCards.map((card, idx) => {
              const IconComp = card.icon;
              return (
                <motion.div 
                  key={idx} variants={cascadeUp}
                  className="bg-zinc-950/50 backdrop-blur-md border border-white/10 rounded-xl p-4 sm:p-5 transition-all duration-500 hover:border-purple-500/40 hover:bg-zinc-900/40 group relative overflow-hidden shadow-xl"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2 rounded-lg bg-black/60 border border-white/10 text-[#8B5CF6] group-hover:text-purple-400 transition-colors"><IconComp className="w-4 h-4" /></div>
                    <span className="text-[9px] font-semibold text-[#A855F7] bg-[#A855F7]/10 px-2.5 py-0.5 rounded-full border border-[#A855F7]/20">{card.highlight}</span>
                  </div>
                  <h4 className="text-sm sm:text-base font-bold text-white mb-1">{card.title}</h4>
                  <p className="text-[11px] sm:text-xs text-[#A1A1AA] leading-relaxed">{card.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* SLIDE 4: SOLUTIONS & PRICING ENGINE */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.15 }} variants={sectionParent}
        className="w-full min-h-screen snap-start snap-always flex flex-col justify-start pt-24 xl:pt-28 pb-12 px-4 sm:px-6 lg:px-8 bg-black/40 backdrop-blur-md border-t border-white/[0.02]"
      >
        <div className="max-w-7xl w-full mx-auto space-y-6 lg:space-y-8 my-auto">
          <motion.div variants={cascadeUp} className="text-center max-w-2xl mx-auto space-y-1">
            <span className="text-xs font-bold uppercase tracking-widest text-[#8B5CF6] block">{t('sec4Badge')}</span>
            <h3 className="text-2xl sm:text-4xl font-black text-white tracking-tight">{t('sec4Title')}</h3>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6 items-start">
            {plans.map((plan, idx) => (
              <motion.div key={idx} variants={cascadeUp} className={`bg-zinc-950/40 backdrop-blur-xl border rounded-xl p-5 lg:p-6 relative flex flex-col justify-between transition-all duration-500 ${plan.recommended ? 'border-[#8B5CF6] bg-zinc-900/50 lg:scale-105 z-10 shadow-2xl' : 'border-white/10'}`}>
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-white mb-1">{plan.name}</h4>
                  <p className="text-[11px] text-[#A1A1AA] mb-3 min-h-[32px]">{plan.desc}</p>
                  <div className="text-2xl sm:text-3xl font-extrabold text-white mb-3">{plan.price}</div>
                  <div className="h-[1px] bg-white/10 mb-3" />
                  <ul className="space-y-1.5 mb-5">
                    {plan.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2 text-xs text-[#A1A1AA]"><CheckCircle2 className="w-3.5 h-3.5 text-[#8B5CF6] flex-shrink-0" />{feat}</li>
                    ))}
                  </ul>
                </div>
                <Link href="/contact" className={`w-full py-2 rounded-xl text-xs font-semibold text-center transition-all ${plan.recommended ? 'purple-gradient text-white shadow-lg' : 'bg-black/50 text-white border border-white/10'}`}>
                  Select Framework Plan
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* SLIDE 5: STRATEGIC DIFFERENCE */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.15 }} variants={sectionParent}
        className="w-full min-h-screen snap-start snap-always flex flex-col justify-start pt-24 xl:pt-28 pb-12 px-4 sm:px-6 lg:px-8 bg-transparent border-t border-white/[0.02]"
      >
        <div className="max-w-7xl w-full mx-auto space-y-8 my-auto">
          <motion.div variants={cascadeUp} className="text-center max-w-xl mx-auto space-y-1">
            <span className="text-xs font-bold uppercase tracking-widest text-[#A855F7] block">The Strategic Difference</span>
            <h3 className="text-2xl sm:text-4xl font-black text-white tracking-tight">Why Choose Elevate Search</h3>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {valueProps.map((vp, idx) => (
              <motion.div key={idx} variants={cascadeUp} className="bg-zinc-950/40 backdrop-blur-sm border border-white/5 p-4 rounded-xl space-y-1 shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="w-1 h-4 purple-gradient rounded-full" />
                  <h4 className="text-sm font-bold text-white">{vp.title}</h4>
                </div>
                <p className="text-xs text-[#A1A1AA] leading-relaxed">{vp.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* SLIDE 6: EXECUTION PIPELINE WORKFLOW */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.15 }} variants={sectionParent}
        className="w-full min-h-screen snap-start snap-always flex flex-col justify-start pt-24 xl:pt-28 pb-12 px-4 sm:px-6 lg:px-8 bg-black/40 backdrop-blur-md border-t border-white/[0.02]"
      >
        <div className="max-w-7xl w-full mx-auto space-y-8 my-auto">
          <motion.div variants={cascadeUp} className="text-center max-w-xl mx-auto space-y-1">
            <span className="text-xs font-bold uppercase tracking-widest text-[#8B5CF6] block">Execution Workflow</span>
            <h3 className="text-2xl sm:text-4xl font-black text-white tracking-tight">How We Work</h3>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative">
            {steps.map((st, idx) => (
              <motion.div key={idx} variants={cascadeUp} className="bg-zinc-950/40 backdrop-blur-sm border border-white/10 rounded-xl p-4 relative overflow-hidden group shadow-xl">
                <span className="absolute -top-3 -right-1 text-5xl font-black text-white/5 select-none tracking-tighter">{st.step}</span>
                <span className="text-[9px] font-bold text-[#8B5CF6] block mb-1">{st.step} // Phase</span>
                <h4 className="text-sm font-bold text-white mb-1">{st.name}</h4>
                <p className="text-xs text-[#A1A1AA] leading-relaxed">{st.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* SLIDE 7: FAQ KNOWLEDGE HUB */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.15 }} variants={sectionParent}
        className="w-full min-h-screen snap-start snap-always flex flex-col justify-start pt-24 xl:pt-28 pb-12 px-4 sm:px-6 lg:px-8 bg-transparent border-t border-white/[0.02]"
      >
        <div className="max-w-3xl w-full mx-auto space-y-8 my-auto">
          <motion.div variants={cascadeUp} className="text-center space-y-1">
            <span className="text-xs font-bold uppercase tracking-widest text-[#A855F7] block">Information Hub</span>
            <h3 className="text-2xl sm:text-4xl font-black text-white tracking-tight">Frequently Asked Questions</h3>
          </motion.div>
          <motion.div variants={cascadeUp} className="space-y-2.5">
            {faqs.map((faq, idx) => {
              const isSelected = activeFaq === idx;
              return (
                <div key={idx} className="bg-zinc-950/40 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden shadow-md">
                  <button onClick={() => setActiveFaq(isSelected ? null : idx)} className="w-full text-left p-4 flex items-center justify-between text-white font-medium text-xs sm:text-sm focus:outline-none bg-zinc-900/20 hover:bg-zinc-900/40 transition-colors">
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-3.5 h-3.5 text-[#A1A1AA] transition-transform duration-300 ${isSelected ? 'transform rotate-180 text-white' : ''}`} />
                  </button>
                  <motion.div initial={false} animate={{ height: isSelected ? "auto" : 0, opacity: isSelected ? 1 : 0 }} transition={{ duration: 0.2 }} className="overflow-hidden">
                    <p className="p-4 text-xs text-[#A1A1AA] leading-relaxed border-t border-white/5 bg-black/20">{faq.a}</p>
                  </motion.div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </motion.section>

      {/* SLIDE 8: RESEARCH INSIGHTS */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.15 }} variants={sectionParent}
        className="w-full min-h-screen snap-start snap-always flex flex-col justify-start pt-24 xl:pt-28 pb-12 px-4 sm:px-6 lg:px-8 bg-black/40 backdrop-blur-md border-t border-white/[0.02]"
      >
        <div className="max-w-7xl w-full mx-auto space-y-8 my-auto">
          <div className="space-y-1 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-[#8B5CF6] block">Intel & Research</span>
            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">Latest Insights</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {insights.map((ins, idx) => (
              <motion.div key={idx} variants={cascadeUp} className="bg-zinc-950/40 backdrop-blur-sm border border-white/10 rounded-xl p-4 flex flex-col justify-between group shadow-xl">
                <div className="space-y-2">
                  <span className="inline-block text-[9px] font-bold uppercase tracking-wider text-[#A855F7] bg-[#A855F7]/10 px-2.5 py-0.5 rounded-full">{ins.cat}</span>
                  <h4 className="text-xs sm:text-sm font-bold text-white leading-snug group-hover:text-[#8B5CF6] transition-colors">{ins.title}</h4>
                </div>
                <div className="flex items-center justify-between text-[10px] text-[#A1A1AA] pt-3 mt-3 border-t border-white/5">
                  <span>{ins.date}</span>
                  <span>{ins.readTime}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* SLIDE 9: CLOSING GATEWAY BRIDGE */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.25 }} variants={cascadeUp}
        className="w-full min-h-screen snap-start snap-always flex flex-col justify-start pt-24 xl:pt-28 pb-12 px-4 text-center bg-transparent border-t border-white/[0.02]"
      >
        <div className="max-w-4xl mx-auto space-y-6 flex flex-col items-center my-auto">
          <h3 className="text-xl sm:text-3xl font-black text-white tracking-tight">Ready to Maximize Your Search Real Estate?</h3>
          <Magnetic>
            <Link href="/contact" className="px-8 py-4 rounded-xl font-bold purple-gradient text-white shadow-2xl inline-flex items-center gap-3 uppercase tracking-widest text-xs border border-white/10">
              Launch Free Visibility Audit <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </Magnetic>
        </div>
      </motion.section>
    </div>
  );
}