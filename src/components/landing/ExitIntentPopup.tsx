import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ExitIntentPopup = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("utero-popup-dismissed")) return;

    const handleMouseOut = (event: MouseEvent) => {
      if (window.innerWidth >= 768 && event.clientY <= 8) {
        setOpen(true);
      }
    };

    const mobileTimer = setTimeout(() => {
      if (window.innerWidth < 768) {
        setOpen(true);
      }
    }, 18000);

    document.addEventListener("mouseout", handleMouseOut);
    return () => {
      clearTimeout(mobileTimer);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  const close = () => {
    setOpen(false);
    sessionStorage.setItem("utero-popup-dismissed", "1");
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/55 p-4"
          onClick={close}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md rounded-2xl border border-border bg-card p-6"
          >
            <button aria-label="Close popup" className="absolute right-4 top-4" onClick={close}>
              <X className="h-5 w-5 text-muted-foreground" />
            </button>
            <h3 className="text-xl font-bold text-foreground">Before you go, get the free fibroid warning signs guide.</h3>
            <p className="mt-2 text-sm text-muted-foreground">Quick, practical tips for early action and safer decision-making.</p>
            {/* Integration note: connect this popup form to same lead capture endpoint as guide form. */}
            <form className="mt-5 space-y-3">
              <Input placeholder="Name" required />
              <Input placeholder="Phone number" required />
              <Button className="w-full rounded-full">Send Me the Free Guide</Button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ExitIntentPopup;
