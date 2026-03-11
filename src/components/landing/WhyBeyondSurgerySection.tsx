const items = [
  "Many women fear losing their womb or fertility after invasive procedures.",
  "Stories of repeat operations and recurring symptoms create serious anxiety.",
  "High surgery costs can push families into debt and emotional stress.",
  "Fear of complications, long recovery, and uncertainty makes many women search for another option.",
];

const WhyBeyondSurgerySection = () => (
  <section className="bg-background py-12 md:py-20">
    <div className="container mx-auto max-w-5xl px-4">
      <h2 className="text-center font-display text-3xl font-bold md:text-4xl">Why women are looking beyond surgery</h2>
      <p className="mx-auto mt-3 max-w-3xl text-center text-muted-foreground">
        For many women, this is not just about treatment — it is fear, family, finances, and the future.
      </p>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {items.map((item) => (
          <div key={item} className="rounded-2xl border border-destructive/20 bg-destructive/5 p-5 shadow-sm">
            <p className="text-sm md:text-base">{item}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyBeyondSurgerySection;
