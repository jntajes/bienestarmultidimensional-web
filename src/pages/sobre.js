import Head from 'next/head';
import styles from '../styles/Sobre.module.css';

export default function Sobre() {
  return (
    <>
      <Head>
        <title>Sobre Mí - Medicina Estelar</title>
        <meta name="description" content="Conoce mi historia y experiencia en medicina estelar y terapia holística" />
      </Head>

      {/* Header */}
      <section className={styles.header}>
        <div className="container">
          <h1>Sobre Mí</h1>
          <p>Mi viaje en la sanación estelar</p>
        </div>
      </section>

      {/* Historia */}
      <section className="section">
        <div className="container">
          <div className="grid grid-2">
            <div>
              <h2>Mi Historia</h2>
              <p>
                Desde temprana edad, sentía una conexión especial con las energías cósmicas y la 
                espiritualidad. Mi camino en la medicina estelar comenzó como una búsqueda personal 
                de sanación y comprensión de mi propósito de vida.
              </p>
              <p>
                A través de años de estudio, meditación y experiencias transformadoras, descubrí que 
                podía acompañar a otros en su proceso de elevación espiritual. Cada sesión, cada registro 
                akáshico leído, me ha confirmado que esta es mi verdadera misión.
              </p>
              <p>
                Hoy, me dedico a conectar personas con sus verdaderas esencias cósmicas para facilitar 
                sanación, transformación y despertar espiritual.
              </p>
            </div>
            <div className={styles.imageBox}>
              {/* Aquí iría una imagen */}
            </div>
          </div>
        </div>
      </section>

      {/* Especialidades */}
      <section className="section section-dark">
        <div className="container">
          <h2 style={{ color: 'white', textAlign: 'center', marginBottom: '3rem' }}>Mis Especialidades</h2>
          <div className="grid grid-3">
            <div className={styles.specialty}>
              <h3>Medicina Estelar</h3>
              <p>Sanación a través de conexión cósmica y energía universal</p>
            </div>
            <div className={styles.specialty}>
              <h3>Registros Akáshicos</h3>
              <p>Lectura de registros cósmicos para comprender tu evolución de alma</p>
            </div>
            <div className={styles.specialty}>
              <h3>Meditación Profunda</h3>
              <p>Técnicas de meditación para conectar con tu ser superior</p>
            </div>
            <div className={styles.specialty}>
              <h3>Sanación Energética</h3>
              <p>Limpieza y balance de chakras y campos energéticos</p>
            </div>
            <div className={styles.specialty}>
              <h3>Rituales de Transformación</h3>
              <p>Ceremonias diseñadas para cambios profundos en tu vida</p>
            </div>
            <div className={styles.specialty}>
              <h3>Consultoría Espiritual</h3>
              <p>Guía integral para tu camino espiritual y propósito de vida</p>
            </div>
          </div>
        </div>
      </section>

      {/* Formación */}
      <section className="section">
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Mi Formación</h2>
          <div className={styles.timeline}>
            <div className={styles.timelineItem}>
              <span className={styles.year}>2015</span>
              <h3>Inicio en Meditación y Espiritualidad</h3>
              <p>Comienzo formal del camino espiritual con maestros reconocidos</p>
            </div>
            <div className={styles.timelineItem}>
              <span className={styles.year}>2017</span>
              <h3>Certificación en Terapia Holística</h3>
              <p>Formación completa en técnicas de sanación energética</p>
            </div>
            <div className={styles.timelineItem}>
              <span className={styles.year}>2018</span>
              <h3>Maestría en Registros Akáshicos</h3>
              <p>Especialización en lectura e interpretación de registros cósmicos</p>
            </div>
            <div className={styles.timelineItem}>
              <span className={styles.year}>2020+</span>
              <h3>Práctica Privada y Formación Continua</h3>
              <p>Miles de sesiones completadas y formación en nuevas técnicas</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ textAlign: 'center' }}>
        <div className="container">
          <h2>¿Listo para conocer tu verdadera esencia?</h2>
          <p>Comparte conmigo tu historia y comencemos tu viaje de transformación</p>
          <a href="/contacto" className="btn btn-primary" style={{ marginTop: '1rem' }}>
            Agendar una Consulta
          </a>
        </div>
      </section>
    </>
  );
}
