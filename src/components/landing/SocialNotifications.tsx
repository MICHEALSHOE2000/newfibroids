import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag } from "lucide-react";

const names = [
  { name: "Adebola O.", loc: "Lagos" },
  { name: "Chinwe E.", loc: "Port Harcourt" },
  { name: "Amina B.", loc: "Abuja" },
  { name: "Ngozi P.", loc: "Enugu" },
  { name: "Funke S.", loc: "Ibadan" },
  { name: "Hadiza M.", loc: "Kano" },
  { name: "Blessing U.", loc: "Benin City" },
  { name: "Zainab R.", loc: "Kaduna" },
  { name: "Mrs. Okoro", loc: "Asaba" },
  { name: "Titi L.", loc: "Abeokuta" },
];

const SocialNotifications = () => {
  const [current, setCurrent] = useState<number | null>(null);

  useEffect(() => {
    let idx = 0;
    const show = () => {
      setCurrent(idx);
      setTimeout(() => setCurrent(null), 4000);
      idx = (idx + 1) % names.length;
    };
    const id = setInterval(show, 12000);
    const initial = setTimeout(show, 8000);
    return () => { clearInterval(id); clearTimeout(initial); };
  }, []);

  return (
    <div className="fixed bottom-20 md:bottom-6 left-4 z-40">
      <AnimatePresence>
        {current !== null && (
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            className="flex items-center gap-3 rounded-xl bg-card border border-border shadow-lg px-4 py-3 max-w-[280px]"
          >
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent">
              <ShoppingBag className="h-4 w-4 text-primary" />
            </div>
            <div>
              <p className="text-xs font-body font-semibold text-foreground">
                {names[current].name} from {names[current].loc}
              </p>
              <p className="text-[11px] text-muted-foreground font-body">
                just bought {Math.random() > 0.5 ? "2 Bottles" : "the Full Treatment Plan"} · {Math.floor(Math.random() * 15) + 2} min ago
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SocialNotifications;
