'use client';
import { useRouter } from 'next/navigation';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { Plus } from 'lucide-react';

export default function AddPropertyButton(): JSX.Element {
  const router = useRouter();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger title="Adicionar Propriedade">
        <Plus className="mx-auto" />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Adicionar Propriedade</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={async () => {
            router.push('/admin/property/building');
          }}
        >
          Adicionar Prédio
        </DropdownMenuItem>
        <DropdownMenuItem
          disabled
          onClick={async () => {
            router.push('/admin/property/land');
          }}
        >
          Adicionar Terreno
        </DropdownMenuItem>
        <DropdownMenuItem
          disabled
          onClick={async () => {
            router.push('/admin/property/office');
          }}
        >
          Adicionar Escritório
        </DropdownMenuItem>
        <DropdownMenuItem
          disabled
          onClick={async () => {
            router.push('/admin/property/house');
          }}
        >
          Adicionar Casa
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
