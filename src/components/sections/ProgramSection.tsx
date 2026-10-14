import { ArrowUpRight, MessageCircle } from 'lucide-react';
import { CONTACTS } from '../../content';
import CTAButton from '../CTAButton';
import DecorativeShape from '../DecorativeShape';
import ExampleLabel from '../ExampleLabel';
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
            <ExampleLabel id="P-01" />
            <p className="mb-4 mt-7 text-xs font-semibold uppercase tracking-[0.22em] text-mint-muted">
              Programa guiado
            </p>
            <h2 className="text-3xl font-semibold leading-[1.15] text-ink text-balance sm:text-4xl">
              Volver al cuerpo, a tu propio ritmo
            </h2>

            <div className="mt-6">
              <ExampleLabel id="P-02" />
              <p className="mt-3 text-lg leading-relaxed text-gray-DEFAULT">
                Un recorrido grupal de exploración somática para hacer una
                pausa, observar tus sensaciones y sumar prácticas de registro a
                tu vida cotidiana.
              </p>
            </div>

            <div className="mt-6">
              <ExampleLabel id="P-03" />
              <p className="mt-3 text-base leading-relaxed text-gray-DEFAULT">
                Pensado como punto de partida para quienes quieran dedicar un
                tiempo a la autoobservación en un espacio acompañado y
                respetuoso de los ritmos personales.
              </p>
            </div>

            <div className="mt-8">
              <ExampleLabel id="P-06" />
              <p className="mt-3 text-sm leading-relaxed text-gray-DEFAULT">
                Fechas y arancel a confirmar. Escribime para consultar por la
                próxima edición y recibir información antes de decidir.
              </p>
            </div>

            <div className="mt-7">
              <ExampleLabel id="P-07" />
              <div className="mt-3">
                <CTAButton
                  href={CONTACTS.whatsappLink}
                  variant="primary"
                  className="w-full sm:w-auto"
                >
                  <MessageCircle size={18} />
                  Consultar por el programa
                  <ArrowUpRight size={16} />
                </CTAButton>
              </div>
            </div>

            <ExampleLabel id="P-08" className="mt-6" />
            <p className="mt-2 max-w-lg text-xs leading-relaxed text-gray-DEFAULT">
              Esta propuesta de muestra no reemplaza atención médica,
              psicológica ni servicios de emergencia.
            </p>
          </Reveal>

          <Reveal className="lg:col-span-7 lg:pt-8" delay={150}>
            <ExampleLabel id="P-04" />
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

            <div className="mt-10 border-t border-mint/20 pt-7">
              <ExampleLabel id="P-05" />
              <dl className="mt-4 grid gap-x-8 gap-y-5 sm:grid-cols-2">
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-mint-muted">
                    Duración de muestra
                  </dt>
                  <dd className="mt-1 text-sm text-ink">
                    4 semanas · 1 encuentro por semana
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-mint-muted">
                    Modalidad de muestra
                  </dt>
                  <dd className="mt-1 text-sm text-ink">
                    Encuentros grupales en línea
                  </dd>
                </div>
                <div className="sm:col-span-2">
                  <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-mint-muted">
                    Material de muestra
                  </dt>
                  <dd className="mt-1 text-sm text-ink">
                    Guía de registro personal para acompañar las prácticas
                  </dd>
                </div>
              </dl>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}