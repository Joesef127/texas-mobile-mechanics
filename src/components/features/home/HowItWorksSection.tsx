import { howItWorksSteps } from "@/data/servicesData";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { StepCard } from "./StepCard";

export function HowItWorksSection() {
  return (
    <section
      id="process"
      className="py-[68px] md:py-24 bg-surface border-y border-line"
    >
      <div className="wrap">
        <SectionHeader title="How it works." />
        <ol className="grid grid-cols-1 md:grid-cols-3 gap-7 md:gap-10 m-0 p-0">
          {howItWorksSteps.map((step) => (
            <StepCard key={step.stepNumber} step={step} />
          ))}
        </ol>
      </div>
    </section>
  );
}
