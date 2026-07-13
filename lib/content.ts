import type { Scene, Tone } from "@/components/ui/Placeholder";

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Sessions", href: "#sessions" },
  { label: "Gallery", href: "#gallery" },
  { label: "Happy Families", href: "#testimonials" },
  { label: "About", href: "#founder" },
  { label: "Contact", href: "#contact" },
] as const;

export const SESSION = {
  badge: "What's happening this month",
  title: "Little Hands, Happy Smiles",
  theme: "A Dental Themed Creative Experience",
  date: "Sunday, 5 July 2026",
  time: "4:00 to 6:00 PM",
  venue: "Malviya Nagar, Jaipur",
  ageRange: "1.5 Years & Up",
  price: "₹499",
  priceNote: "per child",
  spots: "Only a few spots left",
  countdownTarget: "2026-07-05T16:00:00+05:30",
  whatsappMessage:
    "Hi!\nI'd love to register for the upcoming Play & Pause session, Little Hands, Happy Smiles.",
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
      "We had such a wonderful time at Play & Pause! The space is so welcoming, clean and beautifully designed. My daughter loved the open play area, the lovely toys and the drawing session. Somya has created a truly special place for little ones, and we will definitely be back!",
    name: "Richa Juneja",
    role: "Mom of a 2-year-old",
    tone: "coral",
  },
  {
    quote:
      "Thank you so much for curating such wonderful baby-friendly activities. My little one loved the pom poms and the action-packed rhyme time. My favourite part was connecting with the other mammas and watching the tiny humans unfold their little personalities. Looking forward to the next session! ❤️",
    name: "Gayatri",
    role: "Mom of a 2-year-old",
    tone: "mint",
  },
  {
    quote:
      "It was a wonderful experience for both me and my child. The activities were so thoughtfully planned, engaging and age-appropriate. My daughter loved exploring at her own pace and was especially happy during the sensory play. It was lovely to see her so engaged, curious and excited.",
    name: "Vamika Alwani",
    role: "Mom of an 18-month-old",
    tone: "lavender",
  },
  {
    quote:
      "My son enjoyed it so much! He loved the mom-and-son sticker activity the most. It was such an enjoyable evening away from our routine, and he got to socialise with other kids just before starting pre-school.",
    name: "Pooja",
    role: "Mom of a 2-year-old",
    tone: "sky",
  },
  {
    quote:
      "Thank you for such a lovely session! My daughter had so much fun and even danced happily. She learned a new word, ‘crown’, which made me so happy. I also really appreciated the helpful guidance on oral health. We are looking forward to more sessions! 💛",
    name: "Vamika Alwani",
    role: "Mom of an 18-month-old",
    tone: "pink",
  },
  {
    quote:
      "The session was truly fantastic! My son enjoyed it so much that he stayed happy the entire day after returning home. Overall, it was a wonderful experience. Thank you for organising such an engaging and enjoyable session. 😊",
    name: "Veena",
    role: "Mom of a 3-year-old",
    tone: "coral",
  },
  {
    quote:
      "It was a great experience! It was so helpful to get all our doubts cleared, with lovely guidance on mom-and-tot oral hygiene by Dr. Harshita. All the activities around the theme were impactful, and thank you to all the mothers and kids for such a cheerful Sunday! 🌈",
    name: "Priyanka",
    role: "Mom of a 2-year-old",
    tone: "sky",
  },
];

export type GalleryItem = {
  src: string;
  alt: string;
};

export const GALLERY: GalleryItem[] = [
  { src: "/gallery/g1.jpg", alt: "A mom and her toddler decorating a Play & Pause Heart of Love activity card with colourful pom-poms" },
  { src: "/gallery/g2.jpg", alt: "Two moms and their little ones enjoying a hands-on Play & Pause playdate together" },
  { src: "/gallery/g3.jpg", alt: "A smiling girl proudly holding up her completed Play & Pause oral-hygiene activity sheet" },
  { src: "/gallery/g4.jpg", alt: "Two boys colouring their Play & Pause oral-hygiene sheets with sticker dots" },
  { src: "/gallery/g5.jpg", alt: "A mom and her son placing stickers on a Play & Pause activity sheet" },
  { src: "/gallery/g6.jpg", alt: "A little one colouring an activity sheet while his mom looks on at a Play & Pause session" },
  { src: "/gallery/g7.jpg", alt: "A proud little boy showing off his coloured Play & Pause activity sheet" },
  { src: "/gallery/g8.jpg", alt: "Moms and toddlers gathered for a group photo in front of a mural at a Play & Pause playdate in Jaipur" },
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
