"use client";

import React, { useState } from 'react';
import { Calendar, Clock, X, ChevronRight, Sparkles, AlertCircle, CheckCircle2, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import SchemaMarkup from "@/components/SchemaMarkup";

export default function InsightsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All Matrix Hub");
  const [activeArticle, setActiveArticle] = useState<any | null>(null);

  const categories = [
    "All Matrix Hub",
    "SEO Fundamentals",
    "Local Search",
    "Google Business Optimization",
    "Website Optimization",
    "AI Search & AEO",
    "Search Visibility Strategies"
  ];

  const articles = [
    { 
      id: 1,
      cat: "AI Search & AEO", 
      title: "Why AI Apps Like ChatGPT & Gemini Don't Mention Your Business", 
      desc: "When potential customers ask AI tools for the best businesses in your industry, your brand is being left out. Here is why it happens and how to fix it.", 
      date: "June 2026", 
      time: "5 min read",
      problem: "When people ask AI assistants for recommendations, the AI quickly reads the internet to find a trusted answer. If your website's information is written in a confusing way, the AI cannot read it easily. Instead of guessing, the AI simply skips your business and recommends your competitor instead.",
      solution: "We need to give the AI clean, direct facts about your business. This means organizing your website's hidden settings so AI computers can read your services, prices, and location in less than a second.",
      who: "Local business owners, service providers, and growing brands who want to be recommended by AI tools.",
      pitch: "Elevate Search will handle this for you completely. We look under the hood of your website and add clean 'digital name tags' that AI engines love. Through our Complete Search Visibility Solution, we make sure your business is the one ChatGPT and Google Gemini recommend to customers.",
      cost: "Executed through our Complete Search Visibility Solution at ₹20,000."
    },
    { 
      id: 2,
      cat: "Local Search", 
      title: "Disappearing From Google Maps: Why Your Competitors Get the Calls", 
      desc: "Losing your spot in the top 3 Google Maps results ruins your daily phone calls and walk-ins. Let's fix the hidden mistakes pushing you down.", 
      date: "May 2026", 
      time: "4 min read",
      problem: "Your business is likely dropping on Google Maps because your business details look inconsistent across the web. If your address, name, or phone number looks slightly different on different websites, Google loses trust in your listing and hides your map profile from nearby customers.",
      solution: "We must clean up your digital footprints. Every mention of your business across the internet needs to match perfectly, your map pin must be perfectly accurate, and you need an easy system to collect happy customer reviews daily.",
      who: "Storefronts, local offices, clinics, and service businesses relying on local clients.",
      pitch: "Elevate Search will handle this for you completely. We perform a complete cleanup of your map presence. Using our Google Business Optimization service, we fix all conflicting details, claim missing listings, and set up a simple strategy to help you pull in five-star reviews easily.",
      cost: "Deployed through our standalone Google Business Optimization module at ₹8,000."
    },
    { 
      id: 3,
      cat: "Website Optimization", 
      title: "The Cost of a Slow Website: Why Google Deserts Your Pages", 
      desc: "If your website takes too long to load on a mobile phone, Google's automated systems will stop looking at it, and customers will leave.", 
      date: "May 2026", 
      time: "6 min read",
      problem: "You aren't ranking because your website is too heavy and slow. Google uses automated systems to scan websites. If your site code is messy, or if it takes more than 3 seconds to load on a phone, Google gets tired of waiting and moves on to a faster competitor's site.",
      solution: "The behind-the-scenes code of your website needs a thorough spring cleaning. You need to shrink heavy images, remove broken files, fix links that go nowhere, and make sure the mobile phone version is incredibly fast.",
      who: "E-commerce stores, professional service websites, and any business losing leads due to a slow website.",
      pitch: "Elevate Search will handle this for you completely. Our technical experts will clean up and rebuild your website's foundational setup. Through our Website Search Optimization framework, we fix all speed blockages so Google can effortlessly read and rank your pages at the top.",
      cost: "Provided within our comprehensive Website Search Optimization framework at ₹15,000."
    },
    { 
      id: 4,
      cat: "SEO Fundamentals", 
      title: "Old SEO is Wasting Your Money: Why Standard Links Aren't Enough Anymore", 
      desc: "Just trying to rank for standard keywords is a trap. Google's page layouts have completely changed, and your business needs to change with them.", 
      date: "April 2026", 
      time: "8 min read",
      problem: "Standard text links are being pushed all the way to the bottom of the screen. Today's search pages are packed with map blocks, quick answer boxes, picture sliders, and AI paragraphs. If you are only optimizing for old-school blue text links, you are practically invisible.",
      solution: "Your business needs to show up inside the special visual blocks. Your website must be structured to claim the top quick-answer sections, show up on maps, and fit perfectly into summary boxes.",
      who: "Ambitious business owners and service providers who feel like their current SEO agency isn't bringing in real phone calls.",
      pitch: "Elevate Search will handle this for you completely. We look past vanity metrics to focus on real estate on the screen. By utilizing our specialized individual audit services, we build a clear blueprint to get your brand noticed everywhere a customer looks.",
      cost: "Available via standalone technical target modules from ₹500 to ₹1,000."
    },
    { 
      id: 5,
      cat: "Google Business Optimization", 
      title: "The Confusion Mistake: How Selecting Too Many Categories Lowers Your Rank", 
      desc: "Trying to tell Google you do twenty different things under a single profile confuses the system. Learn how to fix your category tags.", 
      date: "March 2026", 
      time: "4 min read",
      problem: "You aren't ranking on maps because your Google profile looks confused. When a business selects too many random, unrelated service categories in their dashboard, Google’s system can't tell what your main specialty is. This dilutes your ranking power for your most important service.",
      solution: "You need absolute clarity. You must find your single most profitable service, make it your main official category, and neatly organize all your extra minor services into structured sub-lists.",
      who: "Contractors, consultants, clinics, and local experts offering multiple distinct types of services.",
      pitch: "Elevate Search will handle this for you completely. We analyze your local competition and fix your dashboard settings. Through our Google Business Optimization package, we pick the exact right categories to build instant trust with Google's local algorithm.",
      cost: "Fully handled within our Google Business Optimization framework at ₹8,000."
    },
    { 
      id: 6,
      cat: "Search Visibility Strategies", 
      title: "Don't Put All Your Business Eggs in One Single Traffic Basket", 
      desc: "Relying entirely on a single source of web traffic leaves your business vulnerable to sudden updates. Discover how a multi-platform approach keeps you safe.", 
      date: "February 2026", 
      time: "7 min read",
      problem: "Many business owners face scary, sudden drops in leads because all their traffic comes from one single old ranking method. The moment Google rolls out a new layout update or changes its system design, their leads disappear overnight because they didn't protect their brand across maps and AI engines.",
      solution: "You must be present everywhere your customers search. True safety and consistent calls mean showing up on standard Google links, Google Maps search terms, and modern AI answer apps simultaneously.",
      who: "Established companies, growing local networks, and business owners looking for stable, long-term customer pipelines.",
      pitch: "Elevate Search will handle this for you completely. We build an all-in-one search safety net for your brand. Our flagship Complete Search Visibility Solution combines website optimization, map placement, and AI search readiness to ensure your business stays busy, no matter how much technology changes.",
      cost: "Executed natively via our flagship Complete Search Visibility Solution at ₹20,000."
    }
  ];

  const filteredArticles = selectedCategory === "All Matrix Hub" 
    ? articles 
    : articles.filter(a => a.cat === selectedCategory);

  const breadcrumbData = {
    itemListElement: [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://elevatesearch.in" },
      { "@type": "ListItem", "position": 2, "name": "Insights", "item": "https://elevatesearch.in/insights" }
    ]
  };

  const articleSchemaData = {
    headline: "Elevate Search Client Resource Center",
    description: "Simple, easy-to-understand explanations of why businesses fail to show up on Google and how Elevate Search fixes it.",
    publisher: {
      "@type": "Organization",
      "name": "Elevate Search",
      "logo": {
        "@type": "ImageObject",
        "url": "https://elevatesearch.in/logo.png.png"
      }
    }
  };

  return (
    <div className="relative w-full py-20">
      <SchemaMarkup type="BreadcrumbList" data={breadcrumbData} />
      <SchemaMarkup type="Article" data={articleSchemaData} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* HEADER SECTION */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-[#8B5CF6]">Business Resource Center</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">Fix Your Search Problems</h1>
          <p className="text-sm text-[#A1A1AA] leading-relaxed">
            Click any guide below to discover exactly why your business is hidden from customers, how to solve it, and how we handle the heavy lifting for you.
          </p>
        </div>

        {/* CATEGORY FILTER BAR */}
        <div className="flex flex-wrap items-center justify-center gap-2 border-y border-white/5 py-6">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-lg text-xs font-medium transition-colors ${
                selectedCategory === cat 
                  ? 'purple-gradient text-white shadow-sm' 
                  : 'bg-[#111111] text-[#A1A1AA] hover:text-white border border-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ARTICLES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
          {filteredArticles.map((art) => (
            <div 
              key={art.id} 
              onClick={() => setActiveArticle(art)}
              className="bg-[#111111] border border-white/10 rounded-xl p-6 flex flex-col justify-between group hover:border-[#8B5CF6]/60 cursor-pointer transition-all duration-300 hover:scale-[1.01]"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#A855F7] bg-[#A855F7]/10 px-2.5 py-1 rounded-full border border-[#A855F7]/20">
                    {art.cat}
                  </span>
                  <span className="text-[11px] text-[#8B5CF6] opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-0.5">
                    Read Diagnostic <ChevronRight className="w-3 h-3" />
                  </span>
                </div>
                <h3 className="text-base font-bold text-white leading-snug group-hover:text-[#8B5CF6] transition-colors">
                  {art.title}
                </h3>
                <p className="text-xs text-[#A1A1AA] leading-relaxed line-clamp-3">
                  {art.desc}
                </p>
              </div>
              
              <div className="flex items-center justify-between text-[11px] text-[#A1A1AA] pt-5 mt-6 border-t border-white/5">
                <span>{art.date}</span>
                <span>{art.time}</span>
              </div>
            </div>
          ))}
        </div>

        {/* INTERACTIVE READING MODAL OVERLAY */}
        <AnimatePresence>
          {activeArticle && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="bg-[#111111] border border-white/10 rounded-2xl w-full max-w-2xl overflow-hidden shadow-2xl relative flex flex-col max-h-[85vh]"
              >
                {/* Modal Top Nav */}
                <div className="p-6 border-b border-white/5 flex items-center justify-between bg-[#050505]/50">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#8B5CF6] bg-[#8B5CF6]/10 px-2.5 py-1 rounded-full">
                    Business Diagnostic Report
                  </span>
                  <button 
                    onClick={() => setActiveArticle(null)}
                    className="p-1.5 rounded-lg bg-[#050505] border border-white/10 text-[#A1A1AA] hover:text-white transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Modal Dynamic Body Content */}
                <div className="p-6 sm:p-8 space-y-6 overflow-y-auto">
                  <div className="space-y-2">
                    <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight leading-snug">
                      {activeArticle.title}
                    </h2>
                    <div className="flex gap-4 text-xs text-[#A1A1AA]">
                      <span>Analysis For Business Owners</span>
                      <span>•</span>
                      <span>Read Time: {activeArticle.time}</span>
                    </div>
                  </div>

                  {/* 4-Step Narrative Flow Stack */}
                  <div className="space-y-5">
                    
                    {/* 1. WHY YOU ARE NOT RANKING */}
                    <div className="p-4 bg-[#050505] border border-red-500/10 rounded-xl space-y-1.5">
                      <span className="font-bold text-xs uppercase tracking-wider text-red-400 flex items-center gap-1.5">
                        <AlertCircle className="w-3.5 h-3.5" /> The Real Problem (Why You Aren't Ranking)
                      </span>
                      <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed">
                        {activeArticle.problem}
                      </p>
                    </div>

                    {/* 2. SUGGESTED REMEDIATION */}
                    <div className="p-4 bg-[#050505] border border-white/5 rounded-xl space-y-1.5">
                      <span className="font-bold text-xs uppercase tracking-wider text-[#8B5CF6] flex items-center gap-1.5">
                        <HelpCircle className="w-3.5 h-3.5" /> What Needs To Happen To Fix It
                      </span>
                      <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed">
                        {activeArticle.solution}
                      </p>
                    </div>

                    {/* 3. TARGET DEMOGRAPHIC */}
                    <div className="p-4 bg-[#050505] border border-white/5 rounded-xl space-y-1.5">
                      <span className="font-bold text-xs uppercase tracking-wider text-[#A1A1AA]">
                        Who Faces This Issue Most Often
                      </span>
                      <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed">
                        {activeArticle.who}
                      </p>
                    </div>

                    {/* 4. THE ELEVATE SEARCH SOLUTION PITCH */}
                    <div className="p-5 purple-gradient rounded-xl space-y-2 text-white shadow-lg">
                      <span className="font-bold text-xs uppercase tracking-wider text-white bg-black/20 px-2 py-0.5 rounded flex items-center gap-1.5 w-max">
                        <Sparkles className="w-3.5 h-3.5" /> How Elevate Search Handles This For You
                      </span>
                      <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-medium">
                        {activeArticle.pitch}
                      </p>
                    </div>

                  </div>
                </div>

                {/* Modal Bottom Action Bar */}
                <div className="p-4 border-t border-white/5 bg-[#050505]/50 flex items-center justify-between gap-4">
                  <span className="text-xs font-bold text-white pl-2">
                    Package Pricing: {activeArticle.cost.split(' at ')[1] || activeArticle.cost}[cite: 1]
                  </span>
                  <button 
                    onClick={() => setActiveArticle(null)}
                    className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-white text-black hover:bg-white/90 transition-colors shadow-md"
                  >
                    Close Report
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}