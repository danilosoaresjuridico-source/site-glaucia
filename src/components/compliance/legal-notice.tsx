import styles from "./compliance.module.css";

export function LegalNotice() {
  return (
    <p className={styles.legal}>
      Este material é um recurso complementar de autocuidado simbólico e
      integrativo. Não substitui avaliação, diagnóstico ou tratamento por
      profissional habilitado.
    </p>
  );
}
