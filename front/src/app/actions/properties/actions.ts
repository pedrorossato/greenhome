'use server';

import { getServerSession } from 'next-auth';
import { revalidateTag } from 'next/cache';

import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { authenticatedFetcher } from '@/services/fetcher';
import type Building from '@/types/properties/building/building';
import { type Property } from '@/types/properties/property';
import { PropertyStatus } from '@/types/properties/property-status';
import { PropertyType } from '@/types/properties/property-type';

export async function createProperty(data: FormData): Promise<void> {
  const session = await getServerSession(authOptions);
  const property = getProperty(data);

  await authenticatedFetcher(
    '/property',
    'POST',
    session?.user.token,
    JSON.stringify(property),
    'application/json',
  );

  revalidateTag('properties');
}

export async function editProperty(data: FormData): Promise<void> {
  const session = await getServerSession(authOptions);
  const propertyId = Number(data.get('id'));
  const property = getProperty(data);

  await authenticatedFetcher(
    '/property/' + propertyId,
    'PUT',
    session?.user.token,
    JSON.stringify(property),
    'application/json',
  );

  revalidateTag('properties');
}

export async function deleteProperty(id: number): Promise<void> {
  const session = await getServerSession(authOptions);
  await authenticatedFetcher(
    '/property/' + id,
    'DELETE',
    session?.user.token,
    undefined,
    undefined,
  );
  revalidateTag('properties');
}

function getProperty(data: FormData): Property {
  let property: Property = {
    name: data.get('name')?.toString() ?? '',
    address: data.get('address')?.toString() ?? '',
    description: data.get('description')?.toString() ?? '',
    status: PropertyStatus[data.get('status')],
    type: PropertyType[data.get('type')],
    latitude: data.get('latitude') ? Number(data.get('latitude')) : undefined,
    longitude: data.get('longitude')
      ? Number(data.get('longitude'))
      : undefined,
  };

  if (property.type === PropertyType.BUILDING) {
    const building = property as Building;
    building.gym = data.get('gym')?.toString() === 'on';
    building.entranceHall = data.get('entranceHall')?.toString() === 'on';
    building.splitACWaiting = data.get('splitACWaiting')?.toString() === 'on';
    building.centralGas = data.get('centralGas')?.toString() === 'on';
    building.intercom = data.get('intercom')?.toString() === 'on';
    building.eletronicGate = data.get('eletronicGate')?.toString() === 'on';
    building.elevator = data.get('elevator')?.toString() === 'on';
    building.bicycleStand = data.get('bicycleStand')?.toString() === 'on';
    building.partyHall = data.get('partyHall')?.toString() === 'on';
    building.playground = data.get('playground')?.toString() === 'on';
    building.landingProgress = data.get('landingProgress')
      ? Number(data.get('landingProgress'))
      : undefined;
    building.foundationProgress = data.get('foundationProgress')
      ? Number(data.get('foundationProgress'))
      : undefined;
    building.structureProgress = data.get('structureProgress')
      ? Number(data.get('structureProgress'))
      : undefined;
    building.masonryProgress = data.get('masonryProgress')
      ? Number(data.get('masonryProgress'))
      : undefined;
    building.eletricProgress = data.get('eletricProgress')
      ? Number(data.get('eletricProgress'))
      : undefined;
    building.hydraulicProgress = data.get('hydraulicProgress')
      ? Number(data.get('hydraulicProgress'))
      : undefined;
    building.finishingProgress = data.get('finishingProgress')
      ? Number(data.get('finishingProgress'))
      : undefined;
    property = building;
  }

  return property;
}
