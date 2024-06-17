'use client';
import dynamic from 'next/dynamic';

const PropertyMapsComponent = dynamic(
  async () => await import('@/components/maps/property/property-maps'),
  {
    ssr: false,
  },
);

export { PropertyMapsComponent };
