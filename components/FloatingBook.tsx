"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import { BOOKING_LINK } from "@/lib/whatsapp";

export default function FloatingBook() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 640);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.a
          href={BOOKING_LINK}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Book a session on WhatsApp"
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          transition={{ type: "spring", stiffness: 300, damping: 22 }}
          className="btn-coral group fixed bottom-5 right-5 z-[110] flex items-center gap-2 rounded-full px-4 py-3.5 text-sm font-semibold shadow-soft-lg sm:bottom-7 sm:right-7"
        >
          <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-coral/40" />
          <WhatsAppIcon className="h-5 w-5" />
          <span className="hidden sm:inline">Book a Session</span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
