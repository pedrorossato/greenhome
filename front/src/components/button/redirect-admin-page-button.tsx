'use client';

import { useRouter } from 'next/navigation';

export default function RedirectAdminPageButton(): JSX.Element {
  const router = useRouter();
  return (
    <button
      onClick={() => {
        router.push('/admin');
      }}
      className="text-primary-blue bg-primary-gray hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
    >
      Página de Administração
    </button>
  );
}
