import type { Metadata } from 'next';
import { DiscountsHero } from '@/components/features/discounts/DiscountsHero';
import { CouponGridSection } from '@/components/features/discounts/CouponGridSection';
import { VideoAndReviewsSection } from '@/components/sections/VideoAndReviewsSection';

export const metadata: Metadata = {
  title: 'Texas Mobile Mechanics | Discounts & Special Offers',
  description:
    'Save on mobile auto repair in DFW! Claim $10 Off Engine Oil Changes, 15% Off Brake Repairs, and 10% Senior & Military Discounts with Texas Mobile Mechanics.',
  alternates: {
    canonical: 'https://www.texmm.com/discounts',
  },
};

export default function DiscountsPage() {
  return (
    <>
      <DiscountsHero />
      <CouponGridSection />
      <VideoAndReviewsSection includeVideo={false} />
    </>
  );
}
