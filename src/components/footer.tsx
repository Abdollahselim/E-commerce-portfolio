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
    <footer className="border-t border-white/10 px-5 py-8 sm:px-8 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 text-sm text-zinc-500 md:flex-row md:items-center md:justify-between">
        <Link href="#hero" className="relative block h-10 w-[138px]" aria-label="Abdullah Selim home">
          <Image
            src={logoSrc}
            alt="Abdullah Selim"
            width={138}
            height={40}
            sizes="138px"
            className="h-full w-full object-contain"
          />
        </Link>
        <p>
          {locale === "en"
            ? "© 2026 Abdullah Selim. Built for speed, trust, and scale."
            : "© 2026 عبدالله سليم. مبني للسرعة والثقة والقابلية للتوسع."}
        </p>
        <div className="flex gap-3">
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
      </div>
    </footer>
  );
}
