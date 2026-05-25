"use client";

import { useState, useEffect } from "react";
import { InlineWidget } from "react-calendly";
import { Loader2 } from "lucide-react";

interface CalendlyEmbedProps {
  calendlyUrl: string;
  minHeight?: string;
}

export function CalendlyEmbed({
  calendlyUrl,
  minHeight = "640px",
}: CalendlyEmbedProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const handleLoad = () => {
    // Give Calendly widget a moment to render before hiding loader
    setTimeout(() => setIsLoading(false), 300);
  };

  return (
    <div
      className="relative h-[min(80vh,720px)] w-full"
      style={{ minHeight }}
      role="region"
      aria-label="Calendly booking widget"
    >
      {isLoading && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-[#02060f] rounded-lg">
          <div className="flex flex-col items-center gap-3">
            <Loader2 className="h-8 w-8 animate-spin text-mint" aria-hidden="true" />
            <p className="text-sm text-zinc-400">Loading calendar...</p>
          </div>
        </div>
      )}
      <div onLoad={handleLoad} className="h-full w-full">
        <InlineWidget
          url={calendlyUrl || "https://calendly.com"}
          styles={{ height: "100%", width: "100%" }}
          pageSettings={{
            hideLandingPageDetails: true,
            hideEventTypeDetails: true,
            backgroundColor: "ffffff",
            primaryColor: "34d6b6",
            textColor: "0d1220",
          }}
        />
      </div>
    </div>
  );
}
