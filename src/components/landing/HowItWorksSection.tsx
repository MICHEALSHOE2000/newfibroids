import { Leaf, HeartPulse, ShieldCheck } from "lucide-react";

const steps = [
  {
    icon: Leaf,
    title: "How Utero Clear supports the body naturally",
    text: "Built around daily herbal and nutrition support designed to help hormonal balance and overall womb wellness.",
  },
  {
    icon: HeartPulse,
    title: "Consistency and routine",
    text: "Women who share progress usually mention consistent use, improved routines, and symptom tracking.",
  },
  {
    icon: ShieldCheck,
    title: "A serious non-surgical support approach",
    text: "A non-surgical path many women are now considering while monitoring feedback with their healthcare providers.",
  },
];

const HowItWorksSection = () => (
  <section className="bg-white py-12 md:py-20">
    <div className="container mx-auto max-w-6xl px-4">
      <div className="mb-8 text-center">
        <h2 className="font-display text-3xl font-bold md:text-4xl">How Utero Clear supports the body naturally</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {steps.map(({ icon: Icon, title, text }) => (
          <div key={title} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <Icon className="h-6 w-6 text-primary" />
            <h3 className="mt-3 font-semibold">{title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
