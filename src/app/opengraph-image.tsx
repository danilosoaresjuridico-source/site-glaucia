import { ImageResponse } from "next/og";

export const alt = "Glaucia Soares — Enfermagem Integrativa";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div style={{ alignItems: "center", background: "linear-gradient(145deg, #f7f4ee, #efe9df)", color: "#22392f", display: "flex", height: "100%", justifyContent: "center", padding: "80px", width: "100%" }}>
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 920, textAlign: "center" }}>
          <span style={{ color: "#b0894a", fontSize: 28, letterSpacing: 8, textTransform: "uppercase" }}>Enfermagem Integrativa</span>
          <strong style={{ fontFamily: "serif", fontSize: 88, fontWeight: 500, lineHeight: 1.05, marginTop: 28 }}>Glaucia Soares</strong>
          <span style={{ color: "#4a5c52", fontSize: 32, marginTop: 30 }}>Cuidado que escuta o corpo além dos sintomas</span>
        </div>
      </div>
    ),
    size,
  );
}
