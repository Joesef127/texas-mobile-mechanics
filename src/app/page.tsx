import type { Metadata } from "next";
import { HomeHero } from "@/components/features/home/HomeHero";
import { HomeServicesPreview } from "@/components/features/home/HomeServicesPreview";
import { HowItWorksSection } from "@/components/features/home/HowItWorksSection";
import { VideoAndReviewsSection } from "@/components/sections/VideoAndReviewsSection";

export const metadata: Metadata = {
  title: "Texas Mobile Mechanics | www.TexMM.com Dallas Fort Worth Arlington",
  alternates: {
    canonical: "https://www.texmm.com",
  },
};

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeServicesPreview />
      <HowItWorksSection />
      <VideoAndReviewsSection includeVideo={false} />
    </>
  );
}
