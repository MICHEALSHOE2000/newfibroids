import PrimaryCTA from "./PrimaryCTA";

const FinalCTASection = () => {
  return (
    <section className="bg-primary py-14 md:py-20">
      <div className="container mx-auto max-w-4xl px-4 text-center text-primary-foreground">
        <h2 className="text-3xl font-bold md:text-5xl">You Do Not Have to Keep Living with Fibroid Fear</h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm md:text-base">
          You deserve a safe, informed next step. Utero Clear gives you a natural support option to help you take back control of your health.
        </p>
        <div className="mt-8">
          <PrimaryCTA text="Start My Fibroid Recovery Today" className="bg-white text-primary" />
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
