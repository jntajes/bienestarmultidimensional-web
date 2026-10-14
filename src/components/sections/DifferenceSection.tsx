import { DIFFERENCES } from '../../content';
import SectionTitle from '../SectionTitle';
import DifferenceCard from './DifferenceCard';
import Reveal from '../Reveal';
import DecorativeShape from '../DecorativeShape';

export default function DifferenceSection() {
  return (
    <section id="diferencial" className="relative py-24 sm:py-32 overflow-hidden">
      <DecorativeShape
        variant="dots"
        className="absolute top-10 right-10 w-24 h-24 text-mint/30 hidden lg:block"
      />

      <div className="mx-auto max-w-content px-5 sm:px-8">
        <Reveal>
          <SectionTitle
            eyebrow="Diferencial"
            title={<>¿Qué lo hace diferente?</>}
            description="No es solamente una terapia; es un espacio pensado para vos."
          />
        </Reveal>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {DIFFERENCES.map((item, i) => (
            <Reveal key={item.id} delay={i * 100}>
              <DifferenceCard item={item} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
