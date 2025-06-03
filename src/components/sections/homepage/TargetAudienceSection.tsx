import { generateErpBenefits } from '@/ai/flows/generate-erp-benefits';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { SectionTitle } from '@/components/sections/SectionTitle';
import { Briefcase, GraduationCap, Scale, Users, Plane, Palette } from 'lucide-react'; // Example icons

const industries = [
  { name: 'وکلا و موسسات حقوقی', icon: <Scale className="w-10 h-10 text-primary mb-4" />, value: 'وکلا' },
  { name: 'دفاتر خدماتی و مشاوره‌ای', icon: <Users className="w-10 h-10 text-primary mb-4" />, value: 'دفاتر خدماتی' },
  { name: 'شرکت‌های فنی و مهندسی', icon: <Briefcase className="w-10 h-10 text-primary mb-4" />, value: 'دفاتر فنی مهندسی' },
  { name: 'دفاتر مهاجرتی', icon: <Plane className="w-10 h-10 text-primary mb-4" />, value: 'دفاتر مهاجرتی' },
  { name: 'آموزشگاه‌های هنری و فنی', icon: <Palette className="w-10 h-10 text-primary mb-4" />, value: 'آموزشگاه‌های هنری و فنی' },
  { name: 'موسسات و آموزشگاه‌های زبان', icon: <GraduationCap className="w-10 h-10 text-primary mb-4" />, value: 'آموزشگاه‌های زبان' },
];

async function IndustryBenefitCard({ industryName, industryValue, icon }: { industryName: string; industryValue: string; icon: React.ReactNode }) {
  let benefitsDescription = `مزایای کلیدی برای ${industryName}...`; // Default description
  try {
    const result = await generateErpBenefits({ industry: industryValue });
    if (result && result.benefits) {
      benefitsDescription = result.benefits;
    }
  } catch (error) {
    console.error(`Failed to generate benefits for ${industryName}:`, error);
    // Keep default or a generic error message if preferred
    benefitsDescription = `سیستم ERP ما به ${industryName} کمک می‌کند تا فرآیندهای خود را بهینه‌سازی کرده و بهره‌وری را افزایش دهند.`;
  }

  return (
    <Card className="bg-card/80 hover:shadow-xl transition-shadow duration-300 flex flex-col">
      <CardHeader className="items-center text-center">
        {icon}
        <CardTitle className="font-headline text-xl text-center">{industryName}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="text-sm text-center text-muted-foreground leading-relaxed">
          {benefitsDescription}
        </CardDescription>
      </CardContent>
    </Card>
  );
}

export async function TargetAudienceSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="راهکاری برای هر کسب‌وکار"
          subtitle="سیستم ERP ما با انعطاف‌پذیری بالا، برای طیف وسیعی از صنایع طراحی شده است تا نیازهای منحصر به فرد هر کسب‌وکار را پوشش دهد."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry) => (
            <IndustryBenefitCard 
              key={industry.value} 
              industryName={industry.name} 
              industryValue={industry.value} 
              icon={industry.icon} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}
