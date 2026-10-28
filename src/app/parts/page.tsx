import type { Metadata } from "next";
import { PartsHero } from "@/components/features/parts/PartsHero";
import { PartsPartnerGrid } from "@/components/features/parts/PartsPartnerGrid";
import { VideoAndReviewsSection } from "@/components/sections/VideoAndReviewsSection";

export const metadata: Metadata = {
  title: "Texas Mobile Mechanics | Parts Services",
  description:
    "Texas Mobile Mechanics has partnered with all the leading auto parts suppliers in the United States including AutoZone, O'Reilly, NAPA, Advance Auto Parts, RockAuto, Pep Boys, XL Parts, and Parts Geek.",
  alternates: {
    canonical: "https://www.texmm.com/parts",
  },
};

export default function PartsPage() {
  return (
    <>
      <PartsHero />
      <PartsPartnerGrid />
      <VideoAndReviewsSection />
    </>
  );
}
