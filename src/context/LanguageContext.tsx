'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'hi';

type Translations = {
  [key in Language]: {
    [key: string]: string;
  };
};

const dictionaries: Translations = {
  en: {
    home: 'Home',
    about: 'About',
    solutions: 'Solutions',
    pricing: 'Pricing',
    insights: 'Insights',
    contact: 'Contact',
    getAudit: 'Get Free Audit',
    sloganFound: 'Be Found',
    sloganChosen: 'Be Chosen',
    heroBadge: 'Complete Multi-Platform Visibility',
    heroSub: 'We make sure your website ranks on the first page of standard Google search results...',
  },
  hi: {
    home: 'होम',
    about: 'हमारे बारे में',
    solutions: 'समाधान',
    pricing: 'कीमतें',
    insights: 'इनसाइट्स',
    contact: 'संपर्क करें',
    getAudit: 'फ्री ऑडिट पाएं',
    sloganFound: 'खोजे जाएं',
    sloganChosen: 'चुने जाएं',
    heroBadge: 'पूर्ण मल्टी-प्लेटफ़ॉर्म विजिबिलिटी',
    heroSub: 'हम यह सुनिश्चित करते हैं कि आपकी वेबसाइट मानक Google खोज परिणामों के पहले पृष्ठ पर रैंक करे...',
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');

  // Load saved preference from localStorage if available
  useEffect(() => {
    const savedLang = localStorage.getItem('preferred-lang') as Language;
    if (savedLang === 'en' || savedLang === 'hi') {
      setLanguageState(savedLang);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('preferred-lang', lang);
  };

  const t = (key: string) => {
    return dictionaries[language][key] || dictionaries['en'][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}