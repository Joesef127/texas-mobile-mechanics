import { Suspense } from "react";
import { WarrantyPlanKey } from "@/types";
import { HeroShell } from "@/components/sections/HeroShell";
import { VideoAndReviewsSection } from "@/components/sections/VideoAndReviewsSection";
import { WarrantyIntro } from "./WarrantyIntro";
import { WarrantyPlanSwitcher } from "./WarrantyPlanSwitcher";

interface WarrantyPageViewProps {
  defaultPlan: WarrantyPlanKey;
}

export function WarrantyPageView({ defaultPlan }: WarrantyPageViewProps) {
  return (
    <>
      <HeroShell
        rightId="warranty-plans"
        isWarrantyPage
        leftColumn={<WarrantyIntro />}
        rightColumn={
          <Suspense fallback={<div className="min-h-[420px] bg-bg rounded-[6px]" />}>
            <WarrantyPlanSwitcher defaultPlan={defaultPlan} />
          </Suspense>
        }
      />
      <VideoAndReviewsSection />
    </>
  );
}
