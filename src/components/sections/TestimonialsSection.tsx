import SectionTitle from '../SectionTitle';
import Reveal from '../Reveal';
import DecorativeShape from '../DecorativeShape';
import ExampleLabel from '../ExampleLabel';

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
            title={<>Voces compartidas con permiso</>}
            description="Las experiencias que se publiquen aquí deben ser reales y contar con autorización de cada persona."
          />
        </Reveal>

        <Reveal delay={150} className="mx-auto mt-14 max-w-3xl text-center">
          <ExampleLabel id="TEST-01" />
          <p className="mt-4 text-lg leading-relaxed text-ink">
            Este espacio queda reservado para sumar una experiencia real,
            compartida con autorización. No es una reseña de cliente.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
