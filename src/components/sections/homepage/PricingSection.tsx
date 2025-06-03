
import Link from 'next/link';
import { SectionTitle } from '@/components/sections/SectionTitle';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ButtonPrimary } from '@/components/ui/button-primary';
import { CheckCircle, ShieldCheck, Star } from 'lucide-react';

const pricingPlans = [
  {
    title: 'فروش سامانه CRM',
    price: '۱۵٬۰۰۰٬۰۰۰',
    priceSuffix: 'تومان',
    billingCycle: 'پرداخت یکباره',
    description: 'دسترسی کامل به ماژول مدیریت ارتباط با مشتریان 30Ro.',
    features: [
      'نصب و راه‌اندازی اولیه سیستم',
      'آموزش جامع کاربری نرم‌افزار',
      'امکان سفارشی‌سازی پایه',
      'دسترسی به تمامی امکانات CRM',
    ],
    ctaText: 'مشاوره و خرید پکیج',
    ctaLink: '/contact?plan=crm_sale',
    icon: <Star className="w-12 h-12 text-primary mb-4" />, // Changed icon
    highlight: false,
  },
  {
    title: 'پشتیبانی ۶ ماهه',
    price: '۷٬۴۰۰٬۰۰۰',
    priceSuffix: 'تومان',
    billingCycle: 'پرداخت شش ماهه',
    description: 'پشتیبانی فنی و به‌روزرسانی‌های مستمر برای ۶ ماه.',
    features: [
      'پشتیبانی فنی تلفنی و آنلاین',
      'دریافت به‌روزرسانی‌های نرم‌افزار',
      'رفع اشکالات و مشکلات احتمالی',
      'دسترسی به منابع آموزشی تکمیلی',
    ],
    ctaText: 'درخواست پشتیبانی ۶ ماهه',
    ctaLink: '/contact?plan=6month_support',
    icon: <ShieldCheck className="w-12 h-12 text-primary mb-4" />,
    highlight: false,
  },
  {
    title: 'پشتیبانی ۱ ساله',
    price: '۱۳٬۹۰۰٬۰۰۰',
    priceSuffix: 'تومان',
    billingCycle: 'پرداخت سالانه',
    description: 'بهترین گزینه برای پشتیبانی جامع و به‌روزرسانی‌های یکساله.',
    features: [
      'پشتیبانی فنی کامل (تلفنی، آنلاین، حضوری)',
      'دریافت تمامی به‌روزرسانی‌های اصلی و فرعی',
      'اولویت در رفع اشکالات',
      'مشاوره تخصصی دوره‌ای',
      'تخفیف ویژه تمدید',
    ],
    ctaText: 'درخواست پشتیبانی سالانه',
    ctaLink: '/contact?plan=1year_support',
    icon: <ShieldCheck className="w-12 h-12 text-primary mb-4" />, // Kept ShieldCheck, could be different
    highlight: true,
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="پلن‌های قیمت‌گذاری 30Ro"
          subtitle="راهکاری متناسب با نیاز و بودجه کسب‌وکار شما. شفاف، منعطف و قدرتمند."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"> {/* Adjusted max-width for 3 cards */}
          {pricingPlans.map((plan, index) => (
            <Card 
              key={index} 
              className={`flex flex-col rounded-xl shadow-lg hover:shadow-primary/20 transition-shadow duration-300 ${plan.highlight ? 'border-2 border-primary bg-card' : 'bg-card/80'}`}
            >
              <CardHeader className="text-center items-center p-6">
                {plan.icon}
                <CardTitle className="text-2xl font-headline font-semibold text-foreground">{plan.title}</CardTitle>
                <div className="mt-2">
                  <span className="text-4xl font-bold text-primary">{plan.price}</span>
                  <span className="text-md text-muted-foreground ml-1">{plan.priceSuffix}</span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">{plan.billingCycle}</p>
                <CardDescription className="mt-3 text-foreground/90 text-sm h-16">{plan.description}</CardDescription> {/* Increased height for description */}
              </CardHeader>
              <CardContent className="flex-grow p-6 pt-0">
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 rtl:ml-2 rtl:mr-0 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="p-6 mt-auto">
                <Link href={plan.ctaLink} className="w-full">
                  <ButtonPrimary className="w-full" variant={plan.highlight ? 'default' : 'default'} size="lg">
                    {plan.ctaText}
                  </ButtonPrimary>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
        <p className="text-center text-muted-foreground mt-12 text-sm">
          برای نیازهای خاص و سفارشی‌سازی‌های پیشرفته، <Link href="/contact" className="text-primary hover:underline">با ما تماس بگیرید</Link>.
        </p>
      </div>
    </section>
  );
}
