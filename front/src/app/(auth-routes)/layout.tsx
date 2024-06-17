import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

import { authOptions } from '../api/auth/[...nextauth]/route';

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}): Promise<JSX.Element> {
  const session = await getServerSession(authOptions);

  return session ? (
    session.user?.roles.includes('ROLE_ADMIN') ? (
      redirect('/admin')
    ) : (
      redirect('/user')
    )
  ) : (
    <>{children}</>
  );
}
