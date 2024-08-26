'use server';

import { revalidateTag } from 'next/cache';

import { verifySession } from '@/app/lib/session';
import { authenticatedFetcher } from '@/services/fetcher';

export async function createPropertyDocument(
  formData: FormData,
): Promise<void> {
  const session = await verifySession();
  const propertyId = formData.get('propertyId')?.toString();
  if (!propertyId) return;
  await authenticatedFetcher(
    `/property/${propertyId}/document`,
    'POST',
    session?.user.token,
    formData,
  );
  revalidateTag('propertyDocuments');
}

export async function deletePropertyDocument(
  propertyDocumentId: number,
): Promise<void> {
  const session = await verifySession();

  await authenticatedFetcher(
    `/property/0/document/${propertyDocumentId}`,
    'DELETE',
    session?.user.token,
    undefined,
  );
  revalidateTag('propertyDocuments');
}
