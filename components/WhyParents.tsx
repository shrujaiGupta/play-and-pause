"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { Camera, Gift } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { Heart, Palette, Rainbow, Teddy } from "@/components/decor/Doodles";

type Reason = {
  title: string;
  text: string;
  bg: string;
  icon: ReactNode;
};

const REASONS: Reason[] = [
  {
    title: "Small Groups",
    text: "Personal attention in every single session.",
    bg: "bg-peach/55",
    icon: <Teddy className="h-8 w-8" />,
  },
  {
    title: "Creative Activities",
    text: "Hands-on, joyful and wonderfully engaging.",
    bg: "bg-mint/50",
    icon: <Palette className="h-8 w-8" />,
  },
  {
    title: "Mom-Child Bonding",
    text: "Quality time that quietly creates memories.",
    bg: "bg-pink/55",
    icon: <Heart className="h-7 w-7 text-coral" />,
  },
  {
    title: "Calm & Screen-Free",
    text: "A peaceful space to unplug and just play.",
    bg: "bg-sky/55",
    icon: <Rainbow className="h-8 w-12" />,
  },
  {
    title: "Beautiful Memories",
    text: "Keepsake photos to treasure forever.",
    bg: "bg-lavender/55",
    icon: <Camera className="h-7 w-7 text-violet-600" />,
  },
  {
    title: "Take-home Goodies",
    text: "Special little keepsakes for tiny hands.",
    bg: "bg-sunshine/45",
    icon: <Gift className="h-7 w-7 text-amber-600" />,
  },
];

export default function WhyParents() {
  return (
    <section id="why" className="section-pad bg-cream">
      <div className="site-container">
        <SectionHeading
          eyebrow="Why parents love"
          title={
            <>
              Play <span className="text-coral">&amp;</span> Pause
            </>
          }
          description="Every session is designed with the same care you'd put into a memory worth keeping."
        />

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {REASONS.map((reason, i) => (
            <motion.article
              key={reason.title}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="group flex flex-col items-center rounded-[var(--radius-soft)] bg-card px-4 py-6 text-center shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-soft-lg"
            >
              <div
                className={`mb-4 flex h-16 w-16 items-center justify-center rounded-2xl ${reason.bg} transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3`}
              >
                {reason.icon}
              </div>
              <h3 className="font-display text-base font-semibold text-brand-brown">
                {reason.title}
              </h3>
              <p className="mt-1.5 text-[12.5px] leading-relaxed text-charcoal-soft">
                {reason.text}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
