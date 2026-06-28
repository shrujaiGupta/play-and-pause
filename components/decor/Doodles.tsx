import type { SVGProps } from "react";

type DoodleProps = SVGProps<SVGSVGElement> & { title?: string };

function base(props: DoodleProps) {
  const { title, ...rest } = props;
  return { title, rest };
}

export function Cloud(props: DoodleProps) {
  const { title, rest } = base(props);
  return (
    <svg viewBox="0 0 120 64" fill="none" aria-hidden={title ? undefined : true} {...rest}>
      {title ? <title>{title}</title> : null}
      <path
        d="M28 54c-12 0-21-7.6-21-18 0-9.6 8-17 18.2-16.4C29.2 10.6 38 4 49 4c12.4 0 22 8.6 23.4 20.2C84 23 96 31 96 43c0 6.6-4.6 11-12 11H28Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function Star(props: DoodleProps) {
  const { title, rest } = base(props);
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden={title ? undefined : true} {...rest}>
      {title ? <title>{title}</title> : null}
      <path
        d="M16 1.5c.7 5.9 2.4 9.8 5.4 12.1 2.4 1.8 5.4 2.8 9.1 3.4-3.7.6-6.7 1.6-9.1 3.4-3 2.3-4.7 6.2-5.4 12.1-.7-5.9-2.4-9.8-5.4-12.1C8.2 18.6 5.2 17.6 1.5 17c3.7-.6 6.7-1.6 9.1-3.4C13.6 11.3 15.3 7.4 16 1.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function Heart(props: DoodleProps) {
  const { title, rest } = base(props);
  return (
    <svg viewBox="0 0 32 30" fill="none" aria-hidden={title ? undefined : true} {...rest}>
      {title ? <title>{title}</title> : null}
      <path
        d="M16 28.5 4.1 16.9C-1 11.9.6 4.3 7 2.7c3.4-.9 6.8.4 9 3.1 2.2-2.7 5.6-4 9-3.1 6.4 1.6 8 9.2 2.9 14.2L16 28.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function Rainbow(props: DoodleProps) {
  const { title, rest } = base(props);
  return (
    <svg viewBox="0 0 120 64" fill="none" aria-hidden={title ? undefined : true} {...rest}>
      {title ? <title>{title}</title> : null}
      <path d="M8 60a52 52 0 0 1 104 0" stroke="#f4a08c" strokeWidth="8" strokeLinecap="round" />
      <path d="M20 60a40 40 0 0 1 80 0" stroke="#ffd98a" strokeWidth="8" strokeLinecap="round" />
      <path d="M32 60a28 28 0 0 1 56 0" stroke="#b6e3c8" strokeWidth="8" strokeLinecap="round" />
      <path d="M44 60a16 16 0 0 1 32 0" stroke="#bcd9f3" strokeWidth="8" strokeLinecap="round" />
    </svg>
  );
}

export function Teddy(props: DoodleProps) {
  const { title, rest } = base(props);
  return (
    <svg viewBox="0 0 96 96" fill="none" aria-hidden={title ? undefined : true} {...rest}>
      {title ? <title>{title}</title> : null}
      <circle cx="24" cy="22" r="12" fill="#caa07e" />
      <circle cx="72" cy="22" r="12" fill="#caa07e" />
      <circle cx="24" cy="22" r="6" fill="#e7c4a3" />
      <circle cx="72" cy="22" r="6" fill="#e7c4a3" />
      <circle cx="48" cy="52" r="34" fill="#d8ad88" />
      <ellipse cx="48" cy="62" rx="18" ry="15" fill="#f0d6bb" />
      <circle cx="37" cy="46" r="4.4" fill="#5b4636" />
      <circle cx="59" cy="46" r="4.4" fill="#5b4636" />
      <circle cx="38.5" cy="44.5" r="1.3" fill="#fff" />
      <circle cx="60.5" cy="44.5" r="1.3" fill="#fff" />
      <ellipse cx="48" cy="57" rx="5" ry="4" fill="#7c5847" />
      <path d="M48 61c0 4-3.4 6-7 6M48 61c0 4 3.4 6 7 6" stroke="#7c5847" strokeWidth="2.4" strokeLinecap="round" />
      <circle cx="30" cy="60" r="4.5" fill="#f4a594" opacity="0.7" />
      <circle cx="66" cy="60" r="4.5" fill="#f4a594" opacity="0.7" />
    </svg>
  );
}

export function Palette(props: DoodleProps) {
  const { title, rest } = base(props);
  return (
    <svg viewBox="0 0 80 80" fill="none" aria-hidden={title ? undefined : true} {...rest}>
      {title ? <title>{title}</title> : null}
      <path
        d="M40 8C21 8 6 21 6 38c0 13 10 21 21 21 5 0 7-3 7-7 0-3-2-4-2-8 0-4 3-7 8-7h10c10 0 18-7 18-18C68 18 56 8 40 8Z"
        fill="#fff"
        stroke="#e7b9a6"
        strokeWidth="3"
      />
      <circle cx="24" cy="30" r="4.6" fill="#f4836b" />
      <circle cx="38" cy="22" r="4.6" fill="#ffd98a" />
      <circle cx="52" cy="26" r="4.6" fill="#b6e3c8" />
      <circle cx="22" cy="44" r="4.6" fill="#bcd9f3" />
      <circle cx="56" cy="40" r="4.6" fill="#dccef5" />
    </svg>
  );
}

export function Tooth(props: DoodleProps) {
  const { title, rest } = base(props);
  return (
    <svg viewBox="0 0 64 72" fill="none" aria-hidden={title ? undefined : true} {...rest}>
      {title ? <title>{title}</title> : null}
      <path
        d="M32 8C22 1 6 3 4 18c-1.4 10 3 19 6 30 2 7.4 4 12 8 12 3.6 0 4.6-4.6 6.4-10 1-3 2.4-5 7.6-5s6.6 2 7.6 5c1.8 5.4 2.8 10 6.4 10 4 0 6-4.6 8-12 3-11 7.4-20 6-30C58 3 42 1 32 8Z"
        fill="#fff"
        stroke="#d9c3b6"
        strokeWidth="3"
      />
      <circle cx="24" cy="30" r="3.4" fill="#5b4636" />
      <circle cx="40" cy="30" r="3.4" fill="#5b4636" />
      <path d="M26 40c2 2.6 10 2.6 12 0" stroke="#5b4636" strokeWidth="2.6" strokeLinecap="round" />
      <circle cx="18" cy="38" r="3.6" fill="#f7b3a3" opacity="0.7" />
      <circle cx="46" cy="38" r="3.6" fill="#f7b3a3" opacity="0.7" />
    </svg>
  );
}

export function Toothbrush(props: DoodleProps) {
  const { title, rest } = base(props);
  return (
    <svg viewBox="0 0 96 40" fill="none" aria-hidden={title ? undefined : true} {...rest}>
      {title ? <title>{title}</title> : null}
      <rect x="8" y="18" width="62" height="9" rx="4.5" fill="#bcd9f3" transform="rotate(-8 8 18)" />
      <rect x="66" y="9" width="22" height="14" rx="5" fill="#9cc6ea" transform="rotate(-8 66 9)" />
      <g stroke="#b6e3c8" strokeWidth="3" strokeLinecap="round">
        <path d="M70 8v-6M76 7v-6M82 6v-6" />
      </g>
    </svg>
  );
}

export function Flower(props: DoodleProps) {
  const { title, rest } = base(props);
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden={title ? undefined : true} {...rest}>
      {title ? <title>{title}</title> : null}
      <g fill="currentColor">
        <ellipse cx="24" cy="10" rx="6" ry="9" />
        <ellipse cx="24" cy="38" rx="6" ry="9" />
        <ellipse cx="10" cy="24" rx="9" ry="6" />
        <ellipse cx="38" cy="24" rx="9" ry="6" />
      </g>
      <circle cx="24" cy="24" r="6.5" fill="#ffd98a" />
    </svg>
  );
}

export function Sparkle(props: DoodleProps) {
  return <Star {...props} />;
}
