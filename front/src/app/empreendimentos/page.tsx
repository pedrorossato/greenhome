import PropertyCard from '@/components/card/property/property-card';

import { fetcher } from '@/services/fetcher';
import type PropertySummary from '@/types/properties/property-summary';

export default async function PropertiesPage(): Promise<JSX.Element> {
  const properties = await fetcher<PropertySummary[]>(
    '/property/summary',
    'GET',
  );

  return (
    <div className="container py-20 p-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {properties.map((property) => (
          <PropertyCard property={property} key={property.tag} />
        ))}
      </div>
    </div>
  );
}
