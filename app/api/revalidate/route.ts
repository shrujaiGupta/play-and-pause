import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

import { EVENT_CACHE_TAG } from "@/lib/event";

/**
 * Cache purge for the event card, called by playandpause-backend whenever the
 * live event changes. Without it the page would serve the cached copy until the
 * fallback window elapses, so an edit in the admin would appear minutes late.
 *
 * Guarded by a shared secret in a header rather than a query string, so it never
 * lands in access logs. If REVALIDATE_SECRET is unset the route refuses
 * everything — an open purge endpoint is a free way for anyone to strip the
 * site's cache.
 */
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  const secret = process.env.REVALIDATE_SECRET;

  if (!secret) {
    return NextResponse.json(
      { revalidated: false, reason: "not configured" },
      { status: 503 },
    );
  }

  if (request.headers.get("x-revalidate-secret") !== secret) {
    return NextResponse.json(
      { revalidated: false, reason: "unauthorised" },
      { status: 401 },
    );
  }

  // Next 16 wants a cache-life profile alongside the tag; "max" purges the
  // entry outright rather than easing it out over a window.
  revalidateTag(EVENT_CACHE_TAG, "max");

  return NextResponse.json({ revalidated: true });
}
