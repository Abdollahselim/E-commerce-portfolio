import { CaseStudiesSection } from "@/components/sections/case-studies-section";
import { ContactSection } from "@/components/sections/contact-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ProcessSection } from "@/components/sections/process-section";
import { ServicesSection } from "@/components/sections/services-section";
import { StackSection } from "@/components/sections/stack-section";
import { WorkSection } from "@/components/sections/work-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <WorkSection />
      <CaseStudiesSection />
      <ServicesSection />
      <StackSection />
      <ProcessSection />
      <ContactSection />
    </>
  );
}
