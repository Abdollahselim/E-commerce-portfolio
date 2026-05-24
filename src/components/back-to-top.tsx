"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => {
        const start = window.scrollY;
        const duration = 700;
        const startTime = performance.now();

        const animate = (currentTime: number) => {
          const elapsed = Math.min((currentTime - startTime) / duration, 1);
          const ease = 1 - Math.pow(1 - elapsed, 3);
          window.scrollTo(0, Math.round(start * (1 - ease)));

          if (elapsed < 1) {
            window.requestAnimationFrame(animate);
          }
        };

        window.requestAnimationFrame(animate);
      }}
      className={cn(
        "fixed bottom-5 end-5 z-50 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-ink/90 text-mint shadow-2xl shadow-black/20 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-mint",
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
      )}
    >
      <ArrowUp className="h-5 w-5" aria-hidden="true" />
    </button>
  );
}
