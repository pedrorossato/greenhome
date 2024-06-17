'use server';

import { getServerSession } from 'next-auth';
import { revalidateTag } from 'next/cache';

import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { authenticatedFetcher } from '@/services/fetcher';

export async function createPropertyDocument(
  formData: FormData,
): Promise<void> {
  const session = await getServerSession(authOptions);
  const propertyId = formData.get('propertyId')?.toString();
  if (!propertyId) return;
  try {
    await authenticatedFetcher(
      `/property/${propertyId}/document`,
      'POST',
      session?.user.token,
      formData,
    );
  } catch (error) {
    console.log(error);
  }
  revalidateTag('propertyDocuments');
}

export async function deletePropertyDocument(
  propertyDocumentId: number,
): Promise<void> {
  const session = await getServerSession(authOptions);
  try {
    await authenticatedFetcher(
      `/property/0/document/${propertyDocumentId}`,
      'DELETE',
      session?.user.token,
      undefined,
    );
  } catch (error) {
    console.log(error);
  }
  revalidateTag('propertyDocuments');
}
