import type { Metadata } from "next";
import { ServicesHero } from "@/components/features/services/ServicesHero";
import { ServiceDirectorySection } from "@/components/features/services/ServiceDirectorySection";
import { VideoAndReviewsSection } from "@/components/sections/VideoAndReviewsSection";

export const metadata: Metadata = {
  title: "Texas Mobile Mechanics | Services",
  description:
    "Texas Mobile Mechanics Auto Repair & Auto Maintenance Services in Dallas, Fort Worth, and Arlington. Dealership quality and warranties at your home or workplace.",
  alternates: {
    canonical: "https://www.texmm.com/services",
  },
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServiceDirectorySection />
      <VideoAndReviewsSection />
    </>
  );
}
