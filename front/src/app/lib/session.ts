import 'server-only';

import { cookies } from 'next/headers';

import { type Session } from '@/types/user';
import { type JWTPayload, SignJWT, jwtVerify } from 'jose';
import { jwtDecode } from 'jwt-decode';

const secretKey = process.env.NEXT_PUBLIC_SESSION_SECRET;
const encodedKey = new TextEncoder().encode(secretKey);

export async function encrypt(payload: JWTPayload): Promise<string> {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('7d')
    .sign(encodedKey);
}

export async function decrypt(
  session: string | undefined = '',
): Promise<JWTPayload | undefined> {
  try {
    console.log(secretKey);
    console.log(encodedKey);

    const { payload } = await jwtVerify(session, encodedKey, {
      algorithms: ['HS256'],
    });
    return payload;
  } catch (error: any) {
    console.log('Failed to verify session', error.message);
  }
}

export async function createSession(session: Session): Promise<void> {
  const decodedToken = jwtDecode<{ exp: number }>(session.user.token);
  const expiresAt = new Date(decodedToken.exp * 1000);
  const sessionEncrypted = await encrypt({ session });

  cookies().set('session', sessionEncrypted, {
    httpOnly: true,
    secure: true,
    expires: expiresAt,
    sameSite: 'lax',
    path: '/',
  });
}

export async function updateSession(): Promise<null | undefined> {
  const session = cookies().get('session')?.value;
  const payload = await decrypt(session);

  if (!session || !payload) {
    return null;
  }

  const expires = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
  cookies().set('session', session, {
    httpOnly: true,
    secure: true,
    expires,
    sameSite: 'lax',
    path: '/',
  });
}

export const verifySession = async (): Promise<Session | undefined> => {
  const cookie = cookies().get('session')?.value;
  const jwtPayload = await decrypt(cookie);
  const session = jwtPayload?.session as Session | undefined;
  // if (!session?.user.id) {
  //   redirect('/login');
  // }

  return session;
};

export function deleteSession(): void {
  cookies().delete('session');
}
