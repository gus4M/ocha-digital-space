interface Props {
  eyebrow: string;
  title: string;
  description?: string;
}

export function SectionHeading({ eyebrow, title, description }: Props) {
  return (
    <div className="reveal-up mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
      <div className="max-w-2xl">
        <h2 className="mb-4 font-mono text-[12px] font-bold uppercase tracking-[0.3em] text-brand-deep">
          {eyebrow}
        </h2>
        <h3 className="reveal-up text-4xl font-bold tracking-tight md:text-5xl">{title}</h3>
      </div>
      {description && (
        <p className="reveal-up max-w-sm font-mono text-xs leading-relaxed text-foreground/40">
          {description}
        </p>
      )}
    </div>
  );
}
