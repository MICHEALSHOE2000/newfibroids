import { motion } from "framer-motion";
import fibroidStat from "@/assets/fibroid-stat.jpg";
import warningFibroid from "@/assets/warning-fibroid.jpg";

const painPoints = [
  "Heavy bleeding that won't stop",
  "A big stomach that makes people ask if you're pregnant",
  "Fibroids that keep growing every time you do a scan",
  "Pain from ovarian cysts",
  "Blocked fallopian tubes",
  "Repeated miscarriage",
  'Doctors telling you "only surgery can solve this"',
];

const PainPointsSection = () => {
  return (
    <section className="bg-card py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center font-display text-2xl md:text-4xl font-bold text-foreground"
        >
          If you are here, chances are you are tired…
        </motion.h2>

        <motion.ul
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="mt-8 space-y-3 max-w-xl mx-auto"
        >
          {painPoints.map((p, i) => (
            <li key={i} className="flex items-start gap-3 text-foreground">
              <span className="mt-1 flex-shrink-0 h-2 w-2 rounded-full bg-destructive" />
              <span className="text-base md:text-lg">{p}</span>
            </li>
          ))}
        </motion.ul>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-xl shadow-lg"
          >
            <img src={fibroidStat} alt="Fibroid statistics" className="w-full h-auto" loading="lazy" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <h3 className="font-display text-xl md:text-2xl font-bold text-destructive mb-3">
              DO NOT LET IT RESULT TO THIS
            </h3>
            <img src={warningFibroid} alt="Fibroid warning" className="rounded-xl shadow-lg w-full h-auto" loading="lazy" />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 rounded-2xl bg-accent/50 p-8 text-center"
        >
          <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-3">You're Not Alone</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            We understand how painful and frustrating fibroids can be. From painful sex to chronic bloating, you may have tried several medications without success. You're not alone—and you're not without options.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PainPointsSection;
