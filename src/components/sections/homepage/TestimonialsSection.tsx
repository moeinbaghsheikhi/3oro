import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { SectionTitle } from '@/components/sections/SectionTitle';
import Image from 'next/image';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'خانم احمدی',
    role: 'وکیل پایه یک دادگستری',
    image: 'https://placehold.co/100x100.png',
    imageHint: 'professional woman',
    quote: 'از وقتی از این سیستم ERP استفاده می‌کنیم، مدیریت پرونده‌ها و ارتباط با موکلین بسیار ساده‌تر شده است. بهره‌وری دفتر ما به طور چشمگیری افزایش یافته!',
    stars: 5,
  },
  {
    name: 'آقای مهندس رضایی',
    role: 'مدیرعامل شرکت فنی مهندسی',
    image: 'https://placehold.co/100x100.png',
    imageHint: 'professional man',
    quote: 'این ERP به ما کمک کرده تا پروژه‌ها را بهتر مدیریت کنیم و گزارش‌های دقیقی از پیشرفت کار داشته باشیم. واقعا توصیه می‌کنم.',
    stars: 5,
  },
  {
    name: 'خانم دکتر شریفی',
    role: 'مدیر آموزشگاه زبان',
    image: 'https://placehold.co/100x100.png',
    imageHint: 'educator woman',
    quote: 'ثبت‌نام دانش‌آموزان، برنامه‌ریزی کلاس‌ها و امور مالی آموزشگاه با این سیستم بسیار منظم و کارآمد شده است. تیم پشتیبانی هم عالی هستند.',
    stars: 4,
  },
];

const RatingStars = ({ count }: { count: number }) => (
  <div className="flex items-center justify-center text-primary">
    {Array(count).fill(0).map((_, i) => (
        <Star key={i} className="w-5 h-5 fill-current" />
      ))}
    {Array(5-count).fill(0).map((_, i) => (
        <Star key={i+count} className="w-5 h-5 text-muted-foreground/50" />
      ))}
  </div>
);


export function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="صدای مشتریان ما"
          subtitle="بشنوید از کسب‌وکارهایی که با کمک سیستم ERP ما به موفقیت‌های جدیدی دست یافته‌اند."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="flex flex-col text-center bg-card/80 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="items-center pt-8">
                <Image 
                  src={testimonial.image} 
                  alt={`عکس ${testimonial.name}`} 
                  width={80} 
                  height={80} 
                  className="rounded-full mb-4 border-2 border-primary"
                  data-ai-hint={testimonial.imageHint}
                />
                <CardTitle className="text-lg font-semibold font-headline">{testimonial.name}</CardTitle>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-foreground leading-relaxed italic">"{testimonial.quote}"</p>
              </CardContent>
              <CardFooter className="flex-col items-center pb-8">
                <RatingStars count={testimonial.stars} />
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
