import { AlertCircle } from "lucide-react";

const painPoints = [
  "Heavy monthly bleeding that leaves you weak",
  "Pelvic pressure, lower back pain, and bloating",
  "Fear after hearing surgery may be your only option",
  "Embarrassment from visible swelling",
  "Worry about fertility, confidence, and marriage",
];

const PainPointsSection = () => (
  <section className="bg-rose-50/50 py-12 md:py-20">
    <div className="container mx-auto max-w-5xl px-4">
      <div className="text-center">
        <h2 className="font-display text-3xl font-bold md:text-4xl">Dear Nigerian Woman,</h2>
        <p className="mt-2 text-muted-foreground">If this is your reality, you are not alone.</p>
      </div>

      <div className="mt-8 grid gap-3 rounded-3xl border border-border bg-white p-6 shadow-sm">
        {painPoints.map((point) => (
          <div key={point} className="flex items-start gap-3 rounded-xl bg-muted/40 p-3">
            <AlertCircle className="mt-0.5 h-4 w-4 text-destructive" />
            <p className="text-sm md:text-base">{point}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PainPointsSection;
