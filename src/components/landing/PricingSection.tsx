import PrimaryCTA from "./PrimaryCTA";

const PricingSection = () => {
  return (
    <section className="bg-accent/20 py-12 md:py-20">
      <div className="container mx-auto max-w-6xl px-4">
        <h2 className="text-center text-3xl font-bold text-foreground md:text-4xl">Compare Your Options</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-6">
            <h3 className="text-xl font-semibold text-foreground">Traditional surgery</h3>
            <ul className="mt-4 list-inside list-disc space-y-2 text-sm text-muted-foreground md:text-base">
              <li>Can feel expensive for many families</li>
              <li>Requires recovery time away from routine</li>
              <li>Often comes with fear and stress</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-primary/30 bg-primary/5 p-6">
            <h3 className="text-xl font-semibold text-foreground">Utero Clear approach</h3>
            <ul className="mt-4 list-inside list-disc space-y-2 text-sm text-muted-foreground md:text-base">
              <li>Natural support protocol</li>
              <li>Used from home</li>
              <li>Lower barrier to start</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center">
          <PrimaryCTA text="Check If Utero Clear Is Right For Me" />
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
