import Link from 'next/link';
import { Twitter, Linkedin, Instagram, Building } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t border-border/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Building className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-foreground">30Ro</span>
            </Link>
            <p className="text-muted-foreground text-sm">
              راهکاری نوین برای مدیریت یکپارچه و رشد کسب و کار شما. ما به توانمندسازی کسب‌وکارها با فناوری ساده و مقیاس‌پذیر متعهد هستیم.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">لینک‌های مفید</h3>
            <ul className="space-y-2">
              <li><Link href="/features" className="text-muted-foreground hover:text-primary transition-colors">امکانات</Link></li>
              <li><Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">درباره ما</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">تماس با ما</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">سیاست حفظ حریم خصوصی</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">تماس با ما</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>ایمیل: info@30ro.com</li>
              <li>تلفن: ۰۹۰۲۳۳۴۳۲۱۷</li>
              <li>آدرس: -</li>
            </ul>
            <div className="flex space-x-4 space-x-reverse mt-6">
              <Link href="#" aria-label="توییتر" className="text-muted-foreground hover:text-primary transition-colors"><Twitter size={20} /></Link>
              <Link href="#" aria-label="لینکدین" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin size={20} /></Link>
              <Link href="#" aria-label="اینستاگرام" className="text-muted-foreground hover:text-primary transition-colors"><Instagram size={20} /></Link>
            </div>
          </div>
        </div>
        <div className="mt-10 pt-8 border-t border-border/60 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} 30Ro. تمامی حقوق محفوظ است.</p>
        </div>
      </div>
    </footer>
  );
}
