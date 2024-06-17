import { type Property } from '../property';

export default interface Building extends Property {
  landingProgress?: number;
  foundationProgress?: number;
  structureProgress?: number;
  masonryProgress?: number;
  eletricProgress?: number;
  hydraulicProgress?: number;
  finishingProgress?: number;
  gym: boolean;
  entranceHall: boolean;
  splitACWaiting: boolean;
  centralGas: boolean;
  intercom: boolean;
  eletronicGate: boolean;
  elevator: boolean;
  bicycleStand: boolean;
  partyHall: boolean;
  playground: boolean;
}
