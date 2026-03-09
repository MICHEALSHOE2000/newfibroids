import { motion } from "framer-motion";
import beforeFib from "@/assets/before-fib.jpg";

const stats = [
  { value: "15,000+", label: "Nigerian Women supported" },
  { value: "4.8★", label: "Average rating" },
  { value: "5,000+", label: "Cycles restored" },
  { value: "2,500+", label: "Avoided surgery" },
];

const testimonials = [
  {
    text: "I was told I would certainly need surgery because my fibroids were multiple and large. I was so scared. I started taking Utero Clear and within 2 months, my follow-up scan at EchoLab showed everything was clear! No more bloating, no more heavy bleeding.",
    name: "Aisha O.",
    location: "Lagos, Nigeria",
  },
  {
    text: "After 3 years of trying to conceive with blocked tubes and cysts, Utero Clear was my last hope. Today, I am 4 months pregnant. The pain is gone and my body feels brand new. Thank you Dr. Michael!",
    name: "Juliet Kelechi O.",
    location: "Kaduna, Nigeria",
  },
];

const moreReviews = [
  { text: "My heavy bleeding stopped after just 3 weeks. I can now go to work without worry. This is a God-send.", name: "Mrs. Ngozi", location: "Enugu, Nigeria" },
  { text: "Excellent customer service. The delivery to Abuja was fast and the product works as promised.", name: "Hadiza B.", location: "Abuja, Nigeria" },
  { text: "My scan results before and after are like day and night. The 3 bottles package is definitely the way to go.", name: "Patricia A.", location: "Port Harcourt, Nigeria" },
  { text: "Finally, something that works without hormones or side effects. Highly recommended for every Nigerian woman.", name: "Funmi S.", location: "Ibadan, Nigeria" },
];

const SocialProofSection = () => {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Why permanent */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 items-center mb-20"
        >
          <img src={beforeFib} alt="Root cause vs symptom control" className="rounded-2xl shadow-lg w-full" loading="lazy" />
          <div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">Why Utero Clear Is a Permanent Cure</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Most treatments only relieve pain temporarily. But Utero Clear works from the root by shrinking the fibroid, flushing it out, and balancing your hormones. That's why the result is permanent.
            </p>
            <ul className="mt-4 space-y-2">
              {["Shrinks fibroids naturally without chemicals", "Improves menstrual health and balances hormones", "Relieves bloating, cramps, and discomfort", "Restores fertility and overall wellness"].map((t, i) => (
                <li key={i} className="flex items-center gap-2 text-foreground text-sm">
                  <span className="text-primary">✓</span> {t}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl bg-primary p-8 md:p-12 text-center mb-16"
        >
          <span className="text-xs font-bold uppercase tracking-wider text-primary-foreground/70">Real Results</span>
          <h2 className="mt-2 font-display text-2xl md:text-3xl font-bold text-primary-foreground">Here's What the Results Show</h2>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-3xl md:text-4xl font-display font-bold text-primary-foreground">{s.value}</div>
                <div className="mt-1 text-sm text-primary-foreground/70">{s.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Featured testimonials */}
        <h2 className="text-center font-display text-2xl md:text-3xl font-bold text-foreground mb-8">What Women Are Saying</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="rounded-2xl border border-border bg-card p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <p className="text-foreground italic leading-relaxed text-sm">"{t.text}"</p>
              <div className="mt-4 font-semibold text-foreground">{t.name}</div>
              <div className="text-xs text-muted-foreground">{t.location}</div>
            </motion.div>
          ))}
        </div>

        {/* More reviews */}
        <h3 className="text-center font-display text-xl font-bold text-foreground mb-6">Customer Reviews</h3>
        <div className="grid sm:grid-cols-2 gap-4">
          {moreReviews.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ scale: 1.02 }}
              className="rounded-xl border border-border bg-muted/50 p-5 hover:bg-muted transition-colors"
            >
              <p className="text-sm text-foreground italic">"{r.text}"</p>
              <p className="mt-3 text-xs font-semibold text-foreground">{r.name} · <span className="text-muted-foreground">{r.location}</span></p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
