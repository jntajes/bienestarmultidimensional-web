interface Props {
  label: string;
  ratio?: 'portrait' | 'landscape' | 'square' | 'wide';
  className?: string;
}

const ratioClasses = {
  portrait: 'aspect-[3/4]',
  landscape: 'aspect-[4/3]',
  square: 'aspect-square',
  wide: 'aspect-[16/10]',
};

export default function ImagePlaceholder({
  label,
  ratio = 'landscape',
  className = '',
}: Props) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl bg-gradient-to-br from-mint-lighter via-mint-soft/40 to-mint-soft/20 ${ratioClasses[ratio]} ${className}`}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-sm font-medium text-mint-muted/80 tracking-wide">
          {label}
        </span>
      </div>
      <div className="absolute inset-0 border border-mint/15 rounded-2xl" />
      <svg
        className="absolute -bottom-6 -right-6 w-32 h-32 text-mint/10"
        viewBox="0 0 100 100"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="0.8" />
        <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="0.8" />
      </svg>
    </div>
  );
}
