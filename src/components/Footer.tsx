'use client';

import React from 'react';
import Link from 'next/link';
import { Search, MapPin, Cpu, Radio, Mail, Phone, Instagram } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-black text-white border-t border-white/[0.05] py-16 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 items-start">
          
          {/* COLUMN 1: BRAND PLATFORM ANCHOR */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3 group inline-flex">
              {/* Correct Target Resolution for logo.webp inside Footer */}
              <img 
                src="/logo.webp" 
                alt="Elevate Search Logo" 
                className="w-10 h-10 rounded-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              
              {/* Premium Gradient Logo Typography Matching Header */}
              <span className="font-black text-xl tracking-tight select-none">
                <span className="bg-gradient-to-b from-white to-zinc-300 bg-clip-text text-transparent">
                  Elevate
                </span>
                <span className="bg-gradient-to-r from-purple-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent ml-1 drop-shadow-[0_0_15px_rgba(168,85,247,0.2)]">
                  Search
                </span>
              </span>
            </Link>
            
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">
              Be Found. Be Chosen. Elevate Search transforms enterprise visual presence 
              across standard search engines, mapping applications, and emerging conversational 
              AI discovery platforms.
            </p>
          </div>

          {/* COLUMN 2: SITE NAVIGATION INDEX */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-300">Navigation</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-400 font-medium">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link href="/solutions" className="hover:text-white transition-colors">Solutions</Link></li>
              <li><Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
              <li><Link href="/insights" className="hover:text-white transition-colors">Insights</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* COLUMN 3: SERVICE OPTIMIZATIONS CORE */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-300">Optimizations</h4>
            <ul className="space-y-3 text-xs sm:text-sm text-zinc-400 font-medium">
              <li className="flex items-center gap-2.5">
                <Search className="w-4 h-4 text-purple-400" />
                <span>Website Engine SEO</span>
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-indigo-400" />
                <span>Google Maps Matrix</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Cpu className="w-4 h-4 text-purple-400" />
                <span>AI Overview (AEO)</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Radio className="w-4 h-4 text-indigo-400" />
                <span>Conversational Engines</span>
              </li>
            </ul>
          </div>

          {/* COLUMN 4: DIRECT COMMUNICATIONS HUB */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-300">Direct Channels</h4>
            <ul className="space-y-3 text-xs sm:text-sm text-zinc-400 font-medium break-all">
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-purple-400 flex-shrink-0" />
                <a href="mailto:elevatesearch7@gmail.com" className="hover:text-white transition-colors">elevatesearch7@gmail.com</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-purple-400 flex-shrink-0" />
                <a href="tel:+918850286037" className="hover:text-white transition-colors">8850286037</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Instagram className="w-4 h-4 text-purple-400 flex-shrink-0" />
                <a href="https://instagram.com/elevate_search" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">@elevate_search</a>
              </li>
            </ul>
            
            {/* Interactive WhatsApp Gateway Button */}
            <div className="pt-2">
              <a 
                href="https://wa.me/918850286037" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-950/30 border border-emerald-500/20 text-emerald-400 hover:text-white hover:bg-emerald-600 hover:border-emerald-500 text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-[0_4px_20px_rgba(16,185,129,0.05)]"
              >
                {/* Embedded Stable Native WhatsApp Icon Node */}
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.703 1.458h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Chat on WhatsApp
              </a>
            </div>
          </div>

        </div>

        {/* BOTTOM METADATA BAR */}
        <div className="mt-16 pt-8 border-t border-white/[0.03] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-500 font-medium">
          <p>© {currentYear} Elevate Search. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-zinc-300 transition-colors">Privacy Framework</Link>
            <Link href="/terms" className="hover:text-zinc-300 transition-colors">Terms of Vector Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}