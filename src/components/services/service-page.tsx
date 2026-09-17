import Link from "next/link";
import type { ServiceContent } from "@/content/services";
import styles from "./service-page.module.css";

const consultationQuote = "Seu corpo está falando. Que tal reservar um tempo para escutá-lo?";

function withNonBreakingHyphens(text: string) {
  return text.replaceAll("-", "‑");
}

function ServiceQuote({ quote }: { quote: string }) {
  if (quote === consultationQuote) {
    return (
      <>
        Seu corpo está falando. Que tal reservar um tempo para <span className={styles.noBreak}>escutá-lo?</span>
      </>
    );
  }

  return withNonBreakingHyphens(quote);
}

export function ServicePage({ service }: { service: ServiceContent }) {
  return (
    <main id="conteudo-principal">
      <header className={styles.hero}>
        <div className={styles.wrap}>
          <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
            <Link href="/">Início</Link> <span aria-hidden="true">/</span>{" "}
            <Link href="/#servicos">Serviços</Link> <span aria-hidden="true">/</span>{" "}
            <span aria-current="page">{service.title}</span>
          </nav>
          <p className="eyebrow">{service.eyebrow}</p>
          <h1>{service.title}</h1>
        </div>
      </header>
      <article className={styles.content}>
        <div className={styles.wrap}>
          {service.paragraphs.map((paragraph) => (
            <p key={paragraph}>{withNonBreakingHyphens(paragraph)}</p>
          ))}
          <p className={styles.note}>{withNonBreakingHyphens(service.note)}</p>
          <div className={styles.cta}>
            <p>“<ServiceQuote quote={service.quote} />”</p>
            <a className="button" href={service.whatsappUrl} target="_blank" rel="noopener noreferrer">
              Agendar pelo WhatsApp
            </a>
          </div>
          <Link className={styles.back} href="/#servicos">
            Ver todos os serviços
          </Link>
        </div>
      </article>
    </main>
  );
}
