import ApartmentDatatable from '@/components/datatable/apartment/apartment-datatable';

import { fetcher } from '@/services/fetcher';
import type Apartment from '@/types/apartments/apartment';
import { type Property } from '@/types/properties/property';

export default async function AdminBuildingApartments({
  params,
}: {
  params: { tag: string };
}): Promise<JSX.Element> {
  const property = await fetcher<Property>(
    `/property/${params.tag}`,
    'GET',
    undefined,
    ['properties'],
  );

  const apartments = await fetcher<Apartment[]>(
    `/property/${property.id}/apartment`,
    'GET',
    undefined,
    ['apartments', `${property.id}`],
  );

  return (
    <div className="py-64">
      <ApartmentDatatable property={property} apartments={apartments} />
    </div>
  );
}
