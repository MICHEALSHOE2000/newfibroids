import { CheckCircle2 } from "lucide-react";

const heroBullets = [
  "Real ultrasound scan evidence",
  "Real WhatsApp testimonies",
  "Real video stories from Nigerian women",
  "Non-surgical support approach",
];

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-b from-rose-50 via-white to-white py-12 md:py-20">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 inline-block rounded-full border border-primary/20 bg-primary/5 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            See the proof for yourself
          </p>
          <h1 className="font-display text-3xl font-bold leading-tight text-foreground md:text-5xl">
            How Nigerian Women Are Getting Fibroid Relief Without Surgery
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-base text-muted-foreground md:text-xl">
            Explore real ultrasound scans, WhatsApp messages, and video testimonies from women using the Utero Clear Hormone Balance Method.
          </p>
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-foreground/80 md:text-lg">
            If you have been battling heavy bleeding, pelvic pain, pressure, bloating, or fear of surgery, this page will show you why many women are choosing a different path.
          </p>

          <a
            href="#order-form"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-10 py-4 text-base font-black uppercase tracking-wide text-primary-foreground shadow-[0_14px_30px_rgba(0,0,0,0.2)] ring-2 ring-primary/20 transition hover:scale-[1.03]"
          >
            Start My Recovery Journey
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
