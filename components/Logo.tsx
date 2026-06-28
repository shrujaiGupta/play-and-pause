import { cn } from "@/lib/utils";

export default function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <span className="relative inline-flex h-9 w-9 shrink-0 items-center justify-center">
        <svg viewBox="0 0 44 30" className="h-7 w-9" fill="none" aria-hidden>
          <path d="M5 27a17 17 0 0 1 34 0" stroke="#f4a08c" strokeWidth="3.4" strokeLinecap="round" />
          <path d="M11 27a11 11 0 0 1 22 0" stroke="#ffd98a" strokeWidth="3.4" strokeLinecap="round" />
          <path d="M16.5 27a5.5 5.5 0 0 1 11 0" stroke="#b6e3c8" strokeWidth="3.4" strokeLinecap="round" />
          <circle cx="7" cy="11" r="2.4" fill="#cfe6f6" />
          <circle cx="37" cy="11" r="2.4" fill="#dccef5" />
        </svg>
      </span>
      <span className="font-display text-[22px] font-semibold leading-none text-brand-brown">
        Play <span className="text-coral">&amp;</span> Pause
      </span>
    </span>
  );
}
