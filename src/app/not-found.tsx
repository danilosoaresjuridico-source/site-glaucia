import Link from "next/link";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <main id="conteudo-principal" className={styles.page}>
      <div className={styles.content}>
        <p className={styles.code}>ERRO 404</p>
        <h1>Esta página não foi encontrada</h1>
        <p>O endereço pode ter mudado ou não fazer parte do site. Você pode voltar ao início ou conhecer a coleção de Kits Frequenciais.</p>
        <div className={styles.actions}>
          <Link className="button button-primary" href="/">Voltar ao início</Link>
          <Link className="button button-secondary" href="/kit">Conhecer os kits</Link>
        </div>
      </div>
    </main>
  );
}
