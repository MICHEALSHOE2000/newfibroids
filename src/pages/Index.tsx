import UrgencyBanner from "@/components/landing/UrgencyBanner";
import TrustBadges from "@/components/landing/TrustBadges";
import HeroSection from "@/components/landing/HeroSection";
import PainPointsSection from "@/components/landing/PainPointsSection";
import BenefitsSection from "@/components/landing/BenefitsSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import SocialProofSection from "@/components/landing/SocialProofSection";
import ScanProofSection from "@/components/landing/ScanProofSection";
import PricingSection from "@/components/landing/PricingSection";
import OrderFormSection from "@/components/landing/OrderFormSection";
import FAQSection from "@/components/landing/FAQSection";
import FinalCTASection from "@/components/landing/FinalCTASection";
import StickyBar from "@/components/landing/StickyBar";
import FloatingWhatsApp from "@/components/landing/FloatingWhatsApp";
import ExitIntentPopup from "@/components/landing/ExitIntentPopup";
import SocialNotifications from "@/components/landing/SocialNotifications";

const Index = () => {
  return (
    <div className="min-h-screen pb-16 md:pb-0">
      <UrgencyBanner />
      <HeroSection />
      <TrustBadges />
      <PainPointsSection />
      <BenefitsSection />
      <HowItWorksSection />
      <SocialProofSection />
      <ScanProofSection />
      <PricingSection />
      <OrderFormSection />
      <FAQSection />
      <FinalCTASection />
      <StickyBar />
      <FloatingWhatsApp />
      <ExitIntentPopup />
      <SocialNotifications />
    </div>
  );
};

export default Index;
