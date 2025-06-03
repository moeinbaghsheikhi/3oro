
"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, Building } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const navLinks = [
  { href: '/', label: 'صفحه اصلی' },
  { href: '/features', label: 'امکانات' },
  { href: '/about', label: 'درباره ما' },
  { href: '/contact', label: 'تماس با ما' },
];

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);


  const NavLinksContent = () => (
    <>
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="text-foreground hover:text-primary transition-colors px-3 py-2 rounded-md text-sm font-medium"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          {link.label}
        </Link>
      ))}
    </>
  );

  if (!mounted) {
    return (
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2">
            <Building className="h-6 w-6 text-primary" />
            <span className="font-bold text-lg text-foreground">سامانه جامع ERP</span>
          </Link>
          {/* Placeholder for links during SSR to avoid layout shift */}
          <nav className="hidden md:flex gap-2">
            <div className="h-6 w-20 bg-muted rounded-md animate-pulse"></div>
            <div className="h-6 w-16 bg-muted rounded-md animate-pulse"></div>
            <div className="h-6 w-24 bg-muted rounded-md animate-pulse"></div>
            <div className="h-6 w-20 bg-muted rounded-md animate-pulse"></div>
          </nav>
          <div className="md:hidden">
            <Button variant="ghost" size="icon" className="h-9 w-9">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="container mx-auto flex h-16 max-w-screen-2xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2" aria-label="صفحه اصلی سامانه جامع ERP">
          <Building className="h-7 w-7 text-primary" />
          <span className="font-bold text-xl text-foreground whitespace-nowrap">سامانه جامع ERP</span>
        </Link>

        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          <NavLinksContent />
        </nav>

        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="باز کردن منو">
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-3/4 bg-background p-6">
              <div className="flex flex-col items-end space-y-4 pt-6">
                <NavLinksContent />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
