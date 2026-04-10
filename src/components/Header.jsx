import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.headerContent}>
          <Link href="/" className={styles.logo}>
            <h2>✨ Medicina Estelar</h2>
          </Link>
          <nav className={styles.nav}>
            <Link href="/">Inicio</Link>
            <Link href="/servicios">Servicios</Link>
            <Link href="/sobre">Sobre Mí</Link>
            <Link href="/contacto" className={styles.ctaButton}>Contacto</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
