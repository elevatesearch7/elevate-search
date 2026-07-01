"use client";

import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Eye, Compass, Layers, Landmark, Target, Users, Award, Zap, ArrowUpRight } from 'lucide-react';
import SchemaMarkup from "@/components/SchemaMarkup";

export default function AboutPage() {
  const breadcrumbData = {
    itemListElement: [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://elevatesearch.in" },
      { "@type": "ListItem", "position": 2, "name": "About", "item": "https://elevatesearch.in/about" }
    ]
  };

  const corePillars = [
    {
      icon: Target,
      title: "Absolute Technical Precision",
      desc: "We don't guess or use outdated tricks. We alter your hidden website structures, rewrite map code arrays, and format your business properties to match exactly what Google and modern AI engines want to see."
    },
    {
      icon: ShieldCheck,
      title: "Total Client Transparency",
      desc: "Most agencies hide behind complicated jargon and confusing charts. We give you raw proof. You see every clean code name tag added, every duplicate map error deleted, and every single link fixed."
    },
    {
      icon: Users,
      title: "Client-First Growth Focus",
      desc: "We measure success by your phone calls, walk-ins, and incoming leads—not vanity metrics like random impressions. If our work doesn't connect you with real paying clients, it doesn't count."
    },
    {
      icon: Zap,
      title: "Continuous 24-Hour Adaptation",
      desc: "Search technology changes fast. With our active intelligence radar tracking Google's daily shifts, we constantly tune your live properties so your rankings remain safe and stable."
    }
  ];

  return (
    <div className="relative w-full py-20 overflow-hidden">
      <SchemaMarkup type="BreadcrumbList" data={breadcrumbData} />
      
      {/* Background Glows for Premium Depth */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#8B5CF6]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-40 right-0 w-72 h-72 bg-[#A855F7]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-28 relative z-10">
        
        {/* SECTION 1: MODERN HERO HEADER */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-[#8B5CF6] px-3 py-1 rounded-full bg-[#8B5CF6]/10 border border-[#8B5CF6]/20">
            Corporate Profile Matrix
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
            We Engineer High-End <span className="bg-gradient-to-r from-white via-[#A1A1AA] to-[#8B5CF6] bg-clip-text text-transparent">Search Visibility.</span>
          </h1>
          <p className="text-sm sm:text-base text-[#A1A1AA] leading-relaxed max-w-2xl mx-auto">
            Elevate Search is an elite optimization consultancy built to protect, restore, and scale business visibility across the changing landscape of modern search engines, maps, and conversational AI tools.
          </p>
        </div>

        {/* SECTION 2: THE 4-POINT OPERATIONAL TRUTH GRID */}
        <div className="space-y-6">
          <div className="text-center md:text-left">
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#A855F7]">The Framework Breakdown</h2>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">Our Core Operational Parameters</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#111111] p-6 sm:p-10 rounded-2xl border border-white/10 shadow-xl">
            <div className="space-y-3">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <Eye className="w-4 h-4 text-[#8B5CF6]" /> 1. What is it?
              </h4>
              <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed pl-6">
                A premium search visibility platform designed to format website structures, clean local map assets, and inject AI-readable properties into your code so you show up everywhere people search.
              </p>
            </div>
            <div className="space-y-3">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <Compass className="w-4 h-4 text-[#8B5CF6]" /> 2. Why does it matter?
              </h4>
              <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed pl-6">
                Standard text links are shrinking. With map features, visual blocks, and ChatGPT text answers capturing user screens, businesses using old SEO techniques are rapidly becoming invisible.
              </p>
            </div>
            <div className="space-y-3 pt-4 border-t border-white/5 md:border-t-0 md:pt-0">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#A855F7]" /> 3. Who needs it?
              </h4>
              <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed pl-6">
                Ambitious companies, multi-branch service lines, clinics, and localized operators whose customer calls and leads have suddenly dropped due to search engine algorithm updates.
              </p>
            </div>
            <div className="space-y-3 pt-4 border-t border-white/5 md:border-t-0 md:pt-0">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <Landmark className="w-4 h-4 text-[#A855F7]" /> 4. How much does it cost?
              </h4>
              <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed pl-6">
                We use strict flat, fixed pricing models running from ₹8,000 to ₹20,000 based on project scope. No confusing ongoing retainer contracts, no unexpected monthly bills.
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 3: THE FOUNDING VISION SHOWCASE (Builds Massive Authority) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border-y border-white/5 py-16 relative">
          <div className="lg:col-span-5 space-y-4">
            <div className="w-16 h-16 rounded-2xl purple-gradient flex items-center justify-center text-white font-black text-xl shadow-lg shadow-[#8B5CF6]/20">
              NY
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Narayan Yadav</h3>
              <p className="text-xs text-[#8B5CF6] font-medium uppercase tracking-wider">Founder & Lead Visibility Architect</p>
            </div>
            <p className="text-xs text-[#A1A1AA] leading-relaxed">
              "We didn't build Elevate Search to be another generic marketing agency that makes empty promises. We engineered this platform to give business owners mathematical certainty. We replace vague traffic talk with rock-solid screen real estate dominance."
            </p>
          </div>
          <div className="lg:col-span-7 space-y-6 bg-[#111111]/40 border border-white/5 p-6 sm:p-8 rounded-2xl">
            <h4 className="text-base font-bold text-white">Why Elevate Search Exists</h4>
            <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed">
              The modern search engine optimization industry is fundamentally broken. Agencies charge expensive monthly fees while delivering reports filled with confusing vocabulary to mask a lack of real results. 
            </p>
            <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed">
              Elevate Search exists to draw a clear line in the sand. We treat your search presence like high-value real estate. We map out the gaps on your screens, strip away the filler code slowing down your system, and position your brand exactly where transaction choices are made.
            </p>
          </div>
        </div>

        {/* SECTION 4: THE FOUR CORE PILLARS MATRIX */}
        <div className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#8B5CF6]">Our Operating Standards</h2>
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">The Pillars of Elevate Search</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {corePillars.map((pillar, idx) => {
              const PillarIcon = pillar.icon;
              return (
                <div key={idx} className="bg-[#111111] border border-white/10 rounded-2xl p-6 space-y-4 hover:border-[#8B5CF6]/30 transition-colors group">
                  <div className="p-3 rounded-xl bg-[#050505] border border-white/5 text-[#8B5CF6] w-max group-hover:text-white group-hover:purple-gradient transition-all">
                    <PillarIcon className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-white tracking-tight">{pillar.title}</h4>
                  <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed">{pillar.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* SECTION 5: FINAL SYSTEM CTA ACCELERATOR */}
        <div className="p-8 sm:p-12 bg-gradient-to-b from-[#111111] to-[#050505] border border-[#8B5CF6]/20 rounded-2xl text-center space-y-6 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-glow opacity-20 pointer-events-none" />
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Search Technology is Evolving. Is Your Brand Covered?
          </h3>
          <p className="text-xs sm:text-sm text-[#A1A1AA] max-w-2xl mx-auto leading-relaxed">
            Do not let hidden layout updates and fast-moving AI crawlers cut off your organic lead pipelines. Secure your space inside the map frameworks and answers fields today.
          </p>
          <div className="pt-2">
            <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs font-bold purple-gradient text-white shadow-lg hover:scale-[1.01] transition-transform">
              Initiate Corporate Visibility Setup Loop <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}