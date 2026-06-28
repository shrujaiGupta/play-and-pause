"use client";

import { motion } from "framer-motion";
import { CalendarDays, MapPin, Users, Gift } from "lucide-react";
import Button from "@/components/ui/Button";
import Countdown from "@/components/ui/Countdown";
import Placeholder from "@/components/ui/Placeholder";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import { Tooth, Toothbrush, Star, Sparkle } from "@/components/decor/Doodles";
import { whatsappLink } from "@/lib/whatsapp";
import { SESSION } from "@/lib/content";

const DETAILS = [
  { Icon: CalendarDays, label: "When", value: `${SESSION.date} · ${SESSION.time}`, tone: "bg-coral/12 text-coral-deep" },
  { Icon: MapPin, label: "Where", value: SESSION.venue, tone: "bg-mint/40 text-emerald-700" },
  { Icon: Users, label: "Ages", value: SESSION.ageRange, tone: "bg-lavender/50 text-violet-700" },
  { Icon: Gift, label: "Price", value: `${SESSION.price} ${SESSION.priceNote}`, tone: "bg-sky/50 text-sky-700" },
];

const AVATARS = ["bg-peach", "bg-lavender", "bg-mint", "bg-pink"];

export default function FeaturedSession() {
  return (
    <section id="sessions" className="section-pad bg-cream-deep">
      <div className="site-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="card-soft grid gap-8 p-5 sm:p-7 lg:grid-cols-[300px_1fr] lg:gap-10 lg:p-8"
        >
          <div className="relative">
            <Placeholder
              tone="sky"
              scene="none"
              className="aspect-[4/5] w-full lg:h-full"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-6 text-center">
              <span className="rounded-full bg-white/85 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-brand-brown backdrop-blur">
                Dental Theme
              </span>
              <Tooth className="h-24 w-20 drop-shadow-sm" />
              <Toothbrush className="h-8 w-24" />
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.25fr_1fr] lg:gap-10">
            <div>
              <p className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-coral-deep">
                {SESSION.badge}
                <Sparkle className="h-3.5 w-3.5 text-sunshine" />
              </p>
              <h3 className="section-title mt-3 text-gradient-coral">{SESSION.title}</h3>
              <p className="mt-2 text-[15px] font-medium text-charcoal-soft">{SESSION.theme}</p>

              <dl className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {DETAILS.map(({ Icon, label, value, tone }) => (
                  <div key={label} className="flex items-start gap-3 rounded-2xl bg-cream/70 px-3.5 py-3">
                    <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${tone}`}>
                      <Icon className="h-[18px] w-[18px]" />
                    </span>
                    <span>
                      <dt className="text-[11px] font-semibold uppercase tracking-wide text-charcoal-muted">
                        {label}
                      </dt>
                      <dd className="text-[13.5px] font-semibold text-brand-brown">{value}</dd>
                    </span>
                  </div>
                ))}
              </dl>

              <div className="mt-7">
                <Button
                  href={whatsappLink(SESSION.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  Book Now on WhatsApp
                  <WhatsAppIcon className="h-[18px] w-[18px]" />
                </Button>
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <div className="rounded-[var(--radius-soft)] bg-gradient-to-br from-pink/35 to-coral/15 p-5">
                <p className="mb-4 flex items-center justify-center gap-1.5 text-center text-sm font-bold text-coral-deep">
                  <Star className="h-4 w-4 text-sunshine" />
                  {SESSION.spots}!
                </p>
                <div className="flex justify-center">
                  <Countdown target={SESSION.countdownTarget} />
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-[var(--radius-soft)] bg-cream/70 px-4 py-3.5">
                <div className="flex -space-x-2.5">
                  {AVATARS.map((bg, i) => (
                    <span
                      key={i}
                      className={`h-8 w-8 rounded-full ${bg} ring-2 ring-white`}
                      aria-hidden
                    />
                  ))}
                </div>
                <p className="text-[13px] font-medium leading-snug text-charcoal-soft">
                  Loved by <span className="font-bold text-brand-brown">100+ families</span> in
                  Jaipur
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
