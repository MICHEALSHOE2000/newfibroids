import { Check } from "lucide-react";

const questions = [
  "Do you deal with heavy bleeding that leaves you weak and worried?",
  "Are you feeling pelvic pain, pressure, or lower tummy swelling?",
  "Have you been told surgery may be your only option?",
];

const PainPointsSection = () => {
  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto max-w-4xl px-4">
        <h2 className="text-3xl font-bold text-foreground md:text-4xl">Dear Nigerian Woman,</h2>
        <div className="mt-6 space-y-4 rounded-2xl border border-border bg-card p-6 md:p-8">
          {questions.map((question) => (
            <p key={question} className="flex items-start gap-3 text-sm text-foreground md:text-base">
              <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <span>{question}</span>
            </p>
          ))}
        </div>
        <p className="mt-6 max-w-3xl text-sm leading-relaxed text-muted-foreground md:text-base">
          If this sounds like your story, you are not alone. Many women feel exhausted, anxious, and unheard while searching for relief. Utero Clear was created to offer a gentler, informed next step that supports your body naturally.
        </p>
      </div>
    </section>
  );
};

export default PainPointsSection;
