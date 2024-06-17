'use client';

import { useState } from 'react';

import ApartmentForm from '@/components/forms/apartments/apartment-form';
import { DataTable } from '@/components/ui/data-table';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

import type Apartment from '@/types/apartments/apartment';
import { type Property } from '@/types/properties/property';
import { Plus } from 'lucide-react';

import { columns } from './columns';

interface ApartmentDatatableProps {
  property: Property;
  apartments: Apartment[];
}

export default function ApartmentDatatable({
  property,
  apartments,
}: ApartmentDatatableProps): JSX.Element {
  const [addApartmentModalOpened, setAddApartmentModalOpened] = useState(false);

  const title = `Apartamentos de ${property.name}`;
  return (
    <div className="flex flex-col justify-center items-center">
      <DataTable
        title={title}
        addButton={
          <Plus
            className="cursor-pointer"
            onClick={() => {
              setAddApartmentModalOpened(true);
            }}
          />
        }
        columns={columns}
        data={apartments}
      />
      <Dialog
        open={addApartmentModalOpened}
        onOpenChange={setAddApartmentModalOpened}
        modal
      >
        <DialogContent className="h-3/4 overflow-y-scroll">
          <DialogHeader>
            <DialogTitle>Adicionar apartamento no {property.name}</DialogTitle>
          </DialogHeader>
          <ApartmentForm
            property={property}
            setModalOpened={setAddApartmentModalOpened}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}
