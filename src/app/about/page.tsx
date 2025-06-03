import { Metadata } from 'next';
import { SectionTitle } from '@/components/sections/SectionTitle';
import { ButtonPrimary } from '@/components/ui/button-primary';
import Link from 'next/link';
import Image from 'next/image';
import { Users, Target, Eye, Zap } from 'lucide-react'; // Example icons

export const metadata: Metadata = {
  title: 'درباره ما - سامانه جامع مدیریت کسب و کار',
  description: 'با ماموریت، چشم‌انداز و تیم متخصص ما آشنا شوید. ما به ارائه راهکارهای ERP نوآورانه برای کسب‌وکارهای ایرانی متعهد هستیم.',
};

const teamMembers = [
  { name: 'مهندس علی کریمی', role: 'مدیر عامل و بنیانگذار', image: 'https://placehold.co/150x150.png', imageHint: 'male team leader' },
  { name: 'دکتر سارا محمدی', role: 'مدیر فنی', image: 'https://placehold.co/150x150.png', imageHint: 'female tech lead' },
  { name: 'آقای رضا قاسمی', role: 'مدیر فروش و بازاریابی', image: 'https://placehold.co/150x150.png', imageHint: 'male sales person' },
];

export default function AboutPage() {
  return (
    <div className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="درباره سامانه جامع ERP"
          subtitle="ما به توانمندسازی کسب‌وکارهای ایرانی با ارائه راهکارهای نرم‌افزاری پیشرفته و خدمات پشتیبانی بی‌نظیر متعهد هستیم."
        />

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16 md:mb-24">
          <div>
            <Image 
              src="https://placehold.co/600x400.png" 
              alt="تیم ما در حال کار" 
              width={600} 
              height={400} 
              className="rounded-xl shadow-xl border-4 border-primary/20"
              data-ai-hint="team working office"
            />
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-primary font-headline">داستان ما</h3>
            <p className="text-muted-foreground leading-relaxed">
              ما فعالیت خود را با هدف ارائه یک راهکار ERP جامع و بومی‌سازی شده برای نیازهای خاص کسب‌وکارهای ایرانی آغاز کردیم. با تکیه بر دانش فنی تیم متخصص و درک عمیق از چالش‌های بازار ایران، محصولی را توسعه داده‌ایم که نه تنها کارآمد و قدرتمند است، بلکه استفاده از آن نیز ساده و لذت‌بخش می‌باشد.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              تلاش ما همواره بر این بوده است که با نوآوری مستمر و تمرکز بر رضایت مشتریان، به شریکی قابل اعتماد برای رشد و موفقیت کسب‌وکارها تبدیل شویم.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16 md:mb-24">
          <div className="space-y-6 md:order-2">
            <h3 className="text-2xl font-semibold text-primary font-headline">ماموریت و چشم‌انداز</h3>
            <div className="flex items-start gap-4">
              <Target className="w-10 h-10 text-accent mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-foreground mb-1">ماموریت ما</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">توانمندسازی کسب‌وکارها با فناوری ساده، هوشمند و مقیاس‌پذیر برای دستیابی به بهره‌وری حداکثری و رشد پایدار.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Eye className="w-10 h-10 text-accent mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-foreground mb-1">چشم‌انداز ما</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">تبدیل شدن به انتخاب اول کسب‌وکارهای ایرانی برای راهکارهای مدیریت سازمانی و پیشرو در ارائه نوآوری‌های فناورانه در این حوزه.</p>
              </div>
            </div>
             <div className="flex items-start gap-4">
              <Zap className="w-10 h-10 text-accent mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-foreground mb-1">ارزش‌های ما</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">نوآوری، قابلیت اطمینان، تمرکز بر مشتری، شفافیت و تعهد به تعالی.</p>
              </div>
            </div>
          </div>
          <div className="md:order-1">
             <Image 
              src="https://placehold.co/600x450.png" 
              alt="چشم انداز آینده" 
              width={600} 
              height={450} 
              className="rounded-xl shadow-xl border-4 border-primary/20"
              data-ai-hint="futuristic abstract technology"
            />
          </div>
        </div>
        
        {/* تیم ما - Optional section */}
        <div className="mb-16 md:mb-24">
          <SectionTitle title="تیم متخصص ما" subtitle="آشنایی با برخی از افراد کلیدی که در پشت صحنه موفقیت شما تلاش می‌کنند." />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {teamMembers.map(member => (
              <div key={member.name} className="text-center p-6 bg-card/70 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <Image 
                  src={member.image} 
                  alt={`عکس ${member.name}`} 
                  width={120} 
                  height={120} 
                  className="rounded-full mx-auto mb-4 border-2 border-primary"
                  data-ai-hint={member.imageHint}
                />
                <h4 className="text-lg font-semibold text-foreground font-headline">{member.name}</h4>
                <p className="text-sm text-accent">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <p className="text-xl text-foreground mb-6">
            می‌خواهید بیشتر با ما و راهکارهایمان آشنا شوید؟
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link href="/features">
              <ButtonPrimary size="lg" aria-label="مشاهده امکانات">مشاهده امکانات</ButtonPrimary>
            </Link>
            <Link href="/contact">
              <ButtonPrimary variant="default" size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90" aria-label="تماس با تیم فروش">تماس با تیم فروش</ButtonPrimary>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
