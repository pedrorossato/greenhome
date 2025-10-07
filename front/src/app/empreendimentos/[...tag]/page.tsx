'use client';

import { FaMapMarker } from 'react-icons/fa';

import GalleryModal from '@/components/gallery-modal/gallery-modal';
import { PropertyMapsComponent } from '@/components/maps/property';
import ApartmentTable from '@/components/table/apartment/apartment-table';
import BuildingAmenities from '@/components/ui/building/property-amenities';

import { fetcher } from '@/services/fetcher';
import type Apartment from '@/types/apartments/apartment';
import type Building from '@/types/properties/building/building';
import { type PropertyDocument } from '@/types/properties/document/property-document';
import { PropertyDocumentType } from '@/types/properties/document/property-document-type';
import { type Property } from '@/types/properties/property';
import {
  PropertyStatus,
  PropertyStatusLabel,
  PropertyStatusColor,
} from '@/types/properties/property-status';
import { PropertyType } from '@/types/properties/property-type';
import { BedDouble, RulerIcon } from 'lucide-react';

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
    <main className="relative min-h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${cover?.url})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/80"></div>
      </div>

      <div className="relative z-10 min-h-screen">
        <div className="container mx-auto px-4 py-12 pb-20">
          <div className="max-w-7xl mx-auto space-y-12">
            <div className="text-center mb-12">
              <span
                className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-4 backdrop-blur-sm border"
                style={{
                  backgroundColor: `${PropertyStatusColor.get(
                    property.status,
                  )}20`,
                  color: PropertyStatusColor.get(property.status),
                  borderColor: `${PropertyStatusColor.get(property.status)}30`,
                }}
              >
                {PropertyStatusLabel.get(property.status)}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                {property.name}
              </h1>
              <p className="text-lg text-gray-200 max-w-4xl mx-auto leading-relaxed mb-8">
                {property.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => {
                    const message = `Olá! Gostaria de agendar uma visita para conhecer o empreendimento ${property.name}.`;
                    const encodedMessage = encodeURIComponent(message);
                    const whatsappUrl = `https://wa.me/5555999531120?text=${encodedMessage}`;
                    window.open(whatsappUrl, '_blank');
                  }}
                  className="bg-primary-blue hover:bg-primary-blue/90 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Agendar Visita
                </button>
                <button
                  onClick={() => {
                    const message = `Olá! Gostaria de receber mais informações sobre o empreendimento ${property.name}.`;
                    const encodedMessage = encodeURIComponent(message);
                    const whatsappUrl = `https://wa.me/5555999531120?text=${encodedMessage}`;
                    window.open(whatsappUrl, '_blank');
                  }}
                  className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 border border-white/30 hover:border-white/50"
                >
                  Mais Informações
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                <div className="flex items-center mb-4">
                  <div className="bg-primary-blue/20 p-3 rounded-xl mr-4 group-hover:bg-primary-blue/30 transition-colors">
                    <FaMapMarker className="text-primary-blue text-xl" />
                  </div>
                  <h3 className="text-white font-semibold text-lg">
                    Localização
                  </h3>
                </div>
                <p className="text-gray-200 text-sm leading-relaxed">
                  {property.address}
                </p>
              </div>

              {minArea && maxArea && (
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                  <div className="flex items-center mb-4">
                    <div className="bg-primary-green/20 p-3 rounded-xl mr-4 group-hover:bg-primary-green/30 transition-colors">
                      <RulerIcon className="text-primary-green text-xl" />
                    </div>
                    <h3 className="text-white font-semibold text-lg">Área</h3>
                  </div>
                  <p className="text-gray-200 text-sm">
                    {minArea}m<sup>2</sup> a {maxArea}m<sup>2</sup>
                  </p>
                </div>
              )}

              {minBedroomCount && maxBedroomCount && (
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                  <div className="flex items-center mb-4">
                    <div className="bg-purple-500/20 p-3 rounded-xl mr-4 group-hover:bg-purple-500/30 transition-colors">
                      <BedDouble className="text-purple-400 text-xl" />
                    </div>
                    <h3 className="text-white font-semibold text-lg">
                      Quartos
                    </h3>
                  </div>
                  <p className="text-gray-200 text-sm">
                    {minBedroomCount} a {maxBedroomCount} quartos
                  </p>
                </div>
              )}

              {estimatedReleaseDate &&
                property.status === PropertyStatus.CONSTRUCTION &&
                estimatedReleaseDate.getTime() > new Date().getTime() && (
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                    <div className="flex items-center mb-4">
                      <div className="bg-green-500/20 p-3 rounded-xl mr-4 group-hover:bg-green-500/30 transition-colors">
                        <div className="w-5 h-5 bg-green-400 rounded-full"></div>
                      </div>
                      <h3 className="text-white font-semibold text-lg">
                        Previsão
                      </h3>
                    </div>
                    <p className="text-gray-200 text-sm">
                      Entrega prevista para{' '}
                      <span className="font-semibold text-green-300">
                        {`${
                          estimatedReleaseDate.getMonth() + 1
                        }/${estimatedReleaseDate.getFullYear()}`}
                      </span>
                    </p>
                  </div>
                )}
            </div>

            {building && (
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">
                  Comodidades e Amenidades
                </h2>
                <BuildingAmenities building={building} />
              </div>
            )}

            {building && (
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
                  Progresso da Obra
                </h2>

                <div className="mb-8">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold text-white">
                      Progresso Geral
                    </h3>
                    <span className="text-2xl font-bold text-green-400">
                      {Math.round(
                        ((building.landingProgress ?? 0) +
                          (building.foundationProgress ?? 0) +
                          (building.structureProgress ?? 0) +
                          (building.masonryProgress ?? 0) +
                          (building.eletricProgress ?? 0) +
                          (building.hydraulicProgress ?? 0) +
                          (building.finishingProgress ?? 0)) /
                          7,
                      )}
                      %
                    </span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-6">
                    <div
                      className="bg-gradient-to-r from-green-500 via-blue-500 to-purple-600 h-6 rounded-full transition-all duration-1000 ease-out"
                      style={{
                        width: `${Math.round(
                          ((building.landingProgress ?? 0) +
                            (building.foundationProgress ?? 0) +
                            (building.structureProgress ?? 0) +
                            (building.masonryProgress ?? 0) +
                            (building.eletricProgress ?? 0) +
                            (building.hydraulicProgress ?? 0) +
                            (building.finishingProgress ?? 0)) /
                            7,
                        )}%`,
                      }}
                    ></div>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
                  <div className="text-center">
                    <div className="text-sm text-gray-300 mb-2">
                      Terraplanagem
                    </div>
                    <div className="text-lg font-bold text-blue-400">
                      {building.landingProgress}%
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-gray-300 mb-2">Fundação</div>
                    <div className="text-lg font-bold text-blue-400">
                      {building.foundationProgress}%
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-gray-300 mb-2">Estrutura</div>
                    <div className="text-lg font-bold text-blue-400">
                      {building.structureProgress}%
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-gray-300 mb-2">Alvenaria</div>
                    <div className="text-lg font-bold text-blue-400">
                      {building.masonryProgress}%
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-gray-300 mb-2">Elétrica</div>
                    <div className="text-lg font-bold text-blue-400">
                      {building.eletricProgress}%
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-gray-300 mb-2">Hidráulica</div>
                    <div className="text-lg font-bold text-blue-400">
                      {building.hydraulicProgress}%
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-gray-300 mb-2">Acabamento</div>
                    <div className="text-lg font-bold text-blue-400">
                      {building.finishingProgress}%
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">
                Localização
              </h2>
              <div className="bg-white/20 rounded-xl overflow-hidden">
                <div className="h-64">
                  <PropertyMapsComponent properties={[property]} />
                </div>
              </div>
            </div>

            {apartments && apartments.length > 0 && (
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">
                  Apartamentos Disponíveis
                </h2>
                <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                  <ApartmentTable apartments={apartments} />
                </div>
              </div>
            )}

            <GalleryModal
              floorPlants={floorPlants}
              photos={photos}
              videos={videos}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
