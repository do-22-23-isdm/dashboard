// Use type safe message keys with `next-intl`
type DefaultMessages = typeof import('src/locales/en.json');
type FrMessages = typeof import('src/locales/fr.json');

declare interface IntlMessages extends DefaultMessages, FrMessages {}
