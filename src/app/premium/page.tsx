import type { Metadata } from 'next';
import { WarrantyPageView } from '@/components/features/warranty/WarrantyPageView';

export const metadata: Metadata = {
  title: 'Texas Mobile Mechanics | Premium Plan',
  description:
    'Premium Plan ($39.99/Month): Ultimate bumper-to-bumper confidence. Our Premium Auto Warranty Plan covers engine, transmission, steering, suspension, and full electrical systems across DFW.',
  alternates: {
    canonical: 'https://www.texmm.com/premium',
  },
};

export default function PremiumWarrantyPage() {
  return <WarrantyPageView defaultPlan="premium" />;
}
