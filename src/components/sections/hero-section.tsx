"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, MapPin, ShieldCheck } from "lucide-react";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { clientProof, heroCopy, heroProof, siteConfig, stats } from "@/data/site";
import { usePreferences } from "@/lib/i18n";

export function HeroSection() {
  const { t, locale } = usePreferences();
  const [marketIndex, setMarketIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMarketIndex((prev) => (prev + 1) % heroCopy.markets.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const currentMarket = heroCopy.markets[marketIndex];

  return (
    <section id="hero" className="relative flex min-h-[100svh] items-center justify-center overflow-hidden px-5 pb-20 pt-32 sm:px-8 lg:px-10 lg:pb-28 lg:pt-40">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,var(--soft)_1px,transparent_1px)] bg-[size:33.333%_100%] opacity-50" />
      <div className="mx-auto w-full grid max-w-7xl gap-12 lg:gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="flex flex-col justify-center">
          <MotionReveal>
            <p className="mb-8 inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-mint">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-mint opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-mint"></span>
              </span>
              {t(heroCopy.auditSlots)} - {t(currentMarket)} & {t(heroCopy.remote)}
            </p>
          </MotionReveal>
          <MotionReveal delay={0.08}>
            <h1 className="max-w-4xl text-balance font-display text-[clamp(2.5rem,5vw+1rem,4.5rem)] font-medium leading-[1.15] sm:leading-[1.1] tracking-tight text-ivory">
              {locale === "en" ? (
                <>
                  {heroCopy.title.en.part1}{" "}
                  <span className="italic text-mint text-[0.9em] font-normal">
                    {heroCopy.title.en.highlight}
                  </span>
                  <br />
                  e-commerce for
                  <br />
                  GCC businesses.
                </>
              ) : (
                <>
                  {heroCopy.title.ar.part1}{" "}
                  <span className="italic text-mint text-[0.9em] font-normal">
                    {heroCopy.title.ar.highlight}
                  </span>
                  <br />
                  {heroCopy.title.ar.part2}
                </>
              )}
            </h1>
          </MotionReveal>
          <MotionReveal delay={0.16}>
            <p className="mt-8 max-w-2xl text-lg md:text-xl leading-relaxed text-zinc-400">
              {t(heroCopy.description)}
            </p>
          </MotionReveal>
          <MotionReveal delay={0.24}>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Link
                  href={siteConfig.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-mint px-8 py-4 text-sm font-bold uppercase tracking-[0.16em] text-ink transition shadow-lg shadow-mint/10 hover:shadow-mint/20"
                >
                  {t(heroCopy.primaryCta)}
                  <ArrowRight className="h-4 w-4 rtl:rotate-180" aria-hidden="true" />
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Link
                  href="#case-studies"
                  className="inline-flex w-full sm:w-auto items-center justify-center rounded-full border border-white/15 px-8 py-4 text-sm font-semibold text-ivory transition hover:border-mint hover:text-mint"
                >
                  {t(heroCopy.secondaryCta)}
                </Link>
              </motion.div>
            </div>
          </MotionReveal>
        </div>
        <MotionReveal delay={0.18} className="mx-auto w-full max-w-lg rounded-lg border border-white/10 bg-white/[0.03] p-6 lg:mx-0 lg:max-w-none">
          <div className="flex items-center gap-3 border-b border-white/10 pb-5 text-sm text-zinc-400">
            <MapPin className="h-4 w-4 text-mint" aria-hidden="true" />
            {siteConfig.market}
          </div>
          <div className="grid grid-cols-3 gap-2 border-b border-white/10 py-5">
            {heroProof.map((item) => (
              <div key={item.label.en} className="rounded-md border border-white/10 bg-white/[0.03] p-3">
                <strong dir="ltr" className="block font-display text-2xl font-semibold text-ivory">{item.value}</strong>
                <span className="mt-1 block text-[0.68rem] uppercase tracking-[0.14em] text-zinc-500">{t(item.label)}</span>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-white/10 bg-white/10">
            {stats.map((stat) => (
              <div key={stat.value} className="bg-ink p-5">
                <strong dir="ltr" className="block font-display text-4xl font-semibold text-mint">
                  {stat.value}
                </strong>
                <p className="mt-2 text-xs uppercase tracking-[0.16em] text-zinc-500">{t(stat.label)}</p>
              </div>
            ))}
          </div>
          <div className="mt-5 rounded-md border border-mint/25 bg-mint/10 p-4">
            <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-ivory">
              <ShieldCheck className="h-4 w-4 text-mint" aria-hidden="true" />
              {t(heroCopy.proofSignalsText)}
            </div>
            <div className="grid gap-2 text-sm text-zinc-400 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {clientProof.map((proof) => (
                <span key={proof.en} className="inline-flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-mint" aria-hidden="true" />
                  {t(proof)}
                </span>
              ))}
            </div>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
