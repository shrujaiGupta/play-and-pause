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
 * The response is cached indefinitely and purged on demand — the backend pings
 * /api/revalidate whenever the live event changes, so an edit in the admin shows
 * up immediately rather than on a timer. REVALIDATE_FALLBACK_SECONDS is only a
 * safety net for a ping that never arrives.
 */
export const EVENT_CACHE_TAG = "event";

const REVALIDATE_FALLBACK_SECONDS = 300;

const API_BASE_URL = (
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

type EventResponse = {
  success: boolean;
  data?: { event: EventInfo | null };
};

/**
 * Never throws. If the API is unreachable or answers with something unexpected,
 * the section falls back to the "next playdate coming soon" card rather than
 * taking the whole page down with it.
 */
export async function getLiveEvent(): Promise<EventInfo | null> {
  try {
    const response = await fetch(`${API_BASE_URL}/getEventData`, {
      next: {
        tags: [EVENT_CACHE_TAG],
        revalidate: REVALIDATE_FALLBACK_SECONDS,
      },
    });

    if (!response.ok) return null;

    const payload = (await response.json()) as EventResponse;

    return payload.success ? (payload.data?.event ?? null) : null;
  } catch {
    return null;
  }
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
