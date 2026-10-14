import Reveal from '../Reveal';
import CTAButton from '../CTAButton';
import ImagePlaceholder from '../ImagePlaceholder';
import DecorativeShape from '../DecorativeShape';
import ExampleLabel from '../ExampleLabel';

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
            <ExampleLabel id="DESC-01" className="mt-6" />
            <p className="mt-3 text-lg text-gray-DEFAULT leading-relaxed">
              Cada encuentro ofrece un espacio para hacer una pausa, observar
              tus sensaciones y explorar recursos desde una mirada corporal,
              emocional y espiritual.
            </p>
            <ExampleLabel id="DESC-02" className="mt-5" />
            <p className="mt-3 text-base text-gray-DEFAULT leading-relaxed">
              El proceso se construye con escucha y a tu ritmo. Podés comenzar
              por una sesión individual o conocer el programa grupal de muestra.
            </p>
            <div className="mt-8">
              <CTAButton href="#programa" variant="ghost">
                Conocer el programa →
              </CTAButton>
            </div>
          </Reveal>

          <Reveal
            className="lg:col-span-6 lg:order-1 relative"
            delay={150}
          >
            <ImagePlaceholder
              label="EJEMPLO DESC-03 · imagen por definir"
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
