import { CaseStudiesSection } from "@/components/sections/case-studies-section";
import { ContactSection } from "@/components/sections/contact-section";
import { FaqSection } from "@/components/sections/faq-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ProcessSection } from "@/components/sections/process-section";
import { ServicesSection } from "@/components/sections/services-section";
import { StackSection } from "@/components/sections/stack-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { WorkSection } from "@/components/sections/work-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <WorkSection />
      <CaseStudiesSection />
      <TestimonialsSection />
      <ServicesSection />
      <StackSection />
      <ProcessSection />
      <FaqSection />
      <ContactSection />
    </>
  );
}
