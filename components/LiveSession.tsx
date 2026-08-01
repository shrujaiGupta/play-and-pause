"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  CalendarDays,
  CalendarPlus,
  Check,
  Clock,
  MapPin,
  Navigation,
  Users,
} from "lucide-react";
import Button from "@/components/ui/Button";
import Countdown from "@/components/ui/Countdown";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import { Heart, LeafBranch, Rainbow, Star } from "@/components/decor/Doodles";
import { Float, Twinkle } from "@/components/decor/Float";
import { whatsappLink, WHATSAPP_COMMUNITY_LINK } from "@/lib/whatsapp";
import { googleCalendarLink, UPCOMING_EVENT } from "@/lib/event";

const GOLD = "text-[#f4b63c]";
const SOFT_PINK = "text-[#ffb0c0]";

const event = UPCOMING_EVENT;

const DETAILS = [
  {
    Icon: CalendarDays,
    label: "Date",
    value: event.date,
    ring: "bg-pink/60",
    color: "text-coral-deep",
  },
  {
    Icon: Clock,
    label: "Time",
    value: event.time,
    ring: "bg-sunshine/50",
    color: "text-orange",
  },
  {
    Icon: Users,
    label: "Ages",
    value: event.ageRange,
    ring: "bg-lavender/70",
    color: "text-purple",
  },
  {
    Icon: MapPin,
    label: "Venue",
    value: event.venue,
    ring: "bg-mint/60",
    color: "text-green",
  },
];

/* Small "live" pill with a softly pulsing dot — sits over the photo. */
function LivePill() {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-brand-brown shadow-soft backdrop-blur">
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#1fa855]/70" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-[#1fa855]" />
      </span>
      Booking open
    </span>
  );
}

export default function LiveSession() {
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
            <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-pink/25 blur-3xl" />
            <div className="absolute -bottom-20 left-1/4 h-56 w-56 rounded-full bg-sky/20 blur-3xl" />
            <Twinkle className={`absolute right-8 top-6 hidden lg:block ${GOLD}`} delay={0.4}>
              <Star className="h-4 w-4" />
            </Twinkle>
            <Twinkle className={`absolute right-24 top-16 hidden lg:block ${GOLD}`} delay={1.1}>
              <Star className="h-3 w-3" />
            </Twinkle>
          </div>

          <div className="relative grid gap-5 lg:grid-cols-[minmax(0,0.86fr)_minmax(0,1.14fr)] lg:gap-7">
            {/* ── LEFT: photo panel ── */}
            <div className="relative min-h-[300px] overflow-hidden rounded-[var(--radius-soft)] bg-peach/30 sm:min-h-[360px] lg:min-h-[520px]">
              <Image
                src={event.image}
                alt={event.imageAlt}
                fill
                sizes="(max-width: 1024px) 92vw, 420px"
                className="object-cover"
              />

              {/* live pill, top-left */}
              <div className="absolute left-3.5 top-3.5">
                <LivePill />
              </div>

              {/* price tag, top-right */}
              <div className="absolute right-3.5 top-3.5 rounded-2xl bg-white/92 px-3 py-2 text-center shadow-soft backdrop-blur">
                <span className="block font-display text-[19px] font-bold leading-none text-brand-brown">
                  {event.price}
                </span>
                <span className="mt-0.5 block text-[10px] font-medium text-charcoal-muted">
                  {event.priceNote}
                </span>
              </div>

              {/* theme chip over a bottom scrim */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/45 to-transparent p-3.5 pt-10">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1.5 text-[11px] font-semibold text-brand-brown backdrop-blur">
                  <Heart className="h-3 w-3 text-rose" />
                  {event.theme}
                </span>
              </div>
            </div>

            {/* ── RIGHT: event details ── */}
            <div className="flex min-w-0 flex-col">
              <p className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-coral-deep">
                {event.badge}
                <Star className={`h-3.5 w-3.5 ${GOLD}`} />
              </p>

              <h2 className="mt-2.5 font-display text-[26px] font-bold leading-snug text-brand-brown sm:text-[32px]">
                {event.title}
                <Rainbow className="ml-2 inline-block h-6 w-11 align-[-0.15em]" />
              </h2>

              {/* ── countdown ── */}
              <div className="mt-4 rounded-[22px] bg-gradient-to-br from-pink/45 via-peach/35 to-sky/25 p-4">
                <p className="mb-3 flex items-center justify-center gap-1.5 text-center text-[12px] font-bold uppercase tracking-[0.14em] text-brand-brown">
                  <Heart className="h-3 w-3 text-coral" />
                  The playdate begins in
                </p>
                <Countdown
                  target={event.startsAt}
                  size="lg"
                  expiredLabel="Happening now — see you there!"
                />
              </div>

              {/* ── detail tiles ── */}
              <dl className="mt-4 grid gap-2.5 sm:grid-cols-2">
                {DETAILS.map(({ Icon, label, value, ring, color }) => (
                  <div
                    key={label}
                    className="flex items-center gap-3 rounded-2xl bg-cream/70 px-3.5 py-3"
                  >
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${ring}`}
                    >
                      <Icon className={`h-[17px] w-[17px] ${color}`} strokeWidth={2.2} />
                    </span>
                    <span className="min-w-0">
                      <dt className="text-[10px] font-semibold uppercase tracking-wide text-charcoal-muted">
                        {label}
                      </dt>
                      <dd className="truncate text-[13.5px] font-semibold text-brand-brown">
                        {value}
                      </dd>
                    </span>
                  </div>
                ))}
              </dl>

              <p className="mt-2 pl-1 text-[11.5px] text-charcoal-muted">
                {event.venueDetail}
              </p>

              {/* ── what's included ── */}
              <ul className="mt-4 flex flex-wrap gap-2">
                {event.includes.map((item) => (
                  <li
                    key={item}
                    className="inline-flex items-center gap-1.5 rounded-full bg-mint/35 px-3 py-1.5 text-[12px] font-medium text-charcoal"
                  >
                    <Check className="h-3.5 w-3.5 text-green" strokeWidth={3} />
                    {item}
                  </li>
                ))}
              </ul>

              {/* ── CTAs ── */}
              <div className="mt-5 flex flex-col gap-2.5 sm:flex-row">
                <Button
                  href={whatsappLink(event.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="green"
                  size="lg"
                  className="w-full sm:flex-1"
                >
                  <WhatsAppIcon className="h-[18px] w-[18px]" />
                  Book Your Spot
                </Button>
                <Button
                  href={event.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  <Navigation className="h-4 w-4" strokeWidth={2.2} />
                  Get Directions
                </Button>
              </div>

              <div className="mt-4 flex flex-wrap items-center justify-between gap-x-4 gap-y-2 border-t border-dashed border-border pt-3.5">
                <a
                  href={googleCalendarLink(event)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-charcoal-soft transition-colors hover:text-coral-deep"
                >
                  <CalendarPlus className="h-4 w-4" strokeWidth={2.2} />
                  Add to calendar
                </a>
                <a
                  href={WHATSAPP_COMMUNITY_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[12.5px] text-charcoal-soft transition-colors hover:text-coral-deep"
                >
                  Can&rsquo;t make it?{" "}
                  <span className="font-semibold underline decoration-coral/40 underline-offset-2">
                    Join the community
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* corner sprig */}
          <Float
            className="pointer-events-none absolute -bottom-3 -left-3 hidden lg:block"
            duration={7}
            distance={7}
            rotate={-3}
          >
            <LeafBranch className="h-20 w-auto opacity-70" />
          </Float>
          <Float
            className={`pointer-events-none absolute right-6 top-1/3 hidden ${SOFT_PINK} lg:block`}
            duration={5.5}
            distance={7}
          >
            <Heart className="h-4 w-4" />
          </Float>
        </motion.div>
      </div>
    </section>
  );
}
