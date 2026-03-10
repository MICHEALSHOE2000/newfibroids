import { Activity, Droplets, Flower2, Microscope, ArrowRight } from "lucide-react";
import PrimaryCTA from "./PrimaryCTA";

const causes = [
  { icon: Activity, title: "Hormonal imbalance" },
  { icon: Flower2, title: "Excess estrogen activity" },
  { icon: Droplets, title: "Inflammation" },
  { icon: Microscope, title: "Poor womb environment" },
];

const steps = [
  "Supports hormone balance",
  "Helps reduce internal conditions that support fibroid discomfort",
  "Promotes better womb health and symptom relief",
];

const HowItWorksSection = () => {
  return (
    <section className="bg-accent/30 py-12 md:py-20">
      <div className="container mx-auto max-w-6xl space-y-12 px-4">
        <div>
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">Why Fibroids May Keep Coming Back or Growing</h2>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground md:text-base">
            Many approaches focus only on short-term symptom control. But lasting progress may require supporting the internal conditions linked to fibroid growth and discomfort.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {causes.map((cause) => (
              <div key={cause.title} className="rounded-2xl border border-border bg-card p-5">
                <cause.icon className="h-6 w-6 text-primary" />
                <p className="mt-3 font-semibold text-foreground">{cause.title}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm font-medium text-foreground md:text-base">
            Utero Clear is designed to support a healthier internal environment so fibroids are less supported.
          </p>
          <div className="mt-6">
            <PrimaryCTA text="Check If Utero Clear Is Right For Me" />
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">How Utero Clear Works</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {steps.map((step, idx) => (
              <div key={step} className="rounded-2xl border border-border bg-background p-5">
                <p className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                  {idx + 1}
                </p>
                <p className="mt-4 text-sm text-foreground md:text-base">{step}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 flex items-center gap-2 text-sm text-primary">
            <ArrowRight className="h-4 w-4" />
            <span>Follow the protocol consistently and track your progress with your healthcare provider.</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
