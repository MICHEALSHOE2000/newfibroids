import { PlayCircle, MessageCircle, FileText } from "lucide-react";
import PrimaryCTA from "./PrimaryCTA";

const SocialProofSection = () => {
  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto max-w-6xl space-y-12 px-4">
        <div>
          <h2 className="text-center text-3xl font-bold text-foreground md:text-4xl">Proof from Real Women Using Utero Clear</h2>
          <p className="mx-auto mt-3 max-w-3xl text-center text-sm text-muted-foreground md:text-base">
            We use placeholders below where final media assets or approved compliance wording are still pending.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-foreground">Video testimonials</h3>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {[1, 2, 3].map((n) => (
              <div key={n} className="rounded-2xl border border-dashed border-border bg-card p-6 text-center">
                <PlayCircle className="mx-auto h-8 w-8 text-primary" />
                <p className="mt-3 text-sm font-medium">Video testimonial placeholder {n}</p>
                <p className="mt-1 text-xs text-muted-foreground">Replace with approved customer video embed.</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-foreground">Real Messages from Women Who Tried Utero Clear</h3>
          <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="aspect-[9/16] rounded-2xl border border-dashed border-border bg-card p-4">
                <MessageCircle className="h-5 w-5 text-primary" />
                <p className="mt-3 text-xs font-medium">WhatsApp screenshot placeholder</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-foreground">Ultrasound / scan proof (placeholders)</h3>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-dashed border-border bg-card p-5">
              <FileText className="h-5 w-5 text-destructive" />
              <p className="mt-3 font-semibold">Before: fibroid scan/result</p>
              <p className="text-xs text-muted-foreground">Placeholder only — replace with patient-approved document.</p>
            </div>
            <div className="rounded-2xl border border-dashed border-border bg-card p-5">
              <FileText className="h-5 w-5 text-primary" />
              <p className="mt-3 font-semibold">After: improved follow-up scan/result</p>
              <p className="text-xs text-muted-foreground">Placeholder only — replace with verified follow-up report.</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <PrimaryCTA text="Reserve My Treatment Now" />
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
