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
        className="grid gap-px overflow-hidden rounded-[var(--radius-lg)] border bg-white/10 sm:grid-cols-2 lg:grid-cols-3"
        style={{ borderColor: "var(--border)" }}
      >
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <MotionReveal key={service.title.en} delay={index * 0.05}>
              <article
                className="svc-card-hover h-full p-6 transition-colors"
                style={{ background: "var(--bg-card)" }}
              >
                {/* Numbered index */}
                <span
                  className="mb-4 block font-display text-sm"
                  style={{ color: "var(--text-3)", letterSpacing: "0.08em" }}
                >
                  0{index + 1}
                </span>

                {/* Icon */}
                <div
                  className="mb-5 flex h-10 w-10 items-center justify-center rounded-[var(--radius)] border"
                  style={{
                    background: "var(--gold-dim)",
                    borderColor: "var(--gold-border)",
                    color: "var(--gold)",
                  }}
                >
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>

                <h3
                  className="mb-2 font-display text-lg font-semibold leading-snug"
                  style={{ color: "var(--text)" }}
                >
                  {t(service.title)}
                </h3>
                <p
                  className="text-sm leading-7"
                  style={{ color: "var(--text-2)" }}
                >
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
