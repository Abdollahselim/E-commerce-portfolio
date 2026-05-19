"use client";

import { Quote } from "lucide-react";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { SectionShell } from "@/components/ui/section-shell";
import { sectionCopy, testimonials } from "@/data/site";
import { usePreferences } from "@/lib/i18n";

export function TestimonialsSection() {
  const { t } = usePreferences();

  return (
    <SectionShell
      id="testimonials"
      eyebrow={t(sectionCopy.testimonials.eyebrow)}
      title={t(sectionCopy.testimonials.title)}
      description={t(sectionCopy.testimonials.description)}
    >
      <div className="grid gap-px overflow-hidden rounded-lg border border-white/10 bg-white/10 md:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <MotionReveal key={testimonial.name} delay={index * 0.08}>
            <figure className="flex h-full flex-col bg-ink p-6">
              <Quote className="h-6 w-6 text-mint" aria-hidden="true" />
              <blockquote className="mt-5 flex-1 text-sm leading-7 text-zinc-400">
                {t(testimonial.quote)}
              </blockquote>
              <figcaption className="mt-8 border-t border-white/10 pt-5">
                <strong className="block text-base text-ivory">{testimonial.name}</strong>
                <span className="mt-1 block text-xs uppercase tracking-[0.16em] text-zinc-500">
                  {t(testimonial.role)}
                </span>
                <span className="mt-4 inline-flex rounded-md border border-mint/25 bg-mint/10 px-3 py-2 text-sm font-semibold text-ivory">
                  {testimonial.metric}
                </span>
              </figcaption>
            </figure>
          </MotionReveal>
        ))}
      </div>
    </SectionShell>
  );
}
