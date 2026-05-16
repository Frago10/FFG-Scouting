"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { dict, type Dict, type Lang } from "./i18n";

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggle: () => void;
  t: Dict;
};

const LanguageContext = createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const saved =
      typeof window !== "undefined"
        ? (localStorage.getItem("ffg.lang") as Lang | null)
        : null;
    if (saved === "en" || saved === "es") {
      setLangState(saved);
    } else if (typeof navigator !== "undefined" && navigator.language.startsWith("es")) {
      setLangState("es");
    }
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") localStorage.setItem("ffg.lang", l);
  };

  const value = useMemo<Ctx>(
    () => ({
      lang,
      setLang,
      toggle: () => setLang(lang === "en" ? "es" : "en"),
      t: dict[lang]
    }),
    [lang]
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used inside LanguageProvider");
  return ctx;
}
