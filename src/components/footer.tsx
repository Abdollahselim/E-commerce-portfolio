"use client";

import Link from "next/link";
import Image from "next/image";
import { Github, Linkedin, Mail } from "lucide-react";
import { siteConfig } from "@/data/site";
import { usePreferences } from "@/lib/i18n";

export function Footer() {
  const { theme, locale } = usePreferences();
  const logoSrc = theme === "dark" ? "/logo_dark.png" : "/logo_light.png";

  return (
    <footer className="border-t border-white/10 px-5 py-5 sm:px-8 sm:py-6 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 text-sm text-zinc-500 md:flex-row md:items-center md:justify-between md:text-left">
        <Link href="#hero" className="order-1 relative block h-14 w-[180px] md:h-12 md:w-[160px]" aria-label="Abdullah Selim home">
          <Image
            src={logoSrc}
            alt="Abdullah Selim"
            width={180}
            height={50}
            sizes="(max-width: 767px) 180px, 160px"
            className="h-full w-full object-contain"
          />
        </Link>
        <div className="order-2 flex gap-3 md:order-3">
          <Link
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-zinc-400 transition hover:border-mint hover:text-mint"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-4 w-4" aria-hidden="true" />
          </Link>
          <Link
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-zinc-400 transition hover:border-mint hover:text-mint"
            aria-label="GitHub"
          >
            <Github className="h-4 w-4" aria-hidden="true" />
          </Link>
          <Link
            href={`mailto:${siteConfig.email}`}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-zinc-400 transition hover:border-mint hover:text-mint"
            aria-label="Email"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
        <p className="order-3 max-w-2xl text-center md:order-2 md:text-left">
          {locale === "en"
            ? "© 2026 Abdullah Selim. Built for speed, trust, and scale."
            : "© 2026 عبدالله سليم. مبني للسرعة والثقة والقابلية للتوسع."}
        </p>
      </div>
    </footer>
  );
}
