import { ReactNode } from 'react';

interface OpalCardProps {
  children: ReactNode;
  animated?: boolean;
  className?: string;
}

export default function OpalCard({
  children,
  animated = false,
  className = '',
}: OpalCardProps) {
  const glow = animated
    ? 'opal-glow-anim opal-border'
    : 'border border-white/10 hover:opal-glow hover:opal-border';

  return (
    <div
      className={`relative bg-smoke text-paper p-8 rounded-2xl transition-all duration-300 ${glow} ${className}`}
    >
      {children}
    </div>
  );
}
