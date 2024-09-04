import { type PropertyStatus } from './property-status';

export default interface PropertySummary {
  tag: string;
  name: string;
  status: PropertyStatus;
  minArea: number;
  maxArea: number;
  minBedroomCount: number;
  maxBedroomCount: number;
  documentUUID: string;
  coverDocumentUrl: string;
}
