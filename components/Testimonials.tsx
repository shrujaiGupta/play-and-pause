"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { cn } from "@/lib/utils";
import SectionHeading from "@/components/ui/SectionHeading";
import { useCarousel, CarouselNav } from "@/components/ui/CarouselControls";
import { TESTIMONIALS } from "@/lib/content";

const TONE_BG: Record<string, string> = {
  coral: "bg-coral/20 text-coral-deep",
  lavender: "bg-lavender/60 text-violet-700",
  mint: "bg-mint/55 text-emerald-700",
  sky: "bg-sky/60 text-sky-700",
  pink: "bg-pink/60 text-rose-600",
};

export default function Testimonials() {
  const { railRef, scrollByPage } = useCarousel(7000);

  return (
    <section id="testimonials" className="section-pad bg-cream">
      <div className="site-container">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            align="left"
            eyebrow="Stories from our community"
            title={
              <>
                Loved by moms across <span className="text-coral">Jaipur</span>
              </>
            }
          />
          <CarouselNav
            onPrev={() => scrollByPage(-1)}
            onNext={() => scrollByPage(1)}
            label="testimonials"
          />
        </div>

        <div
          ref={railRef}
          className="no-scrollbar mt-10 flex snap-x snap-mandatory items-stretch gap-5 overflow-x-auto pb-4"
        >
          {TESTIMONIALS.map((t, i) => (
            <motion.figure
              key={`${t.name}-${i}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="flex shrink-0 basis-full snap-start flex-col rounded-[var(--radius-card)] bg-card p-6 shadow-soft sm:basis-[calc((100%_-_20px)/2)] lg:basis-[calc((100%_-_40px)/3)]"
            >
              <Quote className="h-7 w-7 text-coral/40" />
              <blockquote className="mt-4 flex-1 text-[14.5px] leading-relaxed text-charcoal">
                {t.quote}
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3 border-t border-border pt-4">
                <span
                  className={cn(
                    "flex h-10 w-10 shrink-0 items-center justify-center rounded-full font-display text-base font-bold",
                    TONE_BG[t.tone],
                  )}
                  aria-hidden
                >
                  {t.name.charAt(0)}
                </span>
                <span className="min-w-0">
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
