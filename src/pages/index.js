import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Medicina Estelar - Terapia Holística y Espiritual</title>
        <meta name="description" content="Descubre la medicina estelar y conecta con tu verdadera esencia a través de terapia holística" />
      </Head>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <h1>Bienvenido a la Medicina Estelar</h1>
            <p>Conecta con tu verdadera esencia y transforma tu vida a través de la energía cósmica</p>
            <Link href="/contacto" className="btn btn-primary">
              Agendar Consulta
            </Link>
          </div>
        </div>
      </section>

      {/* Servicios Preview */}
      <section className="section">
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Nuestros Servicios</h2>
          <div className="grid grid-3">
            <div className={styles.serviceCard}>
              <div className={styles.icon}>🌟</div>
              <h3>Sesiones Individuales</h3>
              <p>Conexión personal con la energía estelar para sanar y transformar.</p>
            </div>
            <div className={styles.serviceCard}>
              <div className={styles.icon}>🌙</div>
              <h3>Registros Akáshicos</h3>
              <p>Accede a tus registros cósmicos para entender tu propósito de vida.</p>
            </div>
            <div className={styles.serviceCard}>
              <div className={styles.icon}>✨</div>
              <h3>Meditaciones Guiadas</h3>
              <p>Experiencias meditativas profundas para la elevación espiritual.</p>
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Link href="/servicios" className="btn btn-secondary">
              Ver Todos los Servicios
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="section section-dark">
        <div className="container">
          <div className="grid grid-2">
            <div>
              <h2>Sobre Mí</h2>
              <p>
                Soy una terapeuta especializada en medicina estelar y técnicas holísticas de sanación. 
                Mi objetivo es guiarte en un viaje de autodescubrimiento conectando con las energías 
                del universo para lograr equilibrio, paz y transformación.
              </p>
              <p>
                Con años de experiencia en terapia espiritual, registros akáshicos y meditación, 
                he acompañado a cientos de personas en su camino hacia la sanación integral.
              </p>
              <Link href="/sobre" className="btn btn-secondary" style={{ marginTop: '1rem' }}>
                Conocer Mi Historia
              </Link>
            </div>
            <div style={{ minHeight: '300px', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '10px' }}>
              {/* Aquí iría una imagen */}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2>¿Listo para transformar tu vida?</h2>
          <p>Conecta conmigo hoy y comienza tu viaje de sanación y elevación espiritual.</p>
          <Link href="/contacto" className="btn btn-primary" style={{ marginTop: '1rem' }}>
            Envía tu Consulta
          </Link>
        </div>
      </section>
    </>
  );
}
