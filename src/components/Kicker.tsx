import { ReactNode } from 'react';

export default function Kicker({
  children,
  center = false,
}: {
  children: ReactNode;
  center?: boolean;
}) {
  return (
    <p
      className={`inline-flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.2em] text-tertiary ${
        center ? 'justify-center' : ''
      }`}
    >
      <span className="opal-dot" aria-hidden="true" />
      {children}
    </p>
  );
}
