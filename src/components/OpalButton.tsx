import { ReactNode } from 'react';

type Variant = 'primary' | 'secondary';

interface OpalButtonProps {
  variant?: Variant;
  children: ReactNode;
  onClick?: () => void;
  href?: string;
}

const baseClasses =
  'inline-flex items-center justify-center h-12 px-6 rounded-full font-sans font-medium text-base transition-all duration-300 focus-visible-opal';

const variantClasses: Record<Variant, string> = {
  primary: 'bg-paper text-ink opal-glow hover:scale-[1.02]',
  secondary:
    'bg-transparent text-paper opal-border hover:bg-paper hover:text-ink',
};

export default function OpalButton({
  variant = 'primary',
  children,
  onClick,
  href,
}: OpalButtonProps) {
  const className = `${baseClasses} ${variantClasses[variant]}`;

  if (href) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={className}>
      {children}
    </button>
  );
}
