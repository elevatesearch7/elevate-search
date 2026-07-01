"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ArrowUpRight, Search, MapPin, Cpu, MessageSquare, Sparkles, 
  Mic, CheckCircle2, Eye, Compass, Layers, ChevronDown
} from 'lucide-react';
import SchemaMarkup from "@/components/SchemaMarkup";
import FuturisticHero from '@/components/FuturisticHero';
import TerminalAuditForm from '@/components/AuditForm';

export default function Home() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const futureCards = [
    { title: "Google Search", icon: Search, desc: "Dominate conventional layouts, snippet components, and structured results matrices.", highlight: "Classic SEO Core" },
    { title: "Google Maps", icon: MapPin, desc: "Acquire localized grid dominance and map visibility vectors.", highlight: "Local 3-Pack Authority" },
    { title: "AI Overviews", icon: Cpu, desc: "Format entity architecture to safely anchor brand citations in direct AI summaries.", highlight: "LLM Citation Vector" },
    { title: "ChatGPT", icon: MessageSquare, desc: "Influence real-time conversational retrieval indexes and user choice patterns.", highlight: "OpenAI Index Sync" },
    { title: "Gemini", icon: Sparkles, desc: "Optimize structural knowledge graphs for native multimodal platform feeds.", highlight: "Google Ecosystem Flow" },
    { title: "Voice Search", icon: Mic, desc: "Target naturally articulated consumer inquiries and contextual semantic keys.", highlight: "Conversational Query Captures" }
  ];

  const plans = [
    {
      name: "Website Search Optimization",
      price: "₹15,000",
      desc: "Architect foundational organic pipelines targeting explicit search algorithms.",
      features: ["Website Audit", "Keyword Research", "Competitor Analysis", "Technical SEO", "On-Page SEO"],
      recommended: false
    },
    {
      name: "Google Business Optimization",
      price: "₹8,000",
      desc: "Capture geolocated transactional requests through geographic profile scaling.",
      features: ["GBP Optimization", "GBP Audit", "Local Keyword Research", "Competitor Analysis", "Review Strategy"],
      recommended: false
    },
    {
      name: "Complete Search Visibility Solution",
      price: "₹20,000",
      desc: "The ultimate unified blueprint maximizing coverage across all modern environments.",
      features: ["Website Search Audit & Action Plan", "Full Local Map Optimization Pack", "AI Engine Optimization Framework", "Cross-Platform Competitor Strategy", "Ongoing Technical Health Tracking"],
      recommended: true
    }
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
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a
      }
    }))
  };

  return (
    <div className="relative w-full bg-black min-h-screen">
      <SchemaMarkup type="FAQPage" data={faqSchemaData} />

      {/* 1. CINEMATIC SCIFI HERO & BENTO GRID DECK */}
      <FuturisticHero />
      
      {/* 2. LIVE LEAD CAPTURE AUDIT TERMINAL SECTION */}
      <section className="py-20 bg-black relative z-10 border-t border-white/[0.03]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 mb-12 px-4">
            <h2 className="text-3xl font-extrabold text-white tracking-tight">
              Connect With Our Technical Team
            </h2>
            <p className="text-xs text-zinc-400 max-w-sm mx-auto leading-relaxed">
              Ready to patch your system visibility dropouts? Book a manual roadmap audit below.
            </p>
          </div>
          
          <TerminalAuditForm />
        </div>
      </section>

      {/* 3. WHAT IS SEARCH VISIBILITY? */}
      <section className="py-24 border-t border-white/5 bg-[#050505] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-xs font-bold uppercase tracking-widest text-[#8B5CF6]">Operational Core</h2>
              <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">What Exactly Is Modern Search Visibility?</h3>
              <p className="text-[#A1A1AA] leading-relaxed">
                Traditional rankings are obsolete. Search layouts are now filled with interactive components, local mapping grids, and real-time AI answers. Modern Search Visibility means structuring your business identity so it is correctly parsed, trusted, and recommended across all extraction layers simultaneously.
              </p>
            </div>
            <div className="bg-[#111111] rounded-2xl border border-white/10 p-8 relative overflow-hidden space-y-6 shadow-inner">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#8B5CF6]/5 rounded-full blur-3xl" />
              <h4 className="text-xs font-bold text-[#A855F7] tracking-wider uppercase">Strategic Core Parameters</h4>
              <div className="space-y-4">
                <div className="flex gap-3 items-start">
                  <div className="p-2 rounded-lg bg-[#050505] border border-white/10 text-white"><Eye className="w-4 h-4" /></div>
                  <div>
                    <h5 className="text-sm font-medium text-white">What is it?</h5>
                    <p className="text-xs text-[#A1A1AA]">A multi-platform discovery strategy targeting websites, map interfaces, and LLM answer systems.</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <div className="p-2 rounded-lg bg-[#050505] border border-white/10 text-white"><Compass className="w-4 h-4" /></div>
                  <div>
                    <h5 className="text-sm font-medium text-white">Why does it matter?</h5>
                    <p className="text-xs text-[#A1A1AA]">Legacy SEO approaches fail to rank on multi-faceted Search Result Pages (SERPs) and AI answers, risking loss of market positioning and traffic visibility.</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <div className="p-2 rounded-lg bg-[#050505] border border-white/10 text-white"><Layers className="w-4 h-4" /></div>
                  <div>
                    <h5 className="text-sm font-medium text-white">Who needs it?</h5>
                    <p className="text-xs text-[#A1A1AA]">Any modern local, national, or service-driven company relying on search visibility to generate leads.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THE FUTURE OF SEARCH IS ALREADY HERE */}
      <section className="py-24 bg-[#111111]/30 border-y border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#A855F7]">Unified Surface Coverage</h2>
            <h3 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">The Future Of Search Is Already Here</h3>
            <p className="text-sm sm:text-base text-[#A1A1AA]">
              Consumers use multiple platforms to discover brands. We ensure your business is visible across all of them.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {futureCards.map((card, idx) => {
              const IconComp = card.icon;
              return (
                <div key={idx} className="bg-[#111111] border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:border-[#8B5CF6]/50 group relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#8B5CF6]/40 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-xl bg-[#050505] border border-white/10 text-[#8B5CF6] group-hover:text-white transition-colors">
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
      </section>

      {/* 5. SOLUTIONS & PRICING */}
      <section className="py-24 bg-[#050505] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#8B5CF6]">Tailored Service Modules</h2>
            <h3 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">Our Solutions & Pricing</h3>
            <p className="text-sm sm:text-base text-[#A1A1AA]">
              Clear packages with fixed pricing to build and scale your visibility infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {plans.map((plan, idx) => (
              <div 
                key={idx} 
                className={`bg-[#111111] border rounded-2xl p-8 relative flex flex-col justify-between transition-all duration-300 ${
                  plan.recommended 
                    ? 'border-[#8B5CF6] shadow-[0_0_40px_rgba(139,92,246,0.15)] lg:scale-105 z-10' 
                    : 'border-white/10 hover:border-white/20'
                }`}
              >
                {plan.recommended && (
                  <span className="absolute -top-3.5 left-1/2 transform -translate-x-1/2 px-4 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase purple-gradient text-white border border-white/10">
                    Recommended Plan
                  </span>
                )}
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">{plan.name}</h4>
                  <p className="text-xs text-[#A1A1AA] mb-6 min-h-[32px]">{plan.desc}</p>
                  <div className="flex items-baseline gap-2 mb-6">
                    <span className="text-4xl font-extrabold text-white tracking-tight">{plan.price}</span>
                    <span className="text-xs text-[#A1A1AA]">Fixed Fee</span>
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
                <Link 
                  href="/contact" 
                  className={`w-full py-3 rounded-xl text-xs font-semibold text-center transition-all ${
                    plan.recommended 
                      ? 'purple-gradient text-white shadow-md hover:opacity-90' 
                      : 'bg-[#050505] text-white border border-white/10 hover:bg-white/5'
                  }`}
                >
                  Select Framework Plan
                </Link>
              </div>
            ))}
          </div>

          <div className="p-6 bg-[#111111] border border-white/10 rounded-xl text-center max-w-xl mx-auto">
            <p className="text-xs text-[#A1A1AA]">
              Need individual target analysis? We provide individual audits & content research modules scaled from <strong className="text-white">₹500–₹1,000</strong> per deliverable loop.
            </p>
          </div>
        </div>
      </section>

      {/* 6. WHY CHOOSE ELEVATE SEARCH */}
      <section className="py-24 bg-[#111111]/20 border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#A855F7]">The Strategic Difference</h2>
            <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Why Choose Elevate Search</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {valueProps.map((vp, idx) => (
              <div key={idx} className="bg-[#111111] border border-white/5 p-6 rounded-xl space-y-2">
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-6 purple-gradient rounded-full" />
                  <h4 className="text-base font-bold text-white">{vp.title}</h4>
                </div>
                <p className="text-xs text-[#A1A1AA] leading-relaxed pl-4.5">{vp.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. HOW WE WORK (PROCESS) */}
      <section className="py-24 bg-[#050505] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#8B5CF6]">Execution Workflow</h2>
            <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">How We Work</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {steps.map((st, idx) => (
              <div key={idx} className="bg-[#111111] border border-white/10 rounded-xl p-6 relative overflow-hidden group">
                <span className="absolute -top-4 -right-2 text-7xl font-black text-white/5 select-none tracking-tighter group-hover:text-white/10 transition-colors">
                  {st.step}
                </span>
                <span className="text-xs font-bold text-[#8B5CF6] block mb-2">{st.step} // Phase</span>
                <h4 className="text-base font-bold text-white mb-2">{st.name}</h4>
                <p className="text-xs text-[#A1A1AA] leading-relaxed">{st.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FAQ */}
      <section className="py-24 bg-[#111111]/30 border-t border-white/5 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#A855F7]">Information Hub</h2>
            <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Frequently Asked Questions</h3>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isSelected = activeFaq === idx;
              return (
                <div key={idx} className="bg-[#111111] border border-white/10 rounded-xl overflow-hidden transition-colors duration-200">
                  <button 
                    onClick={() => setActiveFaq(isSelected ? null : idx)}
                    className="w-full text-left p-5 flex items-center justify-between text-white font-medium text-sm sm:text-base focus:outline-none"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 text-[#A1A1AA] transition-transform duration-300 ${isSelected ? 'transform rotate-180 text-white' : ''}`} />
                  </button>
                  <motion.div 
                    initial={false}
                    animate={{ height: isSelected ? "auto" : 0, opacity: isSelected ? 1 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <p className="p-5 pt-0 text-xs sm:text-sm text-[#A1A1AA] leading-relaxed border-t border-white/5 bg-[#050505]/40">
                      {faq.a}
                    </p>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 9. LATEST INSIGHTS */}
      <section className="py-24 bg-[#050505] relative border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
            <div className="space-y-2">
              <h2 className="text-xs font-bold uppercase tracking-widest text-[#8B5CF6]">Intel & Research</h2>
              <h3 className="text-3xl font-bold text-white tracking-tight">Latest Insights</h3>
            </div>
            <Link href="/insights" className="text-xs font-semibold text-[#8B5CF6] flex items-center gap-1 group">
              View All Content Matrix <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {insights.map((ins, idx) => (
              <div key={idx} className="bg-[#111111] border border-white/10 rounded-xl p-6 flex flex-col justify-between group hover:border-[#8B5CF6]/30 transition-colors">
                <div className="space-y-4">
                  <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-[#A855F7] bg-[#A855F7]/10 px-2.5 py-1 rounded-full">
                    {ins.cat}
                  </span>
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
      </section>

      {/* 10. MINIMAL CONTACT CTA */}
      <section className="py-20 relative bg-[#050505] text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            href="/contact" 
            className="px-10 py-5 rounded-xl text-sm font-bold purple-gradient text-white shadow-lg shadow-[#8B5CF6]/10 inline-flex items-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-transform"
          >
            Get Free Visibility Audit <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}