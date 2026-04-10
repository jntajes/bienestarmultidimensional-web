import Head from 'next/head';
import { useState } from 'react';
import styles from '../styles/Contacto.module.css';

export default function Contacto() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    setLoading(true);
    // Netlify Forms maneja el envío automáticamente
    // El formulario tiene el atributo netlify que lo conecta
  };

  return (
    <>
      <Head>
        <title>Contacto - Medicina Estelar</title>
        <meta name="description" content="Contáctame para agendar una sesión de medicina estelar" />
      </Head>

      {/* Header */}
      <section className={styles.header}>
        <div className="container">
          <h1>Contacto</h1>
          <p>Conectemos y comencemos tu transformación</p>
        </div>
      </section>

      {/* Contacto */}
      <section className="section">
        <div className="container">
          <div className="grid grid-2">
            {/* Info */}
            <div>
              <h2>¿Cómo Puedo Ayudarte?</h2>
              <p>
                Completa el formulario con tus datos y cuéntame sobre ti. Responderé tan pronto 
                como sea posible para coordinar una consulta inicial gratuita.
              </p>

              <div className={styles.infoBox}>
                <h3>📍 Ubicación</h3>
                <p>Buenos Aires, Argentina</p>
              </div>

              <div className={styles.infoBox}>
                <h3>⏱ Disponibilidad</h3>
                <p>Lunes a Viernes: 10:00 - 19:00 hs</p>
              </div>

              <div className={styles.infoBox}>
                <h3>📧 Email</h3>
                <p>contacto@medicinaestelar.com</p>
              </div>

              <div className={styles.testimonial}>
                <p>
                  <strong>💫 "La sesión cambió mi vida. Sentí una conexión profunda que no había experimentado antes."</strong>
                </p>
                <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>- María G.</p>
              </div>
            </div>

            {/* Formulario */}
            <div>
              <form
                name="contacto"
                method="POST"
                data-netlify="true"
                onSubmit={handleSubmit}
                className={styles.form}
              >
                <input type="hidden" name="form-name" value="contacto" />

                <div className={styles.formGroup}>
                  <label htmlFor="nombre">Nombre Completo *</label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    required
                    placeholder="Tu nombre"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="tu@email.com"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="telefono">Teléfono</label>
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    placeholder="+54 9 11 1234-5678"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="servicio">Servicio de Interés *</label>
                  <select id="servicio" name="servicio" required>
                    <option value="">Elige un servicio...</option>
                    <option value="Sesión Individual">Sesión Individual</option>
                    <option value="Registros Akáshicos">Registros Akáshicos</option>
                    <option value="Meditaciones Guiadas">Meditaciones Guiadas</option>
                    <option value="Puente de Luz">Puente de Luz</option>
                    <option value="Sintonía del Hogar">Sintonía del Hogar</option>
                    <option value="Conexión con la Diosa">Conexión con la Diosa</option>
                    <option value="Consultoría">Consultoría / Otras</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="modalidad">Modalidad Preferida *</label>
                  <select id="modalidad" name="modalidad" required>
                    <option value="">Elige una modalidad...</option>
                    <option value="Presencial">Presencial</option>
                    <option value="Online">Online</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="mensaje">Mensaje / Consulta *</label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    required
                    placeholder="Cuéntame sobre ti y qué esperas de la sesión..."
                    rows="5"
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }}>
                  Enviar Consulta
                </button>

                <p style={{ fontSize: '0.85rem', color: '#999', marginTop: '1rem', textAlign: 'center' }}>
                  * Campos obligatorios
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section-dark">
        <div className="container">
          <h2 style={{ color: 'white', textAlign: 'center', marginBottom: '2rem' }}>Preguntas Frecuentes</h2>
          <div className="grid grid-2">
            <div>
              <h3 style={{ color: 'white' }}>¿Cuál es el costo de una sesión?</h3>
              <p>Los precios varían según el tipo de sesión. Consulta directamente para conocer tarifas actualizadas.</p>
            </div>
            <div>
              <h3 style={{ color: 'white' }}>¿Puedo hacer una sesión online?</h3>
              <p>Sí, todas las sesiones pueden realizarse online con igual efectividad que presencialmente.</p>
            </div>
            <div>
              <h3 style={{ color: 'white' }}>¿Cuánto duran las sesiones?</h3>
              <p>Varían de 45 a 120 minutos según el tipo. Los detalles están en la sección de Servicios.</p>
            </div>
            <div>
              <h3 style={{ color: 'white' }}>¿Necesito experiencia previa?</h3>
              <p>No, las sesiones son para todos sin importar tu experiencia en espiritualidad.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
