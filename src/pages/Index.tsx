import UrgencyBanner from "@/components/landing/UrgencyBanner";
import HeroSection from "@/components/landing/HeroSection";
import SocialProofSection from "@/components/landing/SocialProofSection";
import PainPointsSection from "@/components/landing/PainPointsSection";
import WhyBeyondSurgerySection from "@/components/landing/WhyBeyondSurgerySection";
import FibroidGrowthSection from "@/components/landing/FibroidGrowthSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import ScanProofSection from "@/components/landing/ScanProofSection";
import WhatsAppFeedback from "@/components/landing/WhatsAppFeedback";
import VideoTestimonialsSection from "@/components/landing/VideoTestimonialsSection";
import BenefitsSection from "@/components/landing/BenefitsSection";
import FAQSection from "@/components/landing/FAQSection";
import FinalCTASection from "@/components/landing/FinalCTASection";
import PricingSection from "@/components/landing/PricingSection";
import OrderFormSection from "@/components/landing/OrderFormSection";
import StickyBar from "@/components/landing/StickyBar";
import FloatingWhatsApp from "@/components/landing/FloatingWhatsApp";
import ExitIntentPopup from "@/components/landing/ExitIntentPopup";
import SocialNotifications from "@/components/landing/SocialNotifications";
import ImmediateProofStrip from "@/components/landing/ImmediateProofStrip";

const Index = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden pb-16 md:pb-0">
      <UrgencyBanner />
      <HeroSection />
      <ImmediateProofStrip />
      <SocialProofSection />
      <PainPointsSection />
      <WhyBeyondSurgerySection />
      <FibroidGrowthSection />
      <HowItWorksSection />
      <ScanProofSection />
      <WhatsAppFeedback />
      <VideoTestimonialsSection />
      <BenefitsSection />
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
