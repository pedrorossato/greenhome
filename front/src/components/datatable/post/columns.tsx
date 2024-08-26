import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { deletePost } from '@/app/actions/posts/actions';
import { type Post } from '@/types/posts/post';
import { type ColumnDef } from '@tanstack/react-table';
import { ArrowDown, ArrowUp, ArrowUpDown, MoreHorizontal } from 'lucide-react';

export const columns: Array<ColumnDef<Post>> = [
  {
    accessorKey: 'title',
    header: ({ column }) => {
      return (
        <div className="text-left">
          <Button
            variant="ghost"
            onClick={() => {
              column.toggleSorting(column.getIsSorted() === 'asc');
            }}
          >
            Título
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
        </div>
      );
    },
    enableSorting: true,
    cell: ({ row }) => {
      return <div className="text-left">{row.original.title}</div>;
    },
  },
  {
    accessorKey: 'createdDate',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => {
            column.toggleSorting(column.getIsSorted() === 'asc');
          }}
        >
          Data
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
      return (
        <div className="text-center">
          {new Date(row.original.createdDate).toLocaleDateString()}
        </div>
      );
    },
  },
  {
    accessorKey: 'actions',
    header: () => <div className="text-center">Opções</div>,
    cell: ({ row }) => {
      const post = row.original;

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
                  window.history.pushState(null, '', `/admin/post/${post.id}`);
                  window.history.go();
                }}
              >
                Editar
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={async () => {
                  if (post.id) await deletePost(post.id);
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
