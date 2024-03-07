import { getTranslations } from 'next-intl/server';
import { Sidebar } from '@@/sidebar';

export async function generateMetadata() {
  const t = await getTranslations();

  return {
    title: `${t('Dashboard.title')} - ${t('Metadata.appTitle')}`,
    description: t('Dashboard.description'),
  };
}

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid lg:grid-cols-5 flex-1">
      <Sidebar className="hidden lg:block" />
      <div className="col-span-3 lg:col-span-4 lg:border-l">
        <div className="h-full px-4 py-6 lg:px-8">{children}</div>
      </div>
    </div>
  );
}