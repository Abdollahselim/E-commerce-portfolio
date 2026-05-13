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
          <div className="mt-6 flex flex-wrap gap-3">
            {stack.map((item) => (
              <span key={item} className="rounded-md border border-white/10 bg-ink px-4 py-2 text-sm text-zinc-300">
                {item}
              </span>
            ))}
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
