"use client";

import React, { useState } from 'react';
import { ShieldAlert, Send, FileCheck, CheckCircle2 } from 'lucide-react';
import SchemaMarkup from "@/components/SchemaMarkup";

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessName: '',
    website: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Verification of fields block
    if (formData.name && formData.email && formData.website) {
      setFormSubmitted(true);
    }
  };

  const breadcrumbData = {
    itemListElement: [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://elevatesearch.in" },
      { "@type": "ListItem", "position": 2, "name": "Contact", "item": "https://elevatesearch.in/contact" }
    ]
  };

  return (
    <div className="relative w-full py-20">
      <SchemaMarkup type="BreadcrumbList" data={breadcrumbData} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* HEADER SECTION */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-[#8B5CF6]">Intake Portal</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">Initiate Visibility Mapping</h1>
          <p className="text-sm text-[#A1A1AA] leading-relaxed">
            Submit your operational web details below. Our team will crawl your profiles and deliver an actionable diagnostic strategy layout.
          </p>
        </div>

        <div className="bg-[#111111] border border-white/10 rounded-2xl p-6 sm:p-10 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[3px] purple-gradient" />

          {!formSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#A1A1AA]">Full Name *</label>
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Jane Doe" 
                    className="w-full bg-[#050505] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#8B5CF6] transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#A1A1AA]">Email Address *</label>
                  <input 
                    type="email" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="jane@company.com" 
                    className="w-full bg-[#050505] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#8B5CF6] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#A1A1AA]">Phone Number</label>
                  <input 
                    type="tel" 
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    placeholder="+91 98765 43210" 
                    className="w-full bg-[#050505] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#8B5CF6] transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#A1A1AA]">Business Entity Name</label>
                  <input 
                    type="text" 
                    value={formData.businessName}
                    onChange={(e) => setFormData({...formData, businessName: e.target.value})}
                    placeholder="Enterprise Holdings Ltd" 
                    className="w-full bg-[#050505] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#8B5CF6] transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#A1A1AA]">Current Target Website URL *</label>
                <input 
                  type="url" 
                  required
                  value={formData.website}
                  onChange={(e) => setFormData({...formData, website: e.target.value})}
                  placeholder="https://company.com" 
                  className="w-full bg-[#050505] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#8B5CF6] transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#A1A1AA]">Operational Target Message</label>
                <textarea 
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="Detail explicit ranking drops, localized map errors, or specific search coverage requests here..." 
                  className="w-full bg-[#050505] border border-white/10 rounded-xl px-4 py-4 text-sm text-white focus:outline-none focus:border-[#8B5CF6] transition-colors resize-none"
                />
              </div>

              <div className="p-4 bg-[#050505] border border-white/5 rounded-xl flex gap-3 items-center text-xs text-[#A1A1AA]">
                <ShieldAlert className="w-4 h-4 text-[#A855F7] flex-shrink-0" />
                <span>We respect your information. Data submitted through this portal is used exclusively to generate your custom search optimization framework report. No third-party data sales or tracking loops are active.</span>
              </div>

              <button 
                type="submit"
                className="w-full py-4 rounded-xl text-sm font-bold tracking-wide text-white purple-gradient transition-all shadow-md hover:opacity-95 flex items-center justify-center gap-2"
              >
                Request Free Visibility Audit <Send className="w-4 h-4" />
              </button>

            </form>
          ) : (
            <div className="text-center py-12 space-y-4">
              <div className="w-12 h-12 rounded-full bg-[#8B5CF6]/10 border border-[#8B5CF6]/30 flex items-center justify-center mx-auto text-[#8B5CF6]">
                <FileCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Project Data Safely Enqueued</h3>
              <p className="text-xs sm:text-sm text-[#A1A1AA] max-w-md mx-auto leading-relaxed">
                Our analysis loop has initiated tracking for <strong className="text-white">{formData.website}</strong>. An engineer will deliver your search visibility diagnostics document directly to <strong className="text-white">{formData.email}</strong> shortly.
              </p>
            </div>
          )}
        </div>

        {/* ANSWERS ARRAY BOTTOM WRAPPER */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-white/5 text-xs text-[#A1A1AA]">
          <div className="space-y-1.5">
            <h4 className="text-white font-medium">How much does an audit cost?</h4>
            <p className="leading-relaxed">Initial strategic mapping loops submitted via this formal portal are executed at zero financial cost (₹0) to ensure baseline accessibility.</p>
          </div>
          <div className="space-y-1.5">
            <h4 className="text-white font-medium">How long does delivery take?</h4>
            <p className="leading-relaxed">Most initial crawls and technical diagnostic reports are completed and sent to your email within 24 to 48 business hours.</p>
          </div>
        </div>

      </div>
    </div>
  );
}