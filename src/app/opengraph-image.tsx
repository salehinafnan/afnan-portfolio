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
          color: "#e5e7eb",
          backgroundColor: "#000",
          backgroundImage: "radial-gradient(circle at 50% -30%, rgba(25,25,112,0.9), #000 70%)",
        }}
      >
        <div style={{ display: "flex", fontSize: 76, letterSpacing: "-0.03em" }}>
          Mushfiqus Salehin&nbsp;<span style={{ color: "#93c5fd" }}>Afnan</span>
        </div>
        <div style={{ display: "flex", marginTop: 20, fontSize: 40, color: "#93c5fd" }}>{ROLE}</div>
        <div style={{ display: "flex", marginTop: 48, fontSize: 26, color: "#a3a3a3" }}>
          React · Next.js · TypeScript · Node.js · Machine Learning
        </div>
      </div>
    ),
    size
  );
}
