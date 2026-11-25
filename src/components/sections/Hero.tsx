import CTAButton from '../CTAButton';
import DecorativeShape from '../DecorativeShape';

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden"
    >
      {/* Background accents */}
      <div className="star-field absolute inset-0 -z-10">
        <div className="absolute right-0 top-0 h-[40rem] w-[40rem] -translate-y-1/3 translate-x-1/4 rounded-full bg-mint/15 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[30rem] w-[30rem] -translate-x-1/4 translate-y-1/3 rounded-full bg-[#0d0a36] blur-3xl" />
      </div>

      <DecorativeShape
        variant="arc"
        className="absolute top-32 right-10 w-40 h-40 text-mint/30 hidden lg:block"
      />

      <div className="mx-auto max-w-content px-5 sm:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="animate-fade-up">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-mint-muted mb-6">
              Jess ★ Humana Estelar
            </p>
            <h1 className="max-w-xl text-4xl sm:text-5xl lg:text-[3.5rem] font-semibold leading-[1.08] text-ink text-balance">
              Bienvenidx a mi{' '}
              <span className="font-accent text-mint text-[3.25rem] sm:text-5xl lg:text-6xl font-normal">
                universo
              </span>{' '}
              multidimensional
            </h1>
            <p className="mt-7 text-lg text-gray-DEFAULT leading-relaxed max-w-lg">
              Un espacio diseñado para acompañar tu transformación hacia una vida en plenitud, de forma liviana, divertida y simple.
              <br />
              Porque el autoconocimiento no tiene que ser solemne.
              <br />
              Porque lo que importa es no dejar tu poder en manos de alguien más.
            </p>
            <div className="mt-9">
              <div className="flex flex-col gap-4 sm:flex-row">
              <CTAButton href="#terapias" variant="primary">
                Conocé mis servicios
              </CTAButton>
              <CTAButton href="#contacto" variant="secondary">
                Contáctame
              </CTAButton>
              </div>
            </div>
          </div>

          <div
            className="relative animate-fade-in"
            style={{ animationDelay: '200ms' }}
          >
            <img
              src={`${import.meta.env.BASE_URL}assets/jess-hero-estelar.png`}
              alt="Retrato de Jess en un entorno estelar"
              className="aspect-[5/6] w-full rounded-[2rem] object-cover shadow-2xl shadow-black/40"
              style={{ filter: 'brightness(1.04) contrast(1.06) saturate(0.92)' }}
            />
            <div
              className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-ink/5 via-transparent to-mint/15 mix-blend-soft-light"
              aria-hidden="true"
            />
            <DecorativeShape
              variant="leaf"
              className="absolute -bottom-8 -left-8 w-24 h-24 text-mint"
            />
            <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full border border-mint/30" />
          </div>
        </div>
      </div>
    </section>
  );
}
