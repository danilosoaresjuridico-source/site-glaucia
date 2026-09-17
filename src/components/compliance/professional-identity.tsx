import styles from "./compliance.module.css";

export function ProfessionalIdentity() {
  return (
    <p className={styles.identity}>
      Glaucia Soares · Enfermeira · <span className="no-break">COREN-SP</span> 101464
    </p>
  );
}
