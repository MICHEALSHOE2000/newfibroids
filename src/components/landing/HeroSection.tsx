import { motion } from "framer-motion";
import { Shield, FlaskConical, HeartPulse, Users } from "lucide-react";
import productImg from "@/assets/sos.jpeg";

const badges = [
  { icon: Shield, text: "NAFDAC Approved Formula" },
  { icon: FlaskConical, text: "Clinically Researched" },
  { icon: HeartPulse, text: "No Surgery · No Hormones" },
  { icon: Users, text: "Used by 15,000+ Women" },
];

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/30 pt-6 pb-16 md:pt-12 md:pb-24">
      {/* Decorative background blurs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
      
      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        {/* Trust strip */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 flex justify-center"
        >
          <span className="rounded-full bg-accent px-4 py-1.5 text-xs font-semibold text-accent-foreground tracking-wide">
            🛡️ Backed by a 30-Day Money-Back Guarantee
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-center font-display text-3xl md:text-5xl lg:text-[3.4rem] font-bold leading-tight text-foreground text-balance"
        >
          Shrink Fibroids, Clear Ovarian Cysts & Open Blocked Fallopian Tubes{" "}
          <span className="text-primary">Naturally — Without Surgery</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mx-auto mt-5 max-w-2xl text-center text-base md:text-lg text-muted-foreground font-body"
        >
          Discover a natural, non-surgical approach that many women have used to get rid of fibroids and ovarian cysts in 2 months and improve their overall reproductive health.
        </motion.p>

        {/* Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-8 flex flex-wrap justify-center gap-3"
        >
          {badges.map((b) => (
            <div
              key={b.text}
              className="flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground shadow-sm"
            >
              <b.icon className="h-4 w-4 text-primary" />
              {b.text}
            </div>
          ))}
        </motion.div>

        {/* Product image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-10 flex justify-center relative z-10"
        >
          <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full scale-150 -z-10 animate-pulse-glow" />
          <img
            src={productImg}
            alt="Utero Clear supplement bottles"
            className="w-full max-w-md rounded-2xl shadow-2xl animate-float border-4 border-white/10"
            loading="eager"
          />
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-8 flex flex-col items-center gap-3"
        >
          <a
            href="#order-form"
            className="animate-pulse-glow inline-flex items-center justify-center rounded-full bg-primary px-10 py-4 text-lg font-bold text-primary-foreground shadow-lg transition-transform hover:scale-105"
          >
            Order Utero Clear Now →
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=2348080305080&text=Hi%20Dr.%20Micheal,%20I%20want%20to%20order%20the%20Utero%20Clear."
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-primary font-semibold underline underline-offset-2 hover:text-primary/80"
          >
            💬 Talk To A Care Specialist
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
