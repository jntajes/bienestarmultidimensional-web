import Reveal from '../Reveal';
import CTAButton from '../CTAButton';
import ImagePlaceholder from '../ImagePlaceholder';
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
              Descubrí
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-[2.6rem] font-semibold leading-[1.15] text-ink text-balance">
              Descubrí una nueva forma de{' '}
              <span className="font-accent text-mint text-4xl sm:text-5xl font-normal">
                bienestar
              </span>
            </h2>
            <p className="mt-6 text-lg text-gray-DEFAULT leading-relaxed">
              Texto de presentación pendiente. Una breve introducción a la
              filosofía y el enfoque del trabajo holístico.
            </p>
            <p className="mt-4 text-base text-gray-DEFAULT leading-relaxed">
              Texto de presentación pendiente. Un segundo párrafo que profundiza
              en la propuesta de valor y la mirada integral del acompañamiento.
            </p>
            <div className="mt-8">
              <CTAButton href="#contacto" variant="ghost">
                Quiero saber más →
              </CTAButton>
            </div>
          </Reveal>

          <Reveal
            className="lg:col-span-6 lg:order-1 relative"
            delay={150}
          >
            <ImagePlaceholder
              label="Imagen pendiente"
              ratio="portrait"
              className="shadow-lg shadow-mint/10"
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
