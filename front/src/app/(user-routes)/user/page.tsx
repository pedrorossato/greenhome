import { getServerSession } from 'next-auth';

import RedirectAdminPageButton from '@/components/button/redirect-admin-page-button';
import SignOutButton from '@/components/button/sign-out-button';
import { UserProfile } from '@/components/user-profile';

import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export default async function UserPage(): Promise<JSX.Element> {
  const session = await getServerSession(authOptions);

  if (!session) return <></>;
  return (
    <div className="container">
      <UserProfile.Root>
        <UserProfile.Photo userId={session.user.id} />
        <UserProfile.Content>
          <h2 className="text-2xl">{session.user.name}</h2>
          <small>{session.user.email}</small>
          <div className="flex mt-5 items-center flex-col">
            {session.user.roles.includes('ROLE_ADMIN') ? (
              <RedirectAdminPageButton />
            ) : (
              <></>
            )}
            <SignOutButton />
          </div>
        </UserProfile.Content>
      </UserProfile.Root>
    </div>
  );
}
