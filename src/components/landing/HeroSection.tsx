import { CheckCircle2 } from "lucide-react";
import productImg from "@/assets/product.jpeg";
import PrimaryCTA from "./PrimaryCTA";

const heroPainPoints = [
  "Heavy bleeding during your period",
  "Pelvic pain or lower abdominal discomfort",
  "Fear of surgery",
  "Frequent urination or pressure from fibroids",
];

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-b from-accent/40 via-background to-background py-12 md:py-20">
      <div className="container mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-2 md:items-center">
        <div>
          <p className="inline-flex rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
            Natural fibroid support for Nigerian women
          </p>
          <h1 className="mt-4 text-balance font-display text-4xl font-bold leading-tight text-foreground md:text-5xl">
            Shrink Fibroids Naturally Without Surgery
          </h1>
          <p className="mt-4 text-base text-muted-foreground md:text-lg">
            Reduce Heavy Bleeding, Pelvic Pain, and Fibroid Discomfort in as Little as 10–30 Days Using the Utero Clear Hormone Balance Method
          </p>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
            Tired of heavy bleeding, fibroid pain, bloating, and being told surgery is your only option? Utero Clear is a natural herbal protocol designed to help support hormone balance, womb health, and fibroid symptom relief.
          </p>

          <ul className="mt-6 space-y-3">
            {heroPainPoints.map((point) => (
              <li key={point} className="flex items-start gap-3 text-sm text-foreground md:text-base">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span>{point}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <PrimaryCTA text="Start My Fibroid Recovery Today" />
          </div>
        </div>

        <div className="mx-auto w-full max-w-md rounded-3xl border border-border bg-card p-4 shadow-xl">
          <img
            src={productImg}
            alt="Utero Clear herbal treatment package"
            className="h-auto w-full rounded-2xl object-cover"
            loading="eager"
          />
          <p className="px-2 pt-4 text-center text-sm text-muted-foreground">
            Non-surgical herbal support protocol designed for hormone and womb health.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
