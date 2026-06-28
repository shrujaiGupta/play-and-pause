"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Placeholder from "@/components/ui/Placeholder";
import { GALLERY } from "@/lib/content";

export default function Gallery() {
  const [open, setOpen] = useState<number | null>(null);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") setOpen((i) => (i === null ? i : (i + 1) % GALLERY.length));
      if (e.key === "ArrowLeft")
        setOpen((i) => (i === null ? i : (i - 1 + GALLERY.length) % GALLERY.length));
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const active = open === null ? null : GALLERY[open];

  return (
    <section id="gallery" className="section-pad bg-cream-deep">
      <div className="site-container">
        <SectionHeading
          align="left"
          eyebrow="Moments we've loved"
          title="A little look at the magic"
          description="Real laughter, messy hands and proud little faces — the moments that make every session worth it."
        />

        <div className="mt-10 grid auto-rows-[150px] grid-cols-2 gap-4 sm:auto-rows-[170px] md:grid-cols-4 md:auto-rows-[190px]">
          {GALLERY.map((item, i) => (
            <motion.button
              key={item.label + i}
              type="button"
              onClick={() => setOpen(i)}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.06 }}
              aria-label={`Open ${item.label}`}
              className={`group relative overflow-hidden rounded-[var(--radius-soft)] shadow-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral/60 ${item.span}`}
            >
              <Placeholder
                tone={item.tone}
                scene={item.scene}
                rounded="rounded-none"
                className="h-full w-full transition-transform duration-500 group-hover:scale-110"
              />
              <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-brown/35 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <span className="pointer-events-none absolute bottom-3 left-3 translate-y-2 text-[13px] font-semibold text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                {item.label}
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && open !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[120] flex items-center justify-center bg-brand-brown/55 p-4 backdrop-blur-sm"
            onClick={() => setOpen(null)}
            role="dialog"
            aria-modal="true"
            aria-label={active.label}
          >
            <button
              onClick={() => setOpen(null)}
              aria-label="Close"
              className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-brand-brown transition hover:scale-105"
            >
              <X size={20} />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setOpen((i) => (i === null ? i : (i - 1 + GALLERY.length) % GALLERY.length));
              }}
              aria-label="Previous"
              className="absolute left-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-brand-brown transition hover:scale-105 sm:left-8"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setOpen((i) => (i === null ? i : (i + 1) % GALLERY.length));
              }}
              aria-label="Next"
              className="absolute right-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-brand-brown transition hover:scale-105 sm:right-8"
            >
              <ChevronRight size={22} />
            </button>

            <motion.div
              key={open}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-2xl"
            >
              <Placeholder
                tone={active.tone}
                scene={active.scene}
                className="aspect-[4/3] w-full shadow-soft-lg ring-1 ring-white/40"
                label={active.label}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
