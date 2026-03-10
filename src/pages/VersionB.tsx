import VariantNav from "@/components/landing/VariantNav";
import UrgencyBanner from "@/components/landing/UrgencyBanner";
import HeroSection from "@/components/landing/HeroSection";
import SocialProofSection from "@/components/landing/SocialProofSection";
import ScanProofSection from "@/components/landing/ScanProofSection";
import VideoTestimonialsSection from "@/components/landing/VideoTestimonialsSection";
import WhatsAppFeedback from "@/components/landing/WhatsAppFeedback";
import WhyBeyondSurgerySection from "@/components/landing/WhyBeyondSurgerySection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import BenefitsSection from "@/components/landing/BenefitsSection";
import PricingSection from "@/components/landing/PricingSection";
import OrderFormSection from "@/components/landing/OrderFormSection";
import FAQSection from "@/components/landing/FAQSection";
import FinalCTASection from "@/components/landing/FinalCTASection";
import StickyBar from "@/components/landing/StickyBar";

const VersionB = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden pb-16 md:pb-0">
      <VariantNav />
      <UrgencyBanner />
      <HeroSection
        headline="Real Women. Real Fibroid Stories. Real Non-Surgical Hope."
        ctaText="See If Utero Clear Is Right For Me"
        eyebrow="You could be next"
      />
      <SocialProofSection />
      <ScanProofSection />
      <VideoTestimonialsSection />
      <WhatsAppFeedback />
      <WhyBeyondSurgerySection />
      <HowItWorksSection />
      <BenefitsSection />
      <PricingSection />
      <OrderFormSection />
      <FAQSection />
      <FinalCTASection />
      <StickyBar />
    </div>
  );
};

export default VersionB;
