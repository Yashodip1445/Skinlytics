import NavigationHeader from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AITechnologiesSection from "@/components/ai-technologies-section";
import HowItWorksSection from "@/components/how-it-works-section";
import AnalysisSection from "@/components/analysis-section";
import ChatbotSection from "@/components/chatbot-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import FloatingChat from "@/components/floating-chat";

export default function HomePage() {
  return (
    <div className="font-poppins bg-gray-50 text-gray-800">
      <NavigationHeader />
      <HeroSection />
      <AITechnologiesSection />
      <HowItWorksSection />
      <AnalysisSection />
      <ChatbotSection />
      <ContactSection />
      <Footer />
      <FloatingChat />
    </div>
  );
}
