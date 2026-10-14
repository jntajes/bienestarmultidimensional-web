import { Heart, Compass, ShieldCheck, Leaf } from 'lucide-react';
import type { Difference } from '../../content';
import ExampleLabel from '../ExampleLabel';

interface Props {
  item: Difference;
}

const ICONS: Record<string, typeof Heart> = {
  heart: Heart,
  compass: Compass,
  shield: ShieldCheck,
  leaf: Leaf,
};

export default function DifferenceCard({ item }: Props) {
  const Icon = ICONS[item.icon] ?? Heart;
  return (
    <div className="flex flex-col items-start">
      <div className="w-12 h-12 rounded-full border border-mint/30 flex items-center justify-center text-mint mb-5">
        <Icon size={22} strokeWidth={1.4} />
      </div>
      <ExampleLabel id={item.exampleId} className="mb-3" />
      <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
      <p className="mt-2 text-sm text-gray-DEFAULT leading-relaxed">
        {item.description}
      </p>
    </div>
  );
}
