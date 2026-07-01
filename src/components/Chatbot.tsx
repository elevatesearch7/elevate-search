"use client";

import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Sparkles, ArrowUpRight, MessageCircle, Terminal } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
  sender: 'bot' | 'user';
  text: string;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: 'bot',
      text: "Hello! 👋 I am your unified Elevate Search AI agent. Ask me *anything* about fixing your web code, local map positioning drops, pricing layouts, or our founder Narayan Yadav!"
    }
  ]);

  const scrollerEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollerEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isTyping) return;

    const currentQuery = inputValue.trim();
    setInputValue('');
    setMessages((prev) => [...prev, { sender: 'user', text: currentQuery }]);
    setIsTyping(true);

    try {
      // Connect to our secure internal Next.js server route handler
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: currentQuery })
      });

      const serverData = await res.json();
      setMessages((prev) => [...prev, { sender: 'bot', text: serverData.text }]);
    } catch (err) {
      setMessages((prev) => [...prev, { sender: 'bot', text: "Network signal drop detected. Let's sync up directly over on WhatsApp to resolve this!" }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            className="bg-[#111111] border border-white/10 rounded-2xl w-[340px] sm:w-[380px] h-[520px] flex flex-col shadow-2xl overflow-hidden mb-4"
          >
            {/* Header */}
            <div className="p-4 purple-gradient text-white flex items-center justify-between shadow-md">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-lg bg-black/20 text-white">
                  <Terminal className="w-4 h-4"/>
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider">Elevate AI Terminal</h4>
                  <span className="text-[10px] text-white/80 block">Generative Model Core Active</span>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="p-1 rounded-md bg-black/10 hover:bg-black/20 text-white transition-colors">
                <X className="w-4 h-4"/>
              </button>
            </div>

            {/* Chat Board Area */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-[#050505]/40 scrollbar-none flex flex-col">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}>
                  <div className={`max-w-[85%] p-3 rounded-xl text-xs sm:text-sm leading-relaxed ${
                    msg.sender === 'user' 
                      ? 'purple-gradient text-white rounded-tr-none' 
                      : 'bg-[#111111] border border-white/5 text-[#A1A1AA] rounded-tl-none'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex items-center gap-1.5 p-2.5 bg-[#111111] border border-white/5 rounded-xl w-max rounded-tl-none text-xs text-[#A1A1AA]">
                  <Sparkles className="w-3.5 h-3.5 text-[#8B5CF6] animate-pulse" />
                  AI is analyzing visibility models...
                </div>
              )}
              <div ref={scrollerEndRef} />
            </div>

            {/* Sticky Action Channel Redirection Shortcuts always at base */}
            <div className="p-2 bg-[#050505]/60 border-t border-white/5 flex gap-2 justify-center">
              <a href="/contact" className="inline-flex items-center gap-1 text-[10px] font-bold px-2.5 py-1.5 rounded-lg bg-white text-black hover:bg-white/90 transition-colors">
                Free Audit Form <ArrowUpRight className="w-3 h-3" />
              </a>
              <a href="https://wa.me/918850286037" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-[10px] font-bold px-2.5 py-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 hover:bg-emerald-500/20 transition-all">
                <MessageCircle className="w-3.5 h-3.5 fill-emerald-400/10" /> Connect WhatsApp
              </a>
            </div>

            {/* Input Form Box */}
            <form onSubmit={handleSendMessage} className="p-3 bg-[#050505] border-t border-white/5 flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask anything naturally..."
                className="flex-1 bg-[#111111] border border-white/10 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white placeholder-[#A1A1AA] focus:outline-none focus:border-[#8B5CF6] transition-colors"
                disabled={isTyping}
              />
              <button
                type="submit"
                disabled={isTyping}
                className="p-2.5 rounded-xl purple-gradient text-white shadow-md hover:opacity-90 transition-opacity flex items-center justify-center disabled:opacity-40"
              >
                <Send className="w-4 h-4"/>
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <button onClick={() => setIsOpen(!isOpen)} className="purple-gradient text-white p-4 rounded-full shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center group relative border border-white/10">
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-500 rounded-full border-2 border-[#050505]" />
        <MessageSquare className="w-6 h-6 group-hover:rotate-6 transition-transform"/>
      </button>
    </div>
  );
}