import { PlayCircle } from "lucide-react";
import proof1 from "@/assets/proof1.jpeg";
import proof2 from "@/assets/proof2.jpeg";
import proof3 from "@/assets/proof3.jpeg";
import proof4 from "@/assets/proof4.jpeg";
import proof5 from "@/assets/proof5.jpeg";
import proof6 from "@/assets/proof6.jpeg";

const proofCards = [
  {
    type: "Ultrasound scan",
    label: "Initial scan (before/after scan testimony)",
    image: proof3,
    note: "Before and after comparison shared by a patient.",
    large: true,
  },
  {
    type: "WhatsApp screenshot",
    label: "Lagos",
    image: proof1,
    note: "Patient scan showing fibroid evidence.",
  },
  {
    type: "Testimony",
    label: "Reported improvement",
    image: proof4,
    note: "Shared after consistent use and follow-up.",
  },
  {
    type: "Video story",
    label: "Heavy bleeding story",
    image: proof6,
    note: "Previous scan and surgery-related fear story.",
  },
  {
    type: "WhatsApp screenshot",
    label: "Abuja",
    image: proof2,
    note: "Patient scan shared after reported healing progress.",
  },
  {
    type: "Ultrasound scan",
    label: "Follow-up scan",
    image: proof5,
    note: "Scan feedback reported after monitoring.",
  },
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
              className={`overflow-hidden rounded-2xl border border-border bg-card shadow-sm ${card.large ? "col-span-2 md:col-span-2" : ""}`}
            >
              <div className="relative">
                <img
                  src={card.image}
                  alt={card.type}
                  className={`${card.large ? "h-64 md:h-80" : "h-44 md:h-56"} w-full object-cover`}
                  loading="lazy"
                />
                {card.type === "Video story" && (
                  <PlayCircle className="absolute left-1/2 top-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 text-white drop-shadow" />
                )}
              </div>
              <div className="p-3">
                <p className="text-xs font-semibold uppercase tracking-wide text-primary">{card.type}</p>
                <p className="text-sm font-medium text-foreground">{card.label}</p>
                <p className="mt-1 text-xs text-muted-foreground">{card.note}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a
            href="#order-form"
            className="inline-flex rounded-full bg-primary px-8 py-4 text-sm font-bold text-primary-foreground shadow-lg transition hover:scale-[1.02]"
          >
            Start My Recovery Journey
          </a>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
