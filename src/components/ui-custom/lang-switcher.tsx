import { useLocale, useTranslations } from 'next-intl';
import { SelectItem } from '@shadcn/select';
import LocaleSwitcherSelect from '@@/ui-custom/locale-switcher-select';

export function LanguageSwitcher() {
  const t = useTranslations('Common');
  const locale = useLocale();

  return (
    <LocaleSwitcherSelect defaultValue={locale} label={t('language')}>
      <SelectItem value="fr">{t('languageOptions.fr')}</SelectItem>
      <SelectItem value="en">{t('languageOptions.en')}</SelectItem>
    </LocaleSwitcherSelect>
  );
}
