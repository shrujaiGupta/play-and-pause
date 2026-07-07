"use client";

import { motion } from "framer-motion";
import type { ComponentType } from "react";
import { Gift, Music, ShieldCheck, Users } from "lucide-react";
import { Palette } from "@/components/decor/Doodles";

type IconProps = { className?: string; strokeWidth?: number };

type Feature = {
  Icon: ComponentType<IconProps>;
  colorful?: boolean; // the palette doodle carries its own colours
  title: string;
  text: string;
  ring: string;
  color: string;
};

const FEATURES: Feature[] = [
  {
    Icon: Palette,
    colorful: true,
    title: "Creative Activities",
    text: "Fun, hands-on learning through play",
    ring: "bg-sunshine/50",
    color: "",
  },
  {
    Icon: Music,
    title: "Musical Fun",
    text: "Songs, rhythm & movement",
    ring: "bg-lavender/60",
    color: "text-purple",
  },
  {
    Icon: Users,
    title: "Mom Connection",
    text: "Meaningful bonding & community",
    ring: "bg-coral/15",
    color: "text-coral",
  },
  {
    Icon: Gift,
    title: "Take-home Surprises",
    text: "Goodie kits & special memories",
    ring: "bg-pink/70",
    color: "text-rose",
  },
  {
    Icon: ShieldCheck,
    title: "Small & Safe Groups",
    text: "Limited spots for calm & personal attention",
    ring: "bg-mint/60",
    color: "text-green",
  },
];

export default function FeatureStrip() {
  return (
    <section id="features" className="bg-cream-deep pb-16 pt-2 md:pb-20">
      <div className="site-container">
        <div className="grid grid-cols-2 gap-3.5 sm:grid-cols-3 lg:grid-cols-5 lg:gap-4">
          {FEATURES.map((f, i) => (
            <motion.article
              key={f.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className={`group flex items-start gap-2 rounded-[var(--radius-soft)] bg-card px-3 py-5 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-soft-lg${
                FEATURES.length % 2 === 1 && i === FEATURES.length - 1
                  ? " max-sm:col-span-2 max-sm:w-1/2 max-sm:justify-self-center"
                  : ""
              }`}
            >
              <span
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${f.ring} transition-transform duration-300 group-hover:scale-110`}
              >
                {f.colorful ? (
                  <f.Icon className="h-[20px] w-[20px]" />
                ) : (
                  <f.Icon className={`h-[19px] w-[19px] ${f.color}`} strokeWidth={2.2} />
                )}
              </span>
              <div className="min-w-0">
                <h3 className="text-[14px] font-bold leading-tight text-brand-brown">
                  {f.title}
                </h3>
                <p className="mt-1 text-[12.5px] leading-relaxed text-charcoal-soft">
                  {f.text}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
