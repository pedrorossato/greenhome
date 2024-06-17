import { getServerSession } from 'next-auth';

import SignOutButton from '@/components/button/sign-out-button';
import PropertyDatatable from '@/components/datatable/property/property-datatable';
import { UserProfile } from '@/components/user-profile';

import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { fetcher } from '@/services/fetcher';
import { type Property } from '@/types/properties/property';

export default async function AdminPage(): Promise<JSX.Element> {
  const session = await getServerSession(authOptions);
  if (!session) return <></>;

  const properties = await fetcher<Property[]>('/property', 'GET', undefined, [
    'properties',
  ]);

  return (
    <div className="container">
      <UserProfile.Root>
        <UserProfile.Photo userId={session.user.id} />
        <UserProfile.Content>
          <h2 className="text-2xl">{session.user.name}</h2>
          <small>{session.user.email}</small>
          <div className="mt-5">
            <SignOutButton />
          </div>
        </UserProfile.Content>
      </UserProfile.Root>
      <PropertyDatatable properties={properties} />
    </div>
  );
}
