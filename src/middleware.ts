import createMiddleware from 'next-intl/middleware';
import { NextResponse } from 'next/server';
import { auth } from '@/auth';

const locales = ['en', 'fr'];

const intlMiddleware = createMiddleware({
  defaultLocale: 'en',
  locales,
  // See: https://next-intl-docs.vercel.app/docs/routing/middleware#locale-prefix-never
  localePrefix: 'never',
});

export default auth((req) => {
  const session = req.auth;
  const path = req.nextUrl.pathname;

  if (session === null && path.startsWith('/dashboard')) {
    const url = req.nextUrl.clone();
    url.pathname = '/api/auth/signin';
    return NextResponse.redirect(url);
  }

  // Note: if a path with smth like `/fr/dashboard`
  // the middleware will be recalled with `/dashboard`
  // and can be handled in the next middleware
  return intlMiddleware(req);
});

export const config = {
  matcher: [
    // Match all request paths except for the ones starting with:
    // - api (API routes)
    // - _next/static (static files)
    // - _next/image (image optimization files)
    // - favicon.ico (favicon file)
    // and do not forget to add every subfolder in `-/public` to this exclusion
    // (not pretty but workaround for now)
    '/((?!api|_next/static|_next/image|images|favicon.ico).*)',
  ],
};
