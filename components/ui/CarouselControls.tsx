"use client";

import { useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const GAP = 20; // matches the rail's gap-5 (1.25rem)

/**
 * Shared horizontal-carousel behaviour: a ref for the scroll rail, a manual
 * page(dir) scroller, and a gentle auto-advance that loops but stays out of the
 * visitor's way. It:
 *   - only advances while the rail is actually on-screen,
 *   - stops for the rest of the visit the moment the visitor takes control
 *     (swipe, drag, wheel/trackpad, arrow tap, keyboard focus), so it never
 *     yanks the view mid-read,
 *   - is disabled entirely under prefers-reduced-motion.
 * We key "took control" off user-initiated events (pointer/touch/wheel/focus),
 * NOT scroll — our own smooth-scroll fires scroll events and would otherwise
 * stop autoplay instantly.
 */
export function useCarousel(intervalMs = 6000) {
  const railRef = useRef<HTMLDivElement>(null);
  const stoppedRef = useRef(false);

  const scrollByPage = (dir: 1 | -1) => {
    const rail = railRef.current;
    if (!rail) return;
    stoppedRef.current = true; // arrow taps count as taking control
    rail.scrollBy({ left: dir * rail.clientWidth, behavior: "smooth" });
  };

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let visible = false;

    // Any genuine user interaction stops autoplay for the rest of the visit.
    const stop = () => {
      stoppedRef.current = true;
    };
    rail.addEventListener("pointerdown", stop);
    rail.addEventListener("touchstart", stop, { passive: true });
    rail.addEventListener("wheel", stop, { passive: true });
    rail.addEventListener("keydown", stop);
    rail.addEventListener("focusin", stop);

    const io = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
      },
      { threshold: 0.35 },
    );
    io.observe(rail);

    const id = window.setInterval(() => {
      if (stoppedRef.current || !visible) return;
      const el = railRef.current;
      if (!el) return;
      const first = el.children[0] as HTMLElement | undefined;
      const step = first ? first.offsetWidth + GAP : el.clientWidth;
      const maxScroll = el.scrollWidth - el.clientWidth;
      if (el.scrollLeft >= maxScroll - 4) {
        el.scrollTo({ left: 0, behavior: "smooth" }); // loop back to the start
      } else {
        el.scrollBy({ left: step, behavior: "smooth" });
      }
    }, intervalMs);

    return () => {
      window.clearInterval(id);
      io.disconnect();
      rail.removeEventListener("pointerdown", stop);
      rail.removeEventListener("touchstart", stop);
      rail.removeEventListener("wheel", stop);
      rail.removeEventListener("keydown", stop);
      rail.removeEventListener("focusin", stop);
    };
  }, [intervalMs]);

  return { railRef, scrollByPage };
}

const PREV_CLASS =
  "flex h-11 w-11 items-center justify-center rounded-full border-2 border-coral/40 bg-card text-coral-deep transition-all duration-300 hover:-translate-y-0.5 hover:border-coral hover:bg-coral/10 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral/50";

const NEXT_CLASS =
  "btn-coral flex h-11 w-11 items-center justify-center rounded-full text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_30px_-10px_rgba(238,108,84,0.75)] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral/60 focus-visible:ring-offset-2 focus-visible:ring-offset-cream";

/** Prev / Next arrows with a clear filled "next" affordance. */
export function CarouselNav({
  onPrev,
  onNext,
  label,
}: {
  onPrev: () => void;
  onNext: () => void;
  label: string;
}) {
  return (
    <div className="flex gap-2.5">
      <button type="button" onClick={onPrev} aria-label={`Previous ${label}`} className={PREV_CLASS}>
        <ChevronLeft size={20} />
      </button>
      <button type="button" onClick={onNext} aria-label={`Next ${label}`} className={NEXT_CLASS}>
        <ChevronRight size={20} />
      </button>
    </div>
  );
}
