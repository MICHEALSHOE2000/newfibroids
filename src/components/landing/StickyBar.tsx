const StickyBar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-primary/20 bg-white/95 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] backdrop-blur md:hidden">
      <a href="#order-form" className="flex items-center justify-center py-3 text-sm font-bold text-primary">
        Start My Recovery Journey
      </a>
    </div>
  );
};

export default StickyBar;
