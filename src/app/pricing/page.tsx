"use client";

import React from 'react';
import Link from 'next/link';
import { CheckCircle2, ShieldCheck, HelpCircle, ArrowUpRight } from 'lucide-react';
import SchemaMarkup from "@/components/SchemaMarkup";

export default function PricingPage() {
  const breadcrumbData = {
    itemListElement: [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://elevatesearch.in" },
      { "@type": "ListItem", "position": 2, "name": "Pricing", "item": "https://elevatesearch.in/pricing" }
    ]
  };

  const transparentItems = [
    { q: "Are there unexpected monthly operational costs?", a: "No. Every module operates on a strict flat, one-time execution fee. You retain full control over future optimization schedules." },
    { q: "What is included in the individual ₹500–₹1,000 services?", a: "These cover singular specialized deliverables: micro technical crawls, specific semantic data maps, or standalone schema validation reviews." },
    { q: "How are project payments handled?", a: "We outline all deliverables clearly before launch. Payment terms are transparently agreed upon upfront before any optimization begins." }
  ];

  return (
    <div className="relative w-full py-20">
      <SchemaMarkup type="BreadcrumbList" data={breadcrumbData} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* HEADER SECTION */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-[#8B5CF6]">Commercial Framework</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">Transparent Operational Pricing</h1>
          <p className="text-sm sm:text-base text-[#A1A1AA] leading-relaxed">
            No complex retainer contracts. Clear, flat-fee pricing built for direct business ROI.
          </p>
        </div>

        {/* PRICING MATRIX GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <div className="bg-[#111111] border border-white/10 rounded-2xl p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold text-white mb-1">Website Search Optimization</h3>
              <p className="text-xs text-[#A1A1AA] mb-6">Build a high-performance framework for standard search engine indexing loops.</p>
              <div className="text-3xl font-black text-white mb-6">₹15,000</div>
              <div className="h-[1px] bg-white/5 mb-6" />
              <ul className="space-y-3 text-xs text-[#A1A1AA]">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#8B5CF6]" /> In-depth System Performance Audit</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#8B5CF6]" /> Target Search Intent Analysis</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#8B5CF6]" /> Competitor Position Footprint Maps</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#8B5CF6]" /> Core Technical System Changes</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#8B5CF6]" /> On-Page Layout Mapping Optimization</li>
              </ul>
            </div>
            <Link href="/contact" className="mt-8 w-full py-3 rounded-xl text-xs font-semibold text-center bg-[#050505] text-white border border-white/10 hover:bg-white/5 transition-colors">
              Request Project Plan Setup
            </Link>
          </div>

          <div className="bg-[#111111] border border-white/10 rounded-2xl p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold text-white mb-1">Google Business Optimization</h3>
              <p className="text-xs text-[#A1A1AA] mb-6">Maximize visibility across local map coordinates and localized search results.</p>
              <div className="text-3xl font-black text-white mb-6">₹8,000</div>
              <div className="h-[1px] bg-white/5 mb-6" />
              <ul className="space-y-3 text-xs text-[#A1A1AA]">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#A855F7]" /> Complete Profile Structure Optimization</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#A855F7]" /> Map Target Vector Audit</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#A855F7]" /> Localized Search Parameter Strategy</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#A855F7]" /> Competitor Local Index Assessment</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#A855F7]" /> Local Reviews Response Planning</li>
              </ul>
            </div>
            <Link href="/contact" className="mt-8 w-full py-3 rounded-xl text-xs font-semibold text-center bg-[#050505] text-white border border-white/10 hover:bg-white/5 transition-colors">
              Request Local Setup
            </Link>
          </div>

          <div className="bg-[#111111] border border-[#8B5CF6] rounded-2xl p-8 flex flex-col justify-between shadow-xl relative">
            <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 text-[9px] uppercase font-bold text-white purple-gradient px-3 py-0.5 rounded-full tracking-wider">
              Recommended Unified Plan
            </span>
            <div>
              <h3 className="text-lg font-bold text-white mb-1">Complete Search Visibility Solution</h3>
              <p className="text-xs text-[#A1A1AA] mb-6">Our standard framework integration across both classic and AI search platforms.</p>
              <div className="text-3xl font-black text-white mb-6">₹20,000</div>
              <div className="h-[1px] bg-white/5 mb-6" />
              <ul className="space-y-3 text-xs text-[#A1A1AA]">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#8B5CF6]" /> Includes Both Services Above</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#8B5CF6]" /> Complete Technical Website SEO</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#8B5CF6]" /> Local Map Profile Optimization</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#8B5CF6]" /> AI Engine Citation Schema Tree</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#8B5CF6]" /> Advanced Search Footprint Integration</li>
              </ul>
            </div>
            <Link href="/contact" className="mt-8 w-full py-3 rounded-xl text-xs font-semibold text-center purple-gradient text-white transition-opacity hover:opacity-90">
              Request Complete Strategy Deployment
            </Link>
          </div>

        </div>

        {/* INDIVIDUAL SERVICES BLOCK */}
        <div className="p-6 bg-[#111111] border border-white/5 rounded-xl text-center max-w-2xl mx-auto space-y-2">
          <h4 className="text-sm font-bold text-white">Standalone Target Project Modules</h4>
          <p className="text-xs text-[#A1A1AA]">
            Looking for standalone schema injections or micro technical code crawls? We deliver standalone technical deliverables between <strong className="text-white">₹500–₹1,000</strong> per project loop.
          </p>
        </div>

        {/* PRICING TRANSPARENCY DEEP RESPONSES */}
        <div className="space-y-8 border-t border-white/5 pt-16">
          <h3 className="text-xl font-bold text-white tracking-tight flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-[#8B5CF6]" /> Pricing Architecture Clarity</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {transparentItems.map((item, idx) => (
              <div key={idx} className="bg-[#111111]/50 p-5 rounded-xl border border-white/5 space-y-2">
                <h4 className="text-xs font-bold text-white flex items-start gap-1.5"><HelpCircle className="w-3.5 h-3.5 text-[#A855F7] flex-shrink-0 mt-0.5" /> {item.q}</h4>
                <p className="text-xs text-[#A1A1AA] leading-relaxed">{item.at ? item.at : item.a}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}