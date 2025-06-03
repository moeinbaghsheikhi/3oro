import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { SectionTitle } from '@/components/sections/SectionTitle';
import { Zap, Users, TrendingUp, Smile, Settings } from 'lucide-react'; // Example icons

const benefits = [
  {
    icon: <Zap className="w-10 h-10 text-primary" />,
    title: 'اتوماسیون هوشمند',
    description: 'فرآیندهای تکراری را خودکار کنید، در زمان صرفه‌جویی کرده و خطاهای انسانی را کاهش دهید تا تیم شما بر وظایف مهم‌تر تمرکز کند.',
  },
  {
    icon: <TrendingUp className="w-10 h-10 text-primary" />,
    title: 'مقیاس‌پذیری و رشد',
    description: 'با رشد کسب‌وکار شما، سیستم ما نیز همراهتان خواهد بود. به سادگی ماژول‌ها و کاربران جدید اضافه کنید.',
  },
  {
    icon: <Smile className="w-10 h-10 text-primary" />,
    title: 'رابط کاربری آسان',
    description: 'طراحی شده برای استفاده راحت و سریع، بدون نیاز به دانش فنی پیچیده. تجربه کاربری لذت‌بخش برای تمامی کاربران.',
  },
  {
    icon: <Users className="w-10 h-10 text-primary" />,
    title: 'مدیریت یکپارچه مشتریان',
    description: 'اطلاعات مشتریان، تاریخچه تعاملات و فرصت‌های فروش را در یک مکان مرکزی مدیریت کنید و روابط قوی‌تری بسازید.',
  },
  {
    icon: <Settings className="w-10 h-10 text-primary" />,
    title: 'گزارش‌گیری پیشرفته',
    description: 'با گزارش‌های جامع و تحلیل‌های دقیق، دید کاملی از عملکرد کسب‌وکار خود داشته باشید و تصمیمات داده‌محور بگیرید.',
  },
];

export function KeyBenefitsSection() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="مزایای کلیدی سیستم ERP ما"
          subtitle="چرا کسب‌وکارهای موفق، راهکار جامع ما را انتخاب می‌کنند؟"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.slice(0,3).map((benefit, index) => ( // Show 3 main benefits
            <Card key={index} className="text-center shadow-lg hover:shadow-primary/20 transition-shadow duration-300">
              <CardHeader className="items-center">
                {benefit.icon}
              </CardHeader>
              <CardContent>
                <CardTitle className="mb-3 text-xl font-headline">{benefit.title}</CardTitle>
                <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
