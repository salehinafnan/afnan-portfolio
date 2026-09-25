import { ImageResponse } from "next/og";
import { NAME, ROLE } from "../constants";

export const alt = `${NAME} | ${ROLE}`;
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
          padding: "0 96px",
          color: "#1c1917",
          backgroundColor: "#f2efe9",
          backgroundImage:
            "radial-gradient(circle at 0% 0%, rgba(251,146,60,0.22), transparent 45%), radial-gradient(circle at 100% 0%, rgba(129,140,248,0.28), transparent 50%)",
        }}
      >
        <div style={{ display: "flex", fontSize: 76, fontWeight: 600, letterSpacing: "-0.04em" }}>
          Mushfiqus Salehin&nbsp;<span style={{ color: "#6d28d9" }}>Afnan</span>
        </div>
        <div style={{ display: "flex", marginTop: 20, fontSize: 40, color: "#4338ca" }}>{ROLE}</div>
        <div style={{ display: "flex", marginTop: 48, fontSize: 26, color: "#78716c" }}>
          React · Next.js · TypeScript · Node.js · Machine Learning
        </div>
      </div>
    ),
    size
  );
}
