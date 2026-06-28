import type { Scene, Tone } from "@/components/ui/Placeholder";

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#founder" },
  { label: "Sessions", href: "#sessions" },
  { label: "Gallery", href: "#gallery" },
  { label: "Happy Families", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
] as const;

export const SESSION = {
  badge: "What's happening this month",
  title: "Little Hands, Happy Smiles",
  theme: "A Dental Themed Creative Experience",
  date: "Sunday, 5 July 2026",
  time: "4:00 – 6:00 PM",
  venue: "Malviya Nagar, Jaipur",
  ageRange: "2 – 6 Years",
  price: "₹499",
  priceNote: "per child",
  spots: "Only a few spots left",
  countdownTarget: "2026-07-05T16:00:00+05:30",
  whatsappMessage:
    "Hi!\nI'd love to register for the upcoming Play & Pause session — Little Hands, Happy Smiles.",
} as const;

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  tone: Tone;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "The most thoughtfully planned playdate we've ever attended. My daughter absolutely loved every minute of it.",
    name: "Neha Sharma",
    role: "Mom of Aanya, 4",
    tone: "coral",
  },
  {
    quote:
      "Finally a place where my son learns and plays, and I get to relax and actually connect with other moms.",
    name: "Priyanka Mehta",
    role: "Mom of Vivaan, 3",
    tone: "lavender",
  },
  {
    quote:
      "Every little detail is so well planned. The team truly puts their heart into every single session.",
    name: "Aarti Singh",
    role: "Mom of Myra, 5",
    tone: "mint",
  },
  {
    quote:
      "The activities are so creative and the vibe is just beautiful. We genuinely can't wait for the next one!",
    name: "Ritu Agarwal",
    role: "Mom of Kabir, 2",
    tone: "sky",
  },
  {
    quote:
      "Calm, warm and screen-free — exactly the kind of childhood moments I want for my little one.",
    name: "Sneha Kapoor",
    role: "Mom of Ira, 4",
    tone: "pink",
  },
];

export type GalleryItem = {
  tone: Tone;
  scene: Scene;
  label: string;
  span: string;
};

export const GALLERY: GalleryItem[] = [
  { tone: "peach", scene: "blocks", label: "Free Play", span: "row-span-2" },
  { tone: "mint", scene: "paint", label: "Creative Corner", span: "" },
  { tone: "lavender", scene: "momchild", label: "Together Time", span: "" },
  { tone: "pink", scene: "hands", label: "Messy & Happy", span: "row-span-2" },
  { tone: "sky", scene: "child", label: "Little Explorers", span: "" },
  { tone: "sun", scene: "paint", label: "Tiny Artists", span: "" },
  { tone: "coral", scene: "momchild", label: "Bonding", span: "" },
  { tone: "lavender", scene: "blocks", label: "Build & Learn", span: "" },
];

export const TIMELINE = [
  {
    title: "Welcome",
    text: "A warm, calm welcome with a little name tag and a gentle settling-in moment.",
    tone: "peach" as Tone,
  },
  {
    title: "Free Play",
    text: "Open-ended play that lets curiosity lead and little hands explore freely.",
    tone: "sky" as Tone,
  },
  {
    title: "Creative Activity",
    text: "A hands-on, beautifully prepped activity made for tiny fingers.",
    tone: "mint" as Tone,
  },
  {
    title: "Learning Theme",
    text: "A gentle theme of the month woven into stories, textures and play.",
    tone: "lavender" as Tone,
  },
  {
    title: "Mom-Child Bonding",
    text: "A slow, screen-free moment to create something together.",
    tone: "pink" as Tone,
  },
  {
    title: "Photos & Goodies",
    text: "Keepsake photos and a little take-home goodie to remember the day.",
    tone: "coral" as Tone,
  },
];

export const INSTAGRAM: { tone: Tone; scene: Scene }[] = [
  { tone: "peach", scene: "momchild" },
  { tone: "mint", scene: "paint" },
  { tone: "lavender", scene: "blocks" },
  { tone: "sky", scene: "child" },
  { tone: "pink", scene: "hands" },
  { tone: "sun", scene: "momchild" },
];
