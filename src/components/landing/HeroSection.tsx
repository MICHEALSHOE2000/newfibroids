import { CheckCircle2 } from "lucide-react";

type HeroSectionProps = {
  headline?: string;
  ctaText?: string;
  eyebrow?: string;
};

const heroBullets = [
  "Real ultrasound scan evidence",
  "Real WhatsApp testimonies",
  "Real video stories from Nigerian women",
  "Non-surgical support approach",
];

const HeroSection = ({
  headline = "How Nigerian Women Are Getting Fibroid Relief Without Surgery",
  ctaText = "Start My Recovery Journey",
  eyebrow = "See the proof for yourself",
}: HeroSectionProps) => {
  return (
    <section className="bg-gradient-to-b from-rose-50 via-white to-white py-12 md:py-20">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 inline-block rounded-full border border-primary/20 bg-primary/5 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            {eyebrow}
          </p>
          <h1 className="font-display text-3xl font-bold leading-tight text-foreground md:text-5xl">
            {headline}
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-base text-muted-foreground md:text-xl">
            Explore real ultrasound scans, WhatsApp messages, and video testimonies from women using the Utero Clear Hormone Balance Method.
          </p>
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-foreground/80 md:text-lg">
            If you have been battling heavy bleeding, pelvic pain, pressure, bloating, or fear of surgery, this page will show you why many women are choosing a different path.
          </p>

          <a
            href="#order-form"
            className="mt-8 inline-flex rounded-full bg-primary px-8 py-4 text-base font-bold text-primary-foreground shadow-lg transition hover:scale-[1.02]"
          >
            {ctaText}
          </a>

          <div className="mt-8 grid gap-3 rounded-2xl border border-border bg-card p-5 text-left md:grid-cols-2">
            {heroBullets.map((item) => (
              <div key={item} className="flex items-start gap-2 text-sm font-medium text-foreground">
                <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
