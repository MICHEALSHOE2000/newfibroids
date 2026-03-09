const StickyBar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-primary shadow-[0_-4px_20px_rgba(0,0,0,0.15)] md:hidden">
      <a
        href="#order-form"
        className="flex items-center justify-center py-4 text-base font-bold text-primary-foreground"
      >
        Order Utero Clear Now →
      </a>
    </div>
  );
};

export default StickyBar;
