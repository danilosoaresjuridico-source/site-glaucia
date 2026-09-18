import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FrequencyFlow } from "@/components/decorative/frequency-flow";
import { InstagramIcon } from "@/components/icons/instagram-icon";
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";
import { JsonLd } from "@/components/seo/json-ld";
import { services } from "@/content/services";
import { site } from "@/lib/site";
import styles from "./page.module.css";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const posts = [
  ["O que é o campo bioinformacional?", "Uma introdução acessível à leitura de campo e ao papel do mapeamento na prática integrativa."],
  ["PICS: o que a ciência já reconhece", "Como as Práticas Integrativas e Complementares se consolidaram no cuidado em saúde no Brasil."],
  ["Água vitalizada e detoxificação", "Entenda a proposta da água vitalizada e o conceito de modulação do terreno biológico."],
];

export default function HomePage() {
  return (
    <main id="conteudo-principal">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Person",
              name: "Glaucia Soares",
              jobTitle: "Enfermeira",
              identifier: "COREN-SP 101464",
              url: site.url,
              sameAs: [site.instagram],
            },
            {
              "@type": "ProfessionalService",
              name: "Glaucia Soares — Enfermagem Integrativa",
              url: site.url,
              telephone: "+55 17 99682-3466",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Rua Voluntários de São Paulo, 3180, Sala 122",
                addressLocality: "São José do Rio Preto",
                addressRegion: "SP",
                addressCountry: "BR",
              },
            },
          ],
        }}
      />

      <header className={styles.hero} id="inicio">
        <div className={`container ${styles.heroGrid}`}>
          <div>
            <p className="eyebrow">Enfermagem Integrativa · São José do Rio Preto</p>
            <h1>
              O cuidado que escuta o corpo <em>além dos sintomas</em>
            </h1>
            <p className={styles.lead}>
              Consulta integrativa personalizada que une a Enfermagem clássica às Práticas Integrativas e Complementares em Saúde — com análise bioinformacional, biorressonância e modulação do terreno biológico para promover equilíbrio e <span className="no-break">bem-estar</span>.
            </p>
            <div className={styles.actions}>
              <a className="button button-primary" href="https://wa.me/5517996823466?text=Ol%C3%A1%2C%20Glaucia!%20Gostaria%20de%20agendar%20uma%20consulta%20integrativa." target="_blank" rel="noopener noreferrer">
                Agendar pelo WhatsApp
              </a>
              <a className="button button-secondary" href="#servicos">
                Conhecer os serviços
              </a>
            </div>
          </div>
          <div className={styles.heroImage}>
            <Image src="/images/site/glaucia-hero.jpg" alt="Glaucia Soares, Enfermeira Integrativa, sorrindo" width={880} height={936} priority sizes="(max-width: 820px) 320px, 42vw" />
          </div>
        </div>
      </header>

      <FrequencyFlow />

      <section className={styles.section} id="sobre">
        <div className={`container ${styles.aboutGrid}`}>
          <div className={styles.aboutImage}>
            <Image src="/images/site/glaucia-retrato.jpg" alt="Retrato de Glaucia Soares em preto e branco" width={820} height={872} sizes="(max-width: 820px) 360px, 45vw" />
          </div>
          <div className={styles.aboutCopy}>
            <p className="eyebrow">Sobre</p>
            <h2>Glaucia Soares</h2>
            <p>Enfermeira com atuação clínica consolidada e especialização em Práticas Integrativas e Complementares em Saúde (PICS), Glaucia <span className="no-break">dedica-se</span> a um modelo de cuidado que enxerga a pessoa por inteiro, considerando corpo, mente e campo energético.</p>
            <p>Em sua clínica no centro de São José do Rio Preto, integra a escuta atenta da Enfermagem clássica a tecnologias de análise biofísica e bioenergética, construindo protocolos personalizados de reequilíbrio e promoção da saúde.</p>
            <div className={styles.credentials}>
              <span className={styles.credential}>Enfermeira · COREN 101464</span>
              <span className={styles.credential}>Especialista em PICS</span>
              <span className={styles.credential}>Biofísica Aplicada à Saúde</span>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`} id="servicos">
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className="eyebrow">Serviços</p>
            <h2>Um cuidado, muitas dimensões</h2>
            <p>Cada atendimento parte de uma anamnese cuidadosa e evolui para o protocolo mais adequado ao seu momento.</p>
          </div>
          <div className={styles.cards}>
            {services.map((service) => (
              <Link className={styles.card} href={`/servicos/${service.slug}`} key={service.slug}>
                <span className={styles.tag}>{service.eyebrow}</span>
                <h3>{service.cardTitle ?? service.title}</h3>
                <p>{service.cardDescription}</p>
                <span className={styles.more}>Conhecer →</span>
              </Link>
            ))}
          </div>
          <div className={styles.practice}>
            <Image src="/images/site/glaucia-equipamento.jpg" alt="Glaucia Soares apresentando um equipamento de biorressonância eletrônica" width={864} height={1184} sizes="(max-width: 820px) 100vw, 50vw" />
            <div className={styles.practiceCopy}>
              <p className="eyebrow">Na prática</p>
              <h3>Tecnologia a serviço da escuta</h3>
              <p>Os equipamentos de análise biofísica — da biorressonância eletrônica à leitura bioinformacional — não substituem o olhar clínico: ampliam a capacidade de compreender padrões de desequilíbrio e de acompanhar a evolução de cada protocolo.</p>
              <p>Cada leitura é interpretada à luz da anamnese e do contexto de vida de quem está sendo cuidado.</p>
            </div>
          </div>
          <div className={styles.note}>
            As práticas integrativas oferecidas são <strong>complementares</strong> e não substituem diagnóstico, tratamento ou acompanhamento médico. Todo cuidado é conduzido dentro do escopo legal da Enfermagem e das PICS reconhecidas.
          </div>
          <div className={styles.kitIntro}>
            <div>
              <p className="eyebrow">Kits Frequenciais</p>
              <h3>De que você precisa hoje?</h3>
              <p>Sete territórios emocionais e recursos digitais de autocuidado simbólico e integrativo para apoiar pausa, presença e reorganização interna.</p>
            </div>
            <Link className="button button-primary" href="/kit">Conhecer os kits</Link>
          </div>
        </div>
      </section>

      <section className={styles.philosophy} aria-label="Filosofia de cuidado">
        <div className={`container ${styles.philosophyGrid}`}>
          <Image src="/images/site/glaucia-perfil.jpg" alt="Glaucia Soares em retrato de perfil, preto e branco" width={820} height={1123} sizes="(max-width: 820px) 100vw, 40vw" />
          <div className={styles.quote}>
            <blockquote>“Cuidar é enxergar a pessoa por inteiro — o que ela sente, o que ela vive e o que o seu campo silenciosamente comunica.”</blockquote>
            <cite>Glaucia Soares · Enfermeira Integrativa</cite>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionDark}`} id="blog">
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className="eyebrow">Blog</p>
            <h2>Saúde Integrativa em pauta</h2>
            <p>Artigos, notícias e novidades sobre PICS, bioenergética e o universo do cuidado integral.</p>
          </div>
          <div className={styles.cards}>
            {posts.map(([title, description]) => (
              <article className={styles.post} key={title}>
                <span className={styles.postDate}>Em breve</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section} id="contato">
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className="eyebrow">Contato</p>
            <h2>Agende seu atendimento</h2>
          </div>
          <div className={styles.contactGrid}>
            <div>
              <div className={styles.contactItem}>
                <p className={styles.contactLabel}>WhatsApp</p>
                <a className={styles.contactSocialLink} data-contact-link="whatsapp" href={site.whatsapp} target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon className={styles.contactSocialIcon} />
                  <span>(17) 99682-3466</span>
                </a>
              </div>
              <div className={styles.contactItem}>
                <p className={styles.contactLabel}>Instagram</p>
                <a className={styles.contactSocialLink} data-contact-link="instagram" href={site.instagram} target="_blank" rel="noopener noreferrer">
                  <InstagramIcon className={styles.contactSocialIcon} />
                  <span>@terapiaglau</span>
                </a>
              </div>
              <div className={styles.contactItem}>
                <p className={styles.contactLabel}>Endereço</p>
                <a href="https://www.google.com/maps/search/?api=1&query=Rua+Volunt%C3%A1rios+de+S%C3%A3o+Paulo+3180+S%C3%A3o+Jos%C3%A9+do+Rio+Preto" target="_blank" rel="noopener noreferrer">
                  Edifício Calil Buchala, Sala 122<br />Rua Voluntários de São Paulo, 3180 — Centro<br />São José do Rio Preto/SP
                </a>
              </div>
              <div className={styles.contactItem}>
                <p className={styles.contactLabel}>Horário de atendimento</p>
                <p>Tardes, mediante agendamento</p>
              </div>
            </div>
            <div className={styles.map}>
              <iframe title="Mapa — localização da clínica" loading="lazy" referrerPolicy="no-referrer-when-downgrade" src="https://www.google.com/maps?q=Rua+Volunt%C3%A1rios+de+S%C3%A3o+Paulo,+3180,+S%C3%A3o+Jos%C3%A9+do+Rio+Preto+-+SP&output=embed" />
            </div>
          </div>
        </div>
      </section>

      <a
        aria-label="Falar com Glaucia pelo WhatsApp"
        className={styles.whatsapp}
        href="https://wa.me/5517996823466?text=Ol%C3%A1%2C%20Glaucia!%20Gostaria%20de%20agendar%20uma%20consulta%20integrativa."
        rel="noopener noreferrer"
        target="_blank"
        title="Falar com Glaucia pelo WhatsApp"
      >
        <WhatsAppIcon className={styles.whatsappIcon} />
        <span className="visually-hidden">Falar com Glaucia pelo WhatsApp</span>
        <span aria-hidden="true" className={styles.whatsappTooltip}>Falar pelo WhatsApp</span>
      </a>
    </main>
  );
}
