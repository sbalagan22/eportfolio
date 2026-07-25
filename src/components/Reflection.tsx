export interface ReflectionContent {
  competency: string;
  retell: string;
  relate: string;
  reflect: string;
}

export default function Reflection({
  competency,
  retell,
  relate,
  reflect,
}: ReflectionContent) {
  const parts = [
    { label: 'Retell', body: retell },
    { label: 'Relate', body: relate },
    { label: 'Reflect', body: reflect },
  ];

  return (
    <div className="mt-8 border-t border-line pt-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-tertiary">
          Reflection
        </p>
        <span className="inline-flex items-center gap-2 rounded-full opal-border bg-card px-3.5 py-1.5 font-mono text-xs text-secondary">
          <span className="opal-dot" aria-hidden="true" />
          {competency}
        </span>
      </div>
      <dl className="mt-5 space-y-4">
        {parts.map((part) => (
          <div key={part.label}>
            <dt className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-opal-blue">
              {part.label}
            </dt>
            <dd className="mt-1 leading-[1.7] text-secondary">{part.body}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
