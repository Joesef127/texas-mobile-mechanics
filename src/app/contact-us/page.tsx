import type { Metadata } from 'next';
import { ContactHero } from '@/components/features/contact/ContactHero';
import { VideoAndReviewsSection } from '@/components/sections/VideoAndReviewsSection';

export const metadata: Metadata = {
  title: 'Texas Mobile Mechanics | Contact Us',
  description:
    'Contact Texas Mobile Mechanics in DFW. Call (817) 382-7206 or (214) 799-1519, email service@texmm.com, or book online for mobile auto repair at your location.',
  alternates: {
    canonical: 'https://www.texmm.com/contact-us',
  },
};

export default function ContactUsPage() {
  return (
    <>
      <ContactHero />
      <VideoAndReviewsSection alternateBg />
    </>
  );
}
