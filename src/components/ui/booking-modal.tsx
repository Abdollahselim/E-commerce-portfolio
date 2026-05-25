"use client";

import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle: string;
  closeLabel: string;
  children: React.ReactNode;
}

export function BookingModal({
  isOpen,
  onClose,
  title,
  subtitle,
  closeLabel,
  children,
}: BookingModalProps) {
  const modalRef = useRef<HTMLDivElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  // Focus management and trap
  useEffect(() => {
    if (!isOpen || !modalRef.current) return;

    // Focus close button on modal open
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }

      // Basic focus trap
      if (event.key === "Tab") {
        const focusableElements = modalRef.current?.querySelectorAll(
          "button, [href], input, select, textarea, [tabindex]:not([tabindex='-1'])"
        );

        if (!focusableElements || focusableElements.length === 0) return;

        const firstElement = focusableElements[0] as HTMLElement;
        const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;
        const activeElement = document.activeElement;

        if (event.shiftKey) {
          if (activeElement === firstElement) {
            lastElement.focus();
            event.preventDefault();
          }
        } else {
          if (activeElement === lastElement) {
            firstElement.focus();
            event.preventDefault();
          }
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          role="presentation"
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-ink/90 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Modal */}
          <motion.div
            ref={modalRef}
            className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#0d1220] via-[#0a0f1a] to-[#060a12] shadow-[0_30px_120px_rgba(0,0,0,0.45)]"
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ duration: 0.3, ease: [0.23, 1, 0.82, 1] }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            aria-describedby="modal-subtitle"
          >
            {/* Header */}
            <div className="sticky top-0 z-10 flex flex-col gap-3 border-b border-white/10 bg-gradient-to-b from-[#0d1220]/95 via-[#0d1220]/90 to-transparent px-5 py-4 backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between sm:px-7 sm:py-5">
              <div className="flex-1">
                <p
                  id="modal-subtitle"
                  className="text-xs font-semibold uppercase tracking-[0.24em] text-mint/80"
                >
                  {subtitle}
                </p>
                <h2
                  id="modal-title"
                  className="mt-1 text-lg font-semibold text-ivory sm:text-xl"
                >
                  {title}
                </h2>
              </div>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={onClose}
                className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 p-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-300 transition hover:bg-white/10 hover:text-ivory hover:border-white/20 focus:outline-none focus:ring-2 focus:ring-mint/50"
                aria-label={closeLabel}
              >
                <X className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>

            {/* Content */}
            <div className="bg-[#02060f]">{children}</div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
