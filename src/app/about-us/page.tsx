import type { Metadata } from 'next';
import { AboutHero } from '@/components/features/about/AboutHero';
import { TechniciansSection } from '@/components/features/about/TechniciansSection';
import { VideoAndReviewsSection } from '@/components/sections/VideoAndReviewsSection';

export const metadata: Metadata = {
  title: 'Texas Mobile Mechanics | About Us',
  description:
    'Learn about Texas Mobile Mechanics — certified, background-checked mobile mechanics bringing factory-level diagnostics and honest auto repair to your driveway across DFW.',
  alternates: {
    canonical: 'https://www.texmm.com/about-us',
  },
};

export default function AboutUsPage() {
  return (
    <>
      <AboutHero />
      <TechniciansSection />
      <VideoAndReviewsSection />
    </>
  );
}
