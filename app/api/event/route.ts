import { NextResponse } from "next/server";

import { API_BASE_URL, type EventInfo } from "@/lib/event";

/**
 * The browser's way in to the live event.
 *
 * The site used to read the event during server rendering, which worked but was
 * impossible to debug: a backend that was down looked exactly like a backend
 * with no live event, and neither showed up in DevTools. Now the browser calls
 * this route, so the request, its status and its error body are all visible in
 * the Network tab.
 *
 * It proxies rather than letting the browser hit the API directly — same origin
 * means no CORS to configure, and API_BASE_URL stays on the server. This mirrors
 * how playandpause-admin talks to the backend.
 *
 * Failures are deliberately loud. A network error returns 503 naming the URL it
 * tried, so a misconfigured API_BASE_URL is readable straight from the response.
 */
export const dynamic = "force-dynamic";

type EventResponse = {
  success: boolean;
  data?: { event: EventInfo | null };
};

export async function GET() {
  let response: Response;

  try {
    response = await fetch(`${API_BASE_URL}/getEventData`, {
      headers: { accept: "application/json" },
      cache: "no-store",
    });
  } catch (error) {
    const detail = error instanceof Error ? ` — ${error.message}` : "";

    return NextResponse.json(
      { message: `Could not reach the API at ${API_BASE_URL}${detail}` },
      { status: 503 },
    );
  }

  if (!response.ok) {
    return NextResponse.json(
      { message: `The API answered ${response.status} for /getEventData` },
      { status: response.status },
    );
  }

  let payload: EventResponse;

  try {
    payload = (await response.json()) as EventResponse;
  } catch {
    return NextResponse.json(
      { message: "The API returned a body that was not JSON" },
      { status: 502 },
    );
  }

  if (!payload.success) {
    return NextResponse.json(
      { message: "The API reported the request as unsuccessful" },
      { status: 502 },
    );
  }

  return NextResponse.json({ event: payload.data?.event ?? null });
}
