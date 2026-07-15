"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
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

  const futureCards = [
    { title: "Google Search (SEO)", icon: Search, desc: "Dominate conventional desktop and mobile layout frames, optimize featured snippets, clear out indexation bottlenecks, and configure premium structured schema matrices.", highlight: "Classic Organic Authority", img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop" },
    { title: "Google Maps (Local SEO)", icon: MapPin, desc: "Calibrate localized map coordinates and grid configurations. We push your physical profile straight into regional 3-pack boxes where high-intent buyers choose proximity services.", highlight: "Geocentric Proximity", img: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=800&auto=format&fit=crop" },
    { title: "AI Overviews (AEO)", icon: Cpu, desc: "Restructure textual data to feed semantic entity relationship parsers. We configure your articles so Google's machine learning model cites your company directly in native summaries.", highlight: "Generative Summary Mapping", img: "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=800&auto=format&fit=crop" },
    { title: "ChatGPT Optimization", icon: MessageSquare, desc: "Inject brand tokens and clear domain citations directly into OpenAI's web crawling indexes and foundational vector memory nodes to trigger direct user recommendations.", highlight: "OpenAI Memory Index", img: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=800&auto=format&fit=crop" },
    { title: "Gemini Optimization", icon: Globe, desc: "Synchronize structural knowledge graphs with Google's multimodal ecosystem, forcing real-time engine pipelines to parse and trust your product parameters instantly.", highlight: "Google DeepMind Graph", img: "https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?q=80&w=800&auto=format&fit=crop" },
    { title: "Voice & Conversational (GEO)", icon: Mic, desc: "Capture natural, long-tail spoken phrasing and contextual query captures used across modern smart devices, digital home controllers, and real-time mobile assistants.", highlight: "Semantic Retrieval Sync", img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop" }
  ];

  const plans = [
    { name: "Website Search Optimization", price: "₹15,000", desc: "Architect foundational organic pipelines targeting explicit search algorithms.", features: ["Website Audit", "Keyword Research", "Competitor Analysis", "Technical SEO", "On-Page SEO"], recommended: false, img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop" },
    { name: "Google Business Optimization", price: "₹8,000", desc: "Capture geolocated transactional requests through geographic profile scaling.", features: ["GBP Optimization", "GBP Audit", "Local Keyword Research", "Competitor Analysis", "Review Strategy"], recommended: false, img: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=800&auto=format&fit=crop" },
    { name: "Complete Search Visibility Solution", price: "₹20,000", desc: "The ultimate unified blueprint maximizing coverage across all modern environments.", features: ["Website Search Audit & Action Plan", "Full Local Map Optimization Pack", "AI Engine Optimization Framework", "Cross-Platform Competitor Strategy", "Ongoing Technical Health Tracking"], recommended: true, img: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=800&auto=format&fit=crop" }
  ];

  const valueProps = [
    { title: "Transparency Over Complexity", desc: "We completely eliminate ambiguous, vanity keyword trackers and vague performance charts. Our technical cell focuses exclusively on trackable spatial real estate share, certified index status, clear organic visibility growth vectors, and real inbound customer client leads." },
    { title: "Engineered For Next-Gen Discovery", desc: "We map engineering workflows directly to live algorithmic trends: Generative AI summary generation (AEO), conversational large language model database text training loops (GEO), vector matching indexing layers, and geocentered map database calibrations." },
    { title: "Education-Driven Strategy", desc: "We reject typical opaque, hidden agency habits. We provide your internal product management and marketing teams with total clarity, deep architectural explanations, clear development code reviews, and detailed technical framework data logs." },
    { title: "Algorithm-Resilient Architecture", desc: "We build sustainable, high-authority systems designed to withstand volatile core search algorithm drops without ever deploying risky, automated short-term shortcuts or dangerous black-hat shortcuts." },
    { title: "Elite Technical Specialization", desc: "We specialize where traditional digital marketing shops fail. From complex programmatic schema deployment layers to custom backend server caching optimizations, we address the technical logic that deep engine crawlers prioritize." },
    { title: "Continuous Model Monitoring", desc: "Modern search configurations shift weekly. We constantly run automated diagnostic scanning loops against updating AI lookup arrays and mapping indices to keep your digital parameters pristine." }
  ];

  const steps = [
    { step: "01", name: "Deep System Audit", desc: "Full comprehensive analytical examination of target platform visibility layers.", subTasks: ["On-Page Semantic Analysis", "Off-Page Citation Tracking", "Core Technical Health Audit", "GEO Engine Footprint Trace"] },
    { step: "02", name: "Vector Cluster Strategy", desc: "Formulating architectural maps to capture active buyer intent points.", subTasks: ["Competitor Real Estate Mapping", "Semantic Intent Grouping", "Entity Graph Scoping", "LLM Source Identification"] },
    { step: "03", name: "Structural Deployment", desc: "Execution of site-wide asset optimizations and code refactoring.", subTasks: ["Schema Markup Injection", "Source Performance Refactoring", "GBP Geo-Grid Calibration", "Ad-Blocker Proxy Routing"] },
    { step: "04", name: "Algorithmic Growth", desc: "Ongoing data refinement loops to protect visibility metrics over time.", subTasks: ["LLM Citation Tracking", "Model Verification Sweeps", "Index Re-Submission Loops", "Spatial Foothold Scaling"] }
  ];

  const faqs = [
    { q: "What is Search Optimization (SEO)?", a: "Search Optimization is the methodical practice of calibrating public digital assets to ensure clear discovery, processing, fast rendering speeds, and pristine schema indexation by modern search crawler algorithms." },
    { q: "What is Answer Engine Optimization (AEO)?", a: "AEO focuses on preparing structured text layouts, logical heading paths, and explicit entity relationships specifically for AI summaries and conversational answer cards like Google's AI Overviews, ensuring your brand serves as their source citation." },
    { q: "What is Generative Engine Optimization (GEO)?", a: "GEO is the specialized discipline of refining brand footprint data so that generative AI tools and standalone assistants like ChatGPT, Claude, and Gemini pull your data records during real-time recommendation queries." },
    { q: "Why is Local SEO and Google Business Profile vital?", a: "Your Google Business Profile serves as the verified location layer feeding map interfaces and proximity queries. Optimizing it ensures you dominate local map grids when nearby buyers attempt to make a transaction within your physical operating radius." },
    { q: "What role does technical page performance play in modern index rankings?", a: "Engines prioritize user experience metrics. Extreme page load lag, bloated JavaScript frameworks, and broken responsive layout structures prevent discovery crawlers from reading your text data, causing automated penalization rankings." },
    { q: "How does structured Schema Markup protect enterprise digital property?", a: "Schema markup acts as an explicit vocabulary map for web spiders. By formatting raw page text into machine-readable JSON-LD blocks, you explicitly dictate your operational boundaries, product arrays, and office coordinates directly to backend algorithm models." }
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

  const MobileSwipeHint = () => (
    <div className="flex md:hidden items-center justify-center gap-1.5 text-[9px] font-mono tracking-[0.2em] text-purple-400/40 uppercase select-none pt-2 animate-pulse">
      <span>Swipe to view more</span>
      <span className="text-xs">➔</span>
    </div>
  );

  return (
    <div className="w-full min-h-screen md:h-screen overflow-y-auto md:snap-y md:snap-mandatory scroll-smooth bg-[#050505] text-white selection:bg-purple-500/30 overflow-x-hidden">
      <SchemaMarkup type="FAQPage" data={faqSchemaData} />
      <InteractiveNodes />

      {/* SLIDE 1: INTRO HERO CONTAINER */}
      <div className="w-full min-h-screen md:snap-start md:snap-always flex flex-col justify-start relative">
        <FuturisticHero />
      </div>

      {/* SLIDE 2: OPERATIONAL CORE SECTION */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.15 }} variants={sectionParent}
        className="w-full min-h-screen md:snap-start md:snap-always flex flex-col justify-start pt-28 pb-16 md:pb-12 px-4 sm:px-6 lg:px-8 bg-black/40 backdrop-blur-md border-t border-white/[0.02]"
      >
        <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center md:my-auto">
          <motion.div variants={slideLeft} className="space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#8B5CF6] block">{t('sec2Badge')}</span>
            <h3 className="text-2xl sm:text-4xl font-black text-white tracking-tight leading-tight">{t('sec2Title')}</h3>
            <p className="text-[#A1A1AA] leading-relaxed text-xs sm:text-sm lg:text-base max-w-xl">{t('sec2Desc')}</p>
          </motion.div>
          
          <motion.div variants={slideRight} className="bg-zinc-950/60 backdrop-blur-md rounded-2xl border border-white/10 p-5 sm:p-8 relative overflow-hidden space-y-6 shadow-2xl">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center opacity-[0.06] mix-blend-screen pointer-events-none" />
            
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />
            <h4 className="text-xs font-bold text-[#A855F7] tracking-wider uppercase relative z-10">Unified Discovery Framework</h4>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1 relative z-10">
              <div className="p-4 rounded-xl bg-black/50 border border-white/5 space-y-1">
                <h5 className="text-xs font-bold text-white flex items-center gap-2"><Search className="w-3.5 h-3.5 text-purple-400" /> SEO Core</h5>
                <p className="text-[11px] text-zinc-400 leading-normal">Optimizing standard indices, load velocity parameters, and layout crawl pathways.</p>
              </div>
              <div className="p-4 rounded-xl bg-black/50 border border-white/5 space-y-1">
                <h5 className="text-xs font-bold text-white flex items-center gap-2"><Cpu className="w-3.5 h-3.5 text-indigo-400" /> AEO Systems</h5>
                <p className="text-[11px] text-zinc-400 leading-normal">Formatting raw content layers into semantic relationships for direct AI summary citations.</p>
              </div>
              <div className="p-4 rounded-xl bg-black/50 border border-white/5 space-y-1">
                <h5 className="text-xs font-bold text-white flex items-center gap-2"><Layers className="w-3.5 h-3.5 text-purple-400" /> GEO Engines</h5>
                <p className="text-[11px] text-zinc-400 leading-normal">Baking brand identity variables cleanly into vector database queries powering LLM chat engines.</p>
              </div>
              <div className="p-4 rounded-xl bg-black/50 border border-white/5 space-y-1">
                <h5 className="text-xs font-bold text-white flex items-center gap-2"><MapPin className="w-3.5 h-3.5 text-indigo-400" /> Local Grid</h5>
                <p className="text-[11px] text-zinc-400 leading-normal">Calibrating physical map coordinates and GBP parameters to capture location requests.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* SLIDE 3: UNIFIED PLATFORMS CORE MATRIX */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.1 }} variants={sectionParent}
        className="w-full min-h-screen md:snap-start md:snap-always flex flex-col justify-start pt-28 pb-16 md:pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black/20 to-zinc-950/10 backdrop-blur-sm border-t border-white/[0.02]"
      >
        <div className="max-w-7xl w-full mx-auto space-y-6 lg:space-y-8 md:my-auto">
          <motion.div variants={cascadeUp} className="text-center max-w-2xl mx-auto space-y-1">
            <span className="text-xs font-bold uppercase tracking-widest text-[#A855F7] block">{t('sec3Badge')}</span>
            <h3 className="text-2xl sm:text-4xl font-black text-white tracking-tight">{t('sec3Title')}</h3>
          </motion.div>
          
          <div className="flex overflow-x-auto snap-x snap-mandatory md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 pb-2 md:pb-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {futureCards.map((card, idx) => {
              const IconComp = card.icon;
              return (
                <motion.div 
                  key={idx} variants={cascadeUp}
                  className="shrink-0 w-[92vw] sm:w-[70vw] md:w-auto snap-center snap-always bg-zinc-950/50 backdrop-blur-md border border-white/10 rounded-xl p-6 transition-all duration-500 hover:border-purple-500/40 hover:bg-zinc-900/40 group relative overflow-hidden shadow-xl min-h-[340px] md:min-h-[200px] flex flex-col justify-between"
                >
                  <div style={{ backgroundImage: `url(${card.img})` }} className="absolute inset-0 bg-cover bg-center opacity-[0.06] mix-blend-luminosity group-hover:opacity-[0.10] transition-opacity duration-500 pointer-events-none" />
                  
                  <div className="flex items-center justify-between mb-3 relative z-10">
                    <div className="w-12 h-12 md:w-8 md:h-8 rounded-xl md:rounded-lg bg-black/60 border border-white/10 text-[#8B5CF6] group-hover:text-purple-400 transition-colors flex items-center justify-center">
                      <IconComp className="w-5 h-5 md:w-4 md:h-4" />
                    </div>
                    <span className="text-[9px] font-semibold text-[#A855F7] bg-[#A855F7]/10 px-2.5 py-0.5 rounded-full border border-[#A855F7]/20">{card.highlight}</span>
                  </div>
                  <div className="relative z-10">
                    <h4 className="text-lg md:text-base font-bold text-white mb-2">{card.title}</h4>
                    <p className="text-sm md:text-xs text-zinc-300 md:text-zinc-400 leading-relaxed">{card.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
          <MobileSwipeHint />
        </div>
      </motion.section>

      {/* 🛠️ SLIDE 4: SOLUTIONS & PRICING ENGINE OVERHAULED */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.1 }} variants={sectionParent}
        className="w-full min-h-screen md:snap-start md:snap-always flex flex-col justify-start pt-28 pb-16 md:pb-12 px-4 sm:px-6 lg:px-8 bg-black/40 backdrop-blur-md border-t border-white/[0.02]"
      >
        <div className="max-w-7xl w-full mx-auto space-y-6 lg:space-y-10 md:my-auto">
          <motion.div variants={cascadeUp} className="text-center max-w-2xl mx-auto space-y-2 select-none">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md border border-purple-500/20 bg-purple-500/5 text-purple-400 text-[10px] font-mono tracking-widest uppercase mx-auto">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-ping" /> Deployment Tiers Configuration
            </div>
            <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight">{t('sec4Title')}</h3>
          </motion.div>
          
          <div className="flex overflow-x-auto snap-x snap-mandatory md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 items-start pb-2 md:pb-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {plans.map((plan, idx) => (
              <motion.div 
                key={idx} variants={cascadeUp} 
                className={`shrink-0 w-[92vw] sm:w-[70vw] md:w-auto snap-center snap-always bg-[#09090b]/90 backdrop-blur-xl border rounded-lg p-7 py-12 md:p-6 relative flex flex-col justify-between transition-all duration-500 min-h-[520px] md:min-h-[480px] group overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)] ${
                  plan.recommended ? 'border-[#8B5CF6]/70 shadow-purple-500/5 lg:scale-105 z-10' : 'border-zinc-800/80 hover:border-zinc-700/60'
                }`}
              >
                {/* HUD Corner Tech Markers */}
                <span className="absolute top-1 left-2 text-[8px] font-mono text-zinc-700 select-none">+</span >
                <span className="absolute top-1 right-2 text-[8px] font-mono text-zinc-700 select-none">+</span >
                
                <div style={{ backgroundImage: `url(${plan.img})` }} className="absolute inset-0 bg-cover bg-center opacity-[0.06] group-hover:opacity-[0.10] transition-opacity duration-500 pointer-events-none" />
                
                <div className="space-y-5 relative z-10">
                  <div className="flex items-center justify-between text-[9px] font-mono text-zinc-500 select-none">
                    <span>SYS_CONFIG // REG_0{idx + 1}</span>
                    {plan.recommended ? (
                      <span className="text-[#8B5CF6] font-black bg-[#8B5CF6]/10 px-2 py-0.5 rounded border border-[#8B5CF6]/20 animate-pulse text-[8px]">
                        ALGORITHMIC_PREFERENCE
                      </span>
                    ) : (
                      <span>TIER // STANDARD</span>
                    )}
                  </div>

                  <div className="space-y-1">
                    <h4 className="text-xl font-black text-white tracking-tight">{plan.name}</h4>
                    <p className="text-xs text-zinc-400 min-h-[36px] leading-relaxed">{plan.desc}</p>
                  </div>

                  <div className="space-y-1 pt-2">
                    <span className="text-[9px] font-mono tracking-widest text-zinc-500 block uppercase">Estimated Operational Cost</span>
                    <div className="text-4xl font-black bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-transparent flex items-baseline gap-1">
                      {plan.price}<span className="text-xs text-zinc-500 font-mono">/mo</span>
                    </div>
                  </div>

                  {/* Laser-Etched Futuristic Line */}
                  <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500/40 to-transparent my-1" />

                  <ul className="space-y-3 pb-2">
                    {plan.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5 text-xs text-zinc-300 font-medium">
                        <span className="text-purple-400 font-mono text-[11px] select-none shrink-0 pt-0.5">[✓]</span>
                        <span className="leading-snug">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link 
                  href="/contact" 
                  className={`w-full py-3.5 rounded-md text-xs font-mono tracking-widest uppercase text-center transition-all relative z-10 ${
                    plan.recommended 
                      ? 'purple-gradient text-white shadow-lg border border-purple-400/20 hover:scale-[1.01]' 
                      : 'bg-zinc-900/60 text-zinc-300 border border-zinc-800 hover:bg-zinc-900 hover:text-white hover:border-zinc-700'
                  }`}
                >
                  Initialize Protocol
                </Link>
              </motion.div>
            ))}
          </div>
          <MobileSwipeHint />
        </div>
      </motion.section>

      {/* SLIDE 5: STRATEGIC DIFFERENCE (WHY CHOOSE) */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.1 }} variants={sectionParent}
        className="w-full min-h-screen md:snap-start md:snap-always flex flex-col justify-start pt-28 pb-16 md:pb-12 px-4 sm:px-6 lg:px-8 bg-transparent border-t border-white/[0.02]"
      >
        <div className="max-w-7xl w-full mx-auto space-y-6 lg:space-y-10 md:my-auto">
          <motion.div variants={cascadeUp} className="space-y-2 text-center max-w-xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md border border-purple-500/20 bg-purple-500/5 text-purple-400 text-[10px] font-mono tracking-widest uppercase mx-auto select-none">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse" /> Core Capabilities Matrix
            </div>
            <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight">
              Why Choose <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">Elevate Search</span>
            </h3>
          </motion.div>
          
          <div className="flex overflow-x-auto snap-x snap-mandatory md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 pb-2 md:pb-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {valueProps.map((vp, idx) => (
              <motion.div 
                key={idx} variants={cascadeUp} 
                className="shrink-0 w-[92vw] sm:w-[70vw] md:w-auto snap-center snap-always bg-[#09090b]/80 backdrop-blur-md border border-zinc-800/60 rounded-lg p-6 py-10 md:p-6 relative flex flex-col justify-between min-h-[300px] md:min-h-[220px] group overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.7)]"
              >
                <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t border-l border-purple-500/30 group-hover:border-purple-400/80 transition-colors duration-300" />
                <div className="absolute top-0 right-0 w-2.5 h-2.5 border-t border-r border-purple-500/30 group-hover:border-purple-400/80 transition-colors duration-300" />
                <div className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b border-l border-purple-500/30 group-hover:border-purple-400/80 transition-colors duration-300" />
                <div className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b border-r border-purple-500/30 group-hover:border-purple-400/80 transition-colors duration-300" />

                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center opacity-[0.06] group-hover:opacity-[0.11] transition-opacity duration-500 pointer-events-none" />
                <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-purple-500/[0.03] to-transparent -translate-y-full group-hover:translate-y-[200%] transition-transform duration-[1500ms] ease-out pointer-events-none" />

                <div className="space-y-4 relative z-10">
                  <div className="flex items-center justify-between text-[10px] font-mono tracking-widest text-zinc-500 select-none">
                    <span>VECTOR_NODE // 0{idx + 1}</span>
                    <span className="text-purple-500/40 font-bold group-hover:text-purple-400 transition-colors flex items-center gap-1">
                      <span className="w-1 h-1 rounded-full bg-purple-500 inline-block animate-ping" /> SYS_OK
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-lg md:text-base font-black text-white group-hover:text-purple-400 transition-colors tracking-tight">
                      {vp.title}
                    </h4>
                    <p className="text-sm md:text-xs text-zinc-300 md:text-zinc-400 leading-relaxed font-normal">
                      {vp.desc}
                    </p>
                  </div>
                </div>

                <div className="w-full flex items-center justify-between pt-4 border-t border-white/[0.03] text-[9px] font-mono text-zinc-600 relative z-10 select-none">
                  <span>DATA_LOCK_SECURE</span>
                  <span>PROT_v4.6</span>
                </div>
              </motion.div>
            ))}
          </div>
          <MobileSwipeHint />
        </div>
      </motion.section>

      {/* SLIDE 6: EXECUTION PIPELINE WORKFLOW */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.1 }} variants={sectionParent}
        className="w-full min-h-screen md:snap-start md:snap-always flex flex-col justify-start pt-28 pb-16 md:pb-12 px-4 sm:px-6 lg:px-8 bg-black/40 backdrop-blur-md border-t border-white/[0.02]"
      >
        <div className="max-w-7xl w-full mx-auto space-y-8 my-auto">
          <motion.div variants={cascadeUp} className="text-center max-w-xl mx-auto space-y-1">
            <span className="text-xs font-bold uppercase tracking-widest text-[#8B5CF6] block">Execution Workflow</span>
            <h3 className="text-2xl sm:text-4xl font-black text-white tracking-tight">How We Work</h3>
          </motion.div>
          
          <div className="flex overflow-x-auto snap-x snap-mandatory md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 relative pb-2 md:pb-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {steps.map((st, idx) => (
              <motion.div key={idx} variants={cascadeUp} className="shrink-0 w-[92vw] sm:w-[70vw] md:w-auto snap-center snap-always bg-zinc-950/40 backdrop-blur-sm border border-white/10 rounded-xl p-5 py-10 md:p-5 relative overflow-hidden group shadow-xl min-h-[300px] md:min-h-[240px] flex flex-col justify-between">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center opacity-[0.06] group-hover:opacity-[0.10] transition-opacity duration-500 pointer-events-none" />
                
                <div className="space-y-3 md:space-y-2 relative z-10">
                  <span className="absolute -top-3 -right-1 text-6xl font-black text-white/5 select-none tracking-tighter">{st.step}</span>
                  <span className="text-[10px] md:text-[9px] font-bold text-[#8B5CF6] block mb-1">{st.step} // Phase</span>
                  <h4 className="text-lg md:text-sm font-bold text-white">{st.name}</h4>
                  <p className="text-sm md:text-11px text-zinc-300 md:text-zinc-400 leading-relaxed">{st.desc}</p>
                </div>
                <div className="border-t border-white/5 pt-3 space-y-1.5 md:space-y-1 relative z-10">
                  {st.subTasks.map((task, tIdx) => (
                    <div key={tIdx} className="text-xs md:text-[10px] text-purple-400 flex items-center gap-2 font-medium">
                      <div className="w-1.5 h-1.5 md:w-1 md:h-1 rounded-full bg-indigo-400 shrink-0" />
                      <span>{task}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
          <MobileSwipeHint />
        </div>
      </motion.section>

      {/* SLIDE 7: FAQ KNOWLEDGE HUB */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.1 }} variants={sectionParent}
        className="w-full min-h-screen md:snap-start md:snap-always flex flex-col justify-start pt-28 pb-16 md:pb-12 px-4 sm:px-6 lg:px-8 bg-transparent border-t border-white/[0.02]"
      >
        <div className="max-w-3xl w-full mx-auto space-y-6 my-auto">
          <motion.div variants={cascadeUp} className="space-y-2 text-center select-none">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md border border-purple-500/20 bg-purple-500/5 text-purple-400 text-[10px] font-mono tracking-widest uppercase mx-auto">
              <Globe className="w-3 h-3 text-purple-400 animate-spin-slow" /> Query Retrieval Center
            </div>
            <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight">
              Frequently Asked Questions
            </h3>
          </motion.div>
          
          <motion.div 
            variants={cascadeUp} 
            className="space-y-3 max-h-[60vh] md:max-h-[55vh] overflow-y-auto pr-1 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {faqs.map((faq, idx) => {
              const isSelected = activeFaq === idx;
              return (
                <div 
                  key={idx} 
                  className={`bg-[#070709]/60 backdrop-blur-md border rounded-xl overflow-hidden transition-all duration-300 shadow-lg ${
                    isSelected ? 'border-purple-500/40 shadow-purple-500/5 bg-zinc-950/80' : 'border-zinc-800/40 hover:border-zinc-700/60'
                  }`}
                >
                  <button 
                    onClick={() => setActiveFaq(isSelected ? null : idx)} 
                    className="w-full text-left p-4.5 sm:p-5 flex items-center justify-between text-white focus:outline-none transition-colors group relative"
                  >
                    <div className={`absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-purple-400 to-indigo-500 transition-transform duration-300 ${
                      isSelected ? 'scale-y-100' : 'scale-y-0'
                    }`} />

                    <div className="flex flex-col gap-1 pr-4">
                      <span className="text-[9px] font-mono tracking-widest text-zinc-500 uppercase select-none">
                        CORE_INDEX // 0{idx + 1}
                      </span>
                      <span className={`text-xs sm:text-sm font-bold tracking-tight transition-colors duration-200 ${
                        isSelected ? 'text-purple-400' : 'text-zinc-200 group-hover:text-white'
                      }`}>
                        {faq.q}
                      </span>
                    </div>
                    
                    <ChevronDown className={`w-4 h-4 text-zinc-500 transition-transform duration-300 shrink-0 ${
                      isSelected ? 'transform rotate-180 text-purple-400' : 'group-hover:text-zinc-300'
                    }`} />
                  </button>
                  
                  <motion.div 
                    initial={false} 
                    animate={{ height: isSelected ? "auto" : 0, opacity: isSelected ? 1 : 0 }} 
                    transition={{ duration: 0.25, ease: "easeInOut" }} 
                    className="overflow-hidden relative"
                  >
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center opacity-[0.04] mix-blend-screen pointer-events-none" />
                    
                    <div className="p-4.5 sm:p-5 pt-1 text-xs sm:text-xs text-zinc-300 leading-relaxed border-t border-zinc-900 bg-black/40 relative z-10 space-y-3">
                      <p className="max-w-2xl">{faq.a}</p>
                      
                      <div className="flex items-center gap-4 text-[9px] font-mono text-zinc-600 select-none pt-2 border-t border-white/[0.02]">
                        <span className="flex items-center gap-1">
                          <span className="w-1 h-1 rounded-full bg-emerald-500 inline-block" /> STATUS // DECRYPTED_OK
                        </span>
                        <span>ACCESS // PUBLIC</span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </motion.section>

      {/* SLIDE 8: RESEARCH INSIGHTS */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.1 }} variants={sectionParent}
        className="w-full min-h-screen md:snap-start md:snap-always flex flex-col justify-start pt-28 pb-16 md:pb-12 px-4 sm:px-6 lg:px-8 bg-black/40 backdrop-blur-md border-t border-white/[0.02]"
      >
        <div className="max-w-7xl w-full mx-auto space-y-8 my-auto">
          <div className="space-y-1 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-[#8B5CF6] block">Intel & Research</span>
            <h3 className="text-2xl sm:text-4xl font-black text-white tracking-tight">Latest Insights</h3>
          </div>
          
          <div className="flex overflow-x-auto snap-x snap-mandatory md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 pb-2 md:pb-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {insights.map((ins, idx) => (
              <motion.div key={idx} variants={cascadeUp} className="shrink-0 w-[92vw] sm:w-[65vw] md:w-auto snap-center snap-always bg-zinc-950/40 backdrop-blur-sm border border-white/10 rounded-xl p-6 py-10 md:p-5 flex flex-col justify-between group shadow-xl min-h-[220px] md:min-h-[170px] overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center opacity-[0.06] group-hover:opacity-[0.10] transition-opacity duration-500 pointer-events-none" />
                
                <div className="space-y-3 relative z-10">
                  <span className="inline-block text-[10px] md:text-[9px] font-bold uppercase tracking-wider text-[#A855F7] bg-[#A855F7]/10 px-2.5 py-0.5 rounded-full">{ins.cat}</span>
                  <h4 className="text-base sm:text-sm lg:text-base font-bold text-white leading-snug group-hover:text-[#8B5CF6] transition-colors">{ins.title}</h4>
                </div>
                <div className="flex items-center justify-between text-xs md:text-[10px] text-zinc-400 pt-3 mt-3 border-t border-white/5 relative z-10">
                  <span>{ins.date}</span>
                  <span>{ins.readTime}</span>
                </div>
              </motion.div>
            ))}
          </div>
          <MobileSwipeHint />
        </div>
      </motion.section>

      {/* SLIDE 9: INTEGRATED CLOSING CTA + BRAND FOOTER PANEL */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.1 }} variants={sectionParent}
        className="w-full min-h-screen md:h-screen md:snap-start md:snap-always flex flex-col justify-between pt-28 pb-6 px-4 sm:px-6 lg:px-8 bg-zinc-950/30 border-t border-white/[0.04] relative"
      >
        <motion.div variants={cascadeUp} className="max-w-4xl mx-auto text-center space-y-4 py-8 md:py-4 md:my-auto flex flex-col items-center justify-center">
          <h3 className="text-xl sm:text-3xl font-black text-white tracking-tight">Ready to Maximize Your Search Real Estate?</h3>
          <Magnetic>
            <Link href="/contact" className="px-8 py-3.5 sm:px-10 sm:py-4 rounded-xl font-bold purple-gradient text-white shadow-2xl inline-flex items-center gap-3 uppercase tracking-widest text-xs border border-white/10 hover:scale-[1.02] transition-transform">
              Launch Free Visibility Audit <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </Magnetic>
        </motion.div>

        <motion.div variants={cascadeUp} className="max-w-7xl w-full mx-auto border-t border-white/[0.05] pt-6 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            
            <div className="space-y-3">
              <Link href="/" className="flex items-center gap-2 group">
                <img src="/logo.webp" alt="Elevate Search Logo" className="w-7 h-7 rounded-full object-cover" />
                <span className="font-black text-base tracking-tight select-none">
                  <span className="bg-gradient-to-b from-white to-zinc-300 bg-clip-text text-transparent">Elevate</span>
                  <span className="bg-gradient-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent ml-1">Search</span>
                </span>
              </Link>
              <p className="text-[11px] text-zinc-400 leading-relaxed">
                Be Found. Be Chosen. Elevate Search transforms enterprise visual presence across standard search engines, mapping applications, and emerging conversational AI discovery platforms.
              </p>
            </div>

            <div className="space-y-2">
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

            <div className="space-y-2">
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-zinc-300">Optimizations</h4>
              <ul className="space-y-1.5 text-[11px] text-zinc-400 font-medium">
                <li className="flex items-center gap-2"><Search className="w-3.5 h-3.5 text-purple-400" /> <span>Website Engine SEO</span></li>
                <li className="flex items-center gap-2"><MapPin className="w-3.5 h-3.5 text-indigo-400" /> <span>Google Maps Matrix</span></li>
                <li className="flex items-center gap-2"><Cpu className="w-3.5 h-3.5 text-purple-400" /> <span>AI Overview (AEO)</span></li>
                <li className="flex items-center gap-2"><MessageSquare className="w-3.5 h-3.5 text-indigo-400" /> <span>Conversational Engines</span></li>
              </ul>
            </div>

            <div className="space-y-2.5">
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-zinc-300">Direct Channels</h4>
              <ul className="space-y-1.5 text-[11px] text-zinc-400 font-medium break-all">
                <li className="flex items-center gap-2"><Mail className="w-3.5 h-3.5 text-purple-400 shrink-0" /> <a href="mailto:elevatesearch7@gmail.com" className="hover:text-white transition-colors">elevatesearch7@gmail.com</a></li>
                <li className="flex items-center gap-2"><Phone className="w-3.5 h-3.5 text-purple-400 shrink-0" /> <a href="tel:+918850286037" className="hover:text-white transition-colors">8850286037</a></li>
                <li className="flex items-center gap-2"><Instagram className="w-3.5 h-3.5 text-purple-400 shrink-0" /> <a href="https://instagram.com/elevate_search" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">@elevate_search</a></li>
              </ul>
              
              <div className="pt-1">
                <a 
                  href="https://wa.me/918850286037" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-950/30 border border-emerald-500/20 text-emerald-400 hover:text-white hover:bg-emerald-600 hover:border-emerald-500 text-[10px] font-bold uppercase tracking-wider transition-all duration-300 shadow-md"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.703 1.458h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Chat on WhatsApp
                </a>
              </div>
            </div>

          </div>

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