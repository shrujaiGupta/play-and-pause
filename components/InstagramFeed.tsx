"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import InstagramIcon from "@/components/ui/InstagramIcon";
import Placeholder from "@/components/ui/Placeholder";
import { INSTAGRAM } from "@/lib/content";
import { INSTAGRAM_HANDLE, INSTAGRAM_URL } from "@/lib/site";

export default function InstagramFeed() {
  return (
    <section id="instagram" className="section-pad bg-cream">
      <div className="site-container">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            align="left"
            eyebrow="From our Instagram"
            title="Follow the little moments"
          />
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-coral inline-flex w-fit items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5"
          >
            <InstagramIcon className="h-4 w-4" />
            Follow {INSTAGRAM_HANDLE}
          </a>
        </div>

        <div className="mt-10 grid grid-cols-3 gap-3 sm:gap-4 md:grid-cols-6">
          {INSTAGRAM.map((post, i) => (
            <motion.a
              key={i}
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: (i % 6) * 0.05 }}
              aria-label={`View our Instagram post ${i + 1}`}
              className="group relative aspect-square overflow-hidden rounded-[var(--radius-soft)] shadow-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral/60"
            >
              <Placeholder
                tone={post.tone}
                scene={post.scene}
                rounded="rounded-none"
                className="h-full w-full transition-transform duration-500 group-hover:scale-110"
              />
              <span className="absolute inset-0 flex items-center justify-center bg-brand-brown/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <InstagramIcon className="h-6 w-6 text-white" />
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
