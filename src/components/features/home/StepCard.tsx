import { ProcessStepItem } from "@/types";

interface StepCardProps {
  step: ProcessStepItem;
}

export function StepCard({ step }: StepCardProps) {
  return (
    <li className="list-none border-t-4 border-brand-red pt-5">
      <span className="block font-head font-extrabold italic text-[46px] leading-none text-brand-red mb-3">
        {step.stepNumber}
      </span>
      <h3>{step.title}</h3>
      <p className="text-muted mt-2">{step.description}</p>
    </li>
  );
}
