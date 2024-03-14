import { useTranslations } from 'next-intl';
import { Settings2, User } from 'lucide-react';
import { Separator } from '@shadcn/separator';
import { Sidebar, SidebarSection } from '@@/navigation/sidebar';
import { SidebarItem } from '@@/navigation/sidebar/item';

type Props = {
  children: React.ReactNode;
};

export default function Profile({ children }: Props) {
  const t = useTranslations();
  return (
    <div className="hidden space-y-6 pt-10 px-16 pb-16 md:block flex-1">
      <div className="space-y-0.5">
        <h2 className="text-2xl font-bold tracking-tight">
          {t('Account.title')}
        </h2>
        <p className="text-muted-foreground">{t('Account.description')}</p>
      </div>
      <Separator className="my-6" />
      <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
        <aside className="-mx-4 lg:w-1/5">
          <Sidebar className="hidden lg:block">
            <SidebarSection>
              <SidebarItem
                title={t('Account.Profile.title')}
                href={'/account'}
                icon={<User />}
              />
              <SidebarItem
                title={t('Account.Settings.title')}
                href={'/account/settings'}
                icon={<Settings2 />}
              />
            </SidebarSection>
          </Sidebar>
        </aside>
        <div className="flex-1 lg:max-w-2xl">{children}</div>
      </div>
    </div>
  );
}
