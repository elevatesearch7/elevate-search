'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search, MapPin, Cpu, MessageSquare, Mic, Layers, Globe,
  CheckCircle2, AlertTriangle, AlertCircle, Info, ChevronDown,
  ArrowUpRight, Play, RefreshCw, Code, LayoutDashboard, Copy, Sparkles, Terminal
} from 'lucide-react';

// Self-contained Schema Markup generator to prevent import errors and ensure search index parsing
function SchemaMarkup({ type, data }: { type: string; data: any }) {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": type,
      ...data
    });
    document.head.appendChild(script);
    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, [type, data]);
  return null;
}

interface AuditIssue {
  id: string;
  category: 'SEO' | 'AEO' | 'GEO' | 'GMB';
  title: string;
  type: 'Error' | 'Warning' | 'Notice';
  description: string;
  fixText: string;
  codeSnippet?: string;
  impactScore: 'HIGH' | 'MEDIUM' | 'LOW';
}

const INITIAL_ISSUES: AuditIssue[] = [
  {
    id: "ISSUE-01",
    category: "SEO",
    title: "Missing Structured JSON-LD LocalBusiness Schema Markup",
    type: "Error",
    description: "Your domain lacks explicit machine-readable schema vocabulary. Google crawlers are forced to make assumptions regarding your business category, spatial operating boundaries, and physical coordinates.",
    impactScore: "HIGH",
    codeSnippet: `{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Elevate Search HQ",
  "image": "https://elevatesearch.io/logo.webp",
  "telephone": "+918850286037",
  "email": "elevatesearch7@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Enterprise Sector 4",
    "addressLocality": "Mumbai",
    "postalCode": "400001",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 19.0760,
    "longitude": 72.8777
  }
}`,
    fixText: "Deploy custom JSON-LD schema blocks directly inside the metadata layout header on your root template file."
  },
  {
    id: "ISSUE-02",
    category: "SEO",
    title: "Excessive Largest Contentful Paint (LCP) Load Speed Lag",
    type: "Warning",
    description: "The primary graphical elements on your mobile page take 3.8s to fully render. Google's page speed pipeline de-prioritizes slow assets, causing direct drops in search indexing ranks.",
    impactScore: "HIGH",
    fixText: "Compress and scale heavy media backgrounds. Implement priority loading attributes on the hero container nodes, and optimize server-side page caching."
  },
  {
    id: "ISSUE-03",
    category: "AEO",
    title: "Non-Semantic H1-H3 Taxonomy Heading Relationships",
    type: "Warning",
    description: "Your heading layers jump from H1 directly to non-conforming structural divs. Google's AI Overview parser reads structured nested headers to build native summaries; broken outlines prevent extraction.",
    impactScore: "MEDIUM",
    codeSnippet: `<!-- Optimize heading outline directly inside templates -->
<h1>Enterprise Search Visibility</h1>
<h2>Operational Core Strategies</h2>
<h3>JSON-LD Schema Deployments</h3>`,
    fixText: "Restructure your page heading blocks into a clean, logical outline so web parsers can map content relationships correctly."
  },
  {
    id: "ISSUE-04",
    category: "GEO",
    title: "Missing Brand Entity Citations in OpenAI Web Index",
    type: "Error",
    description: "OpenAI's web indexing crawler (GPTBot) cannot find verified categorical links tying your services to targeted intent clusters. ChatGPT is unable to pull your brand as a valid reference.",
    impactScore: "HIGH",
    fixText: "Build structural index citations across high-authority platforms, optimize the entity frequency matches on your about layouts, and whitelist search crawl agents in robots.txt."
  },
  {
    id: "ISSUE-05",
    category: "GMB",
    title: "Critical Google Business Profile Proximity Drop Detected",
    type: "Error",
    description: "At coordinate offset markers [0,4] and [4,1], your local Business Profile drop out of the 3-pack pool entirely due to poor review responses and geographical reference mismatches.",
    impactScore: "HIGH",
    fixText: "Unify Name, Address, and Phone (NAP) details across local citation networks, optimize physical geo-grid keyword matches, and respond systematically to client reviews."
  },
  {
    id: "ISSUE-06",
    category: "AEO",
    title: "Semantic Text Density Fallback on Core Keywords",
    type: "Notice",
    description: "The semantic keyword balance inside optimization sections is below the optimal 1.5% threshold. This decreases citation eligibility for Google AI Overview summaries.",
    impactScore: "LOW",
    fixText: "Restructure technical terminology paragraphs to systematically weave in relevant organic synonyms and core business tokens."
  }
];

export default function AuditDashboard() {
  const [domain, setDomain] = useState('enterprise.io');
  const [gmbName, setGmbName] = useState('Enterprise Solutions HQ');
  const [scanActive, setScanActive] = useState(false);
  const [scanProgress, setScanProgress] = useState(100);
  const [activeTab, setActiveTab] = useState<'SEO' | 'AEO' | 'GEO' | 'GMB'>('SEO');
  const [healthScore, setHealthScore] = useState(78);
  const [issues, setIssues] = useState<AuditIssue[]>(INITIAL_ISSUES);
  const [expandedIssue, setExpandedIssue] = useState<string | null>(null);
  const [scanStatus, setScanStatus] = useState('System ready for deep algorithmic diagnosis.');
  const [copiedCodeId, setCopiedCodeId] = useState<string | null>(null);

  // Stats Counters
  const totalErrors = issues.filter(i => i.type === 'Error').length;
  const totalWarnings = issues.filter(i => i.type === 'Warning').length;
  const totalNotices = issues.filter(i => i.type === 'Notice').length;

  // Active Grid Data for Local GMB Heatmap
  const [geoGrid, setGeoGrid] = useState<number[][]>([
    [1, 2, 4, 3, 6],
    [3, 1, 2, 5, 8],
    [5, 4, 2, 7, 12],
    [8, 7, 9, 14, 18],
    [12, 15, 17, 20, 20]
  ]);

  const [selectedGeoNode, setSelectedGeoNode] = useState<{x: number, y: number, rank: number} | null>({ x: 2, y: 2, rank: 2 });

  const runDiagnosticScan = () => {
    if (scanActive) return;
    setScanActive(true);
    setScanProgress(0);
    setExpandedIssue(null);
    setScanStatus('Initializing scan engine...');

    const stages = [
      { progress: 15, status: 'Querying public DNS structures and robots.txt parameters...' },
      { progress: 35, status: 'Analyzing traditional desktop & mobile SEO Core layouts...' },
      { progress: 55, status: 'Parsing semantic entity layers for AEO eligibility indicators...' },
      { progress: 75, status: 'Scanning OpenAI vector indices and Gemini knowledge graphs...' },
      { progress: 90, status: 'Calibrating proximity geo-grid coordinates against regional pack layers...' },
      { progress: 100, status: 'Diagnostic scan complete. Matrices synchronized.' }
    ];

    let currentStage = 0;
    const interval = setInterval(() => {
      setScanProgress(prev => {
        const next = prev + 5;
        
        if (currentStage < stages.length && next >= stages[currentStage].progress) {
          setScanStatus(stages[currentStage].status);
          currentStage++;
        }

        if (next >= 100) {
          clearInterval(interval);
          setScanActive(false);
          
          const newScore = Math.floor(Math.random() * 15) + 72; // Score between 72 and 87
          setHealthScore(newScore);

          // Randomize GMB Heatmap matrix
          const newGrid = Array.from({ length: 5 }, () =>
            Array.from({ length: 5 }, () => Math.floor(Math.random() * 19) + 1)
          );
          setGeoGrid(newGrid);
          setSelectedGeoNode({ x: 2, y: 2, rank: newGrid[2][2] });

          const modifiedIssues = INITIAL_ISSUES.map(issue => {
            if (issue.id === 'ISSUE-02') {
              return { ...issue, type: Math.random() > 0.5 ? 'Error' : 'Warning' } as AuditIssue;
            }
            return issue;
          });
          setIssues(modifiedIssues);
        }
        return next;
      });
    }, 150);
  };

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCodeId(id);
    setTimeout(() => setCopiedCodeId(null), 2000);
  };

  return (
    <div className="w-full min-h-screen bg-[#050505] text-white selection:bg-purple-500/30 overflow-x-hidden pt-28 pb-16 font-sans">
      <SchemaMarkup
        type="WebPage"
        data={{
          name: "Interactive Search Visibility Audit Dashboard - Elevate Search",
          description: "Perform real-time cybernetic diagnostic sweeps across your domain. Trace indexation health, GMB proximity maps, and AI Summary (AEO) ranking potentials.",
          url: "https://elevatesearch.io/audit"
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* TOP LEVEL NAVIGATION COMPONENT BRAND HEADER */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-white/5 pb-6">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-purple-500/5 border border-purple-500/20 text-purple-400 text-[10px] font-mono tracking-widest uppercase">
              <Terminal className="w-3.5 h-3.5 animate-pulse" /> Algorithmic Audit Cockpit // v4.6
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-none">
              Interactive <span className="bg-gradient-to-r from-purple-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">Site Sweeper</span>
            </h1>
            <p className="text-xs sm:text-sm text-zinc-500 font-medium">
              Run complete real-time diagnostics mapping standard SEO, AI Summary grids (AEO), vector mentions (GEO), and maps proximity parameters.
            </p>
          </div>

          <div className="inline-flex gap-2">
            <Link href="/" className="px-4 py-2 bg-zinc-900 border border-zinc-800 text-zinc-400 text-xs font-semibold rounded-lg hover:text-white hover:bg-zinc-850 hover:border-zinc-700 transition-colors inline-flex items-center gap-1.5">
              <LayoutDashboard className="w-3.5 h-3.5" /> Return Home
            </Link>
            <Link href="/contact" className="px-4 py-2 purple-gradient text-white text-xs font-semibold rounded-lg border border-purple-400/20 hover:scale-[1.02] transition-transform inline-flex items-center gap-1.5">
              Lock In Expert Help <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* CRAWL SCANNER INPUT CONTROL CONTROLLER PANEL */}
        <div className="bg-zinc-950/80 border border-zinc-800/80 rounded-xl p-5 sm:p-6 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end relative z-10">
            <div className="space-y-2">
              <label className="text-[10px] font-mono text-zinc-500 tracking-wider uppercase block">Target Web Domain URL</label>
              <div className="relative">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-600" />
                <input 
                  type="text" 
                  value={domain} 
                  onChange={(e) => setDomain(e.target.value)}
                  disabled={scanActive}
                  className="w-full bg-zinc-900 border border-zinc-800 text-zinc-200 text-sm py-3 pl-10 pr-4 rounded-lg focus:outline-none focus:border-purple-500 transition-colors disabled:opacity-50"
                  placeholder="e.g., enterprise.io"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-mono text-zinc-500 tracking-wider uppercase block">Google Business Profile / GMB Name</label>
              <div className="relative">
                <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-600" />
                <input 
                  type="text" 
                  value={gmbName} 
                  onChange={(e) => setGmbName(e.target.value)}
                  disabled={scanActive}
                  className="w-full bg-zinc-900 border border-zinc-800 text-zinc-200 text-sm py-3 pl-10 pr-4 rounded-lg focus:outline-none focus:border-purple-500 transition-colors disabled:opacity-50"
                  placeholder="e.g., Enterprise Solutions HQ"
                />
              </div>
            </div>

            <button 
              onClick={runDiagnosticScan}
              disabled={scanActive}
              className="w-full py-3 rounded-lg text-xs font-mono font-bold tracking-widest uppercase text-center transition-all bg-purple-500 hover:bg-purple-600 text-white disabled:bg-purple-950/40 disabled:text-purple-400/40 border border-purple-400/20 hover:shadow-[0_0_20px_rgba(168,85,247,0.25)] flex items-center justify-center gap-2 group"
            >
              {scanActive ? (
                <>
                  <RefreshCw className="w-3.5 h-3.5 animate-spin" /> Sweep Underway...
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 fill-current" /> Execute Scan sweep
                </>
              )}
            </button>
          </div>

          {/* ACTIVE SIMULATION SCAN LOADING BAR AND MICRO-LOGS */}
          <div className="mt-5 pt-4 border-t border-white/5 space-y-2 relative z-10 select-none">
            <div className="flex items-center justify-between text-[10px] font-mono">
              <span className="text-zinc-500 flex items-center gap-1">
                <span className={`w-1.5 h-1.5 rounded-full inline-block ${scanActive ? 'bg-purple-500 animate-ping' : 'bg-zinc-700'}`} />
                {scanStatus}
              </span>
              <span className="text-purple-400 font-bold">{scanProgress}%</span>
            </div>
            <div className="w-full h-[3px] bg-zinc-900 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full" 
                animate={{ width: `${scanProgress}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
          </div>
        </div>

        {/* TELEMETRY MATRIX DISPLAY GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* Circular Health Metric Card */}
          <div className="bg-zinc-950/40 border border-zinc-800/80 rounded-xl p-5 flex items-center justify-between shadow-lg relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-zinc-800" />
            <div className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-zinc-800" />
            
            <div className="space-y-1 relative z-10">
              <span className="text-[10px] font-mono text-zinc-500 tracking-wider uppercase block">Visibility Index</span>
              <div className="text-2xl font-black text-white">{healthScore}/100</div>
              <span className="text-[9px] font-mono text-emerald-400 tracking-wide uppercase flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-pulse" /> Optimal Threshold
              </span>
            </div>

            {/* SVG Circular Progress Graphic */}
            <div className="relative w-16 h-12 shrink-0 z-10">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                <path className="text-zinc-900" strokeWidth="3" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                <motion.path 
                  className="text-purple-500" 
                  strokeWidth="3.2" 
                  strokeDasharray={`${healthScore}, 100`} 
                  strokeLinecap="round" 
                  stroke="currentColor" 
                  fill="none" 
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  animate={{ strokeDasharray: `${healthScore}, 100` }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center text-[10px] font-mono font-bold text-white pr-0.5">
                {healthScore}%
              </div>
            </div>
          </div>

          {/* Core Critical Errors Card */}
          <div className="bg-zinc-950/40 border border-zinc-800/80 rounded-xl p-5 flex items-center justify-between shadow-lg relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-zinc-800" />
            <div className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-zinc-800" />
            
            <div className="space-y-1 relative z-10">
              <span className="text-[10px] font-mono text-zinc-500 tracking-wider uppercase block">Critical Blockages</span>
              <div className="text-2xl font-black text-rose-500">{totalErrors}</div>
              <span className="text-[9px] font-mono text-rose-500/70 tracking-wide uppercase flex items-center gap-1.5">
                <AlertCircle className="w-3.5 h-3.5 text-rose-500 animate-pulse" /> Action Required
              </span>
            </div>
            <div className="p-3.5 rounded-lg bg-rose-500/5 border border-rose-500/10 text-rose-500 shrink-0 z-10">
              <AlertCircle className="w-6 h-6" />
            </div>
          </div>

          {/* System Warnings Card */}
          <div className="bg-zinc-950/40 border border-zinc-800/80 rounded-xl p-5 flex items-center justify-between shadow-lg relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-zinc-800" />
            <div className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-zinc-800" />
            
            <div className="space-y-1 relative z-10">
              <span className="text-[10px] font-mono text-zinc-500 tracking-wider uppercase block">System Warnings</span>
              <div className="text-2xl font-black text-amber-500">{totalWarnings}</div>
              <span className="text-[9px] font-mono text-amber-500/70 tracking-wide uppercase flex items-center gap-1.5">
                <AlertTriangle className="w-3.5 h-3.5 text-amber-500" /> Moderate Impact
              </span>
            </div>
            <div className="p-3.5 rounded-lg bg-amber-500/5 border border-amber-500/10 text-amber-500 shrink-0 z-10">
              <AlertTriangle className="w-6 h-6" />
            </div>
          </div>

          {/* Technical Notices Card */}
          <div className="bg-zinc-950/40 border border-zinc-800/80 rounded-xl p-5 flex items-center justify-between shadow-lg relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-zinc-800" />
            <div className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-zinc-800" />
            
            <div className="space-y-1 relative z-10">
              <span className="text-[10px] font-mono text-zinc-500 tracking-wider uppercase block">Technical Notices</span>
              <div className="text-2xl font-black text-indigo-400">{totalNotices}</div>
              <span className="text-[9px] font-mono text-indigo-400/70 tracking-wide uppercase flex items-center gap-1.5">
                <Info className="w-3.5 h-3.5 text-indigo-400" /> Optimization Points
              </span>
            </div>
            <div className="p-3.5 rounded-lg bg-indigo-500/5 border border-indigo-500/10 text-indigo-400 shrink-0 z-10">
              <Info className="w-6 h-6" />
            </div>
          </div>

        </div>

        {/* INTERACTIVE OPTIMIZATION TABS MENU PANEL */}
        <div className="space-y-6">
          <div className="flex border-b border-zinc-800 overflow-x-auto select-none [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {(['SEO', 'AEO', 'GEO', 'GMB'] as const).map((tab) => {
              const labelMap = {
                SEO: 'SEO Core Health',
                AEO: 'AI Overview (AEO)',
                GEO: 'GEO Citation Index',
                GMB: 'GBP Proximity Geo-Grid'
              };
              return (
                <button
                  key={tab}
                  onClick={() => { setActiveTab(tab); setExpandedIssue(null); }}
                  className={`py-4 px-6 border-b-2 font-mono tracking-wider text-xs uppercase font-bold shrink-0 transition-all ${
                    activeTab === tab 
                      ? 'border-purple-500 text-white bg-purple-500/5' 
                      : 'border-transparent text-zinc-500 hover:text-zinc-300'
                  }`}
                >
                  {labelMap[tab]}
                </button>
              );
            })}
          </div>

          {/* TELEMETRY CHART AND INTERACTIVE GRID HOUSING VIEWPORT */}
          <div className="bg-zinc-950/40 border border-zinc-800/80 rounded-xl p-5 sm:p-7 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />
            
            {/* SEO Core Health Telemetry Module */}
            {activeTab === 'SEO' && (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center min-h-[300px]">
                <div className="space-y-4 lg:col-span-1">
                  <span className="text-[10px] font-mono text-purple-400 uppercase tracking-widest block">Metrics Summary</span>
                  <h3 className="text-xl font-bold text-white tracking-tight">Indexation Core Parameters</h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    Analyzing typical crawlers page index rates, speed-to-interactive layout ratios, and structural code performance metrics.
                  </p>
                  <div className="space-y-3 pt-2">
                    <div className="space-y-1.5">
                      <div className="flex justify-between text-[11px] font-mono">
                        <span className="text-zinc-500">Crawl Resource Efficiency</span>
                        <span className="text-white">92%</span>
                      </div>
                      <div className="w-full h-1.5 bg-zinc-900 rounded-full overflow-hidden">
                        <div className="h-full bg-purple-500 rounded-full" style={{ width: '92%' }} />
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <div className="flex justify-between text-[11px] font-mono">
                        <span className="text-zinc-500">Core Web Vitals Pass Rate</span>
                        <span className="text-white">68%</span>
                      </div>
                      <div className="w-full h-1.5 bg-zinc-900 rounded-full overflow-hidden">
                        <div className="h-full bg-purple-500 rounded-full animate-pulse" style={{ width: '68%' }} />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-2 space-y-3 relative z-10 w-full min-h-[220px] flex flex-col justify-center">
                  <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-wider block text-right">Page Index Performance Index over 20s</span>
                  {/* Dynamic Inline-SVG SEO Performance Chart representing simulation sweeps */}
                  <div className="w-full h-[180px] bg-zinc-900/30 border border-white/5 rounded-lg p-2 flex items-end">
                    <svg className="w-full h-full" viewBox="0 0 400 150">
                      <defs>
                        <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#a855f7" stopOpacity="0.25" />
                          <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      <path d="M0,110 Q40,80 80,120 T160,50 T240,90 T320,40 T400,60" fill="none" stroke="#a855f7" strokeWidth="2.5" />
                      <path d="M0,110 Q40,80 80,120 T160,50 T240,90 T320,40 T400,60 L400,150 L0,150 Z" fill="url(#chartGrad)" />
                      {/* Dots */}
                      <circle cx="160" cy="50" r="4.5" fill="#a855f7" className="animate-pulse" />
                      <circle cx="320" cy="40" r="4.5" fill="#a855f7" className="animate-pulse" />
                    </svg>
                  </div>
                </div>
              </div>
            )}

            {/* AI Overview (AEO Engine) Summary Mapping Module */}
            {activeTab === 'AEO' && (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center min-h-[300px]">
                <div className="space-y-4 lg:col-span-1">
                  <span className="text-[10px] font-mono text-purple-400 uppercase tracking-widest block">Entity Scopes</span>
                  <h3 className="text-xl font-bold text-white tracking-tight">Semantic Node Map</h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    Our semantic extraction analyzer scans your site headings and outlines to measure semantic alignment for AI summary card generators.
                  </p>
                  <div className="space-y-3 pt-2">
                    <div className="flex items-center justify-between p-3 rounded bg-black/40 border border-white/5 text-xs">
                      <span className="text-zinc-500 font-mono">Taxonomy Alignment</span>
                      <span className="text-[#10B981] font-bold">READY</span>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded bg-black/40 border border-white/5 text-xs">
                      <span className="text-zinc-500 font-mono">Schema validation</span>
                      <span className="text-rose-500 font-bold">CRITICAL_FAIL</span>
                    </div>
                  </div>
                </div>

                {/* Animated Interactive SVG Node Connection Map representing entity connections */}
                <div className="lg:col-span-2 min-h-[240px] border border-white/5 rounded-lg bg-zinc-900/10 flex items-center justify-center p-4 relative z-10 overflow-hidden">
                  <svg className="w-full max-w-lg h-[220px]" viewBox="0 0 400 200">
                    <g stroke="#ffffff" strokeOpacity="0.05" strokeWidth="1">
                      <line x1="200" y1="100" x2="100" y2="50" stroke="#8b5cf6" strokeWidth="1.5" />
                      <line x1="200" y1="100" x2="300" y2="50" stroke="#8b5cf6" strokeWidth="1.5" />
                      <line x1="200" y1="100" x2="200" y2="160" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="3,3" />
                    </g>
                    
                    {/* Node points */}
                    <circle cx="200" cy="100" r="22" fill="#09090b" stroke="#8b5cf6" strokeWidth="2.5" />
                    <text x="200" y="104" textAnchor="middle" fill="#fff" className="text-[10px] font-mono font-bold select-none">{domain}</text>

                    <circle cx="100" cy="50" r="16" fill="#09090b" stroke="#8b5cf6" strokeWidth="1.5" />
                    <text x="100" y="53" textAnchor="middle" fill="#a1a1aa" className="text-[8px] font-mono select-none">Entity</text>

                    <circle cx="300" cy="50" r="16" fill="#09090b" stroke="#8b5cf6" strokeWidth="1.5" />
                    <text x="300" y="53" textAnchor="middle" fill="#a1a1aa" className="text-[8px] font-mono select-none">Context</text>

                    <circle cx="200" cy="160" r="16" fill="#09090b" stroke="#ef4444" strokeWidth="1.5" />
                    <text x="200" y="163" textAnchor="middle" fill="#ef4444" className="text-[8px] font-mono select-none">Schema</text>
                  </svg>
                </div>
              </div>
            )}

            {/* GEO Model Citation Optimization Index Module */}
            {activeTab === 'GEO' && (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center min-h-[300px]">
                <div className="space-y-4 lg:col-span-1">
                  <span className="text-[10px] font-mono text-purple-400 uppercase tracking-widest block">LLM Indices</span>
                  <h3 className="text-xl font-bold text-white tracking-tight">AI Recommendation Ratios</h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    Evaluates brand token density vectors, contextual keyword weights, and domain references across the core models driving public search bots.
                  </p>
                  <div className="space-y-2 pt-2">
                    <div className="flex items-center gap-2 text-xs">
                      <span className="w-2 h-2 rounded-full bg-[#8B5CF6]" />
                      <span className="text-zinc-400 font-mono">ChatGPT Citation Index:</span>
                      <span className="font-bold text-white">82%</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                      <span className="w-2 h-2 rounded-full bg-[#3B82F6]" />
                      <span className="text-zinc-400 font-mono">Claude Citation Index:</span>
                      <span className="font-bold text-white">65%</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                      <span className="w-2 h-2 rounded-full bg-[#10B981]" />
                      <span className="text-zinc-400 font-mono">Gemini Citation Index:</span>
                      <span className="font-bold text-white">58%</span>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-2 space-y-5 relative z-10 w-full min-h-[220px] flex flex-col justify-center">
                  <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-wider block text-right">Comparitive model Authority Matrices</span>
                  <div className="space-y-4 bg-zinc-900/10 border border-white/5 rounded-lg p-5">
                    {/* ChatGPT bar */}
                    <div className="space-y-1.5">
                      <div className="flex justify-between text-xs font-mono text-zinc-400">
                        <span>ChatGPT Index Weight</span>
                        <span>0.82</span>
                      </div>
                      <div className="w-full h-3 bg-zinc-900/60 rounded border border-white/5 overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-purple-500 to-indigo-500 rounded-r" style={{ width: '82%' }} />
                      </div>
                    </div>
                    {/* Claude bar */}
                    <div className="space-y-1.5">
                      <div className="flex justify-between text-xs font-mono text-zinc-400">
                        <span>Claude Index Weight</span>
                        <span>0.65</span>
                      </div>
                      <div className="w-full h-3 bg-zinc-900/60 rounded border border-white/5 overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-r" style={{ width: '65%' }} />
                      </div>
                    </div>
                    {/* Gemini bar */}
                    <div className="space-y-1.5">
                      <div className="flex justify-between text-xs font-mono text-zinc-400">
                        <span>Gemini Index Weight</span>
                        <span>0.58</span>
                      </div>
                      <div className="w-full h-3 bg-zinc-900/60 rounded border border-white/5 overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-purple-500 to-indigo-600 rounded-r" style={{ width: '58%' }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Google Business Profile / GMB Local 3-Pack Proximity Geo-Grid */}
            {activeTab === 'GMB' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[300px]">
                <div className="space-y-4">
                  <span className="text-[10px] font-mono text-purple-400 uppercase tracking-widest block">Proximity Metrics</span>
                  <h3 className="text-xl font-bold text-white tracking-tight">5x5 Localized Geo-Grid Matrix</h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    Simulates your local Google Maps 3-Pack ranking from various geocoordinates. Select any pin node in the matrix to view specific proximity audit analytics in real-time.
                  </p>
                  
                  <AnimatePresence mode="wait">
                    {selectedGeoNode && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        exit={{ opacity: 0, y: 10 }}
                        className="p-4 rounded-lg bg-zinc-900/80 border border-purple-500/20 space-y-1 relative"
                      >
                        <h4 className="text-xs font-bold text-purple-400 font-mono">Pin Coordinate Audit // Offset [{selectedGeoNode.x}, {selectedGeoNode.y}]</h4>
                        <div className="text-sm font-black text-white pt-1">Google Maps Local Placement Rank: <span className={selectedGeoNode.rank <= 3 ? 'text-emerald-400' : selectedGeoNode.rank <= 10 ? 'text-amber-400' : 'text-rose-500'}>#{selectedGeoNode.rank}</span></div>
                        <p className="text-[10px] text-zinc-500 leading-normal">
                          {selectedGeoNode.rank <= 3 
                            ? 'Excellent coverage. Your profile currently captures major transactional queries within this spatial sector.' 
                            : selectedGeoNode.rank <= 10 
                            ? 'GBP visibility decay detected. Your business lands on secondary scrolls; competitors capture local call leads.' 
                            : 'Invisible. Proximity decay prevents GBP discoverability in this coordinate zone.'}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* 5x5 Geo-Grid Matrix Node Heatmap */}
                <div className="flex flex-col items-center justify-center space-y-4 relative z-10">
                  <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest block select-none">Localized Ranking Heatmap</span>
                  
                  <div className="grid grid-cols-5 gap-2 sm:gap-3 bg-[#0a0a0c] border border-zinc-800 p-4 rounded-xl shadow-inner max-w-[280px]">
                    {geoGrid.map((row, rIdx) => 
                      row.map((val, cIdx) => {
                        const isSelected = selectedGeoNode && selectedGeoNode.x === rIdx && selectedGeoNode.y === cIdx;
                        const rankColor = val <= 3 
                          ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/40 hover:bg-emerald-500 hover:text-black' 
                          : val <= 10 
                          ? 'bg-amber-500/10 text-amber-400 border-amber-500/40 hover:bg-amber-500 hover:text-black' 
                          : 'bg-rose-500/10 text-rose-500 border-rose-500/40 hover:bg-rose-500 hover:text-white';
                        
                        return (
                          <button
                            key={`${rIdx}-${cIdx}`}
                            onClick={() => setSelectedGeoNode({ x: rIdx, y: cIdx, rank: val })}
                            className={`w-9 h-9 sm:w-10 sm:h-10 rounded-md border font-mono font-black text-[11px] sm:text-xs flex items-center justify-center transition-all duration-300 relative ${rankColor} ${
                              isSelected ? 'scale-115 ring-2 ring-purple-400 z-10 shadow-[0_0_15px_rgba(168,85,247,0.3)]' : ''
                            }`}
                          >
                            {val}
                          </button>
                        );
                      })
                    )}
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>

        {/* SEMRUSH TABULAR ISSUE DIAGNOSTICS & DECRYPTION SUGGESTIONS DECK */}
        <div className="space-y-4">
          <div className="flex items-center justify-between border-b border-white/5 pb-3">
            <h3 className="text-xl font-black text-white tracking-tight">Detected Diagnostic Issues & Solutions</h3>
            <span className="text-[10px] font-mono text-zinc-500 select-none uppercase">{issues.length} Protocols Swept</span>
          </div>

          <div className="space-y-2">
            {issues.map((issue) => {
              const isExpanded = expandedIssue === issue.id;
              const typeColor = issue.type === 'Error' 
                ? 'text-rose-500 bg-rose-500/5 border-rose-500/10' 
                : issue.type === 'Warning' 
                ? 'text-amber-500 bg-amber-500/5 border-amber-500/10' 
                : 'text-indigo-400 bg-indigo-500/5 border-indigo-500/10';

              return (
                <div 
                  key={issue.id} 
                  className={`bg-[#070709]/60 border rounded-xl overflow-hidden transition-all duration-300 shadow-md ${
                    isExpanded ? 'border-purple-500/40 shadow-purple-500/5 bg-zinc-950/80' : 'border-zinc-800/40 hover:border-zinc-700/60'
                  }`}
                >
                  <button 
                    onClick={() => setExpandedIssue(isExpanded ? null : issue.id)} 
                    className="w-full text-left p-4.5 sm:p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 focus:outline-none transition-colors group relative"
                  >
                    <div className={`absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-purple-400 to-indigo-500 transition-transform duration-300 ${
                      isExpanded ? 'scale-y-100' : 'scale-y-0'
                    }`} />

                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 relative z-10 w-full">
                      <span className="text-[9px] font-mono text-zinc-500 uppercase select-none shrink-0">
                        {issue.id} // {issue.category}
                      </span>
                      
                      <div className="flex flex-wrap items-center gap-2 w-full">
                        <span className={`text-[9px] font-mono tracking-wider font-extrabold uppercase border px-2 py-0.5 rounded-md ${typeColor}`}>
                          {issue.type}
                        </span>
                        <span className={`text-xs sm:text-sm font-bold tracking-tight transition-colors duration-200 ${
                          isExpanded ? 'text-purple-400' : 'text-zinc-200 group-hover:text-white'
                        }`}>
                          {issue.title}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 shrink-0 relative z-10 ml-auto sm:ml-0">
                      <span className={`text-[9px] font-mono tracking-wider font-extrabold px-1.5 py-0.5 rounded ${
                        issue.impactScore === 'HIGH' 
                          ? 'text-rose-500 border border-rose-500/20 bg-rose-500/5' 
                          : issue.impactScore === 'MEDIUM' 
                          ? 'text-amber-500 border border-amber-500/20 bg-amber-500/5' 
                          : 'text-indigo-400 border border-indigo-500/20 bg-indigo-500/5'
                      }`}>
                        {issue.impactScore} IMPACT
                      </span>
                      <ChevronDown className={`w-4 h-4 text-zinc-500 transition-transform duration-300 shrink-0 ${
                        isExpanded ? 'transform rotate-180 text-purple-400' : 'group-hover:text-zinc-300'
                      }`} />
                    </div>
                  </button>

                  <motion.div 
                    initial={false} 
                    animate={{ height: isExpanded ? "auto" : 0, opacity: isExpanded ? 1 : 0 }} 
                    transition={{ duration: 0.25, ease: "easeInOut" }} 
                    className="overflow-hidden relative"
                  >
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center opacity-[0.04] mix-blend-screen pointer-events-none" />
                    
                    <div className="p-4.5 sm:p-5 pt-1 text-xs sm:text-xs text-zinc-300 leading-relaxed border-t border-zinc-900 bg-black/40 relative z-10 space-y-4">
                      <div className="space-y-1">
                        <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest block">Issue breakdown parameters</span>
                        <p className="max-w-3xl font-normal leading-relaxed text-zinc-400">{issue.description}</p>
                      </div>

                      <div className="space-y-1.5">
                        <span className="text-[9px] font-mono text-[#A855F7] uppercase tracking-widest block">Suggested technical calibration</span>
                        <p className="max-w-3xl font-bold leading-relaxed text-white">{issue.fixText}</p>
                      </div>

                      {issue.codeSnippet && (
                        <div className="space-y-1.5 pt-1">
                          <div className="flex items-center justify-between text-[9px] font-mono text-zinc-500 tracking-widest uppercase">
                            <span>Recommended deployment script</span>
                            <button 
                              onClick={() => copyToClipboard(issue.codeSnippet!, issue.id)}
                              className="hover:text-white transition-colors inline-flex items-center gap-1 focus:outline-none font-bold"
                            >
                              <Copy className="w-3 h-3" />
                              {copiedCodeId === issue.id ? 'COPIED_OK' : 'COPY_CODE'}
                            </button>
                          </div>
                          <pre className="p-4 rounded-lg bg-zinc-950 border border-white/5 font-mono text-[10px] sm:text-xs leading-relaxed text-purple-300 overflow-x-auto select-all max-h-[220px]">
                            {issue.codeSnippet}
                          </pre>
                        </div>
                      )}

                      <div className="flex items-center gap-4 text-[9px] font-mono text-zinc-600 select-none pt-2 border-t border-white/[0.02]">
                        <span className="flex items-center gap-1">
                          <span className="w-1 h-1 rounded-full bg-emerald-500 inline-block" /> PROTOCOL // SECURE
                        </span>
                        <span>DIAG_STATUS // READY</span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CLOSING CONVERSION BANNER */}
        <div className="bg-[#09090b]/80 border border-purple-500/20 rounded-xl p-6 sm:p-8 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_15px_40px_rgba(0,0,0,0.5)]">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center opacity-[0.05] pointer-events-none" />
          
          <div className="space-y-2 relative z-10 max-w-xl text-left">
            <h3 className="text-xl font-black text-white tracking-tight">Need an Expert Algorithmic Overhaul?</h3>
            <p className="text-xs sm:text-xs leading-relaxed text-zinc-400 font-normal">
              Simulated audits point out the obvious gaps, but our dedicated optimization cell engineers custom schema scripts, caching routes, and local ranking profiles designed to dominate search.
            </p>
          </div>

          <Link href="/contact" className="px-6 py-3 rounded-lg font-mono font-bold uppercase tracking-widest text-xs text-white purple-gradient border border-purple-400/20 hover:scale-[1.02] transition-all relative z-10 shadow-lg shrink-0">
            Deploy Expert Strategy
          </Link>
        </div>

      </div>
    </div>
  );
}