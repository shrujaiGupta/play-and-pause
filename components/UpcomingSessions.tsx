"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Bell, CalendarHeart, Send, Star as StarIcon } from "lucide-react";
import Button from "@/components/ui/Button";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import { Dots, Heart, Rainbow, Sprig, Star } from "@/components/decor/Doodles";
import { Float, Twinkle } from "@/components/decor/Float";
import { WHATSAPP_COMMUNITY_LINK } from "@/lib/whatsapp";

const GOLD = "text-[#f4b63c]";
const SOFT_PINK = "text-[#ffb0c0]";

const JOIN_POINTS = [
  {
    Icon: Bell,
    ring: "bg-mint/60",
    color: "text-green",
    text: "Be the first to know when registrations open",
  },
  {
    Icon: StarIcon,
    ring: "bg-pink/70",
    color: "text-coral",
    text: "Get early access before spots fill up",
  },
  {
    Icon: Send,
    ring: "bg-lavender/70",
    color: "text-purple",
    text: "Receive simple play ideas and community updates",
  },
];

/* Decorative WhatsApp phone with leaves, hearts, a dashed swirl and sparkles
   floating around it — echoes the reference illustration. */
function PhoneCluster() {
  return (
    <div
      aria-hidden
      className="relative hidden shrink-0 pr-7 pt-3 sm:flex sm:items-center sm:justify-center"
    >
      {/* dashed swirl, upper-left of the phone */}
      <svg
        viewBox="0 0 64 52"
        fill="none"
        className="absolute -left-8 -top-1 h-11 w-14 text-coral/45"
      >
        <path
          d="M60 40C34 50 46 22 28 24 14 25 24 8 6 14"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeDasharray="2.5 6"
        />
      </svg>

      <Float className="relative w-fit" duration={6} distance={8} rotate={2}>
        <div className="relative h-[112px] w-[66px] rounded-[18px] border-[5px] border-mint bg-white shadow-soft">
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#25d366] text-white shadow-soft">
              <WhatsAppIcon className="h-[22px] w-[22px]" />
            </span>
          </span>
        </div>
      </Float>

      {/* hearts */}
      <Float className={`absolute -left-3 top-8 ${SOFT_PINK}`} duration={5} distance={6}>
        <Heart className="h-4 w-4" />
      </Float>
      <Float
        className={`absolute right-2 top-4 ${SOFT_PINK}`}
        duration={5.5}
        delay={0.4}
        distance={6}
      >
        <Heart className="h-3.5 w-3.5" />
      </Float>

      {/* leaf sprigs, lower-right */}
      <Float className="absolute -right-1 bottom-1 -rotate-6" duration={6.5} distance={5}>
        <Sprig className="h-11 w-auto" />
      </Float>
      <Sprig className="absolute right-3 -bottom-1 h-7 w-auto rotate-[130deg] opacity-90" />

      {/* sparkle dots, lower-left */}
      <Float className="absolute -left-4 bottom-2" duration={7} delay={0.5} distance={5}>
        <Dots className="h-5 w-5" />
      </Float>
    </div>
  );
}

export default function UpcomingSessions() {
  return (
    <section id="sessions" className="bg-cream-deep pb-20 md:pb-28">
      <div className="site-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="card-soft relative isolate overflow-hidden rounded-[var(--radius-card)] p-4 sm:p-6 lg:p-8"
        >
          {/* soft background decor */}
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-pink/20 blur-3xl" />
            <div className="absolute -bottom-20 left-1/4 h-56 w-56 rounded-full bg-sky/20 blur-3xl" />
          </div>

          <div className="relative grid gap-5 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.55fr)_minmax(0,0.62fr)] lg:gap-6">
            {/* ── LEFT: photo panel ── */}
            <div className="relative min-h-[420px] overflow-hidden rounded-[var(--radius-soft)] bg-peach/30">
              <Image
                src="/upcoming-session.jpg"
                alt="A little one at a Play & Pause session table with the branded sign, a wooden rainbow and craft activities"
                fill
                sizes="(max-width: 1024px) 90vw, 360px"
                className="object-cover"
              />
            </div>

            {/* ── MIDDLE: copy + join card + CTA ── */}
            <div className="flex min-w-0 flex-col">
              <h2 className="font-display text-[24px] font-bold leading-snug text-coral sm:text-[29px]">
                We&rsquo;re busy planning our next magical playdate!
                <Rainbow className="ml-2 inline-block h-6 w-11 align-[-0.15em]" />
              </h2>
              <p className="mt-3 text-[14.5px] leading-relaxed text-charcoal-soft">
                Our sessions are thoughtfully curated and announced a few weeks in
                advance.
                <Heart className="ml-1.5 inline-block h-3.5 w-3.5 align-[-0.1em] text-rose" />
              </p>

              <div className="my-5 border-t border-dashed border-coral/30" />

              <div className="rounded-[22px] bg-cream/70 p-4 sm:p-5">
                <h3 className="text-[15px] font-bold text-brand-brown">
                  Join our WhatsApp community to:
                </h3>

                <div className="mt-2 grid items-center gap-2 sm:grid-cols-[1fr_auto] sm:gap-5">
                  <ul>
                    {JOIN_POINTS.map(({ Icon, ring, color, text }, i) => (
                      <li
                        key={text}
                        className={`flex items-center gap-3 py-2.5 ${
                          i > 0 ? "border-t border-dashed border-border" : ""
                        }`}
                      >
                        <span
                          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${ring}`}
                        >
                          <Icon className={`h-[18px] w-[18px] ${color}`} strokeWidth={2.2} />
                        </span>
                        <span className="text-[13.5px] font-medium leading-snug text-charcoal">
                          {text}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <PhoneCluster />
                </div>
              </div>

              {/* CTA — slim pill spanning the middle column, icon on the left */}
              <Button
                href={WHATSAPP_COMMUNITY_LINK}
                target="_blank"
                rel="noopener noreferrer"
                variant="green"
                size="lg"
                className="mt-5 w-full"
              >
                <WhatsAppIcon className="h-[18px] w-[18px]" />
                Join WhatsApp Community
              </Button>
            </div>

            {/* ── RIGHT: compact lavender "limited spots" card ── */}
            <div className="relative flex flex-col items-center overflow-hidden rounded-[var(--radius-soft)] bg-lavender/35 px-4 py-6 text-center lg:self-start">
              <div className="flex items-center gap-2.5">
                <Twinkle className={GOLD} delay={0.3}>
                  <Star className="h-3.5 w-3.5" />
                </Twinkle>
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/85 text-purple shadow-soft">
                  <CalendarHeart className="h-[22px] w-[22px]" strokeWidth={2} />
                </span>
                <Twinkle className={GOLD} delay={0.9}>
                  <Star className="h-3 w-3" />
                </Twinkle>
              </div>
              <p className="mt-3.5 text-[13px] leading-relaxed text-charcoal-soft">
                Every <span className="font-semibold text-brand-brown">Play &amp; Pause</span>{" "}
                session has limited spots to keep the experience calm and personal.
              </p>
              <Heart className="mt-3 h-4 w-4 text-purple" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
