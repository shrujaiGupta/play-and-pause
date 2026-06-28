import { cn } from "@/lib/utils";

export type Tone =
  | "coral"
  | "peach"
  | "mint"
  | "lavender"
  | "sky"
  | "pink"
  | "sun";

export type Scene =
  | "momchild"
  | "child"
  | "portrait"
  | "blocks"
  | "hands"
  | "paint"
  | "none";

const TONES: Record<Tone, [string, string]> = {
  coral: ["#ffe7da", "#ffc3ac"],
  peach: ["#fff0e2", "#ffd3b4"],
  mint: ["#e1f4ea", "#bce6cf"],
  lavender: ["#efe8fc", "#d6c6f3"],
  sky: ["#e3f1fb", "#c2e2f6"],
  pink: ["#ffe9ee", "#ffc9d6"],
  sun: ["#fff4dc", "#ffe0a3"],
};

function SceneArt({ scene }: { scene: Scene }) {
  const stroke = "rgba(124, 88, 71, 0.34)";
  const soft = "rgba(255,255,255,0.6)";
  if (scene === "none") return null;

  if (scene === "portrait") {
    return (
      <g fill="none" stroke={stroke} strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="100" cy="74" r="26" fill={soft} />
        <path d="M58 140c2-26 20-40 42-40s40 14 42 40" fill={soft} />
      </g>
    );
  }
  if (scene === "child") {
    return (
      <g fill="none" stroke={stroke} strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="100" cy="70" r="22" fill={soft} />
        <path d="M70 140c2-22 14-34 30-34s28 12 30 34" fill={soft} />
        <path d="M84 120l-14 18M116 120l14 18" />
      </g>
    );
  }
  if (scene === "momchild") {
    return (
      <g fill="none" stroke={stroke} strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="76" cy="62" r="22" fill={soft} />
        <path d="M46 142c2-26 14-40 30-40s28 14 30 40" fill={soft} />
        <circle cx="130" cy="86" r="15" fill={soft} />
        <path d="M110 144c1-18 9-28 20-28s19 10 20 28" fill={soft} />
      </g>
    );
  }
  if (scene === "hands") {
    return (
      <g fill="none" stroke={stroke} strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M64 150v-34c0-6 9-6 9 0v8m0-12c0-6 9-6 9 0v12m0-16c0-6 9-6 9 0v16m0-12c0-6 9-6 9 0v18c0 16-10 26-22 26s-21-9-21-22" fill={soft} />
        <path d="M120 60l4 16 16 4-16 4-4 16-4-16-16-4 16-4z" fill={soft} />
      </g>
    );
  }
  if (scene === "paint") {
    return (
      <g stroke={stroke} strokeWidth="3" fill={soft}>
        <circle cx="74" cy="78" r="16" />
        <circle cx="118" cy="68" r="12" />
        <circle cx="132" cy="108" r="15" />
        <circle cx="84" cy="120" r="13" />
        <circle cx="108" cy="100" r="9" />
      </g>
    );
  }
  // blocks
  return (
    <g stroke={stroke} strokeWidth="3" fill={soft}>
      <rect x="62" y="96" width="34" height="34" rx="6" />
      <rect x="104" y="96" width="34" height="34" rx="6" />
      <rect x="83" y="60" width="34" height="34" rx="6" />
    </g>
  );
}

export default function Placeholder({
  tone = "peach",
  scene = "none",
  label,
  className,
  rounded = "rounded-[var(--radius-card)]",
}: {
  tone?: Tone;
  scene?: Scene;
  label?: string;
  className?: string;
  rounded?: string;
}) {
  const [from, to] = TONES[tone];
  return (
    <div
      className={cn("relative overflow-hidden", rounded, className)}
      style={{ backgroundImage: `linear-gradient(135deg, ${from}, ${to})` }}
    >
      <svg
        viewBox="0 0 200 200"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full"
        aria-hidden
      >
        <circle cx="40" cy="40" r="46" fill="rgba(255,255,255,0.35)" />
        <circle cx="172" cy="150" r="40" fill="rgba(255,255,255,0.28)" />
        <SceneArt scene={scene} />
      </svg>
      {label ? (
        <span className="absolute left-4 top-4 z-10 rounded-full bg-white/75 px-3 py-1 text-[11px] font-semibold tracking-wide text-brand-brown backdrop-blur">
          {label}
        </span>
      ) : null}
    </div>
  );
}
