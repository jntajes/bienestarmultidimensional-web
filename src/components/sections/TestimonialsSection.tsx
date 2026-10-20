import SectionTitle from '../SectionTitle';
import Reveal from '../Reveal';
import DecorativeShape from '../DecorativeShape';

export default function TestimonialsSection() {
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
          <SectionTitle
            eyebrow="Experiencias"
            title={<>Voces compartidas con cuidado</>}
            description="Un espacio reservado para historias reales, compartidas de forma voluntaria y con consentimiento."
          />
        </Reveal>

        <Reveal delay={150} className="mx-auto mt-14 max-w-3xl">
          <div className="rounded-2xl border border-mint/20 bg-cream p-8 text-center shadow-sm sm:p-10">
            <p className="font-serif text-2xl leading-snug text-ink sm:text-3xl">
              “Cada recorrido merece ser contado desde la voz de quien lo vive.”
            </p>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-gray">
              Próximamente, este espacio reunirá experiencias auténticas para
              acompañarte a conocer el enfoque desde distintas vivencias.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
