import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { KitPageView } from "@/components/analytics/kit-page-view";
import { TrackedCheckoutLink } from "@/components/analytics/tracked-checkout-link";
import { ClinicalBridge } from "@/components/compliance/clinical-bridge";
import { LegalNotice } from "@/components/compliance/legal-notice";
import { ProfessionalIdentity } from "@/components/compliance/professional-identity";
import { JsonLd } from "@/components/seo/json-ld";
import { getKit, kits } from "@/lib/catalog";
import { site } from "@/lib/site";
import styles from "@/components/kits/kits.module.css";

export function generateStaticParams() {
  return kits.map((kit) => ({ slug: kit.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const kit = getKit(slug);
  if (!kit) return {};
  const canonical = `/kit/${kit.slug}`;

  return {
    title: kit.nome,
    description: kit.linha_apoio,
    alternates: { canonical },
    openGraph: {
      title: `${kit.nome} | Glaucia Soares`,
      description: kit.linha_apoio,
      url: new URL(canonical, site.url),
    },
    twitter: {
      card: "summary_large_image",
      title: `${kit.nome} | Glaucia Soares`,
      description: kit.linha_apoio,
    },
  };
}

const elements = [
  ["Imagem", "conduz a atenção a um ponto de estabilidade"],
  ["Respiração", "reduz a dispersão e favorece presença corporal"],
  ["Palavra", "organiza a intenção interna"],
  ["Repetição", "cria familiaridade com o estado buscado"],
];

export default async function KitDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const kit = getKit(slug);
  if (!kit) notFound();

  const style = { "--kit-color": kit.cor_primaria } as CSSProperties;
  const canonical = `${site.url}/kit/${kit.slug}`;
  const productJsonLd: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: kit.nome,
    description: kit.linha_apoio,
    category: "Recurso digital de autocuidado simbólico e integrativo",
    url: canonical,
    brand: { "@type": "Brand", name: "Glaucia Soares" },
    ...(kit.capa ? { image: new URL(kit.capa, site.url).toString() } : {}),
    ...(kit.checkout_url && kit.preco
      ? {
          offers: {
            "@type": "Offer",
            priceCurrency: "BRL",
            price: kit.preco,
            availability: "https://schema.org/InStock",
            url: kit.checkout_url,
          },
        }
      : {}),
  };

  return (
    <main id="conteudo-principal" className={styles.page} style={style}>
      <KitPageView slug={kit.slug} status={kit.status} />
      <JsonLd data={productJsonLd} />
      <header className={styles.detailHero}>
        <div className={`container ${styles.detailGrid}`}>
          <div>
            <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
              <Link href="/">Início</Link> <span aria-hidden="true">/</span>{" "}
              <Link href="/kit">Kits</Link> <span aria-hidden="true">/</span>{" "}
              <span aria-current="page">{kit.verbo}</span>
            </nav>
            <span className={styles.badge}>{kit.status === "ativo" ? "Disponível" : "Em breve"}</span>
            <h1>{kit.nome}</h1>
            <p className={styles.detailPhrase}>“{kit.frase_curta}”</p>
            <p className={styles.detailSupport}>{kit.linha_apoio}</p>
            <ul className={styles.territory} aria-label="Território emocional">
              {kit.territorio.map((term) => <li key={term}>{term}</li>)}
            </ul>
          </div>
          <div className={styles.detailVisual}>
            {kit.capa ? (
              <Image src={kit.capa} alt={`Arte do ${kit.nome}`} width={900} height={1200} priority sizes="(max-width: 760px) 330px, 40vw" />
            ) : (
              <div className={styles.detailColor} aria-hidden="true"><strong>{kit.verbo}</strong></div>
            )}
          </div>
        </div>
      </header>

      <section className={styles.detailContent} aria-labelledby="how-it-works">
        <div className="container">
          <p className="eyebrow">Como funciona</p>
          <h2 id="how-it-works">Quatro elementos, três minutos por dia</h2>
          <div className={styles.contentGrid}>
            {elements.map(([title, description]) => (
              <article className={styles.element} key={title}>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
          <p className={styles.routine}>A rotina de 7 dias dá continuidade ao que a prática abre.</p>

          <section className={styles.purchase} aria-labelledby="availability-title">
            {kit.status === "ativo" ? (
              <>
                <h2 id="availability-title">Kit disponível</h2>
                <p className={styles.price}>R$ {kit.preco}</p>
                {kit.checkout_url && kit.preco ? (
                  <TrackedCheckoutLink slug={kit.slug} href={kit.checkout_url} price={kit.preco} />
                ) : (
                  <p className={styles.pending}>A compra online será habilitada após a validação do checkout oficial.</p>
                )}
              </>
            ) : (
              <>
                <h2 id="availability-title">Em breve</h2>
                <p>Este território já faz parte da coleção e o kit está em produção.</p>
              </>
            )}
          </section>

          <ClinicalBridge />
          <ProfessionalIdentity />
          <LegalNotice />
        </div>
      </section>
    </main>
  );
}
