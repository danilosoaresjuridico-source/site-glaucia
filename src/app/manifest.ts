import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Glaucia Soares — Enfermagem Integrativa",
    short_name: "Glaucia Soares",
    description: "Enfermagem Integrativa e Kits Frequenciais em São José do Rio Preto.",
    start_url: "/",
    display: "standalone",
    background_color: "#fdfcfa",
    theme_color: "#22392f",
    lang: "pt-BR",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
