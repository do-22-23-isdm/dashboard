import { getTranslations } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import { Inter } from 'next/font/google';
import { cn } from '@/lib/utils';
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

export default function LocaleLayout({ children, params: { locale } }: Props) {
  const t = useTranslations();

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
              <MainNav className="ml-6">
                <MainNavItem
                  link={{
                    title: t('Metadata.appTitle'),
                    href: '/',
                    level: 'h1',
                  }}
                />
                <MainNavItem
                  link={{
                    title: t('Dashboard.title'),
                    href: '/dashboard',
                  }}
                />
              </MainNav>
            </TopbarSection>
            <TopbarSection>
              <ThemeSwitcher />
              <UserNav />
            </TopbarSection>
          </Topbar>
          <main className="flex-1 flex">{children}</main>
        </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
