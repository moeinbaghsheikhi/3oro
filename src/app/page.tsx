import { Metadata } from 'next';
import { HeroSection } from '@/components/sections/homepage/HeroSection';
import { TargetAudienceSection } from '@/components/sections/homepage/TargetAudienceSection';
import { KeyBenefitsSection } from '@/components/sections/homepage/KeyBenefitsSection';
import { TestimonialsSection } from '@/components/sections/homepage/TestimonialsSection';
import { CtaSection } from '@/components/sections/homepage/CtaSection';

export const metadata: Metadata = {
  title: 'صفحه اصلی - 30Ro',
  description: 'کسب‌وکار خود را با 30Ro ساده کنید. راهکاری جامع مناسب برای وکلا، دفاتر خدماتی، مهندسین، و آموزشگاه‌ها.',
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
