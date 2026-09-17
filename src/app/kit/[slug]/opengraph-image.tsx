import { ImageResponse } from "next/og";
import { getKit, kits } from "@/lib/catalog";

export const alt = "Coleção de Kits Frequenciais — Glaucia Soares";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return kits.map((kit) => ({ slug: kit.slug }));
}

export default async function KitOpenGraphImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const kit = getKit(slug) ?? kits[0];

  return new ImageResponse(
    (
      <div style={{ alignItems: "center", background: kit.cor_primaria, color: "#1A4A3A", display: "flex", height: "100%", justifyContent: "center", padding: "72px", width: "100%" }}>
        <div style={{ alignItems: "center", display: "flex", flexDirection: "column", maxWidth: 980, textAlign: "center" }}>
          <span style={{ border: "2px solid #1A4A3A", borderRadius: 999, fontSize: 22, letterSpacing: 5, padding: "10px 24px", textTransform: "uppercase" }}>{kit.status === "ativo" ? "Disponível" : "Em breve"}</span>
          <strong style={{ fontFamily: "serif", fontSize: 82, fontWeight: 500, lineHeight: 1.05, marginTop: 30 }}>{kit.nome}</strong>
          <span style={{ fontFamily: "serif", fontSize: 36, fontStyle: "italic", marginTop: 28 }}>“{kit.frase_curta}”</span>
        </div>
      </div>
    ),
    size,
  );
}
