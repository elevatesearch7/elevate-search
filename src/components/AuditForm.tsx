'use client';

import React, { useState } from 'react';

interface FullAuditFormData {
  name: string;
  phone: string;
  email: string;
  website: string;
  message: string;
}

export default function TerminalAuditForm() {
  const [formData, setFormData] = useState<FullAuditFormData>({
    name: '',
    phone: '',
    email: '',
    website: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [validationError, setValidationError] = useState<string | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (name === 'website') setValidationError(null);
  };

  const checkValidDomain = (url: string): boolean => {
    const inputString = url.trim();
    if (!inputString) return false;

    let targetUrl = inputString;
    if (!/^https?:\/\//i.test(targetUrl)) {
      targetUrl = 'https://' + targetUrl;
    }

    try {
      const urlInstance = new URL(targetUrl);
      const hostParts = urlInstance.hostname.split('.');
      return hostParts.length >= 2 && hostParts.pop()!.length >= 2;
    } catch {
      return false;
    }
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError(null);

    const cleanedWebsite = formData.website.trim();

    if (!checkValidDomain(cleanedWebsite)) {
      setValidationError('Please enter a correct website domain link (e.g., site.com or brand.vercel.app)');
      return;
    }

    setStatus('submitting');

    try {
      const apiResponse = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: "00935dde-ee3f-4ed7-bdf7-168303be0ff9",
          subject: `🚨 New Elevate Search Lead: ${formData.name.trim()}`,
          from_name: "Elevate AI Terminal",
          name: formData.name.trim(),
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
    <div className="w-full max-w-3xl mx-auto relative px-4 sm:px-6 opacity-0 animate-fade-in-up">
      {/* Embedded High-End Custom Animation Keyframes */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); filter: blur(4px); }
          to { opacity: 1; transform: translateY(0); filter: blur(0); }
        }
        @keyframes glowPulse {
          0%, 100% { transform: scale(1) translate(0px, 0px); opacity: 0.15; }
          50% { transform: scale(1.08) translate(10px, -10px); opacity: 0.25; }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-glow-pulse {
          animation: glowPulse 7s ease-in-out infinite;
        }
      `}</style>

      {/* Cyberpunk Floating Background Glow Ambient Effect */}
      <div className="absolute -top-12 -left-12 w-72 h-72 bg-purple-600 rounded-full filter blur-[100px] pointer-events-none mix-blend-screen animate-glow-pulse" />
      <div className="absolute -bottom-12 -right-12 w-72 h-72 bg-indigo-600 rounded-full filter blur-[100px] pointer-events-none mix-blend-screen animate-glow-pulse" style={{ animationDelay: '3.5s' }} />

      {/* Main Structural Container Deck */}
      <div className="relative z-10 p-6 sm:p-10 bg-black/40 backdrop-blur-xl rounded-3xl border border-white/[0.06] shadow-[0_0_50px_-12px_rgba(168,85,247,0.15)] hover:border-purple-500/20 transition-all duration-500 group">
        
        {status === 'success' ? (
          <div className="p-8 bg-purple-500/5 border border-purple-500/20 rounded-2xl text-center space-y-4 shadow-inner">
            <div className="w-12 h-12 bg-purple-500/20 border border-purple-500/40 rounded-full flex items-center justify-center mx-auto text-purple-400 font-bold text-lg animate-bounce">✓</div>
            <p className="text-xl font-bold bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">⚡ Audit Roadmap Request Logged</p>
            <p className="text-xs text-[#A1A1AA] max-w-md mx-auto leading-relaxed">
              Excellent! Your site parameters have been compiled. Narayan is mapping your optimization roadmap frames and will drop your report over WhatsApp or Email shortly.
            </p>
            <button
              onClick={() => setStatus('idle')}
              className="text-xs text-purple-400 underline hover:text-white transition font-semibold mt-2 block mx-auto tracking-wider uppercase"
            >
              Submit Another Matrix Asset
            </button>
          </div>
        ) : (
          <form onSubmit={handleFormSubmit} className="space-y-6">
            
            {/* 1. Client Name Panel */}
            <div className="space-y-2 group/field">
              <label className="block text-xs font-bold text-[#A1A1AA] group-focus-within/field:text-purple-400 tracking-widest uppercase transition-colors duration-3xl">
                Client Name *
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleInputChange}
                placeholder="e.g., Ramesh Kumar"
                className="w-full px-5 py-3.5 bg-zinc-950/60 border border-white/10 focus:border-purple-500/80 rounded-xl text-sm text-white placeholder-white/20 focus:outline-none focus:ring-4 focus:ring-purple-500/10 transition-all duration-3xl hover:border-white/20"
              />
            </div>

            {/* 2. Phone / WhatsApp Panel */}
            <div className="space-y-2 group/field">
              <label className="block text-xs font-bold text-[#A1A1AA] group-focus-within/field:text-purple-400 tracking-widest uppercase transition-colors duration-3xl">
                Phone Number or WhatsApp Number *
              </label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="e.g., +91 98765 43210"
                className="w-full px-5 py-3.5 bg-zinc-950/60 border border-white/10 focus:border-purple-500/80 rounded-xl text-sm text-white placeholder-white/20 focus:outline-none focus:ring-4 focus:ring-purple-500/10 transition-all duration-3xl hover:border-white/20"
              />
            </div>

            {/* 3. Mail ID Panel */}
            <div className="space-y-2 group/field">
              <label className="block text-xs font-bold text-[#A1A1AA] group-focus-within/field:text-purple-400 tracking-widest uppercase transition-colors duration-3xl">
                Mail ID *
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                placeholder="e.g., client@company.com"
                className="w-full px-5 py-3.5 bg-zinc-950/60 border border-white/10 focus:border-purple-500/80 rounded-xl text-sm text-white placeholder-white/20 focus:outline-none focus:ring-4 focus:ring-purple-500/10 transition-all duration-3xl hover:border-white/20"
              />
            </div>

            {/* 4. Current Target Website URL Panel */}
            <div className="space-y-2 group/field">
              <label className="block text-xs font-bold text-[#A1A1AA] group-focus-within/field:text-purple-400 tracking-widest uppercase transition-colors duration-3xl">
                Current Target Website URL *
              </label>
              <input
                type="text"
                name="website"
                required
                value={formData.website}
                onChange={handleInputChange}
                placeholder="https://yourbrand.com"
                className={`w-full px-5 py-3.5 bg-zinc-950/60 border rounded-xl text-sm text-white placeholder-white/20 focus:outline-none transition-all duration-3xl ${
                  validationError 
                    ? 'border-red-500 focus:border-red-500 focus:ring-4 focus:ring-red-500/10' 
                    : 'border-white/10 focus:border-purple-500/80 focus:ring-4 focus:ring-purple-500/10 hover:border-white/20'
                }`}
              />
              {validationError && (
                <p className="text-xs font-semibold text-red-400 mt-1 flex items-center gap-1.5 animate-pulse">⚠️ {validationError}</p>
              )}
            </div>

            {/* 5. Operational Target Message Box Panel */}
            <div className="space-y-2 group/field">
              <label className="block text-xs font-bold text-[#A1A1AA] group-focus-within/field:text-purple-400 tracking-widest uppercase transition-colors duration-3xl">
                Operational Target Message
              </label>
              <textarea
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Specify structural or visibility issue parameters..."
                className="w-full px-5 py-3.5 bg-zinc-950/60 border border-white/10 focus:border-purple-500/80 rounded-xl text-sm text-white placeholder-white/10 focus:outline-none focus:ring-4 focus:ring-purple-500/10 transition-all duration-3xl hover:border-white/20 resize-none"
              />
            </div>

            {/* Error Warning Banner Frame */}
            {status === 'error' && (
              <p className="text-xs text-red-400 text-center bg-red-500/5 p-3 rounded-xl border border-red-500/20 tracking-wide font-medium">
                Transmission error. Please refresh or contact your platform operator directly over WhatsApp.
              </p>
            )}

            {/* Premium Interactive Form Submission Trigger Button */}
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full relative group/btn overflow-hidden py-4 bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600 bg-[length:200%_auto] hover:bg-right text-white font-bold text-xs uppercase tracking-widest rounded-xl transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98] shadow-[0_4px_20px_rgba(124,58,237,0.3)] hover:shadow-[0_4px_30px_rgba(124,58,237,0.5)]"
            >
              <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover/btn:animate-[shimmer_1.5s_ease-in-out_infinite]" />
              <span className="relative z-10 flex items-center justify-center gap-2 tracking-widest">
                {status === 'submitting' ? (
                  <>
                    <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Deploying Data Array...
                  </>
                ) : (
                  'Submit Diagnostic Scan Request'
                )}
              </span>
            </button>
          </form>
        )}

        {/* Compliance Footer Shield */}
        <div className="mt-8 pt-6 border-t border-white/[0.06] flex items-start gap-3 opacity-70 group-hover:opacity-90 transition-opacity duration-500">
          <div className="mt-0.5 text-purple-400">
            <svg className="w-4 h-4 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m0-6h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </div>
          <p className="text-[11px] text-[#A1A1AA] leading-relaxed tracking-wide">
            We respect your information. Data submitted through this portal is used exclusively to generate your custom search optimization framework report. No third-party data sales or tracking loops are active.
          </p>
        </div>
      </div>
    </div>
  );
}