import { NextRequest, NextResponse } from 'next/server';
import { routing } from './src/i18n/routing';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  
  // Skip if it's already a locale path
  if (pathname.startsWith('/fr/') || pathname.startsWith('/en/')) {
    return NextResponse.next();
  }
  
  // Skip API routes and static files
  if (pathname.startsWith('/api/') || pathname.startsWith('/_next/') || pathname.includes('.')) {
    return NextResponse.next();
  }
  
  // Redirect to default locale
  const url = request.nextUrl.clone();
  url.pathname = `/${routing.defaultLocale}${pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: [
    // Match all pathnames except for
    // - … if they start with `/api`, `/_next` or `/_vercel`
    // - … the ones containing a dot (e.g. `favicon.ico`)
    '/((?!api|_next|_vercel|.*\\..*).*)'
  ]
}; 