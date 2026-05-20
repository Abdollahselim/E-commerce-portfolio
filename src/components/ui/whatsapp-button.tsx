"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/site";
import { usePreferences } from "@/lib/i18n";

export function FloatingWhatsApp() {
  const { t } = usePreferences();
  
  return (
    <div className="fixed bottom-24 end-5 z-50 flex flex-col items-end gap-2">
      {/* Tooltip on hover */}
      <div className="pointer-events-none absolute bottom-full right-0 mb-3 w-max translate-y-2 scale-95 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100 peer-hover:translate-y-0 peer-hover:scale-100 peer-hover:opacity-100">
        <div className="rounded-lg border border-white/10 bg-[#090d16] px-4 py-2 text-sm font-medium text-white shadow-xl">
          {t({ en: "Chat with us", ar: "تحدث معنا" })}
        </div>
      </div>
      
      {/* The Button */}
      <Link
        href={siteConfig.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact us on WhatsApp"
        className="peer group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 transition-transform duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-[#25D366]/50"
      >
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-30"></span>
        <MessageCircle className="relative h-7 w-7" />
      </Link>
    </div>
  );
}
