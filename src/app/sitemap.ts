import type { MetadataRoute } from "next";
import { services } from "@/content/services";
import { kits } from "@/lib/catalog";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseEntries: MetadataRoute.Sitemap = [
    { url: site.url, changeFrequency: "monthly", priority: 1 },
    { url: `${site.url}/kit`, changeFrequency: "monthly", priority: 0.9 },
  ];

  const serviceEntries: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${site.url}/servicos/${service.slug}`,
    changeFrequency: "yearly",
    priority: 0.7,
  }));

  const kitEntries: MetadataRoute.Sitemap = kits.map((kit) => ({
    url: `${site.url}/kit/${kit.slug}`,
    changeFrequency: kit.status === "ativo" ? "monthly" : "weekly",
    priority: kit.status === "ativo" ? 0.85 : 0.65,
  }));

  return [...baseEntries, ...serviceEntries, ...kitEntries];
}
