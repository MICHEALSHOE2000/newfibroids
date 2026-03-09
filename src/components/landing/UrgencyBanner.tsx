import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const UrgencyBanner = () => {
  const [timeLeft, setTimeLeft] = useState({ hours: 2, minutes: 47, seconds: 33 });
  const [stock, setStock] = useState(7);

  useEffect(() => {
    const stored = sessionStorage.getItem("utero-countdown-end");
    let endTime: number;
    if (stored) {
      endTime = parseInt(stored);
    } else {
      endTime = Date.now() + (2 * 60 * 60 + 47 * 60 + 33) * 1000;
      sessionStorage.setItem("utero-countdown-end", endTime.toString());
    }

    const tick = () => {
      const diff = Math.max(0, endTime - Date.now());
      const h = Math.floor(diff / 3600000);
      const m = Math.floor((diff % 3600000) / 60000);
      const s = Math.floor((diff % 60000) / 1000);
      setTimeLeft({ hours: h, minutes: m, seconds: s });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const pad = (n: number) => n.toString().padStart(2, "0");

  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="bg-destructive text-destructive-foreground py-2 px-4 text-center text-[10px] sm:text-sm font-body font-semibold flex flex-col sm:flex-row justify-center items-center gap-1.5 sm:gap-4"
    >
      <div className="flex items-center gap-1.5 flex-wrap justify-center">
        <span className="hidden sm:inline">🔥 FLASH SALE: </span>
        <span>Save 25% — Ends in{" "}</span>
        <span className="inline-flex gap-0.5 font-mono font-bold tabular-nums">
          {pad(timeLeft.hours)}:{pad(timeLeft.minutes)}:{pad(timeLeft.seconds)}
        </span>
      </div>

      <div className="flex items-center gap-2 text-[10px] sm:text-xs opacity-90">
        <span className="bg-white/20 px-2 py-0.5 rounded-full">🚚 Shipping fee applies</span>
        <span className="bg-white/20 px-2 py-0.5 rounded-full">✅ Pay on Delivery</span>
      </div>
      <div className="hidden lg:inline text-xs border-l border-white/30 pl-4">
        Only <strong>{stock} bottles</strong> left!
      </div>
    </motion.div>
  );

};

export default UrgencyBanner;
