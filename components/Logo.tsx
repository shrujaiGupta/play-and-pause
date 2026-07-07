import Image from "next/image";
import { cn } from "@/lib/utils";

export default function Logo({ className }: { className?: string }) {
  return (
    <Image
      src="/logo.png"
      alt="Play & Pause"
      width={512}
      height={512}
      priority
      sizes="64px"
      className={cn("h-14 w-14 select-none object-contain", className)}
    />
  );
}
