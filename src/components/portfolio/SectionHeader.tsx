export function SectionHeader({
  num,
  eyebrow,
  title,
}: {
  num: string;
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="reveal mb-16">
      <div className="flex items-center gap-3">
        <span className="font-mono text-xs text-primary">§ {num}</span>
        <span className="h-px flex-1 bg-rule" />
        <span className="eyebrow">{eyebrow}</span>
      </div>
      <h2 className="mt-6 font-serif text-4xl leading-tight tracking-tight sm:text-5xl">
        {title}
      </h2>
    </div>
  );
}
