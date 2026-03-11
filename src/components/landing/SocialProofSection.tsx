import proof3 from "@/assets/proof3.jpeg";
import proof4 from "@/assets/proof4.jpeg";
import proof5 from "@/assets/proof5.jpeg";
import proof6 from "@/assets/proof6.jpeg";

const proofCards = [
  { type: "Ultrasound scan", label: "Initial scan", image: proof3, featured: true },
  { type: "Before and after", label: "Follow-up testimony", image: proof4 },
  { type: "Patient story", label: "Heavy bleeding story", image: proof6 },
  { type: "Ultrasound scan", label: "Follow-up scan", image: proof5 },
];

const SocialProofSection = () => {
  return (
    <section className="bg-white py-12 md:py-20">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="mb-8 text-center">
          <h2 className="font-display text-3xl font-bold md:text-5xl">Women Like You Are Sharing Real Improvements</h2>
          <p className="mx-auto mt-3 max-w-3xl text-muted-foreground">
            See how Nigerian women are getting real fibroid relief without surgery — and find out if you could be next.
          </p>
          <p className="mt-2 text-sm font-medium text-foreground/80">
            These are the kinds of stories giving hope to women who were once told surgery was their only option.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5">
          {proofCards.map((card) => (
            <div
              key={`${card.type}-${card.label}`}
              className={`overflow-hidden rounded-2xl border border-border bg-card shadow-sm ${card.featured ? "col-span-2 md:col-span-2" : ""}`}
            >
              <div className="relative">
                <img
                  src={card.image}
                  alt={card.type}
                  className={`w-full object-cover ${card.featured ? "h-60 md:h-80" : "h-44 md:h-56"}`}
                  loading="lazy"
                />
              </div>
              <div className="p-3">
                <p className="text-xs font-semibold uppercase tracking-wide text-primary">{card.type}</p>
                <p className="text-sm font-medium text-foreground">{card.label}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a href="#order-form" className="inline-flex rounded-full bg-primary px-8 py-4 text-sm font-bold text-primary-foreground shadow-lg">
            Be the Next to Shrink Fibroid
          </a>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
