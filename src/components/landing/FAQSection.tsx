import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import PrimaryCTA from "./PrimaryCTA";

const faqs = [
  {
    q: "How long does it take to start noticing changes?",
    a: "Many women start noticing early changes within 10–30 days, but timelines vary by body system, consistency, and existing condition. Regular check-ins with your healthcare provider are recommended.",
  },
  {
    q: "Is Utero Clear a natural herbal product?",
    a: "Utero Clear is presented as a natural herbal support protocol focused on hormone and womb health support.",
  },
  {
    q: "Do I still need surgery?",
    a: "Utero Clear is not a replacement for medical diagnosis. Your doctor is best placed to advise if surgery is necessary for your case.",
  },
  {
    q: "Can I use it if I have already been diagnosed with fibroids?",
    a: "Many diagnosed women explore non-surgical support options. It is best to use Utero Clear alongside professional monitoring and follow-up scans.",
  },
  {
    q: "How do I place my order?",
    a: "Fill the order form on this page, then our team will guide you on confirmation and delivery steps.",
  },
  {
    q: "Is there a guarantee?",
    a: "Yes, there is a 30-day guarantee policy. Please review the final approved policy terms before purchase.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto max-w-4xl px-4">
        <h2 className="text-center text-3xl font-bold text-foreground md:text-4xl">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="mt-8 space-y-4">
          {faqs.map((faq, i) => (
            <AccordionItem key={faq.q} value={`faq-${i}`} className="rounded-2xl border border-border bg-card px-5">
              <AccordionTrigger className="text-left font-semibold hover:no-underline">{faq.q}</AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground md:text-base">{faq.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <div className="mt-8 text-center">
          <PrimaryCTA text="Reserve My Treatment Now" />
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
