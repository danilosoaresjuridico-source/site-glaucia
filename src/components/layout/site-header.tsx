"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import styles from "./site-header.module.css";

const links = [
  ["Sobre", "/#sobre"],
  ["Serviços", "/#servicos"],
  ["Kits", "/kit"],
  ["Blog", "/#blog"],
  ["Contato", "/#contato"],
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  function closeMenu(restoreFocus = false) {
    setOpen(false);
    if (restoreFocus) {
      requestAnimationFrame(() => buttonRef.current?.focus());
    }
  }

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenu(true);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.classList.remove("menu-open");
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <header className={styles.header}>
      <Link className={styles.logo} href="/" onClick={() => closeMenu()}>
        Glaucia <em>Soares</em>
        <small>Práticas Integrativas em Saúde</small>
      </Link>
      <button
        ref={buttonRef}
        type="button"
        className={`${styles.menuButton} ${open ? styles.menuButtonOpen : ""}`}
        aria-label={open ? "Fechar menu" : "Abrir menu"}
        aria-expanded={open}
        aria-controls="site-navigation"
        onClick={() => setOpen((current) => !current)}
      >
        <span />
        <span />
        <span />
      </button>
      <nav aria-label="Navegação principal">
        <ul
          id="site-navigation"
          className={`${styles.nav} ${open ? styles.navOpen : ""}`}
        >
          {links.map(([label, href]) => (
            <li key={href}>
              <Link href={href} onClick={() => closeMenu()}>
                {label}
              </Link>
            </li>
          ))}
          <li>
            <a
              className={styles.cta}
              href="https://wa.me/5517996823466?text=Ol%C3%A1%2C%20Glaucia!%20Gostaria%20de%20agendar%20uma%20consulta%20integrativa."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => closeMenu()}
            >
              Agendar consulta
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
