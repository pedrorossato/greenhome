import { type PropertyDocumentType } from './property-document-type';

export interface PropertyDocument {
  id: number;
  url: string;
  documentUUID: string;
  type: PropertyDocumentType;
}
