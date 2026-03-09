import { motion } from "framer-motion";
import { Droplets, Target, Sparkles, Stethoscope, Heart, Zap, Activity, Scale, Battery, ShieldCheck, Baby } from "lucide-react";

const benefits = [
  { icon: Droplets, text: "Supports healthy blood circulation through blood vessel dilation" },
  { icon: Target, text: "Dissolve or shrink all types and sizes of fibroids" },
  { icon: Sparkles, text: "Remove ovarian cyst inside and outside of the womb" },
  { icon: Stethoscope, text: "Unblock fallopian tubes for improved fertility" },
  { icon: Heart, text: "Ease bloating, pressure, cramps, and pains" },
  { icon: Activity, text: "Normalize frequency and volume of the menstrual period" },
  { icon: Zap, text: "Reduce and/or eliminate blood clots" },
  { icon: Scale, text: "Balance hormones and internal secretions" },
  { icon: Battery, text: "Improve energy level" },
  { icon: ShieldCheck, text: "Supports strong, healthy uterus and enhances healthy ovary function" },
  { icon: Baby, text: "Improve chances of natural conception" },
];

const BenefitsSection = () => {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">Introducing</span>
          <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold text-foreground">Utero Clear</h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            This all-natural blend has helped thousands of women shrink fibroids without surgery. Backed by traditional eastern herbology and modern refinement, it targets the root causes and relieves symptoms fast.
          </p>
        </motion.div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ scale: 1.02, y: -2 }}
              className="group flex items-start gap-4 rounded-xl border border-border/50 bg-card p-5 shadow-sm hover:shadow-md hover:border-primary/30 transition-all"
            >
              <div className="flex-shrink-0 rounded-xl bg-accent p-3 group-hover:bg-primary transition-colors">
                <b.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <p className="text-sm text-foreground/90 leading-relaxed font-medium mt-0.5">{b.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
