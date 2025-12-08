import { Navigation } from "@/components/ui/navigation";
import { Hero } from "@/components/ui/animated-hero";
import { WorkRealitySection } from "@/components/ui/work-reality-section";
import { AISolutionSection } from "@/components/ui/ai-solution-section";
import { TargetAudienceSection } from "@/components/ui/target-audience-section";
import { BeforeAfterSection } from "@/components/ui/before-after-section";
import { ProgramSection } from "@/components/ui/program-section";
import { ContentFactorySection } from "@/components/ui/content-factory-section";
import { LearningProcessSection } from "@/components/ui/learning-process-section";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="flex min-h-screen flex-col">
        <Hero />
        <WorkRealitySection />
        <AISolutionSection />
        <TargetAudienceSection />
        <BeforeAfterSection />
        <ProgramSection />
        <LearningProcessSection />
        <ContentFactorySection />
      </main>
    </>
  );
}
