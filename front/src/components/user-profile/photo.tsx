import { fetcher } from '@/services/fetcher';

export default async function Photo({
  userId,
}: {
  userId: number | undefined;
}): Promise<JSX.Element> {
  const response = await fetcher<string>(
    '/user/' + userId + '/photoUrl',
    'GET',
    undefined,
    ['photoUrl', `${userId}`],
  );

  return (
    <div className="flex justify-center px-4 pt-4">
      <img
        className="mb-3 h-24 w-24 rounded-full shadow-lg"
        src={response}
        alt="User photo"
      />
    </div>
  );
}
