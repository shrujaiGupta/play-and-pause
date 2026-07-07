"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { Gift } from "lucide-react";
import { cn } from "@/lib/utils";
import SectionHeading from "@/components/ui/SectionHeading";
import { Flower, Heart, Palette, Star, Teddy } from "@/components/decor/Doodles";
import { TIMELINE } from "@/lib/content";

const TONE_BG: Record<string, string> = {
  peach: "bg-peach/55",
  sky: "bg-sky/55",
  mint: "bg-mint/50",
  lavender: "bg-lavender/55",
  pink: "bg-pink/55",
  coral: "bg-coral/20",
};

const ICONS: ReactNode[] = [
  <Heart key="0" className="h-7 w-7 text-coral" />,
  <Teddy key="1" className="h-8 w-8" />,
  <Palette key="2" className="h-8 w-8" />,
  <Star key="3" className="h-7 w-7 text-sunshine" />,
  <Flower key="4" className="h-7 w-7 text-pink" />,
  <Gift key="5" className="h-7 w-7 text-amber-600" />,
];

export default function DayTimeline() {
  return (
    <section id="day" className="section-pad bg-cream-deep">
      <div className="site-container">
        <SectionHeading
          eyebrow="A day at Play & Pause"
          title="A gentle little rhythm"
          description="Every session flows softly from one moment to the next, never rushed, always full of wonder."
        />

        <div className="relative mx-auto mt-14 max-w-3xl">
          <span
            aria-hidden
            className="absolute left-[22px] bottom-3 top-3 w-[2px] bg-gradient-to-b from-peach via-coral/40 to-lavender md:left-1/2 md:-translate-x-1/2"
          />

          <div className="space-y-8 md:space-y-12">
            {TIMELINE.map((step, i) => {
              const even = i % 2 === 0;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5 }}
                  className="relative md:grid md:grid-cols-2 md:items-center md:gap-x-12"
                >
                  <span className="absolute left-[22px] top-3 z-10 flex h-9 w-9 -translate-x-1/2 items-center justify-center rounded-full bg-card font-display text-sm font-bold text-coral-deep shadow-soft md:left-1/2">
                    {i + 1}
                  </span>

                  <div
                    className={cn(
                      "ml-14 flex flex-col md:ml-0",
                      even ? "md:col-start-1 md:items-end md:text-right" : "md:col-start-2 md:pl-2",
                      even ? "md:pr-2" : "",
                    )}
                  >
                    <div className="card-soft w-full rounded-[var(--radius-soft)] p-5">
                      <div
                        className={cn(
                          "flex items-center gap-3",
                          even ? "md:flex-row-reverse md:text-right" : "",
                        )}
                      >
                        <span
                          className={cn(
                            "flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl",
                            TONE_BG[step.tone],
                          )}
                        >
                          {ICONS[i]}
                        </span>
                        <h3 className="font-display text-lg font-semibold text-brand-brown">
                          {step.title}
                        </h3>
                      </div>
                      <p className="mt-3 text-[13.5px] leading-relaxed text-charcoal-soft">
                        {step.text}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
