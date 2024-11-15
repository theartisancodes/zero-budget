import { NextResponse, type NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const protectedPaths = [
    '/',
    '/admin',
    '/budgets',
    '/expenses',
    '/investments'
  ];

  const isProtectedPath = protectedPaths.some((path) =>
    req.nextUrl.pathname.startsWith(path)
  );

  if (isProtectedPath) {
    const appSession = req.cookies.get('appSession');

    if (!appSession) {
      return NextResponse.redirect(new URL('/auth/login', req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/',
    '/admin/:path*',
    '/budgets/:path*',
    '/expenses/:path*',
    '/investments/:path*'
  ]
};
