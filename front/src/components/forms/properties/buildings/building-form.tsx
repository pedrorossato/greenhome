'use client';

import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectItem,
  SelectContent,
} from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';

import { createProperty, editProperty } from '@/app/actions/properties/actions';
import type Building from '@/types/properties/building/building';
import { PropertyStatus } from '@/types/properties/property-status';
import { PropertyType } from '@/types/properties/property-type';

interface PropertyFormProps {
  building?: Building;
}

export default function BuildingForm({
  building,
}: PropertyFormProps): JSX.Element {
  const form = useForm<Building>({
    defaultValues: building ?? {},
  });
  const { register, control, watch } = form;
  const router = useRouter();
  const estimatedReleaseDate = watch('estimatedReleaseDate');
  const handleAction = building
    ? async (formData: FormData) => {
        try {
          formData.append('estimatedReleaseDate', estimatedReleaseDate ?? '');
          await editProperty(formData);
          toast.success('Prédio editado com sucesso');
          router.push('/admin');
        } catch (error: any) {
          toast.error('Erro ao editar prédio: ' + error.message);
        }
      }
    : async (formData: FormData) => {
        try {
          formData.append('estimatedReleaseDate', estimatedReleaseDate ?? '');
          await createProperty(formData);
          toast.success('Prédio adicionado com sucesso');
          router.push('/admin');
        } catch (error: any) {
          toast.error('Erro ao adicionar prédio: ' + error.message);
        }
      };

  return (
    <Form {...form}>
      <form
        className="flex flex-col justify-between w-full md:w-2/3 lg:w-1/2 p-5 gap-4"
        action={handleAction}
      >
        <input {...register('id', { value: building?.id })} type="hidden" />
        <input
          {...register('type', {
            value: PropertyType.BUILDING,
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
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Descrição</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Digite uma descrição..."
                  {...register('description')}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        ></FormField>
        <FormField
          control={control}
          name="status"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Status</FormLabel>
              <FormControl>
                <Select
                  value={field.value}
                  onValueChange={field.onChange}
                  {...register('status')}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value={PropertyStatus.CONSTRUCTION}>
                      Em construção
                    </SelectItem>
                    <SelectItem value={PropertyStatus.FINISHED}>
                      Entregue
                    </SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        ></FormField>
        <FormField
          control={control}
          name="estimatedReleaseDate"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Data estimada de entrega</FormLabel>
              <FormDescription>
                O dia não será exibido, somente mês e ano
              </FormDescription>
              <FormControl>
                <Calendar
                  mode="single"
                  selected={new Date(field.value ?? '')}
                  onSelect={(date) => {
                    field.onChange(date?.toISOString());
                  }}
                  className="rounded-md"
                  {...register('estimatedReleaseDate')}
                />
              </FormControl>
            </FormItem>
          )}
        ></FormField>
        <FormField
          control={control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Endereço</FormLabel>
              <FormControl>
                <Input
                  placeholder="Digite o endereço ..."
                  {...register('address')}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        ></FormField>
        <FormField
          control={control}
          name="latitude"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Latitude</FormLabel>
              <FormControl>
                <Input
                  placeholder="Digite a latitude ..."
                  {...register('latitude')}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        ></FormField>
        <FormField
          control={control}
          name="longitude"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Longitude</FormLabel>
              <FormControl>
                <Input
                  placeholder="Digite a longitude ..."
                  {...register('longitude')}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        ></FormField>
        <FormField
          control={control}
          name="landingProgress"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Terraplanagem ({field.value}%)</FormLabel>
              <FormControl>
                <Input
                  className="p-0"
                  type="range"
                  max={100}
                  step={5}
                  placeholder="Digite a porcentagem do progresso da terraplanagem ..."
                  {...register('landingProgress')}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        ></FormField>
        <FormField
          control={control}
          name="foundationProgress"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Fundação ({field.value}%)</FormLabel>
              <FormControl>
                <Input
                  className="p-0"
                  type="range"
                  max={100}
                  step={5}
                  placeholder="Digite a porcentagem do progresso da fundação ..."
                  {...register('foundationProgress')}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        ></FormField>
        <FormField
          control={control}
          name="structureProgress"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Estrutura ({field.value}%)</FormLabel>
              <FormControl>
                <Input
                  className="p-0"
                  type="range"
                  max={100}
                  step={5}
                  placeholder="Digite a porcentagem do progresso da estrutura ..."
                  {...register('structureProgress')}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        ></FormField>
        <FormField
          control={control}
          name="masonryProgress"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Alvenaria ({field.value}%)</FormLabel>
              <FormControl>
                <Input
                  className="p-0"
                  type="range"
                  max={100}
                  step={5}
                  placeholder="Digite a porcentagem do progresso da alvenaria ..."
                  {...register('masonryProgress')}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        ></FormField>
        <FormField
          control={control}
          name="eletricProgress"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Elétrica ({field.value}%)</FormLabel>
              <FormControl>
                <Input
                  className="p-0"
                  type="range"
                  max={100}
                  step={5}
                  placeholder="Digite a porcentagem do progresso da elétrica ..."
                  {...register('eletricProgress')}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        ></FormField>
        <FormField
          control={control}
          name="hydraulicProgress"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Hidráulica ({field.value}%)</FormLabel>
              <FormControl>
                <Input
                  className="p-0"
                  type="range"
                  max={100}
                  step={5}
                  placeholder="Digite a porcentagem do progresso da hidráulica ..."
                  {...register('hydraulicProgress')}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        ></FormField>
        <FormField
          control={control}
          name="finishingProgress"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Acabamento ({field.value}%)</FormLabel>
              <FormControl>
                <Input
                  className="p-0"
                  type="range"
                  max={100}
                  step={5}
                  placeholder="Digite a porcentagem do progresso do acabamento ..."
                  {...register('finishingProgress')}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        ></FormField>
        <FormField
          control={control}
          name="gym"
          render={({ field }) => (
            <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
              <div className="space-y-0.5">
                <FormLabel>Academia</FormLabel>
                <FormDescription>
                  Se o empreendimento inclui academia
                </FormDescription>
              </div>
              <FormControl>
                <Switch
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  {...register('gym')}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="entranceHall"
          render={({ field }) => (
            <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
              <div className="space-y-0.5">
                <FormLabel>Hall de entrada</FormLabel>
                <FormDescription>
                  Se o empreendimento inclui hall de entrada
                </FormDescription>
              </div>
              <FormControl>
                <Switch
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  {...register('entranceHall')}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="splitACWaiting"
          render={({ field }) => (
            <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
              <div className="space-y-0.5">
                <FormLabel>Espera para Ar Condicionado Split</FormLabel>
                <FormDescription>
                  Se o empreendimento inclui espera para ar condicionado split
                </FormDescription>
              </div>
              <FormControl>
                <Switch
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  {...register('splitACWaiting')}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="centralGas"
          render={({ field }) => (
            <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
              <div className="space-y-0.5">
                <FormLabel>Gás Central</FormLabel>
                <FormDescription>
                  Se o empreendimento inclui gás central
                </FormDescription>
              </div>
              <FormControl>
                <Switch
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  {...register('centralGas')}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="intercom"
          render={({ field }) => (
            <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
              <div className="space-y-0.5">
                <FormLabel>Interfone</FormLabel>
                <FormDescription>
                  Se o empreendimento inclui interfone
                </FormDescription>
              </div>
              <FormControl>
                <Switch
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  {...register('intercom')}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="eletronicGate"
          render={({ field }) => (
            <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
              <div className="space-y-0.5">
                <FormLabel>Portão Eletrônico</FormLabel>
                <FormDescription>
                  Se o empreendimento inclui portão eletrônico
                </FormDescription>
              </div>
              <FormControl>
                <Switch
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  {...register('eletronicGate')}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="elevator"
          render={({ field }) => (
            <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
              <div className="space-y-0.5">
                <FormLabel>Elevador</FormLabel>
                <FormDescription>
                  Se o empreendimento inclui elevador
                </FormDescription>
              </div>
              <FormControl>
                <Switch
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  {...register('elevator')}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="bicycleStand"
          render={({ field }) => (
            <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
              <div className="space-y-0.5">
                <FormLabel>Bicicletário</FormLabel>
                <FormDescription>
                  Se o empreendimento inclui bicicletário
                </FormDescription>
              </div>
              <FormControl>
                <Switch
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  {...register('bicycleStand')}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="partyHall"
          render={({ field }) => (
            <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
              <div className="space-y-0.5">
                <FormLabel>Salão de Festas</FormLabel>
                <FormDescription>
                  Se o empreendimento inclui salão de festas
                </FormDescription>
              </div>
              <FormControl>
                <Switch
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  {...register('partyHall')}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="playground"
          render={({ field }) => (
            <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
              <div className="space-y-0.5">
                <FormLabel>Playground</FormLabel>
                <FormDescription>
                  Se o empreendimento inclui playground
                </FormDescription>
              </div>
              <FormControl>
                <Switch
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  {...register('playground')}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Button type="submit">{building ? 'Editar' : 'Adicionar'}</Button>
      </form>
    </Form>
  );
}
