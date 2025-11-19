import { HeroSection } from "@/components/blocks/hero-section-5";
import { Features } from "./blocks/features-6";
import { BenefitsInline } from "./blocks/benefits-inline";
import { Cta4 } from "./ui/cta-4";
import ScheduleMessage from "./ScheduleMessage";
import SectionMessage from "./Section";
import DataModelDiagram from "./ui/data-model-diagram";

const HomePage = () => {
  return (
    <>
    <HeroSection />
    <div className="border-t border-border" />
    <Features />
    <BenefitsInline />
    <div className="border-t border-border" />
    <ScheduleMessage />
    <SectionMessage />
    <Cta4 />
    <div className="border-t border-border" />
    <DataModelDiagram />
    </>
  );
};

export default HomePage; 