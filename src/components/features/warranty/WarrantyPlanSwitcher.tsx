"use client";

import { useRef } from "react";
import { WarrantyPlanKey } from "@/types";
import { warrantyPlanOrder, warrantyPlans } from "@/data/warrantyPlans";
import { useWarrantyTabs } from "@/hooks/useWarrantyTabs";
import { WarrantyPlanPanel } from "./WarrantyPlanPanel";

interface WarrantyPlanSwitcherProps {
  defaultPlan?: WarrantyPlanKey;
}

const gliderPositions: Record<number, string> = {
  0: "translate-x-0",
  1: "translate-x-full",
  2: "translate-x-[200%]",
};

export function WarrantyPlanSwitcher({
  defaultPlan = "standard",
}: WarrantyPlanSwitcherProps) {
  const { activePlan, activeIndex, selectPlan, handleTabKeyDown } =
    useWarrantyTabs(defaultPlan);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const focusTab = (idx: number) => {
    tabRefs.current[idx]?.focus();
  };

  return (
    <div className="bg-bg text-text border border-ink-line border-t-[5px] border-t-brand-red rounded-[6px] p-5 xs:p-9 grid gap-6">
      <div
        role="tablist"
        aria-label="Select Warranty Plan"
        className="relative grid grid-cols-3 bg-surface border border-line rounded-[8px] p-[5px] isolate"
      >
        <span
          aria-hidden="true"
          className={`absolute top-[5px] bottom-[5px] left-[5px] w-[calc((100%-10px)/3)] bg-brand-red rounded-[5px] shadow-[0_4px_14px_rgba(211,32,42,0.3)] z-0 transition-transform duration-[360ms] ease-brand ${
            gliderPositions[activeIndex] || "translate-x-0"
          }`}
        />

        {warrantyPlanOrder.map((planKey, idx) => {
          const plan = warrantyPlans[planKey];
          const isActive = activePlan === planKey;

          return (
            <button
              key={planKey}
              ref={(el) => {
                tabRefs.current[idx] = el;
              }}
              type="button"
              role="tab"
              id={`tab-${planKey}`}
              aria-selected={isActive}
              aria-controls={`panel-${planKey}`}
              tabIndex={isActive ? 0 : -1}
              onClick={() => selectPlan(planKey)}
              onKeyDown={(e) => handleTabKeyDown(e, idx, focusTab)}
              className={`relative z-10 appearance-none border-0 bg-transparent px-2 py-[10px] rounded-[5px] cursor-pointer flex flex-col items-center justify-center gap-[2px] text-center transition-colors duration-250 ease-brand ${
                isActive ? "text-white" : "text-text"
              }`}
            >
              <span className="font-head font-extrabold italic text-[17px] xs:text-[20px] leading-none uppercase tracking-[0.02em]">
                {plan.name}
              </span>
              <span
                className={`font-body font-semibold text-[11px] xs:text-[12.5px] leading-[1.1] transition-colors duration-250 ease-brand ${
                  isActive ? "text-white/90" : "text-muted"
                }`}
              >
                {plan.tabPrice}
              </span>
            </button>
          );
        })}
      </div>

      <div className="grid">
        {warrantyPlanOrder.map((planKey) => (
          <WarrantyPlanPanel
            key={planKey}
            plan={warrantyPlans[planKey]}
            isActive={activePlan === planKey}
          />
        ))}
      </div>
    </div>
  );
}
