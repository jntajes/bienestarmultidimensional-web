import { ArrowUpRight, Play, Sparkles } from 'lucide-react';
import { GALAXIES } from '../../content';
import SectionTitle from '../SectionTitle';
import Reveal from '../Reveal';

export default function TherapiesSection() {
  return (
    <section id="terapias" className="relative overflow-hidden py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_15%,rgba(28,66,139,0.28),transparent_26rem),radial-gradient(circle_at_80%_70%,rgba(13,10,54,0.95),transparent_30rem)]" />

      <div className="mx-auto max-w-content px-5 sm:px-8">
        <Reveal>
          <SectionTitle
            eyebrow="Mis servicios"
            title={<>Este universo tiene muchas galaxias: Una para cada momento de tu vida.</>}
            description="Todas para sembrar plenitud y reconectar con tu poder. Vos elegís por donde empezar (y si no sabés bien, hace click acá y contame lo que necesitas que te ayudo con las coordenadas)."
          />
        </Reveal>
      </div>

      <div className="mx-auto mt-14 max-w-[1440px] space-y-5 px-3 sm:px-5">
        {GALAXIES.map((galaxy, index) => (
          <Reveal key={galaxy.id} delay={index * 100}>
            <article className="group relative isolate overflow-hidden rounded-[2rem] border border-mint/25 bg-ink/60 shadow-2xl shadow-black/20">
              <img
                src={galaxy.image}
                alt=""
                className="absolute inset-0 -z-20 h-full w-full object-cover opacity-20 transition duration-700 group-hover:scale-105 group-hover:opacity-30"
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#000000]/95 via-[#0d0a36]/92 to-[#0d0a36]/75" />

              <div className="grid gap-8 p-7 sm:p-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-center lg:gap-16 lg:px-14 lg:py-12">
                <div>
                  <div className="mb-6 flex items-center gap-3 text-mint-bright">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-mint-bright/30 bg-mint/15 text-sm font-semibold">
                      0{index + 1}
                    </span>
                    <Sparkles size={18} aria-hidden="true" />
                  </div>
                  <h3 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">
                    {galaxy.name}
                  </h3>
                  <p className="mt-4 max-w-md text-base leading-relaxed text-white/75">
                    {galaxy.description}
                  </p>
                </div>

                <ul className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                  {galaxy.services.map((service) => (
                    <li key={service.id} className={galaxy.services.length === 1 ? 'sm:col-span-2 xl:col-span-3' : ''}>
                      <a
                        href={service.href}
                        target={service.external ? '_blank' : undefined}
                        rel={service.external ? 'noreferrer' : undefined}
                        className="flex min-h-20 h-full items-center justify-between gap-4 rounded-2xl border border-white/15 bg-white/[0.07] px-5 py-4 text-sm font-semibold leading-snug text-white transition duration-300 hover:border-mint-bright/70 hover:bg-mint/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-mint-bright"
                      >
                        <span className="flex items-center gap-3">
                          {service.external && <Play size={15} className="shrink-0 text-mint-bright" fill="currentColor" aria-hidden="true" />}
                          {service.name}
                        </span>
                        <ArrowUpRight size={18} className="shrink-0 text-mint-bright" aria-hidden="true" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <p className="mx-auto mt-10 max-w-3xl px-5 text-center text-sm leading-relaxed text-gray-DEFAULT sm:px-8">
        Estos acompañamientos son espacios de exploración personal y espiritual; no reemplazan atención médica, psicológica ni servicios de emergencia.
      </p>
    </section>
  );
}
