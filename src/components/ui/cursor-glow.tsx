"use client";

import { useEffect, useRef } from "react";

/**
 * CursorGlow — Interactive cursor-following radial glow.
 * Only active on pointer (hover) devices. No auto-animation.
 */
export function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    const el = glowRef.current;
    if (!el) return;

    // Only enable on pointer (non-touch) devices
    if (!window.matchMedia("(hover: hover)").matches) return;

    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
      el.style.opacity = "1";
    };

    const onLeave = () => {
      el.style.opacity = "0";
    };

    const animate = () => {
      // Smooth lerp — feels magnetic, not auto
      current.current.x += (pos.current.x - current.current.x) * 0.1;
      current.current.y += (pos.current.y - current.current.y) * 0.1;
      el.style.left = `${current.current.x}px`;
      el.style.top = `${current.current.y}px`;
      rafId.current = requestAnimationFrame(animate);
    };

    // Init position off-screen
    pos.current = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    current.current = { ...pos.current };

    document.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    rafId.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <div
      id="cursor-glow"
      ref={glowRef}
      aria-hidden="true"
    />
  );
}
