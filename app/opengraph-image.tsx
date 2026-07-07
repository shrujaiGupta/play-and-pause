import { ImageResponse } from "next/og";

export const alt =
  "Play & Pause: curated playdates and creative experiences in Jaipur";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "90px",
          background: "linear-gradient(135deg, #fff9f5 0%, #ffeede 55%, #ffd9c2 100%)",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
            fontSize: 30,
            fontWeight: 600,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#ee6c54",
          }}
        >
          Welcome to
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 8,
            fontSize: 118,
            fontWeight: 800,
            color: "#7c5847",
            lineHeight: 1,
          }}
        >
          <span>Play&nbsp;</span>
          <span style={{ color: "#f4836b" }}>&amp;</span>
          <span>&nbsp;Pause</span>
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: 40,
            color: "#3d3733",
            maxWidth: 880,
            lineHeight: 1.3,
          }}
        >
          Where little hands create, and moms find a moment to pause.
        </div>
        <div
          style={{
            marginTop: 22,
            fontSize: 28,
            color: "#7c726b",
            fontFamily: "sans-serif",
          }}
        >
          Curated playdates &amp; creative experiences · Jaipur · Ages 1.5+
        </div>
      </div>
    ),
    { ...size },
  );
}
