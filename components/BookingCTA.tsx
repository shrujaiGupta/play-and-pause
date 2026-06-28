"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import { Cloud, Heart, Rainbow, Star, Teddy } from "@/components/decor/Doodles";
import { Float, Twinkle } from "@/components/decor/Float";
import { BOOKING_LINK } from "@/lib/whatsapp";

export default function BookingCTA() {
  return (
    <section className="section-pad bg-cream-deep">
      <div className="site-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="relative isolate overflow-hidden rounded-[var(--radius-card)] bg-gradient-to-br from-peach via-pink/60 to-coral/40 px-6 py-14 text-center shadow-soft sm:px-10 sm:py-16"
        >
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <Float className="absolute left-[8%] top-8 text-white/85" duration={8} distance={14}>
              <Cloud className="h-9 w-16" />
            </Float>
            <Float className="absolute right-[10%] top-12 text-white/80" duration={7} delay={0.6} distance={12}>
              <Cloud className="h-8 w-14" />
            </Float>
            <Twinkle className="absolute left-[20%] bottom-10 text-white">
              <Star className="h-5 w-5" />
            </Twinkle>
            <Twinkle className="absolute right-[22%] top-10 text-white" delay={0.8}>
              <Star className="h-4 w-4" />
            </Twinkle>
            <Float className="absolute right-6 bottom-2" duration={6} distance={9} rotate={-3}>
              <Teddy className="h-16 w-16" />
            </Float>
            <Float className="absolute left-4 bottom-0" duration={7} delay={0.4} distance={8}>
              <Rainbow className="h-12 w-20 opacity-80" />
            </Float>
          </div>

          <div className="relative mx-auto max-w-xl">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/70 px-3.5 py-1.5 text-xs font-semibold text-coral-deep backdrop-blur">
              <Heart className="h-3.5 w-3.5 text-coral" />
              Spots fill up fast
            </span>
            <h2 className="section-title mt-5 text-brand-brown">
              Ready for a little Play <span className="text-coral">&amp;</span> Pause?
            </h2>
            <p className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-charcoal-soft">
              Reserve your spot for the next session in a single tap. We&apos;ll send you all the
              details on WhatsApp.
            </p>
            <div className="mt-8 flex justify-center">
              <Button href={BOOKING_LINK} target="_blank" rel="noopener noreferrer" size="lg">
                Book on WhatsApp
                <WhatsAppIcon className="h-[18px] w-[18px]" />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
