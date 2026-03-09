import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "How long does it take to see results?", a: "Most women notice visible changes within 10 days, with complete results typically achieved within 30 days or less. Results may vary based on individual conditions." },
  { q: "Is Utero Clear safe?", a: "Yes. Utero Clear is made from 100% natural ingredients, clinically tested, and approved by NAFDAC. It has no known side effects and is safe for long-term use." },
  { q: "How do I take Utero Clear?", a: "Take 2 capsules daily with water — one in the morning and one in the evening, preferably with meals. Full instructions are included with your order." },
  { q: "Will my fibroids come back?", a: "Utero Clear not only dissolves existing fibroids and cysts but also helps prevent recurrence by addressing the root hormonal causes. Many customers report no recurrence even years after treatment." },
  { q: "Do you offer shipping within Nigeria?", a: "Yes. We ship to all 36 states in Nigeria including Abuja and Lagos. We offer Payment on Delivery (POD) in major cities. Orders are typically delivered within 24–48 hours." },
  { q: "What if it doesn't work for me?", a: "We offer a 100% money-back guarantee. If you don't see results after completing the full treatment as directed, simply contact us for a full refund — no questions asked." },
  { q: "Can I take it with other medications?", a: "Utero Clear is natural and generally safe to use alongside other medications. However, if you're on prescription drugs, we recommend consulting your healthcare provider first." },
  { q: "How many bottles do I need?", a: "We recommend 2–3 bottles for optimal results. The 3-bottle package (90-day supply) is our most popular choice and offers the best value for complete treatment." },
  { q: "What sizes of fibroids does it work on?", a: "Utero Clear works on all types and sizes of fibroids — whether inside or outside the womb, small or large. The natural ingredients target fibroids at the cellular level." },
  { q: "When will I receive my order?", a: "Orders are processed immediately and delivered within 24–48 hours, depending on your location. Tracking details will be provided once your order is shipped." },
];

const FAQSection = () => {
  return (
    <section className="bg-card py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center font-display text-2xl md:text-3xl font-bold text-foreground mb-10"
        >
          Frequently Asked Questions
        </motion.h2>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="rounded-xl border border-border bg-background px-5">
              <AccordionTrigger className="text-left font-semibold text-foreground font-body text-sm hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
