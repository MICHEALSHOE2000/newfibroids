const items = [
  "Surgery can feel emotionally and financially overwhelming",
  "Many women want to try supportive options first",
  "Some are looking for a path that supports hormones and lifestyle",
  "Women are asking better questions and looking for real proof",
];

const WhyBeyondSurgerySection = () => (
  <section className="bg-background py-12 md:py-20">
    <div className="container mx-auto max-w-5xl px-4">
      <h2 className="text-center font-display text-3xl font-bold md:text-4xl">Why women are looking beyond surgery</h2>
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
