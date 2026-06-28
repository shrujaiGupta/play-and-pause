"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import Button from "@/components/ui/Button";
import Placeholder from "@/components/ui/Placeholder";
import { Cloud, Heart } from "@/components/decor/Doodles";
import { Float } from "@/components/decor/Float";

export default function Founder() {
  return (
    <section id="founder" className="section-pad bg-cream">
      <div className="site-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[var(--radius-card)] bg-gradient-to-br from-pink/25 via-cream to-sky/25 p-6 shadow-soft sm:p-9 lg:p-12"
        >
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-lavender/30 blur-3xl" />
            <div className="absolute -bottom-20 left-1/4 h-64 w-64 rounded-full bg-peach/40 blur-3xl" />
            <Float className="absolute right-[12%] top-8 text-white/85" duration={8} distance={14}>
              <Cloud className="h-9 w-16" />
            </Float>
            <Float className="absolute right-[30%] bottom-10 text-white/80" duration={7} delay={0.6} distance={12}>
              <Cloud className="h-7 w-12" />
            </Float>
          </div>

          <div className="relative grid items-center gap-10 lg:grid-cols-[300px_1fr_300px] lg:gap-12">
            <div className="mx-auto w-full max-w-xs lg:max-w-none">
              <Placeholder
                tone="peach"
                scene="portrait"
                className="aspect-[4/5] w-full shadow-soft-lg ring-1 ring-white/60"
              />
            </div>

            <div className="text-center lg:text-left">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-coral-deep">
                Meet the Founder
              </p>
              <h2 className="section-title mt-3 text-brand-brown">
                The mom behind Play <span className="text-coral">&amp;</span> Pause
              </h2>
              <p className="mt-3 text-sm font-medium text-charcoal-soft">
                Corporate professional · Toddler mom · Founder
              </p>
              <p className="mt-5 text-[15px] leading-relaxed text-charcoal-soft">
                Play &amp; Pause was born from a simple belief — that children learn best through
                play, creativity and meaningful experiences, and that moms deserve a space to
                pause, connect and recharge. What started as a few playdates for friends has grown
                into a little community of families who value slow, screen-free, joyful moments.
              </p>
              <div className="mt-7 flex justify-center lg:justify-start">
                <Button href="#contact" variant="outline" size="lg">
                  Read My Story
                </Button>
              </div>
            </div>

            <figure className="relative rounded-[var(--radius-soft)] bg-white/70 p-6 shadow-soft backdrop-blur">
              <Quote className="h-8 w-8 text-coral/40" />
              <blockquote className="mt-3 font-display text-lg leading-relaxed text-brand-brown">
                Through every session, my goal is to create joyful memories that last a lifetime.
              </blockquote>
              <Heart className="mt-4 h-5 w-5 text-pink" />
            </figure>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
