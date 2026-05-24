"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionShell } from "@/components/ui/section-shell";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { ProjectVisual } from "@/components/ui/project-visual";
import { projects, sectionCopy } from "@/data/site";
import { usePreferences } from "@/lib/i18n";

export function WorkSection() {
  const { t } = usePreferences();
  const [featured, ...rest] = projects;

  return (
    <SectionShell
      id="work"
      eyebrow={t(sectionCopy.work.eyebrow)}
      title={t(sectionCopy.work.title)}
      description={t(sectionCopy.work.description)}
      muted
    >
      <div className="grid gap-5">
        <MotionReveal>
          <Link
            href={featured.href}
            target={featured.href.startsWith("http") ? "_blank" : undefined}
            rel={featured.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="group grid gap-8 rounded-lg border border-white/10 border-b-2 border-b-mint bg-ink p-5 transition hover:border-mint/60 lg:grid-cols-[0.95fr_1.05fr] lg:p-7"
          >
            <div className="flex flex-col justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-mint">{t(featured.category)}</p>
                <h3 className="mt-5 font-display text-4xl font-semibold leading-tight text-ivory">{t(featured.title)}</h3>
                <p className="mt-5 text-base leading-8 text-zinc-400">{t(featured.summary)}</p>
              </div>
              <div className="mt-8 inline-flex w-fit items-center gap-3 rounded-md border border-mint/25 bg-mint/10 px-4 py-3 text-sm font-semibold text-ivory">
                {t(featured.result)}
                <ArrowUpRight className="h-4 w-4 text-mint transition group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
            </div>
            <ProjectVisual src={featured.image} alt={`${t(featured.title)} screenshot`} hint={featured.imageHint} priority />
          </Link>
        </MotionReveal>
        <div className="grid gap-5 md:grid-cols-3">
          {rest.map((project, index) => (
            <MotionReveal key={project.href} delay={index * 0.08}>
              <Link
                href={project.href}
                target={project.href.startsWith("http") ? "_blank" : undefined}
                rel={project.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group flex h-full flex-col overflow-hidden rounded-lg border border-white/10 border-b-2 border-b-mint bg-ink transition hover:border-mint/60"
              >
                <ProjectVisual
                  src={project.image}
                  alt={`${t(project.title)} screenshot`}
                  hint={project.imageHint}
                  className="h-[240px] sm:h-[260px] md:h-[300px] rounded-none border-0"
                />
                <div className="flex flex-1 flex-col p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-mint">{t(project.category)}</p>
                  <h3 className="mt-4 text-xl font-semibold text-ivory">{t(project.title)}</h3>
                  <p className="mt-3 flex-1 text-sm leading-7 text-zinc-400">{t(project.summary)}</p>
                  <p className="mt-5 text-sm font-semibold text-ivory">{t(project.result)}</p>
                </div>
              </Link>
            </MotionReveal>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
