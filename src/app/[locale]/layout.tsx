import Link from 'next/link';
import { getTranslations } from 'next-intl/server';
import { Inter } from 'next/font/google';
import { LogIn } from 'lucide-react';
import { auth } from '@/auth';
import { cn } from '@/lib/utils';
import { Button } from '@shadcn/button';
import { ThemeProvider } from '@@/providers/theme-provider';
import { ThemeSwitcher } from '@@/ui-custom/theme-switcher';
import { Topbar, TopbarSection } from '@@/navigation/topbar';
import { MainNav, MainNavItem } from '@@/navigation/main-nav';
import { UserNav } from '@@/navigation/user-nav';

const inter = Inter({ subsets: ['latin'] });

export async function generateMetadata() {
  const t = await getTranslations();

  return {
    title: `${t('Homepage.title')} - ${t('Metadata.appTitle')}`,
    description: t('Homepage.description'),
  };
}

type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

export default async function LocaleLayout({
  children,
  params: { locale },
}: Props) {
  const t = await getTranslations();
  const session = await auth();

  return (
    <html lang={locale} suppressHydrationWarning>
      <head />
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          inter.className,
        )}
      >
        <ThemeProvider>
          <div className="flex min-h-screen flex-col">
            <Topbar>
              <TopbarSection>
                <MainNav>
                  <MainNavItem
                    link={{
                      title: t('Metadata.appTitle'),
                      href: '/',
                      level: 'h1',
                    }}
                  />
                  {session && (
                    <MainNavItem
                      link={{
                        title: t('Dashboard.title'),
                        href: '/dashboard',
                      }}
                    />
                  )}
                </MainNav>
              </TopbarSection>
              <TopbarSection>
                <ThemeSwitcher />
                {session && <UserNav />}
                {session === null && (
                  <Button size="sm" asChild className="space-x-1">
                    <Link href="/api/auth/signin">
                      <LogIn className="w-4 h-4" />
                      <span>{t('Common.login')}</span>
                    </Link>
                  </Button>
                )}
              </TopbarSection>
            </Topbar>
            <main className="flex-1 flex">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
