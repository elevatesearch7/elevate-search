"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ArrowUpRight, Search, MapPin, Cpu, MessageSquare, 
  Mic, CheckCircle2, Eye, Compass, ChevronDown, Mail, Phone, Instagram, Layers, Globe
} from 'lucide-react';
import SchemaMarkup from "@/components/SchemaMarkup";
import FuturisticHero from '@/components/FuturisticHero';
import InteractiveNodes from '@/components/InteractiveNodes';
import Magnetic from '@/components/Magnetic';
import { useLanguage } from '@/context/LanguageContext';

export default function Home() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  // Expanded multi-platform visibility indices
  const futureCards = [
    { title: "Google Search (SEO)", icon: Search, desc: "Dominate conventional desktop and mobile layout frames, optimize featured snippets, clear out indexation bottlenecks, and configure premium structured schema matrices.", highlight: "Classic Organic Authority" },
    { title: "Google Maps (Local SEO)", icon: MapPin, desc: "Calibrate localized map coordinates and grid configurations. We push your physical profile straight into regional 3-pack boxes where high-intent buyers choose proximity services.", highlight: "Geocentric Proximity" },
    { title: "AI Overviews (AEO)", icon: Cpu, desc: "Restructure textual data to feed semantic entity relationship parsers. We configure your articles so Google's machine learning model cites your company directly in native summaries.", highlight: "Generative Summary Mapping" },
    { title: "ChatGPT Optimization", icon: MessageSquare, desc: "Inject brand tokens and clear domain citations directly into OpenAI's web crawling indexes and foundational vector memory nodes to trigger direct user recommendations.", highlight: "OpenAI Memory Index" },
    { title: "Gemini Optimization", icon: Globe, desc: "Synchronize structural knowledge graphs with Google's multimodal ecosystem, forcing real-time engine pipelines to parse and trust your product parameters instantly.", highlight: "Google DeepMind Graph" },
    { title: "Voice & Conversational (GEO)", icon: Mic, desc: "Capture natural, long-tail spoken phrasing and contextual query captures used across modern smart devices, digital home controllers, and real-time mobile assistants.", highlight: "Semantic Retrieval Sync" }
  ];

  const plans = [
    { name: "Website Search Optimization", price: "₹15,000", desc: "Architect foundational organic pipelines targeting explicit search algorithms.", features: ["Website Audit", "Keyword Research", "Competitor Analysis", "Technical SEO", "On-Page SEO"], recommended: false },
    { name: "Google Business Optimization", price: "₹8,000", desc: "Capture geolocated transactional requests through geographic profile scaling.", features: ["GBP Optimization", "GBP Audit", "Local Keyword Research", "Competitor Analysis", "Review Strategy"], recommended: false },
    { name: "Complete Search Visibility Solution", price: "₹20,000", desc: "The ultimate unified blueprint maximizing coverage across all modern environments.", features: ["Website Search Audit & Action Plan", "Full Local Map Optimization Pack", "AI Engine Optimization Framework", "Cross-Platform Competitor Strategy", "Ongoing Technical Health Tracking"], recommended: true }
  ];

  // Enriched value proposition arguments to eliminate empty screen real estate
  const valueProps = [
    { title: "Transparency Over Complexity", desc: "We eliminate ambiguous, vanity keyword trackers and vague performance charts. Our cell focuses exclusively on measurable spatial real estate share, certified index rankings, clear organic visibility vectors, and direct inbound client leads." },
    { title: "Engineered For Next-Gen Discovery", desc: "We map workflows directly to live algorithmic trends: Generative AI summary generation, conversational large language model training loops, vector matching indexing layers, and geocentered business profile calibrations." },
    { title: "Education-Driven Strategy", desc: "We reject typical opaque, hidden agency patterns. We provide your internal teams with complete transparency, comprehensive data breakdowns, clear code reviews, and actionable analytical framework blueprints." },
    { title: "Algorithm-Resilient Architecture", desc: "We engineer sustainable, zero-risk technical systems designed to survive heavy search algorithm core updates without relying on dangerous, short-term gray-hat or black-hat shortcuts." }
  ];

  // Explicitly updated workflow phases reflecting detailed audit mechanics
  const steps = [
    { step: "01", name: "Comprehensive Audit", desc: "Deep programmatic crawling analyzing on-page semantics, technical code architecture, off-page backlink and citation profiles, alongside GEO engine footprint tracking." },
    { step: "02", name: "Vector Strategy", desc: "Formulating precise entity mapping blueprints designed to connect target buyer intent vectors directly to your site assets across standard and conversational discovery grids." },
    { step: "03", name: "Structural Deployment", desc: "Execution of technical code optimizations, performance upgrades, schematic markup injections, and localized proximity map system synchronizations." },
    { step: "04", name: "Algorithmic Growth", desc: "Continuous metric monitoring, citation calibration adjustments, and real-time adjustments as new LLM models and AI answer vectors alter market parameters." }
  ];

  const faqs = [
    { q: "What is Search Optimization (SEO)?", a: "Search Optimization is the methodical practice of calibrating public digital assets to ensure clear discovery, processing, fast rendering speeds, and pristine schema indexation by modern search crawler algorithms." },
    { q: "What is Answer Engine Optimization (AEO)?", a: "AEO focuses on preparing structured text layouts and entity relationships specifically for AI summaries and conversational engines like Google's AI Overviews, ensuring your brand serves as their source citation." },
    { q: "What is Generative Engine Optimization (GEO)?", a: "GEO is the specialized discipline of refining brand footprint data so that generative AI tools like ChatGPT and Gemini pull your data during real-time recommendation queries." },
    { q: "Why is Local SEO and Google Business Profile vital?", a: "Your Google Business Profile serves as the verified location layer feeding map interfaces and proximity queries. Optimizing it ensures you dominate local map grids when nearby buyers attempt to make a transaction." }
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

      {/* SLIDE 1: INTRO HERO CONTAINER */}
      <div className="w-full min-h-screen snap-start snap-always flex flex-col justify-start relative">
        <FuturisticHero />
      </div>

      {/* SLIDE 2: OPERATIONAL CORE SECTION (Reflecting image_76ba9d.png Layout with Detailed Content) */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }} variants={sectionParent}
        className="w-full min-h-screen snap-start snap-always flex flex-col justify-start pt-24 xl:pt-28 pb-12 px-4 sm:px-6 lg:px-8 bg-black/40 backdrop-blur-md border-t border-white/[0.02]"
      >
        <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center my-auto">
          <motion.div variants={slideLeft} className="space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#8B5CF6] block">{t('sec2Badge')}</span>
            <h3 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">{t('sec2Title')}</h3>
            <p className="text-[#A1A1AA] leading-relaxed text-xs sm:text-sm lg:text-base max-w-xl">{t('sec2Desc')}</p>
          </motion.div>
          
          <motion.div variants={slideRight} className="bg-zinc-950/60 backdrop-blur-md rounded-2xl border border-white/10 p-6 sm:p-8 relative overflow-hidden space-y-6 shadow-2xl">
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />
            <h4 className="text-xs font-bold text-[#A855F7] tracking-wider uppercase">Unified Discovery Framework</h4>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              <div className="p-4 rounded-xl bg-black/30 border border-white/5 space-y-1">
                <h5 className="text-xs font-bold text-white flex items-center gap-2"><Search className="w-3.5 h-3.5 text-purple-400" /> SEO Core</h5>
                <p className="text-[11px] text-zinc-400 leading-normal">Optimizing standard indices, load velocity parameters, and layout crawl pathways.</p>
              </div>
              <div className="p-4 rounded-xl bg-black/30 border border-white/5 space-y-1">
                <h5 className="text-xs font-bold text-white flex items-center gap-2"><Cpu className="w-3.5 h-3.5 text-indigo-400" /> AEO Systems</h5>
                <p className="text-[11px] text-zinc-400 leading-normal">Formatting raw content layers into semantic relationships for direct AI summary citations.</p>
              </div>
              <div className="p-4 rounded-xl bg-black/30 border border-white/5 space-y-1">
                <h5 className="text-xs font-bold text-white flex items-center gap-2"><Layers className="w-3.5 h-3.5 text-purple-400" /> GEO Engines</h5>
                <p className="text-[11px] text-zinc-400 leading-normal">Baking brand identity variables cleanly into vector database queries powering LLM chat engines.</p>
              </div>
              <div className="p-4 rounded-xl bg-black/30 border border-white/5 space-y-1">
                <h5 className="text-xs font-bold text-white flex items-center gap-2"><MapPin className="w-3.5 h-3.5 text-indigo-400" /> Local Grid</h5>
                <p className="text-[11px] text-zinc-400 leading-normal">Calibrating physical map coordinates and GBP parameters to capture location requests.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* SLIDE 3: UNIFIED PLATFORMS CORE MATRIX */}
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

      {/* SLIDE 5: STRATEGIC DIFFERENCE (Reflecting image_76ba84.png Layout with Rich Details) */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.15 }} variants={sectionParent}
        className="w-full min-h-screen snap-start snap-always flex flex-col justify-start pt-24 xl:pt-28 pb-12 px-4 sm:px-6 lg:px-8 bg-transparent border-t border-white/[0.02]"
      >
        <div className="max-w-7xl w-full mx-auto space-y-8 my-auto">
          <motion.div variants={cascadeUp} className="text-center max-w-xl mx-auto space-y-1">
            <span className="text-xs font-bold uppercase tracking-widest text-[#A855F7] block">The Strategic Difference</span>
            <h3 className="text-2xl sm:text-4xl font-black text-white tracking-tight">Why Choose Elevate Search</h3>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
            {valueProps.map((vp, idx) => (
              <motion.div key={idx} variants={cascadeUp} className="bg-zinc-950/40 backdrop-blur-sm border border-white/5 p-5 rounded-xl space-y-2 shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-4.5 purple-gradient rounded-full" />
                  <h4 className="text-sm sm:text-base font-bold text-white">{vp.title}</h4>
                </div>
                <p className="text-xs text-[#A1A1AA] leading-relaxed">{vp.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* SLIDE 6: EXECUTION PIPELINE WORKFLOW (Enriched Phase 1 Details) */}
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
              <motion.div key={idx} variants={cascadeUp} className="bg-zinc-950/40 backdrop-blur-sm border border-white/10 rounded-xl p-5 relative overflow-hidden group shadow-xl min-h-[180px] flex flex-col justify-between">
                <div>
                  <span className="absolute -top-3 -right-1 text-5xl font-black text-white/5 select-none tracking-tighter">{st.step}</span>
                  <span className="text-[9px] font-bold text-[#8B5CF6] block mb-1">{st.step} // Phase</span>
                  <h4 className="text-sm font-bold text-white mb-2">{st.name}</h4>
                  <p className="text-xs text-[#A1A1AA] leading-relaxed">{st.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* SLIDE 7: FAQ KNOWLEDGE HUB (Reflecting image_76ba67.png Layout) */}
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

      {/* SLIDE 8: RESEARCH INSIGHTS (Reflecting image_76ba64.png Layout) */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.15 }} variants={sectionParent}
        className="w-full min-h-screen snap-start snap-always flex flex-col justify-start pt-24 xl:pt-28 pb-12 px-4 sm:px-6 lg:px-8 bg-black/40 backdrop-blur-md border-t border-white/[0.02]"
      >
        <div className="max-w-7xl w-full mx-auto space-y-8 my-auto">
          <div className="space-y-1 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-[#8B5CF6] block">Intel & Research</span>
            <h3 className="text-2xl sm:text-4xl font-black text-white tracking-tight">Latest Insights</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {insights.map((ins, idx) => (
              <motion.div key={idx} variants={cascadeUp} className="bg-zinc-950/40 backdrop-blur-sm border border-white/10 rounded-xl p-4 sm:p-5 flex flex-col justify-between group shadow-xl">
                <div className="space-y-2">
                  <span className="inline-block text-[9px] font-bold uppercase tracking-wider text-[#A855F7] bg-[#A855F7]/10 px-2.5 py-0.5 rounded-full">{ins.cat}</span>
                  <h4 className="text-xs sm:text-sm lg:text-base font-bold text-white leading-snug group-hover:text-[#8B5CF6] transition-colors">{ins.title}</h4>
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

      {/* SLIDE 9: INTEGRATED CLOSING CTA + FULL BRAND FOOTER SLIDE PANEL */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.15 }} variants={sectionParent}
        className="w-full min-h-screen snap-start snap-always flex flex-col justify-between pt-24 xl:pt-28 pb-6 px-4 sm:px-6 lg:px-8 bg-zinc-950/30 border-t border-white/[0.04] relative"
      >
        {/* Closing CTA Action Card */}
        <motion.div variants={cascadeUp} className="max-w-4xl mx-auto text-center space-y-4 lg:space-y-5 py-4 my-auto flex flex-col items-center justify-center">
          <h3 className="text-xl sm:text-3xl font-black text-white tracking-tight">Ready to Maximize Your Search Real Estate?</h3>
          <Magnetic>
            <Link href="/contact" className="px-8 py-3.5 sm:px-10 sm:py-4 rounded-xl font-bold purple-gradient text-white shadow-2xl inline-flex items-center gap-3 uppercase tracking-widest text-xs border border-white/10 hover:scale-[1.02] transition-transform">
              Launch Free Visibility Audit <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </Magnetic>
        </motion.div>

        {/* Full Grid Brand Footer Architecture */}
        <motion.div variants={cascadeUp} className="max-w-7xl w-full mx-auto border-t border-white/[0.05] pt-8 mt-auto space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 items-start text-left">
            
            {/* C1: Identity */}
            <div className="space-y-3">
              <Link href="/" className="flex items-center gap-2 group">
                <img src="/logo.webp" alt="Elevate Search Logo" className="w-8 h-8 rounded-full object-cover" />
                <span className="font-black text-lg tracking-tight select-none">
                  <span className="bg-gradient-to-b from-white to-zinc-300 bg-clip-text text-transparent">Elevate</span>
                  <span className="bg-gradient-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent ml-1">Search</span>
                </span>
              </Link>
              <p className="text-[11px] text-zinc-400 leading-relaxed">
                Be Found. Be Chosen. Elevate Search transforms enterprise visual presence across standard search engines, mapping applications, and emerging conversational AI discovery platforms.
              </p>
            </div>

            {/* C2: Site Links */}
            <div className="space-y-3">
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-zinc-300">Navigation</h4>
              <ul className="space-y-1 text-[11px] text-zinc-400 font-medium">
                <li><Link href="/" className="hover:text-white transition-colors">{t('home')}</Link></li>
                <li><Link href="/about" className="hover:text-white transition-colors">{t('about')}</Link></li>
                <li><Link href="/solutions" className="hover:text-white transition-colors">{t('solutions')}</Link></li>
                <li><Link href="/pricing" className="hover:text-white transition-colors">{t('pricing')}</Link></li>
                <li><Link href="/insights" className="hover:text-white transition-colors">{t('insights')}</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">{t('contact')}</Link></li>
              </ul>
            </div>

            {/* C3: Services */}
            <div className="space-y-3">
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-zinc-300">Optimizations</h4>
              <ul className="space-y-1.5 text-[11px] text-zinc-400 font-medium">
                <li className="flex items-center gap-2"><Search className="w-3.5 h-3.5 text-purple-400" /> <span>Website Engine SEO</span></li>
                <li className="flex items-center gap-2"><MapPin className="w-3.5 h-3.5 text-indigo-400" /> <span>Google Maps Matrix</span></li>
                <li className="flex items-center gap-2"><Cpu className="w-3.5 h-3.5 text-purple-400" /> <span>AI Overview (AEO)</span></li>
                <li className="flex items-center gap-2"><MessageSquare className="w-3.5 h-3.5 text-indigo-400" /> <span>Conversational Engines</span></li>
              </ul>
            </div>

            {/* C4: Contact Handles */}
            <div className="space-y-3">
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-zinc-300">Direct Channels</h4>
              <ul className="space-y-1.5 text-[11px] text-zinc-400 font-medium break-all">
                <li className="flex items-center gap-2"><Mail className="w-3.5 h-3.5 text-purple-400 shrink-0" /> <a href="mailto:elevatesearch7@gmail.com" className="hover:text-white transition-colors">elevatesearch7@gmail.com</a></li>
                <li className="flex items-center gap-2"><Phone className="w-3.5 h-3.5 text-purple-400 shrink-0" /> <a href="tel:+918850286037" className="hover:text-white transition-colors">8850286037</a></li>
                <li className="flex items-center gap-2"><Instagram className="w-3.5 h-3.5 text-purple-400 shrink-0" /> <a href="https://instagram.com/elevate_search" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">@elevate_search</a></li>
              </ul>
            </div>

          </div>

          {/* Sub-Copyright Data Bar */}
          <div className="pt-3 border-t border-white/[0.03] flex flex-col sm:flex-row items-center justify-between gap-2 text-[10px] text-zinc-500 font-medium">
            <p>© {currentYear} Elevate Search. All rights reserved.</p>
            <div className="flex gap-4">
              <Link href="/privacy" className="hover:text-zinc-300 transition-colors">Privacy Framework</Link>
              <Link href="/terms" className="hover:text-zinc-300 transition-colors">Terms of Vector Service</Link>
            </div>
          </div>
        </motion.div>
      </motion.section>

    </div>
  );
}