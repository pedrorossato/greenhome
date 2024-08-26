import { cookies } from 'next/headers';
import { type NextRequest, NextResponse } from 'next/server';

import { decrypt } from '@/app/lib/session';

import { type Session } from './types/user';

const protectedRoutes = ['/admin', '/user'];
const publicRoutes = ['/login', '/register', '/'];

export default async function middleware(
  req: NextRequest,
): Promise<NextResponse<unknown>> {
  const path = req.nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.includes(path);
  const isPublicRoute = publicRoutes.includes(path);

  const cookie = cookies().get('session')?.value;
  const jwtPayload = cookie ? await decrypt(cookie) : null;
  const session = jwtPayload?.session as Session;

  if (isProtectedRoute && !session?.user.id) {
    return NextResponse.redirect(new URL('/login', req.nextUrl));
  }

  if (path === '/admin' && !session.user.roles.includes('ROLE_ADMIN')) {
    return NextResponse.redirect(new URL('/user', req.nextUrl));
  }

  if (
    isPublicRoute &&
    session?.user.id &&
    !req.nextUrl.pathname.startsWith('/')
  ) {
    return NextResponse.redirect(new URL('/', req.nextUrl));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};
