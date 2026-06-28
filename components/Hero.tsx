"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import Button from "@/components/ui/Button";
import Placeholder from "@/components/ui/Placeholder";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import { Cloud, Heart, Rainbow, Star, Teddy } from "@/components/decor/Doodles";
import { Float, Twinkle } from "@/components/decor/Float";
import { whatsappLink } from "@/lib/whatsapp";
import { SESSION } from "@/lib/content";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

function fade(delay: number) {
  return {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease },
  };
}

function HeroDecor() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-peach/40 blur-3xl" />
      <div className="absolute right-[-6rem] top-24 h-80 w-80 rounded-full bg-sky/30 blur-3xl" />
      <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-lavender/30 blur-3xl" />

      <Float className="absolute left-[6%] top-[18%] text-white/90" duration={7} distance={14}>
        <Cloud className="h-12 w-20 drop-shadow-sm" />
      </Float>
      <Float className="absolute left-[44%] top-[12%] text-white/80" duration={9} delay={1} distance={18}>
        <Cloud className="h-9 w-16" />
      </Float>
      <Float className="absolute right-[12%] bottom-[16%] text-white/85" duration={8} delay={0.6} distance={16}>
        <Cloud className="h-10 w-16" />
      </Float>

      <Twinkle className="absolute left-[30%] top-[26%] text-sunshine" delay={0.2}>
        <Star className="h-5 w-5" />
      </Twinkle>
      <Twinkle className="absolute right-[30%] top-[20%] text-sunshine" delay={1.1}>
        <Star className="h-4 w-4" />
      </Twinkle>
      <Twinkle className="absolute left-[14%] bottom-[24%] text-sunshine" delay={0.7}>
        <Star className="h-6 w-6" />
      </Twinkle>

      <Float className="absolute right-[6%] top-[40%] text-pink" duration={5.5} distance={10}>
        <Heart className="h-5 w-5" />
      </Float>
      <Float className="absolute left-[40%] bottom-[12%] text-coral/70" duration={6.5} delay={0.4} distance={12}>
        <Heart className="h-4 w-4" />
      </Float>

      <Float className="absolute -left-6 bottom-[6%]" duration={7} distance={10} rotate={3}>
        <Rainbow className="h-16 w-28 opacity-90" />
      </Float>
      <Float className="absolute left-3 bottom-2 sm:left-6" duration={6} delay={0.5} distance={8} rotate={-2}>
        <Teddy className="h-20 w-20 drop-shadow-sm" />
      </Float>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-gradient-to-b from-cream via-cream to-cream-deep pt-[calc(var(--nav-h)+28px)] pb-20 md:pb-28"
    >
      <HeroDecor />

      <div className="site-container relative grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
        <div className="text-center lg:text-left">
          <motion.p
            {...fade(0)}
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-coral-deep"
          >
            Welcome to
            <ArrowUpRight className="h-4 w-4" />
          </motion.p>

          <motion.h1 {...fade(0.08)} className="hero-title mt-4 text-brand-brown">
            Play <span className="text-coral">&amp;</span> Pause
            <Heart className="ml-2 inline-block h-6 w-6 align-top text-pink" />
          </motion.h1>

          <motion.p
            {...fade(0.16)}
            className="mx-auto mt-5 max-w-md font-display text-2xl leading-snug text-charcoal sm:text-[26px] lg:mx-0"
          >
            Where little hands <span className="text-gradient-coral font-semibold">create</span>,
            and moms find a moment to{" "}
            <span className="text-gradient-coral font-semibold">pause</span>.
          </motion.p>

          <motion.p
            {...fade(0.24)}
            className="mx-auto mt-5 max-w-lg text-[15px] leading-relaxed text-charcoal-soft lg:mx-0"
          >
            Curated playdates, creative experiences and meaningful moments for children
            aged 2–6 years in Jaipur — calm, screen-free and beautifully made.
          </motion.p>

          <motion.div
            {...fade(0.32)}
            className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start"
          >
            <Button
              href={whatsappLink(SESSION.whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
            >
              Book Upcoming Session
              <WhatsAppIcon className="h-[18px] w-[18px]" />
            </Button>
            <a
              href="#sessions"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-brand-brown transition-colors hover:text-coral-deep"
            >
              Explore Play &amp; Pause
              <ChevronDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div className="relative">
            <Placeholder
              tone="peach"
              scene="momchild"
              className="aspect-[4/5] w-full shadow-soft-lg ring-1 ring-white/60"
            />

            <Float
              className="absolute -right-3 top-8 sm:-right-6"
              duration={6}
              distance={10}
            >
              <div className="card-soft w-32 rounded-2xl px-4 py-3 text-center">
                <p className="font-display text-[13px] leading-relaxed text-brand-brown">
                  Thoughtful.
                  <br />
                  Creative.
                  <br />
                  Joyful.
                  <br />
                  Meaningful.
                </p>
              </div>
            </Float>

            <Float className="absolute -left-4 bottom-10" duration={7} delay={0.4} distance={9}>
              <div className="card-soft flex items-center gap-2 rounded-full px-3.5 py-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-coral/15">
                  <Heart className="h-3.5 w-3.5 text-coral" />
                </span>
                <span className="text-xs font-semibold text-brand-brown">Made with love</span>
              </div>
            </Float>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#sessions"
        aria-label="Scroll to sessions"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-charcoal-muted md:flex"
      >
        <span className="text-[11px] font-medium uppercase tracking-[0.2em]">Scroll</span>
        <motion.span
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-5 w-5" />
        </motion.span>
      </motion.a>
    </section>
  );
}
