const StickyBar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-primary/20 bg-background/95 p-3 backdrop-blur md:hidden">
      <a
        href="#order-form"
        className="flex items-center justify-center rounded-full bg-primary py-3 text-sm font-bold text-primary-foreground"
      >
        Start My Recovery
      </a>
    </div>
  );
};

export default StickyBar;
