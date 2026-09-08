import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../data/translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLangState] = useState(() => {
    return localStorage.getItem('app_lang') || 'UZ';
  });

  const setLang = (newLang) => {
    if (['UZ', 'RU', 'EN'].includes(newLang)) {
      setLangState(newLang);
      localStorage.setItem('app_lang', newLang);
    }
  };

  const t = (key) => {
    if (translations[lang] && translations[lang][key] !== undefined) {
      return translations[lang][key];
    }
    // Fallback to UZ if key missing in current lang
    if (translations['UZ'] && translations['UZ'][key] !== undefined) {
      return translations['UZ'][key];
    }
    return key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
