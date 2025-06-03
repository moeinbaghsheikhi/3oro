import Link from 'next/link';
import { ButtonPrimary } from '@/components/ui/button-primary';
import Image from 'next/image';

export function HeroSection() {
  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-br from-background to-muted/30 overflow-hidden">
       <div 
        className="absolute inset-0 opacity-10" 
        style={{
          backgroundImage: "url('/geometric-pattern.svg')", // Placeholder for a subtle background pattern
          backgroundRepeat: 'repeat',
          backgroundSize: '400px 400px',
          filter: 'blur(2px)',
        }}
        aria-hidden="true"
      ></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-foreground mb-6 font-headline leading-tight">
          کسب‌وکار خود را با راهکار جامع <span className="text-primary">30Ro</span> ساده کنید
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
          مدیریت یکپارچه، افزایش بهره‌وری، و تصمیم‌گیری هوشمندانه برای تمامی کسب‌وکارها، از دفاتر کوچک تا شرکت‌های بزرگ.
        </p>
        <Link href="/contact?demo=true">
          <ButtonPrimary size="lg" aria-label="درخواست دموی رایگان">
            درخواست دمو رایگان
          </ButtonPrimary>
        </Link>
        <div className="mt-16 relative">
          <Image 
            src="https://placehold.co/1000x500.png" 
            alt="نمایی از داشبورد 30Ro" 
            width={1000} 
            height={500} 
            className="rounded-xl shadow-2xl mx-auto border-4 border-primary/30"
            data-ai-hint="dashboard software"
            priority
          />
          <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-primary/20 rounded-full blur-2xl opacity-70 animate-pulse" aria-hidden="true"></div>
          <div className="absolute -top-8 -right-8 w-40 h-40 bg-accent/20 rounded-full blur-2xl opacity-70 animate-pulse delay-500" aria-hidden="true"></div>
        </div>
      </div>
    </section>
  );
}
