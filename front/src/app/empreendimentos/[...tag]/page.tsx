import Image from 'next/image';

import PropertyDocumentCarousel from '@/components/carousel/property-document/propert-document-carousel';
import { PropertyMapsComponent } from '@/components/maps/property';
import ApartmentTable from '@/components/table/apartment/apartment-table';

import { fetcher } from '@/services/fetcher';
import type Apartment from '@/types/apartments/apartment';
import type Building from '@/types/properties/building/building';
import { type PropertyDocument } from '@/types/properties/document/property-document';
import { PropertyDocumentType } from '@/types/properties/document/property-document-type';
import { type Property } from '@/types/properties/property';
import {
  PropertyStatus,
  PropertyStatusLabel,
} from '@/types/properties/property-status';
import { PropertyType } from '@/types/properties/property-type';
import { BedDouble, RulerIcon } from 'lucide-react';

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
  const property = await fetcher<Property>(`/property/${params.tag}`, 'GET');

  const [documents, apartments] = await Promise.all([
    fetcher<PropertyDocument[]>(
      `/property/${property.id}/document`,
      'GET',
      undefined,
    ),
    property.type === PropertyType.BUILDING
      ? fetcher<Apartment[]>(
          `/property/${property.id}/apartment`,
          'GET',
          undefined,
        )
      : Promise.resolve(undefined),
  ]);

  const minArea =
    apartments && apartments.length > 0
      ? apartments.reduce((min, apartment) => {
          return apartment.area < min ? apartment.area : min;
        }, apartments[0].area)
      : undefined;

  const maxArea =
    apartments && apartments.length > 0
      ? apartments.reduce((max, apartment) => {
          return apartment.area > max ? apartment.area : max;
        }, apartments[0].area)
      : undefined;

  const minBedroomCount =
    apartments && apartments.length > 0
      ? apartments.reduce((min, apartment) => {
          return apartment.bedroomCount < min ? apartment.bedroomCount : min;
        }, apartments[0].bedroomCount)
      : undefined;

  const maxBedroomCount =
    apartments && apartments.length > 0
      ? apartments.reduce((max, apartment) => {
          return apartment.bedroomCount > max ? apartment.bedroomCount : max;
        }, apartments[0].bedroomCount)
      : undefined;

  const cover = documents.find(
    (doc) => doc.type === PropertyDocumentType.COVER,
  );

  const floorPlants = documents.filter(
    (doc) => doc.type === PropertyDocumentType.FLOOR_PLAN,
  );

  const photos = documents.filter(
    (doc) => doc.type === PropertyDocumentType.GALLERY,
  );

  const videos = documents.filter(
    (doc) => doc.type === PropertyDocumentType.VIDEO,
  );

  const building =
    property.type === PropertyType.BUILDING
      ? (property as Building)
      : undefined;

  const estimatedReleaseDate = building?.estimatedReleaseDate
    ? new Date(building.estimatedReleaseDate.toString())
    : undefined;

  return (
    <main className="text-justify">
      <section className="relative py-48">
        <div
          className="absolute inset-0 bg-cover bg-center filter blur-sm"
          style={{
            backgroundImage: `url(${cover?.url})`,
          }}
        ></div>
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
        <div className="container relative z-10 flex flex-wrap items-center justify-start text-white">
          <h1 className="w-full text-6xl py-4">{property.name}</h1>
          <div className="flex flex-col gap-2">
            <p>{PropertyStatusLabel.get(property.status)}</p>
            {estimatedReleaseDate &&
            property.status === PropertyStatus.CONSTRUCTION &&
            estimatedReleaseDate.getTime() > new Date().getTime() ? (
              <div>
                <p>
                  Previsão de entrega:{' '}
                  {`${
                    estimatedReleaseDate.getMonth() + 1
                  }/${estimatedReleaseDate.getFullYear()}`}
                </p>
              </div>
            ) : (
              <></>
            )}
            <div className="flex flex-row">
              <RulerIcon className="mr-2" />
              <p>
                {minArea}m<sup>2</sup> a {maxArea}m<sup>2</sup>
              </p>
            </div>
            <div className="flex flex-row">
              <BedDouble className="mr-2" />
              <p>
                {minBedroomCount} a {maxBedroomCount} quartos
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="container flex flex-wrap items-center justify-center py-8">
        <p className="w-full mb-14">{property.description}</p>
        <div className="w-full h-96">
          <PropertyMapsComponent properties={[property]} />
        </div>
      </section>

      {building ? (
        <section className="container flex flex-col items-center">
          {/* <h2 className="text-4xl text-center pb-2">Progresso da obra</h2> */}
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
          {/* <h2 className="text-4xl pb-2 mb-4">Comodidades</h2> */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
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
                  <p>Nas garagens</p>
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
                  <h2 className="text-xl">Espera para A/C split</h2>
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
      <ApartmentTable apartments={apartments} />
      <section className="container flex flex-col items-center justify-center py-4">
        <h1 className="text-4xl">Plantas Humanizadas</h1>
        <PropertyDocumentCarousel documents={floorPlants} />
      </section>
      <section className="container flex flex-col items-center justify-center py-4">
        <h1 className="text-4xl">Fotos</h1>
        <PropertyDocumentCarousel documents={photos} />
      </section>
      <section className="container flex flex-col items-center justify-center py-4">
        <h1 className="text-4xl">Vídeos</h1>
        <PropertyDocumentCarousel documents={videos} />
      </section>
    </main>
  );
}
