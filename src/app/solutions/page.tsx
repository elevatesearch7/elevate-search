"use client";

import React from 'react';
import Link from 'next/link';
import { Search, MapPin, Cpu, CheckCircle2, ArrowUpRight, HelpCircle, Eye, Sparkles, ShieldCheck } from 'lucide-react';
import SchemaMarkup from "@/components/SchemaMarkup";

export default function SolutionsPage() {
  const breadcrumbData = {
    itemListElement: [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://elevatesearch.in" },
      { "@type": "ListItem", "position": 2, "name": "Solutions", "item": "https://elevatesearch.in/solutions" }
    ]
  };

  return (
    <div className="relative w-full py-20">
      <SchemaMarkup type="BreadcrumbList" data={breadcrumbData} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* HEADER SECTION - Focuses purely on capabilities, not money */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-[#8B5CF6]">What We Build For You</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">Our Business Solutions</h1>
          <p className="text-sm text-[#A1A1AA] leading-relaxed">
            Discover how we repair your broken Google rankings, claim your missing local map customers, and prepare your business to be recommended by modern AI tools.
          </p>
        </div>

        {/* FEATURE SHOWROOM - Alternating rows that don't look like standard pricing tables */}
        <div className="space-y-16">
          
          {/* SOLUTION 1: WEBSITE SEARCH OPTIMIZATION */}
          <div className="bg-[#111111] border border-white/5 rounded-2xl p-8 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8B5CF6]/10 border border-[#8B5CF6]/20 text-xs text-[#8B5CF6] font-medium">
                <Search className="w-3.5 h-3.5" /> Foundational Web Engine Fixes
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Website Search Optimization Framework
              </h2>
              <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed">
                If your website isn't showing up when clients search for your services, your code foundations are likely blocked. We perform a complete physical cleanup of your website layout so Google's automated systems can read and display your business at the top of results.
              </p>
              
              <div className="h-[1px] bg-white/5 my-2" />
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <h4 className="text-xs font-bold text-white flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#8B5CF6]" /> Complete Code Spring Cleaning
                  </h4>
                  <p className="text-[11px] text-[#A1A1AA]">We speed up your page loading so Google doesn't desert your site.</p>
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs font-bold text-white flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#8B5CF6]" /> Target Search Intent Maps
                  </h4>
                  <p className="text-[11px] text-[#A1A1AA]">We align your text with the exact simple words real clients type when buying.</p>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-5 bg-[#050505] p-6 sm:p-8 rounded-xl border border-white/10 text-center space-y-4">
              <span className="text-[10px] text-[#A1A1AA] uppercase tracking-wider block">Best for businesses struggling to be seen on Google standard lists</span>
              <div className="text-xs text-[#A1A1AA]">Includes full layout audits and speed modifications.</div>
              <Link href="/contact" className="w-full block py-3 rounded-xl text-xs font-bold bg-white text-black hover:bg-white/90 transition-colors">
                Request Free Web Diagnostic Audit
              </Link>
              <Link href="/pricing" className="text-xs text-[#8B5CF6] block hover:underline">
                View package pricing rates $\rightarrow$
              </Link>
            </div>
          </div>

          {/* SOLUTION 2: GOOGLE BUSINESS OPTIMIZATION */}
          <div className="bg-[#111111] border border-white/5 rounded-2xl p-8 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-5 lg:order-last">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A855F7]/10 border border-[#A855F7]/20 text-xs text-[#A855F7] font-medium">
                <MapPin className="w-3.5 h-3.5" /> Local Map Traffic Accelerators
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Google Business & Local Map Optimization
              </h2>
              <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed">
                When customers look for services nearby on their phones, they call the top 3 spots they see on Google Maps. We synchronize your entire online footprint, fix category profile errors, and force your map pin back into local recommendations.
              </p>
              
              <div className="h-[1px] bg-white/5 my-2" />
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <h4 className="text-xs font-bold text-white flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#A855F7]" /> Map Category Tuning
                  </h4>
                  <p className="text-[11px] text-[#A1A1AA]">We remove confusing, overlapping service tags to instantly restore your map score.</p>
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs font-bold text-white flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#A855F7]" /> Review Acquisition Setups
                  </h4>
                  <p className="text-[11px] text-[#A1A1AA]">A simple strategy to capture five-star reviews mentioning your locations easily.</p>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-5 bg-[#050505] p-6 sm:p-8 rounded-xl border border-white/10 text-center space-y-4">
              <span className="text-[10px] text-[#A1A1AA] uppercase tracking-wider block">Best for local storefronts and service branches looking for nearby calls</span>
              <div className="text-xs text-[#A1A1AA]">Includes coordinate alignment and dashboard cleanup.</div>
              <Link href="/contact" className="w-full block py-3 rounded-xl text-xs font-bold bg-[#111111] text-white border border-white/10 hover:bg-white/5 transition-colors">
                Request Map Footprint Review
              </Link>
              <Link href="/pricing" className="text-xs text-[#A855F7] block hover:underline">
                View package pricing rates $\rightarrow$
              </Link>
            </div>
          </div>

          {/* SOLUTION 3: COMPLETE SEARCH VISIBILITY */}
          <div className="bg-[#111111] border border-[#8B5CF6]/30 rounded-2xl p-8 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-[0_0_50px_rgba(139,92,246,0.05)] relative">
            <span className="absolute -top-3 left-6 px-3 py-0.5 rounded-full text-[9px] uppercase font-bold purple-gradient text-white tracking-widest">Our Flagship Business Safety Net</span>
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8B5CF6]/20 border border-[#8B5CF6]/40 text-xs text-white font-medium">
                <Cpu className="w-3.5 h-3.5" /> Combined Multi-Platform Protection
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Complete Search Visibility Solution Matrix
              </h2>
              <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed">
                Don't leave your business vulnerable to single website changes. This all-in-one framework blends our deep website optimization, map pack setup, and modern AEO name tags to make sure you are found everywhere—from standard search engines to ChatGPT apps.
              </p>
              
              <div className="h-[1px] bg-white/5 my-2" />
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="flex items-center gap-2 text-[#A1A1AA]">
                  <Sparkles className="w-4 h-4 text-[#8B5CF6] flex-shrink-0" /> Inclusive of all Standard Website SEO Loops
                </div>
                <div className="flex items-center gap-2 text-[#A1A1AA]">
                  <Sparkles className="w-4 h-4 text-[#8B5CF6] flex-shrink-0" /> Full Google Maps Radius Corrections
                </div>
                <div className="flex items-center gap-2 text-[#A1A1AA]">
                  <Sparkles className="w-4 h-4 text-[#8B5CF6] flex-shrink-0" /> AI Engine Reader Code Adjustments
                </div>
                <div className="flex items-center gap-2 text-[#A1A1AA]">
                  <Sparkles className="w-4 h-4 text-[#8B5CF6] flex-shrink-0" /> 24-Hour Intel Protection System Access
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-5 bg-[#050505] p-6 sm:p-8 rounded-xl border border-[#8B5CF6]/40 text-center space-y-4">
              <span className="text-[10px] text-white font-semibold uppercase tracking-wider block bg-[#8B5CF6]/10 py-1 rounded border border-[#8B5CF6]/20">The All-In-One Strategic Choice</span>
              <div className="text-xs text-[#A1A1AA]">Combines our entire engineering capability to capture maximal visual space on screens.</div>
              <Link href="/contact" className="w-full block py-3 rounded-xl text-sm font-bold purple-gradient text-white shadow-lg shadow-[#8B5CF6]/20">
                Deploy Complete Business Framework
              </Link>
              <Link href="/pricing" className="text-xs text-[#A1A1AA] block hover:text-white transition-colors">
                Compare flat-fee pricing options $\rightarrow$
              </Link>
            </div>
          </div>

        </div>

        {/* THREE-POINT EDUCATION ROW - Re-enforces simple answers directly to the user */}
        <div className="bg-[#111111]/50 border border-white/5 p-8 rounded-xl space-y-6">
          <h3 className="text-base font-bold text-white flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-[#8B5CF6]" /> Solution Architecture FAQs</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs leading-relaxed">
            <div>
              <h4 className="text-[#8B5CF6] font-bold mb-1">Who needs these services?</h4>
              <p className="text-[#A1A1AA]">Any corporate entity or local shop losing clients because their online details are messy, slow, or ignored by modern phone search apps.</p>
            </div>
            <div>
              <h4 className="text-[#8B5CF6] font-bold mb-1">How does it protect you?</h4>
              <p className="text-[#A1A1AA]">We manually adjust your website structures, clean your map codes, and inject automated updates so search computers trust your brand.</p>
            </div>
            <div>
              <h4 className="text-[#8B5CF6] font-bold mb-1">What about the pricing?</h4>
              <p className="text-[#A1A1AA]">We believe in absolute transparency over complexity. Every service is a flat, fixed one-time fee with zero hidden retainers or fine print.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}