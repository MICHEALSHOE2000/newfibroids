const reports = [
  "Lighter bleeding and better energy",
  "Less pelvic pain and pressure",
  "More confidence after follow-up scans",
  "Better sleep and reduced anxiety",
  "Hope after being told surgery was the only option",
  "A stronger sense of control over their health",
];

const BenefitsSection = () => (
  <section className="bg-white py-12 md:py-20">
    <div className="container mx-auto max-w-6xl px-4">
      <h2 className="text-center font-display text-3xl font-bold md:text-4xl">What women commonly report</h2>
      <p className="mx-auto mt-3 max-w-3xl text-center text-muted-foreground">Why real proof matters: it turns fear into action and gives women confidence to try.</p>

      <div className="mt-8 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
        {reports.map((report) => (
          <div key={report} className="rounded-2xl border border-border bg-card p-4 shadow-sm">
            <p className="text-sm md:text-base">{report}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-3xl border border-primary/20 bg-primary/5 p-8 text-center">
        <h3 className="font-display text-3xl font-bold">What If You Could Be Next?</h3>
        <p className="mx-auto mt-3 max-w-3xl text-muted-foreground">
          Every woman’s body is different, but seeing others share their progress can give you the confidence to take the next step.
        </p>
        <a href="#order-form" className="mt-6 inline-flex rounded-full bg-primary px-8 py-4 text-sm font-bold text-primary-foreground shadow-lg">
          Start My Recovery Journey
        </a>
      </div>
    </div>
  </section>
);

export default BenefitsSection;
