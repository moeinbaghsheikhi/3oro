import { Metadata } from 'next';
import { SectionTitle } from '@/components/sections/SectionTitle';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ButtonPrimary } from '@/components/ui/button-primary';
import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle, DollarSign, Users, BarChart2, Settings, ShieldCheck, MessageSquare, Zap } from 'lucide-react'; // Example icons

export const metadata: Metadata = {
  title: 'امکانات - 30Ro',
  description: 'با امکانات قدرتمند و جامع 30Ro آشنا شوید. مدیریت پروژه، ردیابی مشتریان، فاکتورسازی، گزارش‌گیری و یکپارچه‌سازی در یک پلتفرم.',
};

const coreFeatures = [
  { title: 'مدیریت پروژه', description: 'برنامه‌ریزی، اجرا و پیگیری پروژه‌ها با ابزارهای پیشرفته و همکاری تیمی موثر.', icon: <Settings className="w-8 h-8 text-primary" /> },
  { title: 'ردیابی مشتریان (CRM)', description: 'مدیریت کامل اطلاعات مشتریان، تاریخچه تعاملات، و فرصت‌های فروش برای بهبود روابط.', icon: <Users className="w-8 h-8 text-primary" /> },
  { title: 'فاکتورسازی و امور مالی', description: 'صدور فاکتورهای حرفه‌ای، مدیریت پرداخت‌ها و پیگیری وضعیت مالی کسب‌وکار.', icon: <DollarSign className="w-8 h-8 text-primary" /> },
  { title: 'گزارش‌گیری و تحلیل', description: 'دسترسی به گزارش‌های دقیق و داشبوردهای تحلیلی برای تصمیم‌گیری‌های هوشمندانه.', icon: <BarChart2 className="w-8 h-8 text-primary" /> },
];

const industrySpecificFeatures = [
  { title: 'مدیریت پرونده (وکلا)', description: 'ابزارهای تخصصی برای دفاتر حقوقی جهت مدیریت پرونده‌ها، اسناد و جلسات دادگاه.', icon: <CheckCircle className="w-8 h-8 text-primary" /> },
  { title: 'مدیریت دوره‌ها (آموزشگاه‌ها)', description: 'برنامه‌ریزی کلاس‌ها، ثبت‌نام دانش‌آموزان، و مدیریت شهریه‌ها برای موسسات آموزشی.', icon: <CheckCircle className="w-8 h-8 text-primary" /> },
  { title: 'مدیریت قراردادها (دفاتر خدماتی)', description: 'ایجاد، پیگیری و مدیریت قراردادهای مشتریان با قابلیت یادآوری و گزارش‌گیری.', icon: <CheckCircle className="w-8 h-8 text-primary" /> },
];

const advancedFeatures = [
 { title: 'یکپارچه‌سازی با سایر ابزارها', description: 'قابلیت اتصال به نرم‌افزارهای محبوب حسابداری، ایمیل مارکتینگ و دیگر سرویس‌ها.', icon: <Zap className="w-8 h-8 text-primary" /> },
 { title: 'امنیت داده پیشرفته', description: 'حفاظت از اطلاعات کسب‌وکار شما با بالاترین استانداردهای امنیتی و پشتیبان‌گیری منظم.', icon: <ShieldCheck className="w-8 h-8 text-primary" /> },
 { title: 'پشتیبانی ۲۴/۷', description: 'تیم پشتیبانی متخصص ما همیشه آماده پاسخگویی به سوالات و رفع مشکلات شماست.', icon: <MessageSquare className="w-8 h-8 text-primary" /> },
];


export default function FeaturesPage() {
  return (
    <div className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="امکانات قدرتمند برای کسب‌وکار شما"
          subtitle="30Ro با مجموعه‌ای از ابزارهای جامع، به شما کمک می‌کند تا تمامی جنبه‌های کسب‌وکار خود را به طور موثر مدیریت کنید و به رشد پایدار دست یابید."
        />

        <div className="mb-16">
          <Image 
            src="https://www.wuerth-phoenix.com/wp-content/uploads/2023/11/software-crm-migliora-efficenza.jpg" 
            alt="نمایی از امکانات متنوع 30Ro" 
            width={1200} 
            height={500} 
            className="rounded-xl shadow-xl mx-auto border-4 border-primary/20 object-cover"
          />
        </div>
        
        <Accordion type="single" collapsible defaultValue="core" className="w-full max-w-4xl mx-auto space-y-6">
          <AccordionItem value="core" className="border-b-0">
            <AccordionTrigger className="text-2xl font-headline font-semibold py-4 hover:no-underline text-foreground data-[state=open]:text-primary transition-colors">
              امکانات اصلی سیستم
            </AccordionTrigger>
            <AccordionContent className="pt-2">
              <div className="grid md:grid-cols-2 gap-6">
                {coreFeatures.map(feature => (
                  <Card key={feature.title} className="bg-card/80 hover:shadow-lg transition-shadow">
                    <CardHeader className="flex flex-row items-center gap-4">
                      {feature.icon}
                      <CardTitle className="text-lg font-semibold">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="industry-specific" className="border-b-0">
            <AccordionTrigger className="text-2xl font-headline font-semibold py-4 hover:no-underline text-foreground data-[state=open]:text-primary transition-colors">
              ابزارهای ویژه صنایع
            </AccordionTrigger>
            <AccordionContent className="pt-2">
              <div className="grid md:grid-cols-2 gap-6">
                {industrySpecificFeatures.map(feature => (
                  <Card key={feature.title} className="bg-card/80 hover:shadow-lg transition-shadow">
                     <CardHeader className="flex flex-row items-center gap-4">
                      {feature.icon}
                      <CardTitle className="text-lg font-semibold">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="advanced" className="border-b-0">
            <AccordionTrigger className="text-2xl font-headline font-semibold py-4 hover:no-underline text-foreground data-[state=open]:text-primary transition-colors">
              تحلیل، یکپارچه‌سازی و امنیت
            </AccordionTrigger>
            <AccordionContent className="pt-2">
              <div className="grid md:grid-cols-2 gap-6">
                {advancedFeatures.map(feature => (
                 <Card key={feature.title} className="bg-card/80 hover:shadow-lg transition-shadow">
                    <CardHeader className="flex flex-row items-center gap-4">
                      {feature.icon}
                      <CardTitle className="text-lg font-semibold">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className="mt-20 text-center">
          <p className="text-xl text-foreground mb-6">
            آماده‌اید تا با امکانات بی‌نظیر ما آشنا شوید؟
          </p>
          <Link href="/contact?demo=true">
            <ButtonPrimary size="lg" aria-label="درخواست دموی تخصصی">
              درخواست دموی تخصصی
            </ButtonPrimary>
          </Link>
        </div>
      </div>
    </div>
  );
}
