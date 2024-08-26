'use client';

import { useRouter } from 'next/navigation';

import { Plus } from 'lucide-react';

export default function AddPostButton(): JSX.Element {
  const router = useRouter();
  return (
    <button
      onClick={() => {
        router.push('/admin/post');
      }}
    >
      <Plus className="mx-auto" />
    </button>
  );
}
