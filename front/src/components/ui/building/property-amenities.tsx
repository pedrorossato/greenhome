import Image from 'next/image';

import type Building from '@/types/properties/building/building';

import Playground from '../../../../public/brinquedo.png';
import EletronicGate from '../../../../public/eletronicgate.png';
import Elevator from '../../../../public/elevator.png';
import EntranceHall from '../../../../public/entrancehall.png';
import BicycleStand from '../../../../public/estacao-de-bicicletas.png';
import CentralGas from '../../../../public/gascentral.png';
import Gym from '../../../../public/gym.png';
import Intercom from '../../../../public/intercom.png';
import PartyHall from '../../../../public/salao.png';
import SplitACWaiting from '../../../../public/splitACWaiting.png';

interface AmenityCardProps {
  icon: any;
  title: string;
  description?: string;
  alt: string;
}

function AmenityCard({
  icon,
  title,
  description,
  alt,
}: AmenityCardProps): JSX.Element {
  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-all duration-300 group">
      <div className="flex flex-col items-center text-center">
        <div className="bg-white/10 p-3 rounded-lg mb-3 group-hover:bg-white/20 transition-all duration-300">
          <Image
            width={48}
            height={48}
            alt={alt}
            src={icon}
            className="filter brightness-0 invert"
          />
        </div>
        <h3 className="text-white font-semibold text-sm mb-1 group-hover:text-white/90 transition-colors">
          {title}
        </h3>
        {description && (
          <p className="text-gray-300 text-xs leading-relaxed group-hover:text-gray-200 transition-colors">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}

export default function BuildingAmenities({
  building,
}: {
  building: Building;
}): JSX.Element {
  const amenities = [
    {
      condition: building.centralGas,
      icon: CentralGas,
      title: 'Gás Central',
      description: 'Com medidores individuais',
      alt: 'Gás Central',
    },
    {
      condition: building.elevator,
      icon: Elevator,
      title: 'Elevador',
      description: 'Para maior comodidade',
      alt: 'Elevador',
    },
    {
      condition: building.entranceHall,
      icon: EntranceHall,
      title: 'Hall de Entrada',
      description: 'Belo e seguro',
      alt: 'Hall de Entrada',
    },
    {
      condition: building.gym,
      icon: Gym,
      title: 'Academia',
      description: 'Equipamentos modernos',
      alt: 'Academia',
    },
    {
      condition: building.eletronicGate,
      icon: EletronicGate,
      title: 'Portão Eletrônico',
      description: 'Nas garagens',
      alt: 'Portão Eletrônico',
    },
    {
      condition: building.intercom,
      icon: Intercom,
      title: 'Interfones',
      description: 'Sistema de comunicação',
      alt: 'Interfones',
    },
    {
      condition: building.splitACWaiting,
      icon: SplitACWaiting,
      title: 'Espera para A/C Split',
      description: 'Preparado para ar condicionado',
      alt: 'Espera para A/C Split',
    },
    {
      condition: building.bicycleStand,
      icon: BicycleStand,
      title: 'Bicicletário',
      description: 'Seguro e funcional',
      alt: 'Bicicletário',
    },
    {
      condition: building.partyHall,
      icon: PartyHall,
      title: 'Salão de Festas',
      description: 'Espaço para eventos',
      alt: 'Salão de Festas',
    },
    {
      condition: building.playground,
      icon: Playground,
      title: 'Playground',
      description: 'Área de lazer infantil',
      alt: 'Playground',
    },
  ];

  const availableAmenities = amenities.filter((amenity) => amenity.condition);

  if (availableAmenities.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-300 text-lg">
          Nenhuma amenidade disponível no momento.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-4">
      {availableAmenities.map((amenity, index) => (
        <AmenityCard
          key={index}
          icon={amenity.icon}
          title={amenity.title}
          description={amenity.description}
          alt={amenity.alt}
        />
      ))}
    </div>
  );
}
