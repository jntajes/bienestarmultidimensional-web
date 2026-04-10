import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h3>✨ Medicina Estelar</h3>
            <p>Conectando con la energía cósmica para tu bienestar integral.</p>
          </div>

          <div className={styles.footerSection}>
            <h4>Enlaces Rápidos</h4>
            <ul>
              <li><a href="/">Inicio</a></li>
              <li><a href="/servicios">Servicios</a></li>
              <li><a href="/sobre">Sobre Mí</a></li>
              <li><a href="/contacto">Contacto</a></li>
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h4>Sígueme</h4>
            <div className={styles.social}>
              <a href="#" aria-label="Instagram">Instagram</a>
              <a href="#" aria-label="Facebook">Facebook</a>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>&copy; {currentYear} Medicina Estelar. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
