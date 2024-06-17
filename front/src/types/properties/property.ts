import { type PropertyStatus } from './property-status';
import { type PropertyType } from './property-type';

export interface Property {
  id?: number;
  name: string;
  tag?: string;
  address: string;
  description: string;
  type: PropertyType;
  status: PropertyStatus;
  latitude?: number;
  longitude?: number;
}
