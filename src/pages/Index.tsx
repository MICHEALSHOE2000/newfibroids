import HeroSection from "@/components/landing/HeroSection";
import TrustBadges from "@/components/landing/TrustBadges";
import PainPointsSection from "@/components/landing/PainPointsSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import SocialProofSection from "@/components/landing/SocialProofSection";
import BenefitsSection from "@/components/landing/BenefitsSection";
import PricingSection from "@/components/landing/PricingSection";
import GuaranteeSection from "@/components/landing/GuaranteeSection";
import LeadCaptureSection from "@/components/landing/LeadCaptureSection";
import OrderFormSection from "@/components/landing/OrderFormSection";
import FAQSection from "@/components/landing/FAQSection";
import FinalCTASection from "@/components/landing/FinalCTASection";
import StickyBar from "@/components/landing/StickyBar";
import FloatingWhatsApp from "@/components/landing/FloatingWhatsApp";
import ExitIntentPopup from "@/components/landing/ExitIntentPopup";

const Index = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden pb-20 md:pb-0">
      <HeroSection />
      <TrustBadges />
      <PainPointsSection />
      <HowItWorksSection />
      <SocialProofSection />
      <BenefitsSection />
      <PricingSection />
      <GuaranteeSection />
      <LeadCaptureSection />
      <OrderFormSection />
      <FAQSection />
      <FinalCTASection />
      <StickyBar />
      <FloatingWhatsApp />
      <ExitIntentPopup />
    </div>
  );
};

export default Index;
