'use server';

import { revalidateTag } from 'next/cache';

import { verifySession } from '@/app/lib/session';
import { authenticatedFetcher, fetcher } from '@/services/fetcher';
import { type Post } from '@/types/posts/post';

export async function createPost(formData: FormData): Promise<void> {
  const session = await verifySession();
  await authenticatedFetcher('/post', 'POST', session?.user.token, formData);
  revalidateTag('posts');
}

export async function editPost(formData: FormData): Promise<void> {
  const id = formData.get('id')?.toString();
  if (!id) {
    throw new Error('Identificador de post não informado.');
  }
  const session = await verifySession();
  await authenticatedFetcher(
    `/post/${id}`,
    'PUT',
    session?.user.token,
    formData,
  );
  revalidateTag('posts');
}

export async function getPagedPosts(
  page: number,
  size: number,
): Promise<Post[]> {
  const response = await fetcher<Post[]>(
    `/post/paged?page=${page}&size=${size}`,
    'GET',
  );

  return response;
}

export async function deletePost(id: number): Promise<void> {
  const session = await verifySession();
  await authenticatedFetcher(`/post/${id}`, 'DELETE', session?.user.token);
  revalidateTag('posts');
}
