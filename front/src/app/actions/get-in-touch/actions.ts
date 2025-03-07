'use server';

import { redirect } from 'next/navigation';

import { fetcher } from '@/services/fetcher';

export default async function getInTouch(formData: FormData): Promise<void> {
  const name = formData.get('name')?.toString();
  const email = formData.get('email')?.toString();
  const message = formData.get('message')?.toString();

  if (!name || !email || !message)
    throw new Error('Informe os campos obrigatórios.');

  await fetcher(
    '/get-in-touch',
    'POST',
    JSON.stringify({ name, email, message }),
    'application/json',
  );

  redirect('/');
}
