"use client";

import { SectionShell } from "@/components/ui/section-shell";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { processSteps, sectionCopy } from "@/data/site";
import { usePreferences } from "@/lib/i18n";

export function ProcessSection() {
  const { t } = usePreferences();
  return (
    <SectionShell
      id="process"
      eyebrow={t(sectionCopy.process.eyebrow)}
      title={t(sectionCopy.process.title)}
      description={t(sectionCopy.process.description)}
      muted
    >
      {/* Grid exactly as Image 3 — 4 columns desktop, subtle hover effects */}
      <div className="grid gap-px overflow-hidden rounded-[var(--radius-lg)] border bg-white/10 md:grid-cols-4" style={{ borderColor: "var(--border)" }}>
        {processSteps.map((step, index) => {
          const Icon = step.icon;
          return (
            <MotionReveal key={step.title.en} delay={index * 0.06}>
              <article
                className="process-card-hover h-full p-6 transition-colors"
                style={{ background: "var(--bg-card)" }}
              >
                <div className="mb-8 flex items-center justify-between">
                  <span
                    className="font-display text-3xl"
                    style={{ color: "var(--text-3)" }}
                  >
                    0{index + 1}
                  </span>
                  <Icon
                    className="process-card-icon h-5 w-5"
                    style={{ color: "var(--gold)" }}
                    aria-hidden="true"
                  />
                </div>
                <h3 className="text-lg font-semibold text-ivory">{t(step.title)}</h3>
                <p
                  className="mt-3 text-sm leading-7"
                  style={{ color: "var(--text-2)" }}
                >
                  {t(step.description)}
                </p>
              </article>
            </MotionReveal>
          );
        })}
      </div>
    </SectionShell>
  );
}
