import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { deleteProperty } from '@/app/actions/properties/actions';
import { type Property } from '@/types/properties/property';
import { PropertyType } from '@/types/properties/property-type';
import { type ColumnDef } from '@tanstack/react-table';
import { ArrowDown, ArrowUp, ArrowUpDown, MoreHorizontal } from 'lucide-react';

export const columns: Array<ColumnDef<Property>> = [
  {
    accessorKey: 'name',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => {
            column.toggleSorting(column.getIsSorted() === 'asc');
          }}
        >
          Nome
          {column.getIsSorted() ? (
            column.getIsSorted() === 'asc' ? (
              <ArrowUp className="ml-2 h-4 w-4" />
            ) : (
              <ArrowDown className="ml-2 h-4 w-4" />
            )
          ) : (
            <ArrowUpDown className="ml-2 h-4 w-4" />
          )}
        </Button>
      );
    },
    enableSorting: true,
    cell: ({ row }) => {
      return <div className="text-center">{row.original.name}</div>;
    },
  },
  {
    accessorKey: 'type',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => {
            column.toggleSorting(column.getIsSorted() === 'asc');
          }}
        >
          Tipo
          {column.getIsSorted() ? (
            column.getIsSorted() === 'asc' ? (
              <ArrowUp className="ml-2 h-4 w-4" />
            ) : (
              <ArrowDown className="ml-2 h-4 w-4" />
            )
          ) : (
            <ArrowUpDown className="ml-2 h-4 w-4" />
          )}
        </Button>
      );
    },
    cell: ({ row }) => {
      const property = row.original;
      const type = property.type;
      const typeDescription = (() => {
        switch (type) {
          case PropertyType.BUILDING:
            return 'Prédio';
          case PropertyType.LAND:
            return 'Terreno';
          case PropertyType.HOUSE:
            return 'Casa';
          case PropertyType.OFFICE:
            return 'Escritório';
          default:
            return 'Desconhecido';
        }
      })();
      return <div className="text-center">{typeDescription}</div>;
    },
    enableSorting: true,
  },
  {
    accessorKey: 'address',
    header: 'Endereço',
    cell: ({ row }) => {
      return <div className="text-center">{row.original.address}</div>;
    },
  },
  {
    header: 'Opções',
    cell: ({ row }) => {
      const property = row.original;

      return (
        <div className="text-center" title="Opções">
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
                  const url =
                    property.type === PropertyType.BUILDING
                      ? window.location.hostname +
                        '/empreendimentos/buildings/' +
                        property.tag
                      : window.location.hostname +
                        '/empreendimentos/' +
                        property.tag;
                  await navigator.clipboard.writeText(url);
                }}
              >
                Copiar link
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={async () => {
                  const url =
                    property.type === PropertyType.BUILDING
                      ? '/admin/property/building/' + property.tag
                      : '/admin/property/' + property.tag;
                  window.history.pushState(null, '', url);
                  window.history.go();
                }}
              >
                Editar
              </DropdownMenuItem>
              {property.type === PropertyType.BUILDING ? (
                <>
                  <DropdownMenuItem
                    onClick={async () => {
                      window.history.pushState(
                        null,
                        '',
                        `/admin/property/building/${property.tag}/apartments`,
                      );
                      window.history.go();
                    }}
                  >
                    Apartamentos
                  </DropdownMenuItem>
                </>
              ) : (
                <></>
              )}
              <DropdownMenuItem
                onClick={async () => {
                  window.history.pushState(
                    null,
                    '',
                    '/admin/property/documents?propertyId=' + property.id,
                  );
                  window.history.go();
                }}
              >
                Imagens e Vídeos
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={async () => {
                  if (property.id) await deleteProperty(property.id);
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
