"use client";

import { SectionShell } from "@/components/ui/section-shell";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { sectionCopy, services } from "@/data/site";
import { usePreferences } from "@/lib/i18n";

export function ServicesSection() {
  const { t } = usePreferences();
  return (
    <SectionShell
      id="services"
      eyebrow={t(sectionCopy.services.eyebrow)}
      title={t(sectionCopy.services.title)}
      description={t(sectionCopy.services.description)}
      muted
    >
      <div
        className="grid gap-px overflow-hidden rounded-[var(--radius-lg)] border border-[var(--border)] bg-white/10 sm:grid-cols-2 lg:grid-cols-3"
      >
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <MotionReveal key={service.title.en} delay={index * 0.05}>
              <article
                className="svc-card-hover h-full bg-[var(--bg-card)] p-6 transition-colors"
              >
                {/* Numbered index */}
                <span className="mb-4 block font-display text-sm tracking-[0.08em] text-[var(--text-3)]">
                  0{index + 1}
                </span>

                {/* Icon */}
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-[var(--radius)] border border-[var(--gold-border)] bg-[var(--gold-dim)] text-[var(--gold)]">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>

                <h3 className="mb-2 font-display text-lg font-semibold leading-snug text-[var(--text)]">
                  {t(service.title)}
                </h3>
                <p className="text-sm leading-7 text-[var(--text-2)]">
                  {t(service.description)}
                </p>
              </article>
            </MotionReveal>
          );
        })}
      </div>
    </SectionShell>
  );
}
