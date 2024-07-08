import Image from 'next/image';

import { PropertyMapsComponent } from '@/components/maps/property';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import { fetcher } from '@/services/fetcher';
import type Apartment from '@/types/apartments/apartment';
import type Building from '@/types/properties/building/building';
import { type PropertyDocument } from '@/types/properties/document/property-document';
import { PropertyDocumentType } from '@/types/properties/document/property-document-type';
import { type Property } from '@/types/properties/property';
import { PropertyType } from '@/types/properties/property-type';
import { CheckCircle, CircleOff } from 'lucide-react';

import EletronicGate from '../../../../public/eletronicgate.png';
import Elevator from '../../../../public/elevator.png';
import EntranceHall from '../../../../public/entrancehall.png';
import CentralGas from '../../../../public/gascentral.png';
import Gym from '../../../../public/gym.png';
import Intercom from '../../../../public/intercom.png';
import SplitACWaiting from '../../../../public/splitACWaiting.png';

export default async function PropertyPage({
  params,
}: {
  params: {
    tag: string;
  };
}): Promise<JSX.Element> {
  const property = await fetcher<Property>(
    `/property/${params.tag}`,
    'GET',
    undefined,
    ['properties'],
  );

  const [documents, apartments] = await Promise.all([
    fetcher<PropertyDocument[]>(
      `/property/${property.id}/document`,
      'GET',
      undefined,
      ['propertyDocuments'],
    ),
    property.type === PropertyType.BUILDING
      ? fetcher<Apartment[]>(
          `/property/${property.id}/apartment`,
          'GET',
          undefined,
          ['apartments', `${property.id}`],
        )
      : Promise.resolve(undefined),
  ]);

  const cover = documents.find(
    (doc) => doc.type === PropertyDocumentType.COVER,
  );

  const building =
    property.type === PropertyType.BUILDING
      ? (property as Building)
      : undefined;

  return (
    <main className="text-justify">
      <section>
        <div className="container flex flex-wrap">
          <h1 className="w-full text-6xl py-4 text-center">{property.name}</h1>
          <p>{property.description}</p>
          <PropertyMapsComponent properties={[property]} />
        </div>
      </section>

      {building ? (
        <section className="container flex flex-col items-center">
          <h2 className="text-4xl text-center pb-2">Progresso da obra</h2>
          <div className="flex flex-col justify-between mb-1 w-full">
            <span className="text-base font-medium  dark:text-white">
              Terraplanagem
            </span>
            <div className="w-full bg-gray-100 rounded-full dark:bg-gray-700">
              <div
                className="bg-primary-blue text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                style={{ width: `${building.landingProgress}%` }}
              >
                {building.landingProgress}%
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between mb-1 w-full">
            <span className="text-base font-medium  dark:text-white">
              Fundação
            </span>
            <div className="w-full bg-gray-100 rounded-full dark:bg-gray-700">
              <div
                className="bg-primary-blue text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                style={{ width: `${building.foundationProgress}%` }}
              >
                {building.foundationProgress}%
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between mb-1 w-full">
            <span className="text-base font-medium  dark:text-white">
              Estrutura
            </span>
            <div className="w-full bg-gray-100 rounded-full dark:bg-gray-700">
              <div
                className="bg-primary-blue text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                style={{ width: `${building.structureProgress}%` }}
              >
                {building.structureProgress}%
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between mb-1 w-full">
            <span className="text-base font-medium  dark:text-white">
              Alvenaria
            </span>
            <div className="w-full bg-gray-100 rounded-full dark:bg-gray-700">
              <div
                className="bg-primary-blue text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                style={{ width: `${building.masonryProgress}%` }}
              >
                {building.masonryProgress}%
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between mb-1 w-full">
            <span className="text-base font-medium  dark:text-white">
              Elétrica
            </span>
            <div className="w-full bg-gray-100 rounded-full dark:bg-gray-700">
              <div
                className="bg-primary-blue text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                style={{ width: `${building.eletricProgress}%` }}
              >
                {building.eletricProgress}%
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between mb-1 w-full">
            <span className="text-base font-medium  dark:text-white">
              Hidráulica
            </span>
            <div className="w-full bg-gray-100 rounded-full dark:bg-gray-700">
              <div
                className="bg-primary-blue text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                style={{ width: `${building.hydraulicProgress}%` }}
              >
                {building.hydraulicProgress}%
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between mb-1 w-full">
            <span className="text-base font-medium  dark:text-white">
              Acabamento
            </span>
            <div className="w-full bg-gray-100 rounded-full dark:bg-gray-700">
              <div
                className="bg-primary-blue text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                style={{ width: `${building.finishingProgress}%` }}
              >
                {building.finishingProgress}%
              </div>
            </div>
          </div>
        </section>
      ) : (
        <></>
      )}
      {building ? (
        <section className="container flex flex-col items-center py-8">
          <h2 className="text-4xl pb-2 mb-4">Comodidades</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {building.centralGas ? (
              <div className="flex">
                <Image width={64} alt="cetralgas" src={CentralGas} />
                <div>
                  <h2 className="text-2xl">Gás Central</h2>
                  <p>Com medidores individuais</p>
                </div>
              </div>
            ) : (
              <></>
            )}
            {building.elevator ? (
              <div className="flex">
                <Image
                  className="mr-2"
                  width={64}
                  alt="elevator"
                  src={Elevator}
                />
                <div>
                  <h2 className="text-2xl">Elevador</h2>
                  <p>Para maior comodidade</p>
                </div>
              </div>
            ) : (
              <></>
            )}
            {building.entranceHall ? (
              <div className="flex">
                <Image
                  className="mr-2"
                  width={64}
                  alt="entranceHall"
                  src={EntranceHall}
                />
                <div>
                  <h2 className="text-2xl">Hall de entrada</h2>
                  <p>Belo e seguro</p>
                </div>
              </div>
            ) : (
              <></>
            )}
            {building.gym ? (
              <div className="flex">
                <Image className="mr-2" width={64} alt="gym" src={Gym} />
                <div>
                  <h2 className="text-2xl">Academia</h2>
                </div>
              </div>
            ) : (
              <></>
            )}
            {building.eletronicGate ? (
              <div className="flex">
                <Image
                  className="mr-2"
                  width={64}
                  alt="eletronicGate"
                  src={EletronicGate}
                />
                <div>
                  <h2 className="text-2xl">Portão eletrônico</h2>
                </div>
              </div>
            ) : (
              <></>
            )}
            {building.intercom ? (
              <div className="flex">
                <Image
                  className="mr-2"
                  width={64}
                  alt="intercom"
                  src={Intercom}
                />
                <div>
                  <h2 className="text-2xl">Interfones</h2>
                </div>
              </div>
            ) : (
              <></>
            )}
            {building.splitACWaiting ? (
              <div className="flex">
                <Image
                  className="mr-2"
                  width={64}
                  alt="splitACWaiting"
                  src={SplitACWaiting}
                />
                <div>
                  <h2 className="text-2xl">Espera para ar condicionado</h2>
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
        </section>
      ) : (
        <></>
      )}
      {apartments ? (
        <section className="container flex flex-col items-center py-8">
          <h2 className="text-4xl pb-2 mb-4">Apartamentos</h2>
          <Table className="w-full">
            <TableHeader>
              <TableRow>
                <TableHead>Apartamento</TableHead>
                <TableHead>Área</TableHead>
                <TableHead>Quartos</TableHead>
                <TableHead>Banheiros</TableHead>
                <TableHead>Sacada</TableHead>
                <TableHead>Garagem</TableHead>
                <TableHead>Churrasqueira</TableHead>
                <TableHead>Área de Serviço</TableHead>
                <TableHead>Closet</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {apartments.map((apartment) => (
                <TableRow key={apartment.id}>
                  <TableCell className="font-medium">
                    {apartment.name}
                  </TableCell>
                  <TableCell>
                    {apartment.area}m<sup>2</sup>
                  </TableCell>
                  <TableCell>{apartment.bedroomCount}</TableCell>
                  <TableCell>{apartment.bathroomCount}</TableCell>
                  <TableCell>
                    {apartment.hasBalcony ? (
                      <CheckCircle color="green" />
                    ) : (
                      <CircleOff color="red" />
                    )}
                  </TableCell>
                  <TableCell>
                    {apartment.hasGarage ? (
                      <CheckCircle color="green" />
                    ) : (
                      <CircleOff color="red" />
                    )}
                  </TableCell>
                  <TableCell>
                    {apartment.hasBarbecueGrill ? (
                      <CheckCircle color="green" />
                    ) : (
                      <CircleOff color="red" />
                    )}
                  </TableCell>
                  <TableCell>
                    {apartment.hasServiceArea ? (
                      <CheckCircle color="green" />
                    ) : (
                      <CircleOff color="red" />
                    )}
                  </TableCell>
                  <TableCell>
                    {apartment.hasCloset ? (
                      <CheckCircle color="green" />
                    ) : (
                      <CircleOff color="red" />
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </section>
      ) : (
        <></>
      )}
    </main>
  );
}
