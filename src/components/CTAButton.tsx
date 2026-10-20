import type { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  href: string;
  variant?: 'primary' | 'secondary' | 'ghost';
  className?: string;
  disabled?: boolean;
}

export default function CTAButton({
  children,
  href,
  variant = 'primary',
  className = '',
  disabled = false,
}: Props) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-mint-bright focus-visible:ring-offset-2';

  const variants = {
    primary:
      'bg-mint text-white hover:bg-mint-bright hover:shadow-lg hover:shadow-mint/20 active:scale-[0.98]',
    secondary:
      'border border-mint/40 text-ink bg-transparent hover:bg-mint-lighter hover:border-mint active:scale-[0.98]',
    ghost:
      'text-mint bg-transparent hover:text-mint-bright hover:underline underline-offset-4',
  };

  if (disabled) {
    return (
      <span
        aria-disabled="true"
        className={`${base} ${variants[variant]} cursor-default ${className}`}
      >
        {children}
      </span>
    );
  }

  return (
    <a href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </a>
  );
}
