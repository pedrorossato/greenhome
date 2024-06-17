import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

import { authOptions } from '../api/auth/[...nextauth]/route';

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}): Promise<JSX.Element> {
  const session = await getServerSession(authOptions);

  return session?.user?.roles.includes('ROLE_USER') ? (
    <div className="bg-white">{children}</div>
  ) : (
    redirect('/login')
  );
}
