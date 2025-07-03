import { HeroSection } from "@/components/blocks/hero-section-5";
import { Features } from "./blocks/features-6";
import { Features11 } from "./blocks/features-11";
import { Footer } from "./blocks/footer";
import { Cta4 } from "./ui/cta-4";
import { Mail, FileText, Users, Settings, HelpCircle } from "lucide-react";
import Feature5 from "./blocks/feature-5";
import SectionWithMockup from "./blocks/section-with-mockup";
import { Accordion1 } from "./ui/accordion-1";

const HomePage = () => {
  return (
    <>
    <HeroSection />
    <Features />
    <Features11 />
    <Feature5 />
    <SectionWithMockup 
      title="Present <br/> anywhere <br/> anytime."
      description="Your website is optimised for every device. You can access even the management interface through your phone."
      primaryImageSrc="/mobile.png"
      secondaryImageSrc="/tablet.png"
      reverseLayout={false}
    />
    <Cta4 />
    <Accordion1 />
    <Footer 
      brand={{ 
        name: 'Simplu', 
        description: 'Simplu is a management system with with a top of the line AI agent that sits on top of the infrastructure and is capable of taking over all your daily tasks. ' 
      }} 
      socialLinks={[
        { name: 'X', href: 'https://twitter.com/simplu' },
        { name: 'LinkedIn', href: 'https://linkedin.com/company/simplu' }
      ]} 
      columns={[
        {
          title: "Product",
          links: [
            { name: "Features", Icon: Settings, href: "#features" },
            { name: "Pricing", Icon: FileText, href: "#pricing" },
            { name: "Integrations", Icon: Settings, href: "#integrations" },
            { name: "API", Icon: Settings, href: "#api" }
          ]
        },
        {
          title: "Company",
          links: [
            { name: "About", Icon: Users, href: "#about" },
            { name: "Blog", Icon: FileText, href: "#blog" },
            { name: "Careers", Icon: Users, href: "#careers" },
            { name: "Contact", Icon: Mail, href: "#contact" }
          ]
        },
        {
          title: "Support",
          links: [
            { name: "Help Center", Icon: HelpCircle, href: "#help" },
            { name: "Documentation", Icon: FileText, href: "#docs" },
            { name: "Status", Icon: Settings, href: "#status" },
            { name: "Contact Us", Icon: Mail, href: "#contact" }
          ]
        }
      ]} 
      copyright="© 2025 Simplu. All rights reserved." 
    />
    </>
  );
};

export default HomePage; 