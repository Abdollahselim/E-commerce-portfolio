import Image from "next/image";
import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type ProjectVisualProps = {
  src: string | null;
  alt: string;
  hint: string;
  priority?: boolean;
  className?: string;
};

export function ProjectVisual({ src, alt, hint, priority = false, className }: ProjectVisualProps) {
  return (
    <div
      className={cn(
        "relative min-h-[260px] overflow-hidden rounded-lg border border-white/10 bg-zinc-950",
        className
      )}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 46vw, 100vw"
          className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
        />
      ) : (
        <div className="flex h-full min-h-[260px] flex-col items-center justify-center gap-4 bg-[radial-gradient(circle_at_50%_0%,rgba(52,214,182,0.16),transparent_40%),linear-gradient(135deg,rgba(255,255,255,0.05),rgba(255,255,255,0.01))] p-8 text-center">
          <ImageIcon className="h-10 w-10 text-mint" aria-hidden="true" />
          <div>
            <p className="text-sm font-semibold text-ivory">Project screenshot slot</p>
            <p className="mt-2 max-w-xs text-xs leading-6 text-zinc-500">{hint}</p>
          </div>
        </div>
      )}
    </div>
  );
}
