import NextAuth from 'next-auth';

declare module 'next-auth' {
  interface JWT {
    name: string;
    email: string;
    sub: string;
    user: User;
    iat: number;
    exp: number;
    jti: string;
  }
  interface Session {
    user: User;
    token: string;
  }

  interface User {
    id: number;
    email: string;
    name: string;
    roles: string[];
    token: string;
  }
}
