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

export default function BuildingAmenities({
  building,
}: {
  building: Building;
}): JSX.Element {
  return (
    <>
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
          <Image className="mr-2" width={64} alt="elevator" src={Elevator} />
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
          <Image className="mr-2" width={64} alt="intercom" src={Intercom} />
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
            <h2 className="text-2xl">Espera para A/C split</h2>
          </div>
        </div>
      ) : (
        <></>
      )}
      {building.bicycleStand ? (
        <div className="flex">
          <Image
            className="mr-2"
            width={64}
            alt="bicycleStand"
            src={BicycleStand}
          />
          <div>
            <h2 className="text-2xl">Bicicletário</h2>
            <p>Seguro e funcional</p>
          </div>
        </div>
      ) : (
        <></>
      )}
      {building.partyHall ? (
        <div className="flex">
          <Image className="mr-2" width={64} alt="partyHall" src={PartyHall} />
          <div>
            <h2 className="text-2xl">Salão de Festas</h2>
          </div>
        </div>
      ) : (
        <></>
      )}
      {building.playground ? (
        <div className="flex">
          <Image
            className="mr-2"
            width={64}
            alt="Playground"
            src={Playground}
          />
          <div>
            <h2 className="text-2xl">Playground</h2>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
