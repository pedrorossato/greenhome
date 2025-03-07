'use server';

import { redirect } from 'next/navigation';

import { createSession, deleteSession } from '@/app/lib/session';
import { fetcher } from '@/services/fetcher';
import { type Session } from '@/types/user';

export async function signin(formData: FormData): Promise<void> {
  const email = formData.get('email')?.toString();
  const password = formData.get('password')?.toString();

  if (!email || !password) throw new Error('Informe os campos obrigatórios.');

  const session = await fetcher<Session>(
    '/auth/authenticate',
    'POST',
    JSON.stringify({ email, password }),
    'application/json',
  );

  await createSession(session);

  redirect('/user');
}

export async function register(formData: FormData): Promise<void> {
  await fetcher('/auth/register', 'POST', formData);
  redirect('/login');
}

export async function logout(): Promise<void> {
  deleteSession();
  redirect('/login');
}
