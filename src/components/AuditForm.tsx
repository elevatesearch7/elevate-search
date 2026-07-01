'use client';

import React, { useState } from 'react';

// Strict TypeScript interfaces for form state management
interface FormData {
  businessName: string;
  email: string;
  website: string;
}

export default function AuditForm() {
  const [formData, setFormData] = useState<FormData>({
    businessName: '',
    email: '',
    website: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [validationError, setValidationError] = useState<string | null>(null);

  // Smart URL parser: accepts google.com, elevate-search.vercel.app, http/https prefixes, trailing slashes
  const validateWebsiteUrl = (url: string): boolean => {
    const cleanUrl = url.trim();
    if (!cleanUrl) return false;

    let testUrl = cleanUrl;
    // Safely inject protocol if the client left it out
    if (!/^https?:\/\//i.test(testUrl)) {
      testUrl = 'https://' + testUrl;
    }

    try {
      const parsed = new URL(testUrl);
      // Verify domain has a root and a valid extension length (e.g., .com, .in, .app)
      const parts = parsed.hostname.split('.');
      return parts.length >= 2 && parts.pop()!.length >= 2;
    } catch {
      return false;
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear validation warnings actively while the user is editing the line
    if (name === 'website') {
      setValidationError(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError(null);

    // 1. Run the strict structural URL test
    if (!validateWebsiteUrl(formData.website)) {
      setValidationError('Please enter a correct website URL (e.g., mysite.com or https://mysite.in)');
      return;
    }

    setStatus('submitting');

    try {
      // TODO: Replace this with your actual form submission API route or Webhook if active
      // For now, we simulate a fast cloud save pipeline
      await new Promise((resolve) => setTimeout(resolve, 1200));
      
      setStatus('success');
      setFormData({ businessName: '', email: '', website: '' });
    } catch (error) {
      console.error('Submission failed:', error);
      setStatus('error');
    }
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-[#111111]/80 rounded-2xl border border-white/5 shadow-2xl backdrop-blur-xl">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-white tracking-tight">Request Free Visibility Audit</h3>
        <p className="text-xs text-[#A1A1AA] mt-1">Our system will scan your assets for architectural and indexing defects.</p>
      </div>

      {status === 'success' ? (
        <div className="p-4 bg-purple-500/10 border border-purple-500/20 rounded-xl text-center space-y-2 animate-fadeIn">
          <p className="text-sm font-semibold text-purple-400">⚡ Audit Blueprint Scheduled!</p>
          <p className="text-xs text-[#A1A1AA] leading-relaxed">
            We are pulling your indexing frames. Your technical breakdown report will hit your inbox shortly.
          </p>
          <button
            onClick={() => setStatus('idle')}
            className="mt-2 text-xs font-bold text-white underline hover:text-purple-400 transition"
          >
            Submit another asset
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Business Name Input */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-white/70">Business Name</label>
            <input
              type="text"
              name="businessName"
              required
              value={formData.businessName}
              onChange={handleInputChange}
              placeholder="e.g., Apex Dental Clinic"
              className="w-full px-4 py-2.5 bg-black/50 border border-white/10 rounded-xl text-sm text-white placeholder-white/20 focus:outline-none focus:border-purple-500 transition"
            />
          </div>

          {/* Email Address Input */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-white/70">Contact Email</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleInputChange}
              placeholder="name@company.com"
              className="w-full px-4 py-2.5 bg-black/50 border border-white/10 rounded-xl text-sm text-white placeholder-white/20 focus:outline-none focus:border-purple-500 transition"
            />
          </div>

          {/* Website URL Input - Configured to Text to Bypass Default Browser Breaks */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-white/70">Website URL</label>
            <input
              type="text"
              name="website"
              required
              value={formData.website}
              onChange={handleInputChange}
              placeholder="e.g., brand.com or brand.vercel.app"
              className={`w-full px-4 py-2.5 bg-black/50 border rounded-xl text-sm text-white placeholder-white/20 focus:outline-none transition ${
                validationError ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-purple-500'
              }`}
            />
            {validationError && (
              <p className="text-[11px] font-medium text-red-400 animate-slideUp">{validationError}</p>
            )}
          </div>

          {/* Error Callback Banner */}
          {status === 'error' && (
            <p className="text-xs text-red-400 text-center bg-red-500/10 p-2 rounded-lg border border-red-500/20">
              Network signal loop drop. Please try again or ping our terminal directly via WhatsApp.
            </p>
          )}

          {/* Submission Action Anchor */}
          <button
            type="submit"
            disabled={status === 'submitting'}
            className="w-full mt-2 py-3 bg-gradient-to-r from-[#A855F7] to-[#7C3AED] hover:opacity-95 text-white font-bold text-xs rounded-xl shadow-lg transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed tracking-wider uppercase"
          >
            {status === 'submitting' ? 'Running Diagnostic Array...' : 'Deploy Optimization Scan'}
          </button>
        </form>
      )}
    </div>
  );
}