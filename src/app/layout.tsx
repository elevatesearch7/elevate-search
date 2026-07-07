import React from 'react';
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import SchemaMarkup from "@/components/SchemaMarkup";
import Chatbot from "@/components/Chatbot";
import { LanguageProvider } from "@/context/LanguageContext";

export const metadata: Metadata = {
  title: "Elevate Search | Premium Modern Search Visibility & AEO Agency",
  description: "Elevate Search helps modern businesses scale organic traffic and capture visual real estate across Google Search, Google Maps, AI Overviews, ChatGPT, and Gemini.",
  metadataBase: new URL("https://elevatesearch.in"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Elevate Search | Premium Modern Search Visibility",
    description: "Architecting multi-platform discovery across foundational engines, regional local positioning indices, and LLM-driven query platforms.",
    url: "https://elevatesearch.in",
    siteName: "Elevate Search",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Elevate Search | Modern Search Visibility",
    description: "Dominating search layouts, mapping coordinates, and real-time generative query answers.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const orgData = {
    name: "Elevate Search",
    url: "https://elevatesearch.in",
    logo: "https://elevatesearch.in/logo.webp",
    sameAs: [],
    description: "A premium search visibility enterprise optimizing platforms for Google, Maps, and AI conversational answers."
  };

  const localBizData = {
    name: "Elevate Search",
    image: "https://elevatesearch.in/logo.webp",
    priceRange: "₹8000-₹20000",
    address: {
      "@type": "PostalAddress",
      "addressLocality": "Mumbai",
      "addressRegion": "MH",
      "addressCountry": "IN"
    }
  };

  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#050505] text-white selection:bg-[#8B5CF6]/30 relative min-h-screen">
        <LanguageProvider>
          <SchemaMarkup type="Organization" data={orgData} />
          <SchemaMarkup type="LocalBusiness" data={localBizData} />
          
          <Navbar />
          
          <main className="min-h-screen">
            {children}
          </main>
          
          <Chatbot />
          
          {/* Standing footer completely removed here to fully kill the duplicate layout bug */}
        </LanguageProvider>
      </body>
    </html>
  );
}