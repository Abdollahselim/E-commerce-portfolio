"use client";

import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { contactSchema, type ContactFormData } from "@/lib/contact-schema";
import { trackEvent } from "@/lib/analytics";
import { contactChannels, sectionCopy } from "@/data/site";
import { usePreferences } from "@/lib/i18n";

// ─── Field wrapper ─────────────────────────────────────────────────────────

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="grid gap-1.5">
      <span className="text-sm text-zinc-400">{label}</span>
      {children}
      {error && (
        <span role="alert" className="flex items-center gap-1 text-xs text-red-400">
          <AlertCircle className="h-3 w-3 flex-shrink-0" aria-hidden="true" />
          {error}
        </span>
      )}
    </label>
  );
}

const inputClass =
  "rounded-md border border-white/10 bg-white/[0.03] px-4 py-3 text-ivory outline-none transition focus:border-mint aria-[invalid=true]:border-red-500/60 placeholder:text-zinc-600";

const selectClass =
  "rounded-md border border-white/10 bg-[var(--bg-card)] px-4 py-3 text-ivory outline-none transition focus:border-mint";

// ─── Component ─────────────────────────────────────────────────────────────

type SubmitStatus = "idle" | "loading" | "success" | "email_failed" | "error";

export function ContactSection() {
  const { t, locale } = usePreferences();
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");
  const [whatsappFallback, setWhatsappFallback] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      platform: "Salla",
      budget: "1,000-5,000 $",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setSubmitStatus("loading");
    trackEvent("contact_form_submit");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setSubmitStatus("success");
        trackEvent("contact_form_success");
        reset();
        return;
      }

      const json = await res.json().catch(() => ({}));

      if (res.status === 502 && json?.whatsappFallback) {
        setWhatsappFallback(json.whatsappFallback as string);
        setSubmitStatus("email_failed");
        trackEvent("contact_form_error", { reason: "email_failed" });
        return;
      }

      setSubmitStatus("error");
      trackEvent("contact_form_error", { reason: "server_error", status: res.status });
    } catch {
      setSubmitStatus("error");
      trackEvent("contact_form_error", { reason: "network_error" });
    }
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

              {/* ── Left column — details + channels ── */}
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

                {/* Direct contact channels */}
                <div className="mt-8 grid gap-3">
                  {contactChannels.map((channel) => {
                    const Icon = channel.icon;
                    return (
                      <Link
                        key={channel.label.en}
                        href={channel.href}
                        target={channel.href.startsWith("http") ? "_blank" : undefined}
                        rel={channel.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        onClick={() => trackEvent("whatsapp_click")}
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

                {/* Pricing anchor */}
                <div className="mt-8 rounded-lg border border-mint/20 bg-mint/5 p-6">
                  <span className="mb-2 block text-[0.65rem] font-bold uppercase tracking-widest text-mint">
                    {t({ en: "PREMIUM INFRASTRUCTURE & SCALABLE ARCHITECTURE", ar: "بنية تحتية متقدمة وتطبيقات قابلة للتوسع" })}
                  </span>
                  <h3 className="mb-3 font-display text-2xl font-semibold text-ivory">
                    {t({ en: "Investment & Project Scopes", ar: "حجم الاستثمار ونطاق المشاريع" })}
                  </h3>
                  <p className="mb-5 text-sm leading-relaxed text-zinc-400">
                    {t({ en: "Bespoke systems, custom Salla/Zid automations, and headless commerce platforms engineered for high-growth enterprises.", ar: "أنظمة مخصصة، أتمتة منصات سلة وزد، ومتاجر هيدليس مبنية للشركات سريعة النمو." })}
                  </p>
                  <div className="inline-flex items-center gap-2 rounded-md border border-white/5 bg-ink px-4 py-2.5 text-sm text-zinc-300 shadow-inner">
                    {t({ en: "Custom enterprise integrations start at ", ar: "تطوير الأنظمة الخاصة يبدأ من " })}
                    <strong className="text-mint tracking-wider">3,000 $</strong>
                  </div>
                </div>
              </div>

              {/* ── Right column — form / states ── */}
              <div className="flex flex-col">

                {/* ── Success state ── */}
                {submitStatus === "success" && (
                  <div className="flex flex-1 flex-col items-center justify-center rounded-lg border border-mint/20 bg-mint/5 p-10 text-center">
                    <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-mint/20">
                      <CheckCircle className="h-8 w-8 text-mint" aria-hidden="true" />
                    </div>
                    <h3 className="mb-2 font-display text-2xl font-semibold text-ivory">
                      {t({ en: "Request Received", ar: "تم استلام طلبك" })}
                    </h3>
                    <p className="text-zinc-400">
                      {t({
                        en: "Thank you! Your system audit request has been received. Abdullah will personally review your store and get back to you within 24 hours.",
                        ar: "شكراً لك! تم استلام طلب التدقيق بنجاح. سيقوم عبدالله بمراجعة متجرك شخصياً والرد عليك خلال 24 ساعة.",
                      })}
                    </p>
                  </div>
                )}

                {/* ── Email failed — WhatsApp fallback ── */}
                {submitStatus === "email_failed" && whatsappFallback && (
                  <div className="flex flex-1 flex-col items-center justify-center rounded-lg border border-amber-500/20 bg-amber-500/5 p-10 text-center">
                    <AlertCircle className="mb-4 h-10 w-10 text-amber-400" aria-hidden="true" />
                    <h3 className="mb-2 font-display text-xl font-semibold text-ivory">
                      {t({ en: "Email failed — use WhatsApp?", ar: "فشل الإرسال — هل تريد الواتساب؟" })}
                    </h3>
                    <p className="mb-6 text-sm text-zinc-400">
                      {t({
                        en: "Your message is ready. Click below to send it directly via WhatsApp with all your details pre-filled.",
                        ar: "رسالتك جاهزة. اضغط أدناه لإرسالها عبر الواتساب مع جميع تفاصيلك.",
                      })}
                    </p>
                    <a
                      href={whatsappFallback}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-bold text-white shadow-lg"
                    >
                      {t({ en: "Send via WhatsApp", ar: "إرسال عبر الواتساب" })}
                    </a>
                  </div>
                )}

                {/* ── Form ── */}
                {(submitStatus === "idle" || submitStatus === "loading" || submitStatus === "error") && (
                  <form
                    className="grid gap-4 rounded-lg border border-white/10 bg-ink p-6"
                    onSubmit={handleSubmit(onSubmit)}
                    noValidate
                    aria-label="Contact form"
                  >
                    {/* Global error banner */}
                    {submitStatus === "error" && (
                      <div role="alert" className="rounded-md bg-red-500/10 p-3 text-sm text-red-400">
                        {t({
                          en: "Something went wrong. Please try again or contact us directly via WhatsApp.",
                          ar: "حدث خطأ ما. يرجى المحاولة مرة أخرى أو التواصل عبر الواتساب.",
                        })}
                      </div>
                    )}

                    {/* Row 1 — Name + Business */}
                    <div className="grid gap-4 sm:grid-cols-2">
                      <Field label={t(sectionCopy.contact.form.name)} error={errors.name?.message}>
                        <input
                          {...register("name")}
                          aria-invalid={!!errors.name}
                          autoComplete="name"
                          className={inputClass}
                          placeholder={t({ en: "Your full name", ar: "الاسم الكامل" })}
                        />
                      </Field>
                      <Field label={t(sectionCopy.contact.form.business)} error={errors.business?.message}>
                        <input
                          {...register("business")}
                          aria-invalid={!!errors.business}
                          className={inputClass}
                          placeholder={t({ en: "Your business name", ar: "اسم نشاطك التجاري" })}
                        />
                      </Field>
                    </div>

                    {/* Row 2 — Email + Phone */}
                    <div className="grid gap-4 sm:grid-cols-2">
                      <Field label={t({ en: "Business Email", ar: "البريد الإلكتروني للعمل" })} error={errors.email?.message}>
                        <input
                          {...register("email")}
                          type="email"
                          aria-invalid={!!errors.email}
                          autoComplete="email"
                          className={inputClass}
                          placeholder="you@company.com"
                        />
                      </Field>
                      <Field label={t({ en: "Phone (with country code)", ar: "رقم الهاتف (مع رمز الدولة)" })} error={errors.phone?.message}>
                        <input
                          {...register("phone")}
                          type="tel"
                          dir="ltr"
                          aria-invalid={!!errors.phone}
                          autoComplete="tel"
                          className={`${inputClass} ${locale === "ar" ? "text-right" : ""}`}
                          placeholder="+966 5X XXX XXXX"
                        />
                      </Field>
                    </div>

                    {/* Row 3 — Platform + Budget */}
                    <div className="grid gap-4 sm:grid-cols-2">
                      <Field label={t(sectionCopy.contact.form.platform)} error={errors.platform?.message}>
                        <select {...register("platform")} aria-invalid={!!errors.platform} className={selectClass}>
                          {sectionCopy.contact.platformOptions.map((p) => (
                            <option key={p.en} value={p.en}>{t(p)}</option>
                          ))}
                        </select>
                      </Field>
                      <Field label={t(sectionCopy.contact.form.budget)} error={errors.budget?.message}>
                        <select {...register("budget")} aria-invalid={!!errors.budget} className={selectClass}>
                          {sectionCopy.contact.budgetOptions.map((b) => (
                            <option key={b.en} value={b.en}>{t(b)}</option>
                          ))}
                        </select>
                      </Field>
                    </div>

                    {/* Store URL */}
                    <Field label={t(sectionCopy.contact.form.url)} error={errors.url?.message}>
                      <input
                        {...register("url")}
                        type="url"
                        aria-invalid={!!errors.url}
                        className={inputClass}
                        placeholder={t(sectionCopy.contact.form.urlPlaceholder)}
                      />
                    </Field>

                    {/* Goal / Message */}
                    <Field label={t(sectionCopy.contact.form.goal)} error={errors.goal?.message}>
                      <textarea
                        {...register("goal")}
                        aria-invalid={!!errors.goal}
                        className={`${inputClass} min-h-28 resize-y`}
                        placeholder={t(sectionCopy.contact.form.goalPlaceholder)}
                      />
                    </Field>

                    {/* Honeypot — hidden from real users, filled by bots */}
                    <input
                      {...register("_hp")}
                      type="text"
                      tabIndex={-1}
                      aria-hidden="true"
                      className="absolute -left-[9999px] h-0 w-0 overflow-hidden opacity-0"
                      autoComplete="off"
                    />

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={isSubmitting || submitStatus === "loading"}
                      className="btn-lift mt-2 inline-flex items-center justify-center gap-2 rounded-[var(--radius)] bg-mint px-7 py-4 text-sm font-bold uppercase tracking-[0.08em] text-ink transition disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {isSubmitting || submitStatus === "loading" ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                          {t({ en: "Sending…", ar: "جاري الإرسال…" })}
                        </>
                      ) : (
                        <>
                          {t(sectionCopy.contact.form.submit)}
                          <Send className="h-4 w-4 rtl:-scale-x-100" aria-hidden="true" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
