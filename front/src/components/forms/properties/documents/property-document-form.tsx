'use client';

import { useForm } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { Input } from '@/components/ui/input';

import { createPropertyDocument } from '@/app/actions/properties/documents/actions';
import { PropertyDocumentType } from '@/types/properties/document/property-document-type';

export interface FormData {
  propertyId: number;
  type: string;
  document: Blob;
}

export default function PropertyDocumentForm({
  propertyId,
  type,
}: {
  propertyId: number;
  type: PropertyDocumentType;
}): JSX.Element {
  const form = useForm<FormData>();

  return (
    <Form {...form}>
      <form
        action={createPropertyDocument}
        className="flex w-full max-w-sm items-center space-x-2 p-10"
      >
        <input hidden {...form.register('propertyId', { value: propertyId })} />
        <Input type="file" {...form.register('document')} />
        <input
          hidden
          {...form.register('type', { value: PropertyDocumentType[type] })}
        />
        <Button type="submit">Adicionar</Button>
      </form>
    </Form>
  );
}
