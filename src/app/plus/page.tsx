import type { Metadata } from 'next';
import { WarrantyPageView } from '@/components/features/warranty/WarrantyPageView';

export const metadata: Metadata = {
  title: 'Texas Mobile Mechanics | Plus Plan',
  description:
    'Plus Plan ($29.99/Month): Enjoy complete peace of mind with our Plus Auto Warranty Plan. Expanded coverage for major powertrain, AC, electrical, and diagnostics across DFW.',
  alternates: {
    canonical: 'https://www.texmm.com/plus',
  },
};

export default function PlusWarrantyPage() {
  return <WarrantyPageView defaultPlan="plus" />;
}
