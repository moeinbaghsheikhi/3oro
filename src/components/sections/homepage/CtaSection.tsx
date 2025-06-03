import Link from 'next/link';
import { ButtonPrimary } from '@/components/ui/button-primary';
import { SectionTitle } from '@/components/sections/SectionTitle';

export function CtaSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SectionTitle 
          title="آماده‌اید کسب‌وکار خود را متحول کنید؟"
          subtitle="همین امروز با تیم متخصص ما تماس بگیرید و اولین قدم را برای مدیریت هوشمندانه و رشد پایدار کسب‌وکار خود بردارید."
          className="mb-8"
        />
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link href="/contact?demo=true">
            <ButtonPrimary size="lg" aria-label="درخواست دموی رایگان">
              درخواست دمو رایگان
            </ButtonPrimary>
          </Link>
          <Link href="/contact">
            <ButtonPrimary variant="default" size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90" aria-label="تماس با ما">
              تماس با ما
            </ButtonPrimary>
          </Link>
        </div>
      </div>
    </section>
  );
}
