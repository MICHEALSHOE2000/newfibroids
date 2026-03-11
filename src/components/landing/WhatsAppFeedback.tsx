const whatsappProofs = [
  "https://fibroidtreatment.xyz/img/testimony.webp",
  "https://fibroidtreatment.xyz/img/testimonial.webp",
  "https://fibroidtreatment.xyz/img/testimon.webp",
  "https://fibroidtreatment.xyz/img/testimo.webp",
  "https://fibroidtreatment.xyz/img/testim.webp",
  "https://fibroidtreatment.xyz/img/testi.webp",
  "https://fibroidtreatment.xyz/img/test.webp",
];

const WhatsAppFeedback = () => (
  <section className="bg-white py-12 md:py-20">
    <div className="container mx-auto max-w-6xl px-4">
      <h2 className="text-center font-display text-3xl font-bold md:text-4xl">Real Messages from Women Across Nigeria</h2>
      <p className="mx-auto mt-3 max-w-3xl text-center text-muted-foreground">
        WhatsApp screenshot messages shared by women reporting bleeding, pain, pressure, and scan feedback.
      </p>
      <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
        {whatsappProofs.map((src, idx) => (
          <div key={`${src}-${idx}`} className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
            <img src={src} alt="WhatsApp testimonial screenshot" className="h-56 w-full object-cover" loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhatsAppFeedback;
