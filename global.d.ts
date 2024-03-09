// Use type safe message keys with `next-intl`
type DefaultMessages = typeof import('./locales/en.json');
type FrMessages = typeof import('./locales/fr.json');

declare interface IntlMessages extends DefaultMessages, FrMessages {}
