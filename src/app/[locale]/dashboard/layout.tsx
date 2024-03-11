import { getTranslations } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import { LayoutDashboard, Inbox } from 'lucide-react';
import { Sidebar, SidebarSection } from '@@/navigation/sidebar/sidebar';
import { SidebarItem } from '@@/navigation/sidebar/item';

export async function generateMetadata() {
  const t = await getTranslations();

  return {
    title: `${t('Dashboard.title')} - ${t('Metadata.appTitle')}`,
    description: t('Dashboard.description'),
  };
}

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const t = useTranslations('Dashboard.Sidebar');

  return (
    <div className="grid lg:grid-cols-5 flex-1">
      <Sidebar className="hidden lg:block">
        <SidebarSection>
          <SidebarItem
            title={t('overview')}
            href={'/dashboard'}
            icon={<LayoutDashboard />}
          />
          <SidebarItem
            title={t('alerts')}
            href={'/dashboard/alerts'}
            icon={<Inbox />}
          />
        </SidebarSection>
      </Sidebar>
      <div className="col-span-3 lg:col-span-4 lg:border-l">
        <div className="h-full px-4 py-6 lg:px-8">{children}</div>
      </div>
    </div>
  );
}
