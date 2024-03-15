import { useLocale, useTranslations } from 'next-intl';
import LocaleSwitcherSelect from '@@/ui-custom/locale-switcher-select';

export function LanguageSwitcher() {
  const t = useTranslations('Common');
  const locale = useLocale();

  return (
    <LocaleSwitcherSelect defaultValue={locale} label={t('language')}>
      <option value="fr">{t('languageOptions.fr')}</option>
      <option value="en">{t('languageOptions.en')}</option>
    </LocaleSwitcherSelect>
  );
}
