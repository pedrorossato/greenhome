'use client';

import { useRouter } from 'next/navigation';

import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';

import {
  PropertyStatusColor,
  PropertyStatusLabel,
} from '@/types/properties/property-status';
import type PropertySummary from '@/types/properties/property-summary';
import { BedDouble, RulerIcon } from 'lucide-react';

export default function PropertyCard({
  property,
}: {
  property: PropertySummary;
}): JSX.Element {
  const router = useRouter();

  return (
    <Card
      className="cursor-pointer overflow-hidden hover:shadow-2xl transition-all duration-300 ease-in-out"
      onClick={() => {
        router.push('/properties/' + property.tag);
      }}
      key={property.tag}
    >
      <div>
        <img src={`${property.coverDocumentUrl}`} alt="prop" />
        <div className="flex flex-col p-3">
          <div className="flex flex-row justify-between items-center">
            <h1 className="text-2xl font-semibold">{property.name}</h1>
            <Badge
              style={{
                backgroundColor: PropertyStatusColor.get(property.status),
              }}
            >
              {PropertyStatusLabel.get(property.status)}
            </Badge>
          </div>
          <div className="flex flex-row gap-2">
            <RulerIcon />
            <p>
              {property.minArea}m<sup>2</sup> a {property.maxArea}m<sup>2</sup>
            </p>
          </div>
          <div className="flex flex-row gap-2">
            <BedDouble />
            <p>
              {property.minBedroomCount} a {property.maxBedroomCount} quartos
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
}
