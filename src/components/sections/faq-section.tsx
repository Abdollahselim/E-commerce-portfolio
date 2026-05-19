"use client";

import { HelpCircle } from "lucide-react";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { SectionShell } from "@/components/ui/section-shell";
import { faqs, sectionCopy } from "@/data/site";
import { usePreferences } from "@/lib/i18n";

export function FaqSection() {
  const { t } = usePreferences();

  return (
    <SectionShell
      id="faq"
      eyebrow={t(sectionCopy.faqs.eyebrow)}
      title={t(sectionCopy.faqs.title)}
      description={t(sectionCopy.faqs.description)}
      muted
    >
      <div className="grid gap-4 md:grid-cols-2">
        {faqs.map((faq, index) => (
          <MotionReveal key={faq.question.en} delay={index * 0.05}>
            <article className="h-full rounded-lg border border-white/10 bg-ink p-6">
              <div className="mb-4 flex items-start gap-3">
                <HelpCircle className="mt-1 h-5 w-5 flex-shrink-0 text-mint" aria-hidden="true" />
                <h3 className="font-display text-2xl font-semibold leading-tight text-ivory">
                  {t(faq.question)}
                </h3>
              </div>
              <p className="text-sm leading-7 text-zinc-400">{t(faq.answer)}</p>
            </article>
          </MotionReveal>
        ))}
      </div>
    </SectionShell>
  );
}
