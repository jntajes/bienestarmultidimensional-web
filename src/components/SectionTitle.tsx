import type { ReactNode } from 'react';

interface Props {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export default function SectionTitle({
  eyebrow,
  title,
  description,
  align = 'center',
  className = '',
}: Props) {
  return (
    <div
      className={`${align === 'center' ? 'mx-auto text-center' : 'text-left'} max-w-2xl ${className}`}
    >
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-mint-muted mb-4">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-[2.6rem] font-semibold leading-[1.15] text-ink text-balance">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base sm:text-lg text-gray-DEFAULT leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
