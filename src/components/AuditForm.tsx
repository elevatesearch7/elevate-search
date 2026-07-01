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
      // Fire the processed dataset directly at our newly created backend API route
      const apiResponse = await fetch('/api/audit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name.trim(),
          phone: formData.phone.trim(),
          email: formData.email.trim(),
          website: cleanedWebsite,
          message: formData.message.trim()
        }),
      });

      if (apiResponse.ok) {
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
    <div className="w-full max-w-3xl mx-auto space-y-6">
      {status === 'success' ? (
        <div className="p-8 bg-purple-500/10 border border-purple-500/20 rounded-2xl text-center space-y-3">
          <p className="text-lg font-bold text-purple-400">⚡ Audit Roadmap Request Logged</p>
          <p className="text-xs text-[#A1A1AA] max-w-md mx-auto leading-relaxed">
            Excellent! Your site parameters have been compiled. Narayan is mapping your optimization roadmap frames and will drop your report over WhatsApp or Email shortly.
          </p>
          <button
            onClick={() => setStatus('idle')}
            className="text-xs text-white underline hover:text-purple-400 transition font-semibold mt-2"
          >
            Submit Another Matrix Asset
          </button>
        </div>
      ) : (
        <form onSubmit={handleFormSubmit} className="space-y-5">
          
          {/* 1. Client Name Input Panel */}
          <div className="space-y-2">
            <label className="block text-xs font-bold text-[#A1A1AA] tracking-wider uppercase">
              Client Name *
            </label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleInputChange}
              placeholder="e.g., Ramesh Kumar"
              className="w-full px-4 py-3 bg-black border border-white/10 focus:border-purple-500 rounded-xl text-sm text-white focus:outline-none transition"
            />
          </div>

          {/* 2. Phone / WhatsApp Input Panel */}
          <div className="space-y-2">
            <label className="block text-xs font-bold text-[#A1A1AA] tracking-wider uppercase">
              Phone Number or WhatsApp Number *
            </label>
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="e.g., +91 98765 43210 (To receive your report)"
              className="w-full px-4 py-3 bg-black border border-white/10 focus:border-purple-500 rounded-xl text-sm text-white focus:outline-none transition"
            />
          </div>

          {/* 3. Contact Email Input Panel */}
          <div className="space-y-2">
            <label className="block text-xs font-bold text-[#A1A1AA] tracking-wider uppercase">
              Mail ID *
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleInputChange}
              placeholder="e.g., client@company.com"
              className="w-full px-4 py-3 bg-black border border-white/10 focus:border-purple-500 rounded-xl text-sm text-white focus:outline-none transition"
            />
          </div>

          {/* 4. Current Target Website URL Panel (Fixed to type="text") */}
          <div className="space-y-2">
            <label className="block text-xs font-bold text-[#A1A1AA] tracking-wider uppercase">
              Current Target Website URL *
            </label>
            <input
              type="text"
              name="website"
              required
              value={formData.website}
              onChange={handleInputChange}
              placeholder="https://yourbrand.com"
              className={`w-full px-4 py-3 bg-black border rounded-xl text-sm text-white focus:outline-none transition ${
                validationError ? 'border-red-500 focus:border-red-500' : 'border-purple-500/30 focus:border-purple-500'
              }`}
            />
            {validationError && (
              <p className="text-xs font-semibold text-red-400 mt-1">{validationError}</p>
            )}
          </div>

          {/* 5. Operational Target Message Box Panel */}
          <div className="space-y-2">
            <label className="block text-xs font-bold text-[#A1A1AA] tracking-wider uppercase">
              Operational Target Message
            </label>
            <textarea
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Specify structural or visibility issue parameters..."
              className="w-full px-4 py-3 bg-black border border-white/5 rounded-xl text-sm text-white placeholder-white/10 focus:outline-none focus:border-purple-500 transition resize-none"
            />
          </div>

          {/* Error Warning Banner */}
          {status === 'error' && (
            <p className="text-xs text-red-400 text-center bg-red-500/10 p-3 rounded-xl border border-red-500/20">
              Transmission error. Please refresh or contact your platform operator directly over WhatsApp.
            </p>
          )}

          {/* Form Submit Trigger Button */}
          <button
            type="submit"
            disabled={status === 'submitting'}
            className="w-full py-4 bg-gradient-to-r from-purple-600 to-indigo-600 hover:opacity-95 disabled:opacity-50 text-white font-bold text-xs uppercase tracking-widest rounded-xl transition shadow-xl"
          >
            {status === 'submitting' ? 'Deploying Transmission Array...' : 'Submit Diagnostic Scan Request'}
          </button>
        </form>
      )}

      {/* Compliance Footer Shield */}
      <div className="p-4 bg-[#0A0A0A] rounded-xl border border-white/5 flex items-start gap-3">
        <div className="mt-0.5 text-purple-500">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m0-6h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </div>
        <p className="text-xs text-[#A1A1AA] leading-relaxed">
          We respect your information. Data submitted through this portal is used exclusively to generate your custom search optimization framework report. No third-party data sales or tracking loops are active.
        </p>
      </div>
    </div>
  );
}