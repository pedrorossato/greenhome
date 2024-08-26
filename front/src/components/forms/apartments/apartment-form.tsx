'use client';

import React, { type Dispatch, type SetStateAction } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';

import { createApartment } from '@/app/actions/apartments/actions';
import type Apartment from '@/types/apartments/apartment';
import { type Property } from '@/types/properties/property';

interface ApartmentFormProps {
  property: Property;
  setModalOpened: Dispatch<SetStateAction<boolean>>;
}

export default function ApartmentForm({
  property,
  setModalOpened,
}: ApartmentFormProps): JSX.Element {
  const form = useForm<Apartment>();
  const { register, control } = form;

  const handleAction = async (formData: FormData): Promise<void> => {
    try {
      await createApartment(formData);
      toast.success('Apartamento criado com sucesso');
      setModalOpened(false);
    } catch (error: any) {
      toast.error('Erro ao criar apartamento: ' + error.message);
    }
  };

  return (
    <Form {...form}>
      <form
        className="flex flex-col justify-between w-full gap-4"
        action={handleAction}
      >
        <input
          {...register('propertyId', {
            value: property.id,
          })}
          type="hidden"
        />
        <FormField
          control={control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome</FormLabel>
              <FormControl>
                <Input placeholder="Digite o nome..." {...register('name')} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        ></FormField>
        <FormField
          control={control}
          name="area"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Área</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  step="any"
                  placeholder="Digite a área..."
                  {...register('area')}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        ></FormField>
        <FormField
          control={control}
          name="bedroomCount"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Quartos</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder="Digite a quantidade de quartos..."
                  {...register('bedroomCount')}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        ></FormField>
        <FormField
          control={control}
          name="bathroomCount"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Banheiros</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder="Digite a quantidade de banheiros..."
                  {...register('bathroomCount')}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        ></FormField>
        <FormField
          control={control}
          name="hasGarage"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Garagem</FormLabel>
              <FormControl>
                <Switch
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  {...register('hasGarage')}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        ></FormField>
        <FormField
          control={control}
          name="hasServiceArea"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Área de serviço</FormLabel>
              <FormControl>
                <Switch
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  {...register('hasServiceArea')}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        ></FormField>
        <FormField
          control={control}
          name="hasBalcony"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Sacada</FormLabel>
              <FormControl>
                <Switch
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  {...register('hasBalcony')}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        ></FormField>
        <FormField
          control={control}
          name="hasBarbecueGrill"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Churrasqueira</FormLabel>
              <FormControl>
                <Switch
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  {...register('hasBarbecueGrill')}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        ></FormField>
        <FormField
          control={control}
          name="hasCloset"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Closet</FormLabel>
              <FormControl>
                <Switch
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  {...register('hasCloset')}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        ></FormField>
        <Button type="submit">Adicionar</Button>
      </form>
    </Form>
  );
}
