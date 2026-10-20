import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { THERAPIES } from '../../content';
import SectionTitle from '../SectionTitle';
import TherapyCard from './TherapyCard';
import Reveal from '../Reveal';

export default function TherapiesSection() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const goToSlide = (index: number) => {
    const nextIndex = (index + THERAPIES.length) % THERAPIES.length;
    const carousel = carouselRef.current;
    const slide = carousel?.children[nextIndex] as HTMLElement | undefined;

    if (carousel && slide) {
      carousel.scrollTo({
        left: slide.offsetLeft - carousel.offsetLeft,
        behavior: 'smooth',
      });
      setActiveSlide(nextIndex);
    }
  };

  const handleCarouselScroll = () => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const slides = Array.from(carousel.children) as HTMLElement[];
    const closestIndex = slides.reduce(
      (closest, slide, index) =>
        Math.abs(slide.offsetLeft - carousel.scrollLeft) <
        Math.abs(slides[closest].offsetLeft - carousel.scrollLeft)
          ? index
          : closest,
      0,
    );
    setActiveSlide(closestIndex);
  };

  return (
    <section id="terapias" className="py-24 sm:py-32 bg-mint-lighter/40">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <Reveal>
          <SectionTitle
            eyebrow="Mis servicios"
            title={<>Una propuesta para cada momento de tu camino</>}
            description="A través de la canalización y un enfoque multidimensional que considera todos tus cuerpos, generamos un espacio de trabajo conjunto para que tu transformación sea profunda y alineada con tu momento actual."
          />
        </Reveal>

        <div className="mt-10 lg:hidden">
          <div className="mb-5 flex items-center justify-between gap-4 px-1">
            <p className="text-sm text-gray-DEFAULT">Deslizá para conocer los acompañamientos</p>
            <div className="flex shrink-0 gap-2">
              <button
                type="button"
                onClick={() => goToSlide(activeSlide - 1)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-mint/30 text-mint transition-colors hover:bg-mint hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-mint"
                aria-label="Acompañamiento anterior"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                type="button"
                onClick={() => goToSlide(activeSlide + 1)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-mint/30 text-mint transition-colors hover:bg-mint hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-mint"
                aria-label="Siguiente acompañamiento"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          <div
            ref={carouselRef}
            onScroll={handleCarouselScroll}
            className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 sm:-mx-8 sm:px-8"
            role="region"
            aria-roledescription="carrusel"
            aria-label="Acompañamientos disponibles"
          >
            {THERAPIES.map((therapy, index) => (
              <div
                key={therapy.id}
                className="w-[86%] shrink-0 snap-center sm:w-[62%]"
                role="group"
                aria-roledescription="diapositiva"
                aria-label={`${index + 1} de ${THERAPIES.length}: ${therapy.name}`}
              >
                <TherapyCard therapy={therapy} />
              </div>
            ))}
          </div>

          <div className="mt-2 flex justify-center gap-2" aria-label="Indicador de acompañamientos">
            {THERAPIES.map((therapy, index) => (
              <button
                key={therapy.id}
                type="button"
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-mint ${
                  index === activeSlide ? 'w-7 bg-mint' : 'w-2 bg-mint/30'
                }`}
                aria-label={`Ir a ${therapy.name}`}
                aria-current={index === activeSlide ? 'true' : undefined}
              />
            ))}
          </div>
        </div>

        <div className="mt-14 hidden gap-6 lg:grid lg:grid-cols-3">
          {THERAPIES.map((therapy, i) => (
            <Reveal
              key={therapy.id}
              delay={i * 100}
              className={i === THERAPIES.length - 1 ? 'lg:col-start-2' : ''}
            >
              <TherapyCard therapy={therapy} />
            </Reveal>
          ))}
        </div>
        <p className="mx-auto mt-10 max-w-3xl text-center text-sm leading-relaxed text-gray-DEFAULT">
          Estos acompañamientos son espacios de exploración personal y espiritual; no reemplazan atención médica, psicológica ni servicios de emergencia.
        </p>
      </div>
    </section>
  );
}
