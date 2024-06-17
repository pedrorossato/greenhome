'use client';

import { deletePropertyDocument } from '@/app/actions/properties/documents/actions';
import { TrashIcon } from 'lucide-react';

import { Button } from '../ui/button';

export default function DeletePropertyDocumentButton({
  propertyDocumentId,
}: {
  propertyDocumentId: number;
}): JSX.Element {
  return (
    <Button
      onClick={async () => {
        await deletePropertyDocument(propertyDocumentId);
      }}
      className="w-full bg-red-600 hover:bg-red-900"
    >
      <TrashIcon className="mr-2 h-4 w-4" /> Excluir
    </Button>
  );
}
