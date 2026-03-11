import { motion } from "framer-motion";
import { Check, ShieldCheck, Star } from "lucide-react";

const valueStack = [
  { item: "Fibroid treatment consultation", value: "₦30,000" },
  { item: "Herbal hormone therapy", value: "₦45,000" },
  { item: "Womb detox protocol", value: "₦20,000" },
  { item: "Fibroid diet guide", value: "₦10,000" },
];

const packagePlans = [
  { name: "1 Bottle", price: "₦35,000", note: "Starter plan" },
  { name: "2 Bottles", price: "₦50,000", note: "Most selected" },
  { name: "3 Bottles", price: "₦70,000", note: "Best value plan" },
];

const PricingSection = () => {
  return (
    <section className="relative overflow-hidden bg-card py-10 md:py-24">
      <div className="absolute left-0 top-0 h-1/2 w-full -translate-y-24 -skew-y-6 bg-primary/5" />

      <div className="container relative z-10 mx-auto max-w-5xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 text-center lg:mb-16"
        >
          <span className="text-sm font-black uppercase tracking-widest text-primary/60">YOUR INVESTMENT</span>
          <h2 className="mt-4 font-display text-3xl font-bold text-foreground md:text-5xl">Choose Your Treatment Plan</h2>
        </motion.div>

        <div className="grid items-stretch gap-6 lg:grid-cols-2 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-border bg-background p-8 shadow-sm md:p-10"
          >
            <h3 className="mb-8 border-b border-border pb-4 text-xl font-bold">If you were to buy everything separately:</h3>
            <div className="space-y-6">
              {valueStack.map((v, i) => (
                <div key={i} className="flex items-center justify-between text-base sm:text-lg">
                  <span className="text-muted-foreground">{v.item}</span>
                  <span className="font-mono font-bold text-foreground">{v.value}</span>
                </div>
              ))}
              <div className="flex items-center justify-between border-t-2 border-dashed border-border pt-6">
                <span className="text-xl font-black uppercase text-foreground">Total value:</span>
                <span className="text-2xl font-black text-foreground opacity-50 line-through decoration-destructive decoration-4">₦105,000</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100 }}
            className="relative flex flex-col justify-center overflow-hidden rounded-[2.5rem] border-4 border-white/20 bg-primary p-6 text-primary-foreground shadow-2xl sm:p-10 md:p-12"
          >
            <div className="absolute right-6 top-6 rotate-12">
              <Star className="h-16 w-16 fill-current text-yellow-400 opacity-20" />
            </div>

            <p className="mb-4 text-xl font-bold italic opacity-90">Select your bottle plan:</p>
            <div className="mb-8 space-y-3">
              {packagePlans.map((plan) => (
                <div key={plan.name} className="rounded-2xl border border-white/25 bg-white/10 p-4">
                  <div className="flex items-center justify-between">
                    <p className="text-lg font-black">{plan.name}</p>
                    <p className="text-2xl font-black">{plan.price}</p>
                  </div>
                  <p className="text-sm opacity-85">{plan.note}</p>
                </div>
              ))}
            </div>

            <ul className="mb-10 space-y-4">
              {["Full Herbal Protocol", "Immediate Access to Guides", "Personal Support"].map((f, i) => (
                <li key={i} className="flex items-center gap-3 text-lg font-bold">
                  <Check className="h-6 w-6 rounded-full bg-white/20 p-1 text-white" /> {f}
                </li>
              ))}
            </ul>

            <a
              href="#order-form"
              className="animate-pulse-glow rounded-2xl bg-white py-6 text-center text-xl font-black text-primary shadow-[0_20px_40px_rgba(0,0,0,0.2)] transition-all hover:scale-105 active:scale-95"
            >
              Start My Recovery Journey
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-flex flex-col items-center gap-4 rounded-2xl border border-border bg-muted/50 px-8 py-4 md:flex-row">
            <div className="flex items-center gap-2 font-bold text-foreground">
              <span className="text-xl">🚚</span> FREE Delivery Nationwide
            </div>
            <div className="hidden h-4 w-px bg-border md:block" />
            <div className="flex items-center gap-2 font-bold text-primary">
              <span className="text-xl">✅</span> Pay on Delivery (POD) available
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mt-20 max-w-4xl rounded-[2rem] border-2 border-dashed border-primary/30 bg-accent/20 p-8 text-center md:p-12"
        >
          <div className="mb-6 flex justify-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
              <ShieldCheck className="h-12 w-12 text-primary" />
            </div>
          </div>
          <h3 className="mb-4 font-display text-2xl font-bold text-foreground md:text-3xl">30-Day Satisfaction Guarantee</h3>
          <p className="text-lg leading-relaxed text-muted-foreground">
            If you are not satisfied with your progress, simply contact us within 30 days. We stand behind our protocol because we've seen it work for thousands of Nigerian women.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
