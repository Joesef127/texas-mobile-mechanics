import { financingSteps } from "@/data/paymentAssistanceData";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { StepCard } from "@/components/features/home/StepCard";

export function ThreeSimpleStepsSection() {
  return (
    <section className="py-[68px] md:py-24 bg-surface border-y border-line">
      <div className="wrap">
        <SectionHeader
          title="The “Three Simple Step” process."
          subtitle="Listed below is our straightforward process to get you on the path of drive-ability again!"
        />
        <ol className="grid grid-cols-1 md:grid-cols-3 gap-7 md:gap-10 m-0 p-0">
          {financingSteps.map((step) => (
            <StepCard key={step.stepNumber} step={step} />
          ))}
        </ol>
      </div>
    </section>
  );
}
