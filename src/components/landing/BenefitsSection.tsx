import { CheckCircle2 } from "lucide-react";

const items = [
  "Women experiencing heavy bleeding linked to fibroids",
  "Women with pelvic discomfort or pressure",
  "Women looking for a non-surgical support option",
  "Women who want to improve womb and hormone health naturally",
];

const BenefitsSection = () => {
  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto max-w-4xl px-4">
        <h2 className="text-3xl font-bold text-foreground md:text-4xl">Who Utero Clear May Be Right For</h2>
        <div className="mt-6 rounded-2xl border border-border bg-card p-6 md:p-8">
          <ul className="space-y-4">
            {items.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-foreground md:text-base">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
