import { type PropertyStatus } from './property-status';
import { type PropertyType } from './property-type';

export default interface PropertySummary {
  tag: string;
  name: string;
  status: PropertyStatus;
  minArea: number;
  maxArea: number;
  minBedroomCount: number;
  maxBedroomCount: number;
  type: PropertyType;
  documentUUID: string;
  coverDocumentUrl: string;
}
