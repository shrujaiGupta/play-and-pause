"use client";

import { useEffect, useState } from "react";

import LiveSession from "@/components/LiveSession";
import UpcomingSessions from "@/components/UpcomingSessions";
import { fetchLiveEvent, type EventInfo } from "@/lib/event";

/**
 * Single switch for the "Sessions" block on the landing page.
 *
 * Both branches render a self-contained <section id="sessions">, so the page
 * layout is identical either way.
 *
 * The fetch runs in the browser on purpose. It is one visible request in the
 * Network tab, which is what makes a broken backend diagnosable — server-side
 * this was invisible, and a down API was indistinguishable from a quiet week
 * with no session planned.
 *
 * "loading" is its own state rather than borrowing the coming-soon card: that
 * card is a real answer, and showing it before the API replies would flash the
 * wrong thing at every visitor with a live session on.
 */
type State =
  | { status: "loading" }
  | { status: "ready"; event: EventInfo | null }
  | { status: "error" };

export default function SessionsSection() {
  const [state, setState] = useState<State>({ status: "loading" });

  useEffect(() => {
    let active = true;

    fetchLiveEvent()
      .then((event) => {
        if (active) setState({ status: "ready", event });
      })
      .catch((error: unknown) => {
        // The reason a visitor is seeing the fallback card, spelled out. Pair it
        // with the failed /api/event row in the Network tab for the full story.
        console.error(
          "[play-and-pause] could not load the live event:",
          error instanceof Error ? error.message : error,
        );
        if (active) setState({ status: "error" });
      });

    return () => {
      active = false;
    };
  }, []);

  if (state.status === "loading") return <SessionsSkeleton />;

  if (state.status === "ready" && state.event) {
    return <LiveSession event={state.event} />;
  }

  return <UpcomingSessions />;
}

/** Holds the section's footprint so the page does not jump when data lands. */
function SessionsSkeleton() {
  return (
    <section id="sessions" className="bg-cream-deep pb-20 md:pb-28">
      <div className="site-container">
        <div
          aria-hidden
          className="card-soft min-h-[420px] animate-pulse rounded-[var(--radius-card)] bg-peach/20 p-4 sm:p-6 lg:p-8"
        />
        <span className="sr-only">Loading the next session…</span>
      </div>
    </section>
  );
}
