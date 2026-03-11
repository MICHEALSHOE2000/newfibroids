import { PlayCircle } from "lucide-react";
import proof1 from "@/assets/proof1.jpeg";
import proof2 from "@/assets/proof2.jpeg";
import proof3 from "@/assets/proof3.jpeg";
import proof4 from "@/assets/proof4.jpeg";
import proof5 from "@/assets/proof5.jpeg";
import proof6 from "@/assets/proof6.jpeg";

const proofCards = [
  { type: "Before support", label: "Fibroid symptoms shared", image: proof1 },
  { type: "After support", label: "Recovery progress shared", image: proof2 },
  { type: "Ultrasound scan", label: "Initial scan", image: proof3 },
  { type: "Testimony", label: "Follow-up story", image: proof4 },
  { type: "Video story", label: "Heavy bleeding story", image: proof6 },
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
            <div key={`${card.type}-${card.label}`} className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
              <div className="relative">
                <img src={card.image} alt={card.type} className="h-44 w-full object-cover md:h-56" loading="lazy" />
                {card.type === "Video story" && (
                  <PlayCircle className="absolute left-1/2 top-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 text-white drop-shadow" />
                )}
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
            View Real Patient Proof
          </a>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
