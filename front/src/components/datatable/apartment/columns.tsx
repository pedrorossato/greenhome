import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { deleteApartment } from '@/app/actions/apartments/actions';
import type Apartment from '@/types/apartments/apartment';
import { type ColumnDef } from '@tanstack/react-table';
import { MoreHorizontal } from 'lucide-react';

export const columns: Array<ColumnDef<Apartment>> = [
  {
    accessorKey: 'name',
    header: () => <div className="text-left">Nome</div>,
    cell: ({ row }) => {
      return <div className="text-left">{row.original.name}</div>;
    },
  },
  {
    accessorKey: 'area',
    header: 'Área',
    cell: ({ row }) => {
      return (
        <div className="text-center">
          {row.original.area}m<sup>2</sup>
        </div>
      );
    },
  },
  {
    accessorKey: 'bedroomCount',
    header: 'Quartos',
    cell: ({ row }) => {
      return <div className="text-center">{row.original.bedroomCount}</div>;
    },
  },
  {
    accessorKey: 'bathroomCount',
    header: 'Banheiros',
    cell: ({ row }) => {
      return <div className="text-center">{row.original.bathroomCount}</div>;
    },
  },
  {
    accessorKey: 'actions',
    header: () => <div className="text-right">Ações</div>,
    cell: ({ row }) => {
      const apartment = row.original;

      return (
        <div className="text-right" title="Opções">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Opções</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Opções</DropdownMenuLabel>
              <DropdownMenuItem
                onClick={async () => {
                  if (apartment.id) await deleteApartment(apartment.id);
                }}
              >
                Excluir
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      );
    },
  },
];
