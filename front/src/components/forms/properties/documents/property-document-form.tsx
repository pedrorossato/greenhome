'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { Input } from '@/components/ui/input';

import { createPropertyDocument } from '@/app/actions/properties/documents/actions';
import { PropertyDocumentType } from '@/types/properties/document/property-document-type';

export default function PropertyDocumentForm({
  propertyId,
  type,
}: {
  propertyId: number;
  type: PropertyDocumentType;
}): JSX.Element {
  const form = useForm();
  const [isFileSelected, setIsFileSelected] = useState<boolean>(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setIsFileSelected(!!e.target.files?.length);
  };

  const handleAction = async (formData: FormData): Promise<void> => {
    try {
      await createPropertyDocument(formData);
      toast.success('Arquivo adicionado com sucesso');
    } catch (error) {
      toast.error('Erro ao adicionar arquivo.');
    }
  };

  return (
    <Form {...form}>
      <form
        action={handleAction}
        className="flex flex-col w-full max-w-sm items-center space-y-2 my-4"
      >
        <input hidden {...form.register('propertyId', { value: propertyId })} />
        <Input
          type="file"
          {...form.register('document')}
          onChange={handleFileChange}
        />
        <input
          hidden
          {...form.register('type', { value: PropertyDocumentType[type] })}
        />
        <Button type="submit" disabled={!isFileSelected}>
          Adicionar
        </Button>
      </form>
    </Form>
  );
}
