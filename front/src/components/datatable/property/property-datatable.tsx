'use client';

import AddPropertyButton from '@/components/button/add-property-button';
import { DataTable } from '@/components/ui/data-table';

import { type Property } from '@/types/properties/property';

import { columns } from './columns';

interface PropertyDatatableProps {
  properties: Property[];
}
export default function PropertyDatatable({
  properties,
}: PropertyDatatableProps): JSX.Element {
  return (
    <div className="flex flex-col justify-center items-center m-10">
      <DataTable
        title="Empreendimentos"
        addButton={AddPropertyButton()}
        columns={columns}
        data={properties}
      />
    </div>
  );
}
