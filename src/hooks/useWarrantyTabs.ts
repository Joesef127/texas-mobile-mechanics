"use client";

import { useCallback, useEffect, useState, KeyboardEvent } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { WarrantyPlanKey } from "@/types";
import { warrantyPlanOrder } from "@/data/warrantyPlans";

const planTitles: Record<WarrantyPlanKey, string> = {
  standard: "Texas Mobile Mechanics | Standard Plan",
  plus: "Texas Mobile Mechanics | Plus Plan",
  premium: "Texas Mobile Mechanics | Premium Plan",
};

export function useWarrantyTabs(defaultPlan: WarrantyPlanKey = "standard") {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [activePlan, setActivePlan] = useState<WarrantyPlanKey>(defaultPlan);

  const resolvePlanFromLocation = useCallback((): WarrantyPlanKey => {
    const queryPlan = searchParams?.get("plan")?.toLowerCase() as
      | WarrantyPlanKey
      | undefined;
    if (queryPlan && warrantyPlanOrder.includes(queryPlan)) {
      return queryPlan;
    }

    if (typeof window !== "undefined") {
      const hash = window.location.hash
        .replace(/^#/, "")
        .toLowerCase() as WarrantyPlanKey;
      if (warrantyPlanOrder.includes(hash)) {
        return hash;
      }
    }

    const lowerPath = (pathname || "").toLowerCase();
    if (lowerPath.includes("plus")) return "plus";
    if (lowerPath.includes("premium")) return "premium";
    if (lowerPath.includes("standard")) return "standard";

    return defaultPlan;
  }, [searchParams, pathname, defaultPlan]);

  useEffect(() => {
    const detected = resolvePlanFromLocation();
    setActivePlan(detected);
    if (typeof document !== "undefined") {
      document.title = planTitles[detected];
    }
  }, [resolvePlanFromLocation]);

  useEffect(() => {
    const onPopState = () => {
      const detected = resolvePlanFromLocation();
      setActivePlan(detected);
    };
    window.addEventListener("popstate", onPopState);
    window.addEventListener("hashchange", onPopState);
    return () => {
      window.removeEventListener("popstate", onPopState);
      window.removeEventListener("hashchange", onPopState);
    };
  }, [resolvePlanFromLocation]);

  const selectPlan = useCallback((plan: WarrantyPlanKey) => {
    setActivePlan(plan);
    if (typeof document !== "undefined") {
      document.title = planTitles[plan];
    }
    if (typeof window !== "undefined" && window.history?.pushState) {
      const url = new URL(window.location.href);
      url.searchParams.set("plan", plan);
      window.history.pushState({ plan }, "", url.toString());
    }
  }, []);

  const handleTabKeyDown = useCallback(
    (
      e: KeyboardEvent<HTMLButtonElement>,
      idx: number,
      focusTab: (index: number) => void
    ) => {
      let nextIdx: number | null = null;
      const total = warrantyPlanOrder.length;
      if (e.key === "ArrowRight") nextIdx = (idx + 1) % total;
      else if (e.key === "ArrowLeft") nextIdx = (idx - 1 + total) % total;
      else if (e.key === "Home") nextIdx = 0;
      else if (e.key === "End") nextIdx = total - 1;

      if (nextIdx !== null) {
        e.preventDefault();
        focusTab(nextIdx);
        selectPlan(warrantyPlanOrder[nextIdx]);
      }
    },
    [selectPlan]
  );

  const activeIndex = warrantyPlanOrder.indexOf(activePlan);

  return {
    activePlan,
    activeIndex: activeIndex === -1 ? 0 : activeIndex,
    selectPlan,
    handleTabKeyDown,
  };
}
