import { HeroSection } from "@/components/blocks/hero-section-5";
import { Features } from "./blocks/features-6";
import { Features11 } from "./blocks/features-11";
import { Footer } from "./blocks/footer";
import { Cta4 } from "./ui/cta-4";
import { Github, Twitter, Linkedin, Mail, Phone, MapPin, FileText, Users, Settings, HelpCircle } from "lucide-react";

const HomePage = () => {
  return (
    <>
    <HeroSection />
    <Features />
    <Features11 />
    <Cta4 />
    <Footer 
      brand={{ 
        name: 'Simplu', 
        description: 'Simplu is a platform for managing your business with AI-powered tools and seamless integration.' 
      }} 
      socialLinks={[
        { name: 'GitHub', href: 'https://github.com/simplu' },
        { name: 'Twitter', href: 'https://twitter.com/simplu' },
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