interface Props {
  variant?: 'blob' | 'wave' | 'arc' | 'leaf' | 'dots';
  className?: string;
  color?: string;
}

export default function DecorativeShape({
  variant = 'blob',
  className = '',
  color = 'currentColor',
}: Props) {
  if (variant === 'blob') {
    return (
      <svg
        viewBox="0 0 200 200"
        className={className}
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M40 70C30 90 35 120 55 140C75 160 110 165 135 150C160 135 170 100 160 75C150 50 120 35 90 40C65 44 48 52 40 70Z"
          stroke={color}
          strokeWidth="1"
          opacity="0.5"
        />
      </svg>
    );
  }

  if (variant === 'wave') {
    return (
      <svg
        viewBox="0 0 1200 80"
        preserveAspectRatio="none"
        className={className}
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M0 40C150 70 300 10 450 30C600 50 750 70 900 40C1050 10 1150 30 1200 40"
          stroke={color}
          strokeWidth="1"
          opacity="0.4"
        />
      </svg>
    );
  }

  if (variant === 'arc') {
    return (
      <svg
        viewBox="0 0 200 200"
        className={className}
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M20 150C40 80 100 40 180 50"
          stroke={color}
          strokeWidth="1"
          opacity="0.4"
        />
        <path
          d="M30 170C55 110 115 70 190 80"
          stroke={color}
          strokeWidth="1"
          opacity="0.25"
        />
      </svg>
    );
  }

  if (variant === 'leaf') {
    return (
      <svg
        viewBox="0 0 100 100"
        className={className}
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M50 90C50 90 20 60 30 35C40 10 70 15 75 40C80 65 50 90 50 90Z"
          stroke={color}
          strokeWidth="1"
          opacity="0.45"
        />
        <path
          d="M50 88C50 88 50 55 45 35"
          stroke={color}
          strokeWidth="0.8"
          opacity="0.3"
        />
      </svg>
    );
  }

  // dots
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      {Array.from({ length: 5 }).map((_, row) =>
        Array.from({ length: 5 }).map((_, col) => (
          <circle
            key={`${row}-${col}`}
            cx={10 + col * 20}
            cy={10 + row * 20}
            r="1.5"
            fill={color}
            opacity="0.3"
          />
        )),
      )}
    </svg>
  );
}
