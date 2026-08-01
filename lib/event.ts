/**
 * Upcoming-event state for the "Sessions" section of the landing page.
 *
 * IS_EVENT_LIVE drives which UI renders:
 *   false → <UpcomingSessions />  the "we're planning the next one" / join-community card
 *   true  → <LiveSession />       the full event card with countdown, venue and booking CTA
 *
 * This will later be replaced by a backend call. Keep the shape of EventInfo as
 * the contract the API should return, so only the data source has to change.
 */
// Typed as `boolean` (not the literal `true`) so TypeScript keeps both branches
// of the switch alive — flipping this value never orphans the other UI.
export const IS_EVENT_LIVE: boolean = true;

export type EventInfo = {
  /** Small eyebrow line above the title. */
  badge: string;
  title: string;
  theme: string;
  image: string;
  imageAlt: string;
  /** Human-readable date, e.g. "Sunday, 16 August 2026". */
  date: string;
  /** Human-readable time window, e.g. "4:00 – 6:00 PM". */
  time: string;
  /** ISO timestamp with offset — drives the countdown and the calendar link. */
  startsAt: string;
  /** Used to derive the end time for the "add to calendar" link. */
  durationMins: number;
  /** Short venue name, e.g. "Malviya Nagar, Jaipur". */
  venue: string;
  /** Optional landmark / building line shown under the venue. */
  venueDetail: string;
  /** Google Maps link for the venue pin. */
  mapsUrl: string;
  ageRange: string;
  price: string;
  priceNote: string;
  /** Small "what's included" chips. */
  includes: string[];
  /** Prefilled WhatsApp booking message. */
  whatsappMessage: string;
};

export const UPCOMING_EVENT: EventInfo = {
  badge: "Registrations are open",
  title: "Little Hands, Happy Smiles",
  theme: "A Dental Themed Creative Experience",
  image: "/upcoming-session.jpg",
  imageAlt:
    "A little one at a Play & Pause session table with the branded sign, a wooden rainbow and craft activities",
  date: "Sunday, 16 August 2026",
  time: "4:00 – 6:00 PM",
  startsAt: "2026-08-16T16:00:00+05:30",
  durationMins: 120,
  venue: "Malviya Nagar, Jaipur",
  venueDetail: "Exact address shared on WhatsApp after booking",
  // Replace with the real venue pin when the location is finalised.
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Malviya+Nagar%2C+Jaipur",
  ageRange: "1.5 years & up",
  price: "₹499",
  priceNote: "per child",
  includes: ["All materials included", "Keepsake photos", "Take-home goodie"],
  whatsappMessage:
    "Hi!\nI'd love to book a spot for the upcoming Play & Pause session, Little Hands, Happy Smiles.",
};

/** Google Calendar's compact UTC stamp: 20260816T103000Z */
function calendarStamp(date: Date) {
  return date.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
}

export function googleCalendarLink(event: EventInfo) {
  const start = new Date(event.startsAt);
  const end = new Date(start.getTime() + event.durationMins * 60_000);
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: `Play & Pause — ${event.title}`,
    dates: `${calendarStamp(start)}/${calendarStamp(end)}`,
    details: `${event.theme}. ${event.date}, ${event.time}.`,
    location: event.venue,
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}
