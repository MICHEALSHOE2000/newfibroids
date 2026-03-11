const items = [
  "Risk of heavy bleeding during or after surgery",
  "Possible scar tissue that may affect fertility goals",
  "Fibroids can still grow back after surgery",
  "Long recovery period with time away from work and family",
  "High cost of surgery, tests, medications, and hospital stay",
  "Anaesthesia and infection risks that many women fear",
];

const WhyBeyondSurgerySection = () => (
  <section className="bg-background py-12 md:py-20">
    <div className="container mx-auto max-w-5xl px-4">
      <h2 className="text-center font-display text-3xl font-bold md:text-4xl">Why surgery is not recommended</h2>
      <p className="mx-auto mt-3 max-w-3xl text-center text-sm text-muted-foreground md:text-base">
        Disadvantages of fibroid surgery many women consider before choosing their next step.
      </p>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {items.map((item) => (
          <div key={item} className="rounded-2xl border border-border bg-card p-5 shadow-sm">
            <p className="text-sm md:text-base">{item}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyBeyondSurgerySection;
