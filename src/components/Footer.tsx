"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Search, MapPin, Cpu, Radio, Mail, Phone, Instagram, MessageCircle } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050505] border-t border-white/10 pt-20 pb-10 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-glow opacity-30 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-8 h-8 overflow-hidden rounded-full border border-white/10">
                <Image src="/logo.png.png" alt="Elevate Search" fill className="object-cover" />
              </div>
              <span className="text-white font-bold text-lg tracking-tight">
                Elevate<span className="text-[#8B5CF6]">Search</span>
              </span>
            </Link>
            <p className="text-sm text-[#A1A1AA] leading-relaxed">
              Be Found. Be Chosen. Elevate Search transforms enterprise visual presence across standard search engines, mapping applications, and emerging conversational AI discovery platforms[cite: 1].
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase mb-6">Navigation</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/" className="text-[#A1A1AA] hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-[#A1A1AA] hover:text-white transition-colors">About</Link></li>
              <li><Link href="/solutions" className="text-[#A1A1AA] hover:text-white transition-colors">Solutions</Link></li>
              <li><Link href="/pricing" className="text-[#A1A1AA] hover:text-white transition-colors">Pricing</Link></li>
              <li><Link href="/insights" className="text-[#A1A1AA] hover:text-white transition-colors">Insights</Link></li>
              <li><Link href="/contact" className="text-[#A1A1AA] hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Capabilities */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase mb-6">Optimizations</h4>
            <ul className="space-y-3 text-sm text-[#A1A1AA]">
              <li className="flex items-center gap-2"><Search className="w-4 h-4 text-[#8B5CF6]" /> Website Engine SEO</li>
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-[#8B5CF6]" /> Google Maps Matrix</li>
              <li className="flex items-center gap-2"><Cpu className="w-4 h-4 text-[#A855F7]" /> AI Overview (AEO)</li>
              <li className="flex items-center gap-2"><Radio className="w-4 h-4 text-[#A855F7]" /> Conversational Engines</li>
            </ul>
          </div>

          {/* Column 4: Contact Details Block */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase mb-6">Direct Channels</h4>
            <ul className="space-y-3.5 text-xs text-[#A1A1AA]">
              <li>
                <a href="mailto:elevatesearch7@gmail.com" className="flex items-center gap-2.5 hover:text-white transition-colors group">
                  <Mail className="w-4 h-4 text-[#8B5CF6] group-hover:scale-110 transition-transform" />
                  <span>elevatesearch7@gmail.com</span>
                </a>
              </li>
              <li>
                <a href="tel:+918850286037" className="flex items-center gap-2.5 hover:text-white transition-colors group">
                  <Phone className="w-4 h-4 text-[#8B5CF6] group-hover:scale-110 transition-transform" />
                  <span>8850286037</span>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/elevate_search?igsh=MXNrNW5yOTcwcWE2ZA==" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 hover:text-white transition-colors group">
                  <Instagram className="w-4 h-4 text-[#A855F7] group-hover:scale-110 transition-transform" />
                  <span>@elevate_search</span>
                </a>
              </li>
              <li className="pt-2">
                <a 
                  href="https://wa.me/918850286037" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/20 font-semibold transition-all group"
                >
                  <MessageCircle className="w-4 h-4 fill-emerald-400/10 group-hover:rotate-12 transition-transform" />
                  Chat on WhatsApp
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#A1A1AA]">
            &copy; {currentYear} Elevate Search. All structural operational rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-[#A1A1AA]">
            <span className="hover:text-white cursor-pointer transition-colors">Privacy Framework</span>
            <span className="hover:text-white cursor-pointer transition-colors">Terms of Operations</span>
          </div>
        </div>
      </div>
    </footer>
  );
}