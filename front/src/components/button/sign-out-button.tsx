'use client';

import { signOut } from 'next-auth/react';

export default function SignOutButton(): JSX.Element {
  return (
    <button
      onClick={async () => {
        await signOut({ redirect: true, callbackUrl: '/login' });
      }}
      className="text-primary-gray bg-primary-blue hover:bg-blue-800 rounded-md text-sm px-5 py-2"
    >
      Sair
    </button>
  );
}
