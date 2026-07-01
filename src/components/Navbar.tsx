"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Solutions', href: '/solutions' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Insights', href: '/insights' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <nav className="sticky top-0 z-50 bg-[#050505]/80 backdrop-blur-md border-b border-white/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-10 h-10 overflow-hidden rounded-full border border-white/10">
                <Image 
                  src="/logo.png.png" 
                  alt="Elevate Search Logo" 
                  fill 
                  className="object-cover"
                  priority
                />
              </div>
              <span className="text-white font-bold text-xl tracking-tight">
                Elevate<span className="text-[#8B5CF6]">Search</span>
              </span>
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-medium transition-colors duration-200 relative py-1 ${
                    isActive ? 'text-white' : 'text-[#A1A1AA] hover:text-white'
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <motion.div 
                      layoutId="navIndicator" 
                      className="absolute bottom-0 left-0 right-0 h-[2px] purple-gradient rounded-full" 
                    />
                  )}
                </Link>
              );
            })}
          </div>

          <div className="hidden md:flex items-center">
            <Link 
              href="/contact" 
              className="px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 bg-white text-black hover:bg-white/90 flex items-center gap-1.5 hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]"
            >
              Get Free Audit
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#A1A1AA] hover:text-white p-2 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-20 left-0 w-full bg-[#050505] border-b border-white/10 px-4 py-6 space-y-4"
          >
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`block text-base font-medium p-2 rounded-lg transition-colors ${
                  pathname === item.href ? 'bg-[#111111] text-white' : 'text-[#A1A1AA] hover:text-white hover:bg-[#111111]/50'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-white/5">
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="w-full text-center block px-5 py-3 rounded-lg text-sm font-medium purple-gradient text-white transition-all duration-300"
              >
                Get Free Visibility Audit
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}