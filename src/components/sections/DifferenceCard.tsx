import { Heart, Compass, ShieldCheck, Leaf } from 'lucide-react';
import type { Difference } from '../../content';

interface Props {
  item: Difference;
  number: number;
}

const ICONS: Record<string, typeof Heart> = {
  heart: Heart,
  compass: Compass,
  shield: ShieldCheck,
  leaf: Leaf,
};

export default function DifferenceCard({ item, number }: Props) {
  const Icon = ICONS[item.icon] ?? Heart;
  return (
    <article className="relative h-full overflow-hidden rounded-2xl border border-mint/20 bg-[#0d0a36]/55 p-6 shadow-lg shadow-black/10 transition duration-300 hover:-translate-y-1 hover:border-mint/50 sm:p-7">
      <span className="absolute right-5 top-3 font-serif text-6xl leading-none text-mint/10" aria-hidden="true">
        0{number}
      </span>
      <div className="relative flex items-start gap-5">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-mint/30 bg-mint/10 text-mint-bright">
          <Icon size={21} strokeWidth={1.5} />
        </div>
        <div>
          <h3 className="pr-8 text-lg font-semibold leading-snug text-ink">{item.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-gray-DEFAULT">
            {item.description}
          </p>
        </div>
      </div>
    </article>
  );
}
