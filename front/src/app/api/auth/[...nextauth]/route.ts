import NextAuth from 'next-auth';
import type { NextAuthOptions, User } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        const res = await fetch(
          process.env.NEXT_PUBLIC_API_URL + '/auth/authenticate',
          {
            method: 'POST',
            body: JSON.stringify({
              email: credentials?.email,
              password: credentials?.password,
            }),
            headers: { 'Content-Type': 'application/json' },
          },
        );
        const data = await res.json();
        if (!res.ok) {
          throw new Error();
        }

        if (res.ok && data) {
          return data.user;
        }
        return null;
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/login',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        return {
          ...token,
          user,
        };
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user = token.user as User;
        session.token = session.user.token;
      }
      const jwtPayload = JSON.parse(atob(session.user.token.split('.')[1]));
      session.expires = new Date(jwtPayload.exp * 1000).toISOString();
      if (new Date() > new Date(session.expires)) return {};
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
