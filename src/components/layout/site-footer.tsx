import styles from "./site-footer.module.css";

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <p className={styles.name}>
        Glaucia <em>Soares</em>
      </p>
      <p>Enfermagem Integrativa · COREN 101464</p>
      <p>São José do Rio Preto/SP</p>
    </footer>
  );
}
