"use client";

import { SectionShell } from "@/components/ui/section-shell";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { caseStudies, sectionCopy } from "@/data/site";
import { usePreferences } from "@/lib/i18n";

export function CaseStudiesSection() {
  const { t } = usePreferences();
  return (
    <SectionShell
      id="case-studies"
      eyebrow={t(sectionCopy.cases.eyebrow)}
      title={t(sectionCopy.cases.title)}
      description={t(sectionCopy.cases.description)}
    >
      <div className="grid gap-px overflow-hidden rounded-lg border border-white/10 bg-white/10">
        {caseStudies.map((caseStudy, index) => (
          <MotionReveal key={caseStudy.tag.en} delay={index * 0.08}>
            <article className="grid gap-8 bg-ink p-6 lg:grid-cols-[1fr_340px] lg:p-8">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-mint">{t(caseStudy.tag)}</p>
                <h3 className="mt-4 font-display text-3xl font-semibold text-ivory">{t(caseStudy.title)}</h3>
                <div className="mt-7 grid gap-5 md:grid-cols-2">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">{t({ en: "Problem", ar: "المشكلة" })}</span>
                    <p className="mt-3 text-sm leading-7 text-zinc-400">{t(caseStudy.problem)}</p>
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">{t({ en: "Solution", ar: "الحل" })}</span>
                    <p className="mt-3 text-sm leading-7 text-zinc-400">{t(caseStudy.solution)}</p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-px overflow-hidden rounded-lg border border-white/10 bg-white/10 lg:grid-cols-1">
                {caseStudy.metrics.map((metric) => (
                  <div key={metric.label.en} className="bg-white/[0.03] p-5">
                    <strong dir="ltr" className="block font-display text-4xl font-semibold text-mint">
                      {metric.value}
                    </strong>
                    <p className="mt-2 text-xs uppercase tracking-[0.16em] text-zinc-500">{t(metric.label)}</p>
                  </div>
                ))}
              </div>
            </article>
          </MotionReveal>
        ))}
      </div>
    </SectionShell>
  );
}
