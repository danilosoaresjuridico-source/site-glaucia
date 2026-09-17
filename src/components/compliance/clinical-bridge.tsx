import Link from "next/link";
import styles from "./compliance.module.css";

export function ClinicalBridge() {
  return (
    <section className={styles.bridge} aria-labelledby="clinical-bridge-title">
      <h2 id="clinical-bridge-title">Quando é necessário olhar mais fundo</h2>
      <p>
        Se o que você sente faz parte de um padrão mais antigo, pode ser
        necessário olhar para o conjunto — sono, ambiente, história emocional,
        padrões de vida. Na abordagem integrativa não olhamos o sintoma isolado:
        buscamos compreender o terreno.
      </p>
      <p>
        Se quiser aprofundar, você pode conhecer a avaliação integrativa pelo{" "}
        <Link href="/servicos/consulta-integrativa">Método Domus Áurea</Link>.
      </p>
    </section>
  );
}
