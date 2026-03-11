import proof3 from "@/assets/proof3.jpeg";
import proof4 from "@/assets/proof4.jpeg";
import proof5 from "@/assets/proof5.jpeg";

const scans = [
  { image: proof3, stage: "Initial scan", note: "Shared before beginning routine support." },
  { image: proof4, stage: "Follow-up scan", note: "Shared after consistent use and monitoring." },
  { image: proof5, stage: "Reported improvement", note: "Feedback discussed with healthcare provider." },
];

const ScanProofSection = () => (
  <section className="bg-muted/20 py-12 md:py-20">
    <div className="container mx-auto max-w-6xl px-4">
      <div className="text-center">
        <h2 className="font-display text-3xl font-bold md:text-4xl">Real Scan Evidence Shared by Women Using Utero Clear</h2>
        <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">Before/after style scan cards, shared by women tracking their progress.</p>
      </div>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {scans.map((scan) => (
          <div key={scan.stage} className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
            <img src={scan.image} alt={scan.stage} className="h-56 w-full object-cover" loading="lazy" />
            <div className="p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-primary">{scan.stage}</p>
              <p className="mt-1 text-sm text-muted-foreground">{scan.note}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ScanProofSection;
