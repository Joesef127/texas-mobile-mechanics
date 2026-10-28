import type { Metadata } from 'next';
import { PaymentHero } from '@/components/features/payment-assistance/PaymentHero';
import { ThreeSimpleStepsSection } from '@/components/features/payment-assistance/ThreeSimpleStepsSection';
import { VideoAndReviewsSection } from '@/components/sections/VideoAndReviewsSection';

export const metadata: Metadata = {
  title: 'Texas Mobile Mechanics | Payment Assistance',
  description:
    'Flexible auto repair payment assistance in DFW. 0% Down Payment, 0% Interest, up to $3,000 repair financing, and no credit check required.',
  alternates: {
    canonical: 'https://www.texmm.com/payment-assistance',
  },
};

export default function PaymentAssistancePage() {
  return (
    <>
      <PaymentHero />
      <ThreeSimpleStepsSection />
      <VideoAndReviewsSection />
    </>
  );
}
