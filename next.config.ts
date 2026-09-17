import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async redirects() {
    return [
      { source: "/index.html", destination: "/", permanent: true },
      {
        source: "/servico-consulta-integrativa.html",
        destination: "/servicos/consulta-integrativa",
        permanent: true,
      },
      {
        source: "/servico-mapeamento-bioinformacional.html",
        destination: "/servicos/mapeamento-bioinformacional",
        permanent: true,
      },
      {
        source: "/servico-biorressonancia.html",
        destination: "/servicos/biorressonancia",
        permanent: true,
      },
      {
        source: "/servico-agua-vitalizada.html",
        destination: "/servicos/agua-vitalizada",
        permanent: true,
      },
      {
        source: "/servico-toque-bioeletroquantico.html",
        destination: "/servicos/toque-bioeletroquantico",
        permanent: true,
      },
      {
        source: "/servico-relaxamento-neurofuncional.html",
        destination: "/servicos/relaxamento-neurofuncional",
        permanent: true,
      },
      {
        source: "/servico-terreno-biologico.html",
        destination: "/servicos/terreno-biologico",
        permanent: true,
      },
      {
        source: "/servico-enfermagem-homecare.html",
        destination: "/servicos/enfermagem-homecare",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
