"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { useCarousel, CarouselNav } from "@/components/ui/CarouselControls";
import { GALLERY } from "@/lib/content";

export default function Gallery() {
  const { railRef, scrollByPage } = useCarousel(5000);

  return (
    <section id="gallery" className="section-pad bg-cream-deep">
      <div className="site-container">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            align="left"
            eyebrow="Moments we've loved"
            title={
              <>
                A little look at the <span className="text-coral">magic</span>
              </>
            }
            description="Real laughter, messy hands and proud little faces, the moments that make every session worth it."
          />
          <CarouselNav
            onPrev={() => scrollByPage(-1)}
            onNext={() => scrollByPage(1)}
            label="photos"
          />
        </div>

        <div
          ref={railRef}
          className="no-scrollbar mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4"
        >
          {GALLERY.map((item, i) => (
            <motion.figure
              key={item.src}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="group relative aspect-[4/5] shrink-0 basis-[78%] snap-start overflow-hidden rounded-[var(--radius-card)] shadow-soft sm:basis-[calc((100%_-_20px)/2)] lg:basis-[calc((100%_-_40px)/3)]"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 78vw, (max-width: 1024px) 45vw, 30vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
