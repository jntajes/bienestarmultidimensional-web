import Reveal from '../Reveal';
import DecorativeShape from '../DecorativeShape';

export default function DiscoverSection() {
  return (
    <section id="descubri" className="relative py-24 sm:py-32 overflow-hidden">
      <DecorativeShape
        variant="blob"
        className="absolute top-20 left-0 w-64 h-64 text-mint/20 hidden lg:block"
      />

      <div className="mx-auto max-w-content px-5 sm:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <Reveal className="lg:col-span-6 lg:order-2">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-mint-muted mb-5">
              Sobre mí
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-[2.6rem] font-semibold leading-[1.15] text-ink text-balance">
              Una presencia humana para acompañar tu{' '}
              <span className="font-accent text-mint text-4xl sm:text-5xl font-normal">
                proceso
              </span>
            </h2>
            <p className="mt-6 text-lg text-gray-DEFAULT leading-relaxed">
              Soy Jess, creadora de Humana Estelar. Acompaño procesos personales desde una escucha atenta del cuerpo, la emoción y las dimensiones sutiles que también nos habitan.
            </p>
            <p className="mt-3 text-base text-gray-DEFAULT leading-relaxed">
              Mi intención es ofrecer un espacio cuidado, sin recetas prefabricadas, donde puedas volver a vos, explorar lo que hoy pide atención y encontrar tu propia forma de avanzar.
            </p>
          </Reveal>

          <Reveal
            className="lg:col-span-6 lg:order-1 relative"
            delay={150}
          >
            <img
              src={`${import.meta.env.BASE_URL}assets/therapist-hero.webp`}
              alt="Jess en un espacio de bienestar"
              className="aspect-[3/4] w-full rounded-2xl object-cover shadow-lg shadow-mint/10"
            />
            <DecorativeShape
              variant="arc"
              className="absolute -bottom-6 -right-6 w-28 h-28 text-mint/40"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
