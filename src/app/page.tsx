import { Metadata } from 'next';
import { HeroSection } from '@/components/sections/homepage/HeroSection';
import { TargetAudienceSection } from '@/components/sections/homepage/TargetAudienceSection';
import { KeyBenefitsSection } from '@/components/sections/homepage/KeyBenefitsSection';
import { TestimonialsSection } from '@/components/sections/homepage/TestimonialsSection';
import { CtaSection } from '@/components/sections/homepage/CtaSection';

export const metadata: Metadata = {
  title: 'صفحه اصلی - سامانه جامع مدیریت کسب و کار',
  description: 'کسب‌وکار خود را با راهکار جامع ERP ما ساده کنید. مناسب برای وکلا، دفاتر خدماتی، مهندسین، و آموزشگاه‌ها.',
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TargetAudienceSection />
      <KeyBenefitsSection />
      <TestimonialsSection />
      <CtaSection />
    </>
  );
}
