import CTAButton from '../CTAButton';
import DecorativeShape from '../DecorativeShape';

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden"
    >
      {/* Background accents */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-mint-lighter/50 rounded-full blur-3xl -translate-y-1/3 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] bg-mint-soft/30 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />
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
              Un espacio diseñado para abordar la reprogramación desde la energía hasta lo somático, permitiéndote reescribir tu identidad y transformar la manera en que vives.
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
              src={`${import.meta.env.BASE_URL}assets/therapist-hero.webp`}
              alt="Retrato de la terapeuta en un espacio de bienestar"
              className="aspect-[3/4] w-full rounded-2xl object-cover shadow-xl shadow-mint/10"
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
