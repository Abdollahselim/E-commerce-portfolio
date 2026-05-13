"use client";

import Link from "next/link";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { contactChannels, sectionCopy, siteConfig } from "@/data/site";
import { usePreferences } from "@/lib/i18n";

export function ContactSection() {
  const { t } = usePreferences();

  return (
    <section id="contact" className="px-5 py-24 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-5xl">
        <MotionReveal>
          <div
            className="cta-gold-line relative overflow-hidden rounded-[var(--radius-lg)] border p-8 text-center sm:p-16"
            style={{ background: "var(--bg-card)", borderColor: "var(--border-md)" }}
          >
            {/* Radial gold glow */}
            <div className="cta-gold-blur" aria-hidden="true" />

            <p className="relative mb-5 block text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "var(--gold)" }}>
              {t(sectionCopy.contact.label)}
            </p>

            <h2
              className="relative mx-auto mb-4 max-w-3xl font-display text-4xl font-semibold leading-[1.1] tracking-[-0.03em] text-ivory sm:text-5xl lg:text-6xl"
            >
              {t(sectionCopy.contact.title)}{" "}
            </h2>

            <p className="relative mx-auto mb-10 max-w-xl text-base" style={{ color: "var(--text-2)", lineHeight: 1.8 }}>
              {t(sectionCopy.contact.description)}
            </p>

            {/* Buttons */}
            <div className="relative mb-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href={siteConfig.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-lift inline-flex w-full items-center justify-center gap-2 rounded-[var(--radius)] px-7 py-3.5 text-sm font-bold uppercase tracking-[0.05em] text-white sm:w-auto"
                style={{ background: "#25d366" }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#1dba59")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "#25d366")}
              >
                <svg width="17" height="17" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                {t(sectionCopy.contact.whatsapp)}
              </Link>
              <Link
                href={`mailto:${siteConfig.email}`}
                className="btn-lift inline-flex w-full items-center justify-center gap-2 rounded-[var(--radius)] border px-7 py-3.5 text-sm font-semibold text-ivory sm:w-auto hover:border-mint hover:text-mint"
                style={{ borderColor: "var(--border-md)" }}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                {t(sectionCopy.contact.email)}
              </Link>
            </div>

            {/* Contact info cards — exactly as Image 2 */}
            <div className="relative grid gap-3 sm:grid-cols-2">
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
                      <span
                        className="block text-xs uppercase tracking-[0.18em]"
                        style={{ color: "var(--text-3)" }}
                      >
                        {t(channel.label)}
                      </span>
                      <span style={{ color: "var(--text-2)" }}>{channel.value}</span>
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
