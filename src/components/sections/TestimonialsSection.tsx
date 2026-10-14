import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { TESTIMONIALS } from '../../content';
import SectionTitle from '../SectionTitle';
import Reveal from '../Reveal';
import DecorativeShape from '../DecorativeShape';

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const count = TESTIMONIALS.length;

  const go = (dir: number) => setIndex((i) => (i + dir + count) % count);

  const current = TESTIMONIALS[index];

  return (
    <section
      id="testimonios"
      className="relative py-24 sm:py-32 bg-mint-lighter/40 overflow-hidden"
    >
      <DecorativeShape
        variant="blob"
        className="absolute bottom-10 left-0 w-72 h-72 text-mint/20 hidden lg:block"
      />

      <div className="mx-auto max-w-content px-5 sm:px-8">
        <Reveal>
          <SectionTitle eyebrow="Testimonios" title={<>Lo que dicen quienes confiaron</>} />
        </Reveal>

        <Reveal delay={150} className="mt-14 max-w-3xl mx-auto">
          <figure className="relative rounded-3xl bg-cream border border-gray-light/60 px-6 sm:px-12 py-10 sm:py-14">
            <span className="absolute top-6 left-6 sm:left-10 text-6xl font-accent text-mint/30 leading-none select-none">
              "
            </span>
            <blockquote className="relative text-lg sm:text-xl text-ink leading-relaxed text-center font-light">
              {current.quote}
            </blockquote>
            <figcaption className="mt-8 flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full bg-mint-soft/40 border border-mint/30 flex items-center justify-center text-sm font-semibold text-mint-muted">
                {current.name.charAt(0)}
              </div>
              <div className="text-left">
                <p className="text-sm font-semibold text-ink">{current.name}</p>
                <p className="text-xs text-gray-DEFAULT">{current.role}</p>
              </div>
            </figcaption>
          </figure>

          <div className="mt-8 flex items-center justify-center gap-6">
            <button
              onClick={() => go(-1)}
              className="w-11 h-11 rounded-full border border-mint/30 flex items-center justify-center text-mint transition-colors hover:bg-mint hover:text-white"
              aria-label="Anterior"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {TESTIMONIALS.map((t, i) => (
                <button
                  key={t.id}
                  onClick={() => setIndex(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === index ? 'w-8 bg-mint' : 'w-2 bg-mint/30'
                  }`}
                  aria-label={`Testimonio ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={() => go(1)}
              className="w-11 h-11 rounded-full border border-mint/30 flex items-center justify-center text-mint transition-colors hover:bg-mint hover:text-white"
              aria-label="Siguiente"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
