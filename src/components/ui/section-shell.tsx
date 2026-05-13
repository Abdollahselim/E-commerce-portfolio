import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionShellProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
  muted?: boolean;
};

export function SectionShell({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
  muted = false
}: SectionShellProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative scroll-mt-20 border-t border-white/10 px-5 py-20 sm:px-8 lg:px-10",
        muted && "bg-white/[0.03]",
        className
      )}
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          {eyebrow ? (
            <p className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-mint">
              <span className="h-px w-8 bg-mint" />
              {eyebrow}
            </p>
          ) : null}
          <h2 className="text-balance font-display text-4xl font-semibold leading-tight tracking-normal text-ivory sm:text-5xl lg:text-6xl">
            {title}
          </h2>
          {description ? (
            <p className="mt-5 max-w-2xl text-base leading-8 text-zinc-400">{description}</p>
          ) : null}
        </div>
        {children}
      </div>
    </section>
  );
}
