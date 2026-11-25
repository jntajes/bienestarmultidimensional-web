import { DIFFERENCES } from '../../content';
import SectionTitle from '../SectionTitle';
import DifferenceCard from './DifferenceCard';
import Reveal from '../Reveal';

export default function DifferenceSection() {
  return (
    <section id="diferencial" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <Reveal>
          <SectionTitle
            eyebrow="Puntos Importantes"
            title={<>Los no negociables de este Universo Multidimensional.</>}
            description={
              'Para todo lo que construimos existen pilares de apoyo… en toda receta hay ingredientes que no pueden faltar.\n\nEn este universo que te comparto hay ciertos aspectos fundamentales, que si querés subirte a mi nave y trabajar conmigo, tenés que conocer.'
            }
          />
        </Reveal>

        <div className="mx-auto mt-14 grid max-w-5xl gap-4 md:grid-cols-2">
          {DIFFERENCES.map((item, i) => (
            <Reveal
              key={item.id}
              delay={i * 80}
              className={i === DIFFERENCES.length - 1 ? 'md:col-span-2 md:mx-auto md:w-[calc(50%-0.5rem)]' : ''}
            >
              <DifferenceCard item={item} number={i + 1} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
