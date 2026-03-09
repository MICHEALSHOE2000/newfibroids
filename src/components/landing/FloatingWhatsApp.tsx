import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";

const FloatingWhatsApp = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-20 md:bottom-6 right-4 z-50 flex flex-col items-end gap-2">
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="relative rounded-xl bg-card border border-border shadow-lg px-4 py-3 max-w-[220px]"
          >
            <button
              onClick={() => setShowTooltip(false)}
              className="absolute -top-2 -right-2 rounded-full bg-muted p-1"
            >
              <X className="h-3 w-3 text-muted-foreground" />
            </button>
            <p className="text-xs font-body text-foreground leading-relaxed">
              👋 Hi! Have questions? Chat with a care specialist now.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.a
        href="https://api.whatsapp.com/send?phone=2348080305080&text=Hi%20Dr.%20Micheal,%20I%20have%20a%20question%20about%20Utero%20Clear."
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center justify-center h-14 w-14 rounded-full bg-[hsl(142,70%,45%)] text-white shadow-lg animate-bounce-subtle hover:shadow-[hsl(142,70%,45%)/50%] hover:shadow-xl transition-shadow"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </motion.a>
    </div>
  );
};

export default FloatingWhatsApp;
