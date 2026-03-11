import productImg from "@/assets/productimg.jpeg";

const ProductShowcaseSection = () => (
  <section className="bg-background py-8 md:py-12">
    <div className="container mx-auto max-w-4xl px-4 text-center">
      <h3 className="font-display text-2xl font-bold text-foreground md:text-3xl">Utero Clear Support Pack</h3>
      <p className="mx-auto mt-2 max-w-2xl text-sm text-muted-foreground md:text-base">
        After understanding how Utero Clear supports the body naturally, here is the product women are ordering to start their recovery journey.
      </p>
      <div className="mt-6 overflow-hidden rounded-3xl border border-border bg-card p-3 shadow-lg md:p-4">
        <img src={productImg} alt="Utero Clear product" className="mx-auto w-full max-w-lg rounded-2xl object-cover" loading="lazy" />
      </div>
    </div>
  </section>
);

export default ProductShowcaseSection;
