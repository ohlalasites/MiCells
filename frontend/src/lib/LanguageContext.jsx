import { createContext, useContext, useEffect, useState, useCallback } from "react";
import { STRINGS, LANGS, LANG_HTML } from "./i18n";

const KEY = "mc-lang";
const LanguageContext = createContext(null);

const detectInitial = () => {
  if (typeof window === "undefined") return "en";
  const stored = window.localStorage.getItem(KEY);
  if (stored && LANGS.includes(stored)) return stored;
  // No forced auto-detect — English default keeps the site's institutional tone
  // as primary and lets users opt-in to Chinese. Change to auto-detect later
  // by checking navigator.language starts with "zh".
  return "en";
};

export const LanguageProvider = ({ children }) => {
  const [lang, setLangState] = useState("en");

  useEffect(() => {
    setLangState(detectInitial());
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = LANG_HTML[lang] || "en";
    }
  }, [lang]);

  const setLang = useCallback((next) => {
    if (!LANGS.includes(next)) return;
    setLangState(next);
    try {
      window.localStorage.setItem(KEY, next);
    } catch (_) {
      /* ignore */
    }
  }, []);

  const value = {
    lang,
    setLang,
    t: STRINGS[lang] || STRINGS.en,
    isZh: lang === "zh",
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};
