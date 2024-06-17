import BuildingForm from '@/components/forms/properties/buildings/building-form';

import { fetcher } from '@/services/fetcher';
import type Building from '@/types/properties/building/building';

export default async function AdminBuilding({
  params,
}: {
  params: { tag?: string };
}): Promise<JSX.Element> {
  const building = params.tag
    ? await fetcher<Building>(`/property/${params.tag}`, 'GET')
    : undefined;

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-2xl">
        {params.tag ? 'Editar' : 'Adicionar'} prédio{' '}
        {building ? building.name : ''}
      </h1>
      <BuildingForm building={building} />
    </div>
  );
}
