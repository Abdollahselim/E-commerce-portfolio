"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { Send } from "lucide-react";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { contactChannels, sectionCopy } from "@/data/site";
import { usePreferences } from "@/lib/i18n";


export function ContactSection() {
  const { t } = usePreferences();
  const [form, setForm] = useState({
    name: "",
    business: "",
    platform: "Salla",
    budget: "12,000-30,000 SAR",
    url: "",
    goal: ""
  });

  const updateField = (field: keyof typeof form, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const submitAuditRequest = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const message = [
      "Hi Abdullah, I want a free store audit.",
      `Name: ${form.name}`,
      `Business: ${form.business}`,
      `Platform: ${form.platform}`,
      `Budget: ${form.budget}`,
      `Store URL: ${form.url || "Not shared yet"}`,
      `Target outcome: ${form.goal}`
    ].join("\n");

    window.open(`https://wa.me/201099454508?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact" className="px-5 py-24 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <MotionReveal>
          <div
            className="cta-gold-line relative overflow-hidden rounded-[var(--radius-lg)] border p-6 sm:p-8 lg:p-10"
            style={{ background: "var(--bg-card)", borderColor: "var(--border-md)" }}
          >
            <div className="cta-gold-blur" aria-hidden="true" />
            <div className="relative grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div>
                <p className="mb-5 block text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "var(--gold)" }}>
                  {t(sectionCopy.contact.label)}
                </p>
                <h2 className="max-w-3xl font-display text-4xl font-semibold leading-[1.1] text-ivory sm:text-5xl">
                  {t(sectionCopy.contact.title)}
                </h2>
                <p className="mt-5 max-w-xl text-base" style={{ color: "var(--text-2)", lineHeight: 1.8 }}>
                  {t(sectionCopy.contact.description)}
                </p>
                <div className="mt-8 grid gap-3">
                  {contactChannels.map((channel) => {
                    const Icon = channel.icon;
                    return (
                      <Link
                        key={channel.label.en}
                        href={channel.href}
                        target={channel.href.startsWith("http") ? "_blank" : undefined}
                        rel={channel.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="btn-lift flex items-center gap-3 rounded-[var(--radius)] border p-4 text-left text-sm transition hover:border-mint/40"
                        style={{ borderColor: "var(--border)", background: "var(--bg)" }}
                      >
                        <Icon className="h-5 w-5 flex-shrink-0" style={{ color: "var(--gold)" }} aria-hidden="true" />
                        <span>
                          <span className="block text-xs uppercase tracking-[0.18em]" style={{ color: "var(--text-3)" }}>
                            {t(channel.label)}
                          </span>
                          <span style={{ color: "var(--text-2)" }}>{channel.value}</span>
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </div>

              <form className="grid gap-4 rounded-lg border border-white/10 bg-ink p-5" onSubmit={submitAuditRequest}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="grid gap-2 text-sm text-zinc-400">
                    {t(sectionCopy.contact.form.name)}
                    <input className="rounded-md border border-white/10 bg-white/[0.03] px-4 py-3 text-ivory outline-none transition focus:border-mint" required value={form.name} onChange={(event) => updateField("name", event.target.value)} />
                  </label>
                  <label className="grid gap-2 text-sm text-zinc-400">
                    {t(sectionCopy.contact.form.business)}
                    <input className="rounded-md border border-white/10 bg-white/[0.03] px-4 py-3 text-ivory outline-none transition focus:border-mint" required value={form.business} onChange={(event) => updateField("business", event.target.value)} />
                  </label>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="grid gap-2 text-sm text-zinc-400">
                    {t(sectionCopy.contact.form.platform)}
                    <select className="rounded-md border border-white/10 bg-white/[0.03] px-4 py-3 text-ivory outline-none transition focus:border-mint" value={form.platform} onChange={(event) => updateField("platform", event.target.value)}>
                      {sectionCopy.contact.platformOptions.map((platform) => (
                        <option key={platform.en} value={platform.en}>{t(platform)}</option>
                      ))}
                    </select>
                  </label>
                  <label className="grid gap-2 text-sm text-zinc-400">
                    {t(sectionCopy.contact.form.budget)}
                    <select className="rounded-md border border-white/10 bg-white/[0.03] px-4 py-3 text-ivory outline-none transition focus:border-mint" value={form.budget} onChange={(event) => updateField("budget", event.target.value)}>
                      {sectionCopy.contact.budgetOptions.map((budget) => (
                        <option key={budget.en} value={budget.en}>{t(budget)}</option>
                      ))}
                    </select>
                  </label>
                </div>
                <label className="grid gap-2 text-sm text-zinc-400">
                  {t(sectionCopy.contact.form.url)}
                  <input className="rounded-md border border-white/10 bg-white/[0.03] px-4 py-3 text-ivory outline-none transition focus:border-mint" placeholder={t(sectionCopy.contact.form.urlPlaceholder)} value={form.url} onChange={(event) => updateField("url", event.target.value)} />
                </label>
                <label className="grid gap-2 text-sm text-zinc-400">
                  {t(sectionCopy.contact.form.goal)}
                  <textarea className="min-h-28 resize-y rounded-md border border-white/10 bg-white/[0.03] px-4 py-3 text-ivory outline-none transition focus:border-mint" required value={form.goal} onChange={(event) => updateField("goal", event.target.value)} placeholder={t(sectionCopy.contact.form.goalPlaceholder)} />
                </label>
                <button className="btn-lift inline-flex items-center justify-center gap-2 rounded-[var(--radius)] bg-mint px-7 py-4 text-sm font-bold uppercase tracking-[0.08em] text-ink" type="submit">
                  {t(sectionCopy.contact.form.submit)}
                  <Send className="h-4 w-4" aria-hidden="true" />
                </button>
              </form>
            </div>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
