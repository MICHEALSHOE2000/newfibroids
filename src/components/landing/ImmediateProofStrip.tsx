const stats = [
  "Real women, real stories",
  "A non-surgical path many women are now considering",
  "From fear and frustration to hope",
  "Shared by women who wanted another option",
];

const ImmediateProofStrip = () => (
  <section className="border-y border-border bg-muted/40 py-4">
    <div className="container mx-auto max-w-6xl px-4">
      <div className="grid gap-2 text-center md:grid-cols-4">
        {stats.map((s) => (
          <p key={s} className="text-xs font-semibold uppercase tracking-wide text-foreground/80 md:text-sm">
            {s}
          </p>
        ))}
      </div>
    </div>
  </section>
);

export default ImmediateProofStrip;
