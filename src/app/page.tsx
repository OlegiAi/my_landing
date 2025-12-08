import { Navigation } from "@/components/ui/navigation";
import { Hero } from "@/components/ui/animated-hero";
import { WorkRealitySection } from "@/components/ui/work-reality-section";
import { TargetAudienceSection } from "@/components/ui/target-audience-section";
import { ComparisonSection } from "@/components/ui/comparison-section";
import { BeforeAfterSection } from "@/components/ui/before-after-section";
import { ProgramSection } from "@/components/ui/program-section";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="flex min-h-screen flex-col">
        <Hero />
        <WorkRealitySection />
        <TargetAudienceSection />
        <ComparisonSection />
        <BeforeAfterSection />
        <ProgramSection />
      </main>
    </>
  );
}
