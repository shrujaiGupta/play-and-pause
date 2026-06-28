"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import SectionHeading from "@/components/ui/SectionHeading";
import { TESTIMONIALS } from "@/lib/content";

const TONE_BG: Record<string, string> = {
  coral: "bg-coral/20 text-coral-deep",
  lavender: "bg-lavender/60 text-violet-700",
  mint: "bg-mint/55 text-emerald-700",
  sky: "bg-sky/60 text-sky-700",
  pink: "bg-pink/60 text-rose-600",
};

export default function Testimonials() {
  const railRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: 1 | -1) => {
    const rail = railRef.current;
    if (!rail) return;
    rail.scrollBy({ left: dir * (rail.clientWidth * 0.8), behavior: "smooth" });
  };

  return (
    <section id="testimonials" className="section-pad bg-cream">
      <div className="site-container">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            align="left"
            eyebrow="Stories from our community"
            title="Loved by moms across Jaipur"
          />
          <div className="flex gap-2">
            <button
              onClick={() => scrollBy(-1)}
              aria-label="Previous testimonials"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-card text-brand-brown shadow-soft transition hover:-translate-y-0.5 hover:text-coral-deep"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => scrollBy(1)}
              aria-label="Next testimonials"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-card text-brand-brown shadow-soft transition hover:-translate-y-0.5 hover:text-coral-deep"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div
          ref={railRef}
          className="no-scrollbar mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4"
        >
          {TESTIMONIALS.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="flex w-[280px] shrink-0 snap-start flex-col rounded-[var(--radius-card)] bg-card p-6 shadow-soft sm:w-[320px]"
            >
              <Quote className="h-7 w-7 text-coral/40" />
              <div className="mt-3 flex gap-0.5" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="h-4 w-4 fill-sunshine text-sunshine" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-[14.5px] leading-relaxed text-charcoal">
                {t.quote}
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3 border-t border-border pt-4">
                <span
                  className={cn(
                    "flex h-10 w-10 items-center justify-center rounded-full font-display text-base font-bold",
                    TONE_BG[t.tone],
                  )}
                  aria-hidden
                >
                  {t.name.charAt(0)}
                </span>
                <span>
                  <span className="block text-sm font-semibold text-brand-brown">{t.name}</span>
                  <span className="block text-xs text-charcoal-muted">{t.role}</span>
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
