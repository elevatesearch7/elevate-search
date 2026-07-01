'use client';

import React, { useState } from 'react';

interface AuditFormData {
  website: string;
  message: string;
}

export default function TerminalAuditForm() {
  const [formData, setFormData] = useState<AuditFormData>({
    website: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorText, setErrorText] = useState<string | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (name === 'website') setErrorText(null);
  };

  // Smart validation: handles copy-pastes, missing protocols, subdomains, and trailing spaces smoothly
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
    setErrorText(null);

    // Clean up trailing spaces before executing validation checks
    const cleanedWebsiteValue = formData.website.trim();

    if (!checkValidDomain(cleanedWebsiteValue)) {
      setErrorText('Please enter a valid website domain link (e.g., site.com or brand.vercel.app)');
      return;
    }

    setStatus('submitting');

    try {
      // Package clean data to send to your backend server architecture
      const submissionPayload = {
        website: cleanedWebsiteValue,
        message: formData.message.trim(),
      };

      // TODO: If you have an active API endpoint or Webhook route, hook it up here:
      // await fetch('/api/audit', { method: 'POST', body: JSON.stringify(submissionPayload) });

      await new Promise((resolve) => setTimeout(resolve, 1200)); // Simulated pipeline latency
      setStatus('success');
      setFormData({ website: '', message: '' });
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto space-y-6">
      {status === 'success' ? (
        <div className="p-6 bg-purple-500/10 border border-purple-500/20 rounded-xl text-center space-y-2">
          <p className="text-base font-bold text-purple-400">⚡ Scanning Pipeline Initialized Successfully</p>
          <p className="text-xs text-[#A1A1AA]">Our system is currently processing the target node array layers.</p>
          <button
            onClick={() => setStatus('idle')}
            className="text-xs text-white underline hover:text-purple-400 transition font-medium mt-2"
          >
            Submit Another Matrix Targeted Asset
          </button>
        </div>
      ) : (
        <form onSubmit={handleFormSubmit} className="space-y-6">
          
          {/* Website URL Field Configuration - Changed to type="text" to stop browser tooltips */}
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
                errorText ? 'border-red-500 focus:border-red-500' : 'border-purple-500/30 focus:border-purple-500'
              }`}
            />
            {errorText && (
              <p className="text-xs font-semibold text-red-400 mt-1">{errorText}</p>
            )}
          </div>

          {/* Operational Message Field Configuration */}
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
              Structural channel loss. Please re-submit or contact your platform operator directly.
            </p>
          )}

          {/* Form Trigger Submission Action */}
          <button
            type="submit"
            disabled={status === 'submitting'}
            className="w-full py-3.5 bg-gradient-to-r from-purple-600 to-indigo-600 hover:opacity-95 disabled:opacity-50 text-white font-bold text-xs uppercase tracking-widest rounded-xl transition shadow-xl"
          >
            {status === 'submitting' ? 'Running Structural Diagnostic...' : 'Submit Diagnostic Scan Request'}
          </button>
        </form>
      )}

      {/* Trust Compliance Notice Footer Panel */}
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