import  Header  from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { WhyUsSection } from "@/components/WhyUsSection";
import { PropertyShowcase } from "@/components/PropertyShowcase";
import { TeamSection } from "@/components/TeamSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ContactSection } from "@/components/ContactSection";
import  Footer  from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { LeadMagnet } from "@/components/LeadMagnet";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <WhyUsSection />
        <PropertyShowcase />
        <ServicesSection />
        <TeamSection />
                <TestimonialsSection />

        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
      <LeadMagnet />
    </>
  );
}
