import CTAButton from '../CTAButton';
import DecorativeShape from '../DecorativeShape';
import Reveal from '../Reveal';

const steps = [
  {
    title: 'Hacer una pausa',
    description: 'Registrar cómo llegás y qué necesitás explorar.',
  },
  {
    title: 'Observar tus sensaciones',
    description: 'Probar ejercicios sencillos de atención y registro corporal.',
  },
  {
    title: 'Reconocer tus recursos',
    description: 'Identificar prácticas que quieras llevar a tu rutina.',
  },
  {
    title: 'Integrar el recorrido',
    description: 'Cerrar con una reflexión personal y próximos pasos posibles.',
  },
];

export default function ProgramSection() {
  return (
    <section
      id="programa"
      className="relative overflow-hidden bg-cream py-24 sm:py-32"
    >
      <DecorativeShape
        variant="arc"
        className="absolute -right-10 top-12 hidden h-40 w-40 text-mint/20 lg:block"
      />

      <div className="mx-auto max-w-content px-5 sm:px-8">
        <div className="grid items-start gap-14 lg:grid-cols-12 lg:gap-20">
          <Reveal className="lg:col-span-5">
            <p className="mb-4 mt-7 text-xs font-semibold uppercase tracking-[0.22em] text-mint-muted">
              Descubrí lo nuevo
            </p>
            <h2 className="text-3xl font-semibold leading-[1.15] text-ink text-balance sm:text-4xl">
              Reprogramarte: el camino somático de tus creencias
            </h2>

            <div className="mt-6">
              <p className="mt-3 text-lg leading-relaxed text-gray-DEFAULT">
                Este programa grupal viene a transformarte en la investigadora de tus propios límites.
              </p>
            </div>

            <div className="mt-6">
              <p className="mt-3 text-base leading-relaxed text-gray-DEFAULT">
                A través del juego, la meditación y el trabajo energético, desprogramaremos esas creencias que limitan tu potencial.
              </p>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-7 lg:pt-8" delay={150}>
            <h3 className="mt-4 text-2xl font-semibold text-ink">
              Un recorrido posible, paso a paso
            </h3>
            <ol className="mt-8 border-l border-mint/30 pl-6 sm:pl-8">
              {steps.map((step, index) => (
                <li key={step.title} className="relative pb-8 last:pb-0">
                  <span className="absolute -left-[2.12rem] top-0 flex h-8 w-8 items-center justify-center rounded-full border border-mint/30 bg-cream text-xs font-semibold text-mint sm:-left-[2.62rem]">
                    {index + 1}
                  </span>
                  <h4 className="text-base font-semibold text-ink">
                    {step.title}
                  </h4>
                  <p className="mt-1 text-sm leading-relaxed text-gray-DEFAULT">
                    {step.description}
                  </p>
                </li>
              ))}
            </ol>
            <div className="mt-8">
              <CTAButton href="#programa" variant="ghost" disabled>
                Conocé el programa →
              </CTAButton>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
