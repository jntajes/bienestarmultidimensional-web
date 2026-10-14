interface Props {
  id: string;
  className?: string;
}

export default function ExampleLabel({ id, className = '' }: Props) {
  return (
    <span
      className={`inline-flex w-fit items-center rounded-full border border-amber-800/25 bg-amber-50 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-amber-950 ${className}`}
    >
      Texto de ejemplo · {id} · revisar
    </span>
  );
}