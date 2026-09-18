import type { Metadata } from "next";
import { LegalNotice } from "@/components/compliance/legal-notice";
import { ProfessionalIdentity } from "@/components/compliance/professional-identity";
import { KitCard } from "@/components/kits/kit-card";
import { kits } from "@/lib/catalog";
import { site } from "@/lib/site";
import styles from "@/components/kits/kits.module.css";

export const metadata: Metadata = {
  title: "Kits Frequenciais · De que você precisa hoje?",
  description: "Sete territórios emocionais, sete kits digitais de autocuidado simbólico e integrativo. Arte, frase, respiração e um ritual de três minutos.",
  alternates: { canonical: "/kit" },
  openGraph: {
    title: "Kits Frequenciais · De que você precisa hoje? | Glaucia Soares",
    description: "Sete territórios emocionais, sete kits digitais de autocuidado simbólico e integrativo. Arte, frase, respiração e um ritual de três minutos.",
    url: new URL("/kit", site.url),
  },
};

const availableKits = kits.filter((kit) => kit.status === "ativo");
const upcomingKits = kits.filter((kit) => kit.status === "em_breve");

export default function KitMapPage() {
  return (
    <main id="conteudo-principal" className={styles.page}>
      <header className={styles.mapHero}>
        <div className="container">
          <p className="eyebrow">Coleção de Kits Frequenciais</p>
          <h1>De que você precisa hoje?</h1>
          <p className={styles.lead}>Sete territórios emocionais. Um kit para cada um.</p>
          <p className={styles.lead}>Cada Kit Frequencial reúne uma arte, uma frase, uma respiração e um pequeno ritual de três minutos — recursos digitais de autocuidado simbólico e integrativo, criados para apoiar pausa, presença e reorganização interna.</p>
          <p className={styles.lead}>Escolha pelo que você sente agora, não pelo que acha que deveria sentir.</p>
        </div>
      </header>

      <section className={styles.section} aria-labelledby="territories-title">
        <div className="container">
          <p className="eyebrow">O mapa</p>
          <h2 id="territories-title">Os sete territórios</h2>
          <p className={styles.sectionIntro}>Sete estados, sete caminhos de volta.</p>
          <div className={styles.catalogGroup}>
            <p className={styles.groupTitle}>Disponíveis agora</p>
            <div className={`${styles.grid} ${styles.availableGrid}`} data-kit-group="available">
              {availableKits.map((kit) => <KitCard kit={kit} key={kit.id} />)}
            </div>
          </div>
          <div className={styles.catalogGroup}>
            <p className={styles.groupTitle}>Em breve</p>
            <div className={`${styles.grid} ${styles.upcomingGrid}`} data-kit-group="upcoming">
              {upcomingKits.map((kit) => <KitCard kit={kit} key={kit.id} />)}
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.features}`} aria-labelledby="contents-title">
        <div className="container">
          <h2 id="contents-title">O que vem em cada kit</h2>
          <ul className={styles.featureGrid}>
            <li>eBook de 27 páginas com a prática completa, a rotina de 7 dias e um mini diário de percepção</li>
            <li>quatro papéis de parede, em versão iPhone e Android</li>
            <li>arte de contemplação em alta resolução, pronta para imprimir em 30 × 40 cm</li>
            <li>guia de uso e de impressão</li>
          </ul>
          <p className={styles.delivery}>Entrega digital imediata, para download.</p>
        </div>
      </section>

      <section className={`${styles.section} ${styles.signature}`} aria-labelledby="creator-title">
        <div className="container">
          <h2 id="creator-title">Quem criou estes kits</h2>
          <p>Glaucia Soares é enfermeira integrativa e trabalha com práticas integrativas e complementares em saúde. Os Kits Frequenciais nasceram do que ela usa em consultório: imagem, respiração, palavra e repetição como apoio à presença.</p>
          <p className={styles.signatureLine}>Glaucia Soares · Cuidado Integrativo e Biofísica</p>
        </div>
      </section>

      <section className={styles.compliance} aria-label="Informações profissionais e aviso legal">
        <div className="container">
          <ProfessionalIdentity />
          <LegalNotice />
        </div>
      </section>
    </main>
  );
}
