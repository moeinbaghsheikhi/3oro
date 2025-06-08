
import Link from 'next/link';
import { ButtonPrimary } from '@/components/ui/button-primary';
import Image from 'next/image';

export function HeroSection() {
  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-br from-background to-muted/30 overflow-hidden">
      <div 
        className="absolute inset-0 opacity-10" 
        style={{
          backgroundImage: "url('/geometric-pattern.svg')", 
          backgroundRepeat: 'repeat',
          backgroundSize: '400px 400px',
          filter: 'blur(2px)',
        }}
        aria-hidden="true"
      ></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="md:order-2 text-center md:text-right">
            <h1 className="text-3xl sm:text-4xl md:text-4xl font-extrabold text-foreground mb-6 font-headline leading-tight">
              <span className="text-primary">30Ro</span> یک Erp جامع و حرفه ای
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto md:mx-0 md:mr-auto mb-10">
              مدیریت یکپارچه، افزایش بهره‌وری، و تصمیم‌گیری هوشمندانه برای تمامی کسب‌وکارها، از دفاتر کوچک تا شرکت‌های بزرگ.
            </p>
            <Link href="/contact?demo=true">
              <ButtonPrimary size="lg" aria-label="درخواست دموی رایگان">
                درخواست دمو رایگان
              </ButtonPrimary>
            </Link>
          </div>
          <div className="md:order-1 mt-12 md:mt-0 relative">
            <Image 
              src="https://taskulu.com/sites/default/files/styles/d11_5_custom/public/1399-10/dynamics-365-crm-technology-has-never-been-easier-adapt-your-business-needs-behaviors-customers.jpeg?h=f7d9296c&itok=2FCaPHzZ"
              alt="نمایی از داشبورد 30Ro" 
              width={600} 
              height={450} 
              className="rounded-xl shadow-2xl mx-auto md:mx-0 border-4 border-primary/30 object-cover"
              priority
              data-ai-hint="ERP dashboard"
            />
            <div className="absolute -bottom-8 -left-8 w-24 h-24 md:w-32 md:h-32 bg-primary/20 rounded-full blur-2xl opacity-70 animate-pulse" aria-hidden="true"></div>
            <div className="absolute -top-8 -right-8 w-32 h-32 md:w-40 md:h-40 bg-accent/20 rounded-full blur-2xl opacity-70 animate-pulse delay-500" aria-hidden="true"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
