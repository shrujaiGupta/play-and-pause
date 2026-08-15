/**
 * Upcoming-event state for the "Sessions" section of the landing page.
 *
 * The event used to be hardcoded here; it now comes from playandpause-backend,
 * edited through the admin dashboard. The rule the API applies: return the one
 * event flagged live, or null if none is. So:
 *
 *   event === null  → <UpcomingSessions />  the "we're planning the next one" card
 *   event !== null  → <LiveSession />       the full card with countdown and booking CTA
 *
 * Nothing is cached anywhere: the browser asks /api/event on every page load,
 * that route asks the API, the API asks the database. An edit in the admin is
 * live on the next refresh, and every hop is visible in DevTools.
 */

/**
 * Server-only — read by app/api/event/route.ts. It is not a NEXT_PUBLIC_
 * variable, so the browser never sees where the backend lives; it only ever
 * calls this app's own /api/event.
 */
export const API_BASE_URL = (
  process.env.API_BASE_URL || "http://127.0.0.1:8080"
).replace(/\/$/, "");

/** The contract: exactly what GET /getEventData returns for a live event. */
export type EventInfo = {
  id: string;
  /** Small eyebrow line above the title. */
  badge: string;
  title: string;
  theme: string;
  /** Vercel Blob URL, or "" when no photo was uploaded. */
  imageUrl: string;
  imageAlt: string;
  /** ISO timestamp — drives the countdown and the calendar link. */
  startsAt: string;
  durationMins: number;
  /** Pre-rendered by the API in the event's timezone: "Sunday, 16 August 2026". */
  dateLabel: string;
  /** Likewise: "4:00 – 6:00 PM". */
  timeLabel: string;
  /** Short venue name, e.g. "Malviya Nagar, Jaipur". */
  venue: string;
  /** Landmark / address line shown under the tiles. */
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

/** Shown when no photo has been uploaded for the session. */
export const FALLBACK_EVENT_IMAGE = "/upcoming-session.jpg";

/**
 * Called from the browser. Throws on any failure, with the message the route
 * handler produced — <SessionsSection /> logs it and shows the "coming soon"
 * card, so visitors get something sane while the reason stays readable in the
 * console and in the Network tab.
 *
 * Distinguishing the two null-ish outcomes is the whole point: a resolved null
 * means the API answered and no event is flagged live; a throw means the API
 * could not be reached or disagreed with us.
 */
export async function fetchLiveEvent(): Promise<EventInfo | null> {
  const response = await fetch("/api/event", {
    headers: { accept: "application/json" },
    cache: "no-store",
  });

  if (!response.ok) {
    const message = await response
      .json()
      .then((body: { message?: string }) => body.message)
      .catch(() => null);

    throw new Error(
      message ?? `GET /api/event failed with ${response.status}`,
    );
  }

  const payload = (await response.json()) as { event: EventInfo | null };

  return payload.event;
}

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
    details: `${event.theme}. ${event.dateLabel}, ${event.timeLabel}.`,
    location: event.venue,
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}
