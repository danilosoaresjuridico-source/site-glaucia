import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { KitCardView } from "@/components/analytics/kit-card-view";
import type { KitCatalogItem } from "@/types/kit";
import styles from "./kits.module.css";

export function KitCard({ kit }: { kit: KitCatalogItem }) {
  const style = { "--kit-color": kit.cor_primaria } as CSSProperties;

  return (
    <KitCardView slug={kit.slug} status={kit.status}>
      <Link
        href={`/kit/${kit.slug}`}
        className={`${styles.card} ${kit.status === "em_breve" ? styles.cardSoon : ""}`}
        style={style}
      >
        <div className={styles.visual}>
          {kit.capa ? (
            <Image src={kit.capa} alt={`Arte do ${kit.nome}`} width={900} height={1200} sizes="(max-width: 650px) 100vw, 33vw" />
          ) : (
            <div className={styles.colorField} aria-hidden="true">
              <strong>{kit.verbo}</strong>
            </div>
          )}
        </div>
        <div className={styles.cardBody}>
          <span className={styles.badge}>{kit.status === "ativo" ? "Disponível" : "Em breve"}</span>
          <h3>{kit.nome}</h3>
          <p className={styles.cardPhrase}>“{kit.frase_curta}”</p>
          <span className={styles.cardLink}>{kit.status === "ativo" ? "Conhecer o kit" : "Conhecer o território"} →</span>
        </div>
      </Link>
    </KitCardView>
  );
}
