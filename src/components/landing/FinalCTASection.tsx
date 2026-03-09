const FinalCTASection = () => {
  return (
    <section className="bg-primary py-16 md:py-20 text-center">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground">
          Ready to Start Your Healing?
        </h2>
        <p className="mt-3 text-primary-foreground/80">
          Join 15,000+ Nigerian women who chose the natural path. Order Utero Clear today.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#order-form"
            className="inline-flex items-center justify-center rounded-full bg-card px-8 py-4 font-bold text-foreground shadow-lg transition-transform hover:scale-105"
          >
            Order Now →
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=2348080305080&text=Hi%20Dr.%20Micheal,%20I%20want%20to%20order%20the%20Utero%20Clear."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border-2 border-primary-foreground/30 px-8 py-4 font-bold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
          >
            💬 Order on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
