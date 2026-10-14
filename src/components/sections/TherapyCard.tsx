import { CONTACTS } from '../../content';
import type { Therapy } from '../../content';

interface Props {
  therapy: Therapy;
}

export default function TherapyCard({ therapy }: Props) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-mint/20 bg-cream shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-mint/40 hover:shadow-xl hover:shadow-mint/10">
      <div className="relative aspect-[4/5] overflow-hidden">
        <img
          src={therapy.image}
          alt={`Ilustración simbólica de ${therapy.name}`}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ink/35 to-transparent" />
      </div>
      <div className="flex flex-1 flex-col p-7">
        <h3 className="text-xl font-semibold text-ink">{therapy.name}</h3>
        <p className="mt-3 text-sm leading-relaxed text-gray-DEFAULT">{therapy.description}</p>
        {therapy.note && (
          <p className="mt-4 rounded-xl bg-mint-lighter/50 px-4 py-3 text-xs leading-relaxed text-gray-DEFAULT">
            {therapy.note}
          </p>
        )}
        <a
          href={CONTACTS.whatsappLink}
          className="mt-6 inline-flex items-center text-sm font-semibold text-mint transition-colors hover:text-mint-bright"
          aria-label={`${therapy.link} por WhatsApp`}
        >
          {therapy.link}
          <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
        </a>
      </div>
    </article>
  );
}
