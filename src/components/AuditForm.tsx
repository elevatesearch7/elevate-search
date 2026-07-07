'use client';

import React, { useState } from 'react';

export default function TerminalAuditForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    website: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [validationError, setValidationError] = useState<string | null>(null);

  // Structural check to ensure proper target lookup domain structures
  const checkValidDomain = (url: string) => {
    if (!url) return false;
    const pattern = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\/\w .-]*)*\/?$/;
    return pattern.test(url);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError(null);

    const cleanedWebsite = formData.website.trim();

    // Field integrity verification loops
    if (!formData.phone || !formData.email || !cleanedWebsite) {
      setValidationError('Please fill out all required fields marked with an asterisk (*).');
      return;
    }

    if (!checkValidDomain(cleanedWebsite)) {
      setValidationError('Please enter a correct website domain link (e.g., site.com or brand.vercel.app)');
      return;
    }

    setStatus('submitting');

    try {
      // Routes data arrays locally, avoiding browser extension interceptions completely
      const apiResponse = await fetch('/api/audit', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name.trim() || 'Organic Audit Lead',
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          website: cleanedWebsite,
          message: formData.message.trim()
        }),
      });

      const resultData = await apiResponse.json();

      if (apiResponse.ok && resultData.success) {
        setStatus('success');
        setFormData({ name: '', phone: '', email: '', website: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleFormSubmit} className="space-y-6 text-left text-white max-w-xl mx-auto font-sans">
      
      {/* 1. NAME IDENTIFIER INPUT NODE */}
      <div className="space-y-2">
        <label className="block text-[11px] font-bold uppercase tracking-wider text-zinc-400">Your Name / Company Name</label>
        <input 
          type="text" 
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Enter identity label"
          className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-purple-500 transition-colors duration-200"
        />
      </div>

      {/* 2. PHONE NUMBER INPUT NODE */}
      <div className="space-y-2">
        <label className="block text-[11px] font-bold uppercase tracking-wider text-zinc-400">Phone Number or WhatsApp Number *</label>
        <input 
          type="text" 
          name="phone"
          required
          value={formData.phone}
          onChange={handleInputChange}
          placeholder="1234567890"
          className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-purple-500 transition-colors duration-200"
        />
      </div>

      {/* 3. MAIL ID INPUT NODE */}
      <div className="space-y-2">
        <label className="block text-[11px] font-bold uppercase tracking-wider text-zinc-400">Mail ID *</label>
        <input 
          type="email" 
          name="email"
          required
          value={formData.email}
          onChange={handleInputChange}
          placeholder="yadavrishikesh53@gmail.com"
          className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-purple-500 transition-colors duration-200"
        />
      </div>

      {/* 4. WEBSITE TARGET LINK INPUT NODE */}
      <div className="space-y-2">
        <label className="block text-[11px] font-bold uppercase tracking-wider text-zinc-400">Current Target Website URL *</label>
        <input 
          type="text" 
          name="website"
          required
          value={formData.website}
          onChange={handleInputChange}
          placeholder="https://www.seoptimer.com/blueantinc.com"
          className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-purple-500 transition-colors duration-200"
        />
      </div>

      {/* 5. USER CONTEXT TEXTAREA NODE */}
      <div className="space-y-2 relative">
        <label className="block text-[11px] font-bold uppercase tracking-wider text-zinc-400">Operational Target Message</label>
        <textarea 
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleInputChange}
          placeholder="not ranking"
          className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-purple-500 transition-colors duration-200 resize-none"
        />
      </div>

      {/* CLIENT SPECIFIC VALIDATION WARNING LOG */}
      {validationError && (
        <div className="p-4 rounded-xl bg-red-950/20 border border-red-500/30 text-red-400 text-xs text-center font-semibold">
          {validationError}
        </div>
      )}

      {/* EXACT TRANSMISSION REJECTION FRAME MATCHING WhatsApp Image 2026-07-07 at 3.15.08 PM.jpeg */}
      {status === 'error' && (
        <div className="p-4 rounded-xl bg-red-950/10 border border-red-900/50 text-[#F43F5E] text-xs text-center font-medium tracking-wide">
          Transmission error. Please refresh or contact your platform operator directly over WhatsApp.
        </div>
      )}

      {/* SUCCESS MATRIX BANNER CONTAINER */}
      {status === 'success' && (
        <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/30 text-emerald-400 text-xs text-center font-semibold tracking-wide">
          ⚡ Diagnostic parameters synced successfully! Our tech cell will review your profile metrics shortly.
        </div>
      )}

      {/* SUBMIT ACTION CONTROLLER TRIGGER */}
      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full py-4 rounded-xl font-bold bg-[#6366F1] hover:bg-[#4F46E5] active:scale-[0.99] text-white text-xs uppercase tracking-widest disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-[0_4px_25px_rgba(99,102,241,0.25)]"
      >
        {status === 'submitting' ? 'Processing Diagnostic Stream...' : 'Submit Diagnostic Scan Request'}
      </button>
    </form>
  );
}