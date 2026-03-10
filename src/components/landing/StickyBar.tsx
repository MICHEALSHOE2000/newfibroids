const StickyBar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-primary/20 bg-white/95 p-2 shadow-[0_-8px_26px_rgba(0,0,0,0.16)] backdrop-blur md:hidden">
      <a
        href="#order-form"
        className="flex items-center justify-center rounded-full bg-gradient-to-r from-primary to-primary/90 px-4 py-3 text-sm font-black uppercase tracking-wide text-primary-foreground shadow-[0_10px_20px_rgba(22,101,52,0.35)] ring-2 ring-primary/30 animate-pulse-glow"
      >
        🔒 Start My Recovery Journey Now
      </a>
    </div>
  );
};

export default StickyBar;
