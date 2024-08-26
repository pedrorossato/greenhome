import RedirectAdminPageButton from '@/components/button/redirect-admin-page-button';
import { UserProfile } from '@/components/user-profile';

import { verifySession } from '@/app/lib/session';

export default async function UserPage(): Promise<JSX.Element> {
  const session = await verifySession();

  if (!session) return <></>;
  return (
    <div className="container">
      <UserProfile.Root>
        <UserProfile.Photo imageUrl={session.user.image} />
        <UserProfile.Content>
          <h2 className="text-2xl">{session.user.name}</h2>
          <small>{session.user.email}</small>
          <div className="flex mt-5 items-center flex-col">
            {session.user.roles.includes('ROLE_ADMIN') ? (
              <RedirectAdminPageButton />
            ) : (
              <></>
            )}
          </div>
        </UserProfile.Content>
      </UserProfile.Root>
    </div>
  );
}
