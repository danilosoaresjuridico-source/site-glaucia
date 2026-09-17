import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServicePage } from "@/components/services/service-page";
import { getService, services } from "@/content/services";
import { site } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};

  const canonical = `/servicos/${service.slug}`;
  return {
    title: service.title,
    description: service.description,
    alternates: { canonical },
    openGraph: {
      title: `${service.title} | Glaucia Soares`,
      description: service.description,
      url: new URL(canonical, site.url),
    },
  };
}

export default async function ServiceRoute({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  return <ServicePage service={service} />;
}
