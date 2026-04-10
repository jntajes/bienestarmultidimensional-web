import Head from 'next/head';
import styles from '../styles/Servicios.module.css';

export default function Servicios() {
  const services = [
    {
      id: 1,
      icon: '🌟',
      title: 'Sesiones Individuales',
      description: 'Sesiones personalizadas donde conectamos con tu energía cósmica para identificar bloqueos y facilitar la sanación profunda.',
      duration: '60 minutos',
      price: 'Consultar'
    },
    {
      id: 2,
      icon: '📖',
      title: 'Registros Akáshicos',
      description: 'Acceso a tus registros cósmicos para comprender tu propósito de vida, lecciones de alma y camino evolutivo.',
      duration: '90 minutos',
      price: 'Consultar'
    },
    {
      id: 3,
      icon: '🌙',
      title: 'Meditaciones Guiadas',
      description: 'Experiencias meditativas profundas para elevar tu vibración, conectar con tu ser superior y alcanzar paz interior.',
      duration: '45 minutos',
      price: 'Consultar'
    },
    {
      id: 4,
      icon: '🌉',
      title: 'Puente de Luz',
      description: 'Técnica avanzada que crea un puente energético entre tu yo terrestre y tu esencia cósmica para transformación total.',
      duration: '120 minutos',
      price: 'Consultar'
    },
    {
      id: 5,
      icon: '🎵',
      title: 'Sintonía del Hogar',
      description: 'Limpieza y armonización energética de tu espacio para crear un ambiente de paz, protección y elevación espiritual.',
      duration: 'Variable',
      price: 'Consultar'
    },
    {
      id: 6,
      icon: '💫',
      title: 'Conexión con la Diosa',
      description: 'Ritual de reconexión con la energía divina femenina para fortalecer tu intuición, poder y presencia.',
      duration: '75 minutos',
      price: 'Consultar'
    }
  ];

  return (
    <>
      <Head>
        <title>Servicios - Medicina Estelar</title>
        <meta name="description" content="Descubre nuestros servicios de terapia holística y medicina estelar" />
      </Head>

      {/* Header */}
      <section className={styles.header}>
        <div className="container">
          <h1>Nuestros Servicios</h1>
          <p>Transforma tu vida a través de técnicas probadas de sanación estelar</p>
        </div>
      </section>

      {/* Servicios Grid */}
      <section className="section">
        <div className="container">
          <div className="grid grid-2">
            {services.map(service => (
              <div key={service.id} className={styles.serviceCard}>
                <div className={styles.icon}>{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <div className={styles.details}>
                  <span className={styles.duration}>⏱ {service.duration}</span>
                  <span className={styles.price}>{service.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Extra */}
      <section className="section section-dark">
        <div className="container">
          <h2 style={{ color: 'white', textAlign: 'center', marginBottom: '2rem' }}>Modalidades de Atención</h2>
          <div className="grid grid-2">
            <div>
              <h3 style={{ color: 'white' }}>🏠 Presencial</h3>
              <p>
                Sesiones en persona donde la energía fluye naturalmente. Ideal para aquellos que buscan 
                una conexión más profunda y ritual completo.
              </p>
            </div>
            <div>
              <h3 style={{ color: 'white' }}>💻 Online</h3>
              <p>
                Sesiones virtuales que conectan a través de la energía digital. Igualmente efectivas 
                para quienes prefieren comodidad desde casa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ textAlign: 'center' }}>
        <div className="container">
          <h2>¿Cuál es el servicio que necesitas?</h2>
          <p>Contáctame para agendar tu sesión o resolver tus dudas</p>
          <a href="/contacto" className="btn btn-primary" style={{ marginTop: '1rem' }}>
            Agendar Ahora
          </a>
        </div>
      </section>
    </>
  );
}
