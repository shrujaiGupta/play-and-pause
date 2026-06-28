"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV_LINKS } from "@/lib/content";
import { BOOKING_LINK } from "@/lib/whatsapp";
import Logo from "@/components/Logo";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";

function sectionId(href: string) {
  return href.replace("#", "");
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    NAV_LINKS.forEach(({ href }) => {
      const el = document.getElementById(sectionId(href));
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(sectionId(href));
        },
        { rootMargin: "-45% 0px -50% 0px" },
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={cn(
          "fixed inset-x-0 top-0 z-[90] transition-all duration-300",
          scrolled
            ? "bg-[var(--navbar-bg)] backdrop-blur-xl border-b border-border shadow-[0_10px_30px_-22px_rgba(124,88,71,0.5)]"
            : "bg-transparent",
        )}
      >
        <div className="site-container flex h-[var(--nav-h)] items-center justify-between gap-4">
          <a href="#home" aria-label="Play & Pause — home" className="shrink-0">
            <Logo />
          </a>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
            {NAV_LINKS.map(({ label, href }) => {
              const isActive = active === sectionId(href);
              return (
                <a
                  key={href}
                  href={href}
                  className={cn(
                    "rounded-full px-3.5 py-2 text-[13px] font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral/50",
                    isActive
                      ? "bg-coral/12 text-coral-deep"
                      : "text-charcoal-soft hover:text-brand-brown hover:bg-white/60",
                  )}
                >
                  {label}
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={BOOKING_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-coral hidden items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_34px_-12px_rgba(238,108,84,0.7)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral/60 sm:inline-flex"
            >
              Book a Session
              <WhatsAppIcon className="h-4 w-4" />
            </a>
            <button
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              className="flex h-10 w-10 items-center justify-center rounded-full text-brand-brown transition-colors hover:bg-white/70 lg:hidden"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[95] bg-brand-brown/30 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileOpen(false)}
              aria-hidden
            />
            <motion.div
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.32, ease: [0.32, 0.72, 0, 1] }}
              className="fixed inset-y-0 right-0 z-[96] flex w-72 flex-col bg-cream shadow-soft-lg lg:hidden"
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
            >
              <div className="flex h-[var(--nav-h)] items-center justify-between border-b border-border px-5">
                <Logo />
                <button
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                  className="flex h-9 w-9 items-center justify-center rounded-full text-brand-brown hover:bg-white/70"
                >
                  <X size={20} />
                </button>
              </div>
              <nav className="flex-1 space-y-1 px-4 py-5" aria-label="Mobile navigation">
                {NAV_LINKS.map(({ label, href }) => (
                  <a
                    key={href}
                    href={href}
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-2xl px-4 py-3 text-[15px] font-medium text-charcoal-soft transition-colors hover:bg-white/70 hover:text-brand-brown"
                  >
                    {label}
                  </a>
                ))}
              </nav>
              <div className="px-4 pb-7">
                <a
                  href={BOOKING_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className="btn-coral flex w-full items-center justify-center gap-2 rounded-full px-5 py-3.5 text-sm font-semibold"
                >
                  Book a Session
                  <WhatsAppIcon className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
