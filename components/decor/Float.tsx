"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type FloatProps = {
  children: ReactNode;
  className?: string;
  duration?: number;
  delay?: number;
  distance?: number;
  rotate?: number;
};

export function Float({
  children,
  className,
  duration = 6,
  delay = 0,
  distance = 12,
  rotate = 0,
}: FloatProps) {
  return (
    <motion.div
      aria-hidden
      className={className}
      animate={{ y: [0, -distance, 0], rotate: [0, rotate, 0] }}
      transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}

export function Twinkle({
  children,
  className,
  duration = 3.2,
  delay = 0,
}: Omit<FloatProps, "distance" | "rotate">) {
  return (
    <motion.div
      aria-hidden
      className={className}
      animate={{ opacity: [0.35, 1, 0.35], scale: [0.85, 1.05, 0.85] }}
      transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}
