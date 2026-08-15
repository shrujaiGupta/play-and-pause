import LiveSession from "@/components/LiveSession";
import UpcomingSessions from "@/components/UpcomingSessions";
import { getLiveEvent } from "@/lib/event";

/**
 * Single switch for the "Sessions" block on the landing page.
 *
 * Both branches render a self-contained <section id="sessions">, so the page
 * layout is identical either way. No live event — or an API that could not be
 * reached — falls through to the "coming soon" card.
 */
export default async function SessionsSection() {
  const event = await getLiveEvent();

  return event ? <LiveSession event={event} /> : <UpcomingSessions />;
}
