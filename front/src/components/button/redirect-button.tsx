'use client';

import { useRouter } from 'next/navigation';

export default function RedirectButton({
  path,
  children,
}: {
  path: string;
  children: React.ReactNode;
}): JSX.Element {
  const router = useRouter();

  return (
    <button
      onClick={() => {
        router.push(path);
      }}
    >
      {children}
    </button>
  );
}
