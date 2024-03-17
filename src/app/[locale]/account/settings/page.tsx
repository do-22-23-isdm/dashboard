import { ThemeSwitcher } from '@@/ui-custom/theme-switcher';
import { useTranslations } from 'next-intl';
import { Separator } from '@shadcn/separator';
import { getTranslations } from 'next-intl/server';
import { LanguageSwitcher } from '@/components/ui-custom/lang-switcher';

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
      <div className="space-y-8">
        <div className="space-y-2">
          <h4 className="text-sm font-medium leading-none">
            {t('Common.theme')}
          </h4>
          <ThemeSwitcher
            lightLabel={t('Common.themeColors.light')}
            darkLabel={t('Common.themeColors.dark')}
          />
        </div>
        <div className="space-y-2">
          <h4 className="text-sm font-medium leading-none">
            {t('Common.language')}
          </h4>
          <LanguageSwitcher />
        </div>
      </div>
    </div>
  );
}
