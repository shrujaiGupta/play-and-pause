import LiveSession from "@/components/LiveSession";
import UpcomingSessions from "@/components/UpcomingSessions";
import { IS_EVENT_LIVE } from "@/lib/event";

/**
 * Single switch for the "Sessions" block on the landing page.
 *
 * When the backend flag lands, make this component async and await it here —
 * both branches already render a self-contained <section id="sessions">.
 */
export default function SessionsSection() {
  return IS_EVENT_LIVE ? <LiveSession /> : <UpcomingSessions />;
}
