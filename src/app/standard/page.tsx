import type { Metadata } from "next";
import { WarrantyPageView } from "@/components/features/warranty/WarrantyPageView";

export const metadata: Metadata = {
  title: "Texas Mobile Mechanics | Standard Plan",
  description:
    "Texas Mobile Mechanic Fort Worth Dallas Arlington www.TexMM.com Texas Extended Auto Coverage Standard, Plus, and Premium Plans",
  alternates: {
    canonical: "https://www.texmm.com/standard",
  },
};

export default function StandardWarrantyPage() {
  return <WarrantyPageView defaultPlan="standard" />;
}
