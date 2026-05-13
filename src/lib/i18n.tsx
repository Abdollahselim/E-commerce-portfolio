"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

export type Locale = "en" | "ar";
export type Theme = "dark" | "light";
export type Localized<T = string> = Record<Locale, T>;

type AppPreferences = {
  locale: Locale;
  theme: Theme;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
  t: <T,>(value: Localized<T>) => T;
};

const PreferencesContext = createContext<AppPreferences | null>(null);

export function PreferencesProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");
  const [theme, setThemeState] = useState<Theme>("dark");

  useEffect(() => {
    const savedLocale = window.localStorage.getItem("locale") as Locale | null;
    const savedTheme = window.localStorage.getItem("theme") as Theme | null;
    if (savedLocale === "en" || savedLocale === "ar") setLocaleState(savedLocale);
    if (savedTheme === "dark" || savedTheme === "light") setThemeState(savedTheme);
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
    document.documentElement.dataset.locale = locale;
    window.localStorage.setItem("locale", locale);
  }, [locale]);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.classList.toggle("dark", theme === "dark");
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  const value = useMemo<AppPreferences>(
    () => ({
      locale,
      theme,
      setLocale: setLocaleState,
      setTheme: setThemeState,
      toggleLocale: () => setLocaleState((current) => (current === "en" ? "ar" : "en")),
      toggleTheme: () => setThemeState((current) => (current === "dark" ? "light" : "dark")),
      t: (localized) => localized[locale]
    }),
    [locale, theme]
  );

  return <PreferencesContext.Provider value={value}>{children}</PreferencesContext.Provider>;
}

export function usePreferences() {
  const context = useContext(PreferencesContext);
  if (!context) {
    throw new Error("usePreferences must be used inside PreferencesProvider");
  }
  return context;
}
