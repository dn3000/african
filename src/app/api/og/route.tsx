import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "1200px",
          height: "630px",
          backgroundColor: "#0D0D0D",
          padding: "60px 72px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background accent glows */}
        <div
          style={{
            position: "absolute",
            top: -120,
            right: -80,
            width: 480,
            height: 480,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(0,146,69,0.18) 0%, transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -100,
            left: 120,
            width: 380,
            height: 380,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(237,28,36,0.14) 0%, transparent 70%)",
          }}
        />

        {/* Gold accent border top */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 72,
            right: 72,
            height: "3px",
            background: "linear-gradient(90deg, #FBB03B, transparent)",
          }}
        />

        {/* Header row: label */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <span
            style={{
              fontFamily: "sans-serif",
              fontSize: "12px",
              fontWeight: 700,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "#FBB03B",
              border: "1px solid rgba(251,176,59,0.35)",
              padding: "6px 14px",
              borderRadius: "2px",
            }}
          >
            Exwick Farm × AfriCan
          </span>
        </div>

        {/* Main content */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div
            style={{
              fontFamily: "sans-serif",
              fontSize: "72px",
              fontWeight: 900,
              lineHeight: 1.05,
              color: "#F5F5F5",
              letterSpacing: "-0.02em",
            }}
          >
            Bridging{" "}
            <span style={{ color: "#009245" }}>Continents.</span>
            <br />
            Building{" "}
            <span style={{ color: "#ED1C24" }}>Futures.</span>
          </div>
          <p
            style={{
              fontFamily: "sans-serif",
              fontSize: "22px",
              color: "#9A9A9A",
              lineHeight: 1.5,
              maxWidth: "680px",
            }}
          >
            Transforming Exwick Farm into a modern agri-tech estate connecting Zimbabwe and Canada.
          </p>
        </div>

        {/* Footer row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span
            style={{
              fontFamily: "sans-serif",
              fontSize: "14px",
              color: "rgba(154,154,154,0.6)",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
            }}
          >
            Zimbabwe · Canada · Global Markets
          </span>
          <span
            style={{
              fontFamily: "sans-serif",
              fontSize: "20px",
              fontWeight: 800,
              color: "#F5F5F5",
              letterSpacing: "0.05em",
            }}
          >
            AfriCan
          </span>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
