'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'en' | 'hi' | 'es' | 'fr' | 'de';

const dictionaries = {
  en: {
    // Navbar & Global
    home: 'Home', about: 'About', solutions: 'Solutions', pricing: 'Pricing', insights: 'Insights', contact: 'Contact', getAudit: 'Get Free Audit',
    // Slogan Frame
    sloganFound: 'Be Found', sloganChosen: 'Be Chosen', heroBadge: 'Complete Multi-Platform Visibility',
    // Hero Bento Grid Cards
    card1Title: 'Google Search & AI Overviews (SEO + AEO)',
    card1Desc: 'We make sure your website ranks on the first page of standard Google search results. Plus, we optimize your content so Google\'s new AI summaries display your company as the recommended choice.',
    card1Tag: 'Traditional Rank + Generative Summary Mapping',
    card2Title: 'Google Maps (Local SEO)',
    card2Desc: 'Fix your location rankings. We set up and calibrate your Google Business Profile to pull in nearby customers who are ready to buy.',
    card2Tag: 'Map Grid Domination // Active',
    card3Title: 'AI Engine Visibility (GEO)',
    card3Desc: 'When consumers look for recommendations inside apps like ChatGPT and Gemini, we make sure those AI algorithms pull your business.',
    card3Tag: 'ChatGPT & Gemini Index Sync',
    card4Title: 'Wondering why your website isn\'t bringing in leads?',
    card4Desc: 'Click here to launch a free system scan request with our technical team instantly.',
    card4Btn: 'Initialize Form Array',
    // Main Body Content
    sec2Badge: 'Operational Core', sec2Title: 'What Exactly Is Modern Search Visibility?',
    sec2Desc: 'Traditional rankings are obsolete. Search layouts are now filled with interactive components, local mapping grids, and real-time AI answers. Modern Search Visibility means structuring your business identity so it is correctly parsed, trusted, and recommended across all extraction layers simultaneously.',
    sec3Badge: 'Unified Surface Coverage', sec3Title: 'The Future Of Search Is Already Here',
    sec4Badge: 'Tailored Service Modules', sec4Title: 'Our Solutions & Pricing'
  },
  hi: {
    home: 'होम', about: 'हमारे बारे में', solutions: 'समाधान', pricing: 'कीमतें', insights: 'इनसाइट्स', contact: 'संपर्क', getAudit: 'फ्री ऑडिट',
    sloganFound: 'खोजे जाएं', sloganChosen: 'चुने जाएं', heroBadge: 'पूर्ण मल्टी-प्लेटफ़ॉर्म विजिबिलिटी',
    card1Title: 'गूगल सर्च और एआई ओवरव्यू (SEO + AEO)',
    card1Desc: 'हम यह सुनिश्चित करते हैं कि आपकी वेबसाइट मानक गूगल खोज परिणामों के पहले पृष्ठ पर रैंक करे। साथ ही, हम आपकी सामग्री को अनुकूलित करते हैं ताकि गूगल के नए एआई सारांश आपकी कंपनी को अनुशंसित विकल्प के रूप में प्रदर्शित करें।',
    card1Tag: 'पारंपरिक रैंक + जनरेटिव सारांश मैपिंग',
    card2Title: 'गूगल मैप्स (लोकल SEO)',
    card2Desc: 'अपनी लोकेशन रैंकिंग ठीक करें। हम आपके गूगल बिजनेस प्रोफाइल को सेट और कैलिब्रेट करते हैं ताकि खरीदारी के लिए तैयार आस-पास के ग्राहकों को आकर्षित किया जा सके।',
    card2Tag: 'मैप ग्रिड डोमिनेशन // एक्टिव',
    card3Title: 'एआई इंजन विजिबिलिटी (GEO)',
    card3Desc: 'जब उपभोक्ता चैटजीपीटी और जेमिनी जैसे ऐप्स के भीतर सीधे सिफारिशें तलाशते हैं, तो हम सुनिश्चित करते हैं कि वे एआई एल्गोरिदम आपके व्यवसाय को चुनें।',
    card3Tag: 'चैटजीपीटी और जेमिनी इंडेक्स सिंक',
    card4Title: 'सोच रहे हैं कि आपकी वेबसाइट से लीड क्यों नहीं आ रही है?',
    card4Desc: 'हमारी तकनीकी टीम के साथ तुरंत मुफ्त सिस्टम स्कैन अनुरोध शुरू करने के लिए यहां क्लिक करें।',
    card4Btn: 'फॉर्म एरे शुरू करें',
    sec2Badge: 'ऑपरेशनल कोर', sec2Title: 'आधुनिक सर्च विजिबिलिटी वास्तव में क्या है?',
    sec2Desc: 'पारंपरिक रैंकिंग अब पुरानी हो चुकी है। सर्च लेआउट अब इंटरैक्टिव घटकों, स्थानीय मैपिंग ग्रिड और रीयल-टाइम एआई उत्तरों से भरे हुए हैं। आधुनिक सर्च विजिबिलिटी का मतलब है आपके व्यवसाय की पहचान को इस तरह से संरचित करना कि इसे सभी एक्सट्रैक्शन लेयर्स पर एक साथ सही ढंग से समझा, भरोसा और अनुशंसित किया जा सके।',
    sec3Badge: 'एकीकृत सतह कवरेज', sec3Title: 'सर्च का भविष्य पहले से ही यहां है',
    sec4Badge: 'अनुकूलित सेवा मॉड्यूल', sec4Title: 'हमारे समाधान और मूल्य निर्धारण'
  },
  es: {
    home: 'Inicio', about: 'Nosotros', solutions: 'Soluciones', pricing: 'Precios', insights: 'Artículos', contact: 'Contacto', getAudit: 'Auditoría Gratis',
    sloganFound: 'Ser Encontrado', sloganChosen: 'Ser Elegido', heroBadge: 'Visibilidad Multiplataforma Completa',
    card1Title: 'Búsqueda de Google y Resúmenes de IA (SEO + AEO)',
    card1Desc: 'Nos aseguramos de que su sitio web se posicione en la primera página de Google. Optimizamos su contenido para que los resúmenes de inteligencia artificial de Google recomienden su empresa.',
    card1Tag: 'Rango Tradicional + Mapeo de Resumen Generativo',
    card2Title: 'Google Maps (SEO Local)',
    card2Desc: 'Mejore sus clasificaciones de ubicación. Configuramos su Perfil de Empresa en Google para atraer clientes locales listos para comprar.',
    card2Tag: 'Dominación de la Cuadrícula del Mapa // Activo',
    card3Title: 'Visibilidad en Motores de IA (GEO)',
    card3Desc: 'Cuando los consumidores buscan recomendaciones directamente dentro de aplicaciones como ChatGPT y Gemini, nos aseguramos de que los algoritmos muestren su negocio.',
    card3Tag: 'Sincronización de Índices de ChatGPT y Gemini',
    card4Title: '¿Se pregunta por qué su sitio web no genera prospectos?',
    card4Desc: 'Haga clic aquí para iniciar una solicitud de escaneo del sistema con nuestro equipo técnico al instante.',
    card4Btn: 'Inicializar Formulario',
    sec2Badge: 'Núcleo Operativo', sec2Title: '¿Qué es exactamente la visibilidad de búsqueda moderna?',
    sec2Desc: 'Las clasificaciones tradicionales están obsoletas. Los diseños de búsqueda ahora están llenos de componentes interactivos, mapas locales y respuestas de IA en tiempo real. La visibilidad de búsqueda moderna significa estructurar la identidad de su empresa para que sea analizada, confiable y recomendada en todas las plataformas simultáneamente.',
    sec3Badge: 'Cobertura de Superficie Unificada', sec3Title: 'El futuro de las búsquedas ya está aquí',
    sec4Badge: 'Módulos de Servicio a la Medida', sec4Title: 'Nuestras Soluciones y Precios'
  },
  fr: {
    home: 'Accueil', about: 'À Propos', solutions: 'Solutions', pricing: 'Tarifs', insights: 'Analyses', contact: 'Contact', getAudit: 'Audit Gratuit',
    sloganFound: 'Être Trouvé', sloganChosen: 'Être Choisi', heroBadge: 'Visibilité Multi-Plateforme Complète',
    card1Title: 'Recherche Google & Aperçus IA (SEO + AEO)',
    card1Desc: 'Nous veillons à ce que votre site web se classe sur la première page de Google. De plus, nous optimisons votre contenu pour que les résumés IA de Google affichent votre entreprise.',
    card1Tag: 'Classement Traditionnel + Cartographie des Résumés IA',
    card2Title: 'Google Maps (SEO Local)',
    card2Desc: 'Corrigez vos classements géographiques. Nous configurons votre profil Google Business pour attirer les clients locaux prêts à acheter.',
    card2Tag: 'Domination du Réseau Cartographique // Actif',
    card3Title: 'Visibilité des Moteurs IA (GEO)',
    card3Desc: 'Lorsque les utilisateurs recherchent des recommandations dans des applications comme ChatGPT et Gemini, nous veillons à ce que les algorithmes sélectionnent votre entreprise.',
    card3Tag: 'Synchronisation des Index ChatGPT & Gemini',
    card4Title: 'Vous vous demandez pourquoi votre site ne génère pas de leads ?',
    card4Desc: 'Cliquez ici pour lancer instantanément une demande d\'analyse du système avec notre équipe technique.',
    card4Btn: 'Initialiser le Formulaire',
    sec2Badge: 'Cœur Opérationnel', sec2Title: 'Qu\'est-ce que la visibilité de recherche moderne ?',
    sec2Desc: 'Les classements traditionnels sont obsolètes. Les résultats de recherche sont désormais remplis de composants interactifs, de cartes locales et de réponses IA en temps réel. La visibilité de recherche moderne consiste à structurer votre identité d\'entreprise pour qu\'elle soit analysée, approuvée et recommandée sur toutes les plateformes.',
    sec3Badge: 'Couverture Unifiée des Surfaces', sec3Title: 'L\'avenir de la recherche est déjà là',
    sec4Badge: 'Modules de Service sur Mesure', sec4Title: 'Nos Solutions & Tarifs'
  },
  de: {
    home: 'Startseite', about: 'Über uns', solutions: 'Lösungen', pricing: 'Preise', insights: 'Einblicke', contact: 'Kontakt', getAudit: 'Kostenloses Audit',
    sloganFound: 'Gefunden Werden', sloganChosen: 'Gewählt Werden', heroBadge: 'Vollständige Multi-Plattform-Sichtbarkeit',
    card1Title: 'Google Suche & KI-Overviews (SEO + AEO)',
    card1Desc: 'Wir sorgen dafür, dass Ihre Website auf der ersten Seite von Google rankt. Wir optimieren Ihre Inhalte, damit die neuen KI-Zusammenfassungen von Google Ihr Unternehmen empfehlen.',
    card1Tag: 'Traditionelles Ranking + Generative Zusammenfassungs-Optimierung',
    card2Title: 'Google Maps (Lokales SEO)',
    card2Desc: 'Optimieren Sie Ihre Standort-Rankings. Wir konfigurieren Ihr Google Business-Profil, um kaufbereite Kunden aus der Nähe zu gewinnen.',
    card2Tag: 'Kartennetzwerk-Dominanz // Aktiv',
    card3Title: 'Sichtbarkeit in KI-Suchmaschinen (GEO)',
    card3Desc: 'Wenn Verbraucher nach Empfehlungen in Apps wie ChatGPT und Gemini suchen, stellen wir sicher, dass diese KI-Algorithmen Ihr Unternehmen vorschlagen.',
    card3Tag: 'ChatGPT & Gemini Index-Synchronisierung',
    card4Title: 'Fragen Sie sich, warum Ihre Website keine Leads generiert?',
    card4Desc: 'Klicken Sie hier, um sofort eine kostenlose Systemanalyse durch unser technisches Team zu starten.',
    card4Btn: 'Formular Initialisieren',
    sec2Badge: 'Operativer Kern', sec2Title: 'Was genau ist moderne Suchsichtbarkeit?',
    sec2Desc: 'Traditionelle Rankings sind veraltet. Suchlayouts sind voll von interaktiven Komponenten, lokalen Karten und KI-Antworten in Echtzeit. Moderne Suchsichtbarkeit bedeutet, Ihre Unternehmensidentität so zu strukturieren, dass sie auf allen Plattformen gleichzeitig korrekt erfasst, vertraut und empfohlen wird.',
    sec3Badge: 'Einheitliche Oberflächenabdeckung', sec3Title: 'Die Zukunft der Suche ist bereits hier',
    sec4Badge: 'Maßgeschneiderte Servicemodule', sec4Title: 'Unsere Lösungen & Preise'
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

  useEffect(() => {
    const savedLang = localStorage.getItem('preferred-lang') as Language;
    if (savedLang in dictionaries) {
      setLanguageState(savedLang);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('preferred-lang', lang);
  };

  const t = (key: string) => {
    return dictionaries[language]?.[key as keyof typeof dictionaries['en']] || dictionaries['en']?.[key as keyof typeof dictionaries['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within a LanguageProvider');
  return context;
}