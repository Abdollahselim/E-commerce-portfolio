"use client";

import { SectionShell } from "@/components/ui/section-shell";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { sectionCopy, stack, trustSignals } from "@/data/site";
import { usePreferences } from "@/lib/i18n";

export function StackSection() {
  const { t } = usePreferences();
  return (
    <SectionShell
      id="stack"
      eyebrow={t(sectionCopy.stack.eyebrow)}
      title={t(sectionCopy.stack.title)}
      description={t(sectionCopy.stack.description)}
    >
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <MotionReveal className="rounded-lg border border-white/10 bg-white/[0.03] p-6">
          <h3 className="text-lg font-semibold text-ivory">{t(sectionCopy.stack.core)}</h3>
          <div className="mt-8 flex flex-wrap gap-4 md:gap-5">
            {stack.map((tech) => {
              const Icon = tech.icon;
              return (
                <div
                  key={tech.name}
                  className="group relative flex h-14 w-14 items-center justify-center rounded-2xl border border-white/[0.08] bg-white/[0.03] p-3 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-emerald-500/50 hover:shadow-[0_0_20px_rgba(16,185,129,0.15)] sm:h-16 sm:w-16"
                  style={{ '--brand': tech.brandColor } as React.CSSProperties}
                >
                  <Icon 
                    className="h-full w-full text-zinc-400 transition-colors duration-300 group-hover:text-[var(--brand)]" 
                    aria-hidden="true" 
                  />
                  
                  {/* CSS Tooltip */}
                  <span className="pointer-events-none absolute -top-10 left-1/2 z-10 -translate-x-1/2 scale-95 whitespace-nowrap rounded-md border border-white/10 bg-ink px-3 py-1.5 text-xs font-medium text-ivory opacity-0 shadow-xl transition-all duration-300 group-hover:-top-12 group-hover:scale-100 group-hover:opacity-100">
                    {tech.name}
                  </span>
                </div>
              );
            })}
          </div>
        </MotionReveal>
        <MotionReveal delay={0.08} className="rounded-lg border border-white/10 bg-white/[0.03] p-6">
          <h3 className="text-lg font-semibold text-ivory">{t(sectionCopy.stack.care)}</h3>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {trustSignals.map((signal) => (
              <div key={signal.en} className="rounded-md border border-white/10 bg-ink p-4 text-sm text-zinc-300">
                {t(signal)}
              </div>
            ))}
          </div>
        </MotionReveal>
      </div>
    </SectionShell>
  );
}
