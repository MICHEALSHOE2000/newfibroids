import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";

const plans = [
  {
    name: "Starter Plan",
    subtitle: "Symptom relief & early support",
    price: "₦35,000",
    bottles: "1 Bottle",
    features: ["Helps reduce pain & heavy bleeding", "Supports hormonal balance", "Best for mild or newly detected fibroids"],
    popular: false,
  },
  {
    name: "Reduction Plan",
    subtitle: "Shrink fibroids progressively",
    price: "₦65,000",
    bottles: "2 Bottles",
    features: ["Actively shrinks fibroids", "Improves scan results", "Recommended for fibroids above 3 cm"],
    popular: true,
  },
  {
    name: "Full Resolution Plan",
    subtitle: "Complete treatment & prevent regrowth",
    price: "₦90,000",
    bottles: "3 Bottles",
    features: ["Full fibroid resolution protocol", "Prevents regrowth long-term", "Best for large or multiple fibroids"],
    popular: false,
  },
];

const PricingSection = () => {
  return (
    <section className="bg-card py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">✅ Treatment Plans</span>
          <h2 className="mt-2 font-display text-2xl md:text-4xl font-bold text-foreground">
            Choose the plan that matches your condition
          </h2>
        </motion.div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {plans.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.03, y: -5 }}
              className={`relative rounded-2xl border-2 p-6 shadow-sm transition-all hover:shadow-xl ${
                p.popular ? "border-primary bg-primary/5 ring-4 ring-primary/10" : "border-border bg-background"
              }`}
            >
              {p.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="flex items-center gap-1 rounded-full bg-secondary px-4 py-1 text-xs font-bold text-secondary-foreground">
                    <Star className="h-3 w-3" /> Most Recommended
                  </span>
                </div>
              )}
              <h3 className="font-display text-xl font-bold text-foreground">{p.name}</h3>
              <p className="text-sm text-muted-foreground">{p.subtitle}</p>
              <div className="mt-4">
                <span className="text-4xl font-display font-bold text-foreground">{p.price}</span>
                <span className="ml-2 text-sm text-muted-foreground">{p.bottles}</span>
              </div>
              <ul className="mt-6 space-y-3">
                {p.features.map((f, fi) => (
                  <li key={fi} className="flex items-start gap-2 text-sm text-foreground">
                    <Check className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#order-form"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("package")?.focus();
                  const selectElement = document.getElementById("package") as HTMLSelectElement;
                  if (selectElement) {
                     const optionToSelect = Array.from(selectElement.options).find(opt => opt.value.includes(p.name.split(' ')[0]));
                     if(optionToSelect) selectElement.value = optionToSelect.value;
                  }
                  document.getElementById("order-form")?.scrollIntoView({ behavior: "smooth" });
                }}
                className={`mt-6 block w-full rounded-xl py-3 text-center font-bold transition-all hover:scale-105 active:scale-95 ${
                  p.popular
                    ? "bg-primary text-primary-foreground shadow-lg hover:shadow-primary/25 animate-pulse-glow"
                    : "bg-accent text-accent-foreground hover:bg-accent/80"
                }`}
              >
                Select Plan
              </a>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 text-center text-sm text-muted-foreground"
        >
          ⚠️ <strong>Medical Guidance:</strong> Most women with fibroids above <strong>3 cm</strong> require <strong>2–3 bottles</strong> for optimal and lasting results.
        </motion.p>
      </div>
    </section>
  );
};

export default PricingSection;
