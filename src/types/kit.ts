export type KitStatus = "ativo" | "em_breve";
export type KitLevel = "sistema" | "especial";

export interface KitCatalogItem {
  id: string;
  slug: string;
  nome: string;
  colecao: "kits-frequenciais";
  nivel: KitLevel;
  status: KitStatus;
  preco: number | null;
  territorio: string[];
  verbo: string;
  cor_primaria: `#${string}`;
  paleta: `#${string}`[];
  frase_curta: string;
  linha_apoio: string;
  checkout_url: string | null;
  capa: string | null;
}
