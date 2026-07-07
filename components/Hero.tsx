"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown, Star as StarIcon } from "lucide-react";
import Button from "@/components/ui/Button";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import { Dots, Heart, Rainbow, Star } from "@/components/decor/Doodles";
import { Float, Twinkle } from "@/components/decor/Float";
import { WHATSAPP_COMMUNITY_LINK } from "@/lib/whatsapp";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

function fade(delay: number) {
  return {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease },
  };
}

const GOLD = "text-[#f4b63c]";
const SOFT_PINK = "text-[#ffb0c0]";

// Wavy, hand-cut style frame shape (objectBoundingBox coordinates).
const WAVE =
  "M 0.9755,0.5000 C 0.9766,0.5570 0.9768,0.6314 0.9754,0.6721 C 0.9741,0.7128 0.9714,0.7235 0.9675,0.7441 C 0.9636,0.7647 0.9581,0.7807 0.9519,0.7959 C 0.9457,0.8112 0.9382,0.8237 0.9302,0.8357 C 0.9223,0.8476 0.9135,0.8578 0.9043,0.8677 C 0.8951,0.8776 0.8855,0.8865 0.8750,0.8951 C 0.8646,0.9037 0.8538,0.9118 0.8415,0.9193 C 0.8291,0.9269 0.8164,0.9341 0.8009,0.9403 C 0.7855,0.9464 0.7695,0.9521 0.7487,0.9563 C 0.7278,0.9605 0.7174,0.9637 0.6759,0.9655 C 0.6345,0.9673 0.5584,0.9677 0.5000,0.9670 C 0.4416,0.9662 0.3666,0.9640 0.3258,0.9611 C 0.2849,0.9582 0.2754,0.9541 0.2549,0.9497 C 0.2344,0.9453 0.2186,0.9402 0.2028,0.9348 C 0.1870,0.9295 0.1733,0.9238 0.1599,0.9176 C 0.1466,0.9114 0.1343,0.9050 0.1227,0.8975 C 0.1110,0.8900 0.1001,0.8822 0.0902,0.8727 C 0.0804,0.8632 0.0713,0.8528 0.0637,0.8404 C 0.0561,0.8280 0.0496,0.8144 0.0445,0.7983 C 0.0395,0.7821 0.0359,0.7649 0.0335,0.7436 C 0.0310,0.7222 0.0301,0.7108 0.0298,0.6702 C 0.0294,0.6296 0.0304,0.5563 0.0315,0.5000 C 0.0326,0.4437 0.0344,0.3719 0.0364,0.3322 C 0.0383,0.2924 0.0406,0.2824 0.0433,0.2615 C 0.0460,0.2407 0.0488,0.2237 0.0527,0.2071 C 0.0565,0.1904 0.0606,0.1755 0.0663,0.1616 C 0.0720,0.1478 0.0784,0.1352 0.0866,0.1240 C 0.0947,0.1129 0.1042,0.1031 0.1152,0.0947 C 0.1263,0.0863 0.1388,0.0795 0.1528,0.0737 C 0.1668,0.0679 0.1822,0.0637 0.1993,0.0601 C 0.2164,0.0564 0.2341,0.0540 0.2557,0.0517 C 0.2772,0.0494 0.2879,0.0478 0.3286,0.0464 C 0.3693,0.0449 0.4426,0.0437 0.5000,0.0430 C 0.5574,0.0422 0.6318,0.0416 0.6731,0.0419 C 0.7144,0.0423 0.7260,0.0430 0.7479,0.0451 C 0.7698,0.0472 0.7876,0.0502 0.8044,0.0546 C 0.8212,0.0591 0.8356,0.0649 0.8486,0.0720 C 0.8616,0.0790 0.8725,0.0876 0.8824,0.0971 C 0.8923,0.1066 0.9004,0.1174 0.9079,0.1290 C 0.9155,0.1405 0.9216,0.1530 0.9276,0.1664 C 0.9336,0.1798 0.9388,0.1936 0.9438,0.2094 C 0.9488,0.2252 0.9535,0.2409 0.9577,0.2610 C 0.9618,0.2812 0.9659,0.2904 0.9688,0.3303 C 0.9718,0.3701 0.9744,0.4430 0.9755,0.5000 Z";

// Sparkles, hearts, rainbows and dots scattered like the reference design.
function HeroDecor() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -left-24 top-4 h-72 w-72 rounded-full bg-peach/40 blur-3xl" />
      <div className="absolute right-[-6rem] top-24 h-80 w-80 rounded-full bg-pink/25 blur-3xl" />
      <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-sky/20 blur-3xl" />

      {/* scattered doodles (desktop only, so they don't land on text when the layout stacks) */}
      <div className="hidden lg:block">
        {/* rainbow in the gap between the headline and photo */}
        <Float className="absolute left-[47%] top-[15%]" duration={7} distance={12} rotate={3}>
          <Rainbow className="h-8 w-14 opacity-90" />
        </Float>

        {/* sparkles */}
        <Twinkle className={`absolute left-[4%] top-[37%] ${GOLD}`} delay={0.2}>
          <Star className="h-6 w-6" />
        </Twinkle>
        <Twinkle className={`absolute left-[32%] top-[29%] ${GOLD}`} delay={0.9}>
          <Star className="h-4 w-4" />
        </Twinkle>
        <Twinkle className={`absolute left-[45%] top-[47%] ${GOLD}`} delay={1.4}>
          <Star className="h-5 w-5" />
        </Twinkle>
        <Twinkle className={`absolute left-[2%] top-[60%] ${GOLD}`} delay={1.1}>
          <Star className="h-3.5 w-3.5" />
        </Twinkle>
        <Twinkle className={`absolute left-[47%] top-[16%] ${GOLD}`} delay={0.7}>
          <Star className="h-4 w-4" />
        </Twinkle>

        {/* hearts */}
        <Float className="absolute left-[37%] top-[10%] text-peach" duration={6} distance={9}>
          <Heart className="h-4 w-4" />
        </Float>

        {/* dot cluster */}
        <Float className="absolute left-[43%] top-[39%]" duration={7} delay={0.6} distance={8}>
          <Dots className="h-6 w-6" />
        </Float>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-gradient-to-b from-cream via-[#fdf1ec] to-cream-deep pt-[calc(var(--nav-h)+34px)] pb-16 md:pb-24"
    >
      <HeroDecor />

      <div className="site-container relative grid items-center gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-10">
        {/* ---------- Copy ---------- */}
        <div className="min-w-0 text-center lg:text-left">
          <motion.p
            {...fade(0)}
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.26em] text-coral-deep"
          >
            Calm. Creative. Meaningful.
            <Heart className={`h-3.5 w-3.5 ${SOFT_PINK}`} />
          </motion.p>

          <motion.h1 {...fade(0.08)} className="hero-title mt-3 text-brand-brown">
            Play <span className="text-coral">&amp;</span> Pause
          </motion.h1>

          <motion.p
            {...fade(0.16)}
            className="mx-auto mt-4 max-w-md font-display text-[21px] font-medium leading-snug text-charcoal sm:text-[25px] lg:mx-0"
          >
            Calm, curated play experiences for{" "}
            <span className="text-rose">little ones</span>.
            <br className="hidden sm:block" /> A gentle{" "}
            <span className="text-rose">pause</span> for moms.
          </motion.p>

          <motion.p
            {...fade(0.24)}
            className="mx-auto mt-4 max-w-lg text-[15px] leading-relaxed text-charcoal-soft lg:mx-0"
          >
            Thoughtfully designed playdates and meaningful moments for children aged
            1.5 years and up in Jaipur. Screen-free, joyful and beautifully made.
          </motion.p>

          <motion.div
            {...fade(0.32)}
            className="mt-6 flex flex-col items-center gap-3.5 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start"
          >
            <Button
              href={WHATSAPP_COMMUNITY_LINK}
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
              className="w-full sm:w-auto sm:whitespace-nowrap"
            >
              Be First to Know Our Next Session
              <WhatsAppIcon className="h-[18px] w-[18px]" />
            </Button>
            <Button
              href="#features"
              variant="outline"
              size="lg"
              className="w-full sm:w-auto sm:whitespace-nowrap"
            >
              Explore Play &amp; Pause
              <ChevronDown className="h-4 w-4" />
            </Button>
          </motion.div>

          <motion.div
            {...fade(0.4)}
            className="mt-6 flex items-center justify-center gap-2.5 lg:justify-start"
          >
            <Heart className={`h-4 w-4 ${SOFT_PINK}`} />
            <span className="text-[13px] font-medium text-charcoal-soft">
              Trusted by 50+ Jaipur moms
            </span>
            <span className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon key={i} className="h-4 w-4 fill-[#f6a01f] text-[#f6a01f]" />
              ))}
            </span>
          </motion.div>
        </div>

        {/* ---------- Media ---------- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease }}
          className="relative mx-auto w-full min-w-0 max-w-md lg:max-w-none"
        >
          {/* wavy frame clip definition */}
          <svg width="0" height="0" className="absolute" aria-hidden>
            <defs>
              <clipPath id="heroWave" clipPathUnits="objectBoundingBox">
                <path d={WAVE} />
              </clipPath>
            </defs>
          </svg>

          {/* stacked layers behind the photo for a hand-cut, layered look */}
          <div
            aria-hidden
            className="absolute inset-0 bg-peach/70"
            style={{ clipPath: "url(#heroWave)", transform: "translate(13px, 15px)" }}
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-cream-deep"
            style={{ clipPath: "url(#heroWave)", transform: "translate(6px, 7px)" }}
          />

          {/* photo with a white wavy matte + soft shadow that follows the shape */}
          <div className="relative [filter:drop-shadow(0_16px_24px_rgba(124,88,71,0.24))]">
            <div className="bg-white p-2.5" style={{ clipPath: "url(#heroWave)" }}>
              <div style={{ clipPath: "url(#heroWave)" }}>
                <Image
                  src="/hero4.jpg"
                  alt="Two moms and their toddlers enjoying a Play and Pause creative playdate in Jaipur"
                  width={1040}
                  height={690}
                  priority
                  sizes="(max-width: 1024px) 90vw, 520px"
                  className="block h-full w-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* media decorations */}
          <Float className="absolute -left-4 -top-5" duration={7} delay={0.3} distance={10} rotate={4}>
            <Rainbow className="h-9 w-16 opacity-90" />
          </Float>
          <Float className={`absolute -top-4 left-1/3 ${SOFT_PINK}`} duration={5.5} distance={8}>
            <Heart className="h-5 w-5" />
          </Float>
          <Float className="absolute -bottom-5 -left-7" duration={7} delay={0.2} distance={8} rotate={-4}>
            <Image src="/leaf.png" alt="" aria-hidden width={150} height={234} className="h-20 w-auto" />
          </Float>
          <Float className="absolute top-[36%] -right-6 hidden lg:block" duration={6.5} delay={0.5} distance={7} rotate={3}>
            <Image src="/leaf.png" alt="" aria-hidden width={150} height={234} className="h-16 w-auto" />
          </Float>
          <Twinkle className={`absolute -left-5 top-1/3 ${GOLD}`} delay={0.6}>
            <Star className="h-5 w-5" />
          </Twinkle>
          <Twinkle className={`absolute -right-3 bottom-1/4 ${GOLD}`} delay={1}>
            <Star className="h-4 w-4" />
          </Twinkle>
        </motion.div>
      </div>
    </section>
  );
}
