const StickyBar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-primary/20 bg-white/95 p-2 shadow-[0_-10px_28px_rgba(0,0,0,0.18)] backdrop-blur md:hidden">
      <a
        href="#order-form"
        className="relative flex w-full flex-col items-center justify-center rounded-2xl bg-gradient-to-r from-primary via-primary to-emerald-700 px-4 py-3 text-primary-foreground shadow-[0_12px_26px_rgba(22,101,52,0.38)] ring-2 ring-emerald-200/50 transition active:scale-[0.98]"
      >
        <span className="text-[11px] font-semibold uppercase tracking-wider text-primary-foreground/90">Limited slots today</span>
        <span className="text-sm font-black uppercase tracking-wide">🔒 Start My Recovery Journey Now →</span>
      </a>
    </div>
  );
};

export default StickyBar;
