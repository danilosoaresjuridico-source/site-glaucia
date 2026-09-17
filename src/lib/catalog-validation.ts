import type { KitCatalogItem } from "@/types/kit";

const HEX_COLOR = /^#[0-9A-F]{6}$/i;
const SLUG = /^kit-[a-z0-9-]+$/;

function invariant(condition: unknown, message: string): asserts condition {
  if (!condition) {
    throw new Error(`Catálogo inválido: ${message}`);
  }
}

export function validateCatalog(value: unknown): KitCatalogItem[] {
  invariant(Array.isArray(value), "a raiz precisa ser um array");
  invariant(value.length === 7, "a fase 1 precisa conter exatamente sete kits");

  const items = value as KitCatalogItem[];
  const ids = new Set<string>();
  const slugs = new Set<string>();

  for (const item of items) {
    invariant(/^KF-0[1-7]$/.test(item.id), `${item.id ?? "item"}: id inválido`);
    invariant(!ids.has(item.id), `${item.id}: id duplicado`);
    ids.add(item.id);

    invariant(SLUG.test(item.slug), `${item.id}: slug inválido`);
    invariant(!slugs.has(item.slug), `${item.id}: slug duplicado`);
    slugs.add(item.slug);

    invariant(item.colecao === "kits-frequenciais", `${item.id}: coleção inválida`);
    invariant(item.nivel === "sistema" || item.nivel === "especial", `${item.id}: nível inválido`);
    invariant(item.status === "ativo" || item.status === "em_breve", `${item.id}: status inválido`);
    invariant(Array.isArray(item.territorio) && item.territorio.length === 4, `${item.id}: território precisa ter quatro termos`);
    invariant(HEX_COLOR.test(item.cor_primaria), `${item.id}: cor primária inválida`);
    invariant(Array.isArray(item.paleta) && item.paleta.length >= 5, `${item.id}: paleta incompleta`);
    invariant(item.paleta.every((color) => HEX_COLOR.test(color)), `${item.id}: paleta contém cor inválida`);
    invariant(Boolean(item.nome && item.verbo && item.frase_curta && item.linha_apoio), `${item.id}: texto obrigatório ausente`);

    if (item.status === "ativo") {
      invariant(item.preco === 37, `${item.id}: kit ativo deve custar R$ 37`);
      invariant(item.capa !== null, `${item.id}: kit ativo precisa de capa web`);
      if (item.checkout_url !== null) {
        invariant(item.checkout_url.startsWith("https://"), `${item.id}: checkout precisa usar HTTPS`);
      }
    } else {
      invariant(item.preco === null, `${item.id}: kit em breve não pode ter preço`);
      invariant(item.checkout_url === null, `${item.id}: kit em breve não pode ter checkout`);
      invariant(item.capa === null, `${item.id}: kit em breve deve usar composição de cor`);
    }
  }

  invariant(items.filter((item) => item.status === "ativo").length === 2, "devem existir dois kits ativos");
  invariant(items.filter((item) => item.status === "em_breve").length === 5, "devem existir cinco kits em breve");
  invariant(items.find((item) => item.id === "KF-02")?.nivel === "especial", "somente KF-02 é especial");

  return items;
}
