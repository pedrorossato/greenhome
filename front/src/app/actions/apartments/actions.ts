'use server';

import { revalidateTag } from 'next/cache';

import { verifySession } from '@/app/lib/session';
import { authenticatedFetcher } from '@/services/fetcher';
import type Apartment from '@/types/apartments/apartment';

export async function createApartment(data: FormData): Promise<void> {
  const session = await verifySession();

  const apartment = getApartment(data);

  await authenticatedFetcher(
    `/property/${apartment.propertyId}/apartment`,
    'POST',
    session?.user.token,
    JSON.stringify(apartment),
    'application/json',
  );

  revalidateTag('apartments');
}

export async function deleteApartment(apartmentId: number): Promise<void> {
  const session = await verifySession();

  await authenticatedFetcher(
    `/property/${undefined}/apartment/${apartmentId}`,
    'DELETE',
    session?.user.token,
    undefined,
    'application/json',
  );

  revalidateTag('apartments');
}

function getApartment(data: FormData): Apartment {
  const apartment: Apartment = {
    name: data.get('name')?.toString() ?? '',
    propertyId: Number(data.get('propertyId')?.toString() ?? 0),
    area: Number(data.get('area')?.toString() ?? 0),
    bedroomCount: Number(data.get('bedroomCount')?.toString() ?? 0),
    bathroomCount: Number(data.get('bathroomCount')?.toString() ?? 0),
    hasBalcony: data.get('hasBalcony')?.toString() === 'on',
    hasBarbecueGrill: data.get('hasBarbecueGrill')?.toString() === 'on',
    hasCloset: data.get('hasCloset')?.toString() === 'on',
    hasGarage: data.get('hasGarage')?.toString() === 'on',
    hasServiceArea: data.get('hasServiceArea')?.toString() === 'on',
  };
  return apartment;
}
