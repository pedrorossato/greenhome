'use client';

import { type Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import React from 'react';

export default function ClientProviders({
  children,
  session,
}: {
  children: React.ReactNode;
  session: Session | null;
}): React.JSX.Element {
  return <SessionProvider session={session}>{children}</SessionProvider>;
}
