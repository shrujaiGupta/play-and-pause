import { WHATSAPP_NUMBER } from "@/lib/site";

const DEFAULT_MESSAGE =
  "Hi!\nI'd love to register for the upcoming Play & Pause session.";

export function whatsappLink(message: string = DEFAULT_MESSAGE) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const BOOKING_LINK = whatsappLink();
