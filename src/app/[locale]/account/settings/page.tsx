import { ThemeSwitcher } from '@@/ui-custom/theme-switcher';
import { useTranslations } from 'next-intl';
import { Separator } from '@shadcn/separator';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata() {
  const t = await getTranslations();

  return {
    title: `${t('Account.Settings.title')} - ${t('Metadata.appTitle')}`,
    description: t('Account.Settings.description'),
  };
}

export default function Settings() {
  const t = useTranslations();

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">{t('Account.Settings.title')}</h3>
        <p className="text-sm text-muted-foreground">
          {t('Account.Settings.description')}
        </p>
      </div>
      <Separator />
      <div>
        <ThemeSwitcher
          lightLabel={t('Common.themeColors.light')}
          darkLabel={t('Common.themeColors.dark')}
        />
      </div>
    </div>
  );
}
