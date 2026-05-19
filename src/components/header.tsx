"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { navItems, siteConfig } from "@/data/site";
import { usePreferences } from "@/lib/i18n";

const AnimatedMenuIcon = ({ open }: { open: boolean }) => (
  <div className="relative flex h-5 w-5 flex-col items-center justify-center">
    <span className={`absolute h-[2px] w-5 bg-current transition-all duration-300 ease-out ${open ? "rotate-45" : "-translate-y-1.5"}`} />
    <span className={`absolute h-[2px] w-5 bg-current transition-all duration-300 ease-out ${open ? "opacity-0" : "opacity-100"}`} />
    <span className={`absolute h-[2px] w-5 bg-current transition-all duration-300 ease-out ${open ? "-rotate-45" : "translate-y-1.5"}`} />
  </div>
);

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t, theme, toggleTheme, locale, toggleLocale } = usePreferences();
  const logoSrc = theme === "dark" ? "/logo_dark.svg" : "/logo_light.svg";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/85 px-5 backdrop-blur-2xl sm:px-8 lg:px-6"
      data-scrolled={scrolled}
    >
      <nav className="mx-auto flex h-full max-w-7xl items-center justify-between" aria-label="Main navigation">
        {/* Mobile left group: Hire button + Theme toggle */}
        <div className="flex items-center gap-3 md:hidden">
          <Link
            href={siteConfig.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-mint px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-ink transition hover:bg-mint-light"
          >
            {locale === "en" ? "Free Audit" : "تدقيق مجاني"}
          </Link>
        </div>

        {/* Centered logo */}
        <Link href="#hero" className="relative block h-10 w-[120px] lg:h-[4rem] lg:w-[138px] logo-link" aria-label="Abdullah Selim home">
          <Image src={logoSrc} alt="Abdullah Selim" fill priority sizes="(max-width: 767px) 120px, 138px" className="object-contain logo-image" />
        </Link>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-400 transition hover:text-mint"
            >
              {t(item.label)}
            </Link>
          ))}
        </div>

        {/* Right group: desktop controls + mobile menu icon */}
        <div className="flex items-center gap-3">
          {/* Theme toggle */}
          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/10 text-zinc-300 transition hover:border-mint hover:text-mint"
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            type="button"
            onClick={toggleTheme}
          >
            {theme === "dark" ? <Sun className="h-4 w-4" aria-hidden="true" /> : <Moon className="h-4 w-4" aria-hidden="true" />}
          </button>
          {/* Desktop: Language toggle */}
          <button
            className="hidden md:inline-flex h-10 items-center justify-center rounded-md border border-white/10 px-3 text-xs font-bold uppercase tracking-[0.14em] text-zinc-300 transition hover:border-mint hover:text-mint"
            aria-label="Switch language"
            type="button"
            onClick={toggleLocale}
          >
            {locale === "en" ? "AR" : "EN"}
          </button>
          {/* Desktop: Hire button */}
          <Link
            href={siteConfig.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-block md:ms-auto rounded-md bg-mint px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-ink transition hover:bg-mint-light"
          >
            {locale === "en" ? "Free Audit" : "تدقيق مجاني"}
          </Link>
          {/* Mobile: Menu toggle */}
          <button
            className="flex h-10 w-10 items-center justify-center rounded-md border border-white/10 text-zinc-300 md:hidden leading-none me-2"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            type="button"
            onClick={() => setOpen((value) => !value)}
          >
            <AnimatedMenuIcon open={open} />
          </button>
        </div>
      </nav>

      {/* Mobile menu — always in DOM, animated via max-height */}
      <div
        className="mobile-menu md:hidden"
        aria-hidden={!open}
        data-open={open}
      >
        <div className="mobile-menu-inner mx-auto grid max-w-7xl gap-1 px-5 py-3">
          <button
            className="mobile-menu-link flex items-center justify-between rounded-md px-3 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-ivory"
            type="button"
            onClick={toggleLocale}
          >
            <span>{locale === "en" ? "Arabic" : "English"}</span>
          </button>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="mobile-menu-link rounded-md px-3 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-ivory"
            >
              {t(item.label)}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
