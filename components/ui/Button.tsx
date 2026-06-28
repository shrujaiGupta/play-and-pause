import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "coral" | "outline" | "ghost";
type Size = "md" | "lg";

const VARIANTS: Record<Variant, string> = {
  coral:
    "btn-coral hover:shadow-[0_18px_34px_-12px_rgba(238,108,84,0.7)] hover:-translate-y-0.5",
  outline:
    "bg-card text-brand-brown border border-border-strong hover:border-coral/60 hover:-translate-y-0.5 shadow-soft",
  ghost: "bg-transparent text-brand-brown hover:text-coral-deep",
};

const SIZES: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-[15px]",
};

const baseClass =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral/60 focus-visible:ring-offset-2 focus-visible:ring-offset-cream";

type CommonProps = {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  className?: string;
};

type ButtonAsLink = CommonProps &
  Omit<ComponentProps<typeof Link>, "className"> & { href: string };

type ButtonAsButton = CommonProps &
  Omit<ComponentProps<"button">, "className"> & { href?: undefined };

export default function Button(props: ButtonAsLink | ButtonAsButton) {
  const { variant = "coral", size = "md", className, children, ...rest } = props;
  const classes = cn(baseClass, VARIANTS[variant], SIZES[size], className);

  if ("href" in props && props.href !== undefined) {
    return (
      <Link className={classes} {...(rest as ComponentProps<typeof Link>)}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(rest as ComponentProps<"button">)}>
      {children}
    </button>
  );
}
