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
          color: "#0a0a0a",
          backgroundColor: "#f5f5f5",
          backgroundImage: "radial-gradient(ellipse at 50% -20%, #ffffff 30%, #f5f5f5 70%, #e5e5e5 100%)",
        }}
      >
        <div style={{ display: "flex", fontSize: 76, fontWeight: 600, letterSpacing: "-0.04em" }}>
          Mushfiqus Salehin&nbsp;<span style={{ color: "#737373" }}>Afnan</span>
        </div>
        <div style={{ display: "flex", marginTop: 20, fontSize: 40, color: "#525252" }}>{ROLE}</div>
        <div style={{ display: "flex", marginTop: 48, fontSize: 26, color: "#737373" }}>
          React · Next.js · TypeScript · Node.js · Machine Learning
        </div>
      </div>
    ),
    size
  );
}
