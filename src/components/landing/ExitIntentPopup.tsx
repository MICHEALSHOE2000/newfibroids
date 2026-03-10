import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";

const ExitIntentPopup = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const dismissed = sessionStorage.getItem("utero-exit-dismissed");
    if (dismissed) return;

    let popupReady = false;

    const handler = (e: MouseEvent) => {
      if (popupReady && e.clientY < 10) {
        setShow(true);
        document.removeEventListener("mouseout", handler);
      }
    };

    // Delay popup triggers until visitor has spent at least 30 seconds on page.
    const timer = setTimeout(() => {
      popupReady = true;
      if (!sessionStorage.getItem("utero-exit-dismissed")) {
        setShow(true);
      }
    }, 30000);

    document.addEventListener("mouseout", handler);
    return () => {
      document.removeEventListener("mouseout", handler);
      clearTimeout(timer);
    };
  }, []);

  const dismiss = () => {
    setShow(false);
    sessionStorage.setItem("utero-exit-dismissed", "1");
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/60 backdrop-blur-sm p-4"
          onClick={dismiss}
        >
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.85, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md rounded-2xl bg-card border border-border p-6 md:p-8 shadow-2xl text-center"
          >
            <button onClick={dismiss} className="absolute top-3 right-3 text-muted-foreground hover:text-foreground">
              <X className="h-5 w-5" />
            </button>

            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent">
              <Gift className="h-8 w-8 text-primary" />
            </div>

            <h3 className="font-display text-xl md:text-2xl font-bold text-foreground">Wait! Don't Leave Empty-Handed</h3>
            <p className="mt-2 text-sm text-muted-foreground font-body">
              Get a <span className="font-bold text-primary">FREE Fibroid Recovery Consultation</span> plus{" "}
              <span className="font-bold text-primary">FREE Nationwide Delivery</span> when you order in the next 15 minutes.
            </p>

            <Button asChild className="mt-6 w-full rounded-xl py-6 text-base font-bold animate-pulse-glow">
              <a href="#order-form" onClick={dismiss}>
                Claim My Free Consultation →
              </a>
            </Button>

            <button onClick={dismiss} className="mt-3 text-xs text-muted-foreground underline font-body">
              No thanks, I'll pay full price
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ExitIntentPopup;
