
import { Metadata } from 'next';
import { SectionTitle } from '@/components/sections/SectionTitle';
import { ContactForm } from '@/components/forms/ContactForm';
import { Mail, Phone, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'تماس با ما - 30Ro',
  description: 'برای درخواست دمو، دریافت مشاوره یا هرگونه سوال با تیم متخصص 30Ro تماس بگیرید. ما آماده پاسخگویی به شما هستیم.',
};

const industries = [
  { value: 'lawyer', label: 'وکلا و موسسات حقوقی' },
  { value: 'service_office', label: 'دفاتر خدماتی و مشاوره‌ای' },
  { value: 'engineering_firm', label: 'شرکت‌های فنی و مهندسی' },
  { value: 'immigration_office', label: 'دفاتر مهاجرتی' },
  { value: 'art_technical_institute', label: 'آموزشگاه‌های هنری و فنی' },
  { value: 'language_school', label: 'موسسات و آموزشگاه‌های زبان' },
  { value: 'other', label: 'سایر موارد' },
];

export default function ContactPage() {
  return (
    <div className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="ارتباط با 30Ro"
          subtitle="برای دریافت مشاوره رایگان، درخواست دمو یا هرگونه سوال، فرم زیر را تکمیل کنید یا از طریق اطلاعات تماس با ما در ارتباط باشید. تیم ما مشتاقانه منتظر شنیدن صدای شماست."
        />

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="bg-card/80 p-8 rounded-xl shadow-xl">
            <h3 className="text-2xl font-semibold text-foreground mb-6 font-headline">فرم تماس</h3>
            <ContactForm industries={industries} />
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-4 font-headline">اطلاعات تماس</h3>
              <div className="space-y-3 text-muted-foreground">
                <p className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <span>ایمیل: info@30ro.com</span>
                </p>
                <p className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <span>تلفن: ۰۹۰۲۳۳۴۳۲۱۷</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
