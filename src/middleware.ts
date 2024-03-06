import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['en', 'fr'],
  defaultLocale: 'en',
  // See: https://next-intl-docs.vercel.app/docs/routing/middleware#locale-prefix-never
  localePrefix: 'never',
});

export const config = {
  matcher: [
    // Match all pathnames except for
    // - … if they start with `/api`, `/_next` or `/_vercel`
    // - … the ones containing a dot (e.g. `favicon.ico`)
    '/((?!api|_next|_vercel|.*\\..*).*)',
  ],
};
