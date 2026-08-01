"use client";

import { useEffect, useState } from "react";

type Remaining = { days: number; hours: number; mins: number; secs: number };

function getRemaining(target: number): Remaining {
  const diff = Math.max(0, target - Date.now());
  return {
    days: Math.floor(diff / 86_400_000),
    hours: Math.floor((diff % 86_400_000) / 3_600_000),
    mins: Math.floor((diff % 3_600_000) / 60_000),
    secs: Math.floor((diff % 60_000) / 1_000),
  };
}

const UNITS: { key: keyof Remaining; label: string }[] = [
  { key: "days", label: "Days" },
  { key: "hours", label: "Hours" },
  { key: "mins", label: "Mins" },
  { key: "secs", label: "Secs" },
];

function pad(n: number) {
  return n.toString().padStart(2, "0");
}

type CountdownProps = {
  target: string;
  /** "sm" is the compact inline timer; "lg" is the full-width hero timer. */
  size?: "sm" | "lg";
  /** Shown instead of zeroed digits once the target has passed. */
  expiredLabel?: string;
};

export default function Countdown({ target, size = "sm", expiredLabel }: CountdownProps) {
  const targetMs = new Date(target).getTime();
  const [time, setTime] = useState<Remaining | null>(null);

  useEffect(() => {
    const tick = () => setTime(getRemaining(targetMs));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [targetMs]);

  const expired =
    time !== null && time.days === 0 && time.hours === 0 && time.mins === 0 && time.secs === 0;

  if (expired && expiredLabel) {
    return (
      <p className="rounded-2xl bg-white px-4 py-3 text-center font-display text-lg font-bold text-coral-deep shadow-[0_8px_20px_-12px_rgba(124,88,71,0.4)]">
        {expiredLabel}
      </p>
    );
  }

  if (size === "lg") {
    return (
      <div
        className="grid w-full grid-cols-4 gap-2 sm:gap-2.5"
        role="timer"
        aria-label="Time until the next session"
      >
        {UNITS.map(({ key, label }) => (
          <div
            key={key}
            className="rounded-2xl bg-white px-1 py-3 text-center shadow-[0_10px_24px_-14px_rgba(124,88,71,0.5)]"
          >
            <span className="block font-display text-[26px] font-bold leading-none text-brand-brown tabular-nums sm:text-[32px]">
              {time ? pad(time[key]) : "--"}
            </span>
            <span className="mt-1.5 block text-[9.5px] font-semibold uppercase tracking-wide text-charcoal-muted sm:text-[10px]">
              {label}
            </span>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="flex items-stretch gap-2.5" role="timer" aria-label="Time until the next session">
      {UNITS.map(({ key, label }, i) => (
        <div key={key} className="flex items-center gap-2.5">
          <div className="min-w-[52px] rounded-2xl bg-white px-2 py-2.5 text-center shadow-[0_8px_20px_-12px_rgba(124,88,71,0.4)]">
            <span className="block font-display text-2xl font-bold leading-none text-brand-brown tabular-nums">
              {time ? pad(time[key]) : "--"}
            </span>
            <span className="mt-1 block text-[10px] font-semibold uppercase tracking-wide text-charcoal-muted">
              {label}
            </span>
          </div>
          {i < UNITS.length - 1 && (
            <span className="text-lg font-bold text-coral/50" aria-hidden>
              :
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
