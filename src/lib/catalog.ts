import rawKits from "@/content/kits.json";
import { validateCatalog } from "@/lib/catalog-validation";

export const kits = validateCatalog(rawKits);

export function getKit(slug: string) {
  return kits.find((kit) => kit.slug === slug);
}

export const commercialLaunchReady = kits
  .filter((kit) => kit.status === "ativo")
  .every((kit) => kit.checkout_url !== null);
