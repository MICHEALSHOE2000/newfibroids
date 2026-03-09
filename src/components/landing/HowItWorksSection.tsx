import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Nutrients Enter the Bloodstream",
    desc: "Once taken, the herbal nutrients are absorbed into your bloodstream and directed straight to the womb and reproductive organs.",
  },
  {
    num: "02",
    title: "Targets Fibroids Directly",
    desc: "The formula targets fibroid tissues, gradually cutting off their blood supply — causing them to shrink naturally over time.",
  },
  {
    num: "03",
    title: "Cleanses the Womb",
    desc: "As fibroids break down, dead tissues, toxins, and waste are flushed out naturally through the body's detox pathways.",
  },
  {
    num: "04",
    title: "Restores Hormonal Balance",
    desc: "Hormones are regulated to stop new fibroids from forming and to support a healthy, fertile womb environment.",
  },
];

const timeline = [
  { period: "Day 1 – 10", title: "Visible Changes Begin", desc: "Reduced bloating, lighter menstrual flow, less pelvic pain, and improved comfort." },
  { period: "Day 11 – 20", title: "Healing Accelerates", desc: "Fibroids begin shrinking, hormones stabilize, energy returns, and cycles become more regular." },
  { period: "Day 21 – 30", title: "Complete Transformation", desc: "Fibroids significantly reduced or dissolved, tubes clearer, womb healthier, and body prepared for conception." },
];

const HowItWorksSection = () => {
  return (
    <section className="bg-card py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center">
          <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground">
            How Utero Clear Works to Permanently Shrink & Eliminate Fibroids
          </h2>
          <p className="mt-3 text-muted-foreground">Your Journey to Healing — step by step</p>
        </motion.div>

        {/* Steps */}
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative rounded-2xl border border-border bg-background p-6 shadow-sm"
            >
              <span className="text-4xl font-display font-bold text-primary/20">{s.num}</span>
              <h3 className="mt-2 font-display text-lg font-bold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-center font-display text-xl md:text-2xl font-bold text-foreground mb-8">
            What Most Women Experience
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {timeline.map((t, i) => (
              <div key={i} className="rounded-2xl bg-accent/40 p-6 border border-primary/10">
                <span className="inline-block rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">
                  {t.period}
                </span>
                <h4 className="mt-3 font-display text-lg font-bold text-foreground">{t.title}</h4>
                <p className="mt-2 text-sm text-muted-foreground">{t.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
